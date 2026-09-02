# PRD — Lokesh Shakthi "Career Universe" 3D Portfolio

## Original Problem Statement
Build a premium, futuristic, interactive 3D personal portfolio ("Career Universe") sourced strictly from the uploaded LinkedIn PDF. Dark cinematic design, 3D hero, scroll-driven career journey, 3D skill universe, project gallery, experience, education, contact form, floating glass nav, cinematic loader, recruiter-friendly, responsive, performant, no personal photo, no fabricated data. Deployable via Replit.

## User Personas
- Tech recruiters / hiring managers (primary — want fast executive summary via "Recruiter Mode")
- Engineering managers / CTOs exploring depth (projects, RCA work, stack)

## Architecture
- Frontend: React 19 + Tailwind + React Three Fiber (three 0.185, fiber 9, drei 10) + framer-motion + lenis smooth scroll
- Backend: FastAPI, MongoDB (motor), Resend-managed email via Emergent proxy (EMERGENT_EMAIL_KEY in backend/.env)
- Content: single source of truth at `/app/frontend/src/data/portfolio.js` (all PDF-derived)

## Implemented (2026-09-02)
- Cinematic loader with progress + skip
- 3D hero: neural core (icosahedron + orbit rings + nodes + stars), mouse parallax, masked line-by-line text reveal
- Editorial tech marquee
- About with story + stat cards (3+ years per user correction, 3 certifications)
- Scroll-driven Journey timeline (progress line, alternating 3D-tilt milestone cards)
- 3D Skill Universe canvas (5 clusters, 21 nodes, hover inspector panel); mobile chip-grid fallback
- Project gallery: 2 tilt cards + detail modal (Production Support, .NET Development & Reporting)
- Experience (3 roles, Accenture), Education (Jain University BTech x2), Certifications (3)
- Contact form → POST /api/contact → saves to Mongo `contact_messages` + emails lokeshshakthi1@gmail.com (verified: email_sent true)
- Recruiter Mode drawer (exec summary, core stack, experience, certifications, email/LinkedIn CTAs)
- SEO meta + OG tags; data-testid on all interactive elements; mobile low-power 3D (dpr/particles reduced)

## Backlog
- P0: none blocking
- P1: Downloadable resume PDF (need user-provided file); custom domain for Replit deploy
- P2: Ambient sound toggle (muted by default); blog/writing section; GitHub link if user provides one

## Next Tasks
- User to provide GitHub/live links if they want them shown
- Resume PDF upload for recruiter drawer download button
