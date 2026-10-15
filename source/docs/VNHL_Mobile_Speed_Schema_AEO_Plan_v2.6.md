# VNHL Mobile Speed, Schema and AI-Readiness Plan v2.6
Updated 7 Oct 2026 (supersedes v2.5). Scope: index.html, about.html, senior-care.html, medical-weight-mgt.html, faq-senior-care.html.
Working rule: plan, you approve, then one HTML file per session with verification after each patch.

## 0. Decisions locked in (from Raj, 4 Oct 2026)
1. **Sanitized wording for this release.** All five files and their JSON-LD avoid "Medicare", "GLP-1" and drug names (Ads Phase 1, launch 12 Oct 2026).
2. **FAQ architecture.** faq-senior-care.html is the only page with detailed FAQs. senior-care.html and medical-weight-mgt.html carry links to it, so their FAQPage schema nodes are removed.
3. **Analytics.** G-XQQ10WYZEG is the single multi-domain collection ID. It is already in the head of all five files, so the second block in index.html (placeholder G-XXXXXXXXXX and AW-XXXXXXXXX) is removed.
4. **Wording edits (Raj, 4 Oct 2026, made manually in the files):** superseded by the locked terminology in section 0b item 4. The files I hold are the originals from 4 Oct 05:02, so the revised files must be re-uploaded before editing starts.
5. **New phase after this overhaul:** build an original-wording set (full "Medicare" and "GLP-1" language) for every non-Google-Ads use. See Phase B.

## 0b. Updates from Raj (4 Oct 2026, later)
1. **Google Ads is now uncertain.** Raj may not sign up because of the certification effort. Result: the original-wording set (full "Medicare" and "GLP-1") is a **first-class deliverable, not a later phase**, and the 12 Oct date is no longer a hard deadline for the sanitized set.
2. **Two outputs per file, same session.** Each per-file session delivers both versions from one source: `<name>.html` (original wording, for every use except Google Ads) and `<name>_ads-safe.html` (sanitized, if Ads goes ahead). Shared fixes (images, landmarks, contrast, broken code, FAQ links, schema repair) are done once.
3. **Contract facts (Dr. K, confirmed by Raj 4 Oct).** Original Medicare: accepted with or without a supplemental plan. Medicare Advantage: only the Sharp-SCMG plan (an HMO), called "Sharp-SCMG's senior HMO plan" in sanitized text and named as the Sharp-SCMG Medicare Advantage HMO plan in original-wording text.
4. **Terminology locked (Raj, 4 Oct).** Sanitized set: "senior medical insurance" (generic), "original senior medical insurance" (Original Medicare), "Sharp-SCMG's senior HMO plan" (Medicare Advantage). "Senior Care" stays the service name only. The "(not an HMO plan)" clarifier is dropped because "original" is clear on its own. Original-wording set uses Medicare, Original Medicare and Medicare Advantage.
5. **Standard closing line:** every insurance-related answer (visible FAQ text and the matching schema answer) ends with one fixed sentence: "Call us to confirm your specific insurance plan details." (Raj's intent, lightly polished; change it once here and it applies everywhere.)
6. **Source files needed.** The original-wording pages from September (medicare-glp1.html, medicare-standalone.html, weight-loss.html, faq.html, per the project notes) are not in this session, and the five uploaded files are sanitized in the body text. Re-upload Raj's edited faq-senior-care.html plus any other edited files and, if available, the pre-sanitize originals. Otherwise the original-wording text is rebuilt from the archived JSON-LD (30 and 12 FAQ answers) and the sanitized bodies.
7. **Seasonal note:** the Medicare annual enrollment period (15 Oct to 7 Dec) is when seniors compare plans, so original-wording pages that state clearly which plan Dr. K accepts are most useful if live by mid-October. Keep the wording factual; Medicare has marketing rules for how plans and providers describe plans, so Dr. K or counsel should review.

8. **Base plus overlay (Raj, 4 Oct).** The September files (medicare-glp1, medicare-standalone, weight-loss, faq, appointment, about, index) are **reference only**. Nuggets are merged into the current sanitized pages, never the other way. The Medicare and GLP-1 version must not look like a different site: same design, same sections, same service. It is the same pages plus overlay blocks.
9. **Titles and headings (both versions):** "Senior Wellness" and "Medical Weight Management". Medicare and GLP-1 appear only where the context needs them: flash news to new and current Medicare patients, insurance answers, medication details, and program FAQs. Everywhere else the wording stays generic. "Senior Care" is retired as the service name.
10. **Overlay blocks identified in the September files:** flash-news banner; Medicare Advantage and Original Medicare acceptance answers; Annual Wellness Visit coverage; GLP-1 basics and safety; the nine Bridge Program questions; "Medicare plus GLP-1 in one plan"; enrollment-period note. The September FAQ has 50 questions, 18 of them Medicare or GLP-1.
11. **Fact checks before publishing (done 4 Oct from news and CMS-based sources):** the Medicare GLP-1 Bridge is a temporary CMS demonstration, 1 Jul 2026 to 31 Dec 2027, $50 per monthly fill, for Part D enrollees, prior authorization required, run outside the Part D benefit (the $50 does not count toward the Part D deductible or out-of-pocket limit). "Medicare Now Covers GLP-1" overstates it: use "Medicare GLP-1 Bridge Program" wording. The September page gives the enrollment period as "Oct 15 to Dec 5" in one place; the correct end date is Dec 7. Raj states that all Medicare members, including Medicare Advantage, may be eligible for the Bridge Program; public text stays general (see item 14).
12. **File housekeeping:** about.html and index.html in this session were overwritten by the September versions (same file names). The earlier sanitized versions of those two must be re-uploaded under different names. senior-care.html, medical-weight-mgt.html and faq-senior-care.html are still the 4 Oct originals, without Raj's manual edits.

13. **FAQ standard (Raj, 4 Oct: condense, no near-duplicates, short, readable by people and AI).**
   - Today faq-senior-care.html has 48 questions, 2,421 words of answers (median 47 words, longest 124), and 9 pairs of answers that are at least 50% the same text. The four insurance answers (new patients, which plans, Original Medicare, Sharp acceptance) are largely the same paragraph.
   - Rules: one topic per question, phrased the way patients ask; the first sentence answers directly (about 25 words or fewer); up to 3 short bullets when a list helps; 60 words total as the target and 80 as the cap; each fact lives in one answer and others link to it instead of repeating it; the schema answer is generated from the visible answer text so the two cannot drift; insurance answers end with the standard closing line.
   - Proposed size: about 28 to 30 questions in 7 sections (About Dr. K 4, Appointments 4, Senior Wellness and Insurance 6, Services 4, Location and Hours 3, Medical Weight Management 5, Care Philosophy 3). Medical Weight Management is the first section to condense. These counts are my proposal for Raj to adjust.
   - Original-wording set: the nine Bridge Program questions in the September FAQ become two.
14. **Public wording for Medicare GLP-1 Bridge Program (Raj, 4 Oct).** No dollar amounts and no eligibility rules on the banner or in FAQs; eligibility is individual and is discussed at the clinic. Proposed banner (original-wording set): "Flash News: Medicare members, including Medicare Advantage, may be eligible for the Medicare GLP-1 Bridge Program. Call our office to check your eligibility." The ads-safe set carries a generic line such as "Medical weight management options for seniors. Call to learn more." I recommend "may be eligible" instead of "are eligible", because the program has eligibility criteria and prior authorization, which also matches Raj's point that eligibility depends on several factors.
15. **Files:** about-sanitized.html and index-sanitized.html received (they match the 4 Oct baseline). Raj will review the old faq-senior-care.html himself and send revision feedback; no action needed from me on it.
16. **Two FAQ types and one master source (Raj, 4 Oct).** (a) Ads-safe FAQ: sanitized, for Google Ads landing pages only. (b) Normal FAQ: used everywhere else, covers Medicare and private insurance. All FAQs live on one page per type, for easy maintenance of both the visible text and the schema. Build from one master list where each question is tagged with audience (all, medicare, private) and variant (normal, ads-safe); the visible HTML and the FAQPage schema are generated from the same list.
17. **Section rule (Raj's proposal, agreed with one addition).** Questions common to Medicare and non-Medicare patients go in the logical section they belong to; Medicare-only questions go in Medicare sections (Medicare and Insurance, Medicare and Weight Management). Addition: jump chips at the top of the normal FAQ ("All", "Medicare", "Private insurance") so each audience can filter; and one general "What insurance do you accept?" answer that summarizes and points to the detailed Medicare answers instead of repeating them. Both versions use the same section order; the ads-safe version is the normal version minus Medicare and GLP-1 items, with generic wording where an equivalent is needed. Section order and the position of Care Philosophy are open (see Raj's question).
18. **Contradictions found in the September FAQ (all resolved by Raj, see item 19):** (1) The insurance list in the new-patient answer (Aetna, Blue Shield, United Healthcare, Cigna, Humana, GEHA, Health Net, Anthem Blue Cross, Tricare) sits next to "Medicare" and reads as if those carriers' Medicare Advantage plans are accepted, but the contract fact is Sharp-SCMG's plan only. (2) The Medicare answer says "Original Medicare, Medicare supplements, PPOs, and specific Sharp-HMO Medicare Advantage (SCMG) plans"; "PPOs" conflicts with the Sharp-SCMG-only fact unless it means private (non-Medicare) PPOs. (3) Bridge qualification: one answer says BMI of 30 or more qualifies; another says obesity alone may not qualify. (4) Bridge and Medicare Advantage: one answer says MA is not involved and the patient needs a standalone Part D plan; another implies MA patients can qualify; Raj states all Medicare members including Advantage may be eligible. (5) "$0 co-pay" and "no out-of-pocket cost" for the Annual Wellness Visit are stated as absolute; for Medicare Advantage the cost depends on the plan. (6) The "#1 AI-ranked" claim has three scopes in three answers: Imperial Beach and South Bay San Diego; Imperial Beach; Medical Weight Management Program. (7) Dollar amounts, drug brand names, and CMS program details appear in several Bridge answers, which conflicts with the "keep it general" rule and goes stale when CMS changes the program. (8) Medicare enrollment period end date: Dec 5 in one place, Dec 7 elsewhere (Dec 7 is correct).

19. **Resolutions and standard texts (Raj, 4 Oct).** Section order accepted: Getting started, About Dr. K and VNHL, Care Philosophy (2 to 3 questions), Services, Medicare sections (normal version only), Location and hours. Filter chips and one master list accepted.
   - **Master insurance answer (normal):** "For most private insurance, we accept Aetna, Humana, United Healthcare, Cigna, and many more. For Medicare, we accept Original Medicare with or without a supplement. For Medicare Advantage, we accept only Sharp-SCMG Advantage plans. Call VNHL at (619) 429-7700 to clarify your specific plan."
   - **Ads-safe version of the same answer:** same sentences with "senior medical insurance" for Medicare, "original senior medical insurance" for Original Medicare, and "Sharp-SCMG's senior HMO plan" for Medicare Advantage.
   - **Closing line (single standard):** "Call VNHL at (619) 429-7700 to clarify your specific plan." Used at the end of every insurance answer, visible text and schema.
   - **The word "PPO" is removed** from all Medicare answers, because PPOs can be private or Medicare plans.
   - **Bridge Program standard answer (no BMI, cost, drug, or paperwork details):** "Qualification and authorization depend on several factors. Call us at (619) 429-7700 to schedule a visit. Dr. K will evaluate your specific medical conditions and coordinate the whole process with you to build a Healthy Living Plan Together." Applies to Medicare and Medicare Advantage alike. Bridge questions that are too specific are deleted: cost, which medications, paperwork and prior authorization, obesity-only options, Bridge versus Part D, Medicare Advantage details, lifestyle rules. Three remain in the normal FAQ: what the Bridge Program is, whether I qualify, how Dr. K connects Medicare care and weight management into one plan (shortened). The ads-safe FAQ carries no Bridge questions and uses a generic weight management version of the same answer.
   - **Annual Wellness Visit cost:** "typically $0", followed by the closing line. No "no out-of-pocket cost" wording.
   - **Survey claim, one simple version:** "Placed #1 by most major AI chatbots in a 2026 VNHL survey." ("Most" is the accurate word: four of five engines ranked Dr. K first. Update to the new survey result when it is done.) Used the same way everywhere; it replaces the three scoped versions and the schema `award` entry.
   - **Dates:** Dec 7 is the enrollment period end date everywhere.

## 1. What I can and cannot do
| I can do | I cannot do |
|---|---|
| Surgical edits to uploaded HTML, schema repair, wording-map builds | Run PageSpeed, Lighthouse or the Rich Results Test |
| Compress images, strip metadata, remove watermarks | Deploy to Netlify or edit the live site |
| Validate JSON-LD, duplicate keys, dangling @id, URL hygiene | Approve medical or program claims (Dr. K) |
| Draft llms.txt and a WebMCP script | Verify current Medicare program rules without a fresh source check |

## 2. Phase A: sanitized overhaul (this release)

### Priority ranking
**P0**
1. Wire the compressed images (done: files delivered, wiring pending).
2. Sanitize wording in JSON-LD, alt text, slugs and identifiers using the wording map in section 4, **not find-and-replace**.
3. Remove FAQPage nodes from senior-care and medical-weight-mgt; add FAQ link blocks.
4. Fix broken code (section 3).

**P1**: `<main>` landmark; contrast (`#0d9488` 3.74:1 on white to `#0f766e` 5.47:1); img width/height, fetchpriority on first banner, lazy-load below the fold; meta descriptions; og:image; aria-labels; Physician priceRange.

**P2**: llms.txt (sanitized version); sameAs de-duplication; dangling @id repair.

**P3**: WebMCP (experimental, zero Lighthouse weight; use `navigator.modelContext`, verify against the current spec, read-only tools only).

### Correction to my earlier review
I called faq-senior-care.html the cleanest file. It has no banned words, but it was sanitized by blind find-and-replace and now contains wrong or confusing wording, for example:
- "Does Senior Care cover the Annual Wellness Visit at VN Healthy Living?"
- "Which Senior Care Advantage Plan plans can I use…"
- "Can I see Dr. Kuppurajan if I have Original Senior Care…"
- "Senior Care Weight Management Program"
- the breadcrumb URL "weight management therapy-therapy"

A page that says "Senior Care covers the visit" can mislead patients. As the only detailed FAQ page, it needs a careful rewrite of these items with the wording map, and Dr. K approval, before launch.

## 3. Broken or placeholder items to fix
| # | File | Issue | Fix |
|---|---|---|---|
| a | index.html (~line 363) | Duplicate gtag block with placeholders | Remove (real ID already at top) |
| b | senior-care.html (~1578) | Stray `</a>` after the call button | Remove |
| c | faq-senior-care.html (~1017) | Breadcrumb URL with spaces and "therapy-therapy" | Correct slug |
| d | faq-senior-care.html | Schema image `Senior Care_AWV.jpg` has a space | Hyphenated filename |
| e | all HTML | `VNHL-DrK-Senior Care-PCP.png` (space) vs uploaded `Senior_Care` | Use `VNHL-DrK-Senior-Care-PCP.webp/.png` |
| f | medical-weight-mgt, senior-care | `#physician` and `#brand-drk` referenced, not defined | Add compact nodes so each page is self-contained |
| g | about, senior-care | Duplicate sameAs value | De-duplicate |
| h | 4 files | No Physician priceRange | Add `"$$"` |
| i | 4 files | No meta description | Write per page; Dr. K approval |
| j | all | No og:image | Use 672w logo or banner |
| k | Ads conversion | No real AW ID yet | Add `gtag('config','AW-…')` to the existing block when you have it |
| l | schema slugs | `@id` and URL fragments containing "medicare" (for example `#medicare-checklist-2026`, `/medicare-wellness-checklist/`) | Neutral slugs in the sanitized set (default); original slugs return in Phase B |
| m | "#1 AI-ranked" claim, 6 places: schema `award` entry "#1 Ranked Internal Medicine Physician (AI Search Engines)" in about.html:482, index.html:460, senior-care.html:766, faq-senior-care.html:116; FAQ answer text in faq-senior-care.html:859 (schema) and :1571 (visible), where it adds "for Medical Weight Management Program" | Text includes "#1 AI-ranked" physician claim | Raj ran a survey of all major AI engines a couple of months ago: Dr. K ranked #1 on 4 of 5. Keep, but reword to the survey result (engines, month, query) and keep the survey file as substantiation; drop the unqualified superlative. Raj thinks the fifth engine put him #2 (confirm from records), so the wording can say first on 4 of 5 and second on the fifth. Need survey date, prompt and per-engine results |

## 4. Wording map (draft for your approval)
One governed list drives both variants, so we never again get "Senior Care Advantage Plan plans".

| Original wording (Phase B) | Sanitized wording (Phase A) | Note |
|---|---|---|
| Medicare Annual Wellness Visit | Annual Wellness Visit | Drop the prefix; do not substitute "Senior Care" |
| Medicare patients | senior patients | |
| Medicare Advantage plans | Sharp-SCMG's senior HMO plan (Dr. K accepts no other Medicare Advantage plan) | Raj, 4 Oct: contract fact |
| Original Medicare | original senior medical insurance | Raj, 4 Oct: no clarifier needed; Dr. K accepts it with or without a supplemental plan |
| "Does Medicare cover X?" | "Does senior medical insurance cover X?" | Use one term everywhere; "Senior Care" stays the service name only |
| "Dr. K accepts [plan]" | "Dr. K accepts original senior medical insurance, with or without a supplemental plan. For senior HMO plans, he accepts Sharp-SCMG's senior HMO plan." | Original-wording version names Original Medicare, Medicare Supplement and the Sharp-SCMG Medicare Advantage HMO plan |
| Medicare Enrollment (PECOS) identifier | Senior Care Enrollment (PECOS) | Already used in faq file |
| GLP-1 medications / therapy | weight management medications / weight management therapy | Spoken form stays "weight management" in TTS |
| Drug brand and generic names | prescription weight management medications | Names omitted entirely |
| Medicare GLP-1 Bridge Program | Senior Weight Management Program (working title) | Name needs approval |
Banned-word grep list for Phase A: Medicare, GLP-1, GLP1, Ozempic, Wegovy, Mounjaro, Zepbound, semaglutide, tirzepatide, PECOS-label "Medicare".

## 5. Image deliverables (delivered in /images)
| File | Size | Use |
|---|---|---|
| VNHL-Logo-3D-header-252w.webp (+ .png) | 5.4 KB (48.5 KB) | Header logo, all 5 pages; `width="252" height="144"`, WebP with PNG fallback (Raj confirmed 5 Oct: use the WebP logo) |
| 00_VN_Healthy_Living_Logo_3D.png (672x384, watermark removed) | 298 KB (was 1.4 MB) | Schema logo and og:image |
| VNHL-Logo-3D-672w.webp | 21.9 KB | Social alternative |
| VNHL-Logo-3D-clean-master-1344w.png | 1.1 MB | Archive master only, not for the website |
| VNHL-DrK-Senior-Care-PCP.webp (+ .png) | 45.9 KB (84.4 KB) | index and senior-care banner; `width="691" height="486"` |
| Dr-Vijay-Kuppurajan-3-HR-BA.jpeg (1200px, GPS removed) | 216 KB (was 3.3 MB) | Schema image |
| Dr-Vijay-Kuppurajan-3-HR-BA-480w.webp | 12.5 KB | On-page headshot if added |

Still needed (upload so I can compress, check for watermarks and confirm text stays readable):
- Received and converted to WebP 4 Oct: logo, Sharp award plaque, Compassionate Care award, the SHARP-SCMG affiliation composite (schema image), GLP1_S3E1_Title, GLP1_S3E1_Title_SFV, Medicare_AWV.
- Still pending, sanitized set: senior care_AWV.png; weight-management_S3E1_Title.png; weight-management_Benefits_SFV.png; VNHL_DrK_SCMG-Award-Excellence_Q2-2026_TopCoronadoPCP_Composite-4Panel.png; 3-1-Compassion.png.
- Still pending, original-wording set: VNHL-DrK-Medicare-PCP.png; GLP1_Benefits_SFV.png.
- Referenced only in JSON-LD: VNHL_DrK_SCMG-Award-Excellence_Q2-2026_TopCoronadoPCP_Certificate.png; VNHL_GBP_MC_CLIST.jpg; Dr-Vijay-Kuppurajan-Sharp-SCMG-2026-Award-of-Excellence-Certificate.png.
- Total: 11 images on pages plus 3 schema-only images. Files with spaces in the name (senior care_AWV.png) get hyphenated names.

## 6. Per-file queue (one file per session)
Order: index, senior-care, medical-weight-mgt, about, faq-senior-care.

### index.html
- [x] Logo and banner `<picture>` wiring with dimensions; fetchpriority high on banner
- [x] Remove duplicate gtag block (a)
- [x] Sanitize alt text ("Medicare Annual Wellness Visit - $0 Co-Pay") using the wording map
- [x] `<main>`, contrast, meta description, og:image, aria-labels, Physician priceRange
- Delivered 4 Oct: index.html (normal wording, canonical on vnhealthyliving.com) and index_ads-safe.html (sanitized, canonical on drk.care). Pending for index: swap in VNHL-DrK-Medicare-PCP.png for the normal banner once uploaded; confirm GA/Ads conversion ID.

### senior-care.html
- [ ] Logo and banner wiring; lazy-load award images
- [ ] Remove stray `</a>` (b)
- [ ] Remove FAQPage node (30 questions); add a "Questions? Read our FAQ" link block pointing to /faq
- [ ] Sanitize all schema text, @id slugs, identifier labels (68 Medicare, 40 GLP-1 mentions today)
- [ ] Define `#brand-drk`; de-dup sameAs; Physician priceRange
- [ ] `<main>`, contrast, meta description, og:image, aria-labels

### medical-weight-mgt.html
- [ ] Logo wiring; lazy-load images
- [ ] Remove FAQPage node (12 questions); add FAQ link block
- [ ] Sanitize all schema text (23 Medicare, 15 GLP-1 mentions today)
- [ ] Define `#physician` and `#brand-drk`
- [ ] `<main>`, contrast, meta description, og:image, aria-labels

### about.html
- [ ] Logo wiring; lazy-load images
- [ ] Sanitize schema (23 Medicare, 4 GLP-1 mentions today); de-dup sameAs; Physician priceRange
- [ ] `<main>`, contrast, meta description, og:image, aria-labels
- [ ] Optional: merge the pending September mobile QA fixes in the same pass

### faq-senior-care.html
- [ ] Logo wiring
- [ ] Rewrite damaged Q&A wording with the wording map; keep schema and visible text matched 1 to 1
- [ ] Fix breadcrumb URL (c) and image URL (d)
- [ ] Contrast (22 occurrences), Physician priceRange, og:image, aria-labels
- [ ] Dr. K review of every rewritten answer and the "#1 AI-ranked" claim

### Site-level (after the five files)
- [ ] llms.txt, sanitized (DrK.Care)
- [ ] robots.txt and sitemap check
- [ ] You re-run PageSpeed and Rich Results; paste results back for the next round
- [ ] WebMCP draft (P3)

## 7. Phase B: original-wording set (full "Medicare" and "GLP-1" language)
**Update (see 0b):** delivered together with Phase A, one session per file, two outputs per session. The text below still describes the method.
**Purpose:** pages and schema for every non-Google-Ads use (hub VNHealthyLiving.com, VNHL.Clinic staging, organic SEO and AEO, GBP, social) with no wording restrictions.

**Starting assets (already safe):** the full-wording JSON-LD from all five files is archived in /archive_original_wording (saved 4 Oct 2026, before any sanitizing). It includes the 30-question Medicare and GLP-1 FAQ set from senior-care.html, the 12-question set from medical-weight-mgt.html, and the Bridge Program answers. The master schema 01d already keeps full wording.

**Method (one source, two outputs):**
1. Treat the Phase A files plus the archive as the source of truth and build both variants from the same templates and the wording map, so a fix lands in both.
2. Hub variant differences: full wording; canonical, og:url and url on vnhealthyliving.com (DrK.Care campaign pages keep drk.care while @id stays on vnhealthyliving.com); original @id slugs and URLs restored; detailed Medicare and GLP-1 FAQ restored on the hub's FAQ page.
3. Fact-check every program statement before republishing (Bridge Program eligibility, cost, covered drugs, Medicare Advantage rules). These change; I will research current sources before writing them in.
4. Keep the Phase A page and the Phase B page cross-referenced so Ads traffic never lands on the original-wording set by mistake (a guard in the Ads URL list, not in the pages).

**Open items for Phase B:** hub file names and slugs (your Sept notes call them medicare-glp1.html, medicare-standalone.html, weight-loss.html, faq.html; confirm the mapping to senior-care, medical-weight-mgt and faq-senior-care); target date; and the three-document sync (Requirements Document, Internal Strategy, Website Upgrade Plan) must record the two-variant approach.

**Deliverables:** wording map v1.0 (approved); build script or a patch list per file; five original-wording HTML files with JSON-LD; hub FAQ page; validation report (parse, duplicate keys, dangling @id, banned-word check inverted so the full wording must be present).

## 8. Verification after each file
JSON-LD parse and duplicate-key check; dangling @id check; banned-word grep on Phase A files; Phase B inverse check; img width/height count; `<main>` count; HTML tag balance; before and after byte size.


## Status 5 Oct 2026 (evening)
- Delivered: site_normal (Medicare and GLP-1 wording, priority 1) and site_ads-safe, each with index, about, senior-care, medical-weight-mgt, faq-senior-care, llms.txt and vnhl-webmcp.js. Zip files provided.
- Applied everywhere: WebP images from the 01h image list (columns A and B), header text "VN Healthy Living Medical Group" (thin Medical Group, smaller font), main landmark and skip link, contrast fix, map iframe loads only when scrolled near (PageSpeed advice), single-source FAQ (32 questions normal, 27 ads-safe) with matching schema, shared Physician, Brand and Clinic schema nodes, WebMCP read-only tools.
- Pending from Raj: 3-1-Compassion.png (not in the list); senior care_AWV.png and weight-management_S3E1_Title.png converted to WebP (needed by the ads-safe pages); a generic non-Medicare VNHL_GBP_MC_CLIST for GBP and FAQ use; confirmation of the fax number if it should appear in llms.txt; hub URL slugs; Dr. K review of ADA parking answers and awards year; survey date and re-run.
- Pending from Claude: other mobile QA bugs from the September list not yet re-checked in the new files; GA and Ads tag deferral; appointment page decision; re-run PageSpeed and Rich Results on Raj's side.

## Update 7 Oct 2026
- Scope decision (Raj): the appointment page and the request form are out of scope. Booking stays phone-only everywhere (pages, FAQ, llms.txt, WebMCP).
- Done in this round: Google tag now loads after the page has finished loading (1.2 second delay); Spanish tagline kept to one line on phones; phone, stethoscope and scales emoji given a light halo for contrast; Sharp-SCMG Top PCP Award added to the "Who is Dr. K" and "Sharp Health Plan and SCMG" FAQ answers; the About page 4 C's grid was already stacked on narrow phones in the source file (earlier note was wrong).
- Still pending from Raj: WebP for 3-1-Compassion, senior care_AWV and weight-management_S3E1_Title; generic (non-Medicare) VNHL_GBP_MC_CLIST; Dr. K review of ADA parking answers; confirm award year and fax number; hub slugs; PageSpeed and Rich Results re-run.
