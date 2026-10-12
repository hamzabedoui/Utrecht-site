# 00 — Executive summary · Busje komt zo SEO pre-launch audit

Date 2026-10-11 · Site: redesign of **www.busje-komtzo.nl** (moving company, Utrecht) · Analysis only. No project files were changed.

## Update 2026-10-11: measured keyword and competitor data (OpenSEO)
- **Your Google Business Profile drives the business**: 4.9 / 162 reviews. From Utrecht you're Maps **#1** for "verhuizen utrecht" and "piano verhuizen", **#2** for "verhuisbedrijf" (5,400/mo) and "verhuislift huren" (4,400/mo), **#3** for "verhuisbedrijf utrecht" (1,000/mo).
- **The website mostly sits on page 2–3**: #6 "verhuizers utrecht", #9 "verhuizen utrecht", #21 "verhuisbedrijf utrecht" (national). `/verhuisbedrijf-utrecht/` is Google's chosen page for the head term, so **keep it as the head-term page and restore its depth** (this reverses earlier advice O3).
- **Real competitors**: Student Verhuis Service, VBU (2,518 reviews), Snelle Jongens, VSN, verhuislifthurenutrecht.nl, Budget, Truckit, Draagkracht.
- **Biggest untapped keywords** (volume/mo, KD): verhuislift huren 4,400 (23) · m3 berekenen 1,900 (0) · wat kost een verhuisbedrijf 1,300 (0) · verhuisbedrijf kosten 1,000 (0) · woningontruiming 1,000 (3) · wasmachine verhuizen 880 (0) · piano verhuizen 590 (0, **you're Maps #1 with no page**).
- **Backlinks are weak and falling**: 48 referring domains; about 120 backlinks lost March–July 2026.
- **Corrected**: Movenetjes' Google Business Profile is at Kanaalstraat 96 Bis, so the shared-address risk is Medium, not High.
- Full detail: `03-competitor-analysis.md` and `02-keyword-research.xlsx` (5 tabs, measured).

## The one thing to understand first
This isn't a new site going live. It is a **redesign of a live WordPress site (Divi + Rank Math) that already ranks**: about 69 indexed URLs, 29 city pages, 17 blog posts. The biggest risk is therefore **losing what already works**, not failing to build something new. The redesign is well built: clean HTML, 100% alt text, correct heading structure, real photos, strong trust signals. Most of the risk sits in **how it reaches WordPress**.

## Top 10 findings
| # | Finding | Severity | Where |
|---|---|---|---|
| 1 | **The head tags won't go live.** Rank Math writes the `<head>`, so the new titles, descriptions and schema in the HTML files must be entered in Rank Math page by page. Proposed values are ready | Critical | all pages → `05` §A2 |
| 2 | **The deploy files are stale.** The bridge bundles carry the old 09-08f copy and only 20 of 32 pages. The old version is already live on `/werkwijze/`, `/verhuistips/` and `/werkgebied/` | Critical | `*-bridge.html` |
| 3 | **Content depth was cut on pages that rank**: `/verhuisbedrijf-utrecht/` 1,753 → 514 words, home 2,688 → 1,329, city pages ~1,800 → ~700. Competitors run ~1,650 words (median) | Critical | `verhuisbedrijf-utrecht.html`, `index.html`, city pages |
| 4 | **NAP regression**: the redesign shows only "Utrecht", while the live site and Rank Math list De Brauwlaan 4, 3526 XS. **Movenetjes (a competitor) lists the same address**, a Google Business Profile risk to check | Critical / High | footer of every page |
| 5 | **~37 live URLs aren't covered** by the redesign. They need a keep-or-301 decision based on Search Console data | Critical | `06-url-map.csv` |
| 6 | **The Zeist page is blocked** by an existing 301 (`/verhuisbedrijf-zeist/` → `/werkgebied/`) | Critical (small fix) | Rank Math Redirections |
| 7 | **The money page is underlinked and mis-targeted**: 2 internal links in; H1 "Verhuizen in Utrecht begint bij route…" has no "verhuisbedrijf"; it cannibalises the home page | High | `verhuisbedrijf-utrecht.html` |
| 8 | **City pages are 71–77% identical** (doorway risk) | High | 7 × `verhuisbedrijf-*.html` |
| 9 | **Schema conflict**: the files' `MovingCompany` and Rank Math's use the same `@id` with different data. Missing: street, geo, opening hours, sameAs | High | Rank Math Local SEO |
| 10 | **Price message conflict**: "één vaste prijs, geen nacalculatie" (home) vs hourly packages (tarieven). This hurts trust and Ads relevance | Medium | `index.html`, `tarieven.html` |

## Where to start (in order)
1. **Freeze the deployment method.** Don't use the bridge files. Paste the current HTML into real page content on a password-protected staging copy.
2. **Pull 16 months of Search Console data** and decide keep or 301 for every live URL (`06-url-map.csv`).
3. **Put the full address and opening hours on every page**, and check the shared-address issue.
4. **Restore depth on `/`, `/verhuisbedrijf-utrecht/` and the city pages.** Turn `/verhuisbedrijf-utrecht/` into the "Verhuizen in Utrecht" guide (parking, ontheffing, zero-emissiezone, wijken). Few competitors cover this.
5. **Enter the Rank Math titles, descriptions and Local SEO schema** (ready in `05`). Remove the Zeist redirect. Publish Maarssen and the privacy page.
6. **Go live, resubmit the sitemap, watch 404s daily**, and run Google Ads on "verhuisbedrijf utrecht", "verhuislift" and brand while organic rankings settle (`04`).

## Quick wins after launch (low effort, estimated high return)
Tarieven H2 "Wat kost een verhuisbedrijf per uur?" (you publish a real €35.70 rate; competitors publish averages) · "verhuislift utrecht spoed" and "spoedverhuizing utrecht" in Ads · ontheffing/parkeren section for Utrecht · "wasmachine verhuizen zonder transportbouten" H2 · checklist PDF · Houten / IJsselstein / Maarssen city pages (low competition).

## What I could not verify
*Now measured (2026-10-11)*: search volumes, difficulty and CPC; current rankings; competitor rankings; Google Business Profile data; your backlink profile.

*Still not verified*: Search Console clicks and impressions (connect it in OpenSEO; reading it costs no credits) · Maps rank grid across the city (provider error) · competitor backlinks (credits ran out) · Core Web Vitals (PageSpeed quota).

## Files
`01-site-audit.md` · `02-keyword-research.xlsx` (+ `.csv`, semicolon-delimited for Dutch Excel) · `03-competitor-analysis.md` · `04-google-ads-plan.md` · `05-action-roadmap.md` · `06-url-map.csv`
