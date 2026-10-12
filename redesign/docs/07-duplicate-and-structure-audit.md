# 07 · Duplicate content and structure audit

Date: 2026-10-12. Original files in the project root (`index.html` from git HEAD). Similarity measured with 5-word shingles on the text inside `<main>`: **Jaccard** = shared share of both pages together; **containment** = share of the smaller page that also appears in the other. Everything in this file is **measured** unless marked **assumption**.

## 1. Duplicate and near-duplicate content

### 1a. The seven location pages are one page with the name swapped (severity: High)
| Pair (all 21 combinations are in this range) | Jaccard | Containment |
|---|---|---|
| amersfoort ↔ woerden | 0.46 | 0.63 |
| amersfoort ↔ ijsselstein / maarssen / zeist | 0.43 | 0.61–0.62 |
| houten ↔ nieuwegein (lowest pair) | 0.40 | 0.58 |

- **Same H1 pattern** on all 7: "Verhuisbedrijf [plaats]: verhuizen met een helder plan en prijs."
- **Same H2 skeleton** on all 7: "Wat heeft het team nodig?" · "Verhuizen in [plaats] voorbereiden." · "Verhuizen in [plaats]: waar we op letten." · "Binnen [plaats], naar Utrecht of vanuit [plaats]." · "Vertel ons uw verhuizing…" · "Verhuizen in Utrecht en omliggende plaatsen." · and "Verhuizen in [plaats] voorbereiden." **a second time on the same page**.
- **Same FAQ**: "Is een voorstel vrijblijvend?" and "Hoe bereken ik mijn verhuisvolume?" with the same answers on all 7 (plus verhuisbedrijf-utrecht, and the first also on the prijsgids).
- **Same image** on all 7: `real-moving-lift-utrecht.webp`.
- This matches the audit's earlier finding (71–77% identical, finding 8; this measurement counts only `<main>`, so it is lower). Google treats near-identical city pages as doorway pages, which is the main risk on this site.

### 1b. Boilerplate blocks repeated across templates (severity: Medium)
| Repeated text | Pages |
|---|---|
| H2 "Vertel ons uw verhuizing. Dan krijgt u snel persoonlijk antwoord." | 14 pages |
| "App of bel ons rechtstreeks, of stuur uw verhuisdetails via de aanvraag. Vrijblijvend en zonder wachtrij." | 15 pages |
| H2 "Wat heeft het team nodig?" | 8 pages (7 cities + verhuisbedrijf-utrecht) |
| H2 "Deze gegevens maken uw aanvraag compleet." and H2 "Antwoorden voor deze situatie." | particulier, zakelijk, spoed, opslag |
| Route block: "Beschrijf vertrek en aankomst apart…", "Geef ook de aankomstzijde volledig door…", "Laat de volledige route beoordelen…" | 7 pages each |
| "Gebruik de m³ calculator om meubels, apparaten en dozen per kamer op te tellen…" | 7 pages |
| "Deze antwoorden leggen uit welke informatie nodig is voor een gerichte prijsbeoordeling." | 8 pages |

Shared CTA blocks are normal. The problem here is that they are written as **content** (H2s and paragraphs inside `<main>`) on thin pages, so they become a large share of each page.

### 1c. Homepage overlaps
| Pair | Jaccard | Containment | What is shared |
|---|---|---|---|
| diensten ↔ index | 0.12 | **0.43** | The 8-service grid and the H2 "Van één kast tot een heel kantoor." |
| index ↔ over-ons | 0.11 | 0.33 | The "familiebedrijf" text and the H2 "Een familiebedrijf uit Utrecht met meer dan 15 jaar ervaring." |

The homepage is already merged, so these two are fixed on the other side: diensten and over-ons get their own content (08 §3).

## 2. Titles, meta descriptions and H1s
- **No exact duplicates** among the 32 titles, descriptions or H1s.
- **Over-similar by pattern**:
  - The 7 city titles all follow "Verhuisbedrijf [plaats] | Verhuizen met Busje komt zo".
  - The 7 city H1s are identical apart from the place name.
  - All 7 city descriptions contain "vaste prijs vooraf", and 4 of them also "geen weekendtoeslag".
- **H1s that hide the keyword or the page purpose**:
  - spoedverhuizing: "Een spoedverhuizing in Utrecht begint met de juiste informatie."
  - over-ons: "…familiebedrijf voor verhuisaanvragen."
  - beoordelingen: no "reviews" and no "Utrecht".

## 3. Keyword cannibalisation
| Keyword (volume, measured) | Pages competing | Severity | Fix (details in 08) |
|---|---|---|---|
| **verhuisbedrijf utrecht** (1,000) | verhuisbedrijf-utrecht (owner, Google's chosen URL) · werkgebied ("Verhuisbedrijf regio Utrecht", H1 "Verhuisbedrijf in de regio Utrecht") · index (H2 "Reviews van ons verhuisbedrijf in Utrecht") | **High** | Werkgebied becomes "Werkgebied: verhuizen in de regio Utrecht" without the head term in the title or H1. |
| **wat kost een verhuisbedrijf** (1,300) / **verhuisbedrijf kosten** (1,000) | tarieven (title "Verhuisbedrijf kosten Utrecht", H2 "Wat kost een verhuisbedrijf?") · prijsgids (title "Wat kost een verhuisbedrijf in Utrecht?") | **High** | Tarieven owns "verhuisbedrijf kosten / tarieven / per uur" (transactional); prijsgids owns "wat kost verhuizen / verhuizen kosten / wat kost een verhuizing" (informational, worked examples). Prijsgids title loses "verhuisbedrijf". |
| **verhuislift (huren) utrecht** (320 + 140) | verhuislift-huren (owner) · beslisgids (title "…\| Beslisgids Utrecht") · live posts /verhuislift-utrecht/, /verhuizen-met-gemak-met-onze-verhuislift/ | Medium | Beslisgids stays informational ("wanneer is een verhuislift nodig") and links to the owner. The posts get 301s per the url map, after the new page ranks. |
| **verhuizers utrecht** (140, CPC €17) / **verhuizers inhuren** (720) | verhuisbedrijf-utrecht · particulier ("Verhuizers inhuren" in the title) | Low | Keep: different modifiers, so no change needed (assumption). Watch in Search Console. |
| **bedrijfsverhuizing** (210) / **interne verhuizing** (40) | zakelijk (362 words) · interne (544 words) | Medium | Merge interne into zakelijk as a section, if Search Console shows under 10 clicks in 16 months for /interne-verhuizing/ (assumption: low; not measured). |
| **opslag** (inboedel opslag 320) | opslag-en-verhuizen · live post /tijdelijke-opslag-nodig/ | Medium | 301 the post per the url map. |
| **verhuistips / verhuischecklist** | verhuistips (hub) · checklist | Low | Clear hub and child roles; no change to titles. |
| "familiebedrijf / over ons" | index · over-ons | Low | Homepage keeps a short summary; over-ons gets the full story. |

## 4. Thin pages: merge, expand or remove
| Page | Words | Recommendation |
|---|---|---|
| zakelijk-verhuizen | 362 | **Expand** to 900+ (what's included, planning outside office hours, IT and inventory, price examples). Absorb interne-verhuizing. |
| interne-verhuizing | 544 | **Merge** into zakelijk (see §3); 301. |
| particulier-verhuizen | 390 | **Expand** to 900+ (who it's for, packages, what's included, flats and stairs in Utrecht). |
| spoedverhuizing | 398 | **Expand** to 700+ (how fast, what's possible today or tomorrow, price, lift). |
| opslag-en-verhuizen | 378 | **Expand** to 800+ (where, how long, cost per month if you publish it, insurance). The price must come from you; I have none. |
| werkwijze | 369 | **Expand** to 700+ (opname by video or at home, what's fixed in the price, insurance, payment, cancellation). Not a merge: it's in the nav and answers process questions. |
| diensten | 416 | **Keep as a hub** with unique per-service summaries and a "vanaf" price; no long text needed. |
| offerte | 322 | **Keep**: it's a form page; add reassurance, not length. |
| bedankt | 116 | **Keep**, noindex. |

**Remove**: none of the 32. Removals only apply to live-only URLs, through 301s (§9).

## 5. URL structure
- **Flat slugs, one level deep**: `/verhuisbedrijf-nieuwegein/`, not `/werkgebied/nieuwegein/`. This is fine. **Don't change ranking URLs to add hierarchy**; show the hierarchy with breadcrumbs instead.
- **Click depth**: every page is 1 click from the homepage through the header or footer (measured: 26 header and 37 footer links on every page). The maximum of 3 is met.
- **Clean slugs**: yes, except `/wat-kost-een-verhuizing-in-utrecht-complete-prijsgids-tips-2026/` (long and dated). The audit says to keep it because it ranks, and to update the title yearly instead. I agree.
- **File names ≠ slugs** for 4 pages: `offerte.html` → `/offerteaanvraag/`, `opslag-en-verhuizen.html` → `/opslag-huren/`, `werkgebied-utrecht.html` → `/werkgebied/`, plus the 4 guides with long slugs. Every internal link must be rewritten to the slug on upload (audit W2).
- **Duplicate paths**: these don't exist in the static files, but WordPress must enforce them. Check after launch:
  - `busje-komtzo.nl` → `www.busje-komtzo.nl`
  - `http` → `https`
  - a URL without a trailing slash → the same URL with one
  - `/index.html` and `/index.php` → `/`
  - an upper-case URL → lower case
- **Canonicals**: all 32 point to `https://www.busje-komtzo.nl/…/` with a trailing slash (measured, consistent).

## 6. Canonical, noindex and schema
| Item | Status (measured) | Recommendation |
|---|---|---|
| Canonical on every page | present, self-referencing, consistent | Keep; Rank Math will output it. |
| `noindex,nofollow` in every file | preview setting | **Never upload.** Rank Math: `index,follow` everywhere except `/bedankt/`. |
| /bedankt/ | needs noindex | `noindex,follow` (still follow so links work). |
| Legal pages | indexable | Keep indexable (they are trust signals and not duplicates). /cookie-policy/ (live) and /privacyverklaring/: check that they don't repeat each other; if they do, merge the cookie text into the privacy page as a section and 301 /cookie-policy/ (assumption: not compared, the cookie page isn't in the files). |
| Filters, search or tag pages | none in the files | In WordPress, set `noindex` on tag, author, date and search archives in Rank Math. |
| Schema | every page repeats the full `MovingCompany` graph, plus FAQPage on 27 pages | One `MovingCompany` from Rank Math Local SEO (audit S1). Per page only: `Service` on services, `BreadcrumbList` everywhere, `Article` on guides, `FAQPage` only where the questions are unique to that page. Note: Google shows FAQ rich results only for government and health sites since 2023, so FAQ markup helps understanding, not snippets. |

## 7. Internal linking
- **Orphans**: none in the strict sense (header and footer reach everything). **Weak in-content links** (2 or fewer from other pages' content):
  - verhuisbedrijf-utrecht **(the money page: only index and werkgebied)**
  - prijsgids, wasmachine, beslisgids, checklist
  - interne, over-ons, beoordelingen, privacy, voorwaarden
- **Hub-and-spoke gaps**:
  - verhuisbedrijf-utrecht doesn't link to the 7 city pages (only Nieuwegein and Zeist).
  - City pages don't link back to verhuisbedrijf-utrecht in content.
  - Services don't link to their guide (lift → beslisgids yes; particulier → checklist no; tarieven → prijsgids yes, prijsgids → tarieven yes).
  - verhuistips links 2 of 4 guides.
- **Anchor text**: mostly descriptive, but many generic CTAs ("Start offerteaanvraag", "Meer hierover →" ×8 on the homepage original). Keep CTAs, but put the keyword-bearing link in the sentence ("onze tarieven per uur", "verhuislift huren in Utrecht").
- **Breadcrumbs**: present on 22 pages, **missing on** diensten, werkgebied, verhuistips, tarieven, prijsgids, over-ons, beoordelingen, werkwijze, bedankt.

## 8. Navigation and footer
- **Header (26 links)**: the main items with two dropdowns (Diensten 7, Werkgebied 7) plus utility links (e-mail, phone). Clear and crawlable (plain `<a href>`); fine.
- **Footer (37 links)**: 5 columns, including 10 information links and 8 cities. **Borderline link bloat**: 37 + 26 = 63 sitewide links means each in-content link carries less weight. The redesigned homepage footer has 34 (4 columns). Proposal: keep the footer at 30 or fewer and drop the duplicates that are already in the header (08 §4).
- **Mobile action bar**: WhatsApp and Aanvraag only. Add **Bel**, as on the new homepage.

## 9. 301 redirects needed for WordPress
From the audit's url map (`06-url-map.csv`; confidence as stated there) plus the merges proposed here:

| From | To | Status |
|---|---|---|
| /verhuisbedrijf-zeist/ (existing 301 to /werkgebied/) | **delete the redirect**, publish the page | measured, required |
| /interne-verhuizing/ | /zakelijk-verhuizen/#interne-verhuizing | **new proposal**: only if Search Console confirms low traffic |
| /verhuisliftservice/ | /verhuislift-huren/ | url map, estimated |
| /verhuizen-met-gemak-met-onze-verhuislift/ | /verhuislift-huren/ | url map, estimated |
| /verhuislift-utrecht/ (post) | /verhuislift-huren/ | **later**: only after the new page ranks |
| /ontruimservice/ | /ontruiming/ | url map, estimated |
| /reviews-verhuisbedrijf-utrecht/ | /beoordelingen/ | url map, estimated |
| /tijdelijke-opslag-nodig/ | /opslag-huren/ | url map, estimated |
| /zakelijke-particuliere-verhuizingen-utrecht/ | /verhuisbedrijf-utrecht/ | url map, estimated |
| /cookie-policy/ | /privacyverklaring/#cookies | **only if** the content duplicates (assumption) |
| /faq/, /klusjesman-service/, /producten/, /veelgestelde-vragen-over-verhuizen-naar-tiel/ | per Search Console check | assumption |
| technical: non-www, http, no trailing slash, /index.html | canonical form | WordPress and host settings |

**Before any 301**: export 16 months of Search Console page data (audit T6). Keep every URL with clicks or backlinks, and **never delete without a 301**.
