# 03 · Design system: "Op route" (direction A)

Date: 2026-10-12 · Approved direction: **A** (Hamza, 2026-10-12).
Source of truth: [`assets/css/site.css`](../../assets/css/site.css) in the project root (merged from /redesign on 2026-10-12). Live reference: [`design-system.html`](design-system.html) (open it through a local server so the icons load, for example the `site` preview on port 8080 → `/redesign/docs/design-system.html`).

## 0. How it's built (WordPress-friendly)
- **One stylesheet** with cascade layers in this order: `tokens, base, layout, components, sections, utilities`. WordPress theme and plugin CSS is unlayered, so it always wins over ours. That makes conflicts visible instead of silent, and no `!important` is needed.
- **Tokens in three tiers** on `:root`: literal colours (`--petrol-700`), semantic roles (`--color-brand`), component values (`--tap`, `--route-w`). Pages use only the semantic tokens.
- **Reusable sections**: header, hero, plates, service cards, steps, Utrecht facts, reviews, FAQ, CTA band, quote block, footer and mobile action bar. Each one is a block of HTML you can paste into a WordPress Custom HTML block or turn into a reusable block or pattern.
- **One small script** (`assets/js/site.js`, about 3 KB unminified): mobile menu, price estimate, click-to-load map. Every page still works without it.
- **No framework, no build step.**

## 1. Colour
| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--color-bg` (krijt) | `#F2F6F7` | page background | |
| `--color-surface` | `#FFFFFF` | cards, forms, alternating sections | |
| `--color-text` (diep petrol) | `#00303F` | text, dark fields | 12.9:1 on krijt, 14:1 white on it |
| `--color-brand` (petrol) | `#004E66` | links, plates, step numbers | 8.5:1 on krijt, 9.2:1 white on it |
| `--color-signal` (oranje) | `#EA8C14` | primary button, route line, review rule | dark text on it 5.5:1 |
| `--orange-400` | `#F5A33B` | primary button hover | dark text on it 6.8:1 |
| `--color-text-soft` | `#5A6E75` | secondary text | 4.9:1 on krijt, 5.4:1 on white |
| `--color-control` | `#7A8C92` | form borders | 3.5:1 on white (UI minimum is 3:1) |
| `--color-on-dark-soft` | `#B9CBD1` | secondary text on dark | 8.4:1 |
| `--color-success` | `#2F7A57` | "inbegrepen" ticks | 5.2:1 |
| `--color-error` | `#B42318` | error text | 6.6:1 |
| `--color-line` | `#C9D6DA` | decorative dividers only | not used for anything that must be seen |

**Rules**
- **Orange is never text on a light background** (2.3:1). It is a fill or a line.
- **Text on orange is always `#00303F`**, never white (white on orange is 2.4:1).
- One orange element per screen should be the primary action. The route line and the review rule are thin enough not to compete.

## 2. Typography
- **Family**: Overpass (Google Fonts, SIL Open Font License), weights 400, 600, 700, 800. One family for everything.
- **Loading**: now from Google Fonts with `display=swap`, loaded without blocking rendering. **For launch, self-host** a latin subset as woff2 (about 4 files, roughly 20 KB each) in the child theme with `font-display: swap`. `font-size-adjust: from-font` on `body` keeps the fallback font the same visual size while Overpass loads, so the swap doesn't cause layout shift.
- **Scale** (rem-based, so the visitor's own text-size setting scales it):

| Token | Size | Weight | Use |
|---|---|---|---|
| `--step-4` | 36 → 60 px | 800 | H1 |
| `--step-3` | 30 → 40 px | 800 | H2, estimate result |
| `--step-2` | 24 → 28 px | 700 | H3, plate figures |
| `--step-1` | 20 → 22 px | 700 / 400 | H4, lead text, FAQ questions, review quotes |
| `--step-0` | 18 px | 400 | body |
| `--step--1` | 15 px | 400 | small print, hints, captions |

- Line height 1.6 for body, 1.1 for headings; maximum 66 characters per line (`.measure`).
- Prices and phone numbers use tabular figures.
- **Sentence case everywhere. No capitals-only labels, no eyebrow labels above headings.**

## 3. Space, radius, elevation
- **Spacing** (4 px base): 4, 8, 12, 16, 24, 32, 48, 64, 96 px (`--space-1` … `--space-9`).
- **Section padding**: 48 → 96 px, fluid. **Gutter**: 16 → 32 px, fluid. **Content width**: 76 rem (1216 px).
- **Radius**: 4 px for plates and form fields, 6 px for buttons, 8 px for cards and photos. No pill shapes.
- **Shadows**: only on things that float (the mobile action bar and the desktop dropdown). Everything else is flat, separated by colour or a 1 px line.

## 4. Signature elements
- **Route line**: removed at Hamza's request (2026-10-12). The orange accent now appears only on the primary button, the review rule and the CTA band edge.
- **Plates** (`.plate`): the hard facts (price, Google score, "€0 weekendtoeslag") as petrol signs with a white inner border, like a Dutch information sign. A plate can be a link (the Google plate links to the reviews).

## 5. Components
| Component | Class | Rules |
|---|---|---|
| Primary button | `.btn.btn--primary` | Orange, dark text, 48 px minimum height. **One per screen.** Label says what happens: "Offerte aanvragen", "Bereken uw prijs". |
| Secondary button | `.btn.btn--secondary` | Petrol outline. Used for "Bel 085 050 8282" and "WhatsApp". Icon plus text, never icon alone. |
| Button row | `.btn-row` | Wraps on small screens. |
| Plates | `.plates > .plate` | Max three in a row. |
| Ticks | `ul.ticks` | For what's included; green tick, orange on dark. |
| Service card | `article.card` + `a.card__link` | The whole card is clickable through the heading link (one link per card, so screen readers hear it once). Optional `.card__media` photo and `.card__price`. |
| Review | `figure.review` | Quote, name, neighbourhood, stars with a text label, source. Only real reviews, with permission. |
| Steps | `ol.steps` | Only for real sequences (the 4-step process). |
| FAQ | `details.faq` | Native `<details>`: the answer is in the HTML, findable with Ctrl+F and indexable by Google. Questions are not headings (see guide note below). |
| Form field | `.field` > `label`, `.hint`, `.input`, `.error` | Label above, hint linked with `aria-describedby`, `autocomplete` set, errors shown only after the visitor has interacted (`:user-invalid`). |
| Choice tiles | `fieldset.choices` > `label.choice` | Radio buttons styled as 48 px tiles, with a `legend`. |
| Estimate result | `.estimate-out` | Petrol plate with the price range and how it was worked out. |
| Utrecht facts | `dl.facts` | Term plus short answer, petrol rule above. |
| Map | `.map` + `button[data-map-src]` | Google Maps loads only after a click, so it never costs speed or sets cookies before consent. |

## 6. Navigation
- **Desktop (≥ 1024 px)**: sticky white header on one line: logo, five items (Verhuisbedrijf Utrecht, Diensten, Tarieven, Werkgebied, Over ons), the phone number as a link from 1200 px, and "Offerte aanvragen". Between 1024 and 1360 px the menu text drops to 16 px so it never wraps. Reviews, Werkwijze and m³ calculator sit under "Over ons"; every link from the current menu is kept. "Diensten" opens a dropdown on hover and on keyboard focus. The current page is underlined in orange.
- **Mobile**: logo plus a "Menu" button with a text label (48 px). The menu opens below the header as a simple list, closes with Escape, and reports its state with `aria-expanded`. The header is not sticky on mobile; the action bar takes that role.
- **Mobile action bar**: fixed at the bottom on screens narrower than 1024 px: "Bel", "WhatsApp", "Offerte". The page reserves its height so it never covers content, and it respects the iPhone home indicator area.
- **Skip link** "Direct naar de inhoud" is the first focusable element.

## 7. Footer
Dark petrol (`#00232F`). Four columns on desktop, stacked on mobile:
1. **NAP** in `<address>`: Verhuisbedrijf Busje komt zo, De Brauwlaan 4, 3526 XS Utrecht, 085 050 8282, info@busje-komtzo.nl. Same spelling as the Google Business Profile.
2. **Openingstijden**: ma t/m zo 07:00–22:00.
3. **Diensten**, including Ontruiming (audit T7).
4. **Werkgebied**, with "Verhuisbedrijf Utrecht" first (audit T7).
Then the legal bar: KvK 97184004, btw-nummer, privacy, voorwaarden.

⚠ The audit (L2) flagged that a competitor lists the same street address. The footer shows the address as the audit recommends; **check the Google Business Profile decision before launch.**

## 8. CTA blocks
- **Hero CTA**: primary "Bereken uw prijs" (jumps to the estimate) plus the secondary call button.
- **CTA band** (`.cta-band`): a white bar with an orange edge. One sentence, one button. Used between sections, for example "Morgen al verhuizen? Bel 085 050 8282".
- **Route end** (`.route-end`): point B. A dark section with a short quote form (van, naar, datum, telefoon of e-mail) that continues on `/offerteaanvraag/`, plus the three promises.

## 9. Accessibility rules (WCAG 2.2 AA)
1. **Contrast**: text at least 4.5:1, large text and UI borders at least 3:1. Every pair in §1 is checked.
2. **Focus**: every link, button, field and summary gets a visible 3 px outline with a 3 px gap (`:focus-visible`), petrol on light, orange on dark. Never `outline: none` without a replacement.
3. **Tap targets**: 48 px for buttons, fields and choice tiles; 44 px minimum for every other link, including footer and legal links.
4. **Headings**: one H1 per page, no skipped levels. FAQ questions sit in `<summary>`, not in headings, as the modern-web accessibility guide advises.
5. **Forms**: visible labels, no placeholder-only fields, `autocomplete` values, errors in text (not colour alone), shown after interaction.
6. **Images**: descriptive Dutch alt text; `alt=""` for decorative images; no text inside images.
7. **Motion**: no automatic animation; only small colour transitions on hover.
8. **Language and landmarks**: `<html lang="nl">`, `header`, `nav`, `main`, `footer`; a skip link.
9. **Windows high contrast**: plates, buttons and the route line get real borders in forced-colours mode.
10. **Text size**: all sizes in rem; nothing breaks at 200% zoom.

## 10. Voice and copy (brand consistency check)
Checked against the current site copy and the logo with the marketing brand-review method:
- **Address the visitor as "u"**, as the current site does. Plain, short sentences; active voice.
- **Name**: "Busje komt zo" in running text and "Verhuisbedrijf Busje komt zo" in the footer, matching the profile (audit O12). Not "Busje Komt Zo".
- **Numbers**: €35,70 (comma decimal), 07:00–22:00, 085 050 8282 written with spaces.
- **Only claims you can prove**: "4,9 op Google (162 reviews)", "geen weekendtoeslag", "geen voorrijkosten in Utrecht", "eigen verhuislift", "vaste prijs na opname". Avoid "beste", "snelste" or "goedkoopste" unless you can back them up.
- **Photos**: use real photos of your own truck, lift and team. `assets/utrecht-moving-hero.webp` appears to be AI-generated (the van isn't yours), so the redesign doesn't use it. If you use AI images later, keep them to illustrations and never present them as your crew, vehicles or customers. The whole design relies on looking checkably real.

## 11. Components added for inner pages (2026-10-12)
| Component | Class | Rules |
|---|---|---|
| Breadcrumb | `nav.breadcrumb > ol > li` | First thing in the hero on every inner page. The last item is `<span aria-current="page">`. Separators are CSS-only ("›", hidden from screen readers). Links have 44 px targets. Matches the `BreadcrumbList` JSON-LD. |
| Source line | `p.source` | Small text under facts or examples: where a fact comes from (with a link), or the conditions of a price example. Every local or legal fact gets one. |
| Link grid | `ul.link-grid` | Columns of plain links with descriptive anchors (places, related pages). Used for hub-and-spoke links, not as navigation. |

**Ticks list rule**: each `<li>` in `ul.ticks` must contain plain text or **one** wrapping element (`<li><span><strong>Kop.</strong> tekst</span></li>`). The tick is a grid column, so loose mixed content breaks the layout.

## 12. Icons and responsive components (2026-10-12, Hamza's feedback)
**Copy rule (Hamza)**: the homepage keeps its original keyword copy and does **not** lead with prices or cost calculations; clients find that off-putting. Price details live on `/tarieven/` and the price guide. Proof (Google 4,9, Trustoo 9,6, reviews) stays prominent.

| Component | Class | Rules |
|---|---|---|
| Icon list | `ul.icon-list` (`--inline`, `--grid`) | Icon in a soft petrol disc + short text (`<b>` for a short heading). Inline variant for small notes under buttons; grid variant for 2–4 key facts. On dark sections the disc turns translucent with an orange icon. |
| Brand icons | `svg.icon.icon--brand` with `#google`, `#trustoo` | Full-colour marks from the sprite (no stroke). Used in rating plates, review captions and review buttons. |
| Logo plate | `.plate.plate--icon` | A rating plate with the brand mark on a white disc. |
| Row card | `.card.card--row` inside `.grid.grid--services` | Phones: icon left, title and text right, compact. 2 columns from 576 px, 4 columns with stacked layout from 1024 px. |
| Scroller | `.scroller` (on `.photo-row`, `.review-grid`) | Below 768 px: a horizontal swipe row with scroll-snap, cards at 82% width so the next one peeks in, `tabindex="0"` and an `aria-label` for keyboard users. From 768 px it falls back to the normal grid. |
| Route item | `ul.routes > li` | Icon disc (petrol, white icon) beside the heading, text and link. |
| Footer contact | `ul.icon-list.footer-contact` inside `<address>` | Address, phone, WhatsApp, e-mail and hours, each with an icon. |

Tested at 320, 360, 390, 414, 768, 1024, 1280 and 1440 px: no horizontal scrolling, no tap target under 44 px outside running text, axe clean.
