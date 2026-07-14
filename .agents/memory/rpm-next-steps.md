---
name: roofpaintmiami.com next steps
description: Active work queue for roofpaintmiami.com — resume here each session; FTP access + exact task queue.
---

# roofpaintmiami.com — Resume Point

_Last updated: July 14, 2026_

## FTP Access
- **Host:** `ftp.absolutecharters.com:21`
- **User:** `julius@absolutecharters.com`
- **Secret:** `JULIUS_FTP_PASSWORD`
- **Python pattern:** `ftplib.FTP_TLS` with `ctx.check_hostname=False`, `ctx.verify_mode=ssl.CERT_NONE`
- **Site root on server:** `roofpaintmiami.com/`

## What's Done (July 14, 2026)
- ✅ SEO audit complete: title/desc/canonical/OG/schema added (were completely missing)
- ✅ 6 inner pages fixed: unique titles/descs/canonicals, 101 stuffed alt tags cleaned
- ✅ header.php updated to support per-page PHP variables ($page_title, $page_desc, $page_canonical)
- ✅ 8 commercial images renamed from Broward to Miami-Dade geography on FTP
- ✅ Banner image replaced: `images/rooftony-small.jpg` replaced with Sivi-generated photo of roofer on Miami flat roof (top-aligned crop, 755×174px)
- ✅ Backlink bar to theroofstore.net added
- ✅ Homepage H1 geo-keyword: "Roof Coating Services in Miami-Dade County" added

## Next Session Queue (in priority order)

### 1. FAQ page expansion
- Current state: 143 words — very thin
- Goal: 800+ words with Miami-specific Q&A
- File on server: `faq.php`
- Local working copy: `/tmp/rpm_fixed_faq.php` (may be stale — re-fetch from FTP)
- Content angles: hurricane season, Miami-Dade building codes, heat/humidity, flat roof prevalence in Miami

### 2. Dead footer links — roofing-products.php
- Two broken links to remove:
  - `http://www.theroofstore.net/franchise-business-opportunity.html`
  - `http://www.theroofstore.net/investor.html`
- File: `roofing-products.php`
- Local working copy: `/tmp/rpm_fixed_roofing-products.php` (may be stale)

### 3. Commercial page expansion
- Current state: ~240 words — thin
- Goal: 600+ words
- File: `commercial.php`
- Local working copy: `/tmp/rpm_fixed_commercial.php` (may be stale)

### 4. Miami neighborhood city pages
- Competitor biggreenmen.com has multiple sub-pages for Miami neighborhoods
- Target neighborhoods: Coral Gables, Hialeah, Kendall, Doral, Homestead, North Miami, Aventura, Coconut Grove
- Format: individual PHP pages with unique geo-targeted content
- biggreenmen.com blocks scrapers (406 error) — can't scrape their structure

### 5. GMB setup for roofpaintmiami.com
- No GMB exists yet
- Steps documented in replit.md pending to-do list
- Phone: (786) 837-9064
- Category: Roofing Contractor, Service-Area Business (Miami-Dade County)
- Owner action required (can't be done by agent)

### 6. Replace commercial photo content
- 8 images renamed to Miami-Dade geography but still SHOW Broward job sites
- Replace with real Miami-Dade job photos when available
- Files list in replit.md pending to-do

## Shared Content Still Needing Fix
- rpm H1 `"The Liquid Rubber Roof Silicone" TM` is shared across rrsw and windproof — unique version needed
- MSDS PDF identical to TRS but TRS doesn't link to it publicly — low risk, monitor

## Key Facts
- rpm phone: **(786) 837-9064** (Miami area code — keep as-is, do NOT use TRS numbers)
- rpm is meant to look like an independent Miami-Dade competitor to Google
- No TRS branding should appear anywhere on rpm
