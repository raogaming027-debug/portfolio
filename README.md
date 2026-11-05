# Chintan Brahmbhatt ºw^~)Þt Portfolio

A responsive creative portfolio built with Next.js App Router, TypeScript, Tailwind CSS, React Three Fiber, Drei, GSAP ScrollTrigger, Lenis, Framer Motion, and Lucide.

## Run locally

- Node.js 20.9 or newer
- `npm ci`
- `npm run dev` then open http://localhost:3000
- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Portfolio content

Edit the profile, verified employment history, education, skills, and sample concept studies in `src/data/portfolio.ts`. The project studies are explicitly labeled as concepts and are not represented as completed client work. No portrait was supplied, so the design uses original abstract 3D and monogram visuals instead of an unrelated person's photo.

## Resume

Add the original resume at `public/resume/Chintan-Brahmbhatt-CV.pdf`. The CV controls are disabled until that exact file is present. No fake or substitute resume is included. Rebuild after adding the PDF.

## Contact form

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to your real Formspree endpoint, then restart the dev server or rebuild. The form validates fields, prevents duplicate submissions, times out requests, and shows success only after an HTTP success response. Without a configured endpoint, it explains the required setup and keeps email contact available.
