/**
 * refresh-city-images.ts
 *
 * Re-downloads all city/county images from Unsplash into
 * artifacts/roof-store/public/images/cities/
 *
 * Usage:
 *   pnpm --filter @workspace/scripts run refresh-city-images
 *
 * Pass --force to re-download images that already exist locally.
 * Pass --verify to validate JPEG magic bytes on all existing files without downloading.
 */

import { createWriteStream, existsSync, mkdirSync, unlinkSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import https from "node:https";
import http from "node:http";

const __dirname = dirname(fileURLToPath(import.meta.url));

const DEST_DIR = join(
  __dirname,
  "../../artifacts/roof-store/public/images/cities"
);

const UNSPLASH_PARAMS = "?auto=format&fit=crop&w=1400&q=80";

const IMAGES: Array<{ id: string; description: string }> = [
  { id: "1416339306562-f3d12fefd36f", description: "Green park landscape" },
  { id: "1448630360428-65456885c650", description: "Suburban residential street" },
  { id: "1464226184884-fa280b87c399", description: "Farm fields" },
  { id: "1477959858617-67f85cf4f1df", description: "City sunrise" },
  { id: "1484199383121-dfa3c30608cd", description: "Fort Lauderdale coastline aerial" },
  { id: "1486325212027-8081e485255e", description: "Corporate office park" },
  { id: "1489824904134-891ab64532f1", description: "Suburban home" },
  { id: "1500076656116-558758c991c1", description: "Farm fields at golden hour" },
  { id: "1500382017468-9049fed747ef", description: "Vast farm fields sunrise" },
  { id: "1501594907352-04cda38ebc29", description: "Serene green park" },
  { id: "1501854140801-50d01698950b", description: "Tropical South Florida landscape aerial" },
  { id: "1506966953602-c20cc11f75e3", description: "Miami area skyline from the bay" },
  { id: "1507003211169-0a1dd7228f2d", description: "Reflective lake" },
  { id: "1512936702668-1ab037aced2a", description: "Miami Beach barrier island" },
  { id: "1513907404652-d138942b8859", description: "Coconut palm at water's edge" },
  { id: "1514214246283-d427a95c5d2f", description: "Tropical palms beside South Florida building" },
  { id: "1519500900873-696f4e3171de", description: "Florida Keys aerial" },
  { id: "1520520731457-9283dd14aa66", description: "Canoe near tropical palm" },
  { id: "1524594081293-190a2fe0baae", description: "Tropical palms" },
  { id: "1530686577637-0ccce382b327", description: "Miami skyline at night" },
  { id: "1531429957-9e7c26e39c84", description: "Key West sailboat" },
  { id: "1533106497176-45ae19e68ba2", description: "South Beach street scene" },
  { id: "1535498730771-e735b998cd64", description: "Miami skyline Biscayne Bay" },
  { id: "1538016298852-e69a243f7ee2", description: "Fort Lauderdale river aerial" },
  { id: "1544665215-3871472514fa", description: "Coastal waterway" },
  { id: "1545324418-cc1a3fa10c00", description: "Colorful Latin neighborhood" },
  { id: "1548574505-5e239809ee19", description: "Tropical coastal waters" },
  { id: "1553284965-83fd3e82fa5a", description: "Horses in green field" },
  { id: "1555396273-367ea4eb4db5", description: "Colorful vibrant street" },
  { id: "1558618666-fcd25c85cd64", description: "South Florida suburban neighborhood aerial" },
  { id: "1559494007-9f5847c49d94", description: "Tranquil lake with dock" },
  { id: "1560185007-5f0bb1866cab", description: "Upscale suburban South Florida home" },
  { id: "1560518883-ce09059eeffa", description: "South Florida home exterior" },
  { id: "1562517634-baa2da3acfbf", description: "South Florida beachside buildings aerial" },
  { id: "1563714104487-2d992b91aeb9", description: "Coastal waterfront" },
  { id: "1564013799919-ab600027ffc6", description: "Suburban home with pool" },
  { id: "1568605114967-8130f3a36994", description: "Quiet suburban home exterior" },
  { id: "1570111684787-0c62fa8fbc1b", description: "Classic coastal lighthouse" },
  { id: "1570129477492-45c003edd2be", description: "Suburban home exterior" },
  { id: "1573220983618-156ea86f9c17", description: "Golden hour South Florida beach" },
  { id: "1574169208507-84376144848b", description: "Tropical farmland" },
  { id: "1576123300830-fe145f281d12", description: "Coastal lighthouse" },
  { id: "1576124907498-5c384cd85616", description: "Palm Beach architecture at night" },
  { id: "1576124908098-b386317d160f", description: "Water fountain in South Florida park" },
  { id: "1583608205776-bfd35f0d9f83", description: "Suburban neighborhood street" },
  { id: "1584677488802-c080664c7c45", description: "West Palm Beach waterfront" },
  { id: "1587584398227-7920a80b30dc", description: "South Florida beach people" },
  { id: "1589083130544-0d6a2926e519", description: "Miami Beach cityscape aerial" },
  { id: "1590523277543-a94d2e4eb00b", description: "Coastal South Florida aerial" },
  { id: "1597535973747-951442d5dbc7", description: "Miami high-rise towers" },
  { id: "1599509033274-4d2128aa81e2", description: "Beach volleyball South Florida" },
  { id: "1605723517503-3cadb5818a0c", description: "Tropical palms golden hour" },
  { id: "1617202830798-cf48261fb70d", description: "Palm tree silhouette sunset" },
  { id: "1625602812206-5ec545ca1231", description: "Quiet residential street" },
  { id: "1628651102070-2df2c7d93f51", description: "Florida coastal sky and sea" },
  { id: "1649357675339-53af4a244a0a", description: "Waterfront pier South Florida" },
  { id: "1664829018245-04b94e17b8aa", description: "West Palm Beach waterfront night" },
  { id: "1669639785616-3353f0f11de7", description: "Tropical beach golden sunset" },
  { id: "1691423332423-f2132628ff72", description: "South Florida city skyline beach" },
  { id: "1692678813200-d746a746bf07", description: "Palm trees beach sidewalk" },
  { id: "1738654942907-e79039dc247f", description: "Boca Raton beach aerial" },
  { id: "1740990556921-6131d2a9d16c", description: "Overseas Highway ocean aerial" },
  { id: "1754269675202-6fb0016d9f21", description: "Miami Beach skyline aerial" },
];

const JPEG_MAGIC = Buffer.from([0xff, 0xd8, 0xff]);

function isValidJpeg(filePath: string): boolean {
  try {
    const header = readFileSync(filePath, { flag: "r" }).slice(0, 3);
    return header.equals(JPEG_MAGIC);
  } catch {
    return false;
  }
}

function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(dest);
    const protocol = url.startsWith("https") ? https : http;

    const request = protocol.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; roof-store-image-refresh/1.0)",
        },
      },
      (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          file.close();
          if (existsSync(dest)) unlinkSync(dest);
          downloadFile(response.headers.location!, dest).then(resolve, reject);
          return;
        }

        if (response.statusCode !== 200) {
          file.close();
          if (existsSync(dest)) unlinkSync(dest);
          reject(new Error(`HTTP ${response.statusCode} for ${url}`));
          return;
        }

        const contentType = response.headers["content-type"] ?? "";
        if (!contentType.startsWith("image/")) {
          file.close();
          if (existsSync(dest)) unlinkSync(dest);
          reject(
            new Error(
              `Non-image content-type "${contentType}" for ${url}`
            )
          );
          return;
        }

        response.pipe(file);
        file.on("finish", () => {
          file.close(() => {
            if (!isValidJpeg(dest)) {
              unlinkSync(dest);
              reject(new Error(`Downloaded file is not a valid JPEG: ${url}`));
            } else {
              resolve();
            }
          });
        });
      }
    );

    request.on("error", (err) => {
      file.close();
      if (existsSync(dest)) unlinkSync(dest);
      reject(err);
    });

    request.setTimeout(30_000, () => {
      request.destroy();
      file.close();
      if (existsSync(dest)) unlinkSync(dest);
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function verifyAll() {
  mkdirSync(DEST_DIR, { recursive: true });
  let bad = 0;
  for (const { id } of IMAGES) {
    const dest = join(DEST_DIR, `${id}.jpg`);
    if (!existsSync(dest)) {
      console.error(`  MISSING  ${id}.jpg`);
      bad++;
    } else if (!isValidJpeg(dest)) {
      console.error(`  INVALID  ${id}.jpg  (not a valid JPEG)`);
      bad++;
    } else {
      console.log(`      ok   ${id}.jpg`);
    }
  }
  if (bad > 0) {
    console.error(`\n${bad} file(s) are missing or invalid. Run without --verify to fix.`);
    process.exit(1);
  } else {
    console.log(`\nAll ${IMAGES.length} images are valid JPEGs.`);
  }
}

async function main() {
  if (process.argv.includes("--verify")) {
    await verifyAll();
    return;
  }

  mkdirSync(DEST_DIR, { recursive: true });

  const force = process.argv.includes("--force");

  const tasks = IMAGES.map(async ({ id, description }) => {
    const url = `https://images.unsplash.com/photo-${id}${UNSPLASH_PARAMS}`;
    const dest = join(DEST_DIR, `${id}.jpg`);

    if (!force && existsSync(dest) && isValidJpeg(dest)) {
      console.log(`  skip  ${id}.jpg (already exists)`);
      return { id, status: "skipped" as const };
    }

    try {
      await downloadFile(url, dest);
      console.log(`    ok  ${id}.jpg  — ${description}`);
      return { id, status: "ok" as const };
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`  FAIL  ${id}.jpg  — ${msg}`);
      return { id, status: "failed" as const, error: msg };
    }
  });

  const results = await Promise.all(tasks);

  const ok = results.filter((r) => r.status === "ok").length;
  const skipped = results.filter((r) => r.status === "skipped").length;
  const failed = results.filter((r) => r.status === "failed");

  console.log(
    `\nDone. ${ok} downloaded, ${skipped} skipped, ${failed.length} failed.`
  );

  if (failed.length > 0) {
    console.error("\nFailed images:");
    for (const f of failed) {
      console.error(`  ${f.id}: ${"error" in f ? f.error : "unknown error"}`);
    }
    process.exit(1);
  }
}

main();
