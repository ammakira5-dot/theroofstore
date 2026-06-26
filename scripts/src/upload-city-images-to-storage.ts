/**
 * upload-city-images-to-storage.ts
 *
 * Uploads locally cached city images into App Storage (GCS).
 * Images are uploaded to the first PUBLIC_OBJECT_SEARCH_PATHS prefix under
 * the sub-path `cities/<id>.jpg`, so they are served at:
 *   GET /api/storage/public-objects/cities/<id>.jpg
 *
 * NOTE: The local city image files (`artifacts/roof-store/public/images/cities/`)
 * have been removed from the repo — they are now served exclusively from the CDN
 * via App Storage. To re-upload images, first run `refresh-city-images` to
 * re-download them locally, then run this script.
 *
 * Usage:
 *   pnpm --filter @workspace/scripts run refresh-city-images   # download from Unsplash
 *   pnpm --filter @workspace/scripts run upload-city-images-to-storage  # upload to GCS
 *
 * Pass --force to re-upload images that already exist in storage.
 */

import { createReadStream, existsSync, readdirSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { Storage } from "@google-cloud/storage";

const __dirname = dirname(fileURLToPath(import.meta.url));

const LOCAL_DIR = join(
  __dirname,
  "../../artifacts/roof-store/public/images/cities"
);

const REPLIT_SIDECAR_ENDPOINT = "http://127.0.0.1:1106";

const storageClient = new Storage({
  credentials: {
    audience: "replit",
    subject_token_type: "access_token",
    token_url: `${REPLIT_SIDECAR_ENDPOINT}/token`,
    type: "external_account",
    credential_source: {
      url: `${REPLIT_SIDECAR_ENDPOINT}/credential`,
      format: {
        type: "json",
        subject_token_field_name: "access_token",
      },
    },
    universe_domain: "googleapis.com",
  },
  projectId: "",
});

function parseGcsPath(path: string): { bucketName: string; prefix: string } {
  if (!path.startsWith("/")) path = `/${path}`;
  const parts = path.split("/");
  return {
    bucketName: parts[1],
    prefix: parts.slice(2).join("/"),
  };
}

function getPublicSearchPath(): { bucketName: string; prefix: string } {
  const pathsStr = process.env.PUBLIC_OBJECT_SEARCH_PATHS ?? "";
  const first = pathsStr.split(",").map((p) => p.trim()).filter(Boolean)[0];
  if (!first) {
    throw new Error(
      "PUBLIC_OBJECT_SEARCH_PATHS is not set. Run setupObjectStorage() first."
    );
  }
  return parseGcsPath(first);
}

async function uploadFile(
  localPath: string,
  gcsObjectName: string,
  bucketName: string,
  force: boolean
): Promise<"ok" | "skipped" | "failed"> {
  const bucket = storageClient.bucket(bucketName);
  const file = bucket.file(gcsObjectName);

  if (!force) {
    const [exists] = await file.exists();
    if (exists) {
      console.log(`  skip  ${basename(localPath)} (already in storage)`);
      return "skipped";
    }
  }

  try {
    await bucket.upload(localPath, {
      destination: gcsObjectName,
      metadata: {
        contentType: "image/jpeg",
        cacheControl: "public, max-age=31536000",
      },
    });
    console.log(`    ok  ${basename(localPath)}`);
    return "ok";
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`  FAIL  ${basename(localPath)} — ${msg}`);
    return "failed";
  }
}

async function main() {
  const force = process.argv.includes("--force");
  const { bucketName, prefix } = getPublicSearchPath();

  if (!existsSync(LOCAL_DIR)) {
    console.error(`Local image directory not found: ${LOCAL_DIR}`);
    console.error(
      "The local city images are no longer stored in the repo. " +
      "Run `pnpm --filter @workspace/scripts run refresh-city-images` first to re-download them locally, " +
      "then re-run this script."
    );
    process.exit(1);
  }

  const files = readdirSync(LOCAL_DIR).filter((f) => f.endsWith(".jpg"));
  if (files.length === 0) {
    console.error("No .jpg files found in local directory.");
    process.exit(1);
  }

  console.log(
    `Uploading ${files.length} images to gs://${bucketName}/${prefix}/cities/ ...`
  );

  const tasks = files.map(async (filename) => {
    const localPath = join(LOCAL_DIR, filename);
    const objectName = prefix ? `${prefix}/cities/${filename}` : `cities/${filename}`;
    return uploadFile(localPath, objectName, bucketName, force);
  });

  const results = await Promise.all(tasks);

  const ok = results.filter((r) => r === "ok").length;
  const skipped = results.filter((r) => r === "skipped").length;
  const failed = results.filter((r) => r === "failed").length;

  console.log(`\nDone. ${ok} uploaded, ${skipped} skipped, ${failed} failed.`);

  if (failed > 0) {
    process.exit(1);
  }
}

main();
