import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Articles written on the portfolio itself: one markdown file per post in
// content/blog/<slug>.md. The file name becomes the URL: /blog/<slug>.
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  tldr?: string;
  readingMinutes: number;
  html: string;
};

function readPost(file: string): Post & { draft: boolean } {
  const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, file), "utf8"));
  return {
    slug: file.replace(/\.md$/, ""),
    title: data.title,
    date: String(data.date instanceof Date ? data.date.toISOString().slice(0, 10) : data.date),
    description: data.description ?? "",
    tags: data.tags ?? [],
    tldr: data.tldr,
    draft: Boolean(data.draft),
    readingMinutes: Math.max(1, Math.round(content.split(/\s+/).length / 220)),
    html: marked.parse(content, { async: false }) as string
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    // files starting with "_" (like _template.md) are never published
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map(readPost)
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
