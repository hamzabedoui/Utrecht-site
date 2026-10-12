# 02 · Opportunity map

Date: 2026-10-12 · Based on `01-competitor-ux.md` (measured 2026-10-12) and `seo-audit/` (measured 2026-10-11).
Labels: **measured** = from the browser test or the SEO tools; **estimated** = my judgement.

## 1. What ALL competitors do badly
| Gap | Evidence (measured) |
|---|---|
| **No price you can trust in the first screen** | Only VHL shows a price above the fold, and it fails contrast. Nobody shows an hourly rate. Yet cost questions are 3,800+ searches a month (SEO audit §5). |
| **Proof is hidden on mobile** | 5 of 8 put their review score below the first mobile screen, even those with thousands of reviews. |
| **Small tap targets and small text** | 16–101 links under 44 px per page; VSN body text is 13 px; SVS, Snelle and Draagkracht use 15 px. |
| **No real Utrecht knowledge in the design** | Stock canal photos (Snelle, SVS) and generic "regio Utrecht" lines. Nobody shows parking, ontheffing, binnenstad or a map in the main flow. |
| **Cookie walls and heavy themes** | 5 of 8 open with a blocking cookie modal; 4 of 8 ship 440 KB–1.2 MB of JavaScript. |
| **Look-alike brands** | Orange/yellow buttons, Poppins/Montserrat/Open Sans, caps buttons, template layouts. |

## 2. What they do well, which you must match
| Must-have | Who does it best | Your status |
|---|---|---|
| Sticky mobile action bar (Bel / WhatsApp / Offerte) | VHL, Snelle Jongens, SVS | In the redesign file ✓ (keep) |
| Phone number in the header, as a real `tel:` link | VBU, VSN, Budget, VHL | Redesign ✓; **live site ✗** |
| An instant price tool | SVS calculator, VBU prijs/m3/dozen, Budget postcode, Draagkracht 60 s form | You have `/m3-calculator/` but not in the main flow |
| Review score with volume | VBU 9,3/5,224, SVS 4.8/9,846, Truckit 4.9/1,281 | 4.9/162 exists but is shown small |
| Real crew photos | VSN, Draagkracht, Budget | You have real truck/lift photos ✓ |
| WhatsApp | VHL, Snelle, Draagkracht | ✓ |
| Proof of standards (Erkend, NIWO, insurance) | VSN, Budget, Draagkracht | Show what you genuinely have (insurance, KvK, years); **never imply a certification you don't hold** (Draagkracht's notice shows the cost) |

## 3. The 5 biggest UX opportunities

### 1. Put your price in the first screen
**What**: show "€35,70 per verhuizer per uur, incl. btw", "geen weekendtoeslag" and "geen voorrijkosten in Utrecht" next to the H1, with a three-question estimate (woning, verdieping, lift ja/nee → an hours and price range) that leads to the quote.
**Why it wins**: nobody else shows a readable price up front (measured). Your rate is below the €52,50 competitors quote (SEO audit §7).
**SEO and conversion**: answers the cost queries where AI Overviews and People Also Ask appear (SEO audit §8); a tool increases time on page; a price filters out bad leads.
**Watch out**: the audit flags a conflict between "één vaste prijs" (home) and hourly packages (tarieven). The design will present it as "vaste prijs na gratis opname, berekend op €35,70 per uur". **You need to confirm that wording.**

### 2. Make the first mobile screen do all the work
**What**: in the first 390×844 screen: H1, the 4.9 Google score with count, the price line, and one clear primary button, with Bel and WhatsApp in a sticky bottom bar. All targets at least 48 px; body text 18 px.
**Why it wins**: 5 of 8 hide proof on mobile; 7 of 8 have dozens of small targets.
**SEO and conversion**: Google indexes the mobile version; a full first screen lowers bounce. The sticky bar is CLS-safe when its space is reserved.

### 3. Be the fastest moving site in Utrecht
**What**: one self-hosted font family (woff2, latin subset, `font-display: swap`), no sliders, under 20 KB of JavaScript, an LCP image preloaded at the right size, and a non-blocking cookie banner with a clear "Alleen noodzakelijk".
**Target** (estimated achievable): under 400 KB first load and a mobile LCP under 1.5 s, against 216 KB–3.7 MB and 0.6–3.5 s measured for competitors.
**SEO and conversion**: Core Web Vitals is a ranking signal, and a fast first view lowers bounce on paid traffic (Google Ads plan, `seo-audit/04`).

### 4. Show Utrecht street knowledge, not a stock canal photo
**What**: a "Verhuizen in Utrecht" block with real local answers (parking and ontheffing, binnenstad and zero-emissiezone, a lift for narrow stairs, the neighbourhoods you serve), an embedded map loaded on click, and your own photos in Utrecht streets.
**Why it wins**: nobody visualises local knowledge (measured); it's also what the audit asks to restore on `/verhuisbedrijf-utrecht/` (1,500+ words).
**SEO and conversion**: adds the depth Google rewards on the head-term page and supports local relevance. A scannable design (short answers, `<details>` for the longer parts, all text in the HTML) keeps long pages readable on mobile.

### 5. Honest, checkable trust
**What**: a live link to your Google reviews (4.9 / 162), named reviews with the neighbourhood and date, the family behind the business, your own lift and truck, and the full address and opening hours in the footer of every page.
**Why it wins**: competitors lean on stock photos, a paid 0900 number (SVS) or a forced correction notice (Draagkracht).
**SEO and conversion**: consistent name, address and phone everywhere (NAP) is a local ranking factor and was a critical item in the audit (L1). Note: Google doesn't show review stars for reviews a business publishes about itself, so the review section is for people, not for rich results.

## 4. SEO guard-rails for the redesign
These come from the audit and apply to every direction in Step 3.
- **Keep** every title, meta description, H1 and URL agreed in `seo-audit/05-action-roadmap.md` §A2–A3. The design changes presentation, not these.
- **One H1 per page**, real text in the HTML (no text in images), all FAQ and accordion content present in the HTML.
- **Never let a calculator replace text**: the H1 and the intro paragraph stay in the HTML above or beside any tool.
- **Map embeds load on click**, so they don't slow the first view.
- **Schema stays in Rank Math** (audit S1–S2); the design doesn't add its own `MovingCompany` JSON-LD.
