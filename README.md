# HireMatrix HR Consultancy

Website for [HireMatrix](https://hirematrixcareers.in) — placement and recruitment services in Coimbatore and Tiruchirappalli, Tamil Nadu, connecting job seekers with genuine opportunities and companies with suitable candidates.

Built with Next.js (App Router), Tailwind CSS v4, Motion and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form email

The contact form submits to a Server Action (`src/app/actions/enquiry.ts`) that emails each enquiry (with an optional resume attachment) via [Resend](https://resend.com). Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL` (the sender domain must be verified in Resend). Without these, the form shows an error and visitors can still use the WhatsApp button.

Outcome figures shown on the home, about and employers pages live in `outcomeStats` in `src/lib/site.ts`.

## Project structure

```
public/           Logo and static images
src/app/          Pages (home, about, services, industries, employers, job seekers, contact, FAQ, legal)
src/components/   Reusable UI and animation components
src/data/         Industries and hiring partners
src/lib/site.ts   Business details, branches, navigation, services, process, values and FAQs
```

Old `/courses` URLs and retired industry pages are redirected in `next.config.ts`.

Most content (contact details, branches, services, industries, partners) is edited in `src/lib/site.ts` and `src/data/`.

## Production build

```bash
npm run build
npm start
```
