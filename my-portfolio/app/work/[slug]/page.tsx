import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "../../components/Gallery";
import { caseStudies } from "../../data";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.tagline,
    alternates: { canonical: `/work/${study.slug}` }
  };
}

export default function CaseStudyPage({ params }: Params) {
  const index = caseStudies.findIndex((c) => c.slug === params.slug);
  if (index === -1) notFound();
  const study = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  const sections: { title: string; items: string[] }[] = [
    { title: "What I built", items: study.built },
    { title: "Architecture", items: study.architecture },
    ...(study.guardrails ? [{ title: "Guardrails", items: study.guardrails }] : []),
    { title: "Results", items: study.results }
  ];

  return (
    <article className="study shell">
      <p className="crumb">
        <Link href="/#work">~/work</Link>/<span className="accent">{study.slug}</span>
      </p>

      <header className="study__head">
        <p className="study__status">
          <span className={`dot dot--${study.status}`} aria-hidden="true" />
          {study.status} · {study.period}
        </p>
        <h1>{study.title}</h1>
        <p className="study__tagline">{study.tagline}</p>
        {study.liveUrl && (
          <a className="btn" href={study.liveUrl} target="_blank" rel="noreferrer">
            open live site ↗
          </a>
        )}
      </header>

      <dl className="study__meta">
        <div>
          <dt>role</dt>
          <dd>{study.role}</dd>
        </div>
        <div>
          <dt>stack</dt>
          <dd>
            <ul className="tags">
              {study.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      <section className="study__block">
        <h2>
          <span className="section__index">00</span> The problem
        </h2>
        <p className="study__problem">{study.problem}</p>
      </section>

      {study.shots.length > 0 && (
        <section className="study__block">
          <Gallery title={study.title} shots={study.shots} />
        </section>
      )}

      {sections.map((s, i) => (
        <section className="study__block" key={s.title}>
          <h2>
            <span className="section__index">{String(i + 1).padStart(2, "0")}</span> {s.title}
          </h2>
          <ul className="bullets">
            {s.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      <nav className="study__next" aria-label="Next case study">
        <Link href={`/work/${next.slug}`}>
          <span className="muted">next →</span> {next.title}
        </Link>
      </nav>
    </article>
  );
}
