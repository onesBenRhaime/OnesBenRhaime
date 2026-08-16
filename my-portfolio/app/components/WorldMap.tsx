"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { zones } from "../zones";

export default function WorldMap() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(zones[0].id);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = zones
      .map((zone) => document.getElementById(zone.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    overlayRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const handleNavigate = useCallback((id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const activeZone = zones.find((zone) => zone.id === activeId) ?? zones[0];

  return (
    <>
      <button type="button" className="map-toggle" onClick={() => setOpen(true)}>
        <span className="map-toggle-icon" aria-hidden="true">
          🗺️
        </span>
        <span className="map-toggle-label">
          You are here: {activeZone.emoji} {activeZone.label}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] overflow-y-auto  bg-black font-mono text-[#d6ffe0]"
            role="dialog"
            aria-modal="true"
            aria-label="Ones Land world map"
            tabIndex={-1}
            ref={overlayRef}
            initial={{ clipPath: "circle(0% at 0% 50%)" }}
            animate={{ clipPath: "circle(150% at 0% 50%)" }}
            exit={{ clipPath: "circle(0% at 0% 50%)" }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
               
          >
            <div className="flex min-h-full flex-col px-4 py-4 sm:px-8 sm:py-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-[#d6ffe0]/40 px-6 py-3 text-lg font-bold text-green-500 transition hover:bg-[#d6ffe0] hover:text-black"
                >
                  EXIT
                </button>
                <h1
                  className="text-center text-3xl font-bold text-green-500 sm:text-5xl"
                  style={{ fontFamily: "var(--font-handwriting), cursive" }}
                >
                  Ones Land — World Map
                </h1>
                <span aria-hidden="true" className="w-[92px]" />
              </div>

              <div className="relative mx-auto w-full  flex-1">
                <div className="relative mx-auto h-full" style={{ aspectRatio: "1294 / 1621" }}>
                  <Image
                    src="/assets/ones-land/map-bg.png"
                    alt="Ones Land world map"
                    fill
                    priority
                    className="object-contain"
                  />
                 
                  <Image
                    src="/assets/ones-land/map-persone.png"
                    alt="Ones Ben Rhaime standing in Ones Land"
                    width={170}
                    height={250}
                    className="absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 sm:w-40"
                  />

                  {zones.map((zone) => {
                    const isActive = zone.id === activeId;
                    return (
                      <button
                        type="button"
                        key={zone.id}
                        onClick={() => handleNavigate(zone.id)}
                        style={{ left: `${zone.position.x}%`, top: `${zone.position.y}%` }}
                        className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-0.5 rounded-md border bg-green-400/10 px-2 py-6 text-center backdrop-blur-sm transition hover:-translate-y-[55%] hover:border-[#d6ffe0] ${
                          isActive ? "border-[#8b5cf6] bg-[#8b5cf6]/20" : "border-[#d6ffe0]/30"
                        }`}
                      >
                        <span className="whitespace-nowrap text-[25px] font-extrabold uppercase tracking-wider text-white ">
                          {zone.emoji} {zone.label}
                        </span>
                        <span className="hidden whitespace-nowrap text-[14px] text-[#9ad6ad] sm:block">
                          {zone.blurb}
                        </span>
                        {isActive && (
                          <span className="absolute -right-1 -top-1 h-2 w-2 animate-ping rounded-full bg-[#8b5cf6]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
