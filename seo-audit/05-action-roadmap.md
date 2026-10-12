# 05 — Action roadmap (checklist)

Effort: **S** < 2 h · **M** = half a day to 2 days · **L** > 2 days. Impact is **estimated**. IDs refer to `01-site-audit.md`.

---

## A. Fix BEFORE uploading to WordPress

### A1. Release mechanics (Critical)
- [ ] **Choose the deployment method and stop using the stale bridges.** *(T2, W1)* · Effort **M–L** · Impact **Critical**
  - What: don't deploy `deploy-bridge.html` (built 09-20, 20 of 32 pages), `runtime-code-bridge.html` (old 09-08f copy) or `code-bridge.html`. Paste the **current** HTML into real WordPress page content (or rebuild it as blocks), and load `styles.css` / `app.js` from a child theme or a small plugin. Avoid the `the_content` runtime swap.
  - Why: with the swap, WordPress and Rank Math analyse the old content, and one removed snippet silently brings the old pages back.
  - Files: `deploy-bridge.html`, `runtime-code-bridge.html`, `code-bridge.html`.
- [ ] **Never upload dev files** *(T12)*. Effort **S** · Impact Medium.
  - Files: `*-bridge.html`, `review.html`, `assets/*-source.png`.
- [ ] **Rewrite internal links from `.html` to live slugs** *(W2)*. Effort **S** (scripted find/replace) · Impact **Critical**.
  - What: e.g. `offerte.html` → `/offerteaanvraag/`, `opslag-en-verhuizen.html` → `/opslag-huren/`, `werkgebied-utrecht.html` → `/werkgebied/`, `prijsgids-verhuizen-utrecht.html` → `/wat-kost-een-verhuizing-in-utrecht-complete-prijsgids-tips-2026/`, `verhuischecklist.html` → `/voorkom-verhuis-stress-met-de-verhuischecklist/`, `verhuislift-beslisgids.html` → `/wanneer-wel-of-geen-verhuislift-inzetten/`, `wasmachine-verhuizen.html` → `/tips-voor-verhuizen-van-uw-wasmachine/`, `index.html` → `/`. Full map in `06-url-map.csv`.
  - Files: all 32 HTML pages.
- [ ] **Remove the live 301 `/verhuisbedrijf-zeist/` → `/werkgebied/`** in Rank Math → Redirections **before** you publish Zeist *(T4)*. Effort **S** · Impact High.
- [ ] **Publish the 2 new pages as WordPress pages**: `/verhuisbedrijf-maarssen/`, `/privacyverklaring/` *(T9, D1)*. Effort **S** · Impact Medium.
- [ ] **Decide the fate of the ~37 live URLs not in the redesign** *(T6)*. Effort **M** · Impact **Critical**.
  - What: export the last 16 months of Search Console data (Pages report). Keep every URL with clicks or backlinks, and 301 the rest per `06-url-map.csv`. **Never delete without a 301.**
  - Why: the redesign covers about 30 of the ~69 indexed URLs.
- [ ] **Staging plus noindex check** *(T5, W6)*. Effort **S** · Impact **Critical**.
  - What: test on a password-protected staging copy. At go-live: WP Settings → Reading → "Discourage search engines" **off**; Rank Math robots `index,follow` on all pages **except** `/bedankt/` (noindex). After launch, run `curl -s https://www.busje-komtzo.nl/ | findstr robots` (Windows) on 5 pages.

### A2. Head tags in Rank Math (Critical)
- [ ] **Enter the title, meta description and focus keyword per page in Rank Math** *(T1)*. Effort **M** · Impact **Critical**.
  - The HTML `<head>` does not deploy. Proposed values (title ≤60 characters, description ≤155, checked):

| Page (live URL) | Rank Math SEO title | Meta description | Focus keyword |
|---|---|---|---|
| `/` | Verhuizen in Utrecht? Familiebedrijf \| Busje komt zo | Verhuizen in Utrecht met een familiebedrijf: eigen verhuislift, vaste prijs na opname en geen weekendtoeslag. 4,9 op Google. Vraag nu een offerte aan. | verhuizen utrecht |
| `/verhuisbedrijf-utrecht/` | Verhuisbedrijf Utrecht \| Vaste prijs \| Busje komt zo | Verhuisbedrijf Utrecht met eigen verhuislift, €35,70 per verhuizer per uur en geen weekendtoeslag. 4,9 op Google (162 reviews). Vraag een offerte aan. | verhuisbedrijf utrecht |
| `/tarieven/` | Verhuistarieven Utrecht: €35,70 per uur \| Busje komt zo | Wat kost een verhuisbedrijf per uur? Bij Busje komt zo betaalt u €35,70 per verhuizer incl. btw. Drie heldere pakketten, geen weekendtoeslag. | wat kost een verhuisbedrijf per uur |
| `/verhuislift-huren/` | Verhuislift huren Utrecht \| Met bediening \| Busje komt zo | Verhuislift huren in Utrecht met ervaren bediening. Voor smalle trappen en hoge etages. Ook spoed en in het weekend. Bel of app voor beschikbaarheid. | verhuislift utrecht |
| `/spoedverhuizing/` | Spoedverhuizing Utrecht \| Vandaag of morgen? Bel ons | Spoedverhuizing in Utrecht? Bel 085 050 8282 en hoor direct wat er vandaag of morgen nog kan. Eigen verhuiswagen en verhuislift. | spoedverhuizing utrecht |
| `/ontruiming/` | Woningontruiming Utrecht \| Bezemschoon \| Busje komt zo | Woning of pand laten ontruimen in Utrecht? Wij halen leeg, voeren af en leveren bezemschoon op. Ook na overlijden. Vaste prijs vooraf. | woningontruiming utrecht |
| `/opslag-huren/` | Inboedelopslag Utrecht \| Opslag tussen twee woningen | Tijd tussen twee woningen? Wij verhuizen uw inboedel naar een droge, veilige opslag in de regio Utrecht en brengen alles later naar uw nieuwe adres. | inboedelopslag utrecht |
| `/zakelijk-verhuizen/` | Bedrijfsverhuizing Utrecht \| Kantoor \| Busje komt zo | Kantoor of bedrijf verhuizen in Utrecht? Wij plannen rond uw werktijden, ook avond en weekend. Vraag een offerte aan voor uw bedrijfsverhuizing. | bedrijfsverhuizing utrecht |
| `/particulier-verhuizen/` | Particulier verhuizen Utrecht \| Verhuizers inhuren | Verhuizers inhuren in Utrecht voor uw appartement of woning. Wij dragen, rijden en plaatsen alles. Vaste prijs na opname, geen weekendtoeslag. | verhuizers utrecht |
| `/verhuisbedrijf-nieuwegein/` (pattern for every city) | Verhuisbedrijf Nieuwegein \| Lokaal & snel \| Busje komt zo | Verhuisbedrijf in Nieuwegein nodig? Wij kennen City, Batau en Galecop en verhuizen binnen 15 minuten vanuit Utrecht. Vraag een offerte aan. | verhuisbedrijf nieuwegein |
| `/wat-kost-een-verhuizing-in-utrecht-…/` | Wat kost verhuizen in Utrecht? Prijzen 2026 + voorbeelden | Wat kost een verhuizing in Utrecht? Echte uurtarieven, rekenvoorbeelden per woningtype en tips om te besparen. Bijgewerkt voor 2026. | wat kost een verhuizing utrecht |
| `/bedankt/` | Bedankt voor uw aanvraag \| Busje komt zo | (noindex) | n/a |

  ⚠ The Nieuwegein description names neighbourhoods and a 15-minute travel time (**assumption**). Check the facts before publishing.

- [ ] **One schema source** *(S1, S2)*. Effort **M** · Impact High.
  - What: complete Rank Math → Titles & Meta → **Local SEO**: name (one spelling, O12), full address De Brauwlaan 4, 3526 XS Utrecht, geo coordinates, phone +31850508282, opening hours, price range "€€", logo, `sameAs` (Google Business Profile, Trustoo, socials). Add per-page FAQ/Service schema through the Rank Math Schema Generator. **Do not** paste the files' own `MovingCompany` JSON-LD.

### A3. Content and on-page (Critical / High)
- [ ] **Restore content depth on the money pages** *(O1)*. Effort **L** · Impact **Critical**.
  - What: bring `/` to 1,800+ words, `/verhuisbedrijf-utrecht/` to 1,500+, each city page to 1,000+, `/opslag-huren/` to 900+. Add useful sections (see below), not filler.
  - Files: `index.html`, `verhuisbedrijf-utrecht.html`, `verhuisbedrijf-*.html`, `opslag-en-verhuizen.html`, `beoordelingen.html`.
- [ ] **Resolve the home vs `/verhuisbedrijf-utrecht/` cannibalisation** *(O3)*. Effort **S** (decision) + **M** (copy) · Impact High.
  - **Updated with measured rankings:** Google already ranks `/verhuisbedrijf-utrecht/` for the head term (#10 from Utrecht), and the homepage for "verhuizen utrecht" (#9–10). So `/verhuisbedrijf-utrecht/` = "Verhuisbedrijf Utrecht", rebuilt to 1,500+ words with H2s: *Verhuizers in Utrecht: wat we doen* · *Prijzen (€35,70 p.p./uur, pakketten)* · *Parkeren en laden/lossen* · *Ontheffing en venstertijden (utrecht.nl/ontheffingvoertuig)* · *Binnenstad en zero-emissiezone* · *Straat afzetten: 10 werkdagen vooraf via TVU* · *Wijken: Leidsche Rijn, Vleuten-De Meern, Overvecht, Kanaleneiland, Lombok, Wittevrouwen, Lunetten* · *Wat kost verhuizen in Utrecht* · FAQ.
- [ ] **Fix H1s** *(O2, O4)*. Effort **S** · Impact High.
  - `index.html`: "Verhuizen in Utrecht met een familiebedrijf dat u kunt vertrouwen" (keep the kicker "Verhuisbedrijf in Utrecht").
  - `verhuisbedrijf-utrecht.html`: "Verhuisbedrijf Utrecht: vaste prijs, eigen verhuislift".
  - `tarieven.html`: "Verhuistarieven Utrecht: drie heldere pakketten".
  - `werkwijze.html`: "Werkwijze: zo verloopt uw verhuizing met Busje komt zo".
- [ ] **Add the full NAP and opening hours to the footer of every page, and to over-ons** *(L1, L3)*. Effort **S** · Impact **Critical** (local).
  - Files: footer block in all 32 HTML files (`<span>Utrecht</span>` → the full address), `over-ons.html`.
- [ ] **Check the shared address with Movenetjes (De Brauwlaan 4)** *(L2)*. Effort **S** · Impact High.
  - Why: a Google Business Profile suspension or filter risk. Decide between a unit number and a service-area business with the address hidden.
- [ ] **Strengthen internal links to the money pages** *(T7)*. Effort **S** · Impact High.
  - What: add the Utrecht page to the nav or footer ("Verhuisbedrijf Utrecht"). Link it from diensten, tarieven and all 7 city pages. Link `wasmachine`, `beslisgids` and `checklist` from `verhuistips.html` and the relevant service pages. Add Ontruiming to the footer "Uw verhuizing" column.
- [ ] **Explain "vaste prijs" vs hourly packages** in one sentence on home and tarieven *(O9)*. Effort **S** · Impact Medium (conversion and Ads).
- [ ] **Keep `/inpakservice/` and `/transport-koerier/` live**, because the redesign links to them *(T8)*. Effort **S**.
- [ ] **Divi**: disable the page title module on redesigned pages, so there is no duplicate H1 in the server HTML *(O11)*. Effort **S**.
- [ ] **Test the quote form end to end** on staging: photo upload, redirect to `/bedankt/`, GTM `bcz_form_submit` *(W5)*. Effort **S** · Impact **Critical** (leads).

---

## B. First 30 days after launch
- [ ] **Search Console**: resubmit `sitemap_index.xml`. Request indexing for `/`, `/verhuisbedrijf-utrecht/`, `/tarieven/`, the 7 city pages, `/verhuisbedrijf-maarssen/` and `/privacyverklaring/`. Effort **S** · Impact High.
- [ ] **Watch the Coverage and 404 reports daily in week 1, then weekly.** Fix every new 404 with a 301. Effort **S** · Impact High.
- [ ] **Benchmark Core Web Vitals** (PageSpeed Insights mobile) on `/`, `/verhuisbedrijf-utrecht/` and one city page, before and after *(P1)*. Effort **S**.
- [ ] **Performance quick wins**: caching plugin with CSS/JS minify and delay-JS, minify `styles.css`, `srcset` on photos *(P2–P4)*. Effort **M** · Impact Medium.
- [ ] **Google Business Profile tune-up**: primary category "Verhuisbedrijf"; secondaries for lift, storage and clearance; service areas = the 7 towns + Utrecht; hours; 20+ real photos (trucks, lift, team, Utrecht streets); UTM-tagged website link; Q&A seeded with the site's FAQ. Effort **M** · Impact **High**.
- [ ] **Replace the "Google Maps search" links with the real Google Business Profile link and a review link** (home, beoordelingen, footer) *(L6)*. Effort **S**.
- [ ] **Launch Google Ads campaigns 1, 2 and 6** per `04-google-ads-plan.md`, after the conversion test. Effort **M** · Impact High (leads from day one).
- [ ] **Consolidate duplicate topics with 301s**: `/verhuisliftservice/`, `/verhuislift-utrecht/`, `/verhuizen-met-gemak-met-onze-verhuislift/` → `/verhuislift-huren/`; `/ontruimservice/` → `/ontruiming/`; `/reviews-verhuisbedrijf-utrecht/` → `/beoordelingen/`; `/tijdelijke-opslag-nodig/` → `/opslag-huren/` *(T11)*. Do this only after checking that GSC shows the target page is stronger. Effort **S** · Impact Medium.
- [ ] **Shorten over-length titles and descriptions** (5 titles, 6 descriptions) in Rank Math *(O6)*. Effort **S**.
- [ ] **Add a trust block**: Erkende Verhuizer (if a member) or insurer plus cover amount; team photos with names *(D2)*. Effort **S–M** · Impact Medium.

## C. Days 30–90
- [ ] **De-duplicate the city pages** *(O5)*: 250+ unique words each (local parking and access, housing types, distances, a local review, a local photo). Start with Nieuwegein, Zeist and Houten (highest estimated value). Effort **L** · Impact High.
- [ ] **New page `/ontruiming-na-overlijden/`**: housing-association deadlines, a care-home room within 24–72 h, costs, step-by-step, a calm tone. Effort **M** · Impact High.
- [ ] **Rebuild in the new design**: `/studenten-verhuizen/`, `/senioren-verhuizen/`, `/inpakservice/`, plus `/piano-verhuizen/` (upgrade the existing post). Effort **L** · Impact Medium.
- [ ] **New city page `/verhuisbedrijf-vleuten-de-meern/`** (only with unique content). Effort **M** · Impact Medium.
- [ ] **Answer the cost questions in `/tarieven/` and the prijsgids** as question H2s with 40–60 word answers: "per uur", "voor 1 dag", "per m³", "met inpakken". Effort **M** · Impact Medium (People Also Ask, AI Overviews).
- [ ] **Printable verhuischecklist PDF** (lead magnet, "verhuischecklist pdf"). Effort **S** · Impact Medium.
- [ ] **Ads**: add campaigns 3–5. Switch to Maximise conversions → tCPA once there are 30+ conversions. Effort **M**.
- [ ] **Test English demand** with one EN ad group. Build `/en/moving-company-utrecht/` with hreflang only if leads convert. Effort **S** → **M**.
- [ ] **Decide on the old non-Utrecht city pages** (Amsterdam, Rotterdam, Eindhoven …) using 90 days of GSC data: keep and refresh the ones that earn leads, 301 the dead ones to `/werkgebied/`. Effort **M**.
- [ ] **Medium term: move off Divi** to a lightweight theme *(P2, W4)*. Effort **L** · Impact High (speed, maintainability).

## D. Ongoing
**Reviews** (the biggest local-pack lever; VBU claims about 15× your volume)
- [ ] Send a review request (Google link plus a WhatsApp template) after every job. Target 8–10 new Google reviews a month (estimated). Reply to every review within 48 h and mention the service and place naturally.

**Google Business Profile posts** (weekly, 10 minutes)
- [ ] Alternate: a job photo with the neighbourhood ("Verhuizing in Lombok met verhuislift"), a tip of the week, an offer or availability note ("Nog plek op zaterdag 18 oktober"), an ontruiming before/after.

**Content calendar (1–2 articles a month, all linking to a money page)**
| Month | Article | Target keyword | Links to |
|---|---|---|---|
| Nov 2026 | Verhuizen in de Utrechtse binnenstad: zero-emissiezone en venstertijden | verhuizen utrecht binnenstad | `/verhuisbedrijf-utrecht/` |
| Dec 2026 | Ontheffing of straat afzetten bij een verhuizing in Utrecht: zo werkt het | ontheffing verhuizing utrecht | `/verhuislift-huren/` |
| Jan 2027 | Wat kost verhuizen in Utrecht in 2027? Rekenvoorbeelden per woningtype | kosten verhuizing utrecht | `/tarieven/` |
| Feb 2027 | Verhuizen naar Leidsche Rijn: tips voor nieuwbouw en hoge flats | verhuizen leidsche rijn | `/verhuislift-huren/` |
| Mar 2027 | Ontruiming van een huurwoning na overlijden: termijnen bij Bo-Ex, Mitros en Portaal | ontruiming huurwoning na overlijden | `/ontruiming-na-overlijden/` |
| Apr 2027 | Studentenkamer verhuizen in Utrecht (De Uithof, Cambridgelaan) | studenten verhuizen utrecht | `/studenten-verhuizen/` |
| May 2027 | Piano verhuizen: kosten en wat erbij komt kijken | piano verhuizen kosten | `/piano-verhuizen/` |
| Jun 2027 | Opslag tussen twee woningen: hoe lang, wat kost het | opslag tussen twee woningen | `/opslag-huren/` |
| Quarterly | Case: "Verhuizing van [wijk] naar [plaats]" with photos | long-tail local | city page |

**Local link building** (estimated effort 2–4 h/month)
- [ ] Citations with the same NAP: Trustoo (exists), Telefoonboek.nl, De Telefoongids/Detelefoongids.nl, Openingstijden.nl, Cylex, Yelp NL, Bing Places, Apple Business Connect, Werkspot, KVK listing.
- [ ] Erkende Verhuizers member listing (if eligible).
- [ ] Local partners: estate agents (makelaars) in Utrecht and Nieuwegein, housing associations, care homes (ontruiming), student housing (SSH), self-storage partners. A "recommended partner" page link on their site.
- [ ] Local sponsorship (sports club, neighbourhood event) for a link plus brand mentions.
- [ ] Local press (DUIC, AD Utrechts Nieuwsblad, RTV Utrecht): a story angle such as "Family movers on the zero-emission switch in Utrecht".

**Monthly review**
- [ ] GSC: clicks and position for the P1 keywords. Pages losing impressions → refresh.
- [ ] Ads: CPA per campaign. Shift budget away from keywords where organic is now top 3.
