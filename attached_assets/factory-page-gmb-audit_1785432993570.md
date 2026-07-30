# /factory as the GMB "Website" Link — Is It OK, and What to Fix

**GMB listing:** "The Roof Store Waterproofing Products" → linked to `https://www.theroofstore.net/factory`

## 1. Is It OK for Google?

**Mostly yes, with one real problem.** The page itself is well-built — indexable, canonical, LocalBusiness + BreadcrumbList schema, 1,063 words, clean heading structure, and a strong title/meta description. The actual issue is an **entity name mismatch**:

| Field | Your GMB Listing | /factory's Schema |
|---|---|---|
| Business name | **The Roof Store Waterproofing Products** | **RoofProtect Products — Manufacturing Facility** |
| Address | (your GMB address) | City/state/zip only — **no street address** |
| Schema type | (GMB category) | Generic `LocalBusiness` |

Your homepage's schema, by contrast, already declares the name **"The Roof Store Waterproofing Products"** — an exact match to your GMB listing.

**Why this matters:** Google cross-checks a Business Profile's name/address against the linked website's on-page and structured-data signals to confirm it's the same business. Right now, clicking through from "The Roof Store Waterproofing Products" lands on a page whose own schema says it's a *different* named entity ("RoofProtect Products — Manufacturing Facility") with an incomplete address. That's not a hard penalty, but it's a missed trust signal and a real inconsistency Google's entity-matching can pick up on — exactly the kind of thing worth closing given the trademark/confusingly-similar-domain situation you're already managing.

## 2. Is It OK for Potential Customers?

**Yes, and it's actually one of the stronger pages on the site.** It has the "What brings you here?" fork (installation vs. already-have-a-contractor vs. buy direct) that we flagged earlier as the site's best conversion pattern, plus real trust signals up top (30+ years, A+ BBB, TAS-106, 135+ MPH) before any sales pitch.

One soft issue: a chunk of the page (facility photo tour, "Become a Distributor") is framed for a B2B/investor audience, which is a bit of a mixed signal for a homeowner clicking a Google Business Profile expecting to book a roof job. It doesn't break the page, but it's not purely customer-first framing either.

## 3. Technical Changes to Make

1. **Rename the LocalBusiness entity on /factory** to match the GMB listing exactly:
   ```json
   "name": "The Roof Store Waterproofing Products",
   "alternateName": "RoofProtect Products — Manufacturing Facility"
   ```
   (Keep the manufacturing name as `alternateName` if you want to preserve that context — just don't lead with it as the primary `name`.)

2. **Complete the address block** to match the homepage's full NAP:
   ```json
   "address": {
     "@type": "PostalAddress",
     "streetAddress": "4801 S University Dr",
     "addressLocality": "Davie",
     "addressRegion": "FL",
     "postalCode": "33328",
     "addressCountry": "US"
   }
   ```

3. **Switch the schema `@type`** from generic `LocalBusiness` to `RoofingContractor` — matching the homepage's type so Google treats this as the same category of business, not a separate one.

4. **Link the entity graph explicitly** (optional but recommended): give the homepage's Organization/RoofingContractor node a stable `@id` and reference it from `/factory`'s schema (`"isPartOf"` or a matching `@id`) so Google reads /factory as a page *of* the same business rather than a second, distinct LocalBusiness.

5. **Double-check your GMB's listed street address and phone** match exactly what's now on /factory and Home (4801 S University Drive, Davie, FL 33328 · 954-210-9614) — even small formatting differences (Dr. vs Drive) can weaken NAP consistency.

Once the name/address/type match, /factory remains a good choice for the GMB link — the fix is aligning its schema, not necessarily changing which page you point to.