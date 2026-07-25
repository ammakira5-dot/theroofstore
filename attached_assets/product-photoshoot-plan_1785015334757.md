# Product Bucket Photoshoot Plan — Fungal Shield, Smart Shield, Roof Shield
**Purpose: dedicated product images to fix the schema mismatch and generic-hero-image problems found in the image audit**

---

## Why This Shoot Matters (Direct Tie to the SEO Findings)

None of the three product pages currently have a clean, standalone bucket photo. The Roof Shield page's own structured data points to a file named `smartshield-pail.png` — a mismatch that's actively confusing which image belongs to which product. This shoot produces the missing asset for all three products at once, correctly matched from day one.

---

## Shot List — Per Product (RP1, RP2, RP3)

Each product needs the following shots. Multiply by 3 products = **35 total images** minimum.

| # | Shot | Purpose |
|---|---|---|
| 1 | **Primary hero — straight-on, label facing camera, pure white background** | The main image for the product page, schema `image` field, and Merchant Center feed |
| 2 | **3/4 angle — label + lid visible, white background** | Secondary gallery image, adds depth/dimension for the product page |
| 3 | **Label close-up — legible detail shot** | Shows TAS-106 badge (RP3 only), coverage rate, warranty info — builds trust, useful for zoomed views |
| 4 | **Lid-off / product texture shot** | Shows the actual liquid rubber material — helps differentiate "this is a real coating, not paint" positioning already used in your copy |
| 5 | **Scale reference shot — bucket next to a roof tile or on a pallet** | Helps buyers gauge size; useful for DIY/owner-applied buyers deciding how much to order |
| 6 | **Lifestyle/context shot — bucket staged on an actual jobsite or rooftop** | Ties the product to real installation use, good for social and blog content reuse |

**Plus one group shot:** all three buckets (RP1, RP2, RP3) lined up together, white background — useful for the products comparison page, the "how they work together" table already on your site, and any future retail/wholesale materials.

---

## Technical Specifications

| Spec | Requirement | Why |
|---|---|---|
| Background | Pure white (#FFFFFF) or light seamless gray for hero shots | Matches Google Merchant Center's main-image requirement (no text/watermarks/badges on the primary image) — required if you want these images eligible for Shopping/free listings once Merchant Center is reinstated |
| Aspect ratio | 1:1 (square) for hero shots | Google's preferred ratio for Shopping-eligible product images |
| Resolution | Minimum 2000×2000px, export smaller sizes as needed | Allows zoom/pinch on product pages and headroom for future use (print, ads) |
| Lighting | Soft, diffused, even — avoid harsh glare on glossy plastic bucket surfaces | Plastic buckets reflect hard light sources; a light tent or large softbox eliminates hotspots on the label |
| Format | High-res JPEG or PNG for web; keep RAW/master files archived separately | JPEG for web delivery; RAW archive protects the investment for future re-edits/re-crops |
| No overlays | No added text, price tags, or promotional badges baked into the image itself | Keeps hero images Merchant-Center-compliant; add any promotional text as page copy, not image overlay |

---

## Equipment Needed

- A light tent or two softboxes (roughly 45–60° angles) — controls glare on the glossy bucket surface, the single biggest technical challenge in this shoot
- A seamless white or light gray backdrop (paper or fabric roll)
- A tripod-mounted camera or smartphone with manual exposure control — even a modern smartphone can produce Merchant-Center-quality images with the right lighting setup
- A turntable or lazy-susan (optional but speeds up the 3/4 angle and multi-angle shots significantly)

If hiring a photographer isn't in scope right now, this setup is achievable in an afternoon with the equipment above — the lighting is the only part that genuinely needs care; everything else is straightforward.

---

## File Naming Convention (Fixes the Root Cause From the Audit)

Use this pattern for every exported file — descriptive, product-specific, no generic names:

```
fungal-shield-rp1-bucket-hero.jpg
fungal-shield-rp1-bucket-angle.jpg
fungal-shield-rp1-label-detail.jpg
fungal-shield-rp1-texture.jpg
fungal-shield-rp1-scale-reference.jpg
fungal-shield-rp1-jobsite.jpg

smart-shield-rp2-bucket-hero.jpg
smart-shield-rp2-bucket-angle.jpg
smart-shield-rp2-label-detail.jpg
smart-shield-rp2-texture.jpg
smart-shield-rp2-scale-reference.jpg
smart-shield-rp2-jobsite.jpg

roof-shield-rp3-bucket-hero.jpg
roof-shield-rp3-bucket-angle.jpg
roof-shield-rp3-label-detail.jpg
roof-shield-rp3-texture.jpg
roof-shield-rp3-scale-reference.jpg
roof-shield-rp3-jobsite.jpg

three-systems-lineup-group.jpg
```

No spaces, no camera-default names (`IMG_4471.jpg`), no reused filenames across products.

---

## Alt Text — Ready to Use Once Photos Are In Hand

| Image | Suggested Alt Text |
|---|---|
| Fungal Shield hero | "Fungal Shield RP1 clear anti-fungal roof coating, 5-gallon bucket" |
| Smart Shield hero | "Smart Shield RP2 tintable waterproof roof coating, 5-gallon bucket" |
| Roof Shield hero | "Roof Shield RP3 TAS-106 certified hurricane roof coating, 5-gallon bucket" |
| Group lineup | "Fungal Shield, Smart Shield, and Roof Shield — The Roof Store's three roof coating systems" |

*(Adjust "5-gallon" if actual container size differs — confirm real packaging size before finalizing alt text and schema.)*

---

## Post-Production Checklist

- [ ] Background cleanup — pure white, no shadows, no visible seams
- [ ] Color correction — bucket color and label colors must be accurate (critical for Smart Shield, since color-matching is a core selling point)
- [ ] Crop to 1:1 for hero images; other shots can stay natural aspect ratio
- [ ] Export web-optimized JPEG (compressed, under ~300KB where possible) alongside the full-resolution master
- [ ] Rename every file per the convention above before upload — do this before anything goes near the CMS
- [ ] Update `alt` text on each image tag at upload time — don't leave this for later
- [ ] Update the `image` field in each product's schema.org Product markup to point to the correct new file — this is the direct fix for the Roof Shield mismatch found in the audit

---

## Where Each Final Image Gets Used

| Image | Deployment Location |
|---|---|
| Hero shot (each product) | Product page primary image + schema `image` field + Merchant Center feed `image_link` (once reinstated) |
| Angle + label detail | Product page image gallery |
| Texture shot | Product page "Overview" section, supports the "true liquid rubber, not paint" copy already on the pages |
| Scale reference | Product page or FAQ — helps DIY buyers estimate order quantity |
| Jobsite/lifestyle | Blog posts, social content, homepage rotating imagery |
| Group lineup | Homepage, products collection page, "how they work together" comparison table |

---

## Sequencing

1. Confirm actual packaging size (5-gallon vs. other) before shooting — this affects both the physical prop and the alt text/schema language.
2. Schedule the shoot — a single afternoon covers all three products with the shot list above.
3. Post-produce and rename files per the convention immediately after the shoot, before anything gets uploaded.
4. Upload with correct alt text and update each product's schema `image` field at the same time — don't split these into separate passes, since that's exactly how the original mismatch happened.