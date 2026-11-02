import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Ones Ben Rhaime, full-stack product engineer: frontend, backend, databases, data migration, AI and SEO.",
  alternates: { canonical: "/blog" }
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="section wrap blog">
      <Link className="bracket" href="/">
        ← back home
      </Link>
      <div className="section-heading">
        <span className="eyebrow">blog</span>
        <h1 className="blog-title">Things I wrote down</h1>
      </div>
      <ol className="rows">
        {posts.length === 0 && (
          <li className="row">
            <span className="row-index">00</span>
            <div className="row-main">
              <h3>First article in progress</h3>
              <p>drafting it now. check back soon.</p>
            </div>
          </li>
        )}
        {posts.map((post, index) => (
          <li className="row" key={post.slug}>
            <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
            <div className="row-main">
              <h3>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.description}</p>
            </div>
            <div className="row-side">
              <time className="mono muted" dateTime={post.date}>
                {post.date}
              </time>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
