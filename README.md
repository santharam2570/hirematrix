# HireMatrix HR Consultancy

Website for [HireMatrix](https://hirematrixcareers.in) — recruitment, talent acquisition and job-oriented career training in Coimbatore and Tiruchirappalli, Tamil Nadu.

Built with Next.js (App Router), Tailwind CSS v4, Motion and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
public/           Logo and static images
src/app/          Pages (home, about, services, industries, courses, employers, job seekers, contact, FAQ, legal)
src/components/   Reusable UI and animation components
src/data/         Courses, industries and hiring partners
src/lib/site.ts   Business details, branches, navigation and FAQs
```

Most content (contact details, branches, courses, industries, partners) is edited in `src/lib/site.ts` and `src/data/`.

## Production build

```bash
npm run build
npm start
```
