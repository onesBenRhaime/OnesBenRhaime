"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState, type CSSProperties } from "react";
import type { Project } from "../projects";
import SwapLabel from "./SwapLabel";

const TILTS = [-2.5, 2, -1.5, 3, -3, 1.5];

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
      <div className="work-grid">
        {projects.map((project, projectIndex) => (
          <article
            className="work-card"
            key={project.slug}
            style={{ "--tilt": `${TILTS[projectIndex % TILTS.length]}deg` } as CSSProperties}
          >
            <button
              type="button"
              className="work-media"
              onClick={() => setLightbox({ project: projectIndex, shot: 0 })}
              aria-label={`Open ${project.title} screenshots`}
            >
              <span className="work-index" aria-hidden="true">
                {String(projectIndex + 1).padStart(2, "0")}
              </span>
              <span className="work-arrow" aria-hidden="true">↗</span>
              <Image
                src={project.shots[0]}
                alt={`${project.title} screenshot`}
                width={1920}
                height={1080}
                className="work-cover"
              />
              <span className="work-caption">{project.caption}</span>
            </button>

            <div className="work-body">
              <h3>{project.title}</h3>
              <p className="work-label">{project.label}</p>
              <ul className="tag-row" aria-label="Stack">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {(project.liveUrl || project.githubUrl) && (
                <div className="work-links">
                  {project.liveUrl && (
                    <a
                      className="bracket"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SwapLabel>visit live</SwapLabel>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      className="bracket"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SwapLabel>read code</SwapLabel>
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
                <p>{activeProject.description}</p>
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
