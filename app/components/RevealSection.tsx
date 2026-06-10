"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function RevealSection({
  className,
  id,
  children
}: {
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      className={className}
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
