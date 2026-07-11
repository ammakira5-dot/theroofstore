import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import { allRoutes } from "./routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(
  __dirname,
  "../../artifacts/roof-store/dist/public",
);

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".json": "application/json",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

function sendFile(filePath: string, res: http.ServerResponse) {
  const ext = path.extname(filePath).toLowerCase();
  res.setHeader("Content-Type", MIME_TYPES[ext] || "application/octet-stream");
  fs.createReadStream(filePath).pipe(res);
}

function createStaticServer(rootDir: string, pristineShell: string) {
  return http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);

    // Any extensionless path is a client-side route, not a real asset — always
    // boot it from the pristine, never-mutated shell. Serving the on-disk
    // index.html here would be wrong once prerendering starts overwriting it
    // with rendered output, which would contaminate every later route's
    // initial <head> with stale tags Helmet doesn't know to clean up.
    if (!path.extname(urlPath)) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.end(pristineShell);
    }

    const filePath = path.join(rootDir, urlPath);
    if (
      filePath.startsWith(rootDir) &&
      fs.existsSync(filePath) &&
      fs.statSync(filePath).isFile()
    ) {
      return sendFile(filePath, res);
    }

    res.statusCode = 404;
    return res.end("Not found");
  });
}

async function main() {
  if (!fs.existsSync(path.join(DIST_DIR, "index.html"))) {
    throw new Error(
      `No build found at ${DIST_DIR} — run "vite build" before prerendering.`,
    );
  }

  // dist/public/index.html gets overwritten with rendered output when we
  // prerender "/" itself, so it can never be trusted as the pristine shell on
  // a resumed/retried run — always snapshot a fresh backup from the current
  // vite build's index.html (captured here, before "/" is prerendered).
  // IMPORTANT: always overwrite — never skip if the file exists. A stale
  // backup from a previous build carries old asset hashes; when vite rebuilds
  // with new hashes the stale shell causes JS 404s and a blank page sitewide.
  const shellBackupPath = path.join(DIST_DIR, "..", ".prerender-shell-backup.html");
  fs.copyFileSync(path.join(DIST_DIR, "index.html"), shellBackupPath);
  const pristineShell = fs.readFileSync(shellBackupPath, "utf-8");
  const server = createStaticServer(DIST_DIR, pristineShell);
  const port = await new Promise<number>((resolvePort) => {
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (address && typeof address === "object") resolvePort(address.port);
    });
  });
  const baseUrl = `http://127.0.0.1:${port}`;

  const executablePath =
    process.env.REPLIT_PLAYWRIGHT_CHROMIUM_EXECUTABLE ||
    process.env.PLAYWRIGHT_CHROMIUM_PATH;
  const browser = await chromium.launch(
    executablePath ? { executablePath } : undefined,
  );
  const page = await browser.newPage();

  // Block third-party network calls (Google Maps, fonts CDNs, analytics) —
  // irrelevant to the crawlable text/schema content we're snapshotting, and
  // they can otherwise stall page load waiting on external network activity.
  await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, (route) => route.abort());

  let ok = 0;
  let failed = 0;

  for (const route of allRoutes) {
    const outPath =
      route.loc === "/"
        ? path.join(DIST_DIR, "index.html")
        : path.join(DIST_DIR, route.loc, "index.html");

    if (route.loc !== "/" && fs.existsSync(outPath) && !process.env.PRERENDER_FORCE) {
      ok++;
      continue;
    }

    try {
      await page.goto(`${baseUrl}${route.loc}`, {
        waitUntil: "load",
        timeout: 30000,
      });
      // Give React a beat to finish mounting/rendering after load.
      await page.waitForTimeout(400);
      const html = await page.content();

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, "utf-8");
      ok++;
    } catch (err) {
      failed++;
      console.error(`Failed to prerender ${route.loc}:`, err);
    }
  }

  await browser.close();
  server.close();

  console.log(`Prerendered ${ok}/${allRoutes.length} routes (${failed} failed).`);
  if (failed > 0) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
