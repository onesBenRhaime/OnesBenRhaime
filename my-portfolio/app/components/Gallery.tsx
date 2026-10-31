"use client";

import { useCallback, useEffect, useState } from "react";

type Props = {
  title: string;
  shots: string[];
};

export default function Gallery({ title, shots }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + shots.length) % shots.length)),
    [shots.length]
  );

  useEffect(() => {
    if (open === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  if (shots.length === 0) return null;

  return (
    <>
      <div className="gallery">
        {shots.map((src, i) => (
          <button
            key={src}
            type="button"
            className="gallery__thumb"
            onClick={() => setOpen(i)}
            aria-label={`Open ${title} image ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`${title} — image ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} images`}
          onClick={() => setOpen(null)}
        >
          <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox__bar">
              <span>
                {title} · {open + 1}/{shots.length}
              </span>
              <span className="lightbox__controls">
                {shots.length > 1 && (
                  <>
                    <button type="button" onClick={() => step(-1)} aria-label="Previous image">
                      ←
                    </button>
                    <button type="button" onClick={() => step(1)} aria-label="Next image">
                      →
                    </button>
                  </>
                )}
                <button type="button" onClick={() => setOpen(null)} aria-label="Close">
                  esc
                </button>
              </span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shots[open]} alt={`${title} — image ${open + 1}`} />
          </div>
        </div>
      )}
    </>
  );
}
