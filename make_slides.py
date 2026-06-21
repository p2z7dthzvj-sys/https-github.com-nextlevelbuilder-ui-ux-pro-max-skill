"""Build random-walk-slideshow.pptx — 12 cinematic slides."""
from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.util import Inches, Pt
import pptx.oxml.ns as nsmap
from lxml import etree
import math, os

# ── palette ──────────────────────────────────────────────────────────────────
VOID   = RGBColor(0x01, 0x02, 0x06)
ABYSS  = RGBColor(0x04, 0x0a, 0x14)
INK    = RGBColor(0x08, 0x0f, 0x1e)
IVORY  = RGBColor(0xec, 0xe5, 0xd8)
GHOST  = RGBColor(0xb0, 0xa8, 0x98)
AMBER  = RGBColor(0xc8, 0x92, 0x2a)
GOLD   = RGBColor(0xe4, 0xb4, 0x45)
GDIM   = RGBColor(0x9a, 0x70, 0x20)
SAGE   = RGBColor(0x3a, 0x72, 0x48)
SAGE2  = RGBColor(0x52, 0xa4, 0x64)
RED    = RGBColor(0xc0, 0x32, 0x2a)
WHITE  = RGBColor(0xff, 0xff, 0xff)
DIM    = RGBColor(0x60, 0x58, 0x48)

W = Inches(13.33)   # widescreen 16:9
H = Inches(7.5)

prs = Presentation()
prs.slide_width  = W
prs.slide_height = H

blank = prs.slide_layouts[6]   # completely blank

# ── helpers ──────────────────────────────────────────────────────────────────
def slide():
    return prs.slides.add_slide(blank)

def bg(sl, color):
    """Fill slide background."""
    bg_el = sl.background
    fill  = bg_el.fill
    fill.solid()
    fill.fore_color.rgb = color

def rect(sl, x, y, w, h, color, alpha=None):
    """Add a filled rectangle."""
    shp = sl.shapes.add_shape(
        pptx.enum.shapes.MSO_SHAPE_TYPE.AUTO_SHAPE,  # ignored — use add_shape
        x, y, w, h)
    shp.fill.solid()
    shp.fill.fore_color.rgb = color
    shp.line.fill.background()
    if alpha is not None:
        # pptx transparency 0–100 000 (100 000 = fully transparent)
        shp.fill.fore_color._xClr.attrib.pop('lastClr', None)
        sp = shp.fill._xPr
        # set alpha via solidFill lumMod workaround isn't clean;
        # use direct XML on the solidFill element
        solidFill = shp.fill._fill.find(nsmap.qn('a:solidFill'))
        if solidFill is None:
            solidFill = shp.fill._fill
        clr = solidFill.find(nsmap.qn('a:srgbClr'))
        if clr is None:
            clr = solidFill.find(nsmap.qn('a:sysClr'))
        if clr is not None:
            alpha_el = etree.SubElement(clr, nsmap.qn('a:alpha'))
            alpha_el.set('val', str(int(alpha * 100000)))
    return shp

def add_rect(sl, x, y, w, h, fill_rgb, alpha_pct=None):
    """Simpler rect: fills with RGB, optional alpha 0–1."""
    from pptx.util import Emu
    import pptx.enum.shapes as _s
    shp = sl.shapes.add_shape(1, x, y, w, h)   # 1 = rectangle
    shp.fill.solid()
    shp.fill.fore_color.rgb = fill_rgb
    shp.line.fill.background()
    if alpha_pct is not None:
        # Access XML directly
        spPr = shp._element.spPr
        solidFill = spPr.find('.//' + nsmap.qn('a:solidFill'))
        if solidFill is not None:
            srgb = solidFill.find(nsmap.qn('a:srgbClr'))
            if srgb is not None:
                a = etree.SubElement(srgb, nsmap.qn('a:alpha'))
                a.set('val', str(int(alpha_pct * 100000)))
    return shp

def txbox(sl, text, x, y, w, h,
          font='Cormorant Garamond', size=24, bold=False, italic=False,
          color=IVORY, align=PP_ALIGN.LEFT, wrap=True):
    box = sl.shapes.add_textbox(x, y, w, h)
    tf  = box.text_frame
    tf.word_wrap = wrap
    p = tf.paragraphs[0]
    p.alignment = align
    run = p.add_run()
    run.text = text
    run.font.name   = font
    run.font.size   = Pt(size)
    run.font.bold   = bold
    run.font.italic = italic
    run.font.color.rgb = color
    return box

def label(sl, text, x, y, w=Inches(12), h=Inches(1),
          font='Cinzel', size=11, color=GDIM, align=PP_ALIGN.CENTER):
    return txbox(sl, text, x, y, w, h, font=font, size=size, color=color, align=align)

def title_block(sl, top_label, headline, sub=None,
                hl_color=GOLD, sub_color=GHOST):
    cy = Inches(2.8)
    if top_label:
        label(sl, top_label,
              Inches(.65), cy - Inches(0.6),
              Inches(12), Inches(0.5),
              size=10, color=GDIM, align=PP_ALIGN.CENTER)
    txbox(sl, headline,
          Inches(.65), cy,
          Inches(12), Inches(1.6),
          font='Cormorant Garamond', size=54, bold=True, italic=False,
          color=hl_color, align=PP_ALIGN.CENTER)
    if sub:
        txbox(sl, sub,
              Inches(.65), cy + Inches(1.45),
              Inches(12), Inches(0.8),
              font='DM Sans', size=18,
              color=sub_color, align=PP_ALIGN.CENTER)

def divider(sl, y=Inches(3.7), color=AMBER, alpha=0.45):
    add_rect(sl, Inches(4.5), y, Inches(4.33), Inches(0.02),
             color, alpha_pct=alpha)

def accent_bar(sl, color=AMBER):
    """Left accent bar."""
    add_rect(sl, Inches(0.55), Inches(1.2), Inches(0.06), Inches(5.1), color)

def bottom_label(sl, text):
    txbox(sl, text,
          Inches(0.65), Inches(6.8), Inches(12), Inches(0.5),
          font='Cinzel', size=9, color=DIM, align=PP_ALIGN.CENTER)

# ── gradient background helper (two-stop via XML) ────────────────────────────
def grad_bg(sl, top_rgb, bot_rgb):
    """Apply a top→bottom gradient to the slide background via XML."""
    bg_el = sl.background.element
    # Remove existing bgPr or bgRef
    bgPr = bg_el.find(nsmap.qn('p:bgPr'))
    if bgPr is None:
        bgPr = etree.SubElement(bg_el, nsmap.qn('p:bgPr'))
    # clear
    for ch in list(bgPr):
        bgPr.remove(ch)
    gradFill = etree.SubElement(bgPr, nsmap.qn('a:gradFill'))
    gsLst    = etree.SubElement(gradFill, nsmap.qn('a:gsLst'))
    def gs(pos, rgb):
        g  = etree.SubElement(gsLst, nsmap.qn('a:gs'))
        g.set('pos', str(pos))
        s  = etree.SubElement(g, nsmap.qn('a:srgbClr'))
        s.set('val', f'{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}')
    gs(0,       top_rgb)
    gs(100000,  bot_rgb)
    lin = etree.SubElement(gradFill, nsmap.qn('a:lin'))
    lin.set('ang', '5400000')   # 90° = top→bottom
    lin.set('scaled', '0')
    effectLst = etree.SubElement(bgPr, nsmap.qn('a:effectLst'))

# ═══════════════════════════════════════════════════════════════════════════
# SLIDE 1 — COLD OPEN
# ═══════════════════════════════════════════════════════════════════════════
s = slide()
bg(s, VOID)
accent_bar(s, AMBER)

# Ticker tape lines (simulated with thin rects)
import random
random.seed(42)
for i in range(18):
    yy = Inches(0.3 + i * 0.4)
    ww = Inches(random.uniform(4, 11))
    add_rect(s, Inches(0.8), yy, ww, Inches(0.018),
             AMBER, alpha_pct=random.uniform(0.04, 0.18))

txbox(s, 'NYSE · 1973',
      Inches(0.65), Inches(0.3), Inches(6), Inches(0.5),
      font='JetBrains Mono', size=10, color=GDIM)

txbox(s, 'DOW  +0.00    S&P  −0.00    NASDAQ  +0.00    VIX  ??',
      Inches(0.65), Inches(6.7), Inches(12), Inches(0.5),
      font='JetBrains Mono', size=10, color=RGBColor(0x30,0x50,0x30))

txbox(s, 'In the beginning\nthere was noise.',
      Inches(1.2), Inches(2.4), Inches(11), Inches(2.5),
      font='Cormorant Garamond', size=62, bold=True, italic=True,
      color=IVORY, align=PP_ALIGN.CENTER)

bottom_label(s, 'A RANDOM WALK DOWN WALL STREET  ·  BURTON G. MALKIEL  ·  1973')

# ═══════════════════════════════════════════════════════════════════════════
# SLIDE 2 — TITLE
# ═══════════════════════════════════════════════════════════════════════════
s = slide()
grad_bg(s, INK, VOID)

# gold rule top + bottom
add_rect(s, Inches(0.55), Inches(0.55), Inches(12.23), Inches(0.04), AMBER)
add_rect(s, Inches(0.55), Inches(6.9),  Inches(12.23), Inches(0.04), AMBER)

txbox(s, 'A RANDOM WALK\nDOWN WALL STREET',
      Inches(0.5), Inches(1.1), Inches(12.33), Inches(3.2),
      font='Cinzel', size=68, bold=True, color=GOLD, align=PP_ALIGN.CENTER)

divider(s, Inches(4.35))

txbox(s, 'Burton G. Malkiel  ·  1973',
      Inches(0.5), Inches(4.55), Inches(12.33), Inches(0.6),
      font='Cormorant Garamond', size=24, italic=True,
      color=GHOST, align=PP_ALIGN.CENTER)

txbox(s, 'The book that changed how the world invests.',
      Inches(0.5), Inches(5.25), Inches(12.33), Inches(0.7),
      font='DM Sans', size=18,
      color=RGBColor(0xa0,0x98,0x88), align=PP_ALIGN.CENTER)

# ═══════════════════════════════════════════════════════════════════════════
# SLIDE 3 — THE PROMISE
# ═══════════════════════════════════════════════════════════════════════════
s = slide()
bg(s, ABYSS)
accent_bar(s, AMBER)

label(s, 'CHAPTER I', Inches(0.65), Inches(0.9), Inches(12), Inches(0.4), size=10)

txbox(s, 'The Promise',
      Inches(0.65), Inches(1.4), Inches(12), Inches(1.4),
      font='Cormorant Garamond', size=64, bold=True, color=GOLD,
      align=PP_ALIGN.CENTER)

divider(s, Inches(2.95))

txbox(s, '"Steady long-term returns.\nEveryone can win in the market."\n\nOr can they?',
      Inches(1.4), Inches(3.15), Inches(10.5), Inches(2.8),
      font='Cormorant Garamond', size=32, italic=True,
      color=IVORY, align=PP_ALIGN.CENTER)

# Moon circle
shp = s.shapes.add_shape(9, Inches(10.8), Inches(0.4), Inches(1.8), Inches(1.8))   # 9 = oval
shp.fill.solid()
shp.fill.fore_color.rgb = RGBColor(0xf0, 0xe8, 0xc8)
shp.line.fill.background()

bottom_label(s, '— The seductive allure of market timing and stock picking')

# ═══════════════════════════════════════════════════════════════════════════
# SLIDE 4 — THE PATTERN
# ═══════════════════════════════════════════════════════════════════════════
s = slide()
bg(s, INK)
accent_bar(s, AMBER)

label(s, 'CHAPTER II', Inches(0.65), Inches(0.9), Inches(12), Inches(0.4), size=10)

txbox(s, 'The Pattern',
      Inches(0.65), Inches(1.35), Inches(12), Inches(1.2),
      font='Cormorant Garamond', size=60, bold=True, color=GOLD,
      align=PP_ALIGN.CENTER)

divider(s, Inches(2.7))

# Simulated chart lines (ascending then crashing)
chart_data = [
    (0.5, 5.5), (1.2, 4.9), (2.0, 4.2), (2.8, 3.6), (3.6, 2.8),
    (4.5, 2.2), (5.5, 1.6), (6.5, 1.8), (7.5, 2.5), (8.5, 3.4),
    (9.5, 4.6), (10.5, 5.8), (11.0, 6.5), (11.8, 5.0), (12.3, 3.5),
]
# Draw as thin connector lines between rects
prev = None
for (xi, yi) in chart_data:
    xp = Inches(xi * 0.95 + 0.5)
    yp = Inches(yi * 0.32 + 2.8)
    dot = s.shapes.add_shape(9, xp - Inches(0.04), yp - Inches(0.04),
                              Inches(0.08), Inches(0.08))
    dot.fill.solid()
    dot.fill.fore_color.rgb = SAGE2
    dot.line.fill.background()

txbox(s, '"Technicians see patterns everywhere.\nMost patterns are pure chance."',
      Inches(1.0), Inches(5.5), Inches(11.33), Inches(1.5),
      font='Cormorant Garamond', size=24, italic=True,
      color=GHOST, align=PP_ALIGN.CENTER)

# ═══════════════════════════════════════════════════════════════════════════
# SLIDE 5 — RANDOM WALK
# ═══════════════════════════════════════════════════════════════════════════
s = slide()
bg(s, VOID)
accent_bar(s, AMBER)

label(s, 'THE HYPOTHESIS', Inches(0.65), Inches(0.9), Inches(12), Inches(0.4), size=10)

txbox(s, 'The Random Walk',
      Inches(0.65), Inches(1.35), Inches(12), Inches(1.2),
      font='Cormorant Garamond', size=58, bold=True, color=GOLD,
      align=PP_ALIGN.CENTER)

divider(s, Inches(2.65))

# Grid lines
for i in range(9):
    yy = Inches(2.9 + i * 0.48)
    add_rect(s, Inches(0.8), yy, Inches(11.73), Inches(0.01),
             AMBER, alpha_pct=0.08)
for i in range(13):
    xx = Inches(0.8 + i * 0.95)
    add_rect(s, xx, Inches(2.85), Inches(0.01), Inches(4.3),
             AMBER, alpha_pct=0.08)

# Random walk path (precomputed)
rng = random.Random(7)
walk_x, walk_y = 0.8, 5.0
path = [(walk_x, walk_y)]
for _ in range(24):
    walk_x += rng.uniform(0.35, 0.55)
    walk_y += rng.uniform(-0.5, 0.5)
    walk_y  = max(2.9, min(6.9, walk_y))
    path.append((walk_x, walk_y))

for i in range(len(path)-1):
    x1, y1 = path[i]
    x2, y2 = path[i+1]
    cx = min(x1, x2)
    cy = min(y1, y2)
    cw = abs(x2 - x1)
    ch = abs(y2 - y1) or 0.02
    # horizontal segment
    mid_y = (y1 + y2) / 2
    add_rect(s, Inches(x1), Inches(mid_y - 0.015),
             Inches(abs(x2-x1)), Inches(0.03), SAGE2, alpha_pct=0.9)
    add_rect(s, Inches(x2 - 0.015), Inches(min(y1,y2)),
             Inches(0.03), Inches(abs(y2-y1)), SAGE2, alpha_pct=0.9)

txbox(s, 'Each step is independent.\nPast price tells you nothing about tomorrow.',
      Inches(1.0), Inches(5.9), Inches(11.33), Inches(1.2),
      font='DM Sans', size=18, color=GHOST, align=PP_ALIGN.CENTER)

# ═══════════════════════════════════════════════════════════════════════════
# SLIDE 6 — THE COIN
# ═══════════════════════════════════════════════════════════════════════════
s = slide()
bg(s, INK)
accent_bar(s, AMBER)

label(s, 'FAIR GAME', Inches(0.65), Inches(0.9), Inches(12), Inches(0.4), size=10)

txbox(s, 'The Coin',
      Inches(0.65), Inches(1.35), Inches(12), Inches(1.2),
      font='Cormorant Garamond', size=60, bold=True, color=GOLD,
      align=PP_ALIGN.CENTER)

divider(s, Inches(2.65))

# Big coin (circle)
coin = s.shapes.add_shape(9, Inches(5.4), Inches(2.9), Inches(2.5), Inches(2.5))
coin.fill.solid()
coin.fill.fore_color.rgb = AMBER
coin.line.color.rgb = GOLD
coin.line.width = Pt(3)

txbox(s, '$',
      Inches(5.4), Inches(3.0), Inches(2.5), Inches(2.3),
      font='Cinzel', size=72, bold=True, color=GOLD, align=PP_ALIGN.CENTER)

txbox(s, 'H E A D S   ·   T A I L S\nUp   ·   Down\n50% · 50%',
      Inches(1.0), Inches(5.6), Inches(11.33), Inches(1.4),
      font='Cormorant Garamond', size=24, italic=True,
      color=GHOST, align=PP_ALIGN.CENTER)

bottom_label(s, '"The market is a fair coin — unknowable in advance."')

# ═══════════════════════════════════════════════════════════════════════════
# SLIDE 7 — THE MONKEY
# ═══════════════════════════════════════════════════════════════════════════
s = slide()
bg(s, VOID)
accent_bar(s, AMBER)

label(s, 'THE EXPERIMENT', Inches(0.65), Inches(0.9), Inches(12), Inches(0.4), size=10)

txbox(s, 'The Monkey',
      Inches(0.65), Inches(1.35), Inches(12), Inches(1.2),
      font='Cormorant Garamond', size=60, bold=True, color=GOLD,
      align=PP_ALIGN.CENTER)

divider(s, Inches(2.65))

# Dart board concentric circles
cx, cy = Inches(6.67), Inches(4.5)
for r, c in [(1.4, RGBColor(0x60,0x10,0x10)),
             (1.1, RGBColor(0x20,0x50,0x20)),
             (0.8, RGBColor(0x60,0x10,0x10)),
             (0.5, RGBColor(0x20,0x50,0x20)),
             (0.22, RGBColor(0xd4,0xa0,0x20))]:
    ri = Inches(r)
    circ = s.shapes.add_shape(9, cx - ri, cy - ri, ri*2, ri*2)
    circ.fill.solid()
    circ.fill.fore_color.rgb = c
    circ.line.color.rgb = RGBColor(0x22,0x22,0x22)
    circ.line.width = Pt(1)

# Dart pin
add_rect(s, cx - Inches(0.01), cy - Inches(1.5),
         Inches(0.02), Inches(1.5), IVORY)

txbox(s, '"A blindfolded monkey throwing darts\nat a stock page does as well as the experts."',
      Inches(0.8), Inches(5.75), Inches(11.73), Inches(1.4),
      font='Cormorant Garamond', size=22, italic=True,
      color=GHOST, align=PP_ALIGN.CENTER)

# ═══════════════════════════════════════════════════════════════════════════
# SLIDE 8 — TULIP MANIA
# ═══════════════════════════════════════════════════════════════════════════
s = slide()
bg(s, RGBColor(0x08, 0x05, 0x02))
accent_bar(s, AMBER)

# Warm candle-glow bokeh circles
import math
random2 = random.Random(13)
for i in range(14):
    rx = random2.uniform(0.5, 12.8)
    ry = random2.uniform(0.3, 7.0)
    rr = random2.uniform(0.3, 1.1)
    bokel = s.shapes.add_shape(9, Inches(rx - rr/2), Inches(ry - rr/2),
                                Inches(rr), Inches(rr))
    warm = RGBColor(
        min(255, int(200 + random2.uniform(0,55))),
        int(80 + random2.uniform(0,60)),
        int(10 + random2.uniform(0,20))
    )
    bokel.fill.solid()
    bokel.fill.fore_color.rgb = warm
    bokel.line.fill.background()
    # Transparency via XML
    spPr = bokel._element.spPr
    sf   = spPr.find('.//' + nsmap.qn('a:solidFill'))
    if sf is not None:
        sc = sf.find(nsmap.qn('a:srgbClr'))
        if sc is not None:
            a = etree.SubElement(sc, nsmap.qn('a:alpha'))
            a.set('val', str(int(random2.uniform(0.04, 0.14) * 100000)))

label(s, 'HISTORICAL MANIA', Inches(0.65), Inches(0.9), Inches(12), Inches(0.4), size=10)

txbox(s, 'Tulip Mania',
      Inches(0.65), Inches(1.35), Inches(12), Inches(1.2),
      font='Cormorant Garamond', size=60, bold=True, color=GOLD,
      align=PP_ALIGN.CENTER)

divider(s, Inches(2.65))

# Candle shapes
candle_data = [
    (2.5, 3.8, 4.2, True),
    (4.0, 3.2, 5.0, True),
    (5.5, 2.5, 5.8, True),
    (7.0, 1.8, 6.3, True),
    (8.5, 3.5, 5.5, False),
    (10.0, 5.0, 4.5, False),
    (11.2, 6.0, 3.8, False),
]
for (cx2, top, bot, bull) in candle_data:
    col = SAGE2 if bull else RED
    body_top = min(top, bot)
    body_h   = abs(bot - top)
    # wick
    add_rect(s, Inches(cx2 + 0.12), Inches(body_top - 0.3),
             Inches(0.04), Inches(0.3), GHOST, alpha_pct=0.5)
    add_rect(s, Inches(cx2 + 0.12), Inches(body_top + body_h),
             Inches(0.04), Inches(0.3), GHOST, alpha_pct=0.5)
    # body
    add_rect(s, Inches(cx2), Inches(body_top), Inches(0.28), Inches(body_h), col)

txbox(s, '"When everyone believes prices can only rise,\nthat is precisely when they fall."',
      Inches(0.8), Inches(5.8), Inches(11.73), Inches(1.4),
      font='Cormorant Garamond', size=22, italic=True,
      color=GHOST, align=PP_ALIGN.CENTER)

# ═══════════════════════════════════════════════════════════════════════════
# SLIDE 9 — THE BUBBLE
# ═══════════════════════════════════════════════════════════════════════════
s = slide()
bg(s, VOID)
accent_bar(s, AMBER)

label(s, 'MODERN MANIAS', Inches(0.65), Inches(0.9), Inches(12), Inches(0.4), size=10)

txbox(s, 'The Bubble',
      Inches(0.65), Inches(1.35), Inches(12), Inches(1.2),
      font='Cormorant Garamond', size=60, bold=True, color=GOLD,
      align=PP_ALIGN.CENTER)

divider(s, Inches(2.65))

# Bubble circles with labels
bubbles = [
    (3.5,  4.5, 1.8, RGBColor(0x28,0x48,0x88), 'DOTCOM\n1999'),
    (7.2,  4.2, 2.2, RGBColor(0x48,0x28,0x20), 'HOUSING\n2007'),
    (10.5, 4.8, 1.5, RGBColor(0x20,0x40,0x30), 'CRYPTO\n2021'),
]
for (bx, by, br, bcol, blbl) in bubbles:
    ri = Inches(br)
    bsh = s.shapes.add_shape(9,
                              Inches(bx) - ri, Inches(by) - ri,
                              ri*2, ri*2)
    bsh.fill.solid()
    bsh.fill.fore_color.rgb = bcol
    bsh.line.color.rgb = RGBColor(min(255,bcol[0]+30), min(255,bcol[1]+40), min(255,bcol[2]+60))
    bsh.line.width = Pt(1.5)
    # alpha
    spPr = bsh._element.spPr
    sf   = spPr.find('.//' + nsmap.qn('a:solidFill'))
    if sf is not None:
        sc = sf.find(nsmap.qn('a:srgbClr'))
        if sc is not None:
            a = etree.SubElement(sc, nsmap.qn('a:alpha'))
            a.set('val', str(int(0.55 * 100000)))
    txbox(s, blbl,
          Inches(bx) - ri, Inches(by) - Inches(0.4),
          ri*2, Inches(0.8),
          font='JetBrains Mono', size=12, bold=True,
          color=IVORY, align=PP_ALIGN.CENTER)

txbox(s, 'Every generation invents a new reason\nwhy this time is different.',
      Inches(0.8), Inches(6.1), Inches(11.73), Inches(1.1),
      font='DM Sans', size=18, color=GHOST, align=PP_ALIGN.CENTER)

# ═══════════════════════════════════════════════════════════════════════════
# SLIDE 10 — THE ANSWER
# ═══════════════════════════════════════════════════════════════════════════
s = slide()
bg(s, INK)

# Full-width gold rules
add_rect(s, Inches(0.55), Inches(1.1), Inches(12.23), Inches(0.05), AMBER)
add_rect(s, Inches(0.55), Inches(6.35), Inches(12.23), Inches(0.05), AMBER)

txbox(s, 'THE ANSWER',
      Inches(0.5), Inches(1.3), Inches(12.33), Inches(0.7),
      font='Cinzel', size=14, color=GDIM, align=PP_ALIGN.CENTER)

txbox(s, 'Buy the market.\nHold it forever.\nPay no one to predict.',
      Inches(0.5), Inches(2.1), Inches(12.33), Inches(2.8),
      font='Cormorant Garamond', size=52, bold=True, italic=True,
      color=IVORY, align=PP_ALIGN.CENTER)

divider(s, Inches(5.05))

txbox(s, 'Index funds. Broad diversification. Time in the market.',
      Inches(0.5), Inches(5.25), Inches(12.33), Inches(0.7),
      font='DM Sans', size=18, color=GHOST, align=PP_ALIGN.CENTER)

# ═══════════════════════════════════════════════════════════════════════════
# SLIDE 11 — COMPOUNDING
# ═══════════════════════════════════════════════════════════════════════════
s = slide()
bg(s, VOID)
accent_bar(s, SAGE)

label(s, 'THE EIGHTH WONDER', Inches(0.65), Inches(0.9), Inches(12), Inches(0.4),
      color=SAGE2, size=10)

txbox(s, 'Compounding',
      Inches(0.65), Inches(1.35), Inches(12), Inches(1.2),
      font='Cormorant Garamond', size=60, bold=True, color=SAGE2,
      align=PP_ALIGN.CENTER)

add_rect(s, Inches(4.5), Inches(2.65), Inches(4.33), Inches(0.02),
         SAGE, alpha_pct=0.5)

# Exponential curve (dots)
curve_rng = random.Random(3)
for i in range(30):
    t  = i / 29.0
    xp = 0.9 + t * 11.5
    yp = 6.5 - (math.exp(t * 2.8) - 1) / (math.exp(2.8) - 1) * 3.4
    dot = s.shapes.add_shape(9, Inches(xp - 0.05), Inches(yp - 0.05),
                              Inches(0.1), Inches(0.1))
    dot.fill.solid()
    dot.fill.fore_color.rgb = SAGE2
    dot.line.fill.background()

# X-axis
add_rect(s, Inches(0.85), Inches(6.55), Inches(11.6), Inches(0.03), GHOST, alpha_pct=0.3)

txbox(s, '$1,000  →  $17,449  in 30 years at 10% p.a.',
      Inches(0.8), Inches(5.5), Inches(11.73), Inches(0.7),
      font='JetBrains Mono', size=14, color=SAGE2, align=PP_ALIGN.CENTER)

txbox(s, 'Time is the only edge the market gives you for free.',
      Inches(0.8), Inches(6.1), Inches(11.73), Inches(0.6),
      font='DM Sans', size=16, color=GHOST, align=PP_ALIGN.CENTER)

# ═══════════════════════════════════════════════════════════════════════════
# SLIDE 12 — THE CLOSE
# ═══════════════════════════════════════════════════════════════════════════
s = slide()
grad_bg(s, RGBColor(0x10,0x0c,0x06), RGBColor(0x01,0x02,0x06))

# Sun-ray triangles (simplified as thin wedge shapes via thin rects at angles)
# Use colored rects radiating from bottom-center
ray_ox = Inches(6.67)
ray_oy = Inches(7.8)
for i in range(18):
    angle = math.radians(-90 + (i - 9) * 12)
    lx = math.cos(angle) * 8
    ly = math.sin(angle) * 8
    # Draw as a thin rect pointing outward (approximate)
    add_rect(s,
             ray_ox + Inches(lx * 0.05) - Inches(0.015),
             ray_oy + Inches(ly * 0.05) - Inches(0.015),
             Inches(abs(lx) * 0.6 + 0.03),
             Inches(0.03),
             AMBER, alpha_pct=0.06 + 0.02 * math.cos(angle * 3))

# Horizon glow bar
add_rect(s, Inches(0), Inches(5.2), Inches(13.33), Inches(0.08),
         AMBER, alpha_pct=0.25)
add_rect(s, Inches(0), Inches(5.3), Inches(13.33), Inches(0.5),
         AMBER, alpha_pct=0.06)

txbox(s, 'Walk.',
      Inches(0.5), Inches(1.8), Inches(12.33), Inches(2.2),
      font='Cormorant Garamond', size=110, bold=True, italic=True,
      color=GOLD, align=PP_ALIGN.CENTER)

txbox(s, '"The stock market is a random walk.\nBut the long walk upward belongs to those\nwho never stopped walking."',
      Inches(1.0), Inches(4.2), Inches(11.33), Inches(1.8),
      font='Cormorant Garamond', size=24, italic=True,
      color=IVORY, align=PP_ALIGN.CENTER)

txbox(s, '— Burton G. Malkiel',
      Inches(0.5), Inches(6.05), Inches(12.33), Inches(0.5),
      font='Cinzel', size=12, color=GDIM, align=PP_ALIGN.CENTER)

# ── Save ─────────────────────────────────────────────────────────────────────
out = '/home/user/https-github.com-nextlevelbuilder-ui-ux-pro-max-skill/random-walk-slideshow.pptx'
prs.save(out)
print(f'Saved: {out}')
print(f'Slides: {len(prs.slides)}')
