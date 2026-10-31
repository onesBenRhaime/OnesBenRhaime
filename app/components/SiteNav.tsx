"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SwapLabel from "./SwapLabel";

const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Log" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" }
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      toggle?.focus();
    };
  }, [open]);

  return (
    <>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Ones home">
          Ones<span aria-hidden="true">.</span>
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="bracket nav-toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <SwapLabel>{open ? "close" : "menu"}</SwapLabel>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <ol className="menu-links">
              {NAV_ITEMS.map((item, index) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
            <div className="menu-foot">
              <a href="mailto:ones.benrhaime@gmail.com">ones.benrhaime@gmail.com</a>
              <a href="/assets/ones-cv.pdf" download>
                download cv ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
