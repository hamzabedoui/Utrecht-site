# 01 — Site audit (pre-launch) · Busje komt zo redesign

Audit date: 2026-10-11 · Scope: every file in `busje-komtzo-preview/` (git `main` @ 4b30582), compared with the live site `https://www.busje-komtzo.nl/`.

**How to read the labels**
- **Measured**: taken directly from the files or from an HTTP request to the live site on 2026-10-11.
- **Estimated**: my professional judgement, not backed by tool data.
- **Assumption**: something I could not confirm. Please verify it.

---

## Phase 1: What the site is

### 1.1 Business and audience
| Item | Finding | Label |
|---|---|---|
| Business | Verhuisbedrijf Busje komt zo, a family moving company. KvK 97184004, BTW NL005254319B60 | measured (footer) |
| Location | Utrecht. The live site and Rank Math give **De Brauwlaan 4, 3526 XS Utrecht**. The redesign shows only "Utrecht" | measured |
| Services | Particulier and zakelijk verhuizen, interne verhuizing, spoedverhuizing, verhuislift, opslag, ontruiming. The live site also has inpakservice and transport/koerier, which the redesign links to but does not include | measured |
| Area | Utrecht plus 7 regional pages (Amersfoort, Houten, IJsselstein, Maarssen, Nieuwegein, Woerden, Zeist). The copy also mentions De Meern, Hilversum and Amsterdam | measured |
| Audience | Private households (main) and SMEs (zakelijk/intern) | measured (copy) |
| Goal | Leads: quote form (`offerte.html`), WhatsApp (06 3475 5656), phone (085 050 8282), e-mail | measured |
| Tone | Formal "u", calm, process-focused ("route, toegang, volume"), trust-heavy (KvK, reviews) | measured |
| Language | Dutch only. `<html lang="nl">`, `og:locale nl_NL`, schema `inLanguage nl-NL`. No English content, no hreflang | measured |
| Social proof | Google 4.9 (160+ reviews), Trustoo 9.6 (495+ reviews) | claimed on the site; **not verified** against live profiles |

### 1.2 Technology
| Layer | Finding | Label |
|---|---|---|
| Redesign | Static HTML (32 content pages), one `styles.css` (129 KB, not minified), vanilla JS (`app.js` 17 KB, plus `m3-calculator.js`, `checklist.js`, `inventory-data.js`, `address.js`). Web font: Manrope via Google Fonts, loaded async | measured |
| Live platform | WordPress + **Divi** theme + **Rank Math SEO** (it generates `sitemap_index.xml`, including a local KML sitemap) + **WPConsent** cookie banner + **GTM-WFWPWKBN** | measured |
| Deployment method in repo | `deploy-bridge.html` (2.9 MB, 20 pages as `wp:html` blocks), `code-bridge.html` and `runtime-code-bridge.html` (PHP snippets that **replace `the_content`** for 11 page IDs and inject CSS/JS through `wp_head`/`wp_footer`) | measured |
| Tracking | `app.js` pushes `dataLayer` events (form submit, call, WhatsApp clicks). It does not push on the preview host. The `bedankt` page confirms leads | measured |

> **Key insight:** this is not a fresh launch. It is a **redesign of a live, indexed WordPress site** (about 69 URLs in the live sitemap). Rank Math will keep outputting the `<head>` of every page, so the `<title>`, meta description, canonical, robots and JSON-LD in these HTML files **do not go live by themselves**. They must be copied into Rank Math per page.

### 1.3 Page inventory (measured)
Words = visible words inside `<main>`. Live URL = the canonical declared in the file.

| File | Live URL (canonical) | Title (length) | H1 | Search intent | Words |
|---|---|---|---|---|---|
| index.html | `/` | Verhuisbedrijf Utrecht \| Snel een voorstel \| Busje komt zo (58) | Verhuisbedrijf in Utrecht + Professionals die u kunt vertrouwen. | Local transactional | 1329 |
| verhuisbedrijf-utrecht.html | `/verhuisbedrijf-utrecht/` | Verhuizen in Utrecht \| Route, prijs en offerte \| Busje komt zo (62) | Verhuizen in Utrecht begint bij route, toegang en volume. | Local transactional (money page) | 514 |
| diensten.html | `/diensten/` | Verhuisdiensten in Utrecht \| Busje komt zo (42) | Verhuisdiensten in Utrecht voor iedere situatie. | Commercial (hub) | 416 |
| particulier-verhuizen.html | `/particulier-verhuizen/` | Particulier verhuizen Utrecht \| Busje komt zo (45) | Particulier verhuizen in Utrecht met duidelijke afspraken. | Transactional | 390 |
| zakelijk-verhuizen.html | `/zakelijk-verhuizen/` | Zakelijk verhuizen Utrecht \| Bedrijfsverhuizing \| Busje komt zo (63) | Zakelijk verhuizen in Utrecht met een werkbaar plan. | Transactional B2B | 362 |
| interne-verhuizing.html | `/interne-verhuizing/` | Interne verhuizing Utrecht \| Planning voor bedrijven (52) | Interne verhuizing in Utrecht met een duidelijke taakverdeling. | Transactional B2B | 544 |
| spoedverhuizing.html | `/spoedverhuizing/` | Spoedverhuizing Utrecht \| Beschikbaarheid bespreken \| … (67) | Een spoedverhuizing in Utrecht begint met de juiste informatie. | Transactional, urgent | 398 |
| opslag-en-verhuizen.html | `/opslag-huren/` | Opslag en verhuizen Utrecht \| Opslagvraag bespreken \| … (67) | Opslag en verhuizen in Utrecht met één duidelijk plan. | Transactional | 378 |
| verhuislift-huren.html | `/verhuislift-huren/` | Verhuislift Utrecht \| Route en opstelplek beoordelen (52) | Verhuislift nodig in Utrecht? Begin met de route en opstelplek. | Transactional | 716 |
| ontruiming.html | `/ontruiming/` | Woningontruiming Utrecht \| Bezemschoon opgeleverd \| … (65) | Woning of pand laten ontruimen in Utrecht? … | Transactional | 674 |
| tarieven.html | `/tarieven/` | Kosten verhuisbedrijf Utrecht: tarieven per pakket \| … (66) | Heldere verhuistarieven in drie pakketten. | Commercial (price) | 656 |
| prijsgids-verhuizen-utrecht.html | `/wat-kost-een-verhuizing-in-utrecht-complete-prijsgids-tips-2026/` | Wat kost verhuizen in Utrecht? Prijsgids 2026 \| … (61) | Wat kost een verhuizing in Utrecht? | Informational/commercial | 761 |
| m3-calculator.html | `/m3-calculator/` | M3 calculator verhuizing \| Gratis verhuisvolume berekenen (57) | Gratis M3 calculator: bereken uw verhuisvolume. | Tool / informational | 508 |
| offerte.html | `/offerteaanvraag/` | Verhuisofferte aanvragen in Utrecht \| Busje komt zo (51) | Vraag vrijblijvend uw verhuisofferte aan in Utrecht. | Conversion | 322 |
| werkgebied-utrecht.html | `/werkgebied/` | Verhuisbedrijf regio Utrecht \| Werkgebied & routecheck (52) | Verhuisbedrijf in de regio Utrecht: laat uw route beoordelen. | Local (hub) | 630 |
| verhuisbedrijf-amersfoort.html | `/verhuisbedrijf-amersfoort/` | Verhuisbedrijf Amersfoort \| Verhuizen met Busje komt zo (55) | Verhuisbedrijf Amersfoort: verhuizen met een helder plan en prijs. | Local transactional | 676 |
| verhuisbedrijf-houten.html | `/verhuisbedrijf-houten/` | … Houten (51) | Verhuisbedrijf Houten: … | Local transactional | 722 |
| verhuisbedrijf-ijsselstein.html | `/verhuisbedrijf-ijsselstein/` | … IJsselstein (56) | Verhuisbedrijf IJsselstein: … | Local transactional | 702 |
| verhuisbedrijf-maarssen.html | `/verhuisbedrijf-maarssen/` **(new, 404 live)** | … Maarssen (53) | Verhuisbedrijf Maarssen: … | Local transactional | 705 |
| verhuisbedrijf-nieuwegein.html | `/verhuisbedrijf-nieuwegein/` | … Nieuwegein (55) | Verhuisbedrijf Nieuwegein: … | Local transactional | 731 |
| verhuisbedrijf-woerden.html | `/verhuisbedrijf-woerden/` | … Woerden (52) | Verhuisbedrijf Woerden: … | Local transactional | 684 |
| verhuisbedrijf-zeist.html | `/verhuisbedrijf-zeist/` **(live: 301 → /werkgebied/)** | … Zeist (50) | Verhuisbedrijf Zeist: … | Local transactional | 699 |
| over-ons.html | `/over-ons/` | Over Verhuisbedrijf busje komt zo \| Utrecht (43) | Over ons: een Utrechts familiebedrijf … | Navigational / trust | 519 |
| werkwijze.html | `/werkwijze/` | Werkwijze verhuisbedrijf Utrecht \| Busje komt zo (48) | Van uw aanvraag naar een duidelijke afspraak. | Trust | 367 |
| beoordelingen.html | `/beoordelingen/` | Beoordelingen \| Verhuisbedrijf busje komt zo Utrecht (52) | Beoordelingen over Verhuisbedrijf busje komt zo | Navigational / reviews | 753 |
| verhuistips.html | `/verhuistips/` | Verhuistips Utrecht: slim voorbereiden \| … (54) | Verhuistips Utrecht: bereid uw verhuizing stap voor stap voor. | Informational hub | 617 |
| verhuischecklist.html | `/voorkom-verhuis-stress-met-de-verhuischecklist/` | Gratis verhuischecklist voor uw verhuizing \| … (58) | Verhuischecklist: alles wat u moet regelen … | Informational (tool) | 605 |
| verhuislift-beslisgids.html | `/wanneer-wel-of-geen-verhuislift-inzetten/` | Wanneer is een verhuislift nodig? \| Beslisgids Utrecht (54) | Wanneer is een verhuislift nodig? | Informational | 746 |
| wasmachine-verhuizen.html | `/tips-voor-verhuizen-van-uw-wasmachine/` | Wasmachine verhuizen: veilig vervoeren \| … (54) | Wasmachine veilig verhuizen. | Informational | 777 |
| algemene-voorwaarden.html | `/algemene-voorwaarden/` | Algemene voorwaarden \| … (51) | Algemene voorwaarden | Legal | 628 |
| privacyverklaring.html | `/privacyverklaring/` **(new, 404 live)** | Privacyverklaring \| … (48) | Privacyverklaring | Legal | 533 |
| bedankt.html | `/bedankt/` | Bedankt voor uw aanvraag \| … (40) | Bedankt! … | Post-conversion (keep noindex) | 116 |
| *code-bridge.html, runtime-code-bridge.html, deploy-bridge.html, privacy-code-bridge.html, review.html* | none | dev/deploy tools | none | **must never be uploaded** | none |

---

## Phase 2: Pre-launch audit

Severity scale: **Critical** = will lose rankings or leads at launch · **High** = significant missed ranking or conversion gain · **Medium** = should fix within 30 days · **Low** = polish.

### 2.1 Technical

| # | Sev | Finding | Evidence | Fix |
|---|---|---|---|---|
| T1 | **Critical** | **Head tags will not deploy.** Titles, descriptions, canonicals and JSON-LD sit in `<head>` of the HTML files. The deployment method swaps `the_content` only, and Rank Math keeps writing the head. The new titles will **not** go live unless they are re-entered in Rank Math, page by page | `runtime-code-bridge.html` (add_filter `the_content`); live head comes from Rank Math (measured) | Copy each page's title, description and focus keyword into Rank Math (list in `05-action-roadmap.md`). Put the extra schema (FAQ, Service) into Rank Math's Schema Generator or one custom schema snippet, **not** as a second `MovingCompany` graph |
| T2 | **Critical** | **Deploy bundles are stale.** `deploy-bridge.html` (built 2026-09-20) has only 20 of 32 pages and lacks `ontruiming`, all 7 city pages, `verhuischecklist`, `privacyverklaring`, `algemene-voorwaarden`, `bedankt`. `runtime-code-bridge.html` carries the **older 09-08f copy** with keyword-free H1s (e.g. home H1 "Verhuizen begint met een helder plan…") | Measured by decoding the payloads | Do not deploy from these files. Rebuild the package from the current HTML, or (recommended) build proper WordPress templates. See 2.7 |
| T3 | **Critical** | **The old redesign is already partly live.** `/werkwijze/`, `/verhuistips/` and `/werkgebied/` show the 09-08f H1s on the live site today. The live site is therefore in a mixed state | Live H1 = "Een lokale verhuizing vraagt om aandacht voor route en toegang." (measured) | Treat the launch as one coordinated release. Check every page's live content after deployment |
| T4 | **Critical** | **Existing redirect blocks a new page.** Live `/verhuisbedrijf-zeist/` currently 301-redirects to `/werkgebied/`. The new Zeist page stays invisible until that redirect is removed | Measured HTTP redirect | Delete the redirect in Rank Math → Redirections before you publish Zeist |
| T5 | **Critical** | **`noindex,nofollow` on all 33 preview pages.** This is correct for the preview, and it does not travel with `the_content`. The risk is someone copying a full HTML head into a page, or the WordPress "Discourage search engines" setting being left on in staging | `<meta name="robots" content="noindex,nofollow">` in every file (measured) | Launch checklist: Rank Math robots = index,follow on every page except `/bedankt/`. WP Settings → Reading → visibility unticked. Check with `curl` after launch |
| T6 | **Critical** | **About 37 live URLs are not covered by the redesign.** That is 22 more city pages (Amsterdam, Rotterdam, Den Haag, Eindhoven, Breda …), studenten-, senioren-verhuizen, inpakservice, transport-koerier, klusjesman, verhuisliftservice, ontruimservice, internationaal, faq, nieuws, reviews-verhuisbedrijf-utrecht and 16 blog posts. Deleting or orphaning them without 301s throws away their rankings and backlinks | Live `page-sitemap.xml` + `post-sitemap.xml` (measured) | Keep them live (old design) or 301 each one to its closest new page. Full mapping in `06-url-map.csv`. **Decide using Search Console data**, which I could not access (see Limits) |
| T7 | High | **Weak internal linking to the main money page.** `verhuisbedrijf-utrecht.html` has inbound links from **only 2** pages. `wasmachine-verhuizen.html` has 1, `verhuislift-beslisgids.html` 2, `ontruiming.html` 3. The 7 city pages get 7 each (from each other and werkgebied). Nav/footer pages get 32 | Link graph (measured) | Add "Verhuisbedrijf Utrecht" to the main nav or footer. Link it from home hero/intro, diensten, tarieven and every city page. Add the blog articles to the verhuistips hub. Add Ontruiming to the footer |
| T8 | High | **Two external links point to pages the redesign lacks**: `/inpakservice/` and `/transport-koerier/` (absolute URLs to the live site in home and diensten) | `index.html:44` (measured) | Keep those live pages, or build them in the new design |
| T9 | High | **No robots.txt or sitemap in the repo.** This is fine because Rank Math generates them on live, but the 2 new URLs (`/privacyverklaring/`, `/verhuisbedrijf-maarssen/`) must be published as WordPress pages so they enter `page-sitemap.xml` | Live robots.txt and sitemap_index.xml exist (measured) | After launch, resubmit `sitemap_index.xml` in Search Console |
| T10 | Medium | **Inconsistent URL style.** New pages use short slugs; inherited blog posts use long slugs (`/wat-kost-een-verhuizing-in-utrecht-complete-prijsgids-tips-2026/`). The year in the slug will date the page | canonicals (measured) | **Do not** change ranking slugs now. If you ever rename, 301 the old one. Next time, drop years from slugs |
| T11 | Medium | **Prijsgids and verhuislift pages compete with each other.** The live site has `/verhuislift-huren/`, `/verhuisliftservice/`, `/verhuislift-utrecht/` (post), `/verhuizen-met-gemak-met-onze-verhuislift/` (post) and `/wanneer-wel-of-geen-verhuislift-inzetten/`. That is 5 URLs for one topic. Similar overlap: `/opslag-huren/` vs `/tijdelijke-opslag-nodig/`; `/ontruiming/` vs `/ontruimservice/`; `/beoordelingen/` vs `/reviews-verhuisbedrijf-utrecht/` | Live sitemaps (measured) | Consolidate with 301s into one strong page per topic (see `06-url-map.csv`) |
| T12 | Medium | Dev files in the root (`deploy-bridge.html` 2.9 MB, `code-bridge.html`, `runtime-code-bridge.html`, `privacy-code-bridge.html`, `review.html`) and source images (`assets/utrecht-moving-hero-source.png` 2.4 MB, `assets/busje-komtzo-logo-source.png` 0.86 MB) | measured | Never upload them to the server or media library |
| T13 | Low | HTTPS: live site serves HTTPS on `www.` with valid redirects (measured). All canonicals use `https://www.` | measured | Nothing to do. Keep `www` as the preferred host |
| T14 | Low | No broken internal links in the redesign (measured: 0 broken of all relative `href`s) | measured | None |

### 2.2 On-page

| # | Sev | Finding | Evidence | Fix |
|---|---|---|---|---|
| O1 | **Critical** | **Big content cuts compared with live pages that rank today.** Approximate visible words, live → redesign: home 2,688 → 1,329; **`/verhuisbedrijf-utrecht/` 1,753 → 514**; Amersfoort 2,059 → 676; Houten / IJsselstein / Nieuwegein / Woerden ~1,800 → ~700; `/opslag-huren/` 1,174 → 378; `/beoordelingen/` 1,374 → 753. Competitors' "verhuisbedrijf Utrecht" pages carry **920 to 4,700 words** (VBU 1,614; Movenetjes 4,695; AA 1,928; ExtraHanden 2,060) | Live fetch (measured, ±15% because Divi wrapper text is included) | Before launch, bring the money pages back to at least the live depth with useful content. Areas covered and neighbourhoods, parking/ontheffing in Utrecht, the zero-emission zone, prices with examples, FAQ, reviews, photos. Tone stays the same, the words go back in |
| O2 | High | **The main money page's H1 and title avoid the head term.** `verhuisbedrijf-utrecht.html` has H1 "Verhuizen in Utrecht begint bij route, toegang en volume." and title "Verhuizen in Utrecht \| Route, prijs en offerte". Live has H1 "Verhuisbedrijf Utrecht", which is the exact phrase searched | measured | **Measured data shows this page keeps the head term (see O3).** H1 "Verhuisbedrijf Utrecht: vaste prijs, eigen verhuislift". Title "Verhuisbedrijf Utrecht \| Vaste prijs \| Busje komt zo" (52 characters) |
| O3 | High | **Home and `/verhuisbedrijf-utrecht/` target the same term** ("Verhuisbedrijf Utrecht" in both titles), so they cannibalise each other | measured | **Updated with measured data (see `03` §9):** Google ranks **`/verhuisbedrijf-utrecht/`** for the head term (#10 from Utrecht, #6 nationally for "verhuizers utrecht"); the homepage ranks for "verhuizen utrecht" (#9–10). **Keep `/verhuisbedrijf-utrecht/` as the "Verhuisbedrijf Utrecht" page** (H1 "Verhuisbedrijf Utrecht", 1,500+ words, with the parking/ontheffing/binnenstad/neighbourhood sections inside it). Point the homepage title at brand + "Verhuizen in Utrecht", and use the anchor "verhuisbedrijf Utrecht" for internal links to `/verhuisbedrijf-utrecht/` |
| O4 | High | **Some H1s carry no keyword at all**: `tarieven.html` ("Heldere verhuistarieven in drie pakketten" has no "Utrecht", no "verhuisbedrijf"); `werkwijze.html` ("Van uw aanvraag naar een duidelijke afspraak.") | measured | e.g. "Verhuistarieven Utrecht: drie heldere pakketten" |
| O5 | High | **Thin city pages that are 71–77% identical to each other** (5-word shingles in `<main>` with the city name normalised). Google may treat them as doorway pages | Measured similarity matrix | Give each city 250+ unique words. Local parking rules (Zeist centrum, Nieuwegein City), typical housing (Houten: eengezinswoningen; Woerden: binnenstad), a local review, a local photo, distance from Utrecht, nearby neighbourhoods |
| O6 | Medium | **Title length**: 5 titles over 60 characters (spoedverhuizing 67, opslag 67, tarieven 66, ontruiming 65, zakelijk 63), so they may be cut off in results. **Description length**: 6 over 155 characters (all city pages 152–164, tarieven 157) | measured | Shorten. The Rank Math snippet preview shows the cut-off |
| O7 | Medium | **City descriptions are templated**: "Verhuizen in X of van of naar X? Busje komt zo verzorgt uw verhuizing in Utrecht en omgeving. Bereken uw m³ …". "van of naar" reads clumsily | measured | Write one by hand per city, with a local hook |
| O8 | Medium | **Neighbourhood coverage missing.** 0 mentions of Leidsche Rijn, Vleuten, Overvecht, Kanaleneiland, Lombok, Wittevrouwen, Lunetten, Hoograven (measured). Autocomplete shows local searches such as "opslag utrecht leidsche rijn / overvecht / kanaleneiland" | grep, Google Autocomplete (measured) | Add a "Wijken in Utrecht" section to `/verhuisbedrijf-utrecht/` (or `/werkgebied/`): per neighbourhood, access, parking and housing type |
| O9 | Medium | **Conflicting price message.** The home hero says "Wij komen langs … leggen één bedrag vast. Geen nacalculatie", while `tarieven.html` sells hourly packages (€35.70 per mover per hour incl. VAT). Both can be true (a fixed price after a visit, hourly for small jobs) but it is never explained | measured | Add one sentence on both pages: "Vaste prijs na opname; kleine klussen op uurbasis" |
| O10 | Low | **Image alt text**: 100% present and descriptive (measured: 0 of 181 `<img>` without alt). Width and height set on all, `loading="lazy"` below the fold, hero `fetchpriority="high"` | measured | Good. In WordPress, keep the alt text when uploading to the media library |
| O11 | Low | **Heading hierarchy**: no level skips found on any page (measured). Exactly one H1 per page | measured | Divi can inject its own `<h1 class="main_title">`. The runtime JS removes it **client-side only**, so the server HTML may contain 2 H1s. Disable the page title in Divi page settings instead |
| O12 | Low | Brand written in 3 ways: "Busje komt zo", "busje komt zo", "Busje Komt Zo" | measured | Choose one, ideally the Google Business Profile spelling, and use it in titles and schema |

### 2.3 Performance and UX
| # | Sev | Finding | Label | Fix |
|---|---|---|---|---|
| P1 | High | **Core Web Vitals not verified.** PageSpeed API quota was exhausted. No CrUX data was retrieved | not verified | Run PageSpeed Insights on live `/` and a city page before and after launch. Compare |
| P2 | High | **The Divi layer stays under the redesign.** The live homepage HTML is **497 KB with 62 `<script>` tags and 14 stylesheets** (measured). The runtime then adds 31 KB of inline CSS plus `styles.css`. On mobile, LCP and INP will suffer | measured weight; CWV impact estimated | Best: move the redesign to a lightweight block theme (GeneratePress/Kadence/a custom theme) and drop Divi. Minimum: disable Divi modules and fonts on redesigned pages, use a caching plugin with CSS/JS minify and delay-JS (WP Rocket, LiteSpeed Cache) |
| P3 | Medium | `styles.css` is 129 KB unminified and shared by every page | measured | Minify (likely to land around 90 KB, estimated). Optionally inline the critical CSS |
| P4 | Low | Images are WebP, 67–214 KB, with width/height set, so no CLS risk from images. The hero is 136 KB at 768×1024 | measured | Add `srcset` for 480/768 widths on hero and photos (mobile saving, estimated 40–60%) |
| P5 | Low | Mobile: sticky WhatsApp/Aanvraag bar, swipeable review reel, 2×2 trust bands (from the commit history). Viewport meta present on all pages | measured | Check tap targets after the WordPress conversion |
| P6 | Low | Accessibility basics present: skip link, `aria-expanded` menu, `aria-label` on nav, `details/summary` FAQ, `aria-hidden` on duplicated carousel cards | measured | Check contrast of the gold buttons on teal (not measured) |

### 2.4 Structured data
**Present in the HTML files** (measured): `MovingCompany` (name, url, phone, email, locality only, areaServed), `WebSite`, `WebPage`/`AboutPage`/`CollectionPage`, `BreadcrumbList` (31 pages), `FAQPage` (25 pages), `Service` (11 pages), `Article` (3), `WebApplication` (m3 calculator). All JSON parses.

**Present live via Rank Math** (measured): `Place` + `MovingCompany`/`Organization` with the **full address** (De Brauwlaan 4, 3526 XS), logo, `WebSite`, `BreadcrumbList`, `Article` + `Person`.

| # | Sev | Finding | Fix |
|---|---|---|---|
| S1 | High | Both systems use the same `@id` (`https://www.busje-komtzo.nl/#organization`) but **different data**: the redesign has no street address, Rank Math has it. If both reach the page, Google sees conflicting entity data | Keep **one** source: the Rank Math Local SEO module, completed with the fields below. Add FAQ/Service through Rank Math per page |
| S2 | High | Missing on the LocalBusiness/MovingCompany entity: `streetAddress`, `postalCode`, `geo`, `openingHoursSpecification`, `priceRange`, `sameAs` (Google Business Profile URL, Trustoo, Facebook/Instagram), `logo`, `hasMap`, `vatID`, `taxID`/KvK (`identifier`) | Fill in Rank Math → Titles & Meta → Local SEO |
| S3 | Medium | No `AggregateRating`. Note: Google does **not** show stars for self-serving LocalBusiness reviews, so the value is low. Competitors VBU and Movenetjes add it anyway | Optional. Do not mark up third-party Trustoo/Google scores as your own reviews |
| S4 | Medium | FAQ rich results are limited to authoritative government/health sites since 2023, so FAQPage mainly helps AI/answer engines now | Keep it, but don't expect FAQ snippets |
| S5 | Low | `Service` lacks `provider` → `@id`, `areaServed` and `offers`/`priceSpecification` (tarieven has real prices) | Add when you rebuild the schema |

### 2.5 Local SEO readiness (Utrecht)
| # | Sev | Finding | Fix |
|---|---|---|---|
| L1 | **Critical** | **NAP regression**: the redesign shows **no street address** anywhere (0 mentions of "Brauwlaan"). It only says "Utrecht" / "Vestiging: Utrecht". The live site and Rank Math KML have De Brauwlaan 4, 3526 XS Utrecht. Google Business Profile matching depends on consistent NAP | Put the full address in the footer of every page, on contact/over-ons and in schema. *If the address is a service-area-only base (no visitors), still show it on the site but hide it in Google Business Profile (service-area business)* |
| L2 | Medium *(was High)* | **Shared address on a competitor's website**: Movenetjes' website lists De Brauwlaan 4, Utrecht, but **its Google Business Profile is at Kanaalstraat 96 Bis** (measured 2026-10-11). The Google Business Profile risk is therefore low | Check whether De Brauwlaan 4 is your own address or a shared one. Optionally ask Movenetjes to correct their site |
| L3 | High | No opening hours anywhere on the site (0 mentions). The Google Business Profile says **07:00–22:00, every day** (measured) | Put exactly these hours in the footer and in schema |
| L4 | High | No map embed and no "route" link to the business | Add a Google Maps embed (lazy, after consent) or a static map with a link on over-ons/contact |
| L5 | Medium | Two phone numbers (085 landline for calls, 06 for WhatsApp). This is fine, but Google Business Profile should list the **085** number as primary to match the site | Check in Google Business Profile |
| L6 | Medium | Google Business Profile **verified** (measured): 4.9 / 162 reviews, 88 photos, claimed, primary category "Verhuisservice" + Ontruiming / Piano / Opslag. Its website link is `http://busje-komtzo.nl/?utm_…` (http, no www), which causes a redirect hop. The site links to a Maps *search*, not the profile (cid 10293890076943097903) | Set the website link to `https://www.busje-komtzo.nl/?utm_source=google&utm_campaign=gmb`. Replace the Maps search links with the real Google Business Profile short link (`g.page/...` or `maps.app.goo.gl/...`) and the "review us" link |
| L7 | Medium | 7 regional pages exist, but Utrecht neighbourhoods are absent (see O8). Bilthoven, De Bilt, Vleuten-De Meern, Breukelen (live), Utrechtse Heuvelrug are missing | Add Breukelen (exists live), Bilthoven/De Bilt and Vleuten-De Meern as city pages **only** with genuinely unique content |

### 2.6 Dutch-market specifics
| # | Sev | Finding | Fix |
|---|---|---|---|
| D1 | High | **Privacy and cookies**: `privacyverklaring.html` is new (404 on live). The live site has `/cookie-policy/`. The footer "Cookie-instellingen" button calls `wpconsent-open-preferences`, so WPConsent must stay active. GTM must fire **only after consent** for analytics and ads cookies (AVG/GDPR + Telecommunicatiewet) | Publish `/privacyverklaring/`, link it in the footer, keep `/cookie-policy/`. Check Consent Mode v2 in GTM (required for Google Ads in the EEA) |
| D2 | Medium | **Trust signals present**: KvK, BTW number, algemene voorwaarden, reviews, family-business story, insurance claim ("verzekerd"). **Missing**: Erkende Verhuizer membership (0 mentions; competitors VBU, Waaijenberg, VSN and AA all lead with it), insured amount, VOG/VCA staff (VBU uses this), photos of the team with names | If you are a member of Erkende Verhuizers, show it. If not, show the insurer and the cover amount |
| D3 | Low | Copy quality: natural Dutch, consistent "u"-form, correct "m³". A few awkward phrasings ("van of naar X", "Verhuisaanvragen in Utrecht en omgeving" sounds bureaucratic, and over-ons says "familiebedrijf voor verhuisaanvragen") | Copy-edit for warmth. People search "verhuizen" and "verhuizers", not "verhuisaanvragen" |
| D4 | Low | Language tags are correct (`lang="nl"`, `og:locale nl_NL`, `inLanguage nl-NL`). No hreflang needed while the site is Dutch-only | If you add English (expats searching "movers Utrecht", see keywords), use `/en/` with hreflang `nl-NL` / `en` + `x-default` |

### 2.7 WordPress migration risks
| # | Sev | Risk | Recommendation |
|---|---|---|---|
| W1 | **Critical** | **The `the_content` override is fragile for SEO.** The WordPress editor and Rank Math's content analysis see the *old* content, while visitors see the replacement. A plugin update or a removed snippet silently brings the old pages back | Paste the final HTML into real page content (a Custom HTML block, or better, rebuilt blocks), with CSS/JS loaded through a small plugin or child theme. Avoid runtime replacement |
| W2 | High | **Permalinks**: live uses `/%postname%/` with trailing slashes (measured). Every redesign canonical matches the live slugs, which is good. Only 2 slugs are new | Keep the permalink structure. **Do not** use `.html` URLs. Internal links in the files (`offerte.html` etc.) must become `/offerteaanvraag/` etc. on upload. Find-and-replace map in `06-url-map.csv` |
| W3 | High | **SEO plugin**: Rank Math is already installed, holds the redirects, the local KML and the schema. **Keep Rank Math. Don't switch to Yoast** (switching means re-importing redirects and meta, with risk and no gain) | Rank Math setup checklist in `05-action-roadmap.md` |
| W4 | High | Divi theme overhead (see P2) | Medium term, move to a lightweight theme |
| W5 | High | **Form handling**: `offerte.html` posts to itself (`method="post"`, `data-submit-mode="live"`) and redirects to `/bedankt/`. A WordPress handler (Contact Form 7, Gravity Forms, a custom `admin-post` action) must accept the multipart upload | **Assumption**: handled in the deploy plan. Test a real lead end to end, including the photo upload and the GTM `bcz_form_submit` event |
| W6 | Medium | Staging → live: no separate staging found. The redesign has been pushed straight into live pages (T3) | Use a staging copy (most hosts offer one-click staging), protected by password **and** noindex. Run the checklist before swapping |

---

## Limits: what I could not verify
- **Search Console and Analytics data**: the `mcp-gsc` connector failed to connect (ECONNREFUSED), and Ahrefs, OpenSEO, Rankability and AdCopilot need authorisation. So **current rankings, clicks, impressions and backlinks are unknown**. This matters most for the redirect decisions (T6) and the cannibalisation choice (O3).
- **Core Web Vitals**: PageSpeed API quota exhausted. No lab or field data.
- **Google Business Profile**: no access to categories, photos, hours or review counts. The 4.9 / 160+ and 9.6 / 495+ figures are the site's own claims.
- **Search volumes and difficulty**: no keyword tool was available. Every number in `02-keyword-research.xlsx` is **estimated**.
- **Live word counts** include some theme wrapper text (±15%).
