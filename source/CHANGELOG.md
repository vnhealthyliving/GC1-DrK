# Change log

## 15 Oct 2026 (v6 of the compressed output)
Baseline: PageSpeed run of 14 Oct 2026, 10:58 PM CDT, after v5 was deployed (docs/...baseline...v2.docx plus the text report): Performance 100, Accessibility 100, Best Practices 100, SEO 100, Agentic Browsing 3/3. FCP 0.9 s, LCP 1.4 s, TBT 20 ms, CLS 0.003, Speed Index 1.0 s. This is the benchmark to keep: see docs/ and the Benchmark doc.
The report confirmed the v5 fixes are live: images no longer appear in the cache-lifetime list, and the header logo no longer appears in image delivery.

Applied to site_normal first, then site_ads-safe (build/apply_oct15_ard_and_news_images.py):
- News images: new 680 px wide versions (CoronadoTimes-680w-680x510.webp 40 KB, EagleTimes-680w-680x911.webp 71 KB) are now the default; the 960/720 and 1200/896 files stay in srcset for larger screens. Lighthouse had flagged the 960 and 720 px files (47 KiB of savings).
- ARD catalog (Agentic Resource Discovery v0.91) for the four WebMCP tools: .well-known/ard.json (current path) and .well-known/ai-catalog.json (predecessor path that Lighthouse 13.5 still checks), plus <link rel="ard"> in index.html, header rules, and a pointer line in llms.txt. Passes the official conformance tool with 0 errors and 4 warnings (media type text/html is not a standard discovery type).
- Ads-safe version uses the sanitized wording in its catalog.

Left alone on purpose: Netlify badge and hud script (1 minute cache, set by Netlify), Google tag (72 KiB unused JavaScript, kept so analytics stay complete), CSP script-src, Trusted Types, HSTS preload.

## 14 Oct 2026 (v5 of the compressed output)
Baseline: PageSpeed and Rich Results Test for DrK.Care, 14 Oct 2026 (docs/PageSpeed_and_Rich_Results_Test_baseline_for_DrK-care___14oct2026.docx).
Scores at baseline (mobile and desktop): Performance 100, Accessibility 96, Best Practices 100, SEO 100, Agentic Browsing 3/3.

Applied to site_normal first, then site_ads-safe (same script, build/apply_oct14_news_pagespeed.py):
- In the News: two local news clippings (The Coronado Times, 23 Sep 2026; Eagle & Times, 17 Sep 2026 issue) shown in full on index.html and about.html, with two NewsArticle nodes in the JSON-LD (linked to the Physician node by subjectOf), in about.md / index.md / llms-full.txt, and in the Recognition list of llms.txt.
- Accessibility: address and phone links in the Find Us blocks are now 44 px tall on all 5 pages (fixes the Lighthouse "touch targets" item, the only one that cost points).
- Header logo recompressed: 8.3 KB to 2.2 KB (same 134x77 size), the "Improve image delivery" item.
- index.html: preload hint for the banner image (LCP resource load delay was 190 ms).
- _headers: images cached for one year (immutable), webmcp js 7 days, CSP now also has object-src 'none' and base-uri 'self'.
- Source folder: expected_files lists (37 files each), site_facts.json (local_news), build/content.py (Recognition line, review date).

Not changed on purpose:
- Google tag: already loads after the page finishes; delaying it further would risk losing visits in analytics.
- The Netlify "Powered by Netlify" badge and its script (scripts/hud) come from Netlify, not from these files.
- CSP script-src and Trusted Types: the pages use inline scripts and onclick handlers, so these need testing before use.
- HSTS preload: left for a decision, because it is a long-term commitment for every subdomain of drk.care.

To confirm: Eagle & Times date (the clipping shows both "Sept. 17, 2026" in the volume line and "Sep 18, 2026").
Note: the clipping images themselves contain the words Medicare and $0 co-pay, so site_ads-safe shows those words inside two images (page text and schema are clean).
