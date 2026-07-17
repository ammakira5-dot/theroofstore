import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../../artifacts/roof-store/public/images/og");

interface OgConfig {
  filename: string;
  headline: string;
  sub: string;
  badge: string;
}

const pages: OgConfig[] = [
  {
    filename: "pricing.jpg",
    headline: "Roof Coating Prices in South Florida",
    sub: "Per sq ft — Fungal Shield · Smart Shield · Roof Shield · Labor & materials included",
    badge: "Factory Price Menu",
  },
  {
    filename: "faq.jpg",
    headline: "Roof Coating FAQ — Florida Homeowners' Top Questions",
    sub: "30 years of South Florida roofing expertise. Honest answers on coating, insurance & hurricanes.",
    badge: "Free Consultation",
  },
  {
    filename: "blog.jpg",
    headline: "The Roof Store Blog",
    sub: "Florida insurance law · Hurricane protection · Roof coating guides · Citizens Insurance",
    badge: "Knowledge Base",
  },
  {
    filename: "broward-county.jpg",
    headline: "Roof Coating Contractor — Broward County, FL",
    sub: "Fort Lauderdale · Coral Springs · Pembroke Pines · Hollywood · Plantation · 30+ cities",
    badge: "Service Area",
  },
  {
    filename: "miami-dade-county.jpg",
    headline: "Roof Coating Contractor — Miami-Dade County, FL",
    sub: "Miami · Coral Gables · Homestead · Hialeah · Kendall · Doral · 30+ cities",
    badge: "Service Area",
  },
  {
    filename: "palm-beach-county.jpg",
    headline: "Roof Coating Contractor — Palm Beach County, FL",
    sub: "West Palm Beach · Boca Raton · Delray Beach · Boynton Beach · Lake Worth · 20+ cities",
    badge: "Service Area",
  },
];

function buildHtml(cfg: OgConfig): string {
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px;
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 55%, #1d4ed8 100%);
    font-family: Georgia, 'Times New Roman', serif;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 56px 80px 52px;
    overflow: hidden;
    position: relative;
  }
  body::after {
    content: '';
    position: absolute;
    right: -80px; bottom: -80px;
    width: 420px; height: 420px;
    border-radius: 50%;
    background: rgba(255,255,255,0.04);
    pointer-events: none;
  }
  body::before {
    content: '';
    position: absolute;
    right: 60px; top: -60px;
    width: 240px; height: 240px;
    border-radius: 50%;
    background: rgba(255,255,255,0.03);
    pointer-events: none;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .logo-block { }
  .logo {
    font-family: Georgia, serif;
    font-size: 22px;
    font-weight: bold;
    color: white;
    letter-spacing: 0.02em;
  }
  .logo-sub {
    font-family: 'Arial', sans-serif;
    font-size: 12px;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: 4px;
  }
  .badge {
    background: rgba(251, 146, 60, 0.85);
    border-radius: 8px;
    padding: 7px 18px;
    font-family: Arial, sans-serif;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: white;
    white-space: nowrap;
  }
  .mid { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 24px 0 20px; }
  .accent-line {
    height: 5px; width: 72px;
    background: #fb923c;
    border-radius: 3px;
    margin-bottom: 22px;
  }
  .headline {
    font-size: 50px;
    font-weight: bold;
    line-height: 1.12;
    max-width: 900px;
    color: white;
  }
  .sub {
    font-family: Arial, sans-serif;
    font-size: 20px;
    color: rgba(255,255,255,0.72);
    margin-top: 18px;
    max-width: 860px;
    line-height: 1.45;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255,255,255,0.15);
    padding-top: 18px;
  }
  .contact {
    font-family: Arial, sans-serif;
    font-size: 17px;
    font-weight: bold;
    color: rgba(255,255,255,0.85);
    letter-spacing: 0.01em;
  }
  .since {
    font-family: Arial, sans-serif;
    font-size: 13px;
    color: rgba(255,255,255,0.45);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
</style>
</head>
<body>
  <div class="top">
    <div class="logo-block">
      <div class="logo">The Roof Store</div>
      <div class="logo-sub">Storm Shield Paint Systems Inc. · Davie, FL</div>
    </div>
    <div class="badge">${esc(cfg.badge)}</div>
  </div>
  <div class="mid">
    <div class="accent-line"></div>
    <div class="headline">${esc(cfg.headline)}</div>
    <div class="sub">${esc(cfg.sub)}</div>
  </div>
  <div class="footer">
    <div class="contact">954-210-9614 · theroofstore.net</div>
    <div class="since">A+ BBB · Licensed & Insured · Since 1994</div>
  </div>
</body>
</html>`;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });

  for (const cfg of pages) {
    console.log(`Generating ${cfg.filename}…`);
    await page.setContent(buildHtml(cfg), { waitUntil: "domcontentloaded" });
    const outPath = path.join(OUT_DIR, cfg.filename);
    await page.screenshot({ path: outPath, type: "jpeg", quality: 92 });
    console.log(`  ✓ Saved → ${outPath}`);
  }

  await browser.close();
  console.log(`\nDone — ${pages.length} OG images generated in ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
