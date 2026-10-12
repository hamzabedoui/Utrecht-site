# Changes since cloning: Busje komt zo SEO pass

Period: 2026-10-11 · Starting point: commit `4b30582` (the redesign as cloned) · Branch with all work: **`seo/full-optimisation`** (not pushed).

## How to see the result
- **Landing page = `index.html`** (the homepage). Every other `.html` file is a sub-page.
- Run locally: start the preview server `site-8081` (in `.claude/launch.json`) and open <http://localhost:8081/>.
- See every changed line: `git diff 4b30582 seo/full-optimisation`.

## What changed, in order (16 commits)

| # | Commit | What | Why (SEO) | Files |
|---|---|---|---|---|
| 1 | `060089d` | Full address **De Brauwlaan 4, 3526 XS Utrecht** and **daily 07:00–22:00** in the footer; schema gets street, geo, hours, map, sameAs, VAT; review links go to the real Google profile | The site showed only "Utrecht", which didn't match the Google Business Profile (NAP consistency for local ranking) | 32 pages |
| 2 | `d4d9107` | Footer links to Verhuisbedrijf Utrecht, Verhuislift huren, Woningontruiming | The money pages had only 2–3 internal links | 32 pages |
| 3 | `3539fa2` | Keyword titles, descriptions and H1s on 4 focus pages | H1s like "Verhuizen in Utrecht begint bij route…" missed the searched term | verhuisbedrijf-utrecht, tarieven, verhuislift-huren, ontruiming |
| 4 | `e0eae8d` | ~~New page `piano-verhuizen.html`~~ **removed again in #16** at the owner's request | — | — |
| 5 | `865c0d8` | **New main menu**: Verhuisbedrijf Utrecht · Diensten ▾ (7, after #16) · Tarieven · Werkgebied ▾ (7 towns) · Reviews. Fold-out menu from 1060 px down; footer adds Over ons | Every page now links to every service and town page; the old menu wrapped onto two lines | 33 pages, styles.css, app.js |
| 6 | `c6d3830` | Homepage targets **"verhuizen utrecht"**; hero adds "geen voorrijkosten binnen Utrecht" and 4,9 Google; FAQ explains fixed price vs hourly | The homepage ranks for this term (Maps #1, organic #10) and no longer competes with the Utrecht page | index.html |
| 7 | `d4902fc` | **`/verhuisbedrijf-utrecht/` grows from 514 to 1,185 words**: services, prices, Utrecht parking/ontheffing/zero-emissiezone rules, neighbourhoods, 3 FAQs. Fixes an FAQ that answered "Is een voorstel vrijblijvend?" with "Nee" | Google ranks this URL for the head term (1,000/mo); competitors average ~1,650 words | verhuisbedrijf-utrecht.html |
| 8 | `6db505f` | Tarieven answers "wat kost een verhuisbedrijf" with the page's own examples + 4 FAQs | 2,300 searches/mo combined, keyword difficulty 0 | tarieven.html |
| 9 | `31c3016` | Verhuislift headings carry "verhuislift huren"; states the own lift; 2 FAQs | The biggest focus keyword (4,400/mo) | verhuislift-huren.html |
| 10 | `27666fe` | Titles shortened to ≤60 characters with keywords; 7 unique town descriptions; Werkwijze H1 | 5 titles were cut off in Google; the town descriptions were near-duplicates | 13 pages |
| 11 | `4085297` | One brand name: **Verhuisbedrijf Busje komt zo** (as on Google) | Three spellings were mixed; review quotes are left verbatim | 33 pages |
| 12 | `48c95a3` | Footer links to the wasmachine guide and the verhuislift guide | "wasmachine verhuizen" (880/mo) had only 1 internal link | 33 pages |
| 13 | `d14255c` | **Footer redesign**: brand text with business facts and Google rating, logo links home, columns Diensten / **Werkgebied (7 town pages)** / Informatie / Contact; NAP in an `<address>` element with WhatsApp and a Google Maps route link; legal links, year, KvK and BTW in the bottom bar; footer heading names Utrecht. Fixes a duplicated "Prijsgids" link on the 7 town pages and a cookie-settings button on offerte.html that didn't open the consent banner | Town pages now get a link from every page; NAP is marked up as an address; the footer heading is no longer generic | 33 pages, styles.css |
| 14 | `3e9f9c3` | **Landing-page reviews redesigned**: static grid of the 6 real reviews (3 columns desktop, 2 tablet, swipeable on mobile) instead of an auto-scrolling reel; keyword heading "Reviews van ons verhuisbedrijf in Utrecht"; reviews marked up as `<figure>`/`<blockquote>`/`<time>`; link to the reviews page. Fixes the reel showing every review twice (and a ~2,250 px tall section) for visitors with "reduce motion" on, also on beoordelingen.html | No duplicated text in the HTML; a heading that matches the search; a readable section for every visitor | index.html, styles.css |
| 15 | `e3f2687` | **Responsive fixes** after measuring all 33 pages at 7 widths (320–1280 px): a column on the Utrecht page ran 7 px off-screen at 320 px; grids and headings can no longer be widened by one long word; larger touch area for the menu dropdown arrows; tighter mobile footer (2,335 → 2,091 px) | Google ranks mobile-first; no sideways scrolling or clipped content on any page | styles.css, verhuisbedrijf-utrecht.html |
| 16 | `2a58002` | **Piano verhuizen service removed** (owner's request): page deleted; removed from menu, footer and the piano copy added in steps 6–9; FAQ schema kept in sync. Piano mentions that were in the original site stay | — | 33 pages (1 deleted) |

Also added (not committed): `seo-audit/` (audit, keyword research, competitor analysis, ads plan, roadmap, URL map) and `.claude/launch.json` (local preview servers).

## Measured result (all 33 pages, final check)
0 broken internal links · 0 invalid schema · all titles ≤60 and descriptions ≤155 characters · exactly 1 H1 per page · no duplicate titles · 186 images, all with alt text.

| Page | Words before → after |
|---|---|
| verhuisbedrijf-utrecht.html | 514 → 1,185 |
| tarieven.html | 656 → 811 |
| verhuislift-huren.html | 716 → 815 |
| index.html | 1,329 → 1,354 |

## Deliberately NOT changed
- `noindex,nofollow` and the "nog niet live" bar stay. This is a preview, and in WordPress Rank Math controls robots.
- `deploy-bridge.html`, `code-bridge.html`, `runtime-code-bridge.html`: **stale, do not use to deploy** (they contain older versions of the pages).
- No invented facts: no verhuislift price, no "gratis verhuisdozen" (not confirmed).

## Open questions for the owner
1. **Voorrijkosten vs reiskosten**: the homepage now says "geen voorrijkosten binnen Utrecht" (you confirmed), while tarieven says "reiskosten €0,79 per km". Do the km costs apply inside Utrecht? Clarify on tarieven.
2. **Gratis verhuisdozen**: in your Google profile, not on the site. Add it once confirmed.
3. **Verhuislift price**: competitors show "vanaf €72–€99/uur" in their titles. A real price would help this page.

## Still to do (next steps)
- Town pages: still about 70% identical text. Each needs local content (jobs, photos, reviews).
- New page `/ontruiming-na-overlijden/`; rebuild studenten, senioren and inpakservice in the new design.
- At upload: enter the titles/descriptions below in **Rank Math**; remove the existing 301 `/verhuisbedrijf-zeist/` → `/werkgebied/`.
- Connect Search Console in OpenSEO to measure the effect.

## Rank Math entries (generated from the final files)
| Live URL | File | SEO title | Meta description | Robots |
|---|---|---|---|---|
| `/` | index.html | Verhuizen in Utrecht? Familiebedrijf | Busje komt zo | Verhuizen in Utrecht met een familiebedrijf: eigen verhuislift, vaste prijs na opname en geen weekendtoeslag. 4,9 op Google. Vraag nu een offerte aan. | index |
| `/algemene-voorwaarden/` | algemene-voorwaarden.html | Algemene voorwaarden | Verhuisbedrijf Busje komt zo | Lees de algemene voorwaarden van Verhuisbedrijf Busje komt zo: afspraken over inpakken, de verhuisdag, betaling, aansprakelijkheid en annulering. | index |
| `/bedankt/` | bedankt.html | Bedankt voor uw aanvraag | Busje komt zo | Uw verhuisaanvraag is ontvangen. Busje komt zo neemt snel persoonlijk contact met u op. Sneller schakelen? App of bel ons direct. | noindex |
| `/beoordelingen/` | beoordelingen.html | Beoordelingen | Verhuisbedrijf Busje komt zo Utrecht | Lees ervaringen van klanten van Verhuisbedrijf Busje komt zo in Utrecht. Bekijk actuele Google-beoordelingen en bereid uw verhuisaanvraag voor. | index |
| `/diensten/` | diensten.html | Verhuisdiensten in Utrecht | Busje komt zo | Bekijk verhuisdiensten voor particulieren, bedrijven, spoedaanvragen en opslagvragen in Utrecht en omgeving. | index |
| `/interne-verhuizing/` | interne-verhuizing.html | Interne verhuizing Utrecht | Planning voor bedrijven | Interne verhuizing in Utrecht en omgeving? Bereid inventaris, werkplekken, toegang, planning en taakverdeling voor en vraag een beoordeelde offerte aan. | index |
| `/m3-calculator/` | m3-calculator.html | M3 calculator verhuizing | Gratis verhuisvolume berekenen | Gratis M3 calculator voor uw verhuizing. Tel meubels, apparaten en verhuisdozen per kamer en krijg direct uw geschatte verhuisvolume in m³. | index |
| `/offerteaanvraag/` | offerte.html | Verhuisofferte aanvragen in Utrecht | Busje komt zo | Laat kort uw gegevens achter en ontvang snel persoonlijk contact voor uw verhuizing in Utrecht en omgeving. Vrijblijvend en zonder verplichtingen. | index |
| `/ontruiming/` | ontruiming.html | Woningontruiming Utrecht | Bezemschoon | Busje komt zo | Woning of pand laten ontruimen in Utrecht? Busje komt zo haalt leeg, voert af en levert bezemschoon op. Ook ontruiming na overlijden. Vaste prijs vooraf. | index |
| `/opslag-huren/` | opslag-en-verhuizen.html | Inboedelopslag Utrecht | Opslag tussen twee woningen | Opslag nodig rond een verhuizing in Utrecht? Beschrijf volume, periode, toegang en verhuisroute voor een passende beoordeling. | index |
| `/over-ons/` | over-ons.html | Over Verhuisbedrijf Busje komt zo | Utrecht | Maak kennis met Verhuisbedrijf Busje komt zo, een familiebedrijf voor verhuisaanvragen in Utrecht en omgeving. | index |
| `/particulier-verhuizen/` | particulier-verhuizen.html | Particulier verhuizen Utrecht | Verhuizers inhuren | Uw woning verhuizen in Utrecht? Regel snel een vrijblijvend voorstel op maat met de juiste voorbereiding en informatie. | index |
| `/privacyverklaring/` | privacyverklaring.html | Privacyverklaring | Verhuisbedrijf Busje komt zo | Lees hoe Verhuisbedrijf Busje komt zo omgaat met uw gegevens: welke gegevens we verwerken, waarom, hoe lang we ze bewaren en uw rechten. | index |
| `/spoedverhuizing/` | spoedverhuizing.html | Spoedverhuizing Utrecht | Snel geregeld | Busje komt zo | Snel een verhuizing in Utrecht nodig? Bel voor de actuele beschikbaarheid of stuur een korte spoedaanvraag met datum en adressen. | index |
| `/tarieven/` | tarieven.html | Verhuisbedrijf kosten Utrecht: €35,70/uur | Busje komt zo | Wat kost een verhuisbedrijf? Bij Busje komt zo betaalt u €35,70 per verhuizer per uur incl. btw. Drie heldere pakketten en geen weekendtoeslag. | index |
| `/tips-voor-verhuizen-van-uw-wasmachine/` | wasmachine-verhuizen.html | Wasmachine verhuizen: veilig vervoeren | Busje komt zo | Wasmachine verhuizen? Tap water af, gebruik de juiste transportbouten, controleer de route en vervoer de machine rechtop volgens de handleiding. | index |
| `/verhuisbedrijf-amersfoort/` | verhuisbedrijf-amersfoort.html | Verhuisbedrijf Amersfoort | Verhuizen met Busje komt zo | Verhuisbedrijf in Amersfoort nodig? Wij verhuizen u binnen Amersfoort of tussen Amersfoort en Utrecht. Vaste prijs vooraf en geen weekendtoeslag. | index |
| `/verhuisbedrijf-houten/` | verhuisbedrijf-houten.html | Verhuisbedrijf Houten | Verhuizen met Busje komt zo | Verhuisbedrijf in Houten nodig? Ons team uit Utrecht staat snel bij u voor de deur. Eigen verhuislift, vaste prijs vooraf en geen weekendtoeslag. | index |
| `/verhuisbedrijf-ijsselstein/` | verhuisbedrijf-ijsselstein.html | Verhuisbedrijf IJsselstein | Verhuizen met Busje komt zo | Verhuizen in IJsselstein? Busje komt zo verhuist uw woning binnen IJsselstein of naar de regio Utrecht. Vaste prijs vooraf, ook in het weekend. | index |
| `/verhuisbedrijf-maarssen/` | verhuisbedrijf-maarssen.html | Verhuisbedrijf Maarssen | Verhuizen met Busje komt zo | Verhuisbedrijf Maarssen: wij verhuizen woningen in Maarssen en Maarssenbroek en van en naar Utrecht. Vaste prijs vooraf, geen weekendtoeslag. | index |
| `/verhuisbedrijf-nieuwegein/` | verhuisbedrijf-nieuwegein.html | Verhuisbedrijf Nieuwegein | Verhuizen met Busje komt zo | Verhuisbedrijf in Nieuwegein nodig? Wij verhuizen appartementen en woningen in Nieuwegein en naar Utrecht. Eigen verhuislift en vaste prijs vooraf. | index |
| `/verhuisbedrijf-utrecht/` | verhuisbedrijf-utrecht.html | Verhuisbedrijf Utrecht | Vaste prijs | Busje komt zo | Verhuisbedrijf Utrecht met eigen verhuislift, €35,70 per verhuizer per uur en geen weekendtoeslag. 4,9 op Google (162 reviews). Vraag een offerte aan. | index |
| `/verhuisbedrijf-woerden/` | verhuisbedrijf-woerden.html | Verhuisbedrijf Woerden | Verhuizen met Busje komt zo | Verhuizen in of naar Woerden? Busje komt zo verhuist uw inboedel zorgvuldig, ook in de binnenstad. Vaste prijs vooraf en geen weekendtoeslag. | index |
| `/verhuisbedrijf-zeist/` | verhuisbedrijf-zeist.html | Verhuisbedrijf Zeist | Verhuizen met Busje komt zo | Verhuisbedrijf in Zeist nodig? Wij verhuizen uw woning binnen Zeist of van en naar Utrecht, met eigen verhuislift. Vaste prijs vooraf. | index |
| `/verhuislift-huren/` | verhuislift-huren.html | Verhuislift huren Utrecht | Met bediening | Busje komt zo | Verhuislift huren in Utrecht met ervaren bediening. Voor smalle trappen en hoge etages. Ook spoed en in het weekend. Bel of app voor beschikbaarheid. | index |
| `/verhuistips/` | verhuistips.html | Verhuistips Utrecht: slim voorbereiden | Busje komt zo | Praktische verhuistips voor Utrecht: bereken uw m³, check route en toegang, bereid uw inboedel voor en plan uw verhuisdag zonder stress. | index |
| `/voorkom-verhuis-stress-met-de-verhuischecklist/` | verhuischecklist.html | Gratis verhuischecklist voor uw verhuizing | Busje komt zo | Gebruik onze gratis, interactieve verhuischecklist: vink stap voor stap af wat u moet regelen voor, tijdens en na uw verhuizing in Utrecht en omgeving. | index |
| `/wanneer-wel-of-geen-verhuislift-inzetten/` | verhuislift-beslisgids.html | Wanneer is een verhuislift nodig? | Beslisgids Utrecht | Wanneer is een verhuislift nodig? Controleer voorwerp, binnenroute, raam of balkon, opstelplek en Utrechtse bereikbaarheid met vijf stappen. | index |
| `/wat-kost-een-verhuizing-in-utrecht-complete-prijsgids-tips-2026/` | prijsgids-verhuizen-utrecht.html | Wat kost een verhuisbedrijf in Utrecht? Prijsgids 2026 | Wat kost een verhuizing in Utrecht? Deze prijsgids legt uit welke factoren de kosten bepalen en hoe u snel een persoonlijk, vrijblijvend voorstel krijgt. | index |
| `/werkgebied/` | werkgebied-utrecht.html | Verhuisbedrijf regio Utrecht | Werkgebied &amp; routecheck | Zoekt u een verhuisbedrijf in de regio Utrecht? Laat vertrek, bestemming, laadplek, loopafstand en toegang beoordelen voor een gerichte offerte. | index |
| `/werkwijze/` | werkwijze.html | Werkwijze verhuisbedrijf Utrecht | Busje komt zo | Lees hoe uw verhuisaanvraag bij Busje komt zo verloopt, van uw gegevens naar een persoonlijk en vrijblijvend voorstel op maat. | index |
| `/zakelijk-verhuizen/` | zakelijk-verhuizen.html | Bedrijfsverhuizing Utrecht | Kantoor | Busje komt zo | Een bedrijfsverhuizing in Utrecht plannen? Deel locaties, planning en taakverdeling voor een beoordeelde offerte. | index |
