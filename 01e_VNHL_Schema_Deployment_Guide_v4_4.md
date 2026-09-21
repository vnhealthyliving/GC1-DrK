# VNHL Schema JSON-LD — Deployment Guide v4.4

## Domain Architecture -- Hub and Spoke (v4.4 Update)

VNHL operates a three-domain Hub and Spoke architecture. All schema canonical URLs and @id namespace values use VNHealthyLiving.com as the authoritative domain.

| Domain | Role | In Schema |
|---|---|---|
| VNHealthyLiving.com | Hub -- PRIMARY | All @id values, canonical URLs, url fields |
| VNHL.Clinic | Spoke 1 -- STAGING | sameAs[] arrays only. Phase 3: 301 to Hub. |
| DrK.Care | Spoke 2 -- CAMPAIGN/PHYSICIAN BRAND | sameAs[] arrays + potentialAction.urlTemplate |

### How to Update Domains in the Schema

To change the primary domain (major operation -- plan carefully):
1. Update all `@id` values containing `vnhealthyliving.com` -- these are the internal schema node references
2. Update `url` field in `#physician` and `#clinic` nodes
3. Update `sameAs` arrays in `#physician`, `#clinic`, and `#website` nodes
4. Update `potentialAction.target.urlTemplate` in `#physician` node
5. Update all `BreadcrumbList` item URLs
6. Update `WebSite.url` in `#website` node
7. Submit domain change notification to Google Search Console
8. Submit new sitemap to GSC for all three domains

To add a new domain (simpler):
1. Add the new domain URL to `sameAs[]` in `#physician`, `#clinic`, and `#website` nodes
2. No @id changes needed

To update the campaign landing page URL (DrK.Care):
1. Update `potentialAction.target.urlTemplate` in `#physician` node
2. Update `sameAs[]` in `#physician` and `#clinic` nodes if the DrK.Care URL changes

### DrK.Care Deployment Notes (Plain HTML)

The @graph schema architecture works identically in plain HTML and React. For DrK.Care HTML files:

- Paste the per-page `<script type="application/ld+json">` block into the `<head>` of each HTML file
- No react-helmet-async, no HelmetProvider wrapper needed
- Validate each page at: https://search.google.com/test/rich-results
- The @id values still reference VNHealthyLiving.com -- this is correct; @id is a schema namespace identifier, not a page URL

---

## v4.4 Changes from v4.3

1. **Domain architecture**: VNHL.Clinic and DrK.Care added to `sameAs[]` in #physician, #clinic, and #website nodes
2. **potentialAction URL corrected**: `https://drk.care/appointment.html` (was `/appointments`)
3. **Bridge Program service added**: New `MedicalTherapy` node in clinic `availableService` for the Medicare GLP-1 Bridge Program (Jul 2026 - Dec 2027)
4. **Bridge Program FAQ added**: 10 new Q&As added to the `FAQPage` node (total: 45 Q&As)
5. **Dr. K description corrected**: "affectionately known by patients and staff at VNHL as Dr. K" (was "known to patients")
6. **Domain pointer comments**: Full domain update guide added as HTML comment at top of schema file
7. **WebSite description updated**: References all three domains

---

## Architecture Reference + Hands-On Implementation Walkthrough

**Version:** 4.3 · September 2026  
**Schema source:** `01d_VNHL_Schema_JsonLD_Master_v4.4.html`  
**Stack:** React 18 / TypeScript / Vite 5 / Tailwind CSS / shadcn/ui  
**Staging gate:** Every change goes to `https://VNHL.Clinic` first. Verified there. Then `VNHealthyLiving.com`.

> **Note on previous files:** This document supersedes and merges `01e_VNHL_Schema_Deployment_Steps_v4.2.md` (architecture reference) and `01f_VNHL_Schema_v4.2_Propagation_Walkthrough.md` (hands-on walkthrough). They were complementary — 01e was the map, 01f was the turn-by-turn directions. This guide combines both into a single flow: architecture → setup → node extraction → page-by-page → verification.

---

## What Changed in v4.4

| Item | Change |
|---|---|
| GBP CID | Confirmed: `14719962065778087226` — applied in schema v4.4, no placeholder |
| Yelp | Profile not yet created. Placeholder `YOUR_YELP_ID_HERE` retained until Phase 2 |
| DrK.Care | Added to `sameAs` in both Physician and Clinic nodes |
| `/partners` node | Node [9] added: `MedicalOrganization` — template for partner referral network |
| Node count | 9 nodes (v4.2) → **10 nodes (v4.4)** |
| Appointment policy | Phone-only booking confirmed. Online booking placeholder only. |

---

## Part 1 — Architecture Overview

### How JSON-LD Works in a React / Vite SPA

In a plain HTML site you paste `<script type="application/ld+json">` directly into `<head>`. In a React SPA, there is **no single `index.html` you edit for content** — Vite's `index.html` is a shell that mounts the React app. All page-specific `<head>` content (titles, meta, JSON-LD) is managed **inside each page component** using `react-helmet-async`.

**Critical:** `react-helmet-async` requires a `HelmetProvider` wrapper in `src/main.tsx`. Without it, every `<Helmet>` block mounts silently and writes nothing — this is the confirmed defect on the live site. Fix this first. Everything else in this guide is blocked until it is resolved.

### The 10 Nodes in v4.4

| Index | `@id` | Type | Variable name | New in v4.4 |
|---|---|---|---|---|
| [0] | `#physician` | Physician + Person | `physicianSchema` | DrK.Care in sameAs |
| [1] | `#brand-drk` | Brand | `brandSchema` | — |
| [2] | `#clinic` | MedicalClinic + LocalBusiness | `clinicSchema` | GBP CID confirmed; DrK.Care in sameAs |
| [3] | `#multicultural-service` | Service | `multiServiceSchema` | — |
| [4] | `#medicare-checklist-2026` | CreativeWork | `medicareChecklistSchema` | — |
| [5] | `#award-certificate-scmg-q2-2026` | CreativeWork | `awardCertSchema` | — |
| [6] | `#faq` | FAQPage (35 Q&As) | `faqSchema` | — |
| [7] | `#breadcrumb` | BreadcrumbList | `breadcrumbSchema` | — |
| [8] | `#website` | WebSite | `websiteSchema` | — |
| [9] | `#partners-network` | MedicalOrganization | `partnersSchema` | **NEW — /partners page** |

### Which Nodes Go on Which Page

| Page | Route | Nodes included |
|---|---|---|
| **Home** | `/` | physician, brand, clinic, awardCert, website |
| **About / Dr. K** | `/about` | physician, brand, clinic, awardCert, multiService, breadcrumb, website |
| **Medicare** | `/medicare` | physician, clinic, multiService, medicareChecklist, FAQ-Medicare-subset, breadcrumb, website |
| **FAQ** | `/faq` | faq (all 35), clinic, breadcrumb, website |
| **Services / GLP-1** | `/services` | clinic, medicareChecklist, FAQ-GLP1-subset, breadcrumb, website |
| **Contact** | `/contact` | clinic, website |
| **Partners** | `/partners` | partnersSchema, clinic, website |
| **All other pages** | `/*` | website only |

### FAQ Subsets by Page

| Page | Q numbers to include |
|---|---|
| `/medicare` | Q6, Q7, Q8, Q9, Q10 (Medicare, AWV, Sharp) |
| `/services` | Q30, Q31, Q32, Q33, Q34 (GLP-1, weight management) |
| `/faq` | All Q1–Q35 |

### File Structure to Create

```
src/
  data/
    schema/
      physician.ts         ← Node [0]
      brand.ts             ← Node [1]
      clinic.ts            ← Node [2]
      multiService.ts      ← Node [3]
      medicareChecklist.ts ← Node [4]
      awardCert.ts         ← Node [5]
      faq.ts               ← Node [6]
      breadcrumb.ts        ← Node [7]
      website.ts           ← Node [8]
      partners.ts          ← Node [9] NEW
  components/
    SchemaScript.tsx       ← optional shared helper
```

---

## Part 2 — One-Time Setup (Developer Does This Once)

### Step 1 — Open the Project in VS Code

Open the GitHub repository in VS Code. Confirm you can see `src/` in the Explorer panel.

### Step 2 — Check or Install `react-helmet-async`

Open the VS Code terminal (`Ctrl+`` ` `` ` on Windows / `Cmd+`` ` `` ` on Mac):

```bash
cat package.json | grep helmet
```

- **Output shows `react-helmet-async`** → installed. Proceed to Step 3.
- **No output** → install it:

```bash
npm install react-helmet-async
```

### Step 3 — Fix `HelmetProvider` in `src/main.tsx` (CRITICAL — DO FIRST)

Open `src/main.tsx`. The current broken state:

```tsx
// CURRENT — BROKEN (HelmetProvider missing)
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

Fixed version — add three lines:

```tsx
// FIXED — src/main.tsx
import ReactDOM from 'react-dom/client'
import App from './App'
import { HelmetProvider } from 'react-helmet-async'   // ← ADD

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>                                    // ← ADD
      <App />
    </HelmetProvider>                                   // ← ADD
  </React.StrictMode>
)
```

Save. This is done **once** and never touched again. Verify: open any page in the browser, right-click → View Page Source → the `<title>` tag should now match the page-specific title (not the homepage title repeated on every page).

### Step 4 — Create the Schema Data Folder

In VS Code Explorer:
- Right-click `src/` → **New Folder** → `data`
- Right-click `data/` → **New Folder** → `schema`

Result: `src/data/schema/`

### Step 5 — Create the Optional Shared Helper

Create `src/components/SchemaScript.tsx`:

```tsx
// src/components/SchemaScript.tsx
import { Helmet } from 'react-helmet-async';

interface SchemaScriptProps {
  schema: object;
}

export function SchemaScript({ schema }: SchemaScriptProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
```

---

## Part 3 — Extract the 10 Nodes from the Master File

Open `01d_VNHL_Schema_JsonLD_Master_v4.4.html` in VS Code. Find the `<script type="application/ld+json">` block. The `@graph` array contains 10 objects.

**How to find each node's boundaries:** Each object starts with `"@type":` and `"@id":`. Use Ctrl+F to search for the `@id` values below.

### Quick Reference — First Line of Each Node

| Node | Search for |
|---|---|
| `#physician` | `"@type": ["Physician", "Person"],` |
| `#brand-drk` | `"@type": "Brand",` |
| `#clinic` | `"@type": ["MedicalClinic", "LocalBusiness"],` |
| `#multicultural-service` | `"@type": "Service",` |
| `#medicare-checklist-2026` | `"name": "2026 Medicare Wellness Checklist",` |
| `#award-certificate-scmg-q2-2026` | `"name": "Sharp SCMG Award of Excellence Certificate` |
| `#faq` | `"@type": "FAQPage",` |
| `#breadcrumb` | `"@type": "BreadcrumbList",` |
| `#website` | `"@type": "WebSite",` |
| `#partners-network` | `"@type": "MedicalOrganization",` (last node) |

### Create Each TypeScript File

For each node, right-click `src/data/schema/` → **New File** → name it per the table above. Copy the node object body (from `{` to its matching `}`) and export it as a constant. Do NOT include `"@context"` or `"@graph"` wrappers in the individual files — those are assembled at the page level.

**Pattern for every file:**

```ts
// src/data/schema/physician.ts
export const physicianSchema = {
  "@type": ["Physician", "Person"],
  "@id": "https://vnhealthyliving.com/#physician",
  // ... paste the full node object here ...
};
```

**Pattern for the new partners node:**

```ts
// src/data/schema/partners.ts
// Node [9] — NEW in v4.4
// Expand this file as Dr. K approves each partner.
// Add one MedicalOrganization entry per approved partner.
export const partnersSchema = {
  "@type": "MedicalOrganization",
  "@id": "https://vnhealthyliving.com/#partners-network",
  // ... paste the full node object here ...
};
```

### Verify All Files Compile

```bash
npm run build
```

Build succeeds → all 10 TypeScript files are valid. Proceed to Part 4.  
Build fails → TypeScript shows the file and line. Most common cause: trailing comma on last property or missing closing `}`.

---

## Part 4 — Page-by-Page Implementation

For each page: open the component file in `src/pages/`, add the imports at the top, and add the `<Helmet>` block as the first child of the `return` statement.

---

### Page 1 — Home (`src/pages/Home.tsx` or `Index.tsx`)

**Nodes:** physician, brand, clinic, awardCert, website

```tsx
import { Helmet } from 'react-helmet-async';
import { physicianSchema }   from '../data/schema/physician';
import { brandSchema }       from '../data/schema/brand';
import { clinicSchema }      from '../data/schema/clinic';
import { awardCertSchema }   from '../data/schema/awardCert';
import { websiteSchema }     from '../data/schema/website';

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [ physicianSchema, brandSchema, clinicSchema, awardCertSchema, websiteSchema ]
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dr. K | VN Healthy Living | Sharp & SCMG | Medicare AWV $0 | Imperial Beach CA</title>
        <meta name="description" content="Dr. K — Dr. Vijay Kuppurajan, MD. Sharp & SCMG affiliated primary care in Imperial Beach CA. Medicare AWV $0 co-pay. Bilingual EN/ES. Call (619) 429-7700 or visit DrK.Care." />
        <link rel="canonical" href="https://vnhealthyliving.com/" />
        <script type="application/ld+json">{JSON.stringify(homePageSchema)}</script>
      </Helmet>
      {/* ... page JSX ... */}
    </>
  );
}
```

**Verify on VNHL.Clinic:** Rich Results Test → `vnhl.clinic` → Physician ✅ MedicalClinic ✅

---

### Page 2 — About / Dr. K (`src/pages/About.tsx`)

**Nodes:** physician, brand, clinic, awardCert, multiService, breadcrumb (About path), website

```tsx
const aboutBreadcrumb = {
  "@type": "BreadcrumbList",
  "@id": "https://vnhealthyliving.com/#breadcrumb-about",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vnhealthyliving.com/" },
    { "@type": "ListItem", "position": 2, "name": "About Dr. K", "item": "https://vnhealthyliving.com/about" }
  ]
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [ physicianSchema, brandSchema, clinicSchema, awardCertSchema, multiServiceSchema, aboutBreadcrumb, websiteSchema ]
};
```

**Title:** `About Dr. Vijay Kuppurajan MD — Imperial Beach CA | VN Healthy Living`  
**Canonical:** `https://vnhealthyliving.com/about`

---

### Page 3 — Medicare (`src/pages/Medicare.tsx`)

**Nodes:** physician, clinic, multiService, medicareChecklist, FAQ Medicare subset, breadcrumb, website

```tsx
import { faqSchema } from '../data/schema/faq';

const medicareFaqSubset = {
  "@type": "FAQPage",
  "@id": "https://vnhealthyliving.com/medicare#faq",
  "mainEntity": faqSchema.mainEntity.slice(5, 10)  // Q6–Q10 (0-based index 5–9)
};

const medicareBreadcrumb = {
  "@type": "BreadcrumbList",
  "@id": "https://vnhealthyliving.com/#breadcrumb-medicare",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vnhealthyliving.com/" },
    { "@type": "ListItem", "position": 2, "name": "Medicare & You", "item": "https://vnhealthyliving.com/medicare" }
  ]
};

const medicarePageSchema = {
  "@context": "https://schema.org",
  "@graph": [ physicianSchema, clinicSchema, multiServiceSchema, medicareChecklistSchema, medicareFaqSubset, medicareBreadcrumb, websiteSchema ]
};
```

**Title:** `Medicare and You — Sharp Medicare Advantage Imperial Beach | VN Healthy Living`  
**Canonical:** `https://vnhealthyliving.com/medicare`  
**Verify:** Rich Results Test → `vnhl.clinic/medicare` → FAQPage (Medicare Q&As) ✅

---

### Page 4 — FAQ (`src/pages/FAQ.tsx`)

**Nodes:** faq (all 35), clinic, breadcrumb, website

```tsx
const faqBreadcrumb = {
  "@type": "BreadcrumbList",
  "@id": "https://vnhealthyliving.com/#breadcrumb-faq",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vnhealthyliving.com/" },
    { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://vnhealthyliving.com/faq" }
  ]
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@graph": [ faqSchema, clinicSchema, faqBreadcrumb, websiteSchema ]
};
```

**Title:** `Frequently Asked Questions — VN Healthy Living Medical Group`  
**Canonical:** `https://vnhealthyliving.com/faq`  
**Verify:** Rich Results Test → `vnhl.clinic/faq` → FAQPage ✅ (35 questions, zero errors)

---

### Page 5 — Services / GLP-1 (`src/pages/Services.tsx`)

**Nodes:** clinic, medicareChecklist, FAQ GLP-1 subset, breadcrumb, website

```tsx
const glp1FaqSubset = {
  "@type": "FAQPage",
  "@id": "https://vnhealthyliving.com/services#faq",
  "mainEntity": faqSchema.mainEntity.slice(29, 34)  // Q30–Q34 (0-based index 29–33)
};

const servicesBreadcrumb = {
  "@type": "BreadcrumbList",
  "@id": "https://vnhealthyliving.com/#breadcrumb-services",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vnhealthyliving.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vnhealthyliving.com/services" }
  ]
};

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [ clinicSchema, medicareChecklistSchema, glp1FaqSubset, servicesBreadcrumb, websiteSchema ]
};
```

**Title:** `Primary Care Services — GLP-1, Medicare, Chronic Disease | VN Healthy Living Imperial Beach`  
**Canonical:** `https://vnhealthyliving.com/services`

---

### Page 6 — Contact (`src/pages/Contact.tsx`)

**Nodes:** clinic (has address, hours, phone, map), website

```tsx
const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [ clinicSchema, websiteSchema ]
};
```

**Title:** `Contact VN Healthy Living — (619) 429-7700 | 707 Palm Ave, Imperial Beach CA`  
**Canonical:** `https://vnhealthyliving.com/contact`

---

### Page 7 — Partners (`src/pages/Partners.tsx`) — NEW IN v4.4

**Nodes:** partnersSchema (MedicalOrganization network), clinic, website

```tsx
import { partnersSchema } from '../data/schema/partners';

const partnersBreadcrumb = {
  "@type": "BreadcrumbList",
  "@id": "https://vnhealthyliving.com/#breadcrumb-partners",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vnhealthyliving.com/" },
    { "@type": "ListItem", "position": 2, "name": "Partners", "item": "https://vnhealthyliving.com/partners" }
  ]
};

const partnersPageSchema = {
  "@context": "https://schema.org",
  "@graph": [ partnersSchema, clinicSchema, partnersBreadcrumb, websiteSchema ]
};
```

**Title:** `Trusted Partners — Dr. K's Referral Network | VN Healthy Living Imperial Beach`  
**Canonical:** `https://vnhealthyliving.com/partners`

**How to add a partner to the schema:** When Dr. K approves a new partner, add their data to `src/data/schema/partners.ts`. Each partner is a `MedicalOrganization` object nested within the network node:

```ts
// Adding a new partner to partners.ts
// After Dr. K approves, append to the partners network:
{
  "@type": "MedicalOrganization",
  "name": "South Bay Cardiology Group",
  "medicalSpecialty": "Cardiology",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Example St",
    "addressLocality": "Chula Vista",
    "addressRegion": "CA",
    "postalCode": "91910"
  },
  "telephone": "(619) 555-0000",
  "url": "https://southbaycardiology.example.com",
  "sameAs": "https://southbaycardiology.example.com"
}
```

**Verify:** Rich Results Test → `vnhl.clinic/partners` → MedicalOrganization ✅ MedicalClinic ✅

---

### Page 8 — All Other Pages (Default)

Every page without specific schema still needs the WebSite node:

```tsx
const defaultPageSchema = {
  "@context": "https://schema.org",
  "@graph": [ websiteSchema ]
};
```

---

## Part 5 — Full Page Title & Canonical Reference

| Route | Title Tag (under 60 chars) | Canonical |
|---|---|---|
| `/` | `Dr. K \| VN Healthy Living \| Sharp & SCMG \| Imperial Beach CA` | `https://vnhealthyliving.com/` |
| `/about` | `About Dr. Vijay Kuppurajan MD — Imperial Beach CA` | `https://vnhealthyliving.com/about` |
| `/services` | `Primary Care Services — VN Healthy Living Imperial Beach` | `https://vnhealthyliving.com/services` |
| `/medicare` | `Medicare & You — Sharp Medicare Advantage Imperial Beach` | `https://vnhealthyliving.com/medicare` |
| `/faq` | `Frequently Asked Questions — VN Healthy Living` | `https://vnhealthyliving.com/faq` |
| `/patient-info` | `Patient Info — Insurance, Hours & Location \| VNHL` | `https://vnhealthyliving.com/patient-info` |
| `/contact` | `Contact VN Healthy Living — (619) 429-7700` | `https://vnhealthyliving.com/contact` |
| `/partners` | `Trusted Partners — Dr. K's Referral Network \| VNHL` | `https://vnhealthyliving.com/partners` |
| `/voice-of-vnhl` | `Voice of VNHL — Health Education Videos` | `https://vnhealthyliving.com/voice-of-vnhl` |

---

## Part 6 — Verification After Every Deploy

Run all checks on `VNHL.Clinic` before pushing to `VNHealthyLiving.com`.

### Verification Table

| # | Check | Tool | Pass Criteria |
|---|---|---|---|
| 1 | react-helmet-async working | View Page Source | Each route has a DIFFERENT `<title>`; `<script type="application/ld+json">` block present |
| 2 | Physician schema | Rich Results Test → `vnhl.clinic` | "Physician" — zero errors |
| 3 | MedicalClinic schema | Rich Results Test → `vnhl.clinic` | "MedicalClinic" — zero errors |
| 4 | FAQPage schema | Rich Results Test → `vnhl.clinic/faq` | "FAQPage" — 35 questions, zero errors |
| 5 | Partners schema | Rich Results Test → `vnhl.clinic/partners` | "MedicalOrganization" — zero errors |
| 6 | Canonical tags | View Page Source | Every page: `canonical href="https://vnhealthyliving.com/[path]"` NOT vnhl.clinic |
| 7 | DrK.Care in sameAs | Schema.org validator | `drk.care` appears in Physician and Clinic sameAs arrays |
| 8 | GBP CID | View Page Source | `14719962065778087226` present in schema (3 locations) |
| 9 | Schema.org validator | validator.schema.org | All 10 nodes green |
| 10 | OG tags | WhatsApp link preview | Each page shows correct title and image (not homepage repeated) |

### Verification by Page

| Page URL | Expected Schema Types in Rich Results Test |
|---|---|
| `vnhl.clinic` | Physician, MedicalClinic |
| `vnhl.clinic/about` | Physician, MedicalClinic |
| `vnhl.clinic/faq` | FAQPage (35 questions) |
| `vnhl.clinic/medicare` | FAQPage (Medicare subset), MedicalClinic |
| `vnhl.clinic/services` | FAQPage (GLP-1 subset), MedicalClinic |
| `vnhl.clinic/contact` | MedicalClinic |
| `vnhl.clinic/partners` | MedicalOrganization, MedicalClinic |

---

## Part 7 — Key Notes

### The Master File Is a Container — Not a Web Page
`01d_VNHL_Schema_JsonLD_Master_v4.4.html` exists to version and validate JSON-LD. Do not open it in a browser expecting a web page. Validate it at `https://validator.schema.org` by pasting the raw JSON block.

### Domain Portfolio — v4.4 Status
| Domain | Role | Schema sameAs |
|---|---|---|
| `VNHealthyLiving.com` | PRIMARY — all canonicals point here | Primary identity |
| `VNHL.Clinic` | STAGING — all changes verified here first | Not in sameAs |
| `DrK.Care` | BRANDED SHORT LINK — 301 to primary | Added to Physician + Clinic sameAs in v4.4 |
| `drvijay.com` | NOT acquired — formally waived | Not referenced |

### Yelp Placeholder
`YOUR_YELP_ID_HERE` remains in the Clinic node. When the Yelp profile is created in Phase 2, replace it with the real Yelp business slug (e.g., `vn-healthy-living-imperial-beach`) and re-deploy.

### /partners Node — How It Grows
The `#partners-network` MedicalOrganization node starts as a network description. As Dr. K approves each partner, add their sub-node to `src/data/schema/partners.ts`. Re-validate after each addition. Annual review — remove nodes for partners who have closed or changed.

### v4.2 → v4.4 Migration
If v4.2 schema was previously deployed to any page, these are the only fields that changed:
1. `Physician` → `sameAs` — DrK.Care added
2. `Clinic` → `sameAs` — GBP CID confirmed; DrK.Care added
3. `Clinic` → `hasMap` — GBP CID confirmed
4. Node [9] added — MedicalOrganization `#partners-network` (new `/partners` page)

Re-validate Home, About, and Contact pages after updating.
