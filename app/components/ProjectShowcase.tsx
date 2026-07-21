"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Maximize2,
  X
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Project } from "../projects";

type Lightbox = { project: number; shot: number } | null;

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<Lightbox>(null);

  const activeProject = lightbox !== null ? projects[lightbox.project] : null;

  const close = useCallback(() => setLightbox(null), []);

  const step = useCallback(
    (dir: number) => {
      setLightbox((current) => {
        if (!current) return current;
        const shots = projects[current.project].shots;
        const next = (current.shot + dir + shots.length) % shots.length;
        return { ...current, shot: next };
      });
    },
    [projects]
  );

  useEffect(() => {
    if (lightbox === null) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  return (
    <>
      <div className="showcase-grid">
        {projects.map((project, projectIndex) => (
          <article className="showcase-card" key={project.slug}>
            <button
              type="button"
              className="showcase-media"
              onClick={() => setLightbox({ project: projectIndex, shot: 0 })}
              aria-label={`Open ${project.title} screenshots`}
            >
              <span className="showcase-chrome" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <Image
                src={project.shots[0]}
                alt={`${project.title} screenshot`}
                width={1920}
                height={1080}
                className="showcase-cover"
              />
              <span className="showcase-zoom" aria-hidden="true">
                <Maximize2 />
              </span>
            </button>

            <div className="showcase-body">
              <span className="showcase-label">{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="showcase-thumbs">
                {project.shots.slice(1).map((shot, index) => (
                  <button
                    type="button"
                    key={shot}
                    className="showcase-thumb"
                    onClick={() =>
                      setLightbox({ project: projectIndex, shot: index + 1 })
                    }
                    aria-label={`View ${project.title} screenshot ${index + 2}`}
                  >
                    <Image
                      src={shot}
                      alt=""
                      width={480}
                      height={300}
                    />
                  </button>
                ))}
              </div>

              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="showcase-links">
                  {project.liveUrl && (
                    <a
                      className="showcase-link showcase-link--live"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink aria-hidden="true" />
                      Visit live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      className="showcase-link"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github aria-hidden="true" />
                      Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && lightbox && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} screenshots`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={close}
              aria-label="Close"
            >
              <X />
            </button>

            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous screenshot"
            >
              <ChevronLeft />
            </button>

            <motion.figure
              className="lightbox-stage"
              key={`${lightbox.project}-${lightbox.shot}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeProject.shots[lightbox.shot]}
                alt={`${activeProject.title} screenshot ${lightbox.shot + 1}`}
                width={1920}
                height={1080}
                className="lightbox-image"
                priority
              />
              <figcaption className="lightbox-caption">
                <strong>{activeProject.title}</strong>
                <span>
                  {lightbox.shot + 1} / {activeProject.shots.length}
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next screenshot"
            >
              <ChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
