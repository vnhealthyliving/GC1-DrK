# Deployment (as told by Raj, Oct 2026)

- site_normal/ (Medicare and GLP-1 wording) is published on DrK.Care.
- vnhealthyliving.com is Production. It will be connected to vnhl.clinic (Dev/Test) when the new IT group starts fixing issues and adding features on vnhealthyliving.com.
- site_ads-safe/ is not used for now. Keep it in the repo; it may be used later for Google Ads.
- Each Netlify site publishes only its own folder (Publish directory). source/ is never published.
- Pages on DrK.Care use drk.care for canonical, og:url and page-level schema url. Schema @id values and sameAs stay on vnhealthyliving.com.
- When vnhealthyliving.com takes over these pages, the canonical and og:url values must be switched back to vnhealthyliving.com.
