# 08 · Redesign plan for all other pages (Step 4: awaiting approval)

Date: 2026-10-12. Built on 05 (inventory), 06 (design review), 07 (duplicates and structure), `seo-audit/` and `03-design-system.md`. **Nothing is rebuilt until you approve this plan.**

## 0. Decisions I need from you
1. **Approve the site tree** (§1), including **3 new pages**:
   - `/ontruiming-na-overlijden/` (230 searches a month combined, measured)
   - `/senioren-verhuizen/` (rebuild of a live URL; 740 a month)
   - `/hoeveel-verhuisdozen-heb-ik-nodig/` (320 a month)
2. **Merge `/interne-verhuizing/` into `/zakelijk-verhuizen/`** with a 301: yes or no? (I can't check its traffic; Search Console isn't connected.)
3. **Approve 6 title or H1 changes** that fix cannibalisation (§2). Everything else keeps the agreed titles, descriptions and URLs.
4. **Facts only you can give**, because I won't invent them:
   - a verhuislift price, or confirmation that it stays "prijs vooraf afgestemd"
   - storage: location, price per month and insurance
   - how the opname works (at home, by video, or both)
   - real photos per city, and real reviews that mention a city

## 1. Site tree: before and after
**Before** (32 files, flat, measured): `/` · verhuisbedrijf-utrecht · 7 services · 7 cities · diensten · werkgebied · verhuistips · tarieven · 4 guides · m3-calculator · offerte · bedankt · over-ons · beoordelingen · werkwijze · 2 legal. Hierarchy exists only in the menus, and only 22 pages have breadcrumbs.

**After**: the URLs stay flat and keep their slugs. The hierarchy comes from breadcrumbs, hubs and in-content links.

```
/  Home
├── /verhuisbedrijf-utrecht/            Local pillar (head term)
├── /diensten/                          Hub
│   ├── /particulier-verhuizen/
│   ├── /zakelijk-verhuizen/            absorbs /interne-verhuizing/ (301, if approved)
│   ├── /spoedverhuizing/
│   ├── /verhuislift-huren/
│   ├── /ontruiming/
│   │   └── /ontruiming-na-overlijden/  NEW (kosten ontruiming na overlijden 140, ontruiming na overlijden 50, huis … 40)
│   ├── /opslag-huren/
│   ├── /senioren-verhuizen/            REBUILD live URL (seniorenverhuizing 260, senioren verhuizer 480)
│   ├── /inpakservice/                  REBUILD live URL (linked from home)
│   └── /transport-koerier/             REBUILD live URL (linked from home)
├── /tarieven/                          Pricing
│   └── /m3-calculator/                 Tool (breadcrumb: Home › Tarieven › m³ calculator)
├── /werkgebied/                        Hub
│   ├── /verhuisbedrijf-nieuwegein/ … -amersfoort/ -zeist/ -houten/ -woerden/ -maarssen/ -ijsselstein/
│   └── phase 2: hilversum, veenendaal, breukelen (live), de-bilt, vleuten-de-meern (new)
├── /verhuistips/                       Hub (guides)
│   ├── /wat-kost-een-verhuizing-in-utrecht-complete-prijsgids-tips-2026/
│   ├── /tips-voor-verhuizen-van-uw-wasmachine/
│   ├── /wanneer-wel-of-geen-verhuislift-inzetten/
│   ├── /voorkom-verhuis-stress-met-de-verhuischecklist/
│   └── /hoeveel-verhuisdozen-heb-ik-nodig/   NEW
├── /over-ons/   /werkwijze/   /beoordelingen/
├── /offerteaanvraag/  →  /bedankt/ (noindex)
└── /privacyverklaring/   /algemene-voorwaarden/   /cookie-policy/
```

| Change | Why |
|---|---|
| Merge interne → zakelijk | 544 + 362 thin words competing for business intent; "interne verhuizing" is 40 a month (07 §3–4). |
| New ontruiming-na-overlijden | A different, sensitive intent from "woningontruiming". The audit gap list marks it P1. |
| Rebuild senioren, inpakservice, transport-koerier | They are live and linked (or have demand), and would otherwise be the only pages in the old design. |
| New hoeveel-verhuisdozen | 320 a month; VBU ranks #3 with a simple page (audit §5); links naturally to the m³ calculator. |
| Studenten-verhuizen | Leave as is for now (70 a month); rebuild in phase 2. |
| Piano | **Not added**, per your earlier decision. |

## 2. Title and H1 changes (only where needed)
| Page | Current | Proposed | Reason |
|---|---|---|---|
| werkgebied: title | Verhuisbedrijf regio Utrecht \| Werkgebied & routecheck | Werkgebied: verhuizen in de regio Utrecht \| Busje komt zo | Stops competing with /verhuisbedrijf-utrecht/ for the head term. |
| werkgebied: H1 | Verhuisbedrijf in de regio Utrecht: laat uw route beoordelen. | Ons werkgebied: verhuizen in Utrecht en de regio | Same reason. |
| prijsgids: title | Wat kost een verhuisbedrijf in Utrecht? Prijsgids 2026 | Wat kost een verhuizing in Utrecht? Prijsgids 2026 | Tarieven owns "verhuisbedrijf kosten"; the guide owns "wat kost verhuizen". It now matches its own H1. |
| spoedverhuizing: H1 | Een spoedverhuizing in Utrecht begint met de juiste informatie. | Spoedverhuizing in Utrecht: vandaag of morgen verhuizen | The keyword leads and the promise is clear. "Vandaag of morgen" is copied from the audit's proposed meta; **confirm it's true**. |
| over-ons: H1 | Over ons: een Utrechts familiebedrijf voor verhuisaanvragen. | Over Busje komt zo: een Utrechts familiebedrijf | About the business, not the requests. |
| beoordelingen: H1 | Beoordelingen over Verhuisbedrijf Busje komt zo | Reviews van ons verhuisbedrijf in Utrecht | Adds "reviews" and "Utrecht" (verhuisbedrijf utrecht reviews, 20 a month). |
| 7 city H1s | Verhuisbedrijf [plaats]: verhuizen met een helder plan en prijs. | Verhuisbedrijf [plaats]: [one local promise per town, from real facts] | Removes the identical pattern (07 §2). |

## 3. One template per type
Every template uses only the design-system components. **Components to add to the system first** (proposal; added to `03-design-system.md` once approved):
- **Breadcrumb**: small text with › separators, BreadcrumbList schema
- **Package cards**: three priced plates side by side, for tarieven
- **Article header**: date, author, reading time, plus an "Op deze pagina" contents list
- **Related links**: three cards linking to sibling pages
- **Sticky tool summary**: the running m³ total, for the calculator
- **Local facts with sources**: the existing facts list plus a source link per fact
- **Legal contents list**

Shared everywhere: header, footer, mobile action bar (Bel, WhatsApp, Offerte), price plate and Google plate, CTA band. These are components, not body copy (see §4).

Below, **KW** = where the target keyword goes, **U** = the Utrecht or local signal, and **CTA** = where the action buttons go.

### T1 Local pillar: /verhuisbedrijf-utrecht/ (1 page)
1. Breadcrumb › **H1** (KW, U) › lead (2 sentences, KW once) › price plate and Google plate › CTA: Offerte + Bel › own photo in Utrecht
2. H2 "Wat ons verhuisbedrijf in Utrecht voor u doet": services as cards with "vanaf" prices, linking to each service
3. H2 "Wat kost een verhuisbedrijf in Utrecht?": short answer with the rates, linking to /tarieven/ and the prijsgids
4. H2 "Verhuizen in Utrecht: parkeren, ontheffing en binnenstad" (U). The facts list is sourced from utrecht.nl, plus the H3s Ontheffing, Zero-emissiezone, Straat afzetten (10 werkdagen), and a lift for narrow stairs
5. H2 "Verhuizen in elke wijk van Utrecht" (U): the wijken as a grid, plus a map that loads on click
6. H2 "Ook buiten Utrecht": links to all 7 city pages (hub-and-spoke)
7. Reviews (U: reviews that mention Utrecht wijken) › CTA band
8. FAQ: 5 questions unique to this page › quote block (CTA)

Target: 1,500+ words (audit O1). Schema: Service, BreadcrumbList, FAQPage.

### T2 Service (particulier, zakelijk, spoed, verhuislift-huren, ontruiming, opslag, senioren, inpakservice, transport-koerier)
1. Breadcrumb (Home › Diensten › page) › **H1** (KW + U) › lead (who it's for, in one sentence) › the plate with this service's real price or "prijs vooraf afgestemd" › Google plate › CTA: Offerte + Bel › photo of this service
2. H2 "Wat is inbegrepen": ticks list (unique per service)
3. H2 "Voor wie": 2–4 situation cards (e.g. lift: narrow stairs, top floor, large furniture)
4. H2 "Zo verloopt [dienst]": steps (a real sequence)
5. H2 "Wat kost [dienst]?": price explanation with a worked example from /tarieven/, linking to tarieven
6. H2 "[Dienst] in Utrecht" (U): what is specific to doing this service in Utrecht (e.g. lift and binnenstad, ontheffing)
7. Related links: 2 sibling services + the matching guide › reviews about this service, if any exist › FAQ (3–5 unique questions) › quote block

Target: 800–1,200 words. Schema: Service (with areaServed), BreadcrumbList, FAQPage.

### T3 Location: 7 city pages
1. Breadcrumb (Home › Werkgebied › Verhuisbedrijf [plaats]) › **H1** (KW: "Verhuisbedrijf [plaats]" + one local promise) › lead with the distance and travel time from Utrecht (to be measured with a route planner and cited) › plates › CTA: Offerte + Bel
2. H2 "Verhuizen in [plaats]: wat u moet weten" (U): local facts with sources, at least 4: wijken/kernen, typical housing (flats, dijkwoningen), the parking or ontheffing rule from the gemeente website with a link, centre access
3. H2 "Binnen [plaats], naar Utrecht of verder": the 3 routes, written for this town
4. Photo of a job in this town, **or no photo** (no reuse of the same lift photo)
5. Review from a customer in this town, if one exists; otherwise the general reviews component (not body copy)
6. H2 "Diensten in [plaats]": links to 3–4 relevant services
7. H2 "Ook in de buurt": links to 2 neighbouring towns and /verhuisbedrijf-utrecht/ › FAQ (3 questions unique to this town) › quote block

Target: 700–1,000 words, of which **at least 60% is unique** (rule in §4). Schema: Service (areaServed: City), BreadcrumbList, FAQPage only if the questions are unique.

### T4 Hub: diensten, werkgebied, verhuistips
1. Breadcrumb › **H1** › lead (2 sentences on what the hub covers) › CTA: Offerte
2. A card grid of all children, each with a one-line unique summary plus a fact (price "vanaf", distance, or reading time)
3. A short H2 section answering the hub question (e.g. "Welke dienst past bij u?"; "Waar verhuizen we?" with a map that loads on click; "Waar begint u?")
4. CTA band

Target: 400–600 words. Schema: CollectionPage, BreadcrumbList, ItemList.

### T5 Pricing: tarieven
1. Breadcrumb › **H1** (KW "verhuisbedrijf kosten") › lead with €35,70 in the first sentence › **package cards in the first screen** (Klein, Compleet, Groot) › CTA: Offerte + "Bereken uw prijs"
2. Estimate tool (the homepage component) › H2 "Wat bepaalt hoeveel uur uw verhuizing duurt" › H2 "Extra kosten": reiskosten, lift, materiaal
3. H2 "Geen weekendtoeslag, geen voorrijkosten in Utrecht" (U) › links to the prijsgids and the m³ calculator › FAQ › quote block

Schema: Service with an Offer for each package, BreadcrumbList, FAQPage.

### T6 Guide: prijsgids, wasmachine, beslisgids, checklist, hoeveel-verhuisdozen
1. Breadcrumb (Home › Verhuistips › page) › **H1** (question KW) › article header (date, author, reading time) › **short answer in the first 2 sentences** (for People Also Ask and AI Overviews) › "Op deze pagina" contents list
2. H2 sections in question form, at reading width (66 characters), with a table or worked example where it helps
3. A box linking to the matching service (e.g. wasmachine → particulier; beslisgids → verhuislift-huren; prijsgids → tarieven) › related guides › CTA band (not a full hero)

Schema: Article, BreadcrumbList, FAQPage only for unique questions.

### T7 Tool: m3-calculator
1. Breadcrumb › **H1** (KW "m3 berekenen") › one sentence › **the tool starts in the first screen**
2. Rooms as `<details>` › a sticky total bar (m³ plus a price indication from the estimate rules) › "Neem mee naar de offerte" (already passes the volume)
3. H2 "Hoe bereken ik mijn verhuisvolume?" (method, a table of standard volumes) › link to hoeveel-verhuisdozen › FAQ

Schema: WebApplication, BreadcrumbList.

### T8 Conversion: offerteaanvraag, bedankt
- **Offerte**: Breadcrumb › **H1** › form step 1 in the first screen (mobile too) › beside or under the form: Google plate, "reactie meestal binnen een paar uur" (existing claim), 3 ticks › privacy note. No other CTAs competing with the form.
- **Bedankt** (noindex): H1 › "wat gebeurt er nu" as steps with times you confirm › Bel / WhatsApp › links to the checklist, m³ calculator and reviews.

### T9 Trust: over-ons, beoordelingen, werkwijze
- **Over ons**: H1 › the family story, team photo, 15 years, own trucks and lift (your facts) › NAP and hours › reviews › CTA.
- **Beoordelingen**: H1 › Google and Trustoo plates (linked) › reviews grid (real, attributed, dated) › "Hoe we met feedback omgaan" › CTA.
- **Werkwijze**: H1 › steps (opname, prijs, planning, verhuisdag, nazorg) with what's fixed at each step › insurance, payment and cancellation (from /algemene-voorwaarden/, linked) › CTA.

Schema: AboutPage, CollectionPage, or WebPage, plus BreadcrumbList.

### T10 Legal: privacyverklaring, algemene voorwaarden
- Breadcrumb › H1 › last-updated date › contents list › numbered sections at reading width, body 18 px › contact block. No marketing sections. Schema: WebPage, BreadcrumbList.

## 4. Rules that prevent duplicate content
**Must be unique on every page**: the title, meta description, H1, lead paragraph, every H2, the FAQ questions and answers, the photo (or no photo), and the "Utrecht/local" section.

**Can be shared, as components (not as body copy)**: header, footer, mobile action bar, price plate, Google plate, CTA band (one sentence plus a button; **never an H2**), quote block, reviews component.

**Location pages specifically**
1. At least 4 local facts per town, each with a source link (gemeente website, Google Maps route) or from your own knowledge. No fact without a source.
2. The intro names real places (kernen, wijken) and the distance from Utrecht; no template sentence with the name swapped.
3. Three FAQ questions that only make sense for that town.
4. Its own H2 wording. The template fixes the **topic** of each section, not its words.
5. No shared photo: use a local job photo, or none.

**Measured gate before publishing**: I'll rerun the shingle check from 07 on every rebuilt page. A page passes only if
- its **Jaccard is under 0.20 against every other page of the same template** (today the cities are 0.40–0.46), and
- **no H2 appears on two pages**.

**Boilerplate paragraphs**: none in `<main>` beyond the shared components above.

## 5. Internal linking map
| From | Links to (in content, with descriptive anchors) |
|---|---|
| Home | verhuisbedrijf-utrecht, diensten, tarieven, werkgebied, beoordelingen, offerte (already built) |
| verhuisbedrijf-utrecht | every service (cards); tarieven and the prijsgids; **all 7 cities**; werkgebied; beoordelingen; offerte |
| Each service | verhuisbedrijf-utrecht ("verhuisbedrijf in Utrecht"); tarieven; the matching guide; 2 sibling services; offerte |
| Each city | verhuisbedrijf-utrecht; werkgebied; 2 neighbouring cities; 3–4 services; offerte |
| diensten (hub) | every service |
| werkgebied (hub) | all cities, verhuisbedrijf-utrecht |
| verhuistips (hub) | **all 5 guides**, m3-calculator |
| tarieven | the prijsgids, m3-calculator, every service with a price, offerte |
| prijsgids | tarieven, m3-calculator, hoeveel-verhuisdozen, offerte |
| wasmachine | particulier-verhuizen, checklist, verhuistips |
| beslisgids | verhuislift-huren, verhuistips |
| checklist | particulier-verhuizen, m3-calculator, hoeveel-verhuisdozen |
| hoeveel-verhuisdozen | m3-calculator, inpakservice, checklist |
| ontruiming ↔ ontruiming-na-overlijden | each other, plus opslag-huren and senioren-verhuizen |
| senioren-verhuizen | ontruiming, inpakservice, opslag-huren |
| over-ons, werkwijze, beoordelingen | each other, plus offerte and algemene-voorwaarden (werkwijze) |
| offerte | privacyverklaring only (no distractions) |

**Neighbouring cities** (geography, assumption to confirm): Nieuwegein ↔ Houten, IJsselstein · Houten ↔ Nieuwegein, Zeist · Zeist ↔ Houten, Amersfoort · Amersfoort ↔ Zeist · Maarssen ↔ Woerden · Woerden ↔ Maarssen, IJsselstein · IJsselstein ↔ Nieuwegein, Woerden.

**Header**: Verhuisbedrijf Utrecht · Diensten ▾ · Tarieven · Werkgebied ▾ · Over ons ▾ (Reviews, Werkwijze, m³ calculator) · phone · Offerte. Already built on the homepage.
**Footer**: 4 columns with **30 links or fewer**: NAP and hours · Diensten (8) · Werkgebied (8 incl. "Alle plaatsen") · Informatie (tarieven, prijsgids, m³ calculator, verhuistips, over ons, reviews, werkwijze). The 3 individual guides go to the verhuistips hub instead of the footer. Legal links go in the bottom bar.

## 6. Rebuild priority (SEO and revenue impact first)
| # | Page(s) | Template | Why first (measured unless noted) |
|---|---|---|---|
| 1 | /verhuisbedrijf-utrecht/ | T1 | Head term 1,000/mo + verhuizers utrecht (CPC €17); Google's chosen URL; #10 locally; only 2 content links in |
| 2 | /verhuislift-huren/ | T2 (first service) | 4,400 + 4,400/mo; you're Maps #2; no price and no CTA in the first screen |
| 3 | /tarieven/ + prijsgids | T5, T6 (first guide) | 3,800+/mo cost queries; cannibalisation fix |
| 4 | /offerteaanvraag/ + /bedankt/ | T8 | Every lead goes through it |
| 5 | /ontruiming/ + NEW /ontruiming-na-overlijden/ | T2 | 1,000 + 720 + 230/mo; not in the Maps pack today |
| 6 | Nieuwegein, Amersfoort, Zeist, then Houten, Woerden, Maarssen, IJsselstein | T3 (first: Nieuwegein) | Duplicate risk on all 7; 50–320/mo each |
| 7 | /m3-calculator/ | T7 | 1,900/mo, KD 0 |
| 8 | particulier, spoed, zakelijk (+ interne), opslag, senioren | T2 | 110–740/mo each; thin today |
| 9 | wasmachine, then beslisgids, checklist, NEW hoeveel-verhuisdozen | T6 | 880/mo for wasmachine (you're #65) |
| 10 | diensten, werkgebied, verhuistips | T4 (first: werkgebied) | Hub structure and the cannibalisation fix |
| 11 | over-ons, beoordelingen, werkwijze | T9 | Trust and E-E-A-T |
| 12 | inpakservice, transport-koerier | T2 | Live and linked from home |
| 13 | privacyverklaring, algemene voorwaarden | T10 | Low SEO value |

**Step 5 flow** (one template type at a time, first page shown to you before the rest):
T1 verhuisbedrijf-utrecht → T2 verhuislift-huren → T5 tarieven → T6 prijsgids → T8 offerte → T3 Nieuwegein → T7 m³ → T4 werkgebied → T9 over-ons → T10 privacy.

**Where the files go**: in `/redesign/` with the same file names as the originals, sharing `assets/css/site.css` (the homepage's stylesheet, already in the project root). Originals stay untouched.

## 7. Decisions (Hamza, 2026-10-12)
1. **New pages**: not for now. `/ontruiming-na-overlijden/`, `/senioren-verhuizen/` and `/hoeveel-verhuisdozen-heb-ik-nodig/` are parked. The live `/senioren-verhuizen/`, `/inpakservice/` and `/transport-koerier/` stay as they are.
2. **Merge `/interne-verhuizing/` into `/zakelijk-verhuizen/`**: yes, with a 301 to `/zakelijk-verhuizen/#interne-verhuizing`.
3. **The 6 title and H1 changes in §2**: approved.
4. **Facts** (lift price, storage, opname, local photos and reviews): not available yet. The rebuild uses only facts already on the site. The lift stays "prijs vooraf afgestemd", storage gets no price, and city pages get no reused photo.

## 8. Change of approach (Hamza, 2026-10-12)
"All the content should return like it was, with just the redesign; the content shouldn't change."
- Every page now keeps its **original content byte for byte** (`<main>`, title, meta, canonical, schema and H1 are checked to be identical to commit `2a58002`). The rewritten Verhuisbedrijf Utrecht and Verhuislift pages were replaced by their originals in the new design.
- The template rewrites, title and H1 changes, the interne→zakelijk merge and new content in §2–§6 are **on hold**. The duplicate-content findings in 07 remain true and are a content decision for later.
- How it works: `redesign/_build/reskin.js` keeps each original page, swaps the header, footer and bottom bar for the new shared partials (with the original menu and footer content), and builds `assets/css/pages.css`: the original styles scoped to `<main>` in a cascade layer, with colours and type remapped to the design system by `redesign/_build/bridge.css`.
- The bottom bar on phones shows icons only (Bel, WhatsApp, Offerte), with spoken labels for screen readers.
