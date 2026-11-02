// Articles published elsewhere (Medium, dev.to, LinkedIn, Hashnode...).
// Add a new entry here each time you publish; the blog section sorts by date
// and shows the latest ones. `date` is ISO (YYYY-MM-DD).
export type Article = {
  title: string;
  url: string;
  platform: string;
  date: string;
  excerpt?: string;
  tags?: string[];
};

export const articles: Article[] = [
  // {
  //   title: "Migrating a live EdTech database without downtime",
  //   url: "https://medium.com/@ones/...",
  //   platform: "Medium",
  //   date: "2026-11-15",
  //   excerpt: "what i learned moving primeprofs from one schema to another while students were using it.",
  //   tags: ["PostgreSQL", "Migration"]
  // }
];
