import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  HeartPulse,
  Layers3,
  Linkedin,
  Mail,
  Rocket,
  Sparkles,
  Trophy,
  Zap
} from "lucide-react";
import BootSequence from "./components/BootSequence";
import GitHubShowcase from "./components/GitHubShowcase";
import MetroTimeline from "./components/MetroTimeline";
import RevealSection from "./components/RevealSection";
import WorldMap from "./components/WorldMap";

const featuredProject = {
  title: "PrimeProfs",
  label: "EdTech Platform",
  description:
    "A learning platform shaped around product thinking, scalable architecture and AI-assisted education.",
  tags: ["React", "Next.js", "NestJS", "PostgreSQL", "AI Integration"]
};

const districtProjects = [
  {
    title: "Prime Study",
    label: "AI Study Companion",
    description: "Guided learning experiences powered by AI.",
    tags: ["AI Product", "Learning UX", "Product Engineering"]
  },
  {
    title: "Recruitment Automation Platform",
    label: "Built at Orange Digital Center",
    description:
      "A platform for streamlining recruitment workflows and operational decision-making.",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "My Health Network",
    label: "Healthcare Dashboard",
    description:
      "A focused dashboard experience for healthcare data visibility and coordination.",
    tags: ["ReactJS", "Dashboard", "Healthcare"]
  }
];

const timelineStations = [
  {
    year: "2022",
    title: "Full Stack Developer",
    subtitle: "Orange Digital Center"
  },
  {
    year: "2024",
    title: "Frontend & API Developer",
    subtitle: "Caustaza Group LTD"
  },
  {
    year: "2024 - Present",
    title: "Full Stack Product Engineer",
    subtitle: "PrimeProfs"
  }
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript"]
  },
  {
    title: "Backend",
    icon: Layers3,
    items: ["NestJS", "Node.js", "Python"]
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    title: "Product Engineering",
    icon: Rocket,
    items: ["System Design", "Performance", "Architecture", "AI Integration"]
  }
];

const impactItems = [
  {
    icon: BrainCircuit,
    title: "AI-powered learning experiences"
  },
  {
    icon: GraduationCap,
    title: "Educational platforms"
  },
  {
    icon: Zap,
    title: "High-performance web applications"
  },
  {
    icon: Rocket,
    title: "Product-focused solutions"
  },
  {
    icon: Code2,
    title: "Developer-friendly systems"
  }
];

export default function Home() {
  return (
    <main>
      <BootSequence />
      <WorldMap />

      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Ones home">
          Ones
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#github">GitHub</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="zone-label zone-label--entry">📍 Ones Land — Entry Point</span>
          <span className="eyebrow">Product Engineering / EdTech / AI</span>
          <h1>Ones</h1>
          <p className="hero-title">
            Software Engineer / Product Builder / Problem Solver
          </p>
          <p className="hero-text">
            Building AI-powered educational products and scalable web
            applications.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View My Work <ArrowRight aria-hidden="true" />
            </a>
            <a className="button secondary" href="#contact">
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Ones brand illustration">
          <Image
            src="/assets/ones-banner.png"
            alt="Black and white personal brand banner for Ones"
            width={1584}
            height={396}
            priority
          />
        </div>
      </section>

      <RevealSection className="section about-section" id="about">
        <div className="section-heading">
          <span className="zone-label zone-label--coffee">☕ Coffee Shop</span>
          <h2>More than a developer</h2>
        </div>
        <div className="about-grid">
          <div className="portrait-wrap">
            <Image
              src="/assets/ones-sketch.png"
              alt="Black and white sketch portrait of Ones"
              width={1240}
              height={1240}
            />
          </div>
          <div className="about-copy">
            <p>
              I&apos;m Ones, a Software Engineer passionate about building
              products that solve real-world problems.
            </p>
            <p>
              My journey combines full-stack development, product thinking, AI
              integration and educational technology.
            </p>
            <p>
              Today, I help build PrimeProfs, an EdTech platform used by
              students to learn more effectively through technology.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section impact-section" id="ailab">
        <div className="section-heading">
          <span className="zone-label zone-label--ailab">🚀 AI Lab</span>
          <h2>What I build</h2>
        </div>
        <div className="impact-grid">
          {impactItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className="impact-card" key={item.title}>
                <Icon aria-hidden="true" />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </RevealSection>

      <RevealSection className="section castle-section" id="work">
        <div className="section-heading">
          <span className="zone-label zone-label--castle">🏰 Product Castle</span>
          <h2>The flagship product</h2>
        </div>
        <div className="castle-grid">
          <article className="project-card featured castle-card">
            <span>{featuredProject.label}</span>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.description}</p>
            <div className="tag-row">
              {featuredProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        </div>
      </RevealSection>

      <RevealSection className="section projects-section" id="district">
        <div className="section-heading">
          <span className="zone-label zone-label--react">⚛️ React District</span>
          <h2>Product-shaped engineering</h2>
        </div>
        <div className="project-grid">
          {districtProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <span>{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section timeline-section" id="experience">
        <div className="section-heading">
          <span className="zone-label zone-label--metro">🚉 Metro Line</span>
          <h2>Timeline</h2>
        </div>
        <MetroTimeline stations={timelineStations} />
      </RevealSection>

      <RevealSection className="section academy-section" id="academy">
        <div className="section-heading">
          <span className="zone-label zone-label--academy">🎓 Academy</span>
          <h2>Built across the stack</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-card" key={group.title}>
                <Icon aria-hidden="true" />
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <h3 className="academy-subheading">Proof of momentum</h3>
        <div className="achievement-grid">
          <div className="achievement-card">
            <Trophy aria-hidden="true" />
            <span>2nd Place ATS Problem Solving Hackathon 2025</span>
          </div>
          <div className="achievement-card">
            <Trophy aria-hidden="true" />
            <span>3rd Place ATS Problem Solving Hackathon 2024</span>
          </div>
          <div className="achievement-card">
            <GraduationCap aria-hidden="true" />
            <span>Computer Engineering Degree - With Honors</span>
          </div>
        </div>
      </RevealSection>

      <GitHubShowcase />

      <RevealSection className="philosophy-section">
        <Sparkles aria-hidden="true" />
        <p>
          I don&apos;t just write code. I build products, solve problems and
          create learning experiences that help people grow.
        </p>
      </RevealSection>

      <RevealSection className="section contact-section" id="contact">
        <div className="section-heading">
          <span className="zone-label zone-label--signal">📡 Signal</span>
          <h2>Let&apos;s build what matters</h2>
        </div>
        <div className="contact-grid">
          <a href="https://www.linkedin.com/in/ones-ben-rhaime/" target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" />
            LinkedIn
          </a>
          <a href="https://github.com/onesbenrhaime" target="_blank" rel="noreferrer">
            <Github aria-hidden="true" />
            GitHub
          </a>
          <a href="mailto:ones.benrhaime@gmail.com">
            <Mail aria-hidden="true" />
            Email
          </a>
          <a href="/assets/ones-cv.pdf" download>
            <Download aria-hidden="true" />
            CV Download
          </a>
        </div>
      </RevealSection>

      <footer>
        <BriefcaseBusiness aria-hidden="true" />
        <span>Ones Ben Rhaime / Software Engineer</span>
        <HeartPulse aria-hidden="true" />
      </footer>
    </main>
  );
}
