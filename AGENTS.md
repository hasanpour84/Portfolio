# AGENTS.md

## Project

This is Mohsen Hasanpour's personal portfolio: a production-quality site for a Senior Product Designer. It should communicate product thinking, enterprise experience, design-system expertise, and credible case studies. It must feel authored—not like a generic template or AI-generated landing page.

## Working approach

- Inspect the project, existing components, tokens, utilities, and routes before changing code.
- Reuse established patterns and make the smallest change that solves the request.
- Keep scope focused: do not refactor, redesign, replace working code, or add files/dependencies without a clear need.
- Use the existing stack (Next.js, React, TypeScript, App Router, and configured styling/linting tools). Do not migrate technologies without approval.
- Prefer simple, readable code; avoid premature abstractions, duplicate markup/data, magic values, `any`, and `@ts-ignore`.

## Architecture

- Build focused, reusable components; prefer composition over large, conditional components.
- Keep content separate from presentation. Store projects and case studies as structured data and keep a single source of truth for repeated content.
- Prefer Server Components. Add `"use client"` only to the smallest component that genuinely needs browser APIs, state, or event-heavy interactivity.
- Use design tokens and consistent spacing, typography, colors, radii, shadows, breakpoints, and transitions. Avoid arbitrary values.

## Design and content

- Prioritize clarity, hierarchy, typography, simplicity, responsiveness, and purposeful interaction over decorative effects.
- Avoid generic AI-style visuals: gratuitous gradients, glowing blobs, glassmorphism, 3D objects, oversized rounded cards, and meaningless motion.
- Design mobile intentionally. Prevent unintended horizontal overflow and check navigation, grids, images, type, cards, and touch targets at common mobile through wide-desktop widths.
- Use motion sparingly for feedback and continuity; prefer `opacity` and `transform`, and respect `prefers-reduced-motion`.
- Use optimized, appropriately sized images (WebP/AVIF/SVG where suitable), meaningful alt text, stable dimensions, and lazy loading below the fold. Use Next Image when appropriate.
- Case studies should explain decisions, constraints, process, outcome, and learnings—not only show screens.
- Never invent clients, metrics, research, results, titles, quotes, testimonials, or other evidence. Use a clear placeholder or ask when essential information is missing.

## Accessibility, SEO, and performance

- Use semantic HTML, native buttons/links, logical heading order, visible focus states, labels, sufficient contrast, and full keyboard access.
- Do not make important content hover-only; ensure interactive controls have clear default, hover, focus, active, disabled, loading, success, and error states where relevant.
- Add appropriate metadata to public pages: title, description, canonical URL, and Open Graph data. Maintain readable, stable lowercase URLs; provide sitemap and robots files where applicable.
- Treat performance as a design requirement: minimize client JavaScript, dependencies, unnecessary requests, layout shift, and heavy animation libraries.
- Keep secrets out of client code and source control. Use environment variables; expose only intentional browser values with `NEXT_PUBLIC_`.

## Forms and resilience

- Forms need labels, validation, useful errors, loading/success/failure states, and duplicate-submit prevention.
- Handle missing content, invalid routes, 404s, failed requests, and unexpected errors gracefully. Use loading states only when real loading occurs.

## Validation and delivery

- After meaningful changes, run the relevant checks: lint, tests (if present), and a production build.
- Verify responsive behavior, keyboard navigation, console errors, broken links, image loading, metadata, and affected interactions before claiming completion.
- Keep commits focused and descriptive when commits are requested.

## Final principle

Choose the solution with less code, JavaScript, dependencies, and complexity when quality is equal. The result must remain distinctive, accessible, fast, maintainable, and faithful to the existing visual language.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
