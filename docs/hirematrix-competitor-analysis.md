# Competitor Analysis & Implementation Guide — hirematrix.co.in

> **Prepared:** 13 Oct 2026 · **Competitor:** <https://hirematrix.co.in/> (HireMatrix, Kukatpally, Hyderabad) · **Your project:** HireMatrix HR Consultancy (Coimbatore & Tiruchirappalli), this repo, Next.js 16.3.8.
>
> Everything in Part 1 was verified by fetching the live site's raw HTML, CSS, subpages, sitemaps and robots.txt on the date above. Items marked *(inference)* are educated guesses, not proven facts.

---

## Read this first — three things that change the strategy

1. **The competitor uses the same brand name as you.** They trade as "HireMatrix" (logo file literally named `hiringmatrix-logo.webp`) in Hyderabad; you are "HireMatrix HR Consultancy" in Coimbatore/Trichy. Searches for "HireMatrix" will mix the two businesses. Always pair your name with your cities in titles, schema and Google Business Profile, secure your social handles, and consider checking trademark status with a professional. Do **not** link to their site.
2. **The competitor's website is hacked (SEO-spam cloaking).** Normal visitors see the recruitment site, but when the request comes from Googlebot the server returns a **Japanese "Yahoo! Flea Market" clone page** (title: a Dragon Ball manga listing, `lang="ja"`). Their `sitemap.xml` is a 70-file index whose children each list ~3,000 spam URLs like `/?shop/items/F7374123061/` (≈200k spam URLs). This is the well-known "Japanese keyword hack" on WordPress. Their organic search presence is effectively poisoned — a big opportunity for you, and a reminder to keep your own stack lean and secure. (If you want to be a good neighbour, you could let them know.)
3. **Your site is already ahead of theirs on design, structure and content depth.** You already have a sticky header + mobile menu, hero, SSR-safe count-up stats, service/industry grids, process steps, CTA band, floating WhatsApp button, branch cards with maps, FAQ, legal pages, sitemap and robots. So this guide does **not** tell you to rebuild those. It focuses on what they *promise* but don't deliver (a real jobs board and apply flow) and what neither of you has yet (server-side lead capture, testimonials, structured data, analytics).

> **Copy/branding rule:** use the competitor only for *feature and UX ideas*. Do not copy their text, testimonials, logos, photos or numbers. Write your own copy for Coimbatore/Trichy audiences.

---

# Part 1 — Competitor analysis

## 1.1 Summary

A single-location placement consultancy brochure site built with **WordPress + Elementor (page builder) + Royal Elementor Addons**, with most of the "designed" sections hand-coded as raw HTML/CSS pasted into Elementor HTML widgets *(inference: the hero image filename `hero-recruitment-C8o4Y-yI.jpg` carries a Vite-style content hash and the custom CSS uses Tailwind's gray palette — `#111827`, `#6b7280`, `#e5e7eb` — suggesting sections were exported from an AI/Vite prototype and pasted into WordPress).*

The homepage pitches both audiences well ("Find the Right Job. Hire the Right Talent.") with clear dual CTAs, but the funnel breaks after the click: the **Jobs page is 7 copies of the same placeholder job** whose "Apply Now" buttons link to `#link`, and there is **no candidate application or resume upload form anywhere**. The site is also compromised (see above), loads a lot of unused JavaScript/CSS, and has several SEO and accessibility mistakes.

## 1.2 Tech stack (with evidence)

| Layer | Finding | Evidence |
|---|---|---|
| CMS | WordPress 6.9.4 | `<meta name="generator" content="WordPress 6.9.4">`, `wp-json` `Link` header, `/wp-content/` paths |
| Server | LiteSpeed, PHP 8.1.34 | Response headers `server: LiteSpeed`, `x-powered-by: PHP/8.1.34` (PHP 8.1 is past end-of-life for security fixes) |
| Page builder | Elementor 4.1.1 (template: *Elementor Canvas*) | generator meta `Elementor 4.1.1; features: e_font_icon_svg, additional_custom_breakpoints…`; body classes `elementor-template-canvas`, `page-id-392`; `data-widget_type="counter.default"` etc. |
| Theme | Royal Elementor Kit | `wp-content/themes/royal-elementor-kit/style.css`, body class `wp-theme-royal-elementor-kit` |
| Addons | Royal Elementor Addons (header nav, logo, buttons, sticky header, mobile menu, floating phone button, form builder, feature lists) | `wpr-nav-menu`, `wpr-logo`, `wpr-button`, `wpr-phone-call`, `wpr-form-builder`, `wpr-feature-list` widgets; `WprConfig` inline script |
| Forms | **Forminator** (Employers + Contact) and **Royal Addons Form Builder** (Services) | `wp-content/plugins/forminator`, `forminator_nonce` hidden field; `wpr-form-builder.default` widget |
| SEO plugin | All in One SEO (AIOSEO) 4.9.7.2 | generator meta, AIOSEO JSON-LD graph, `/wp-content/plugins/all-in-one-seo-pack/` |
| Icons | Font Awesome (Elementor bundled) + Skyboot Custom Icons (Linearicons, Elegant, Themify) | stylesheet URLs under `elementor/assets/lib/font-awesome` and `skyboot-custom-icons-for-elementor` |
| Fonts | Google Fonts: **Sora**, **Inter**, Poppins, Roboto, Roboto Slab — each requested with all 18 weight/italic variants | five `fonts.googleapis.com/css?family=…:100,100italic,…900italic` links |
| JS libraries | jQuery + jQuery Migrate + jQuery UI core, Elementor frontend + webpack runtime, **jquery-numerator** (counters), particles.js, jarallax, parallax.js, perfect-scrollbar, modal-popups | `<script src>` list (13 scripts) |
| Counters | Elementor Counter widget animated by jquery-numerator; HTML contains **"0"** until JS runs | `data-to-value="5000"` with visible text `0` |
| Testimonials | Hand-written HTML + **pure-CSS marquee** (`@keyframes scrollTestimonials`, 28s linear infinite, `translateX(-50%)`) | inline `<style>` in an HTML widget |
| Process steps / CTA band / gradient H1 | Hand-written HTML+CSS in Elementor HTML widgets | inline styles `.hirematrix-process`, `.hirematrix-cta`, `.hirematrix-heading` |
| WhatsApp | Plain `https://wa.me/919642123331` buttons (hero, CTA band); Contact page link has prefilled `?text=` | anchor hrefs |
| Floating button | Royal Addons **phone-call** button fixed bottom-right → `tel:9333183331` (not WhatsApp) | `wpr-pc-btn-align-fixed-right` |
| Map | Elementor Google Maps widget (iframe, `z=10` city-level zoom) | `google_maps.default` widget |
| Other | WP Speculation Rules prefetch, WP emoji script, Google Search Console verification meta. **No analytics/pixel tags found** (no GA/GTM/Meta/Clarity) | inline scripts; `google-site-verification` meta |

## 1.3 Information architecture

```
Header (sticky, white, shadow): Logo · Home · About Us · Services · Jobs · Employers · Contact Us · [Apply Now → /jobs]
  ├─ /            Home (long-scroll landing page)
  ├─ /about/      About
  ├─ /services/   Services (+ call-back form)
  ├─ /jobs/       Jobs (placeholder listings)
  ├─ /employers/  Employers (+ enquiry form)
  └─ /contact/    Contact (+ form + map)
Footer: logo, tagline, social icons · Company links · Contact details · © line · floating call button
```

- **Missing pages:** no job detail pages, no apply page (`/apply/` and `/apply-now/` return 404), no FAQ page, no blog/resources, no privacy policy or terms (they collect personal data via forms without one).
- Every inner page ends with the same "Ready to Build Your Career or Hire Talent?" CTA band.

## 1.4 Page-by-page breakdown

### Home
| # | Section | What it contains | Notes |
|---|---|---|---|
| 1 | Hero (2-col) | Pill badge "Trusted Placement Company in Hyderabad"; H1 "Find the Right Job. / Hire the Right Talent." with a navy→sky gradient on the second line; one-line subcopy; buttons **Apply for Jobs** (/jobs), **Hire Candidates** (/employers), **WhatsApp** (wa.me); right side single photo | Strong dual-audience message. Only one photo, no search box. |
| 2 | Stat counters | Candidates Placed 5000+, Hiring Partners 300+, Satisfaction Rate 98% | Render "0" without JS; numbers unverifiable. |
| 3 | About | Eyebrow + H2 + paragraph + 4 icon cards (Trusted Partner, Fast Placements, Personal Touch, 300+ Companies) | Copy bug: "Fast Placements" description repeats the title. |
| 4 | Services | 6 icon cards (Direct Walk-in Job Support, Training & Placement Support, Candidate Screening, Interview Scheduling, Employer Hiring Support, Dedicated Account Manager), each "Learn more →" | All six links go to the same generic /services page. |
| 5 | Job Categories | 8 cards with opening counts (IT 1200+, Non-IT 800+, BPO 500+, HR Executive 300+, Sales 450+, Digital Marketing 250+, Fresher 900+, Corporate 600+) | **Not clickable.** Counts contradict the Jobs page (7 identical placeholders). |
| 6 | Process — Candidates | 5 numbered circles joined by a line: Register → Profile Screening → Job Matching → Interview Scheduling → Placement Support | Nice responsive CSS (line on desktop, 2-col tablet, stacked mobile). |
| 7 | Process — Employers | 5 steps: Share Requirements → Screening → Shortlist to HR → Interview Coordination → Joining Follow-up | Same component duplicated with slightly different CSS. |
| 8 | Why Choose Us | 6 icon cards (Genuine Jobs, Fast Process "avg closure 7 working days", Dedicated Support, Trusted Team, Freshers & Experienced, Corporate Staffing) | Generic claims. |
| 9 | Testimonials | Auto-scrolling marquee of 6 cards (★★★★★, quote, initial avatar, name, role); first 2 cards duplicated | Loop isn't seamless (only 2 of 6 duplicated but animation moves −50%); no pause; placeholder company "TechCorp"; duplicates read twice by screen readers. |
| 10 | CTA band | Rounded gradient card, H2, subcopy, Apply Now / Hire Candidates / WhatsApp Us | Good; uses Arial (inconsistent font). |
| 11 | Footer | Logo, tagline, social (Facebook — no link; Instagram — linked; LinkedIn — no link), Company links ("Jobs" not linked), phones, email, address, © | Email differs from schema (`info@hirematrix.in` vs `info@hirematrix.co.in`). |

### About
H1 "Building Careers, Powering Companies"; Mission & Vision cards; "What Makes Us Different" (3 cards); "Recruitment Across Industries" list (8 sectors as H6 text). The HTML widget contains a **full nested HTML document** (`<!DOCTYPE html><html lang="en"><head><title>Responsive Heading</title>…`) inside the page body — invalid markup.

### Services
H1 "Recruitment Services That Deliver"; Candidate Services (4 cards) and Employer Services (4 cards); "Need a Custom Solution?" call-back form (Name, Phone*, "What are you hiring for?"), button text **"Requist a call back"** (typo). Phone field is `type="number"` (strips `+`, shows spinner arrows on desktop).

### Jobs (the weakest page)
H2 (no H1) "Find Your Next Job — Verified openings across Hyderabad — apply in one click." Then **7 identical cards**: "Frontend Developer · TechNova Pvt Ltd · Hyderabad · 2–4 yrs · ₹6–10 LPA · IT · Apply Now (`#link`)". No search, no filters, no detail pages, no apply form, no JobPosting schema. Their JSON-LD even declares a `SearchAction` to `/jobs?search=…`, which does nothing.

### Employers
H1 "Hire Faster, Smarter, Better."; buttons **Start Hiring** (`#inquiry`) and **Talk to Us** (`tel:`); 4 counters (Hires 5000+, Avg Closure 7 Days, Clients 300+, Retention 98%); "What We Deliver" (3 cards); 5-step process (uses proper `<h3>`s); "Industries We Serve" chips; **Employer Inquiry** Forminator form (Company name*, Email*, Phone*, Position*, Requirements) — "we'll respond within 24 hours".

### Contact
H1 "Let's Connect"; feature list (Phone ×2, WhatsApp with prefilled "I want to Know more about your services", email, address); social icons; "Send us a message" Forminator form (Full name*, Email*, Phone*, select "I am a Candidate / I am a Employer / Genaral inquiry" — two typos, Message); Google Map iframe zoomed to city level.

## 1.5 Design system observations

| Token | Observed values |
|---|---|
| Primary blues | `#0077DB` (step circles/line), `#0066D6` (avatars), `#0D8BFF` (stars) |
| Navy / gradients | H1 accent `#011C6B → #019BFD`; CTA card `#12248D → #0B57B7 → #1BA0EA` (135°); footer `#0039A3 → #050050` |
| Neutrals | Text `#111827`, muted `#6B7280`, borders `#E5E7EB`, white backgrounds |
| Accent | WhatsApp button `#57C84D` |
| Elementor "global" kit | Still the Elementor defaults (`#6EC1E4`, `#61CE70`, Roboto) — i.e. **no real design tokens**; every colour is hard-coded per widget |
| Type | Headings **Sora** 700, tight tracking (−2px), `clamp(33px, 8vw, 58px)`; body Inter/Roboto; some sections fall back to **Arial** |
| Shape | Cards radius 20–28px, pill buttons (50px), soft shadows `0 5px 25px rgba(0,0,0,.08)`, hover lift `translateY(-6px)` |
| Imagery | One hero photo (960×960 JPG, 60 KB); everything else is icons. No team, office or event photos. |
| Icons | Mixed Font Awesome + 3 Skyboot icon fonts (visual inconsistency + weight) |
| Motion | Counter roll-up, CSS testimonial marquee, button hover lift, Elementor "grow" on social icons |

Overall look: clean, modern "SaaS-style" blue/white, but inconsistent fonts and no system behind it.

## 1.6 Features & functionality inventory

| Feature | How it's built | Quality |
|---|---|---|
| Sticky header + mobile hamburger | Royal Addons nav/sticky section | OK |
| Dual CTAs everywhere | Royal Addons buttons + custom HTML | Good |
| WhatsApp contact | `wa.me` links (one with prefilled text) | Good, but no floating WhatsApp button |
| Floating call button | Royal Addons phone-call widget | `tel:` without `+91` |
| Animated counters | Elementor counter + jquery-numerator | Shows `0` without JS |
| Testimonials carousel | CSS keyframes marquee | Jumpy loop, no pause/reduced-motion |
| Process timeline | Custom HTML/CSS | Good responsive behaviour |
| Forms (3) | Forminator ×2, Royal Form Builder ×1 | No resume upload, typos, no consent/privacy notice |
| Jobs board | Static duplicated cards | Non-functional |
| Map | Google Maps iframe | Too zoomed out |
| Search | None (despite schema SearchAction) | — |

## 1.7 SEO & metadata

**Good:** keyword-rich, page-specific `<title>`s and meta descriptions ("Latest Jobs in Hyderabad | IT & Freshers Jobs | HireMatrix"); one H1 on most pages; Search Console verified; `EmploymentAgency` schema with address, geo and opening hours.

**Problems:**
- **Hacked/cloaked content and ~200k spam sitemap URLs** (see top). This alone can trigger "This site may be hacked" labels and ruin rankings.
- No `og:image` / Twitter image (shares show no preview); `og:type` is `article` on the homepage; `og:site_name` is `"hirematrix.co.in -"`.
- `meta keywords` (ignored by Google).
- Two conflicting `Organization` nodes ("hirematrix.co.in" from AIOSEO vs "HireMatrix" hand-written); `sameAs` includes the generic `https://linkedin.com/`.
- `FAQPage` schema with questions that are **not visible on the page** (against Google's structured-data guidelines).
- `SearchAction` pointing at a search that doesn't exist (and Google retired the sitelinks search box in late 2024 anyway).
- Heading misuse: eyebrows are `<h4>` placed *before* `<h2>`s, footer column titles are `<h2>`, testimonial names are `<h4>`, Jobs page has no H1, nested `<title>` tags inside the body.
- Empty `alt=""` on logo and hero image; NAP inconsistency (email and phone differ between footer, contact page and schema).
- No job detail URLs, so nothing can rank for "<role> jobs in Hyderabad" or appear in Google for Jobs.

## 1.8 Performance (static inspection, no Lighthouse run)

- Home HTML ≈185 KB raw / 25 KB compressed; TTFB ≈0.87 s from India; no page-cache header seen.
- ~30 stylesheets and 13 scripts on the homepage, including libraries the page doesn't visibly use (particles.js, jarallax, parallax, perfect-scrollbar, modal popups, jQuery UI).
- Five Google Font families × 18 variants each, plus four icon fonts.
- Positives: hero image is small (60 KB) with `fetchpriority="high"`; Elementor lazy-loads section backgrounds; speculation-rules prefetch.

## 1.9 Responsiveness

Elementor custom breakpoints plus hand-written media queries at 991/768/600 px; `clamp()` headline; process steps re-flow to 2-col/1-col; CTA buttons stack full-width on mobile; testimonial cards become `90vw`. Generally solid. *(Not visually tested in a real browser — verified from CSS only.)*

## 1.10 Accessibility

- Empty `alt` on meaningful images (logo), empty `aria-label=""` on logo links.
- Social icons without links (Facebook, LinkedIn) are focus traps with no destination.
- Auto-scrolling testimonials with no pause control and no `prefers-reduced-motion` handling (WCAG 2.2.2).
- Duplicate testimonial cards not hidden from assistive tech.
- Heading hierarchy broken (see SEO); `type="number"` phone input.
- Counters announce "0".

## 1.11 UX & conversion analysis

**Funnel:** Hero → "Apply for Jobs" → Jobs page → "Apply Now" → **dead end (`#link`)**. Candidates can only convert by phone/WhatsApp. Employers have a working enquiry form (good), and WhatsApp is visible in hero and CTA band.

**Conversion elements present:** dual CTAs above the fold, header "Apply Now", WhatsApp buttons, social proof (counters, testimonials, "300+ companies"), process transparency, repeated CTA band, floating call button, employer form with response-time promise.

**Missing:** resume upload/apply form, job search, job alerts (WhatsApp/email), trust proof (real client logos, Google reviews, photos, registration/GST details), FAQ visible on page, "no fees for candidates" reassurance near CTAs, thank-you pages / conversion tracking.

## 1.12 Strengths (worth matching)

1. Crystal-clear dual-audience hero message with three CTAs (jobs, hire, WhatsApp).
2. Job-category grid with opening counts — signals volume and helps self-segmentation.
3. Two side-by-side 5-step processes (candidate vs employer) — reduces uncertainty for both.
4. Employer enquiry form with a "respond within 24 hours" promise.
5. Consistent end-of-page CTA band on every page.
6. Locally targeted titles/descriptions ("…in Hyderabad") and `EmploymentAgency` schema with geo + hours.
7. Prefilled WhatsApp message on the contact page.

## 1.13 Weaknesses → your opportunities

| Their weakness | Your opportunity |
|---|---|
| Hacked site, cloaked spam, polluted sitemaps, EOL PHP | Lean, static-first Next.js site with no plugins; clean sitemap; security headers |
| Jobs page is fake; no apply flow | **Real jobs board** with search/filters, detail pages, one-step apply with resume upload |
| No Google for Jobs | `JobPosting` JSON-LD on every live job → free visibility in Google's job search |
| Counters show 0 without JS; inflated, unverifiable numbers | SSR-rendered numbers (you already do this) based on real, defensible data |
| Category cards not clickable | Category cards link to filtered job lists with **live counts** from your data |
| Fake-looking testimonials, jumpy marquee | Real, consented testimonials (with photo/company/branch), accessible carousel with pause |
| Typos, inconsistent fonts/colours | Your Tailwind v4 design tokens and shared components keep everything consistent |
| No privacy policy while collecting data | You already have privacy/terms; add explicit consent checkbox on forms (India DPDP Act 2023) |
| No og:image, broken social links | Dynamic OG images, real social links in footer + `sameAs` |
| No analytics | GA4 + conversion events (apply, enquiry, WhatsApp, call clicks) |
| Single location, city-level map | Two branches with live open/closed status (you have this) + `EmploymentAgency` schema per branch |
| No FAQ page | You have one — make it visible on key pages and keep it in sync |

---

# Part 2 — How to build equivalent (and better) features in your stack

## 2.1 Your project today

| Area | Current state |
|---|---|
| Framework | **Next.js 16.3.8** (App Router, Turbopack dev), **React 19.2.8**, TypeScript 5, `src/` directory, `@/` alias |
| Styling | **Tailwind CSS v4**, CSS-first config in `src/app/globals.css` (`@theme` brand palette `brand-50…950` around navy `#1b3a4f`, `@utility` classes `container-x`, `btn-*`, `card`, `eyebrow`, `grid-pattern`, `text-shimmer`), no `tailwind.config` |
| Fonts | `next/font/google` Inter (`--font-sans`) + Poppins (`--font-display`) |
| Motion | `motion` v14 (`motion/react`): `Reveal`, `CountUp`, `RotatingWord`, `DrawLine`, `ScrollProgress`, `Marquee`, page `template.tsx` fade; `MotionConfig reducedMotion="user"` + CSS reduced-motion rule |
| Icons | `lucide-react` |
| Pages | `/`, `/about`, `/services`, `/industries`, `/industries/[slug]` (8), `/courses`, `/courses/[slug]`, `/employers`, `/job-seekers`, `/faq`, `/contact`, `/privacy-policy`, `/terms`, `not-found`, `sitemap.ts`, `robots.ts`, `icon.png` |
| Content/data | `src/lib/site.ts` (brand, 2 branches with hours, nav, services, hiring models, process, FAQs), `src/data/industries.ts`, `src/data/courses.ts`, `src/data/partners.ts` (sample big-brand logos — marked "confirm before going live") |
| Forms | At last commit: `ContactForm` (client) builds a WhatsApp or `mailto:` message — nothing stored or emailed server-side. **Work in progress (uncommitted, appeared while this guide was written):** a Resend-backed Server Action `src/app/actions/enquiry.ts` with resume upload, wired into a rewritten `ContactForm`, plus `StatsBand.tsx` — see global rule 6 in Part 3 |
| Not present | Jobs board, apply/resume upload, employer enquiry persistence, testimonials, JSON-LD, social links, analytics, OG image (uses logo), canonical URLs, `.env` handling, validation library |

## 2.2 Feature parity matrix

| Competitor feature | Your status | Action |
|---|---|---|
| Sticky header + mobile menu | ✅ Better (top bar, dropdowns, scroll progress) | Add "Jobs" entry + "Find Jobs / Hire Talent" CTAs (Phase 2) |
| Dual-CTA hero | ✅ (Hire Talent / Explore Courses) | Add candidate CTA + job search bar + WhatsApp (Phase 3) |
| Animated counters | ✅ SSR-safe `CountUp` | Centralise stats, support `5,000+` formatting (Phase 4) |
| About/feature cards, services grid | ✅ `IconCard`, `SectionHeading` | Keep |
| Job categories with counts | ❌ (industries grid without counts) | Category grid with **live** counts linking to `/jobs?category=` (Phase 5) |
| Candidate + employer process | ✅ one process (home) + employer process | Accessible "For Candidates / For Employers" tabs (Phase 6) |
| Why choose us | ✅ | Keep |
| Testimonials carousel | ❌ | Build `Testimonials` (Phase 7) |
| CTA band | ✅ `CtaBand` | Add optional WhatsApp button (Phase 8) |
| WhatsApp | ✅ floating button | Page-aware prefilled message + tracking (Phase 9) |
| Forms | ⚠️ client-only WhatsApp/mailto | Server Actions + validation + email + storage (Phase 10) |
| Jobs listing/detail/apply | ❌ | Build (Phase 11) |
| Employers page with enquiry | ⚠️ page exists, no form | Add `EmployerEnquiryForm` (Phase 12) |
| Contact + map | ✅ `BranchCard` with map | Swap form to server-backed version (Phase 13) |
| SEO schema | ❌ | JSON-LD helpers, sitemap for jobs, OG image, canonicals (Phase 14) |
| Accessibility / performance / analytics | ⚠️ good base | Phases 15–17 |

## 2.3 Architecture decisions (recommended)

- **Content as typed TypeScript first.** Jobs, testimonials and stats live in `src/data/*.ts` like your industries/courses. Pages stay statically generated and fast. When you post jobs frequently, move to a headless CMS or a database (Supabase/Neon Postgres) behind the same `src/lib/jobs.ts` functions so pages don't change.
- **Forms = Server Actions + Zod + `useActionState`** (the pattern in `node_modules/next/dist/docs/01-app/02-guides/forms.md`). Server validates everything again; client shows field errors and a pending state; WhatsApp stays as a secondary "chat instead" option.
- **Lead delivery:** email via **Resend** (simple API, supports attachments for resumes) **plus** a log to Google Sheets (Apps Script webhook) or a DB table so no lead is lost if email fails. Use `after()` from `next/server` for the non-critical logging.
- **Spam protection:** hidden honeypot field + minimum time-to-submit check; add Cloudflare Turnstile if spam appears.
- **Resume uploads:** Server Actions cap request bodies at **1 MB by default** — set `serverActions.bodySizeLimit` (e.g. `'6mb'`) in `next.config.ts` and validate type (PDF/DOC/DOCX) and size (≤5 MB) on the server.
- **Job search/filter:** URL-driven (`/jobs?q=&category=&location=&type=&exp=`) using `next/form` `<Form action="/jobs">` (GET, client-side navigation, prefetch). Shareable, crawlable, works without JS.
- **Structured data:** a tiny `JsonLd` component that renders `<script type="application/ld+json">` with `<` escaped (per `docs/01-app/02-guides/json-ld.md`).

## 2.4 Next.js 16 conventions this project must follow

These differ from older tutorials — the guide in Part 3 already uses them:

- `params` and `searchParams` are **Promises** — `const { slug } = await props.params`. Type pages with the global helper `PageProps<"/jobs/[slug]">` (already used in your industries/courses pages) and layouts with `LayoutProps<"/">`.
- `next/image`: `priority` is **deprecated** → use `loading="eager"` and/or `fetchPriority="high"` (or `preload`). Your dev log currently warns that `/logo.png` is the LCP and should use `loading="eager"`.
- `middleware.ts` is **deprecated and renamed to `proxy.ts`** (only needed if you add redirects/rate limiting at the edge).
- Metadata: `export const metadata` / `generateMetadata`, `metadataBase` is already set in `layout.tsx`; use `alternates.canonical`.
- `next/form` `<Form>` for GET search forms; plain `<form action={serverAction}>` for mutations.
- Server Actions: 1 MB body limit, built-in Origin/Host CSRF check; validate input in every action.
- Without `cacheComponents` enabled (your config), route segment `export const revalidate = <seconds>` still works.
- `next dev` writes to `.next/dev`, so you can run `npm run build` while the dev server is running.
- Tailwind v4: add tokens inside `@theme { … }` and reusable classes with `@utility` in `globals.css` — there is no `tailwind.config.js`.

## 2.5 New/changed files at a glance

```
src/
  app/
    jobs/
      page.tsx                    # listing + search/filters (searchParams)
      [slug]/page.tsx             # job detail + JobPosting JSON-LD + apply form
      [slug]/opengraph-image.tsx  # optional per-job OG image
    actions/
      leads.ts                    # "use server": submitApplication, submitEmployerEnquiry, submitContact
    opengraph-image.tsx           # site-wide OG image
    layout.tsx                    # + Organization/WebSite JSON-LD, analytics
    sitemap.ts                    # + /jobs and live job URLs
  components/
    JsonLd.tsx
    jobs/JobCard.tsx, jobs/JobFilters.tsx, jobs/JobCategoryGrid.tsx, jobs/JobSearchBar.tsx
    forms/ApplyForm.tsx, forms/EmployerEnquiryForm.tsx, forms/FormField.tsx, forms/SubmitButton.tsx
    Testimonials.tsx
    ProcessTabs.tsx
    StatsBar.tsx
  data/
    jobs.ts, testimonials.ts, stats.ts
  lib/
    jobs.ts            # query/filter helpers
    leads/schemas.ts   # Zod schemas + shared types
    leads/notify.ts    # Resend email
    leads/store.ts     # Google Sheets / DB logging
    seo.ts             # JSON-LD builders
    analytics.ts       # trackEvent wrapper
.env.example
```

---

# Part 3 — Prompt for Cursor AI (copy everything below this line)

> **How to use:** paste one phase at a time into Cursor Agent (or the whole thing if you prefer), let it finish, review the diff, run the checks, then continue. Phases are ordered so each builds on the last.

---

## 🧭 Global instructions for the AI

You are working in a **Next.js 16.3.8 App Router** project (React 19.2, TypeScript, Tailwind CSS v4, `motion` v14, `lucide-react`) at the repo root. The brand is **HireMatrix HR Consultancy** with branches in **Coimbatore and Tiruchirappalli, Tamil Nadu**.

Rules:
1. **Before writing code, read `AGENTS.md` and the relevant docs in `node_modules/next/dist/docs/`** (forms: `01-app/02-guides/forms.md`, server actions: `01-app/02-guides/server-actions.md`, JSON-LD: `01-app/02-guides/json-ld.md`, metadata: `01-app/01-getting-started/14-metadata-and-og-images.md`, `next/form`: `01-app/03-api-reference/02-components/form.md`, images: `01-app/03-api-reference/02-components/image.md`, page props: `01-app/03-api-reference/03-file-conventions/page.md`). This Next.js version has breaking changes: `params`/`searchParams` are Promises, `PageProps<"/route">` is a global type helper, `next/image` `priority` is deprecated, `middleware` is renamed to `proxy`.
2. **Reuse what exists** — `src/lib/site.ts` (`site`, `navLinks`, `whatsappLink`, `Item`), `SectionHeading`, `IconCard`, `PageHero`, `CtaBand`, `Reveal`, `CountUp`, `Marquee`, `BranchCard`, `FaqList`, Tailwind utilities `container-x`, `btn-primary`, `btn-light`, `btn-outline`, `btn-outline-light`, `card`, `eyebrow`, brand colours `brand-50…brand-950`, fonts `font-sans`/`font-display`. Match the existing code style (Server Components by default, `"use client"` only where needed, data in `src/data`, no comments that restate code).
3. **Do not copy text, images, logos or testimonials from any competitor.** Write original copy for Coimbatore/Trichy. Use clearly marked sample data (`// SAMPLE — replace before launch`) where real data is needed.
4. Keep everything accessible (labels, focus states, `aria-*`, reduced motion) and responsive (mobile-first, test at 360px, 768px, 1280px).
5. After each phase run `npm run lint`, `npx tsc --noEmit` and `npm run build` (safe while `npm run dev` is running). Fix all errors before moving on. Do not stop the running dev server.
6. **Check for work that already exists before creating anything.** While this guide was being written, the following were added to the repo (uncommitted at the time): `resend` dependency, `src/app/actions/enquiry.ts` (Server Action with Resend email + resume upload, `EnquiryState` type), a rewritten `ContactForm.tsx` that uses it, `src/components/StatsBand.tsx`, `.env.example` with `RESEND_API_KEY` / `ENQUIRY_TO_EMAIL` / `ENQUIRY_FROM_EMAIL`, `!.env.example` in `.gitignore`, and `experimental.serverActions.bodySizeLimit: "5mb"` in `next.config.ts`. If these exist when you run a phase, **extend them instead of creating parallel versions**: reuse the existing env var names, put new actions next to `enquiry.ts` (or generalise it), reuse `StatsBand` where this guide says `StatsBar`, and keep a single resume-validation helper and size limit.

---

## Phase 0 — Dependencies & environment

**Tasks**
1. Install: `npm i zod resend` (Zod v4: use `z.flattenError(error).fieldErrors` instead of the deprecated `error.flatten()`).
2. Optional analytics: `npm i @next/third-parties@latest`.
3. Create `.env.example` (and tell me to create `.env.local`) with:
   ```bash
   RESEND_API_KEY=
   LEADS_FROM_EMAIL="HireMatrix Website <leads@yourdomain.in>"
   LEADS_TO_EMAIL=hirematrix.info@gmail.com
   SHEETS_WEBHOOK_URL=            # optional Google Apps Script web-app URL
   NEXT_PUBLIC_GA_ID=             # optional, e.g. G-XXXXXXX
   ```
   `.gitignore` currently ignores `.env*`; add the line `!.env.example` so the example is committed.
4. In `next.config.ts` keep the existing `images.remotePatterns` and add:
   ```ts
   experimental: { serverActions: { bodySizeLimit: "6mb" } },
   ```
   First check `node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/serverActions.md` for the exact key location in this version and follow it.
5. Add security headers via `headers()` in `next.config.ts`: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, and set `poweredByHeader: false`.

**Acceptance criteria:** build passes; `.env.example` committed; no secrets in git.

---

## Phase 1 — Design tokens (extend, don't replace)

The theme in `src/app/globals.css` already defines the brand palette, fonts, animations and button/card utilities. Only extend it:

1. Inside `@theme`, add semantic tokens:
   ```css
   --color-whatsapp: #25d366;
   --color-whatsapp-dark: #128c7e;
   --color-success-50: #ecfdf5;
   --color-success-600: #059669;
   --color-danger-50: #fef2f2;
   --color-danger-600: #dc2626;
   --animate-marquee-slow: marquee 60s linear infinite;
   ```
2. Add utilities with `@utility`:
   - `btn-whatsapp` → `@apply btn bg-whatsapp text-white hover:bg-whatsapp-dark;`
   - `input` → the input classes currently inlined in `ContactForm` (`w-full rounded-xl border border-slate-200 …`) plus `aria-[invalid=true]:border-danger-600`.
   - `chip` → small rounded pill used for job tags.
3. Replace the hard-coded `bg-[#25D366]` in `WhatsAppButton.tsx` with `bg-whatsapp`.

**Acceptance criteria:** no visual regressions; new utilities usable in TSX; `bg-whatsapp`, `btn-whatsapp`, `input`, `chip` compile.

---

## Phase 2 — Header & footer enhancements

`Header.tsx` (sticky, top bar, dropdowns, animated mobile menu) and `Footer.tsx` already exist.

1. In `src/lib/site.ts`:
   - Add `social` to `site`:
     ```ts
     social: {
       instagram: "", // fill real URLs; omit empty ones in UI
       linkedin: "",
       facebook: "",
       youtube: "",
     },
     ```
   - Change the "Job Seekers" nav item to have children: `{ href: "/jobs", label: "Browse Jobs" }`, `{ href: "/job-seekers#register", label: "Submit Your Resume" }`, `{ href: "/courses", label: "Job-Oriented Courses" }`.
2. `Header.tsx`: replace the single "Get in Touch" desktop CTA with two buttons — `Find Jobs` (`/jobs`, `btn-outline`) and `Hire Talent` (`/employers#enquiry`, `btn-primary`). Mirror both in the mobile menu. Keep `aria-expanded`/`aria-label` behaviour.
3. `Footer.tsx`: render social icon links from `site.social` (skip empty values; each link gets `aria-label="HireMatrix on Instagram"` etc., `target="_blank" rel="noopener noreferrer"`). Add "Browse Jobs" to the company links.
4. `Logo.tsx`: fix the dev-server LCP warning — replace `preload` with `loading="eager"` and `fetchPriority="high"` for the header instance only (add an `eager?: boolean` prop; footer instance stays lazy).

**Acceptance criteria:** keyboard can reach every nav item and dropdown; mobile menu closes on navigation; no empty/dead social links; no LCP warning in the dev console.

---

## Phase 3 — Hero upgrade (home)

Edit the hero in `src/app/page.tsx` (keep the blobs, grid pattern, `RotatingWord`, hero cards).

1. Buttons: `Find Jobs` → `/jobs` (`btn-light`), `Hire Talent` → `/employers#enquiry` (`btn-outline-light`), `WhatsApp Us` → `whatsappLink("Hi HireMatrix, I'd like to know more.")` (`btn-whatsapp`, opens in new tab).
2. Add `src/components/jobs/JobSearchBar.tsx` (Server Component) using `import Form from "next/form"` with `action="/jobs"`:
   - text input `name="q"` (label "Job title or skill", visually hidden label OK),
   - select `name="location"` with options from the distinct job locations in `src/data/jobs.ts` (Phase 11) plus "Any location",
   - submit button "Search jobs".
   Place it under the hero paragraph on desktop and mobile.
3. Add a trust line under the buttons, e.g. "Free registration for job seekers · Mon–Sat walk-ins at 2 branches" (only claims that are true).

**Acceptance criteria:** submitting the search navigates to `/jobs?q=…&location=…` without full reload; works with JS disabled (falls back to normal GET); hero still has exactly one `<h1>`.

---

## Phase 4 — Stats bar (SSR-safe counters)

1. Create `src/data/stats.ts`:
   ```ts
   export type Stat = {
     label: string;
     value: number;        // real, defensible number
     suffix?: string;      // "+", "%", " days"
     prefix?: string;
     note?: string;        // e.g. "since 2023" — shown as small text / title
   };

   // SAMPLE — replace with verified figures before launch
   export const stats: Stat[] = [
     { label: "Candidates placed", value: 1200, suffix: "+" },
     { label: "Hiring partners", value: 80, suffix: "+" },
     { label: "Industries served", value: 8 },
     { label: "Branches in Tamil Nadu", value: 2 },
   ];
   ```
   Derive values from data where possible (e.g. `industries.length`, `site.branches.length`) like the existing `highlights` array.
2. Update `src/components/motion/CountUp.tsx` to also accept `value: number` + `suffix`/`prefix`, format with `new Intl.NumberFormat("en-IN")` (so 5000 → "5,000"), and keep the current behaviour: **the server-rendered HTML contains the final number**, animation only starts when in view, and nothing animates when the user prefers reduced motion (check `useReducedMotion()` from `motion/react`). Keep backward compatibility with the existing string usage on the home page.
3. Create `src/components/StatsBar.tsx` (Server Component) that renders `stats` with `CountUp`, in the same visual style as the current home "Highlights" strip; use it on `/` and `/employers`.

**Acceptance criteria:** `curl -s localhost:3000 | grep "1,200"` finds the number (no "0" in HTML); screen readers read the final value; reduced motion shows static numbers.

---

## Phase 5 — Job category grid with live counts

1. Create `src/components/jobs/JobCategoryGrid.tsx` (Server Component). For each industry in `src/data/industries.ts`, show icon, name and **live count** `getOpenJobs().filter(j => j.industry === ind.slug).length` from `src/lib/jobs.ts` (Phase 11). Each card is a `Link` to `/jobs?category=<slug>`. Show "View roles" instead of a count when 0 open jobs.
2. On the home page, replace or augment the "Industries" grid with this component (keep the existing hover styles). Also use it at the top of `/jobs` when no filters are applied.

**Acceptance criteria:** counts always match the jobs list; every card is a keyboard-focusable link; zero-state is handled.

---

## Phase 6 — Process tabs (candidates vs employers)

1. In `src/lib/site.ts` add `candidateSteps` and `employerSteps` (5 steps each, `{ icon, title, text }`, original copy). Keep the existing `processSteps` export working.
2. Create `src/components/ProcessTabs.tsx` (`"use client"`): an accessible tab widget — `role="tablist"`, two `role="tab"` buttons ("For Job Seekers", "For Employers") with `aria-selected`, `aria-controls`, roving `tabIndex`, Left/Right arrow keys; `role="tabpanel"` showing numbered steps connected by a line on desktop (reuse the `DrawLine` look), 2 columns on tablet, stacked on mobile. Animate panel change with `AnimatePresence` (respects `MotionConfig reducedMotion="user"`).
3. Replace the home "How It Works" step grid with `<ProcessTabs />` (keep the dark `bg-brand-900` section styling).

**Acceptance criteria:** fully operable by keyboard; both panels' content is in the server HTML (render both panels, hide the inactive one with `hidden`) so it's crawlable.

---

## Phase 7 — Testimonials carousel

1. Create `src/data/testimonials.ts`:
   ```ts
   export type Testimonial = {
     id: string;
     name: string;
     role: string;               // "Java Developer" / "HR Manager"
     company?: string;
     audience: "candidate" | "employer";
     branch?: "Coimbatore" | "Tiruchirappalli";
     quote: string;              // max ~220 chars
     rating?: 1 | 2 | 3 | 4 | 5;
     photo?: string;             // /public/testimonials/<id>.webp, square
     date: string;               // ISO "2026-08-14"
   };
   // SAMPLE — use only real, written-consent testimonials before launch
   export const testimonials: Testimonial[] = [ /* 6–10 entries */ ];
   ```
2. Create `src/components/Testimonials.tsx`:
   - Section with `SectionHeading` (eyebrow "Success Stories").
   - Optional filter chips "All / Job Seekers / Employers" (client).
   - Infinite marquee built like `motion/Marquee.tsx`: duplicate the **full** list once, mark the clone `aria-hidden="true"` and `inert`, translate −50% so the loop is seamless, pause on hover **and** on `:focus-within`, add a visible Pause/Play button (WCAG 2.2.2), and disable animation under `prefers-reduced-motion` (fall back to a horizontally scrollable `snap-x` row).
   - Card: quote in `<blockquote>`, `<figcaption>` with name/role/company/branch, star rating with `aria-label="Rated 5 out of 5"`, `next/image` photo or an initial avatar.
3. Add the section to `/`, `/job-seekers` (candidate testimonials only) and `/employers` (employer testimonials only).
4. **Do not** add `Review`/`AggregateRating` JSON-LD for these (Google ignores self-serving reviews on your own business). Instead add a "Read our Google reviews" link once the Google Business Profile exists.

**Acceptance criteria:** loop has no visible jump; pause works with mouse, keyboard and button; duplicates are not announced by screen readers; Lighthouse accessibility ≥ 95 on the home page.

---

## Phase 8 — CTA band

`src/components/CtaBand.tsx` exists. Add an optional `whatsapp?: { label: string; message: string }` prop that renders a `btn-whatsapp` link using `whatsappLink(message)`, and an optional `secondary?: { href; label }` link. Use it on `/jobs` ("Can't find your role? Send us your resume on WhatsApp").

**Acceptance criteria:** existing usages unchanged; new props typed.

---

## Phase 9 — Floating WhatsApp button

`src/components/WhatsAppButton.tsx` exists (fixed bottom-right, pulse ring).

1. Make it page-aware: convert to a small client component using `usePathname()` and pick a prefilled message:
   - `/jobs/[slug]` → "Hi HireMatrix, I'm interested in the <job title> role (<job id>)." (pass job title via a `data-` attribute on the page or a lookup in `src/lib/jobs.ts` by slug)
   - `/employers*` → "Hi HireMatrix, I'd like to discuss a hiring requirement."
   - `/courses*` → "Hi HireMatrix, I'd like details about your courses."
   - default → "Hi HireMatrix, I'd like to know more."
   Build URLs with `whatsappLink()` (`https://wa.me/<number>?text=<encoded>`).
2. Replace the generic `MessageCircle` icon with an inline WhatsApp SVG glyph (lucide has no brand icons), keep `aria-label="Chat with us on WhatsApp"`.
3. Fire `trackEvent("whatsapp_click", { page })` (Phase 17).
4. Ensure it doesn't cover form submit buttons on mobile (add `pb-24` to the last section on pages with sticky forms, or hide the button while a form input is focused).

**Acceptance criteria:** correct prefilled text per route; opens in a new tab; has a visible focus ring.

---

## Phase 10 — Forms with server-side handling

### 10.1 Shared schemas & types — `src/lib/leads/schemas.ts`
```ts
import { z } from "zod";

const indianMobile = z
  .string()
  .trim()
  .regex(/^(?:\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/, "Enter a valid 10-digit mobile number");

const optionalEmail = z.union([z.literal(""), z.email("Enter a valid email")]);

export const candidateSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  phone: indianMobile,
  email: optionalEmail,
  jobSlug: z.string().optional(),            // set on job detail pages
  industry: z.string().optional(),
  experience: z.enum(["fresher", "0-2", "2-5", "5-10", "10+"]),
  location: z.string().trim().max(60).optional(),
  message: z.string().trim().max(1000).optional(),
  consent: z.literal("on", { error: "Please accept the privacy policy" }),
});

export const employerSchema = z.object({
  company: z.string().trim().min(2).max(120),
  contactName: z.string().trim().min(2).max(80),
  phone: indianMobile,
  email: z.email("Enter a valid work email"),
  roles: z.string().trim().min(2, "Which roles are you hiring for?").max(300),
  openings: z.coerce.number().int().min(1).max(5000).optional(),
  location: z.string().trim().max(80).optional(),
  message: z.string().trim().max(2000).optional(),
  consent: z.literal("on", { error: "Please accept the privacy policy" }),
});

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: indianMobile,
  email: optionalEmail,
  type: z.string(),
  branch: z.string(),
  domain: z.string().optional(),
  message: z.string().trim().max(2000).optional(),
});

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[] | undefined>;
  values?: Record<string, string>;   // echo back so inputs keep values after an error
};
export const initialFormState: FormState = { status: "idle" };

export const RESUME_MAX_BYTES = 5 * 1024 * 1024;
export const RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
```
(Verify the Zod v4 API in `node_modules/zod` — e.g. `z.email()`, `{ error: … }` — and adjust if needed.)

### 10.2 Delivery — `src/lib/leads/notify.ts` and `src/lib/leads/store.ts`
- `notify.ts` (server-only: add `import "server-only";` after `npm i server-only`): `sendLeadEmail({ subject, text, replyTo?, attachment? })` using `new Resend(process.env.RESEND_API_KEY)` and `resend.emails.send({ from: process.env.LEADS_FROM_EMAIL, to: process.env.LEADS_TO_EMAIL, replyTo, subject, text, attachments })`. Attachment = `{ filename, content: Buffer.from(await file.arrayBuffer()) }`. If `RESEND_API_KEY` is missing in development, `console.info` the payload instead of throwing.
- `store.ts`: `logLead(kind: "candidate" | "employer" | "contact", data: Record<string, unknown>)` → `POST` JSON to `SHEETS_WEBHOOK_URL` if set (no-op otherwise). Leave a typed interface so it can later write to a database instead.

### 10.3 Server Actions — `src/app/actions/leads.ts`
```ts
"use server";
import { after } from "next/server";
// import schemas, notify, store

export async function submitApplication(_prev: FormState, formData: FormData): Promise<FormState> { … }
export async function submitEmployerEnquiry(_prev: FormState, formData: FormData): Promise<FormState> { … }
export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> { … }
```
Each action must:
1. **Spam checks:** reject silently (return success) if hidden honeypot `company_website` is filled, or if hidden `startedAt` timestamp is < 3 s ago.
2. Build `values` from `formData` (strings only) and `safeParse` with the schema; on failure return `{ status: "error", fieldErrors: z.flattenError(result.error).fieldErrors, values }`.
3. For applications: read `formData.get("resume")`; if it is a `File` with size > 0, validate `RESUME_TYPES` and `RESUME_MAX_BYTES`; if `jobSlug` is present, look the job up with `getJobBySlug()` and reject unknown/closed jobs.
4. `await sendLeadEmail(...)` (subject e.g. `New application: <name> → <job title>`; plain-text body listing all fields + page URL).
5. `after(() => logLead(...))` for non-blocking logging.
6. Return `{ status: "success", message: "Thanks! Our team will call you within one working day." }`. On unexpected errors return a friendly error with the WhatsApp fallback, never the raw error.

### 10.4 Client components — `src/components/forms/`
- `FormField.tsx`: label + control slot + error text; wires `id`, `aria-invalid`, `aria-describedby`.
- `SubmitButton.tsx`: uses `useFormStatus()` from `react-dom`, shows spinner + "Sending…", `disabled` while pending.
- `ApplyForm.tsx` (`"use client"`): `const [state, formAction, pending] = useActionState(submitApplication, initialFormState)`. Fields: name, phone (`type="tel" inputMode="tel" autoComplete="tel"`), email, experience (select), industry (select from `industries`), preferred location, resume (`type="file" accept=".pdf,.doc,.docx"`), message, consent checkbox linking to `/privacy-policy`, hidden `jobSlug` (prop), hidden honeypot (visually hidden, `tabIndex={-1}`, `autoComplete="off"`), hidden `startedAt` (`Date.now()` captured once with `useState`). Use `defaultValue={state.values?.x}` so values survive an error (React 19 resets forms after an action). Show a success panel replacing the form on success, with "Chat on WhatsApp" secondary action. Error summary in an `aria-live="polite"` region; move focus to the first invalid field.
- `EmployerEnquiryForm.tsx`: same pattern with `employerSchema` fields.
- Refactor `ContactForm.tsx` to submit via `submitContact` as the primary button ("Send message"), keeping "Send via WhatsApp" as a secondary button that uses the current `buildMessage` logic.

### 10.5 Placement
- `/job-seekers`: add `<section id="register">` with `ApplyForm` (general application, no `jobSlug`).
- `/jobs/[slug]`: `ApplyForm jobSlug={job.slug}` (Phase 11).
- `/employers`: `<section id="enquiry">` with `EmployerEnquiryForm` (Phase 12).
- `/contact`: refactored `ContactForm`.

**Acceptance criteria**
- Submitting with JS disabled still works (progressive enhancement) and shows server errors.
- Invalid phone/email show inline errors; values are kept.
- A 6 MB or `.exe` upload is rejected with a clear message; a 2 MB PDF arrives as an email attachment.
- Honeypot-filled submissions never send email.
- No secrets reach the client bundle (`RESEND_API_KEY` only used in server files).

---

## Phase 11 — Jobs board

### 11.1 Data — `src/data/jobs.ts`
```ts
import type { Industry } from "./industries";

export type EmploymentType = "FULL_TIME" | "PART_TIME" | "CONTRACTOR" | "TEMPORARY" | "INTERN";
export type WorkMode = "On-site" | "Hybrid" | "Remote";

export type Job = {
  id: string;                     // "HM-CBE-0142" — shown to candidates and in WhatsApp text
  slug: string;                   // "java-developer-coimbatore-hm-cbe-0142"
  title: string;
  industry: Industry["slug"];     // reuse existing industry slugs
  company: { name: string; confidential?: boolean; logo?: string; website?: string };
  location: { city: string; locality?: string; region: "Tamil Nadu" | string; postalCode?: string };
  workMode: WorkMode;
  employmentType: EmploymentType;
  experience: { minYears: number; maxYears?: number };     // 0 = fresher
  salary?: { min: number; max?: number; unit: "YEAR" | "MONTH"; disclosed: boolean }; // INR
  openings?: number;
  skills: string[];
  summary: string;                // 1–2 sentences for cards
  description: string[];          // paragraphs
  responsibilities: string[];
  requirements: string[];
  benefits?: string[];
  postedAt: string;               // ISO date
  validThrough: string;           // ISO date — job hides automatically after this
  featured?: boolean;
  branch: "Coimbatore" | "Tiruchirappalli";
};

// SAMPLE — replace with real, current openings before launch
export const jobs: Job[] = [ /* 8–12 varied sample jobs across industries, cities, fresher + experienced */ ];
```

### 11.2 Query helpers — `src/lib/jobs.ts`
```ts
export type JobFilters = { q?: string; category?: string; location?: string; type?: EmploymentType; exp?: "fresher" | "1-3" | "3-5" | "5+" ; page?: number };

export function isOpen(job: Job, now = new Date()): boolean;
export function getOpenJobs(): Job[];                    // sorted: featured first, then newest
export function getJobBySlug(slug: string): Job | undefined;
export function filterJobs(filters: JobFilters): { items: Job[]; total: number; page: number; pageCount: number };
export function getJobLocations(): string[];
export function parseJobFilters(sp: Record<string, string | string[] | undefined>): JobFilters; // validate/sanitise every param
export function formatSalary(job: Job): string;          // "₹4–6 LPA" / "Not disclosed"
export function formatExperience(job: Job): string;      // "Fresher" / "2–4 yrs"
```
Search should match title, skills, company (unless confidential) and industry name, case-insensitive. Page size 10.

### 11.3 Listing — `src/app/jobs/page.tsx`
```tsx
export async function generateMetadata(props: PageProps<"/jobs">): Promise<Metadata> { … }
export default async function JobsPage(props: PageProps<"/jobs">) {
  const filters = parseJobFilters(await props.searchParams);
  const { items, total, page, pageCount } = filterJobs(filters);
  …
}
```
- `PageHero` (eyebrow "Jobs", H1 "Current openings in Coimbatore & Trichy").
- `JobFilters` (Server Component using `next/form` `<Form action="/jobs">`): keyword, category (industries), location, employment type, experience; "Search" + "Clear" link. Optional tiny client enhancer that calls `form.requestSubmit()` on select change.
- Results header: "Showing 1–10 of 23 jobs" with `aria-live="polite"`; active filter chips each with a remove link.
- `JobCard` list: title (`<h2>` link to detail), company (or "Confidential company"), location + work mode, experience, salary, skills chips, posted "3 days ago", "Featured" badge, "View & Apply" button.
- Empty state: message + "Send your resume" (`/job-seekers#register`) + WhatsApp CTA.
- Pagination with `rel="prev"/"next"` links (`?page=2`).
- When no filters: show `JobCategoryGrid` above results.
- Metadata: title "Jobs in Coimbatore & Trichy"; when any filter or page>1 is present set `alternates: { canonical: "/jobs" }` and `robots: { index: false, follow: true }` to avoid thin duplicate pages.

### 11.4 Detail — `src/app/jobs/[slug]/page.tsx`
```tsx
export const revalidate = 3600; // re-check validThrough hourly
export function generateStaticParams() { return getOpenJobs().map((j) => ({ slug: j.slug })); }
export async function generateMetadata(props: PageProps<"/jobs/[slug]">): Promise<Metadata> { … }
export default async function JobPage(props: PageProps<"/jobs/[slug]">) {
  const { slug } = await props.params;
  const job = getJobBySlug(slug);
  if (!job) notFound();
  …
}
```
- Breadcrumbs via `PageHero` `crumbs` (Home › Jobs › Title).
- Two-column layout: left = summary facts grid (location, mode, type, experience, salary, openings, posted, job ID), description, responsibilities, requirements, benefits, skills; right = sticky card with `ApplyForm jobSlug={job.slug}`, "Apply on WhatsApp" (`whatsappLink("Hi HireMatrix, I'd like to apply for <title> (<id>)")`), call button for the job's branch, and share links (copy link, WhatsApp share `https://wa.me/?text=<encoded url>`).
- If the job is past `validThrough`: show a "This position has closed" banner, hide the apply form, **omit JobPosting JSON-LD**, and list 3 similar open jobs.
- "Similar jobs" (same industry) at the bottom.
- `JobPosting` JSON-LD via `JsonLd` (Phase 14) built by `jobPostingJsonLd(job)`.
- Metadata: title `"<Title> job in <City>"`, description from `summary`, `alternates.canonical: /jobs/<slug>`.

### 11.5 Wiring
- Add `/jobs` + all open job URLs to `sitemap.ts` with `lastModified: job.postedAt`.
- Home: "Latest jobs" strip showing 3–6 `featured`/newest jobs with "View all jobs".
- Industry detail pages (`/industries/[slug]`): show open jobs for that industry with a link to `/jobs?category=<slug>`.

**Acceptance criteria**
- `/jobs?q=java&location=Coimbatore` filters server-side; the URL is shareable; back/forward works.
- Expired jobs disappear from listing/sitemap automatically (within the revalidate window) and their pages show the closed banner.
- Every job page passes Google's Rich Results Test for `JobPosting` (only for real jobs that accept applications on the page).
- Lighthouse SEO = 100 on `/jobs` and a job page.

---

## Phase 12 — Employers page

In `src/app/employers/page.tsx`:
1. Hero buttons: `Start Hiring` → `#enquiry` and a `tel:` button for the nearest branch.
2. Add `StatsBar` under the hero (employer-relevant stats only: e.g. average days to shortlist, roles filled, repeat clients — only real figures).
3. Add employer `Testimonials`.
4. Add `<section id="enquiry" className="scroll-mt-32">` with `EmployerEnquiryForm`, a "We respond within one working day" promise (only if true), and a side panel listing what happens next (3 bullets).
5. Point the bottom `CtaBand` primary button to `#enquiry`.

**Acceptance criteria:** `/employers#enquiry` scrolls the form below the sticky header; form works end to end.

---

## Phase 13 — Contact page

1. Swap in the refactored server-backed `ContactForm` (Phase 10).
2. `BranchCard` already embeds a Google Map per branch — keep it; make sure each iframe has a descriptive `title`, `loading="lazy"`, `referrerPolicy="no-referrer-when-downgrade"`, and a street-level zoom (`&z=16`).
3. Add per-branch `EmploymentAgency` JSON-LD (Phase 14).
4. Add a short FAQ (3 items from `faqGroups`) with `FaqList`.

**Acceptance criteria:** submitting the form emails the team; both maps lazy-load; phone numbers use `tel:+91…`.

---

## Phase 14 — SEO: metadata, JSON-LD, sitemap, OG images

1. **`src/components/JsonLd.tsx`**
   ```tsx
   export default function JsonLd({ data }: { data: object | object[] }) {
     return (
       <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
       />
     );
   }
   ```
2. **`src/lib/seo.ts`** — builders returning plain objects:
   - `organizationJsonLd()` → `Organization` with `@id: ${site.url}/#organization`, `name: site.name`, `url`, `logo` (absolute URL), `email`, `telephone`, `sameAs` (non-empty `site.social` values only).
   - `websiteJsonLd()` → `WebSite` with `publisher: { "@id": …#organization }` (no SearchAction).
   - `branchJsonLd(branch)` → `EmploymentAgency` with `@id: ${site.url}/#branch-<city>`, `name: "HireMatrix HR Consultancy – <City>"`, `parentOrganization`, `address` (`PostalAddress` with `streetAddress`, `addressLocality`, `addressRegion: "Tamil Nadu"`, `postalCode`, `addressCountry: "IN"`), `telephone`, `openingHoursSpecification` (Mon–Sat, `opens`/`closes` from `branch.opensAt/closesAt`), `geo` if known, `url`, `image`. **Extend the `Branch` data in `site.ts` with structured `address` fields** (street, locality, postalCode) and optional `geo: { lat, lng }` so this doesn't parse strings.
   - `jobPostingJsonLd(job)` → `JobPosting` with `title`, `description` (HTML string built from description/responsibilities/requirements), `identifier` (`PropertyValue` with `name: site.shortName`, `value: job.id`), `datePosted`, `validThrough`, `employmentType`, `hiringOrganization` (real employer name when it can be disclosed; otherwise your organisation), `jobLocation` (`Place` → `PostalAddress`), `baseSalary` (`MonetaryAmount`, `currency: "INR"`, `QuantitativeValue` min/max/unitText) only when `salary.disclosed`, `experienceRequirements` (`OccupationalExperienceRequirements`, `monthsOfExperience`), `directApply: true`, `applicantLocationRequirements`/`jobLocationType: "TELECOMMUTE"` only for remote jobs.
   - `breadcrumbJsonLd(items)` → `BreadcrumbList`.
   - `faqJsonLd(items)` → `FAQPage` — only on pages where those exact Q&As are visible (Google shows FAQ rich results only for a few authoritative sites now, but it's still valid markup).
   - `courseJsonLd(course)` → `Course` with `provider` = organisation (for `/courses/[slug]`).
3. Render: Organization + WebSite in `src/app/layout.tsx` (inside `<body>`); both branches on `/` and `/contact`; JobPosting + Breadcrumb on job pages; Breadcrumb on industry/course detail pages; FAQPage on `/faq`.
4. **Metadata:** add `alternates: { canonical: "<path>" }` to every page's `metadata`/`generateMetadata` (relative paths work because `metadataBase` is set). Keep titles city-specific, e.g. "Placement Consultancy in Coimbatore & Trichy". Set `openGraph.type: "website"` and `locale: "en_IN"` (already).
5. **OG images:** create `src/app/opengraph-image.tsx` with `ImageResponse` from `next/og` (1200×630, navy brand background, logo, tagline, cities) and `src/app/jobs/[slug]/opengraph-image.tsx` showing job title, location, experience. Remove the hard-coded `images: ["/logo-full.png"]` from root `openGraph` once the generated image works. Read `01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md` first.
6. **Sitemap:** in `sitemap.ts` add `/jobs` and open job URLs, add `lastModified` for every entry (use a build date constant for static pages). Keep `robots.ts` as is.
7. **Local SEO (off-site):** create/verify Google Business Profiles for both branches with identical NAP (name, address, phone) to the site; add the profile links to `site.social`/`sameAs`.

**Acceptance criteria:** Rich Results Test passes for home (Organization/LocalBusiness), a job page (JobPosting) and `/faq`; every page has exactly one canonical; sharing a job link on WhatsApp shows the job-specific preview image.

---

## Phase 15 — Accessibility pass

- One `<h1>` per page; eyebrows are `<span>`/`<p>`, not headings; heading levels never skip.
- Every image has meaningful `alt` (decorative ones `alt=""`); logo alt "HireMatrix HR Consultancy".
- Every interactive element has a visible focus style (`focus-visible:outline-*` already in `btn`); check custom cards/links too.
- Forms: `<label>` for every control, `aria-invalid`, `aria-describedby` for errors, error summary with focus management, `autoComplete` attributes (`name`, `tel`, `email`).
- Motion: everything respects reduced motion (already global) — verify the new marquee and tabs.
- Colour contrast ≥ 4.5:1 for text (check `text-brand-200` on `bg-brand-800/900`).
- Add a "Skip to content" link at the top of `layout.tsx` targeting `<main id="main">`.

**Acceptance criteria:** Lighthouse Accessibility ≥ 95 on `/`, `/jobs`, a job page, `/employers`, `/contact`; axe DevTools shows no serious issues.

---

## Phase 16 — Performance pass

- Keep pages as Server Components; only interactive leaves are `"use client"`.
- Images via `next/image` with explicit `width`/`height` or `fill` + `sizes`; above-the-fold image `loading="eager"` + `fetchPriority="high"`; everything else lazy.
- Replace remote Wikimedia partner logos with locally stored, **permission-confirmed** SVGs in `/public/partners/` (also fixes the "width or height modified" console warnings — add `style={{ width: "auto" }}` / `h-8 w-auto` consistently).
- `next/font` already self-hosts fonts — keep to the two families and only the weights used.
- Lazy-load heavy below-the-fold client components with `next/dynamic` if bundle grows.
- Map iframes: `loading="lazy"`; consider a static map image with "Open in Google Maps" link on mobile.

**Acceptance criteria:** Lighthouse Performance ≥ 90 (mobile) on `/` and `/jobs`; LCP < 2.5 s, CLS < 0.1 on a mid-range phone profile.

---

## Phase 17 — Analytics & conversion tracking

1. `src/lib/analytics.ts`: `trackEvent(name: string, params?: Record<string, string | number>)` that calls `sendGAEvent("event", name, params)` from `@next/third-parties/google` when `NEXT_PUBLIC_GA_ID` is set (no-op otherwise).
2. In `layout.tsx` render `<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />` only when the env var exists (read `01-app/02-guides/third-party-libraries.md` first).
3. Track: `generate_lead` (form success, param `form: "apply" | "employer" | "contact"`, `job_id`), `whatsapp_click` (`page`), `phone_click` (`branch`), `job_search` (`q`, `category`, `location`), `view_job` (`job_id`).
4. Add a simple cookie/analytics notice if required by your privacy policy, and update `/privacy-policy` to describe form data, resume handling, retention and analytics (DPDP Act 2023).

**Acceptance criteria:** events visible in GA4 DebugView; nothing loads when `NEXT_PUBLIC_GA_ID` is empty.

---

## Phase 18 — Final QA checklist

- [ ] `npm run lint`, `npx tsc --noEmit`, `npm run build` all pass.
- [ ] Mobile (360px), tablet (768px), desktop (1280px+) visually checked on every new section.
- [ ] Every CTA leads somewhere real (no `#` links); every form tested end to end (email received, sheet row logged).
- [ ] All `// SAMPLE` data (stats, jobs, testimonials, partners) replaced with real, verified content — or the section hidden.
- [ ] Partner logos used only with permission; numbers are defensible.
- [ ] Phone numbers in `tel:+91…` format; NAP identical across header, footer, contact page, schema and Google Business Profile.
- [ ] Sitemap contains only real pages and open jobs; robots allows crawling; Search Console property verified and sitemap submitted.
- [ ] Rich Results Test passes for Organization/EmploymentAgency and JobPosting.
- [ ] Privacy policy updated; consent checkbox on all lead forms.
- [ ] Dependencies up to date (`npm outdated`), no secrets committed.
