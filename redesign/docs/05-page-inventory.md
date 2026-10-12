# 05 · Page inventory

Date: 2026-10-12. **Source**: the original HTML files in the project root, read with a script (`index.html` from git HEAD, because the redesigned homepage has since been merged). Development files (`*-bridge.html`, `review.html`) are left out: they must never be uploaded (audit T12).
**Labels**: **measured** = counted from the files or taken from `seo-audit/02-keyword-research.csv` (volumes measured 2026-10-11). **Assumption** = my judgement, marked as such.

## How to read the columns
- **Live URL**: the WordPress slug from `seo-audit/06-url-map.csv`. Files link to each other as `*.html`, so every internal link must be rewritten to these slugs on upload (audit W2).
- **Target keyword**: from the keyword file's "Target page" column (measured volume per month, NL). "none mapped" means the keyword file has no keyword for this page.
- **Words**: words inside `<main>` (measured).
- **Links in**: links from other pages' main content (measured). Every page except `bedankt` also gets about 63 sitewide links from the header (26 links) and footer (37 links), so nothing is more than one click from the homepage.
- **Links out**: unique internal pages linked from this page's main content (measured).

## 1. Pages in the project files (32)

| # | File | Live URL | Template | Title tag (characters) | H1 | Target keyword · volume · intent | Words | Links in | Links out |
|---|---|---|---|---|---|---|---|---|---|
| 1 | index.html (HEAD) | `/` | Home | Verhuizen in Utrecht? Familiebedrijf \| Busje komt zo (52) | Verhuizen in Utrecht Professionals die u kunt vertrouwen. | verhuizen utrecht · 260 · navigational | 1,197 | 22 | 14 |
| 2 | verhuisbedrijf-utrecht.html | `/verhuisbedrijf-utrecht/` | Local pillar (money page) | Verhuisbedrijf Utrecht \| Vaste prijs \| Busje komt zo (52) | Verhuisbedrijf Utrecht met vaste prijs en eigen verhuislift. | verhuisbedrijf utrecht · 1,000 · commercial; verhuizers utrecht · 140 | 1,179 | **2** | 15 |
| 3 | particulier-verhuizen.html | `/particulier-verhuizen/` | Service | Particulier verhuizen Utrecht \| Verhuizers inhuren (50) | Particulier verhuizen in Utrecht met duidelijke afspraken. | verhuizers inhuren · 720 · commercial | **390** | 4 | 7 |
| 4 | zakelijk-verhuizen.html | `/zakelijk-verhuizen/` | Service | Bedrijfsverhuizing Utrecht \| Kantoor \| Busje komt zo (52) | Zakelijk verhuizen in Utrecht met een werkbaar plan. | bedrijfsverhuizing · 210 · commercial | **362** | 5 | 6 |
| 5 | interne-verhuizing.html | `/interne-verhuizing/` | Service | Interne verhuizing Utrecht \| Planning voor bedrijven (52) | Interne verhuizing in Utrecht met een duidelijke taakverdeling. | interne verhuizing · 40 · informational | 544 | **2** | 6 |
| 6 | spoedverhuizing.html | `/spoedverhuizing/` | Service | Spoedverhuizing Utrecht \| Snel geregeld \| Busje komt zo (55) | Een spoedverhuizing in Utrecht begint met de juiste informatie. | spoedverhuizing · 110; spoed verhuizen · 110 · commercial | **398** | 4 | 4 |
| 7 | opslag-en-verhuizen.html | `/opslag-huren/` | Service | Inboedelopslag Utrecht \| Opslag tussen twee woningen (52) | Opslag en verhuizen in Utrecht met één duidelijk plan. | inboedel opslag · 320; verhuizen en opslag · 320; opslag utrecht · 260 | **378** | 3 | 6 |
| 8 | verhuislift-huren.html | `/verhuislift-huren/` | Service | Verhuislift huren Utrecht \| Met bediening \| Busje komt zo (57) | Verhuislift huren in Utrecht, met eigen bediening. | verhuislift huren · 4,400; verhuislift · 4,400; verhuislift huren utrecht · 320 · transactional | 774 | 5 | 6 |
| 9 | ontruiming.html | `/ontruiming/` | Service | Woningontruiming Utrecht \| Bezemschoon \| Busje komt zo (54) | Woningontruiming in Utrecht: zorgvuldig en bezemschoon. | woningontruiming · 1,000; woning ontruimen · 720; woningontruiming utrecht · 140 | 670 | 4 | 4 |
| 10 | verhuisbedrijf-amersfoort.html | `/verhuisbedrijf-amersfoort/` | Location | Verhuisbedrijf Amersfoort \| Verhuizen met Busje komt zo (55) | Verhuisbedrijf Amersfoort: verhuizen met een helder plan en prijs. | verhuisbedrijf amersfoort · 320 | 676 | 7 | 10 |
| 11 | verhuisbedrijf-houten.html | `/verhuisbedrijf-houten/` | Location | Verhuisbedrijf Houten \| Verhuizen met Busje komt zo (51) | Verhuisbedrijf Houten: verhuizen met een helder plan en prijs. | verhuisbedrijf houten · 90 | 722 | 7 | 10 |
| 12 | verhuisbedrijf-ijsselstein.html | `/verhuisbedrijf-ijsselstein/` | Location | Verhuisbedrijf IJsselstein \| Verhuizen met Busje komt zo (56) | Verhuisbedrijf IJsselstein: verhuizen met een helder plan en prijs. | verhuisbedrijf ijsselstein · 50 | 702 | 7 | 10 |
| 13 | verhuisbedrijf-maarssen.html | `/verhuisbedrijf-maarssen/` (new, 404 live) | Location | Verhuisbedrijf Maarssen \| Verhuizen met Busje komt zo (53) | Verhuisbedrijf Maarssen: verhuizen met een helder plan en prijs. | verhuisbedrijf maarssen · 70 | 705 | 7 | 10 |
| 14 | verhuisbedrijf-nieuwegein.html | `/verhuisbedrijf-nieuwegein/` | Location | Verhuisbedrijf Nieuwegein \| Verhuizen met Busje komt zo (55) | Verhuisbedrijf Nieuwegein: verhuizen met een helder plan en prijs. | verhuisbedrijf nieuwegein · 170 | 731 | 8 | 10 |
| 15 | verhuisbedrijf-woerden.html | `/verhuisbedrijf-woerden/` | Location | Verhuisbedrijf Woerden \| Verhuizen met Busje komt zo (52) | Verhuisbedrijf Woerden: verhuizen met een helder plan en prijs. | verhuisbedrijf woerden · 90 | 684 | 7 | 10 |
| 16 | verhuisbedrijf-zeist.html | `/verhuisbedrijf-zeist/` (live 301 to remove) | Location | Verhuisbedrijf Zeist \| Verhuizen met Busje komt zo (50) | Verhuisbedrijf Zeist: verhuizen met een helder plan en prijs. | verhuisbedrijf zeist · 170 | 699 | 8 | 10 |
| 17 | diensten.html | `/diensten/` | Hub | Verhuisdiensten in Utrecht \| Busje komt zo (42) | Verhuisdiensten in Utrecht voor iedere situatie. | none mapped | 416 | 9 | 9 |
| 18 | werkgebied-utrecht.html | `/werkgebied/` | Hub | Verhuisbedrijf regio Utrecht \| Werkgebied & routecheck (54) | Verhuisbedrijf in de regio Utrecht: laat uw route beoordelen. | none mapped | 630 | 16 | 11 |
| 19 | verhuistips.html | `/verhuistips/` | Hub (blog) | Verhuistips Utrecht: slim voorbereiden \| Busje komt zo (54) | Verhuistips Utrecht: bereid uw verhuizing stap voor stap voor. | verhuistips · 210 · informational | 617 | 3 | 7 |
| 20 | tarieven.html | `/tarieven/` | Pricing | Verhuisbedrijf kosten Utrecht: €35,70/uur \| Busje komt zo (57) | Verhuisbedrijf kosten in Utrecht: drie heldere pakketten. | verhuisbedrijf kosten · 1,000; goedkoop verhuisbedrijf · 320; wat kost een verhuizer per uur · 50 | 802 | 13 | 4 |
| 21 | prijsgids-verhuizen-utrecht.html | `/wat-kost-een-verhuizing-in-utrecht-complete-prijsgids-tips-2026/` | Guide | Wat kost een verhuisbedrijf in Utrecht? Prijsgids 2026 (54) | Wat kost een verhuizing in Utrecht? | wat kost een verhuisbedrijf · 1,300; wat kost verhuizen · 880; verhuizen kosten · 590 | 761 | **2** | 5 |
| 22 | wasmachine-verhuizen.html | `/tips-voor-verhuizen-van-uw-wasmachine/` | Guide | Wasmachine verhuizen: veilig vervoeren \| Busje komt zo (54) | Wasmachine veilig verhuizen. | wasmachine verhuizen · 880 · commercial | 777 | **1** | 6 |
| 23 | verhuislift-beslisgids.html | `/wanneer-wel-of-geen-verhuislift-inzetten/` | Guide | Wanneer is een verhuislift nodig? \| Beslisgids Utrecht (54) | Wanneer is een verhuislift nodig? | none mapped (assumption: supports the lift cluster) | 744 | **2** | 6 |
| 24 | verhuischecklist.html | `/voorkom-verhuis-stress-met-de-verhuischecklist/` | Guide (interactive) | Gratis verhuischecklist voor uw verhuizing \| Busje komt zo (58) | Verhuischecklist: alles wat u moet regelen bij uw verhuizing | verhuischecklist · 170; verhuizing doorgeven utrecht · 1,000 (section) | 605 | **2** | 2 |
| 25 | m3-calculator.html | `/m3-calculator/` | Tool | M3 calculator verhuizing \| Gratis verhuisvolume berekenen (57) | Gratis M3 calculator: bereken uw verhuisvolume. | m3 berekenen · 1,900 · informational | 508 | 26 | 3 |
| 26 | offerte.html | `/offerteaanvraag/` | Conversion | Verhuisofferte aanvragen in Utrecht \| Busje komt zo (51) | Vraag vrijblijvend uw verhuisofferte aan in Utrecht. | verhuisbedrijf offerte · 140 (CPC €25,63); verhuisofferte · 50 | 322 | 28 | 3 |
| 27 | bedankt.html | `/bedankt/` | Conversion (noindex) | Bedankt voor uw aanvraag \| Busje komt zo (40) | Bedankt! We nemen snel contact met u op. | none (noindex) | 116 | 0 (by design) | 3 |
| 28 | over-ons.html | `/over-ons/` | Trust | Over Verhuisbedrijf Busje komt zo \| Utrecht (43) | Over ons: een Utrechts familiebedrijf voor verhuisaanvragen. | none mapped | 519 | **1** | 7 |
| 29 | beoordelingen.html | `/beoordelingen/` | Trust | Beoordelingen \| Verhuisbedrijf Busje komt zo Utrecht (52) | Beoordelingen over Verhuisbedrijf Busje komt zo | verhuisbedrijf utrecht reviews · 20 | 753 | **1** | 4 |
| 30 | werkwijze.html | `/werkwijze/` | Trust | Werkwijze verhuisbedrijf Utrecht \| Busje komt zo (48) | Werkwijze: zo verloopt uw verhuizing met Busje komt zo. | none mapped | **369** | 4 | 3 |
| 31 | privacyverklaring.html | `/privacyverklaring/` (new, 404 live) | Legal | Privacyverklaring \| Verhuisbedrijf Busje komt zo (48) | Privacyverklaring | none | 533 | **1** | 1 |
| 32 | algemene-voorwaarden.html | `/algemene-voorwaarden/` | Legal | Algemene voorwaarden \| Verhuisbedrijf Busje komt zo (51) | Algemene voorwaarden | none | 628 | 2 | 1 |

**Measured facts across all 32 files**
- Every page has **exactly one H1**, a **unique title**, a **unique meta description** and a **canonical** to its live slug. Titles are 40–58 characters and descriptions 108–153.
- Every file has `<meta name="robots" content="noindex,nofollow">`. That's correct for a preview, but it must not reach WordPress: Rank Math sets robots there (audit T5).
- Every page carries the full `MovingCompany` JSON-LD graph. Audit S1 says to keep one schema source (Rank Math); see 07 §6.
- No image in `<main>` is missing alt text.
- **Thin pages (under 450 words)**: particulier 390, zakelijk 362, spoed 398, opslag 378, werkwijze 369, diensten 416, offerte 322. For context, the audit measured a competitor median of about 1,650 words (assumption that this applies to service pages; it was measured on head-term pages).
- **Weakly linked pages (2 or fewer in-content links in)**: verhuisbedrijf-utrecht (the money page), interne-verhuizing, prijsgids, wasmachine, beslisgids, checklist, over-ons, beoordelingen, privacy, voorwaarden.

## 2. Live URLs with no file in the project (from `06-url-map.csv`, not re-measured)
These pages exist on the live WordPress site only. They count for the site tree and the redirect list in 08.

| Live URL | Audit recommendation | Basis |
|---|---|---|
| /inpakservice/, /transport-koerier/ | Keep, rebuild in the new design (the homepage links to both) | measured |
| /studenten-verhuizen/, /senioren-verhuizen/ | Keep, rebuild | measured demand (seniorenverhuizing 260, senioren verhuizer 480, studentverhuizers utrecht 70) |
| /cookie-policy/, /nieuws/ | Keep | measured |
| /internationaal-verhuizen-…/ | Keep (unique service) | measured |
| /verhuisbedrijf-veenendaal/, -breukelen/, -hilversum/ | Keep, rebuild in phase 2 | Veenendaal #14 measured; others estimated |
| /verhuisbedrijf-delft/, -zoetermeer/, -oss/, -eindhoven/ | Keep (they rank #11–19) | measured |
| 13 other national city pages (Amsterdam, Rotterdam, Den Haag, …) | Decide with Search Console data | assumption |
| /verhuisliftservice/, /ontruimservice/, /reviews-verhuisbedrijf-utrecht/, /tijdelijke-opslag-nodig/, /verhuizen-met-gemak-met-onze-verhuislift/, /zakelijke-particuliere-verhuizingen-utrecht/ | 301 to the matching service page (check Search Console first) | estimated |
| /verhuislift-utrecht/ (post) | Keep until the new /verhuislift-huren/ ranks, then 301 | measured (#17 for "verhuislift utrecht") |
| /faq/, /klusjesman-service/, /producten/, /veelgestelde-vragen-over-verhuizen-naar-tiel/ | Keep or 301 after a traffic check | assumption |
| 10 blog posts (case stories, USP and trust articles, `/piano-verhuizen-geen-probleem/`) | Keep | estimated |

**Not proposed**: a new `/piano-verhuizen/` page. The keyword file lists it as P1, but the piano service was removed at your request (commit "Remove the piano verhuizen service"), so I've left it out.
