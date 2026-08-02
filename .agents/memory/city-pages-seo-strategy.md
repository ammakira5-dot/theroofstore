---
name: City pages SEO strategy (confirmed)
description: Owner-confirmed order and guardrails for the ~157 service-area city page overhaul
---

# City pages SEO strategy — confirmed July 31, 2026

Owner ran the three audit findings through Google AI Mode; agent ran an independent web check. Both agreed. Owner adopted this order:

1. **Unique local content first** — 157 pages share one template with only the city name changing; classic thin/duplicate-content pattern likely already suppressing pages. Only change with real ranking impact; the other two are capped until this is fixed.
2. **Insurance-angle meta descriptions second** — lead snippets with the Additional Roof Life Certification / Citizens Insurance hook. Moves clicks, not rankings.
3. **"Contractors & DIY buy factory-direct" section last** — small and visually secondary so it never competes with the homeowner estimate CTA (leak-plugging, mirrors the factory page's three-way fork).

**Why:** duplicate-template pages cap the upside of snippet and CTA work; fix indexing first.

**How to apply / guardrails:**
- Pilot on 5–10 representative cities before rolling to all 157.
- **Owner-approved pilot list (July 31, 2026)** — the cities where their business actually comes from (western Broward + NW Miami-Dade): Pembroke Pines, Miramar, Weston, Davie, Plantation, Coral Springs, Sunrise (Broward); Hialeah, Miami Lakes, Miami Gardens (Miami-Dade). Refine round two with GSC impressions data (owner to pull Performance → Pages).
- #1 risk: "spun content" — superficial variation doesn't count; needs real local proof (project photos, local roof styles/rules, city-specific FAQs). If a city page can't be filled without repeating, don't deep-localize it.
- #2 risk: don't just swap the city name into one template sentence — descriptions must be genuinely varied, ~155 chars.
- Related held ideas: Consideration A = "Why The Roof Store" authority page + small link-strips on index/factory/about/city pages (one home, many doorways). Consideration B label = the unique-local-content segment itself.
- Owner's Google AI test breakdown uploaded to Asset Library (July 31, 2026).
- **Blind-audit test (owner-requested July 31, 2026):** on the next independent audit of city pages, do NOT tell the auditor which 10 pilot cities got deep-localized content. See if the audit independently flags those 10 as different/better than the template pages — owner's validation that the localization is genuinely distinguishable, not just labeled as such.
- Coordinate with existing task "Lead city pages with the education journey" — same template, avoid conflicting edits.
- **Owner's real job photos (uploaded July 31, 2026, attached_assets/thumbnail_*Shingle*/Monolthic* files):** Davie job, Roof Shield System on shingle tile roof — RP3 base coat + RP2 SmartShield top (RP2 reflects darker color requests; example of combining products). 3 photos: before (bare shingle), production phase, sealed-vs-just-painted close-up (ideal for the painting→coating education task). Matching "after" photo promised later. Use on the Davie pilot page + education content.
- **Language rule (owner-confirmed July 31, 2026): "products" on shopping paths, "systems" only where installation is the story.** To shoppers, "system" sounds like an installed service, not something they can buy today. Buy/shop pages, menus, and product CTAs must say product(s); "system" language belongs on install/service pages. Three prospect types to serve: homeowner-install, product-buyer (contractor/DIY), and the rare hybrid who wants both quotes once he sees manufacturer=installer.
- **Pending: RoofShield Strength Data Sheet PDF (noted July 31, 2026, NOT actioned yet):** owner wants a second PDF button added on the Roof Shield product detail page (/products/roofshield) alongside the existing product presentation PDF, labeled "RoofShield Strength Data Sheet (PDF)". Owner will supply the file / say when. Do not add until he asks.
- **Image-context rule (owner-requested July 31, 2026):** photos must match the roof type the surrounding text references. "Flat cement tile roof" ≠ "flat roof" — showing the wrong one confuses buyers; Spanish tile copy must show a Spanish tile roof, flat/low-slope copy must show a flat roof, etc. Applies to all city-page content, pilot pages, and any photo tasks.
- **CTA scheme (owner-decided July 31, 2026):** two buttons + one line. Button 1 installation with "contracting" language (e.g. "We Install It — Free Contracting Estimate"); Button 2 product-only (e.g. "Buy the Product — Ship or Pickup"); small line beneath: "Not sure yet? Get both quotes — product-only and installed — and decide later." Captures undecided buyers comparing installers. Wording only — no layout/nav changes. Any task touching CTAs must apply this scheme.

## Status Aug 1 2026 (evening batch) — CONTENT LAYER COMPLETE
- Deep write-ups (localContent): all 105 cities done — PB 39 + Key West added via per-county files (localContentPB1/PB2.ts) spread-merged into localContent.ts.
- FAQs (cityFaqOverrides): all 105 cities done via cityFaqsBroward/MiamiDade/PalmBeach.ts merges.
- County hubs: countyContent.ts adds unique intros + custom meta descriptions to all 4; factory-direct lane added to CountyPage (project task "county hub buy-direct lane" is now satisfied).
- priceRange "$$" schema removed site-wide per price lockdown.
- STILL PENDING OWNER: existing hand-written meta descriptions cite replacement costs ("$20K+ tear-off", "$18–25K") — competitor-cost figures, not our prices; owner never ruled on these (same class as blog figures).
- Counting lesson: content keys may be bare (unquoted) — count with a regex that accepts both, or numbers come out wrong (owner caught this twice).
