import Image from "next/image";
import BlurList from "./components/BlurList";
import GitHubShowcase from "./components/GitHubShowcase";
import ProjectShowcase from "./components/ProjectShowcase";
import RevealSection from "./components/RevealSection";
import ScrollProgress from "./components/ScrollProgress";
import SiteNav from "./components/SiteNav";
import SwapLabel from "./components/SwapLabel";
import Ticker from "./components/Ticker";
import { districtProjects } from "./projects";

const featuredProject = {
  title: "PrimeProfs",
  label: "EdTech platform · 2024 – now",
  caption: "the one i'm building right now.",
  description:
    "a learning platform shaped around product thinking, scalable architecture and ai-assisted education. students use it to learn faster; i use it to prove that edtech doesn't have to feel like homework.",
  tags: ["React", "Next.js", "NestJS", "PostgreSQL", "AI Integration"]
};

const timelineStations = [
  {
    year: "2024 – now",
    title: "Full-Stack Product Engineer",
    subtitle: "PrimeProfs",
    location: "EdTech · Product Engineering",
    detail:
      "building primeprofs, an ai-assisted edtech platform students use to learn more effectively."
  },
  {
    year: "2024",
    title: "Frontend & API Developer",
    subtitle: "Caustaza Group LTD"
  },
  {
    year: "Jun – Jul 2024",
    title: "Full-Stack Developer · Internship",
    subtitle: "Smartovate",
    location: "London, UK · Remote",
    detail:
      "contributed to smartovate's ai-driven productivity product for startups and teams."
  },
  {
    year: "Jul – Aug 2023",
    title: "Web Developer · Internship",
    subtitle: "Paysan du Cap Bon",
    location: "Tunis · On-site",
    detail: "automated a billing system with symfony 5 and mysql."
  },
  {
    year: "Feb – Jun 2022",
    title: "Full-Stack JS Engineer · End-of-studies",
    subtitle: "Orange Digital Center",
    location: "Tunis · On-site",
    detail:
      "built a recruitment-automation and candidate-assessment platform: pre-selection, online testing and evaluation."
  },
  {
    year: "Aug – Sep 2021",
    title: "Software Testing · Internship",
    subtitle: "BIAT",
    location: "Tunisia · Java, Katalon Studio",
    detail:
      "designed and automated functional test scenarios to validate web applications."
  },
  {
    year: "Jun – Jul 2021",
    title: "Web Developer · Internship",
    subtitle: "Cloud Master Tunisie",
    location: "Tunis",
    detail:
      "built an educational platform for learning programming through interactive exercises."
  }
];

const capabilities = [
  "Product engineering",
  "Full-stack builds",
  "AI integration",
  "EdTech platforms",
  "System design",
  "Performance",
  "Test automation"
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "NestJS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "System Design",
  "AI Integration"
];

const labProjects = [
  {
    year: "2023 – 2024",
    title: "Microservice Architecture",
    description:
      "a university room-reservation system split into services: spring boot, node.js and angular, with h2 and mysql picked per service.",
    tags: ["Spring Boot", "Node.js", "Angular", "Microservices"],
    repos: [
      {
        label: "distributed app",
        url: "https://github.com/onesBenRhaime/Application-Web-Distribues-MicroService-Spring"
      },
      {
        label: "purchase service",
        url: "https://github.com/onesBenRhaime/4TWIN1-G1-Backend-Achat/tree/onesBenRhaime-4TWIN1-G1"
      }
    ]
  },
  {
    year: "2023 – 2024",
    title: "CI/CD DevOps Pipeline",
    description:
      "jenkins + docker pipeline with prometheus and grafana watching it, and email alerts when something breaks.",
    tags: ["Jenkins", "Docker", "Prometheus", "Grafana"],
    repos: []
  },
  {
    year: "2022 – 2023",
    title: "MazeBank",
    description:
      "one bank, three clients: javafx, symfony and codenameone sharing a single mysql database.",
    tags: ["Symfony", "JavaFX", "CodenameOne", "MySQL"],
    repos: [
      {
        label: "repository",
        url: "https://github.com/onesBenRhaime/MazeBank--Scared-To-Compile"
      }
    ]
  }
];

const achievements = [
  { label: "2nd place", detail: "ATS problem solving hackathon 2025" },
  { label: "3rd place", detail: "ATS problem solving hackathon 2024" },
  { label: "with honors", detail: "computer engineering degree" }
];

const faqs = [
  {
    q: "Frontend or backend?",
    a: "yes. react on the front, nestjs in the middle, postgres underneath."
  },
  {
    q: "Can you actually ship?",
    a: "primeprofs is live and students open it every day."
  },
  {
    q: "What's your weak spot?",
    a: "i over-test things. blame the bank internship."
  },
  {
    q: "When am I the wrong pick?",
    a: "when you need someone to close tickets without asking why they exist."
  },
  {
    q: "Remote?",
    a: "done it for a london startup from tunis. time zones are a calendar problem."
  },
  {
    q: "What languages?",
    a: "arabic, french, english. and typescript, fluently."
  },
  {
    q: "What are you looking for next?",
    a: "a product team that cares about users more than story points."
  }
];

const contactLinks = [
  { label: "email me", href: "mailto:ones.benrhaime@gmail.com" },
  { label: "linkedin", href: "https://www.linkedin.com/in/ones-ben-rhaime/", external: true },
  { label: "github", href: "https://github.com/onesbenrhaime", external: true },
  { label: "download cv", href: "/assets/ones-cv.pdf", download: true }
];

const WALL_LINE = "let's ship something people actually use. ";

export default function Home() {
  return (
    <>
      <Ticker />
      <ScrollProgress />
      <SiteNav />

      <main>
        <section className="hero wrap" id="top">
          <h1 className="hero-title">
            <span className="hero-word hero-word--hey">Hey</span>
            <span className="hero-word hero-word--im">I&apos;m</span>
            <span className="hero-word hero-word--ones">Ones</span>
          </h1>

          <p className="hero-todo">
            <span>{"// TODO:"}</span> hire ones
          </p>

          <p className="hero-tag mono">a software engineer who ships, with a sense of humour.</p>

          <div className="hero-photo">
            <svg className="hero-squiggles" viewBox="0 0 400 420" aria-hidden="true">
              <path pathLength={1} d="M58 400 C 20 330, 70 290, 40 230 S 60 140, 30 80 S 50 30, 40 10" />
              <path pathLength={1} d="M92 410 C 70 350, 110 300, 80 250 S 96 170, 72 120" />
              <path pathLength={1} d="M330 410 C 360 340, 318 300, 350 240 S 330 150, 362 90 S 344 40, 356 18" />
              <path pathLength={1} d="M300 400 C 318 352, 290 310, 312 262 S 300 200, 320 160" />
              <path pathLength={1} className="spark" d="M318 70 l 8 -22 l 8 22 l 22 8 l -22 8 l -8 22 l -8 -22 l -22 -8 z" />
              <path pathLength={1} className="spark" d="M70 168 l 5 -14 l 5 14 l 14 5 l -14 5 l -5 14 l -5 -14 l -14 -5 z" />
            </svg>
            <Image
              src="/assets/ones-hero.png"
              alt="Ones taking a mirror selfie in a striped tee, smiling"
              width={860}
              height={1121}
              priority
            />
          </div>

          <div className="hero-actions">
            <a className="bracket bracket--solid" href="#work">
              <SwapLabel>see the work</SwapLabel>
            </a>
            <a className="bracket" href="/assets/ones-cv.pdf" download>
              <SwapLabel>grab my cv</SwapLabel>
            </a>
          </div>
        </section>

        <div className="marquee-wrap">
        <div className="marquee" aria-label="Tech stack">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, index) => (
              <span className="marquee-item" key={`${tech}-${index}`}>
                {tech}
                <b aria-hidden="true">♥</b>
              </span>
            ))}
          </div>
        </div>
        </div>

        <RevealSection className="section wrap about" id="about">
          <div className="section-heading">
            <span className="eyebrow">01 / about</span>
            <h2>More than a developer</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="big-line">i don&apos;t write code for code&apos;s sake.</p>
              <p>
                i&apos;m ones, a software engineer who likes problems more than
                frameworks. my work sits where full-stack development, product
                thinking, ai and education meet.
              </p>
              <p>
                today i help build primeprofs, a platform students use to learn
                more effectively. before that: banks, startups, a recruitment
                platform and one cheese maker.
              </p>
            </div>
            <div>
              <span className="mono muted">things i&apos;m good at ↓</span>
              <BlurList items={capabilities} />
            </div>
          </div>
        </RevealSection>

        <RevealSection className="section wrap" id="work">
          <div className="section-heading">
            <span className="eyebrow">02 / work</span>
            <h2>Stuff I shipped</h2>
            <p className="section-lead">
              one line each. click a card for the screenshots and the long
              version.
            </p>
          </div>

          <article className="flagship">
            <div className="flagship-copy">
              <span className="mono">{featuredProject.label}</span>
              <h3>{featuredProject.title}</h3>
              <p className="flagship-caption">{featuredProject.caption}</p>
              <p>{featuredProject.description}</p>
              <ul className="tag-row tag-row--light" aria-label="Stack">
                {featuredProject.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <span className="flagship-stamp" aria-hidden="true">
              now
              <br />
              building
            </span>
          </article>

          <ProjectShowcase projects={districtProjects} />
        </RevealSection>

        <RevealSection className="section wrap" id="lab">
          <div className="section-heading">
            <span className="eyebrow">03 / lab</span>
            <h2>Systems &amp; side quests</h2>
            <p className="section-lead">
              deeper engineering: microservices, devops and multi-client apps.
            </p>
          </div>
          <ol className="rows">
            {labProjects.map((project, index) => (
              <li className="row" key={project.title}>
                <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="row-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-row" aria-label="Stack">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="row-side">
                  <span className="mono muted">{project.year}</span>
                  {project.repos.map((repo) => (
                    <a
                      key={repo.url}
                      className="bracket"
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SwapLabel>{repo.label}</SwapLabel>
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </RevealSection>

        <RevealSection className="section wrap" id="experience">
          <div className="section-heading">
            <span className="eyebrow">04 / log</span>
            <h2>Where I&apos;ve been</h2>
          </div>
          <ol className="rows">
            {timelineStations.map((station, index) => (
              <li className="row" key={`${station.subtitle}-${station.year}`}>
                <span className="row-index">
                  {String(timelineStations.length - index).padStart(2, "0")}
                </span>
                <div className="row-main">
                  <h3>{station.subtitle}</h3>
                  <p className="row-role">{station.title}</p>
                  {station.detail && <p>{station.detail}</p>}
                </div>
                <div className="row-side">
                  <span className="mono">{station.year}</span>
                  {station.location && (
                    <span className="mono muted">{station.location}</span>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className="stamps" aria-label="Achievements">
            {achievements.map((item) => (
              <div className="stamp" key={item.detail}>
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </div>
            ))}
          </div>
        </RevealSection>

        <GitHubShowcase />

        <RevealSection className="section wrap" id="faq">
          <div className="section-heading">
            <span className="eyebrow">06 / faq</span>
            <h2>Questions you were going to ask</h2>
          </div>
          <ol className="faq">
            {faqs.map((item, index) => (
              <li key={item.q}>
                <span className="faq-n">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              </li>
            ))}
          </ol>
        </RevealSection>

        <RevealSection className="closing" id="contact">
          <div className="wall" aria-hidden="true">
            {WALL_LINE.repeat(90)}
          </div>
          <div className="closing-inner wrap">
            <h2 className="marker">
              Let&apos;s
              <br />
              ship it
            </h2>
            <p className="lede">
              got a product, a team, or a problem that won&apos;t sit still?
              i reply to every message.
            </p>
            <div className="contact-row">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  className="bracket bracket--solid"
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  {...(link.download ? { download: true } : {})}
                >
                  <SwapLabel>{link.label}</SwapLabel>
                </a>
              ))}
            </div>
          </div>
        </RevealSection>
      </main>

      <footer className="footer wrap">
        <span>ones ben rhaime ♥ software engineer</span>
        <span>made in tunis · {new Date().getFullYear()}</span>
      </footer>

      <a className="float-cta" href="#contact" aria-label="Contact Ones">
        <span aria-hidden="true">&gt;_</span>
        say hi
      </a>
    </>
  );
}
