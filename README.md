# Sharpe Systems · Business Discovery & Interactive Recommendations

A multi-page business interface that turns a visitor's needs into a recommended engagement path.

**[Open the working site](https://sharpe-systems-flagship.vercel.app/)** · [More work by Frank D. Sharpe](https://github.com/Franksharpe008/frank-sharpe-portfolio)

## Problem → implementation

A generic contact page leaves the visitor to explain everything from scratch. This project connects positioning, work examples, and structured discovery. Its diagnostic uses the visitor's service need, urgency, budget band, and bottleneck to recommend a lane and produce a follow-up summary.

## Explore the workflow

1. Browse **Method**, **Work**, and **Surfaces** to see the connected page structure.
2. Open **Contact** and use fictional details to try the diagnostic.
3. Compare the recommendation for a smaller exploratory need with an urgent full-system request.
4. Inspect the recommended focus, next step, delivery shape, and copyable follow-up text.

Recommendations are deterministic client-side rules, not an LLM judgment. The diagnostic displays its result locally; it does not send the form to a CRM, create a booking, or persist a lead on a server.

## Technical decisions

- **Next.js, React, and TypeScript** support a shared multi-page interface.
- `components/diagnostic.tsx` makes the routing criteria explicit and produces the summary.
- `components/offer-architect.tsx` changes a recommendation as the selected pressure, timing, and current surface change.
- `components/case-command.tsx` switches the displayed work example without leaving the page.
- Dedicated motion, video, and optional audio components support presentation continuity.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Run `npm run build` to compile and `npm run start` to serve the build. Use the lockfile and a compatible Node.js release.

Media-generation scripts are optional, environment-specific authoring tools. Ordinary local site development does not require generating new voice or video assets.

## What this demonstrates

Business workflow discovery, transparent decision rules, interface design, reusable components, and AI-assisted implementation directed by Frank D. Sharpe. Site copy and portfolio examples are not independent evidence of client revenue, conversion uplift, or production CRM deployment.
