SOURCE FILES (keep in GitHub, never published)

DEPLOYMENT.md          Which domain serves which site folder. Read this before any hosting change.
site_facts.json        The practice facts used everywhere (phone, hours, insurance wording, awards).
faq_master.json        The FAQ questions and answers (Medicare and ads-safe wording) used for the page, schema and Markdown.
wording_map.md         Approved wording rules (Medicare version versus ads-safe version).
expected_files_*.txt   Exact file lists for each site folder; anything else in a site folder is an orphan.
images_list/           The 01h image list (old name to .webp name).
docs/                  Plan, PageSpeed and Rich Results baseline (8 Oct 2026), AI survey log.
archive/               Full-wording schema saved before sanitizing (reference).
build/                 The generator scripts and the original base pages.

REVIEW RHYTHM
Check insurance, Medicare and Bridge Program wording every quarter and before the Oct 15 enrollment window.
Update last_reviewed in site_facts.json when you do.

NEVER put in the repo: patient information, passwords or keys, or the full-size original images (store those in Google Drive).
