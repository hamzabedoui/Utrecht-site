# 02b · Three design directions (Step 3, awaiting your choice)

Date: 2026-10-12. A visual comparison board is in [`directions-board.html`](directions-board.html) (open it in a browser) with a screenshot in `directions-board.png`.

**Fixed for all three**: your logo (petrol `#004E66` and orange `#EA8C14`, sampled from `assets/busje-komtzo-logo.png`), your real photos, every SEO element from the audit, WordPress-friendly CSS variables and reusable sections, one self-hosted font family or two at most, no framework. All text colours below were checked against WCAG AA (ratios listed).

Fonts already used by competitors, so avoided: Poppins, Montserrat, Open Sans, Ubuntu, Lato, Archivo, Inter, Bricolage Grotesque, Hanken Grotesk.

---

## A · "Op route" (recommended)
**Mood and positioning**: the clearest, fastest and most transparent mover in Utrecht. It borrows from Dutch road signage and from your truck's livery: calm petrol fields, orange used only as a signal, information you can read at a glance. It says "we tell you the price and we show up".

**Palette**
| Role | Hex | Check |
|---|---|---|
| Page background ("krijt") | `#F2F6F7` | |
| Text and dark fields ("diep petrol") | `#00303F` | 12.9:1 on krijt |
| Brand petrol (links, headers) | `#004E66` | 8.5:1 on krijt; white on it 9.2:1 |
| Signal orange (primary button, route line) | `#EA8C14` | dark text on it 5.5:1 (white on orange fails at 2.4:1, so never use white) |
| Secondary text | `#5A6E75` | 4.9:1 on krijt |
| White cards | `#FFFFFF` | |

**Fonts**: **Overpass** for everything (free, Google Fonts, variable weight). It is based on Highway Gothic, the US road-sign letter, so it reads as signage without being a novelty face. Headings 800, body 400 at 18 px, figures tabular for prices. One family, about 35–45 KB as a self-hosted latin subset.

**Layout**: left-aligned, a 12-column grid that collapses to one column. A thin orange "route line" runs from the hero (A: current address) down the page to the quote block (B: new address), connecting the sections in the order a customer thinks: price → how it works → Utrecht knowledge → reviews → quote. Price and rating sit in a sign-like "plate" beside the H1. The one animation: the route line draws once on page load (switched off for reduced motion).

**Image style**: documentary photos of your own truck, lift and crew in recognisable Utrecht streets, shot wide at eye level, natural colour. No stock, no cut-outs, no text in images.

**Rough homepage**
1. Header: logo, 5 nav items, phone as a visible link, "Offerte" button.
2. Hero: H1 (audit wording), one line of promise, the price plate (€35,70 per verhuizer per uur incl. btw, geen weekendtoeslag, geen voorrijkosten in Utrecht), the Google plate (4,9 · 162 reviews, linked), primary button "Bereken uw prijs", photo of the truck in Utrecht. Sticky bar on mobile: Bel · WhatsApp · Offerte.
3. Three-question price estimate (woning, verdieping, lift) giving an hours and price range, then a link to the full quote.
4. Services as a short list with prices "vanaf", linking to each service page.
5. "Zo verloopt uw verhuizing": the real 4-step sequence (opname → vaste prijs → verhuisdag → nazorg).
6. "Verhuizen in Utrecht": parking, ontheffing, binnenstad, lift for narrow stairs, neighbourhoods, a map loaded on click.
7. Reviews with name, neighbourhood and date, linked to Google.
8. Quote block (point B on the route line), then the footer with full address, opening hours and service areas.

**Competitor weaknesses it exploits**: no readable price (all 8), hidden proof on mobile (5 of 8), slow heavy pages (SVS, Truckit, Budget), cluttered navigation (VBU, Budget).

---

## B · "Rustig geregeld"
**Mood and positioning**: the calmest, most readable and most personal mover, aimed at the people for whom moving is stressful: older customers, families, house clearance after a death. It says "the family business that takes it off your hands".

**Palette**
| Role | Hex | Check |
|---|---|---|
| Background | `#FFFFFF` | |
| Section tint ("mist") | `#EEF5F6` | |
| Text ("inkt") | `#0E3A48` | 12.2:1 on white |
| Brand petrol | `#00506B` | 8.9:1 on white |
| Orange (buttons, with inkt text) | `#EA8C14` | inkt on it 4.8:1 |
| "Inbegrepen" green (checks) | `#2F7A57` | 5.2:1 on white |
| Warm note tint | `#FDF0DE` | inkt on it 10.9:1 |

**Fonts**: **Atkinson Hyperlegible Next** for everything (free, Google Fonts, variable). It was designed by the Braille Institute for readers with low vision; letters that are easily confused (I, l, 1; O, 0) are deliberately distinct. Body 19 px, line height 1.6, headings 700 in sentence case.

**Layout**: one comfortable reading column (max 68 characters) with generous spacing, centred on the page but left-aligned text. Few, large elements per screen. Navigation reduced to 4 items plus a phone button. A real numbered sequence for "Zo werkt het", because it is one.

**Image style**: warm portraits of your team at work and of customers in their homes, natural light, close framing, people looking at each other rather than at the camera.

**Rough homepage**
1. Header: logo, 4 items, a large "Bel 085 050 8282" button.
2. Hero: H1, a two-sentence promise, the family photo, the rating, one button "Plan een gratis opname".
3. "Wat u van ons kunt verwachten": the five guarantees in plain words with green checks.
4. Step-by-step: opname → vaste prijs → verhuisdag → nazorg, each with one photo.
5. Services as large tappable rows (verhuizen, verhuislift, opslag, ontruiming, seniorenverhuizing).
6. Reviews as quoted stories, then "Verhuizen in Utrecht" answers as accordions, then the quote form and footer.

**Competitor weaknesses it exploits**: small text (VSN 13 px, SVS 15 px), shouting caps buttons (VBU, Snelle), blocking cookie walls (5 of 8), and doubtful trust (Draagkracht's notice, stock photos).

**Trade-off**: it converts the careful planner best but feels slower for the "I need a lift tomorrow" visitor. The price tool and spoed info move lower down.

---

## C · "Livrei"
**Mood and positioning**: bold and unmistakable, like the side of your truck. Large petrol fields, an orange stripe that comes straight from the speed lines in your logo, big confident type. It says "local, energetic, available".

**Palette**
| Role | Hex | Check |
|---|---|---|
| Main field ("nacht petrol") | `#00384A` | white on it 12.6:1 |
| Brand petrol (second field) | `#00506B` | |
| Livery orange (stripes, big type, buttons) | `#F0901A` | 5.2:1 on nacht petrol; dark text on it 6.5:1 |
| Text on orange | `#0B2630` | 6.5:1 |
| Light sections ("ijs") | `#E6F1F3` | nacht petrol text on it 11.0:1 |
| White | `#FFFFFF` | |

**Fonts**: **Big Shoulders Display** (free, Google Fonts) for headlines, one heavy weight, set very large; **Public Sans** (free, Google Fonts, variable) for body at 18 px. Two families, about 60 KB together.

**Layout**: full-width alternating bands, dark petrol and light ice, separated by the orange livery stripe. Headlines run large and tight; photos run edge to edge. The one animation: the three speed lines from the logo slide in once behind the hero headline.

**Image style**: action photos, cropped tight: the lift extending, hands on a wrapped cabinet, the truck turning into a street. Higher contrast, still natural colour.

**Rough homepage**
1. Dark header with the white version of the logo (needs a white/reversed logo file), phone, "Offerte".
2. Hero band: huge H1, the price in orange, the rating, two buttons, a full-bleed truck photo.
3. Orange stripe band: "Geen weekendtoeslag · geen voorrijkosten in Utrecht · eigen verhuislift".
4. Service bands, each with a large photo; Utrecht band; reviews band; quote band; footer.

**Competitor weaknesses it exploits**: the dated, cluttered look (VBU, Snelle Jongens), generic stock imagery (Snelle, Truckit), weak or absent brand (VHL).

**Trade-offs and risks**: the large dark photo bands are the heaviest of the three (LCP risk, needs strict image budgets); it needs a reversed logo; and orange-heavy layouts sit close to SVS and Truckit, which are both orange brands.

---

## Recommendation: A · "Op route"
1. **It is built around the opportunities that win business**: price in the first screen, proof on mobile, speed. The other two treat these as secondary.
2. **It is the best fit for SEO**: a light single font, light backgrounds and documentary photos keep LCP low; the route structure gives `/verhuisbedrijf-utrecht/` its 1,500+ words of depth as scannable sections instead of a wall of text.
3. **It is distinct from every competitor** (no one uses a signage style, a road-sign typeface or a cool chalk background) while staying true to your logo.
4. **It is the simplest to maintain in WordPress**: one font, a handful of tokens, sections that repeat on every service and city page.

I would borrow two things from B: its 18–19 px body text and its plain-language guarantees.

**Decisions I need from you**
1. Which direction: A, B or C (or A with changes)?
2. Price wording: is "vaste prijs na gratis opname, berekend op €35,70 per verhuizer per uur incl. btw" correct?
3. Do you have, or can you take, more photos of the truck and lift in Utrecht streets? The design leans on them, and `assets/` currently holds about ten real photos.
