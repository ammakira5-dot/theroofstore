---
name: Partners & Distributors Network
description: All partner/distributor sites — GMB status, FTP access, duplicate content cleanup, SEO fixes. Updated July 23, 2026.
---

# Partners & Distributors — Brand Network Reference
_Last confirmed by owner: July 23, 2026_

---

## Full Network — GMB Status

| # | Business Name | Website | Phone | GMB |
|---|---------------|---------|-------|-----|
| 1 | **The Roof Store** (HQ) | theroofstore.net | (954) 210-9614 | ✅ Has GMB — **Davie, FL** (owner has full access) |
| 2 | **Roof Restorations and Waterproofing Inc** | roofrestorationsandwaterproofinginc.com | (877) 824-5823 | ✅ Has GMB — **110 E Broward Blvd, Fort Lauderdale, FL 33301** (located inside Atlantic Institute of Oriental Medicine Intern Clinic — shared/virtual address) — 5.0 ⭐ (9 reviews) |
| 3 | **Best Roof Paint and Waterproofing Service** | bestroofpaint.com | (954) 400-1324 | ✅ Has GMB — **5079 SW 48th St, Davie, FL 33314** — 5.0 ⭐ (5 reviews) |
| 4 | **Storm Shield Coating Systems Inc** | flatroofsealants.com | (561) 328-4770 | ✅ Has GMB — LOCKED OUT |
| 5 | **Roof Shield Coating System** | (no website) | (954) 302-5387 | ⚠️ Has GMB — **NO ACCESS** — GMB website field currently points to Facebook Business Manager login URL (broken for prospects). Fix: "Suggest an edit" on Google Maps to change website to theroofstore.net, OR reclaim listing at business.google.com. MapQuest: 4700 Sheridan St, Hollywood FL. Facebook: https://www.facebook.com/p/Roof-Shield-Coating-Systems-100068045314754/ |
| 6 | **Storm Shield Paint Systems Inc** | windproofroofsystems.com | (954) 743-0667 | ✅ Has GMB |
| 7 | **RoofProtect Products** | roofprotectproducts.com | (954) 900-1973 | ✅ Has GMB — **no address listed** (service-area business) — **licensed entity**: holds county-level occupational license + MSDS/SDS compliance required for chemical coating products; works directly with The Roof Store as manufacturer/distributor |
| 8 | **Roof Paint Miami** | roofpaintmiami.com | (786) 837-9064 | ❌ No GMB |
| 9 | **Fort Lauderdale Roof Coating** | ftlauderdaleroofcoating.com | (754) 367-3768 | ❌ No GMB |

**Factory address:** 4700 Sheridan St (Ste G), Hollywood, FL 33021

---

## FTP Access — All Sites

| Site | FTP Host | FTP Username | Secret Name |
|------|----------|--------------|-------------|
| windproofroofsystems.com | ftp.windproofroofsystems.com | Fullstack2@windproofroofsystems.com | WINDPROOF_FTP_PASSWORD |
| roofrestorationsandwaterproofinginc.com | ftp.roofrestorationsandwaterproofinginc.com | roofrestorationsandwaterproofinginc@roofrestorationsandwaterproofinginc.com | RRSW_FTP_PASSWORD |
| roofprotectproducts.com | ftp.absolutecharters.com (port 21) | muhammad@roofprotectproducts.com | ROOFPROTECT_FTP_PASSWORD |
| ftlauderdaleroofcoating.com | ftp.absolutecharters.com (port 21) | julius@absolutecharters.com | JULIUS_FTP_PASSWORD |
| roofpaintmiami.com | ftp.absolutecharters.com (port 21) | julius@absolutecharters.com | JULIUS_FTP_PASSWORD |
| bestroofpaint.com | ftp.absolutecharters.com (port 21) | julius@absolutecharters.com | JULIUS_FTP_PASSWORD |
| flatroofsealants.com | ftp.absolutecharters.com (port 21) | julius@absolutecharters.com | FLATROOF_WP_PASSWORD |
| theroofstore.net (FTP/WordPress blog) | oneworldhosting.com cPanel | — | WP_BLOG_ADMIN_PASSWORD |

**Note:** ROOFPROTECT_FTP_PASSWORD secret stored in Replit has wrong value — actual credentials differ. Update secret when convenient.

---

## Duplicate Content Cleanup — Work Completed July 2026

### windproofroofsystems.com ✅ Done July 14, 2026
- Removed BBB claim from smart-sheild.php and roof-sheild.php
- Corrected phone: 954-900-1973 → **(954) 743-0667** on both product pages
- Removed shared testimonials (Ana Arias, Arlene Kalb, Don Godshall) from index.php
- Removed Testimonials nav link from layout/nav.php
- Verbatim product copy NOT found — descriptions were already tile-restoration-specific
- Partner link in PartnerNetwork.tsx already active (linkPaused: false)

### roofrestorationsandwaterproofinginc.com ✅ Done July 14, 2026
- Corrected phone: 954-900-1973 → **(877) 824-5823** on smart-sheild.php + roof-sheild.php
- Removed BBB claim from smart-sheild.php + roof-sheild.php
- Rewrote product descriptions with unique copy (FungalShield/SmartShield/RoofShield) in index.php
- Removed shared testimonials (Ana Arias, Arlene Kalb, Don Godshall) from index.php
- Removed Testimonials nav link from layout/nav.php + smart-sheild.php + roof-sheild.php

### roofprotectproducts.com ✅ Done July 13, 2026
- Fixed 10 SEO audit issues
- RP1 PDF: now serves fungalshield-info.pdf (was wrong file)
- RP3 PDF: now serves roofshield-info.pdf (was wrong file)
- RP2 SmartShield: unchanged
- Phone (954) 900-1973 kept intentionally — Google Ads call-tracking number
- Phone (954) 210-9614) (The Roof Store) appears only in footer backlink bar

### ftlauderdaleroofcoating.com ✅ Done July 14, 2026
- Fixed page title (domain name + typo removed)
- Fixed meta description (Sherwin Williams reference removed)
- Added canonical, OG tags, RoofingContractor schema
- Fixed footer phone: "tt 754 367 3768" → **(754) 367-3768**
- Added theroofstore.net backlink bar

### roofpaintmiami.com ✅ Done July 14, 2026
- Added missing title + description (were completely absent — critical SEO fix)
- Added doctype/html wrapper (was missing)
- Added canonical, OG tags, RoofingContractor schema
- Added theroofstore.net backlink bar
- Commercial photos still show Broward job sites — need real Miami-Dade photos to replace
- Files to replace on FTP: commercial-flat-roof-replacement-miami-dade.jpg and 8 others + homeshow-small.jpg

### bestroofpaint.com ✅ Done July 14, 2026
- Shortened and cleaned page title
- Improved meta description
- Added canonical, OG tags, RoofingContractor schema
- Added theroofstore.net backlink bar

---

## Locked GMB Recovery Steps

**Roof Shield Coating System** (no account access):
- Quick fix: Google Maps → search listing → "Suggest an edit" → change website to https://www.theroofstore.net (anyone can do this, approved in 24–48 hrs)
- Full reclaim: business.google.com → "Manage now" → search listing → request access → if no response in 7 days, Google transfers ownership

**flatroofsealants.com / Storm Shield Coating Systems** (locked out):
- Try video verification: business.google.com → Get Verified → video option
- Or: Google support chat for reinstatement

---

## Remaining Action Items

| Site | Action | Priority |
|------|--------|----------|
| roofpaintmiami.com | Replace 9 commercial photos with real Miami-Dade job photos | 🔴 High |
| roofpaintmiami.com | Create GMB | 🔴 High |
| ftlauderdaleroofcoating.com | Create GMB | 🔴 High |
| bestroofpaint.com | Add to Google Search Console | 🔴 High |
| roofpaintmiami.com | Add to Google Search Console | 🔴 High |
| flatroofsealants.com | Attempt video verification to recover locked GMB | 🟡 Medium |
| Roof Shield Coating System | Link Facebook/MapQuest listing to theroofstore.net | 🟡 Medium |
| roofpaintmiami.com | Expand FAQ + commercial page content | 🟡 Medium |
| roofprotectproducts.com | Update ROOFPROTECT_FTP_PASSWORD secret to correct value | 🟡 Medium |

---

## Relevance to Legal Case (theroof.store)
- 7 GMB listings all tied to 4700 Sheridan St factory — documented physical presence predating theroof.store (est. Aug 2021)
- Backlink bars on all sister sites link to theroofstore.net — reinforces which entity is the brand authority
- Unique content, corrected phones, and removed shared testimonials eliminate duplicate-content penalties that were suppressing theroofstore.net's domain authority
- Combined network = multi-platform, multi-site evidence of prior commercial use across South Florida
