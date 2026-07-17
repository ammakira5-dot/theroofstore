#!/usr/bin/env python3
"""Generate branded 1200x630 OG images for The Roof Store using Pillow."""

import os
from PIL import Image, ImageDraw, ImageFont

OUT_DIR = os.path.join(os.path.dirname(__file__), "../artifacts/roof-store/public/images/og")
os.makedirs(OUT_DIR, exist_ok=True)

SANS_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
SANS = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
SERIF_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"  # use bold sans as serif substitute

# Brand colors
BG_TOP    = (30, 58, 138)   # #1e3a8a  navy
BG_BTM    = (29, 78, 216)   # #1d4ed8  mid blue
ACCENT    = (251, 146, 60)  # #fb923c  orange
WHITE     = (255, 255, 255)
WHITE_70  = (255, 255, 255, 179)   # 70% opacity
WHITE_45  = (255, 255, 255, 115)   # 45% opacity

W, H = 1200, 630
MARGIN_X = 80
MARGIN_Y = 52

pages = [
    {
        "filename": "pricing.jpg",
        "logo_sub": "Storm Shield Paint Systems Inc. · Davie, FL",
        "badge": "FACTORY PRICE MENU",
        "headline": ["Roof Coating Prices", "in South Florida"],
        "sub": "Per sq ft — Fungal Shield · Smart Shield · Roof Shield · Labor & materials included",
    },
    {
        "filename": "faq.jpg",
        "logo_sub": "Storm Shield Paint Systems Inc. · Davie, FL",
        "badge": "FREE CONSULTATION",
        "headline": ["Roof Coating FAQ —", "Florida Homeowners' Top Questions"],
        "sub": "30 years of South Florida roofing expertise. Honest answers on coating, insurance & hurricanes.",
    },
    {
        "filename": "blog.jpg",
        "logo_sub": "Storm Shield Paint Systems Inc. · Davie, FL",
        "badge": "KNOWLEDGE BASE",
        "headline": ["The Roof Store Blog"],
        "sub": "Florida insurance law · Hurricane protection · Roof coating guides · Citizens Insurance",
    },
    {
        "filename": "broward-county.jpg",
        "logo_sub": "Storm Shield Paint Systems Inc. · Davie, FL",
        "badge": "SERVICE AREA",
        "headline": ["Roof Coating Contractor", "— Broward County, FL"],
        "sub": "Fort Lauderdale · Coral Springs · Pembroke Pines · Hollywood · Plantation · 30+ cities",
    },
    {
        "filename": "miami-dade-county.jpg",
        "logo_sub": "Storm Shield Paint Systems Inc. · Davie, FL",
        "badge": "SERVICE AREA",
        "headline": ["Roof Coating Contractor", "— Miami-Dade County, FL"],
        "sub": "Miami · Coral Gables · Homestead · Hialeah · Kendall · Doral · 30+ cities",
    },
    {
        "filename": "palm-beach-county.jpg",
        "logo_sub": "Storm Shield Paint Systems Inc. · Davie, FL",
        "badge": "SERVICE AREA",
        "headline": ["Roof Coating Contractor", "— Palm Beach County, FL"],
        "sub": "West Palm Beach · Boca Raton · Delray Beach · Boynton Beach · Lake Worth · 20+ cities",
    },
]


def make_gradient(width: int, height: int) -> Image.Image:
    """Create a vertical gradient from BG_TOP to BG_BTM."""
    img = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(img)
    for y in range(height):
        t = y / height
        r = int(BG_TOP[0] + (BG_BTM[0] - BG_TOP[0]) * t)
        g = int(BG_TOP[1] + (BG_BTM[1] - BG_TOP[1]) * t)
        b = int(BG_TOP[2] + (BG_BTM[2] - BG_TOP[2]) * t)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    return img


def draw_rounded_rect(draw: ImageDraw.Draw, x1: int, y1: int, x2: int, y2: int, radius: int, fill):
    draw.rounded_rectangle([x1, y1, x2, y2], radius=radius, fill=fill)


def generate(cfg: dict):
    img = make_gradient(W, H)
    draw = ImageDraw.Draw(img, "RGBA")

    # Decorative circle (bottom right)
    circ_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    circ_draw = ImageDraw.Draw(circ_layer)
    circ_draw.ellipse([W - 200, H - 200, W + 220, H + 220], fill=(255, 255, 255, 10))
    circ_draw.ellipse([W - 60, -140, W + 180, 100], fill=(255, 255, 255, 8))
    img = Image.alpha_composite(img.convert("RGBA"), circ_layer).convert("RGB")
    draw = ImageDraw.Draw(img)

    # Fonts
    font_logo      = ImageFont.truetype(SANS_BOLD, 22)
    font_logo_sub  = ImageFont.truetype(SANS, 13)
    font_headline  = ImageFont.truetype(SERIF_BOLD, 52)
    font_sub       = ImageFont.truetype(SANS, 19)
    font_footer    = ImageFont.truetype(SANS, 16)
    font_badge     = ImageFont.truetype(SANS_BOLD, 13)

    # ── Top: logo text ──
    draw.text((MARGIN_X, MARGIN_Y), "The Roof Store", font=font_logo, fill=WHITE)
    draw.text((MARGIN_X, MARGIN_Y + 28), cfg["logo_sub"], font=font_logo_sub, fill=(255, 255, 255, 128))

    # ── Top-right: badge pill ──
    badge_text = cfg["badge"]
    badge_bbox = draw.textbbox((0, 0), badge_text, font=font_badge)
    bw = badge_bbox[2] - badge_bbox[0] + 36
    bh = badge_bbox[3] - badge_bbox[1] + 16
    bx = W - MARGIN_X - bw
    by = MARGIN_Y + 4
    draw_rounded_rect(draw, bx, by, bx + bw, by + bh, 8, ACCENT)
    # Center badge text
    tx = bx + (bw - (badge_bbox[2] - badge_bbox[0])) // 2 - badge_bbox[0]
    ty = by + (bh - (badge_bbox[3] - badge_bbox[1])) // 2 - badge_bbox[1]
    draw.text((tx, ty), badge_text, font=font_badge, fill=WHITE)

    # ── Accent line ──
    accent_y = 155
    draw.rectangle([MARGIN_X, accent_y, MARGIN_X + 72, accent_y + 5], fill=ACCENT)

    # ── Headline (multi-line) ──
    hl_y = accent_y + 22
    for line in cfg["headline"]:
        draw.text((MARGIN_X, hl_y), line, font=font_headline, fill=WHITE)
        hl_y += 62

    # ── Subtitle ──
    sub_y = hl_y + 10
    draw.text((MARGIN_X, sub_y), cfg["sub"], font=font_sub, fill=(255, 255, 255, 185))

    # ── Footer separator ──
    sep_y = H - 70
    draw.line([(MARGIN_X, sep_y), (W - MARGIN_X, sep_y)], fill=(255, 255, 255, 40), width=1)

    # ── Footer text ──
    footer_y = sep_y + 16
    draw.text((MARGIN_X, footer_y), "954-210-9614 · theroofstore.net", font=font_footer, fill=(255, 255, 255, 218))
    right_text = "A+ BBB · Licensed & Insured · Since 1994"
    rt_bbox = draw.textbbox((0, 0), right_text, font=font_footer)
    draw.text((W - MARGIN_X - (rt_bbox[2] - rt_bbox[0]), footer_y), right_text, font=font_footer, fill=(255, 255, 255, 115))

    out_path = os.path.join(OUT_DIR, cfg["filename"])
    img.save(out_path, "JPEG", quality=92)
    print(f"  ✓ {cfg['filename']}")


def main():
    print(f"Generating {len(pages)} OG images → {OUT_DIR}\n")
    for cfg in pages:
        generate(cfg)
    print(f"\nDone.")


if __name__ == "__main__":
    main()
