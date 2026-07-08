import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const CHROMIUM_EXECUTABLE = "/nix/store/qa9cnw4v5xkxyip6mb9kxqfq1z4x2dx1-chromium-138.0.7204.100/bin/chromium";
const PAGE_URL = "http://localhost:80/trademark-evidence-file";
const OUTPUT_DIR = path.resolve(import.meta.dirname, "../../attached_assets/exports");

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const dateStamp = new Date().toISOString().slice(0, 10);
  const outputPath = path.join(OUTPUT_DIR, `roofstore-trademark-evidence-${dateStamp}.pdf`);

  const browser = await chromium.launch({
    executablePath: CHROMIUM_EXECUTABLE,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.goto(PAGE_URL, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });

    await page.pdf({
      path: outputPath,
      format: "Letter",
      printBackground: true,
      margin: { top: "0.4in", bottom: "0.4in", left: "0.4in", right: "0.4in" },
    });

    console.log(`PDF generated: ${outputPath}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
