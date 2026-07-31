# theroofstore.net — Buyer-Path & Navigation Audit

## What "two plus one" means on this site
The homepage hero and the mid-page "Manufacturer. Contractor. Direct Seller." section define the buyer segmentation:

| # | Buyer type | Primary CTA on hero | Destination |
|---|---|---|---|
| 1 | **Homeowners & businesses** — want full installation | "We Install It — Free Contracting Estimate" | `/contact` |
| 2 | **Contractors & DIY** — want to buy the product only | "Buy the Product — Ship or Pickup" | `/shop` |
| +1 | **Undecided** — not sure which path yet | "Get both quotes... and decide later" | `/contact` |

The mid-page section restates this as three "Options," but Option 3 introduces a variant that doesn't map cleanly onto the hero's two-plus-one framing (see Finding 2 below).

## Verdict
Partially followed. The **hero framing is strong** — two buyer types are named explicitly, with a clear bridge for the undecided visitor. But the segmentation **does not carry through the rest of the site**, and one of the three mid-page options points to an inconsistent destination. That reintroduces the exact ambiguity the two-plus-one framing was meant to remove.

## Findings

### 1. Persistent navigation doesn't reflect any buyer path (High priority)
The top nav bar (`About Us`, `Roof Systems`, `Service Areas`, `Reviews`, `Contact Us`, plus `Products` / `More` dropdowns) is organized by content type, not by buyer intent. There is **no persistent "Shop" or "Get a Quote" link** in the main nav. A Buyer-2 (Contractor/DIY) visitor who lands on any inner page (e.g. `/about`, `/roof-systems`) has no direct path back to purchasing — they'd need to return to the homepage to find the "Buy the Product" button. The buyer-path clarity that exists in the hero is lost as soon as someone navigates one click deep.

### 2. Option 3's destination is inconsistent between pages (High priority)
- On the **homepage**, Option 3 ("Buy & Use Your Own Installer") links to `/products` (general catalog).
- On the **`/products` page itself**, the equivalent Option 3 ("Buy & Use Your Own Contractor") links to `/products/roofshield` (one single SKU, Roof Shield only).

A visitor choosing "buy and use my own installer" could reasonably want any of the three systems (Fungal Shield, Smart Shield, Roof Shield), not just Roof Shield. This is the kind of ambiguity the buyer-segmentation rule was meant to eliminate, and it currently exists inside the very section built to prevent it.

### 3. Two different "buy" destinations for overlapping buyer intents (Medium priority)
- Option 2 ("Buy Direct — DIY Application") → `/shop` (actual checkout page).
- Option 3 ("Buy & Use Your Own Installer") → `/products` or `/products/roofshield` (spec/technical page, not checkout).

Both options end in the same real-world action — buying product from The Roof Store — but they're routed to two different page types (transactional vs. informational). A Buyer-3 visitor has to find their own way from the spec page back to `/shop` to actually purchase.

### 4. "Pricing" isn't in the main nav (Medium priority)
`/pricing` only appears as a text link inside the hero ("See pricing →"). For price-sensitive DIY/contractor buyers, pricing transparency is a top decision input — it deserves a persistent nav slot, not a one-time hero mention.

### 5. What's working well (keep this)
- The hero's buyer captions directly under the two CTA buttons ("Homeowners & businesses — we install, you save..." / "Contractors & DIY — factory pricing...") are a clean, low-ambiguity pattern — each CTA is self-labeled by audience right where the decision happens.
- The "Not sure yet? Get both quotes" bridge line correctly captures the +1 segment without forcing a premature choice.
- Both `/shop` and `/products` end with a "Not Sure Which Product You Need? Call for free consultation" block — a consistent safety net for undecided visitors at the product level.

## Recommended fixes (priority order)
1. Add a persistent nav item (or sticky secondary bar) that always shows both "Get an Installation Quote" and "Shop Products" — not just on the homepage.
2. Make Option 3's link consistent everywhere: send it to `/shop` (or the full `/products` catalog, but the same one on every page) rather than mixing `/products` and `/products/roofshield`.
3. Decide whether Option 2 and Option 3 should route through the same `/shop` checkout flow (recommended, since both end in "buy the product") — differentiate them only in messaging, not in destination page type.
4. Add `Pricing` as a top-level nav item.