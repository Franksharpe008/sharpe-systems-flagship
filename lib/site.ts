export const navItems = [
  { href: "/", label: "Home" },
  { href: "/method", label: "Method" },
  { href: "/work", label: "Work" },
  { href: "/surfaces", label: "Surfaces" },
  { href: "/operator", label: "Operator" },
  { href: "/library", label: "Library" },
  { href: "/contact", label: "Contact" }
];

export const audioTracks = [
  {
    id: "operator-brief",
    label: "Operator brief",
    src: "/media/operator-brief-v3.mp3",
    description: "A fresh opening brief on what Sharpe Systems is built to change inside a business front."
  },
  {
    id: "handoff-note",
    label: "Handoff note",
    src: "/media/operator-handoff-v3.mp3",
    description: "A second pass focused on what happens after the site earns attention."
  },
  {
    id: "signal-bed",
    label: "Signal bed",
    src: "/media/score-bed-v2.mp3",
    description: "A fresh cinematic score bed for reading the flagship like a deliberate premium environment."
  }
];

export const stockVideos = {
  boardroom: "/media/stock/boardroom-meeting.mp4",
  laptop: "/media/stock/laptop-focus.mp4",
  tunnel: "/media/stock/tunnel-motion.mp4"
};

export const stockStills = {
  boardroom: "/media/stock/boardroom-meeting-still.jpg",
  laptop: "/media/stock/laptop-focus-still.jpg",
  tunnel: "/media/stock/tunnel-motion-still.jpg"
};

export const fusionImages = {
  commandFloor: "/media/fusion/command-floor.png",
  signalPortrait: stockStills.laptop,
  authorityBridge: stockStills.tunnel,
  boardroomNight: stockStills.boardroom
};
