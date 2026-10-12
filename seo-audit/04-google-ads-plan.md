# 04 — Google Ads plan · Utrecht (first 90 days)

Date: 2026-10-11.

**Data status**
- **Measured**: the live site already runs **GTM-WFWPWKBN**. `app.js` pushes `dataLayer` events for form submit, call clicks and WhatsApp clicks. Keyword demand was checked with Google Autocomplete (nl-NL).
- **Not available**: no Google Ads account access (the AdCopilot connector needs authorisation), and no Keyword Planner volumes or CPCs.
- Every **budget, CPC and volume figure below is estimated**. Validate in Keyword Planner (location: Utrecht province, language: Dutch) before you launch.

> **Update 2026-10-11, measured CPCs (OpenSEO, Google NL)**: verhuisbedrijf offerte €25.63 · verhuisservice utrecht €18.36 · verhuizers utrecht €17.03 · verhuizen utrecht €16.04 · verhuisbedrijf utrecht €14.76 · verhuisbedrijf amersfoort €14.55 · woningontruiming utrecht €15.75 · bedrijfsverhuizing €12.49 · verhuisbedrijf €11.01 · piano verhuizen €9.61 · verhuislift huren utrecht €4.81 · verhuislift huren €3.40. **These are 3–5× my earlier estimate of €3.50**, so raise the max-CPC cap to about **€15** on the core Utrecht ad group, or budget for fewer clicks. Verhuislift (€3.40–4.81) and piano (€9.61, where you're already Maps #1) give the most clicks per euro. Competitor ads seen from Utrecht: Magic Movers, bcverhuizingen, Alleverhuizers, Verhuisbedrijf Nieuw Begin, SVS ("Verhuizer €36,- per uur"), StudentVerhuizers.

---

## 0. Prerequisites (do these before spending €1)
1. **Conversion tracking with real leads** (see `adcopilot:measure`-style setup):
   - **Primary conversion**: `bcz_form_submit`, confirmed by `/bedankt/` (offerte form).
   - **Primary conversion**: calls from ads (call asset with a Google forwarding number, minimum 60 s), plus website call conversions on `tel:` clicks.
   - **Secondary** (observe only): WhatsApp click (`wa.me`), m³ calculator use.
   - Test once end to end: submit a real test lead and check it in GTM preview and Ads diagnostics.
2. **Consent Mode v2** is configured in WPConsent and GTM. Google Ads requires it for EEA traffic. Without it, remarketing and conversion modelling stop working.
3. **The landing pages are live** in the new design, with the audit's Critical fixes done (NAP, depth, correct H1s). Ads quality score also depends on landing-page relevance.
4. Link Google Business Profile to Ads, for location assets.

---

## 1. Account structure

| # | Campaign | Goal | Locations (presence only, **not** "interest") | Schedule | Est. daily budget* |
|---|---|---|---|---|---|
| 1 | **BCZ – Search – Verhuisbedrijf Utrecht** | Core leads | Gemeente Utrecht + 15 km radius | Every day 07:00–22:00 | €25–40 |
| 2 | **BCZ – Search – Verhuislift** | Lift jobs (high margin) | Utrecht + 20 km | Every day | €10–15 |
| 3 | **BCZ – Search – Spoed** | Urgent calls | Utrecht + 20 km | 07:00–21:00, **bid +30% Mon–Fri mornings** | €10 |
| 4 | **BCZ – Search – Ontruiming** | Clearance jobs | Utrecht + 20 km | Weekdays 08:00–20:00 | €8–12 |
| 5 | **BCZ – Search – Zakelijk** | B2B | Utrecht + Nieuwegein + Amersfoort + 25 km | Mon–Fri 08:00–18:00 | €5–10 |
| 6 | **BCZ – Search – Brand** | Protect the brand and capture navigational searches | NL | Always | €2–3 |

\*Estimated. Total about **€60–90/day (€1,800–2,700/month)**. A leaner start of **€30–40/day** on campaigns 1, 2 and 6 alone is reasonable while tracking is proven.

**Do not start with** Performance Max, Display or broad match. They need conversion history and clean tracking. Revisit after 30+ conversions a month.

### Bidding path
- Weeks 1–2: **Maximise clicks** with a max CPC cap (estimated €3.50), to collect data.
- From about 15 conversions: **Maximise conversions**.
- From 30+ conversions in 30 days: **Target CPA**, starting at the observed CPA +20%.

---

## 2. Ad groups and keywords
Match types: `[exact]` and `"phrase"` only. Each ad group sends traffic to its matching landing page.

### Campaign 1 — Verhuisbedrijf Utrecht
| Ad group | Keywords | Landing page |
|---|---|---|
| Verhuisbedrijf Utrecht | [verhuisbedrijf utrecht], "verhuisbedrijf utrecht", [verhuisbedrijf in utrecht], "verhuisbedrijf" (presence-targeted, phrase only), [verhuisbedrijf in de buurt] | `/` (or `/verhuisbedrijf-utrecht/` after the O3 decision) |
| Verhuizers Utrecht | [verhuizers utrecht], "verhuizers utrecht", "verhuizers inhuren", [verhuizer utrecht] | `/particulier-verhuizen/` |
| Kosten & offerte | "verhuisbedrijf utrecht kosten", "verhuisofferte", "offerte verhuizing", "wat kost een verhuisbedrijf" | `/tarieven/` |
| Goedkoop | "goedkoop verhuizen utrecht", "goedkope verhuizers utrecht" | `/tarieven/` (show the €35.70/hr rate) |
| Regio | [verhuisbedrijf nieuwegein], [verhuisbedrijf zeist], [verhuisbedrijf houten], [verhuisbedrijf ijsselstein], [verhuisbedrijf maarssen], [verhuisbedrijf woerden], [verhuisbedrijf amersfoort] | matching city page (one ad group per city once volume allows) |

### Campaign 2 — Verhuislift
| Ad group | Keywords | Landing page |
|---|---|---|
| Verhuislift Utrecht | [verhuislift utrecht], "verhuislift huren utrecht", "verhuislift utrecht" | `/verhuislift-huren/` |
| Verhuislift generiek (geo) | "verhuislift huren", "verhuislift met bediening", "verhuislift kosten" | `/verhuislift-huren/` |
| Verhuislift spoed | "verhuislift spoed", "verhuislift vandaag", "verhuislift morgen" | `/verhuislift-huren/` + call asset |

### Campaign 3 — Spoed
| Ad group | Keywords | Landing page |
|---|---|---|
| Spoedverhuizing | [spoedverhuizing], "spoedverhuizing utrecht", "last minute verhuizing", "verhuizer morgen", "verhuizen vandaag" | `/spoedverhuizing/`. **Call-only ads or call assets as the primary CTA** |

### Campaign 4 — Ontruiming
| Ad group | Keywords | Landing page |
|---|---|---|
| Woningontruiming | [woningontruiming utrecht], "woningontruiming", "woning ontruimen utrecht", "ontruimingsbedrijf" | `/ontruiming/` |
| Na overlijden | "ontruiming na overlijden", "huis ontruimen na overlijden", "ontruiming huurwoning na overlijden", "kamer verzorgingshuis leeghalen" | `/ontruiming/`, later the new `/ontruiming-na-overlijden/` |

⚠ **Do not** bid on bare "ontruiming utrecht". Autocomplete shows it is dominated by news (evacuations at Utrecht Centraal and the university).

### Campaign 5 — Zakelijk
| Ad group | Keywords | Landing page |
|---|---|---|
| Bedrijfsverhuizing | "bedrijfsverhuizing utrecht", "kantoorverhuizing utrecht", "kantoor verhuizen", "zakelijk verhuizen" | `/zakelijk-verhuizen/` |
| Interne verhuizing | "interne verhuizing", "werkplekken verhuizen" | `/interne-verhuizing/` |

### Campaign 6 — Brand
[busje komt zo], "busje komt zo verhuizingen", "busjekomtzo", [busje komt zo utrecht] → `/`

---

## 3. Negative keywords (shared list "BCZ – Negatives – Global")
Built from the Autocomplete data (measured) and standard moving-industry exclusions:

```
vacature, vacatures, werken bij, baan, salaris, stage
huren bus, verhuisbus, bestelbus huren, aanhanger, aanhangwagen, bakwagen huren
boels, gamma, praxis, hornbach, karwei, sixt, europcar, hertz
zelf, diy, zelf verhuizen
verhuisdozen gratis, verhuisdozen ikea, marktplaats
doorgeven, gemeente, digid, adreswijziging, inschrijven, uitschrijven, vitens, postnl
centraal, cs, station, uithof, science park, universiteit, vandaag ontruiming, politie, demonstratie
reddit, forum, ervaringen consumentenbond
internationaal, spanje, duitsland, frankrijk, belgie   (unless you want international jobs)
cursus, opleiding, rijbewijs
```
Campaign-level negatives:
- Add **verhuislift** to Campaign 1, so lift searches go to Campaign 2.
- Add **spoed, vandaag, morgen** to Campaigns 1 and 2, so they flow to Campaign 3.
- Add **ontruiming** to all non-ontruiming campaigns.
- Check the search terms report **weekly** in month 1.

---

## 4. Ad copy (RSA). Lengths checked: headlines ≤30 characters, descriptions ≤90
**Competitor messaging (measured from their titles and meta descriptions)**: years of experience ("22+", "125+", "sinds 1905"), Erkende Verhuizer, review volume ("2,505 reviews"), "goedkoop/betaalbaar", package prices ("vanaf €229").

**Your differentiators**: family business from Utrecht · **no weekend surcharge** · fixed price after a visit · **own lift and team** · 4.9 Google / 9.6 Trustoo · transparent hourly rate · fast reply via WhatsApp.

### RSA — Verhuisbedrijf Utrecht
Headlines:
1. Verhuisbedrijf Utrecht *(pin position 1)*
2. Verhuizers in Utrecht
3. Geen weekendtoeslag
4. Vaste prijs na opname
5. 4,9 op Google, 160+ reviews
6. Eigen verhuislift en team
7. Familiebedrijf uit Utrecht
8. Snel een vrijblijvend voorstel
9. Verhuizer €35,70/uur incl. btw
10. App ons direct via WhatsApp
11. Ook spoedverhuizingen
12. Particulier en zakelijk
13. Bereken uw m³ gratis
14. 15+ jaar verhuiservaring

Descriptions:
1. Familiebedrijf uit Utrecht. Eén vaste prijs na opname, zonder nacalculatie achteraf.
2. Eigen wagens en verhuislift. Weekend zonder toeslag. Vraag vrijblijvend een offerte aan.
3. 4,9 op Google en 9,6 op Trustoo. Bel, app of mail: reactie meestal binnen een paar uur.
4. Verhuizer vanaf €35,70 per uur incl. btw. Inpakken, montage en opslag op aanvraag.

### RSA — Verhuislift
Headlines: Verhuislift Utrecht · Verhuislift met bediening · Lift en verhuizers in één · Ook vandaag of morgen · Bel 085 050 8282 · Geen weekendtoeslag · Eigen verhuislift en team
Descriptions: "Smalle trap of hoog appartement? Onze lift met bediening brengt alles veilig via het raam." · description 3 above.

### RSA — Spoed
Headlines: Spoedverhuizing Utrecht · Ook vandaag of morgen · Bel 085 050 8282 · App ons direct via WhatsApp · Eigen verhuislift en team
Description: "Moet het snel? Bel ons en hoor direct wat er vandaag of morgen nog mogelijk is."

### RSA — Ontruiming (calm, respectful tone; no urgency language)
Headlines: Woningontruiming Utrecht · Bezemschoon opgeleverd · Ook na overlijden · Vaste prijs vooraf · Familiebedrijf uit Utrecht
Description: "Woning leeghalen, afvoeren en bezemschoon opleveren. Zorgvuldig en met een vaste prijs."

### RSA — Zakelijk
Headlines: Bedrijfsverhuizing Utrecht · Verhuizen buiten kantoortijd · Particulier en zakelijk · Vaste prijs na opname
Description: "Kantoor of bedrijfsinventaris verhuizen met een werkbaar plan, ook buiten kantoortijd."

### Assets (all campaigns)
- **Call asset**: 085 050 8282 (with call reporting).
- **Location asset**: linked Google Business Profile.
- **Sitelinks**: Tarieven · m³ calculator · Verhuislift · Beoordelingen.
- **Callouts**: Geen weekendtoeslag · Vaste prijs · Eigen verhuislift · Familiebedrijf · Ook spoed.
- **Structured snippet** "Diensten": Particulier, Zakelijk, Verhuislift, Opslag, Ontruiming, Inpakken.
- **Price asset** (unit "per uur", from `tarieven.html`): Pakket Klein, 2 verhuizers, €71.40/uur · Pakket Compleet, 2 verhuizers + verhuiswagen, €71.40/uur · Pakket Groot, 3 verhuizers, €107.10/uur (all incl. btw, plus vehicle and travel costs). The €400.55 and €579.65 amounts on the page are **worked examples**, not fixed package prices, so don't show them as prices. ⚠ Check with the owner before publishing.

> ⚠ Claims policy: only use "4,9 op Google" and "15+ jaar" if they are true and checkable today. Use "Erkende Verhuizer" **only** if you are a member. "Vaste prijs" ads must land on a page that explains when the price is fixed (after a visit) and when it is hourly (the Klein/Compleet/Groot packages). Today the site doesn't (audit O9), and a mismatch hurts both conversion and trust.

---

## 5. SEO vs paid: who carries which keyword in months 1–3 (estimated)
| Keyword group | Months 1–3 | Why |
|---|---|---|
| verhuisbedrijf utrecht / verhuizers utrecht | **Paid + SEO** | Highest value, and VBU, Movenetjes and chains hold the organic top. Organic recovery after a redesign takes 4–12 weeks |
| verhuisbedrijf in de buurt / verhuisbedrijf | **Paid + Google Business Profile** | Proximity-driven. Organic pages barely matter |
| verhuislift huren / verhuislift utrecht | **Paid first** | National DIY brands (Boels, Gamma) compete. Fast leads, high margin |
| spoedverhuizing (+ utrecht) | **Paid** | Urgent intent; buyers call the first ad |
| woningontruiming utrecht / na overlijden | **Both** | Medium competition. A new content page can rank within months |
| bedrijfsverhuizing / kantoorverhuizing utrecht | **Paid (weekdays) + SEO** | Low volume, high order value |
| verhuisbedrijf [nieuwegein/houten/ijsselstein/maarssen/woerden] | **SEO** (low-budget paid) | Low competition; unique city pages can rank |
| wat kost een verhuisbedrijf (per uur / per dag / per m³) | **SEO only** | Informational. Ads clicks rarely convert; directories dominate |
| verhuizen utrecht parkeren / ontheffing / zero-emissie | **SEO only** | Low competition, builds topical authority |
| verhuischecklist, wasmachine verhuizen, m³ berekenen | **SEO only** | Informational. Use for remarketing lists later |
| movers / moving company utrecht (EN) | **Paid test** | Test demand with one EN ad group pointing to the Dutch page plus WhatsApp before you build `/en/` |

## 6. Measurement cadence
- **Weekly**: search terms → negatives; conversions per campaign; call duration.
- **Monthly**: CPA by campaign; compare organic rankings of "SEO only" groups and **reduce paid spend where organic reaches the top 3**.
- Budget rule (estimated): if a campaign's CPA stays above **€60 for 3 weeks**, pause the weakest ad group.
