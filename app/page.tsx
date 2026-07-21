import Image from "next/image";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Gauge,
  GitBranch,
  Github,
  GraduationCap,
  HeartPulse,
  Landmark,
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
import ProjectShowcase from "./components/ProjectShowcase";
import RevealSection from "./components/RevealSection";
import ScrollProgress from "./components/ScrollProgress";
import SiteNav from "./components/SiteNav";
import WorldMap from "./components/WorldMap";
import { districtProjects } from "./projects";

const featuredProject = {
  title: "PrimeProfs",
  label: "EdTech Platform",
  description:
    "A learning platform shaped around product thinking, scalable architecture and AI-assisted education.",
  tags: ["React", "Next.js", "NestJS", "PostgreSQL", "AI Integration"]
};

const timelineStations = [
  {
    year: "Jun – Jul 2021",
    title: "Web Developer · Internship",
    subtitle: "Cloud Master Tunisie",
    location: "Tunis, Tunisia",
    detail:
      "Built an educational platform for learning programming through interactive exercises."
  },
  {
    year: "Aug – Sep 2021",
    title: "Software Testing · Internship",
    subtitle: "BIAT — Banque Internationale Arabe de Tunisie",
    location: "Tunisia · Java, Katalon Studio",
    detail:
      "Designed and automated functional test scenarios to validate web applications and improve software quality."
  },
  {
    year: "Feb – Jun 2022",
    title: "Full-Stack JS Engineer · End-of-studies internship",
    subtitle: "Orange Digital Center",
    location: "Tunis, Tunisia · On-site",
    detail:
      "Built a recruitment-automation and candidate-assessment platform — pre-selection, online testing and evaluation to streamline hiring for recruiters and candidates."
  },
  {
    year: "Jul – Aug 2023",
    title: "Web Developer · Internship",
    subtitle: "Paysan du Cap Bon",
    location: "Tunis, Tunisia · On-site",
    detail:
      "Developed a billing-system automation application with Symfony 5 and MySQL."
  },
  {
    year: "Jun – Jul 2024",
    title: "Full-Stack Developer · Internship",
    subtitle: "Smartovate",
    location: "London, UK · Remote",
    detail:
      "Contributed to Smartovate's AI-driven productivity product for startups and teams."
  },
  {
    year: "2024",
    title: "Frontend & API Developer",
    subtitle: "Caustaza Group LTD"
  },
  {
    year: "2024 – Present",
    title: "Full-Stack Product Engineer",
    subtitle: "PrimeProfs",
    location: "EdTech · Product Engineering",
    detail:
      "Building PrimeProfs, an AI-assisted EdTech platform students use to learn more effectively."
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

const services = [
  {
    icon: Rocket,
    title: "Product Engineering",
    description:
      "From idea to shipped product — full-stack builds with React, Next.js and NestJS, shaped around real user problems."
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Bringing AI into products in a useful way — assisted learning, smart workflows and features people actually reach for."
  },
  {
    icon: Gauge,
    title: "Performance & Architecture",
    description:
      "Scalable system design and fast, reliable web apps that stay maintainable as the product and team grow."
  }
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
    icon: Boxes,
    year: "2023 – 2024",
    title: "Microservice Architecture",
    description:
      "A dynamic, high-performance microservices system for university room-reservation, spanning Spring Boot, Node.js and Angular, with H2 and MySQL to fit each service's needs.",
    tags: ["Spring Boot", "Node.js", "Angular", "Microservices"],
    repos: [
      {
        label: "Distributed app",
        url: "https://github.com/onesBenRhaime/Application-Web-Distribues-MicroService-Spring"
      },
      {
        label: "Purchase service",
        url: "https://github.com/onesBenRhaime/4TWIN1-G1-Backend-Achat/tree/onesBenRhaime-4TWIN1-G1"
      }
    ]
  },
  {
    icon: GitBranch,
    year: "2023 – 2024",
    title: "CI/CD DevOps Pipeline",
    description:
      "A continuous integration and deployment pipeline with Jenkins and Docker, plus monitoring through Prometheus & Grafana and automated email alerting.",
    tags: ["Jenkins", "Docker", "Prometheus", "Grafana"],
    repos: []
  },
  {
    icon: Landmark,
    year: "2022 – 2023",
    title: "MazeBank",
    description:
      "An integrated multi-client banking application — JavaFX, Symfony and CodenameOne clients over a shared MySQL database — handling banking services and account features.",
    tags: ["Symfony", "JavaFX", "CodenameOne", "MySQL"],
    repos: [
      {
        label: "Repository",
        url: "https://github.com/onesBenRhaime/MazeBank--Scared-To-Compile"
      }
    ]
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
      <ScrollProgress />
      <BootSequence />
      <WorldMap />

      <SiteNav />

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
            src="/assets/ones-land/ones-3.png"
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
          <p className="section-lead">
            A selection of platforms I&apos;ve built end to end — click any
            preview to explore the screenshots.
          </p>
        </div>
        <ProjectShowcase projects={districtProjects} />
      </RevealSection>

      <RevealSection className="section lab-section" id="lab">
        <div className="section-heading">
          <span className="zone-label zone-label--ailab">🧪 Engineering Lab</span>
          <h2>Systems &amp; academic builds</h2>
          <p className="section-lead">
            Deeper engineering work — microservices, DevOps and multi-client
            apps — with the source on GitHub.
          </p>
        </div>
        <div className="lab-grid">
          {labProjects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="lab-card" key={project.title}>
                <div className="lab-head">
                  <span className="lab-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="lab-year">{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.repos.length > 0 && (
                  <div className="lab-repos">
                    {project.repos.map((repo) => (
                      <a
                        key={repo.url}
                        className="lab-repo"
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github aria-hidden="true" />
                        {repo.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </RevealSection>

      <RevealSection className="section services-section" id="services">
        <div className="section-heading">
          <span className="zone-label zone-label--ailab">🛠️ Workshop</span>
          <h2>How I can help</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card " key={service.title}>
                <span className="service-icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </RevealSection>

      <div className="marquee" aria-label="Tech stack">
        <div className="marquee-track">
          {[...techStack, ...techStack].map((tech, index) => (
            <span className="marquee-item" key={`${tech}-${index}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>

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
