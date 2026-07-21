export type Zone = {
  id: string;
  emoji: string;
  label: string;
  blurb: string;
  position: { x: number; y: number };
};

export const zones: Zone[] = [
  { id: "top", emoji: "📍", label: "Entry Point", blurb: "Where it all begins", position: { x: 50, y: 61 } },
  { id: "about", emoji: "☕", label: "Coffee Shop", blurb: "Get to know Ones", position: { x: 87, y: 14 } },
  { id: "ailab", emoji: "🚀", label: "AI Lab", blurb: "What I build", position: { x: 26, y: 12 } },
  { id: "work", emoji: "🏰", label: "Product Castle", blurb: "The flagship product", position: { x: 50, y: 24 } },
  { id: "district", emoji: "⚛️", label: "React District", blurb: "More builds", position: { x: 20, y: 37 } },
  { id: "services", emoji: "🛠️", label: "Workshop", blurb: "How I can help", position: { x: 72, y: 66 } },
  { id: "experience", emoji: "🚉", label: "Metro Line", blurb: "Career timeline", position: { x: 50, y: 76 } },
  { id: "academy", emoji: "🎓", label: "Academy", blurb: "Skills & achievements", position: { x: 24, y: 85 } },
  { id: "github", emoji: "💻", label: "GitHub Outpost", blurb: "Open source signal", position: { x: 78, y: 92 } },
  { id: "contact", emoji: "📡", label: "Signal", blurb: "Let's connect", position: { x: 80, y: 41 } }
];
