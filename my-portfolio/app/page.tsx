import Link from "next/link";
import Gallery from "./components/Gallery";
import {
  achievements,
  archive,
  caseStudies,
  education,
  experience,
  profile,
  stack,
  type Status
} from "./data";

const statusLabel: Record<Status, string> = {
  live: "live",
  beta: "beta",
  running: "running",
  shipped: "shipped"
};

const principles = [
  { key: "human_approval", value: "required", note: "Agents propose. A person approves every action that touches the real world." },
  { key: "fabrication", value: "forbidden", note: "Every finding carries evidence from a real source — Search Console, GA4, the code." },
  { key: "spend", value: "capped", note: "Paid API calls need an approved request and hard per-run, daily and monthly limits." },
  { key: "production", value: "read_only", note: "No auto-deploy, no DNS or CMS writes. Fixes land as local edits or drafts." },
  { key: "evaluation", value: "per_agent", note: "Each agent has a spec, a prompt and an evaluation — and a QA step that can block." }
];

// Short fake hashes for the git-log look; stable between builds.
const hash = (i: number) => ((0x5a3f1 * (i + 7)) % 0xfffffff).toString(16).padStart(7, "0").slice(0, 7);

export default function Home() {
  const products = caseStudies.filter((c) => c.kind === "product");
  const agents = caseStudies.filter((c) => c.kind === "agents");

  return (
    <>
      <section className="hero shell">
        <div className="hero__copy">
          <p className="prompt">
            <span className="accent">~</span> $ whoami
          </p>
          <h1>
            {profile.name}
            <span className="hero__role">{profile.title}</span>
          </h1>
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__intro">{profile.intro}</p>
          <div className="actions">
            <a className="btn btn--primary" href="#work">
              ./view-work
            </a>
            <a className="btn" href={profile.cv} download>
              download cv.pdf
            </a>
          </div>
        </div>

        <div className="terminal" aria-label="System status">
          <div className="terminal__bar">
            <span className="terminal__dots" aria-hidden="true">
              <i /> <i /> <i />
            </span>
            <span>ones — status</span>
          </div>
          <div className="terminal__body">
            <p className="line" style={{ ["--d" as string]: 0 }}>
              <span className="accent">$</span> ones status --all
            </p>
            {caseStudies.map((c, i) => (
              <p className="line" style={{ ["--d" as string]: i + 1 }} key={c.slug}>
                <span className={`dot dot--${c.status}`} aria-hidden="true" />
                <span className="term-name">{c.slug}</span>
                <span className="muted">{statusLabel[c.status]}</span>
              </p>
            ))}
            <p className="line" style={{ ["--d" as string]: caseStudies.length + 1 }}>
              <span className="accent">$</span> <span className="cursor" aria-hidden="true" />
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="section shell">
        <header className="section__head">
          <span className="section__index">01</span>
          <h2>Products I build</h2>
          <p className="section__lead">Shipped and in-progress products. Open one for the full case study.</p>
        </header>
        <ProcessTable items={products} />
      </section>

      <section id="agents" className="section shell">
        <header className="section__head">
          <span className="section__index">02</span>
          <h2>AI agent systems</h2>
          <p className="section__lead">
            Agents that do real work on real sites — built so they can&apos;t invent data, overspend or touch production on their own.
          </p>
        </header>
        <ProcessTable items={agents} />

        <div className="config">
          <p className="config__title">
            <span className="muted"># </span>agents.config — the rules every system I build follows
          </p>
          <dl>
            {principles.map((p) => (
              <div className="config__row" key={p.key}>
                <dt>
                  {p.key}: <span className="accent">{p.value}</span>
                </dt>
                <dd>{p.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="archive" className="section shell">
        <header className="section__head">
          <span className="section__index">03</span>
          <h2>Earlier builds</h2>
          <p className="section__lead">Internships, school and personal projects that got me here.</p>
        </header>
        <div className="archive">
          {archive.map((p) => (
            <article className="card" key={p.title}>
              <div className="card__meta">
                <span>{p.context}</span>
                {p.period && <span>{p.period}</span>}
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tags">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {p.shots && <Gallery title={p.title} shots={p.shots} />}
              {(p.liveUrl || p.githubUrl) && (
                <div className="card__links">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer">
                      live ↗
                    </a>
                  )}
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer">
                      source ↗
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="log" className="section shell">
        <header className="section__head">
          <span className="section__index">04</span>
          <h2>Experience</h2>
          <p className="section__lead">
            <code>git log --career</code>
          </p>
        </header>
        <ol className="gitlog">
          {experience.map((e, i) => (
            <li key={e.org + e.period}>
              <span className="gitlog__hash">{hash(i)}</span>
              {i === 0 && <span className="gitlog__head">(HEAD → now)</span>}
              <div>
                <p className="gitlog__title">
                  {e.role} <span className="muted">@</span> {e.org}
                </p>
                <p className="gitlog__note">{e.note}</p>
              </div>
              <span className="gitlog__date">{e.period}</span>
            </li>
          ))}
        </ol>

        <div className="split">
          <div>
            <h3 className="subhead">Education</h3>
            <ul className="plain">
              {education.map((e) => (
                <li key={e.year}>
                  <span className="muted">{e.year}</span> {e.title} · {e.school}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="subhead">Awards</h3>
            <ul className="plain">
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="stack" className="section shell">
        <header className="section__head">
          <span className="section__index">05</span>
          <h2>Stack</h2>
          <p className="section__lead">What I use in production and in my agent work.</p>
        </header>
        <pre className="code" aria-label="Tech stack">
          <span className="muted">{"// stack.json"}</span>
          {"\n{\n"}
          {Object.entries(stack).map(([group, items], i, all) => (
            <span key={group}>
              {"  "}
              <span className="code__key">&quot;{group}&quot;</span>: [
              {items.map((item, j) => (
                <span key={item}>
                  <span className="code__str">&quot;{item}&quot;</span>
                  {j < items.length - 1 ? ", " : ""}
                </span>
              ))}
              ]{i < all.length - 1 ? "," : ""}
              {"\n"}
            </span>
          ))}
          {"}"}
        </pre>
      </section>

      <section id="contact" className="section shell contact">
        <header className="section__head">
          <span className="section__index">06</span>
          <h2>Let&apos;s build something</h2>
          <p className="section__lead">Open to full-stack and AI-product roles. Messages in English or French.</p>
        </header>
        <ul className="contact__list">
          <li>
            <span className="muted">mail</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span className="muted">linkedin</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              in/ones-ben-rhaime
            </a>
          </li>
          <li>
            <span className="muted">github</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              onesBenRhaime
            </a>
          </li>
          <li>
            <span className="muted">cv</span>
            <a href={profile.cv} download>
              ones-cv.pdf
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

function ProcessTable({ items }: { items: typeof caseStudies }) {
  return (
    <ul className="ps" role="list">
      <li className="ps__head" aria-hidden="true">
        <span>name</span>
        <span>status</span>
        <span>what</span>
        <span>stack</span>
        <span />
      </li>
      {items.map((c) => (
        <li key={c.slug}>
          <Link href={`/work/${c.slug}`} className="ps__row">
            <span className="ps__name">{c.title}</span>
            <span className="ps__status">
              <span className={`dot dot--${c.status}`} aria-hidden="true" />
              {statusLabel[c.status]}
            </span>
            <span className="ps__what">{c.tagline}</span>
            <span className="ps__stack">{c.stack.slice(0, 3).join(" · ")}</span>
            <span className="ps__go" aria-hidden="true">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
