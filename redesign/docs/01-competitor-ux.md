# 01 · Competitor UI/UX teardown (Utrecht)

Date: 2026-10-12 · Reviewer: Claude, for Busje komt zo
Competitor list: the 8 measured winners from `seo-audit/03-competitor-analysis.md` §2 (SERP comparison over 25 money keywords). Page reviewed per competitor = the page Google ranks for Utrecht: the Utrecht city page where one exists, otherwise the homepage.

## How this was tested
- **Real browser visits** (Chromium via Playwright) at **desktop 1440×900** and **mobile 390×844** (iPhone user agent, touch), on 2026-10-12. Screenshots of the first screen, one or two scrolls, and the opened mobile menu are in [`competitor-screens/`](competitor-screens/).
- **Measured on the page**: load time, Largest Contentful Paint (LCP, lab), layout shift (CLS), total transfer size, JavaScript size, number of scripts, H1s, phone links, WhatsApp, CTAs visible in the first screen, tap targets under 44 px, images without alt, fonts used.
- **Cookie banners**: where a "only necessary" button existed I clicked it; otherwise I hid the banner without consenting, to see the page underneath. The banner itself was still judged as part of the first impression.
- **Scores (1–5) are my judgement** based on the screenshots and measurements. "Speed feel" uses one lab run from one network, not Google field data (CrUX), so treat it as indicative.

**Access notes (not guessed)**
- **Snelle Jongens** returned **403 Forbidden** to a Windows Chrome desktop browser; it loaded with a Mac Safari user agent and on mobile. Their firewall may block some real visitors too, but I can't prove that from one test.
- **VBU** aborted on `www.verhuisbedrijfutrecht.nl` in the automated browser and loaded fine on `verhuisbedrijfutrecht.nl`. Everything below is from the non-www version.
- No competitor needed a login; nothing was skipped.

---

## 1. Score table (1 = poor, 5 = excellent)

| Criterion | SVS | VBU | Snelle Jongens | VSN | Verhuislift Huren Utrecht | Budget | Truckit | Draagkracht | **Busje (live)** | **Busje (current redesign file)** |
|---|---|---|---|---|---|---|---|---|---|---|
| First impression (5 s) | 3 | 2 | 2 | 4 | 4 | 3 | 3 | 2 | 2 | 4 |
| Visual style | 3 | 2 | 2 | 4 | 3 | 3 | 3 | 4 | 2 | 3 |
| Typography | 3 | 2 | 2 | 3 | 3 | 3 | 3 | 4 | 2 | 4 |
| Colour | 3 | 2 | 2 | 4 | 3 | 3 | 3 | 4 | 3 | 4 |
| Navigation clarity | 4 | 3 | 3 | 4 | 4 | 3 | 2 | 4 | 1 | 4 |
| Mobile usability | 3 | 3 | 3 | 3 | 5 | 4 | 3 | 3 | 3 | 4 |
| CTA visibility | 4 | 4 | 4 | 4 | 5 | 4 | 3 | 4 | 3 | 4 |
| Trust signals | 4 | 4 | 3 | 5 | 4 | 3 | 3 | 2 | 1 | 3 |
| Page speed feel | 2 | 4 | 3 | 4 | 5 | 3 | 2 | 5 | 3 | 4* |
| Accessibility | 2 | 2 | 2 | 3 | 3 | 3 | 2 | 3 | 3 | 4 |
| Ease of contact / booking | 4 | 4 | 4 | 3 | 5 | 4 | 1 | 4 | 3 | 5 |
| **Total (of 55)** | **35** | **32** | **30** | **41** | **44** | **36** | **28** | **39** | **26** | **43** |

\* The current redesign was tested from the local file, so its speed score is estimated, not measured over the network.

**Reading the table**: the best competitor is the lift specialist (44), because it does one thing well: big call and WhatsApp buttons, a sticky mobile bar, a price, and a 10 KB JavaScript page. VSN (41) has the most polished brand. Your current redesign file (43) already beats six of eight competitors; your live site (26) is last. The new design has to beat 44 and fix the specific gaps below.

## 2. Measured data

| | SVS | VBU | Snelle J. | VSN | Lift Utrecht | Budget | Truckit | Draagkracht | Busje live |
|---|---|---|---|---|---|---|---|---|---|
| Transfer size (desktop) | 2,296 KB | 874 KB | 1,621 KB | 216 KB | 695 KB | 1,059 KB | **3,710 KB** | 500 KB | 1,818 KB |
| JavaScript | 444 KB | 268 KB | 626 KB | 197 KB | **10 KB** | 608 KB | **1,176 KB** | **10 KB** | 284 KB |
| Script tags | 59 | 40 | 37 | 20 | 4 | 77 | 32 | 13 | 63 |
| LCP mobile (lab) | **3.5 s** | 1.2 s | 1.7 s | 0.9 s | 1.1 s | 0.6 s | 1.3 s | 0.9 s | 2.6 s |
| LCP desktop (lab) | 1.2 s | 0.9 s | n/a | **3.0 s** | 1.6 s | 1.4 s | 1.4 s | 1.2 s | 2.1 s |
| H1 count | 1 | 1 | **2** (one empty) | 1 | 1 | 1 | **0** | 1 | 1 |
| Phone link in first screen (mobile) | yes | yes | yes | **no** | yes | yes | **no phone link anywhere** | no (icon only) | **no phone link anywhere** |
| WhatsApp | no | no | yes | no | yes | no | no | yes | yes |
| Sticky mobile action bar | yes (call + offerte) | no | yes (WhatsApp, Bel, Offerte) | no | yes (Bel, WhatsApp) | floating call button | no | header icons | floating WhatsApp |
| Review score in first mobile screen | no | no | no | yes ("99% beveelt ons aan") | yes | yes (small "4,8") | no | no | no |
| Price in first screen | no | no | no | no | yes ("Vanaf €99 eerste uur", hard to read) | no | no | no | no |
| Tap targets < 44 px (mobile) | **101** | 81 | 56 | 44 | 26 | 68 | 16 | 28 | 9 |
| Images without alt | 15 | 1 | 8 | 0 | 0 | 0 | 4 | 0 | 5 |
| Body / paragraph size (mobile) | 15 px | 16 px | 15 px | **13 px** | 18 px | 16 px | 17 px | 15 px | 14 px |
| Page length (mobile) | 31,753 px | 21,810 px | 11,179 px | 9,514 px | 17,053 px | 11,578 px | 6,906 px | 16,402 px | 13,940 px |
| Fonts | Ubuntu | Montserrat | Open Sans, PT Sans | Archivo, Inter | Poppins, Open Sans | Lato | Poppins, Montserrat | Bricolage Grotesque, Hanken Grotesk | 5 families |
| Blocking cookie modal | yes | yes (all toggles pre-ticked) | yes | no | banner, has "Alleen noodzakelijk" | yes | no | banner, has "Alleen noodzakelijk" | top bar, has "Alles weigeren" |

---

## 3. Competitor by competitor

### Student Verhuis Service (SVS) · `/verhuisbedrijf-utrecht/` · 35/55
- **5 seconds**: an orange band with "Verhuisbedrijf Utrecht", a Google 4.8 badge (9,846 reviews) on the desktop photo, and a green "Bereken verhuiskosten" button. On mobile the hero is just the orange band and H1: no photo, no rating.
- **Good**: clear four-item main nav; a cost calculator in the header; a sticky "call + offerte" bar on mobile; enormous review volume.
- **Top 3 UX weaknesses**
  1. **Heavy and slow on mobile**: 2.3 MB, 59 scripts, mobile LCP 3.5 s.
  2. **A 31,000 px wall of text on mobile** (5,262 words) with 101 tap targets under 44 px and 15 images without alt text.
  3. **A national "studentenprijs" chain feel**: a 0900 number (a paid line for the caller), a generic Domstad photo, and nothing that proves local Utrecht knowledge.

### Verhuisbedrijf Utrecht (VBU) · homepage · 32/55
- **5 seconds**: a dated two-row navigation (7 items in capitals plus 9 more below), a busy truck photo with a text-shadowed headline on top, then a green offerte button and a big orange phone number.
- **Good**: phone number and opening hours prominent in the header; many simple tools (m3, dozen, prijscalculator); a strong review block (Klanten Vertellen 9,3 from 5,224 reviews; Google 4.9 / 2,518 in the SEO audit).
- **Top 3 UX weaknesses**
  1. **Cluttered navigation**: 16 links across two bars, in capitals, before any content.
  2. **Hard-to-read hero**: white text with a shadow on a busy photo, followed by paragraphs set entirely in bold.
  3. **A cookie modal that covers the page with every toggle pre-ticked**, and no sticky call bar on mobile once you scroll.

### Verhuisbedrijf Snelle Jongens · `/verhuisbedrijf-utrecht/` · 30/55
- **5 seconds**: a classic template page with a small stock night photo of the Oudegracht, caps buttons ending in a question mark ("VRIJBLIJVENDE OFFERTE AANVRAGEN?"), and a sidebar of ticks.
- **Good**: a sticky mobile bar with WhatsApp, Bel and Offerte; Google 4.7 (717) badge on desktop.
- **Top 3 UX weaknesses**
  1. **Template and stock feel**: stock Utrecht photo, the same page structure for every city (their network of city pages).
  2. **Two H1s, one of them empty**, and a 30×30 px menu button on mobile.
  3. **Blocked desktop visit (403)** in my test, plus 626 KB of JavaScript from a heavy theme.

### Mondial VSN Verhuizingen · homepage · 41/55
- **5 seconds**: the most modern competitor. A royal-blue rounded hero card, a confident headline ("De vriendelijke verhuizer uit de regio Utrecht"), real staff photos, an Erkende Verhuizers badge with 9,5.
- **Good**: strong, specific trust (Erkend, gediplomeerd, garantie); light page (216 KB); no cookie wall.
- **Top 3 UX weaknesses**
  1. **13 px body text** on mobile and desktop: too small for comfortable reading.
  2. **No phone link and no sticky action bar on mobile**; the only first-screen action is "Offerte aanvragen".
  3. **Inconsistent proof**: "Beoordeeld met een 9,6" in the list next to a 9,5 badge. Slow desktop LCP (3.0 s).

### Verhuislift Huren Utrecht (VHL) · homepage · 44/55 (best)
- **5 seconds**: a full-width photo of a lift at work, "Verhuislift Huren in Utrecht", and two big buttons: "Bel direct" (yellow) and "WhatsApp ons" (teal). A quote with stars sits under them.
- **Good**: the strongest conversion setup in the set: big buttons, a sticky header, a sticky mobile Bel/WhatsApp bar, a floating WhatsApp button, a price above the fold, a stats band (620+ Google reviews), 10 KB of JavaScript.
- **Top 3 UX weaknesses**
  1. **The price line fails contrast**: "Vanaf €99 eerste uur" is dark text over the photo and nearly invisible on desktop.
  2. **Weak brand**: the logo is a plain circle with a flag; the site looks like a generic template (Poppins, icon-labelled nav).
  3. **Single service**: nothing for a full move, so a visitor who needs movers has to go elsewhere.

### Budget Verhuisservice · homepage · 36/55
- **5 seconds**: a postcode calculator card over a real crew photo, with a "100% laagste prijs garantie" seal.
- **Good**: calculator-first hero (van/naar postcode → Bereken kosten); real photos; phone in the top bar; floating call button on mobile.
- **Top 3 UX weaknesses**
  1. **The form uses placeholders as labels** ("Postcode", "Huisnr", "Toev") and the "Bereken kosten" button looks disabled (grey) until it is filled.
  2. **Two navigation rows plus a webshop cart**, which pulls attention away from booking.
  3. **77 scripts, 608 KB of JavaScript and 11 font files**.

### Truckit · homepage · 28/55
- **5 seconds**: a clear fork between two white cards on orange: "Verhuurservice" or "Verhuisservice", with a stock cut-out of two movers carrying a sofa.
- **Good**: the fork is simple; review proof is strong when you reach it (Google 4.9 / 1,281; Huren.nl 9.6).
- **Top 3 UX weaknesses**
  1. **No phone link anywhere on the page** and only two nav links; the header CTA is just "Contact".
  2. **No H1 on the homepage**, 4 images without alt, and a reCAPTCHA badge over content.
  3. **The heaviest page in the set**: 3.7 MB with 1.2 MB of JavaScript.

### Verhuisbedrijf Draagkracht · homepage · 39/55
- **5 seconds**: before the headline, a large notice says (paraphrased) that they are **not** an Erkende Verhuizer and wrongly suggested they were. On mobile this pushes the H1 below the first screen.
- **Good**: a strong modern type system (Bricolage Grotesque), a real owner photo, a well-labelled "Je offerte in 60 seconden" form, WhatsApp, a 10 KB JavaScript page.
- **Top 3 UX weaknesses**
  1. **The notice is the first impression**, and it undermines trust before anything else is read.
  2. **Icon-only buttons on mobile** (WhatsApp, an arrow, a menu) whose meaning isn't clear.
  3. **Headline on a dark, busy photo**, and the H1 sits below the first mobile screen.

### Busje komt zo · live site (baseline) · 26/55
- **5 seconds**: a cookie bar, a dark stairwell photo and "Verhuisbedrijf in Utrecht en omgeving". In my test **no logo and no menu were visible in the first screen**, and the page has **no phone link** at all. The 4.9 Google rating is not shown above the fold.
- This confirms the SEO audit: the Google Business Profile (4.9 / 162) carries the business while the site undersells it.

### Busje komt zo · current redesign file (`index.html`) · 43/55
- Already strong: petrol hero, Manrope, real truck photo, call + WhatsApp + offerte, a sticky mobile bar, 9 small tap targets.
- **What still holds it back**
  1. **It looks like a well-made template**: capitals eyebrow above the H1, rounded photo card, middle-dot meta line. Nothing in it is unmistakably Busje komt zo.
  2. **Three equal-weight buttons** (vaste prijs, bel, WhatsApp) compete; none clearly leads.
  3. **The 4.9 rating and the €35,70 price are small grey text or absent** in the first screen, although they are your two strongest facts.

---

## 4. What everyone does (patterns)
- **Colour**: 6 of 8 use orange or yellow as the action colour, usually next to green or blue. Orange alone will not make you stand out; SVS and Truckit are orange-dominant brands.
- **Fonts**: Poppins, Montserrat, Open Sans, Ubuntu, Lato, Archivo, Bricolage Grotesque, Hanken Grotesk are all taken.
- **Hero**: photo + headline + one quote button. Only VHL leads with "call/app now", only Budget and Draagkracht with a form.
- **Proof**: everyone has reviews, but 5 of 8 hide the score below the first mobile screen.

Competitor messaging angles (price in title, review score in title, speed, Erkend) are already listed in `seo-audit/03-competitor-analysis.md` §7 and are not repeated here.
