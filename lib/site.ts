export type HeroMetric = {
  label: string;
  value: string;
};

export type Track = {
  id: string;
  label: string;
  src: string;
  description: string;
};

export type CaseStudy = {
  id: string;
  name: string;
  sector: string;
  summary: string;
  result: string;
  image: string;
  video?: string;
  link: string;
  metrics: HeroMetric[];
  wins: string[];
};

export type MethodStep = {
  id: string;
  title: string;
  summary: string;
  tension: string;
  inputs: string[];
  outputs: string[];
  mediaSrc: string;
  poster: string;
};

export type SurfaceScene = {
  id: string;
  name: string;
  medium: string;
  summary: string;
  previewType: "video" | "image";
  src: string;
  poster?: string;
  notes: string[];
};

export type OfferScenario = {
  id: string;
  name: string;
  summary: string;
  deliverables: string[];
  timeline: string;
  fit: string;
};

export type PlaybookEntry = {
  id: string;
  category: "trust" | "motion" | "proof" | "conversion";
  title: string;
  summary: string;
  signals: string[];
  apply: string;
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/method", label: "Method" },
  { href: "/work", label: "Work" },
  { href: "/surfaces", label: "Surfaces" },
  { href: "/operator", label: "Operator" },
  { href: "/library", label: "Library" },
  { href: "/contact", label: "Contact" }
];

export const audioTracks: Track[] = [
  {
    id: "operator-brief",
    label: "Operator brief",
    src: "/media/operator-brief-v4.mp3",
    description:
      "A tighter opening read on how Sharpe Systems reshapes the first touch, the proof order, and the buyer mood."
  },
  {
    id: "systems-note",
    label: "Systems note",
    src: "/media/operator-systems-v4.mp3",
    description:
      "A second narration focused on why the front end should behave like a guided operating lane instead of a brochure."
  },
  {
    id: "signal-bed",
    label: "Signal bed",
    src: "/media/score-bed-v2.mp3",
    description:
      "A restrained cinematic score bed for reading the flagship in a slower, more premium rhythm."
  }
];

export const stockVideos = {
  heroLoop: "/media/hero-loop.mp4",
  boardroom: "/media/stock/boardroom-meeting.mp4",
  laptop: "/media/stock/laptop-focus.mp4",
  tunnel: "/media/stock/tunnel-motion.mp4",
  commandGrid: "/media/derived/command-grid.mp4",
  proofCascade: "/media/derived/proof-cascade.mp4",
  signalPulse: "/media/derived/signal-pulse.mp4",
  portraitSweep: "/media/derived/portrait-sweep.mp4",
  authorityOrbit: "/media/derived/authority-orbit.mp4",
  boardroomNocturne: "/media/derived/boardroom-nocturne.mp4",
  commandFloorLoop: "/media/derived/command-floor-loop.mp4"
};

export const stockStills = {
  heroLoop: "/media/hero-poster.svg",
  boardroom: "/media/stock/boardroom-meeting-still.jpg",
  laptop: "/media/stock/laptop-focus-still.jpg",
  tunnel: "/media/stock/tunnel-motion-still.jpg",
  commandGrid: "/media/stock/boardroom-meeting-still.jpg",
  proofCascade: "/media/stock/tunnel-motion-still.jpg",
  signalPulse: "/media/stock/laptop-focus-still.jpg",
  portraitSweep: "/media/fusion/signal-portrait.png",
  authorityOrbit: "/media/fusion/authority-bridge.png",
  boardroomNocturne: "/media/fusion/boardroom-night.png",
  commandFloorLoop: "/media/fusion/command-floor.png"
};

export const fusionImages = {
  commandFloor: "/media/fusion/command-floor.png",
  signalPortrait: "/media/fusion/signal-portrait.png",
  authorityBridge: "/media/fusion/authority-bridge.png",
  boardroomNight: "/media/fusion/boardroom-night.png"
};

export const homeMetrics: HeroMetric[] = [
  { label: "Authority read", value: "Sharper in the first 6 seconds" },
  { label: "Proof rhythm", value: "Placed before hesitation settles in" },
  { label: "Lead path", value: "Guided into the right next move" }
];

export const workMetrics: HeroMetric[] = [
  { label: "Proof surface", value: "Live work instead of empty praise" },
  { label: "Commercial shift", value: "Trust, clarity, and perceived value" },
  { label: "View mode", value: "Before a call, not after an explanation" }
];

export const methodMetrics: HeroMetric[] = [
  { label: "Research", value: "Category before color" },
  { label: "Media", value: "Every asset has a job" },
  { label: "Follow-through", value: "Qualification lives inside the page" }
];

export const operatorMetrics: HeroMetric[] = [
  { label: "Lane fit", value: "Match the build to the pressure point" },
  { label: "Scope", value: "Smallest move that changes perception" },
  { label: "Retention", value: "Keep the system useful after launch" }
];

export const libraryMetrics: HeroMetric[] = [
  { label: "Doctrine", value: "Repeat the principle, not the page" },
  { label: "Psychology", value: "Control attention before details" },
  { label: "Reusability", value: "Flexible enough for new categories" }
];

export const contactMetrics: HeroMetric[] = [
  { label: "Diagnosis", value: "Name the real leak first" },
  { label: "Recommendation", value: "Get the right lane, not a vague call" },
  { label: "Follow-up", value: "Leave with a usable next-step summary" }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "tree-service",
    name: "Tree Service Premium Rebuild",
    sector: "Local service",
    summary:
      "A weaker local-service surface was rebuilt into something calmer, more selective, and immediately more expensive-feeling.",
    result:
      "The page moved from basic utility to a premium local authority read with stronger hierarchy and better trust pacing.",
    image: "/proof/tree-service-proof.png",
    video: stockVideos.commandGrid,
    link: "https://what-about-bob-tree-service-premium.vercel.app/",
    metrics: [
      { label: "Read", value: "Selective instead of generic" },
      { label: "Trust", value: "Cleaner first-screen confidence" },
      { label: "Progression", value: "Better route into action" }
    ],
    wins: [
      "Raised the price-perception without cluttering the offer",
      "Created a more deliberate buyer rhythm",
      "Made proof feel visible instead of tucked away"
    ]
  },
  {
    id: "authority-cinema",
    name: "Authority Cinema Build",
    sector: "Consulting / premium service",
    summary:
      "A flat authority page was reworked into a darker, motion-led premium surface with stronger pacing and a calmer read.",
    result:
      "The front end gained more command, better negative space, and a more cinematic proof sequence.",
    image: "/proof/premium-engine-proof.png",
    video: stockVideos.proofCascade,
    link: "https://authority-cinema-agency-flagship-edpm2mqpp.vercel.app/",
    metrics: [
      { label: "Motion", value: "Layered without becoming noisy" },
      { label: "Hierarchy", value: "More obvious where attention belongs" },
      { label: "Mood", value: "Premium instead of pitch-heavy" }
    ],
    wins: [
      "Made the hero feel authored rather than assembled",
      "Let proof land before the hard ask",
      "Built a repeatable high-authority visual system"
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate Authority Pass",
    sector: "Real estate",
    summary:
      "A weaker real-estate presence was reframed into something calmer, clearer, and easier to trust for high-intent buyers.",
    result:
      "The page moved toward a premium listing environment instead of a generic real-estate template read.",
    image: "/proof/realty-proof.png",
    video: stockVideos.signalPulse,
    link: "https://godwyn-realty-mockup-2026-03-17.vercel.app/",
    metrics: [
      { label: "Clarity", value: "Offer and intent feel cleaner" },
      { label: "Status", value: "More composed premium signals" },
      { label: "Story", value: "Less brochure, more guided read" }
    ],
    wins: [
      "Improved taste perception immediately",
      "Reduced visual drag in the first scroll",
      "Made the surface feel more trustworthy for premium buyers"
    ]
  }
];

export const methodSteps: MethodStep[] = [
  {
    id: "read",
    title: "Read the category",
    summary:
      "Audit the site, the buyer hesitation, the visual sameness, and the places where trust is being lost before the offer is understood.",
    tension: "Most surfaces try to style over a category problem instead of naming it.",
    inputs: ["Current site and socials", "Category comparison", "Trust leaks", "Buyer hesitation"],
    outputs: ["Research framing", "Psychology notes", "Proof opportunities"],
    mediaSrc: stockVideos.commandGrid,
    poster: stockStills.commandGrid
  },
  {
    id: "frame",
    title: "Frame the story",
    summary:
      "Decide what the first screen should make a qualified buyer feel, what to withhold, and what proof needs to appear before the ask.",
    tension: "A premium page loses power when the story opens too fast or says too much too early.",
    inputs: ["Market read", "Offer pressure", "Desired tone", "Trust order"],
    outputs: ["Hero structure", "Section architecture", "CTA path"],
    mediaSrc: stockVideos.signalPulse,
    poster: stockStills.signalPulse
  },
  {
    id: "build-media",
    title: "Build the media system",
    summary:
      "Create or compose the stills, loops, voice, and sound so the surface feels commissioned and commercially intentional.",
    tension: "Media becomes decorative when it is not tied to authority, proof, or pacing.",
    inputs: ["Prompt board", "Motion direction", "Visual hierarchy", "Voice cadence"],
    outputs: ["Hero media", "Section loops", "Audio layer"],
    mediaSrc: stockVideos.portraitSweep,
    poster: stockStills.portraitSweep
  },
  {
    id: "install",
    title: "Install the path",
    summary:
      "Wire the page to diagnosis, qualification, summaries, and next steps so it behaves like software instead of just showing a portfolio.",
    tension: "Without follow-through, even a premium page still leaks qualified attention.",
    inputs: ["Offer fit", "Qualification logic", "Delivery path", "Action rules"],
    outputs: ["Functional routes", "Lane recommendation", "Follow-up draft"],
    mediaSrc: stockVideos.proofCascade,
    poster: stockStills.proofCascade
  }
];

export const surfaceScenes: SurfaceScene[] = [
  {
    id: "command-floor",
    name: "Command floor",
    medium: "Custom still",
    summary:
      "A denser visual for operator-grade systems, dashboards, and service environments that need more gravity than the average SaaS page.",
    previewType: "image",
    src: fusionImages.commandFloor,
    notes: [
      "Best when the build needs more command-room authority",
      "Pairs well with minimal copy and sharper metric cards",
      "Lets the rest of the page stay sparse without feeling empty"
    ]
  },
  {
    id: "authority-bridge",
    name: "Authority bridge",
    medium: "Custom still",
    summary:
      "A cleaner abstract frame for pages that need more futuristic polish without losing seriousness.",
    previewType: "image",
    src: fusionImages.authorityBridge,
    notes: [
      "Good for strategy, method, and doctrine sections",
      "Works as a premium divider between more literal visuals",
      "Keeps the page feeling authored without being loud"
    ]
  },
  {
    id: "signal-pulse",
    name: "Signal pulse",
    medium: "Derived loop",
    summary:
      "A fresh motion loop built for section backgrounds and command-strip moments where stills would flatten the rhythm.",
    previewType: "video",
    src: stockVideos.signalPulse,
    poster: stockStills.signalPulse,
    notes: [
      "Use where the scroll needs a stronger pulse",
      "Carries energy without taking over the copy",
      "Best for operator or proof transitions"
    ]
  },
  {
    id: "proof-cascade",
    name: "Proof cascade",
    medium: "Derived loop",
    summary:
      "A proof-focused motion layer for case-study sections, capability bands, and any place where results need more tension.",
    previewType: "video",
    src: stockVideos.proofCascade,
    poster: stockStills.proofCascade,
    notes: [
      "Turns static proof cards into a more cinematic section",
      "Useful behind stats, transitions, and featured work",
      "Keeps the page moving while the copy stays controlled"
    ]
  }
];

export const offerScenarios: OfferScenario[] = [
  {
    id: "signal-audit",
    name: "Signal Audit",
    summary:
      "A clear read on what is muting trust, margin, or buyer movement right now and what should be fixed first.",
    deliverables: ["Trust leak map", "Priority board", "Rebuild recommendation"],
    timeline: "Fast diagnostic sprint",
    fit: "When the current surface feels wrong but the scope is still unclear"
  },
  {
    id: "authority-rebuild",
    name: "Authority Rebuild",
    summary:
      "A sharper front-end experience for businesses that look weaker, cheaper, or less organized than they really are.",
    deliverables: ["New page architecture", "Fresh media direction", "Qualification path"],
    timeline: "Focused multi-page rebuild",
    fit: "When message, proof, and premium feel all need to rise together"
  },
  {
    id: "flagship-system",
    name: "Flagship System",
    summary:
      "A full digital environment with media, proof, qualification, and follow-through built as one commercial surface.",
    deliverables: ["Full flagship build", "Operator-grade media system", "Follow-through logic"],
    timeline: "Deep premium build lane",
    fit: "When the front end needs to act like a real operating layer"
  }
];

export const playbookEntries: PlaybookEntry[] = [
  {
    id: "trust-velocity",
    category: "trust",
    title: "Trust before detail",
    summary:
      "Premium buyers decide if the business feels composed before they decide if they want to read the whole offer.",
    signals: ["Sharper hierarchy", "Calmer spacing", "Less desperate CTA posture"],
    apply: "Use this on the first screen and again right before the main proof band."
  },
  {
    id: "motion-rhythm",
    category: "motion",
    title: "Motion should guide, not entertain",
    summary:
      "The best movement slows the read, frames the eye, and increases the sense that the page was commissioned.",
    signals: ["Longer loop cadence", "Lower-noise transitions", "Directional reveals"],
    apply: "Use ambient motion on scene changes and keep detail loops inside the sections that need tension."
  },
  {
    id: "proof-staging",
    category: "proof",
    title: "Proof needs stagecraft",
    summary:
      "Results land harder when the reader sees the upgrade, understands the category problem, and feels the commercial delta.",
    signals: ["Before/after framing", "Outcome language", "Visible shipped surfaces"],
    apply: "Use this on work pages, case panels, and featured-quote alternatives."
  },
  {
    id: "conversion-shaping",
    category: "conversion",
    title: "Qualification after conviction",
    summary:
      "Do not route the strongest leads into a dead generic form. Guide them into the right lane once they already believe.",
    signals: ["Lane recommendation", "Specific next step", "Follow-up copy generated in context"],
    apply: "Use this on contact flows and operator pages."
  }
];
