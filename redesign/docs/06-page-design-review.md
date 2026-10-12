# 06 · Design review per page

Date: 2026-10-12. Every original page was opened at **390×844 (mobile)** and **1440×900 (desktop)** through the local server, measured with a script, and screenshotted for 16 representative pages (`screens/pages/`).
**Measured**: H1 position, CTAs, trust and price signals in the first screen, page length, tap targets, images, breadcrumbs, number of capitals labels. **Scores (1–5) are my judgement**, made against the new homepage and `03-design-system.md`.

## 1. Problems every page shares (fix once, in the template)
| # | Problem | Evidence (measured) |
|---|---|---|
| S1 | **The old design, not the approved one.** Every page uses the previous `styles.css` (Manrope, cream background, two-row header with utility bar, "Volledig redesignconcept" bar), so each click from the new homepage changes the look. | All 31 pages link `styles.css`; only `/` uses `assets/css/site.css`. |
| S2 | **No price and almost no proof in the first screen.** | Price in the first screen: **0 of 31** (not even `/tarieven/`). Rating or reviews in the first screen: **2 of 31** (beoordelingen, ontruiming). |
| S3 | **The hero eats the first screen.** A breadcrumb, a capitals label, a 3–4-line H1 and a long lead push everything else down. | H1 starts **250–400 px** down on desktop; on mobile the first screen is only the H1 and two buttons. |
| S4 | **Copy explains the form, not the service.** Repeated H2s like "Deze gegevens maken uw aanvraag compleet", "Antwoorden voor deze situatie", "Laat de volledige situatie beoordelen" describe what to fill in rather than answering what people search for. | The same H2s appear on 4–15 pages (see 07 §1). |
| S5 | **Template tells**: capitals labels above every heading, a primary button colour that switches between orange and petrol, rounded photo cards. | 5–11 capitals labels per page (measured); petrol primary on particulier, orange on most others. |
| S6 | **Very long mobile pages with few images.** | Mobile page height 6,000–13,900 px. 9 pages have no photo in the main content; the same lift photo is the only image on all 7 city pages, spoed and beoordelingen. |
| S7 | **Mobile action bar without a call button.** The old bar has WhatsApp and Aanvraag only. | All 31 pages. |

What already works and should stay: one H1 per page, breadcrumbs on most service, location and guide pages, FAQ as `<details>`, no horizontal scrolling, no missing alt text, and generous tap targets on mobile (0–9 small targets per page).

## 2. Scores by template type
Criteria: **L** layout · **H** hierarchy · **M** mobile usability · **C** CTA placement · **T** trust signals · **R** readability · **I** image use · **K** consistency with the new homepage. Each 1–5.

### Local pillar: `/verhuisbedrijf-utrecht/`
| Page | L | H | M | C | T | R | I | K | Avg |
|---|---|---|---|---|---|---|---|---|---|
| verhuisbedrijf-utrecht | 3 | 3 | 2 | 3 | 2 | 3 | 3 | 1 | **2.5** |

Top 3 problems
1. **The most valuable page is the longest and least focused**: 13,900 px on mobile, 11 sections, 11 capitals labels and 9 H2s. The useful Utrecht content (parking, ontheffing, binnenstad, wijken) starts below the fourth screen.
2. **No price or rating where people decide**: €35,70 and 4,9 ★ are in the title tag and meta description, but not in the first screen.
3. **The hero and the side card repeat each other** ("Wat heeft het team nodig?" checklist next to the H1), adding length without adding answers.

### Service pages (7): particulier, zakelijk, interne, spoed, opslag, verhuislift-huren, ontruiming
| Page | L | H | M | C | T | R | I | K | Avg |
|---|---|---|---|---|---|---|---|---|---|
| particulier-verhuizen | 3 | 2 | 3 | 3 | 1 | 3 | 2 | 1 | **2.3** |
| zakelijk-verhuizen | 3 | 2 | 3 | 3 | 1 | 3 | 2 | 1 | **2.3** |
| interne-verhuizing | 3 | 3 | 3 | 2 | 1 | 3 | 3 | 1 | **2.4** |
| spoedverhuizing | 3 | 2 | 3 | 4 | 1 | 3 | 2 | 1 | **2.4** |
| opslag-en-verhuizen | 3 | 2 | 3 | 3 | 1 | 3 | 2 | 1 | **2.3** |
| verhuislift-huren | 3 | 3 | 3 | 2 | 2 | 3 | 3 | 1 | **2.5** |
| ontruiming | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 1 | **3.5** |

Top 3 problems (pattern)
1. **Thin and form-shaped**: four of these pages have under 400 words, and their H2s are the same process headings (S4). They don't answer what each service costs, who it's for, or what's included.
2. **No proof or price in the first screen** (S2). Verhuislift-huren, the biggest keyword (4,400 + 4,400/mo), has **no CTA in the desktop first screen** (measured) and no lift price at all.
3. **The same image on several pages**, and no "before and after" or process photos except on ontruiming.

Ontruiming is the model to copy: before and after photos, a price section, a clear process and trust in the first screen.

### Location pages (7): Amersfoort, Houten, IJsselstein, Maarssen, Nieuwegein, Woerden, Zeist
| Page | L | H | M | C | T | R | I | K | Avg |
|---|---|---|---|---|---|---|---|---|---|
| each of the 7 | 3 | 2 | 3 | 3 | 1 | 3 | 1 | 1 | **2.1** |

Top 3 problems (identical on all 7, which is itself the problem)
1. **The same page seven times**: the same H1 pattern, the same seven H2s (two of which repeat within each page: "Verhuizen in [plaats] voorbereiden." appears twice), and 58–63% shared text (see 07 §1).
2. **Nothing local you can see**: one shared lift photo, no map, no neighbourhoods or distances in the first screen, no local review.
3. **No proof or price** in the first screen; the primary CTA is "Bereken uw verhuisvolume", a research action, not a booking action.

### Hubs (3): diensten, werkgebied, verhuistips
| Page | L | H | M | C | T | R | I | K | Avg |
|---|---|---|---|---|---|---|---|---|---|
| diensten | 3 | 3 | 3 | 3 | 1 | 3 | 1 | 1 | **2.3** |
| werkgebied-utrecht | 3 | 3 | 3 | 2 | 1 | 3 | 1 | 1 | **2.1** |
| verhuistips | 3 | 3 | 3 | 3 | 1 | 3 | 2 | 1 | **2.4** |

Top 3 problems
1. **Hubs that don't hub**: diensten repeats the homepage service grid (43% containment, 07 §1), werkgebied has no map, and verhuistips links to only 2 of the 4 guides.
2. **No images** (diensten, werkgebied) and no visual way to scan the list (no prices on services, no distances on places).
3. **No breadcrumbs** on all three (measured), while their children have them.

### Pricing: tarieven
| Page | L | H | M | C | T | R | I | K | Avg |
|---|---|---|---|---|---|---|---|---|---|
| tarieven | 3 | 3 | 3 | 2 | 1 | 4 | 1 | 1 | **2.3** |

Top 3 problems
1. **The prices are below the first screen**: the hero is text and two buttons; "€71,40 per uur" first appears after scrolling. No CTA in the desktop first screen (measured).
2. **No proof** next to the prices (rating, "geen weekendtoeslag" as a visible guarantee).
3. **No breadcrumb and no images.**

### Guides (4): prijsgids, wasmachine, verhuislift-beslisgids, verhuischecklist
| Page | L | H | M | C | T | R | I | K | Avg |
|---|---|---|---|---|---|---|---|---|---|
| prijsgids | 3 | 3 | 3 | 2 | 2 | 3 | 1 | 1 | **2.3** |
| wasmachine-verhuizen | 3 | 4 | 3 | 3 | 3 | 4 | 3 | 1 | **3.0** |
| verhuislift-beslisgids | 3 | 3 | 3 | 2 | 2 | 3 | 3 | 1 | **2.5** |
| verhuischecklist | 4 | 4 | 3 | 2 | 1 | 4 | 1 | 1 | **2.5** |

Top 3 problems
1. **No article layout**: there's no table of contents, reading width or "on this page" list, so 600–780 words read as a landing page. Wasmachine is the exception (author line, update date, step list).
2. **The prijsgids has no worked examples or table** of the real prices from `/tarieven/`, which is exactly what cost searchers want (and what AI Overviews quote).
3. **CTA missing in the first screen** on three of four (measured), and weak links to the matching service page.

### Tool: m3-calculator
| Page | L | H | M | C | T | R | I | K | Avg |
|---|---|---|---|---|---|---|---|---|---|
| m3-calculator | 3 | 3 | 2 | 4 | 1 | 3 | 2 | 1 | **2.4** |

Top 3 problems
1. **The tool starts below a full-screen hero**: on mobile you scroll past the H1, lead, photo and buttons before the first item to count.
2. **11,300 px on mobile with 13 `<details>`**: the room lists are long, with no running total that stays visible.
3. **The hand-off stops at volume**: the result already carries the m³ into the quote link (good, measured in `m3-calculator.js`), but it shows no price indication.

### Conversion: offerte, bedankt
| Page | L | H | M | C | T | R | I | K | Avg |
|---|---|---|---|---|---|---|---|---|---|
| offerte | 4 | 4 | 4 | 4 | 2 | 4 | 2 | 1 | **3.1** |
| bedankt | 3 | 3 | 4 | 3 | 1 | 4 | 1 | 1 | **2.5** |

Top 3 problems
1. **No reassurance beside the form**: no rating, no response time and no "what happens next" on the form step itself.
2. **The form starts below a long intro** on mobile (step 1 begins about 400 px down).
3. **Bedankt** doesn't show what happens next with times or the reviews; it's a dead end apart from three links.

### Trust (3): over-ons, beoordelingen, werkwijze
| Page | L | H | M | C | T | R | I | K | Avg |
|---|---|---|---|---|---|---|---|---|---|
| over-ons | 3 | 2 | 3 | 3 | 2 | 2 | 2 | 1 | **2.3** |
| beoordelingen | 3 | 3 | 3 | 3 | 4 | 3 | 3 | 1 | **2.9** |
| werkwijze | 3 | 3 | 3 | 3 | 1 | 3 | 1 | 1 | **2.3** |

Top 3 problems
1. **Over ons says little about you**: the H1 ("…familiebedrijf voor verhuisaanvragen") and the lead ("Wij behandelen offerteaanvragen via de openbare mailbox") talk about processing requests, not the family, the team, the trucks or the 15 years.
2. **Werkwijze has no images and repeats the homepage steps**, at 369 words.
3. **No breadcrumbs** on all three (measured).

### Legal (2): privacyverklaring, algemene voorwaarden
| Page | L | H | M | C | T | R | I | K | Avg |
|---|---|---|---|---|---|---|---|---|---|
| privacyverklaring | 4 | 4 | 3 | 3 | 3 | 3 | 3 | 1 | **3.0** |
| algemene-voorwaarden | 4 | 4 | 3 | 3 | 3 | 3 | 3 | 1 | **3.0** |

Top 3 problems
1. **No table of contents** for jumping to a numbered section, and body text at 16 px where the new system uses 18 px (measured).
2. **Small links on mobile** (5–9 links under 44 px, the most of any template).
3. **The full marketing header** above legal text; fine, but the old design (S1).

## 3. Priority by template (worst first, weighted by what each page earns)
1. Location pages (2.1, 7 pages, duplicate risk)
2. Local pillar (2.5, the head-term page)
3. Service pages (2.3–2.5; ontruiming 3.5)
4. Pricing and the prijsgids (2.3, the cost cluster: 3,800+ searches a month)
5. Hubs (2.1–2.4)
6. Tool (2.4, 1,900 a month for "m3 berekenen")
7. Trust (2.3–2.9), Conversion (2.5–3.1), Guides (2.3–3.0), Legal (3.0)

The full rebuild order, weighted by SEO and revenue, is in 08 §5.
