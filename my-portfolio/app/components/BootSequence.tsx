"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ones-land-booted";

const BOOT_LINES = [
  "> booting ones-land...",
  "✓ loading creativity",
  "✓ loading engineering",
  "✓ loading product thinking",
  "✓ loading coffee",
  "✓ loading impossible ideas"
];

const LINE_DELAY = 420;
const WELCOME_DELAY = LINE_DELAY * BOOT_LINES.length + 300;

export default function BootSequence() {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [linesShown, setLinesShown] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const alreadyBooted = sessionStorage.getItem(STORAGE_KEY) === "true";
    if (!alreadyBooted) {
      setVisible(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const lineTimers = BOOT_LINES.map((_, index) =>
      setTimeout(() => setLinesShown((count) => Math.max(count, index + 1)), LINE_DELAY * (index + 1))
    );
    const welcomeTimer = setTimeout(() => setShowWelcome(true), WELCOME_DELAY);

    return () => {
      lineTimers.forEach(clearTimeout);
      clearTimeout(welcomeTimer);
    };
  }, [visible]);

  function handleEnter() {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  if (!ready) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="boot-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          
        >
          <div className="boot-logo">Ones Land</div>

          <div className="boot-grid">
            <div className="boot-portrait">
              <Image
                src="/assets/ones-land/map-persone.png"
                alt="Ones Ben Rhaime illustrated portrait"
                width={520}
                height={640}
                priority
              />
            </div>

            <div className="boot-content">
              <h2 className="boot-heading ">
                Welcome to  Ones Land.
              </h2>

              <div className="boot-terminal">
                {BOOT_LINES.slice(0, linesShown).map((line) => (
                  <motion.p
                    key={line}
                    className="boot-line"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {line}
                  </motion.p>
                ))}
                {!showWelcome && <span className="boot-cursor" aria-hidden="true" />}
              </div>

              {showWelcome && (
                <motion.div
                  className="boot-welcome"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>Explore the world behind the products.</p>
                  <button type="button" className="boot-enter" onClick={handleEnter}>
                    ENTER
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          <span className="boot-corner" aria-hidden="true">
            ✦
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
