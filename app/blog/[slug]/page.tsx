import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "../../../lib/blog";
import SwapLabel from "../../components/SwapLabel";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://ones-benrhaime.vercel.app";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["Ones Ben Rhaime"],
      tags: post.tags
    }
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    keywords: post.tags.join(", "),
    url: `${siteUrl}/blog/${post.slug}`,
    author: { "@id": `${siteUrl}/#person`, "@type": "Person", name: "Ones Ben Rhaime", url: siteUrl }
  };

  const posts = getAllPosts();
  const next = posts[posts.findIndex((p) => p.slug === post.slug) + 1];

  return (
    <main className="section wrap blog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link className="bracket" href="/blog">
        <SwapLabel>all articles</SwapLabel>
      </Link>

      <article className="post">
        <header className="post-head">
          <p className="eyebrow">
            <time dateTime={post.date}>{post.date}</time> · {post.readingMinutes} min read
          </p>
          <h1 className="blog-title">{post.title}</h1>
          {post.description && <p className="post-lede">{post.description}</p>}
          {post.tags.length > 0 && (
            <ul className="tag-row" aria-label="Topics">
              {post.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </header>

        {post.tldr && (
          <aside className="post-tldr">
            <span className="mono">tl;dr</span>
            <p>{post.tldr}</p>
          </aside>
        )}

        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />

        <p className="post-sign">— ones</p>

        <footer className="post-author">
          <div>
            <span className="mono muted">written by</span>
            <h2>Ones Ben Rhaime</h2>
            <p>
              full-stack product engineer. i build ai-powered products end to end:
              react, nestjs, postgres, and the boring parts that keep them alive.
            </p>
          </div>
          <div className="post-author-cta">
            <Link className="bracket bracket--solid" href="/#contact">
              <SwapLabel>hire ones</SwapLabel>
            </Link>
            <a
              className="bracket"
              href="https://www.linkedin.com/in/ones-ben-rhaime/"
              target="_blank"
              rel="noreferrer"
            >
              <SwapLabel>linkedin</SwapLabel>
            </a>
          </div>
        </footer>

        {next && (
          <Link className="post-next" href={`/blog/${next.slug}`}>
            <span className="mono muted">next read →</span>
            <strong>{next.title}</strong>
          </Link>
        )}
      </article>
    </main>
  );
}
