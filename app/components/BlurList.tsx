"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Big condensed list where each line sharpens out of a blur as it scrolls in. */
export default function BlurList({ items }: { items: string[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <ul className="blur-list">
      {items.map((item) => (
        <motion.li
          key={item}
          initial={
            reduceMotion ? { opacity: 1 } : { opacity: 0.35, filter: "blur(8px)" }
          }
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ margin: "0px 0px -25% 0px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
