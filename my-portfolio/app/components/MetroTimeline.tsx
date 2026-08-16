"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type MetroStation = {
  year: string;
  title: string;
  subtitle: string;
  location?: string;
  detail?: string;
};

export default function MetroTimeline({ stations }: { stations: MetroStation[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"]
  });

  const trackHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="metro" ref={ref}>
      <div className="metro-stations">
        <div className="metro-track" aria-hidden="true">
          <motion.div className="metro-progress" style={{ height: trackHeight }} />
        </div>
        {stations.map((station, index) => (
          <motion.div
            key={`${station.year}-${station.title}`}
            className="metro-station"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <span className="metro-dot" aria-hidden="true" />
            <span className="metro-year">{station.year}</span>
            <div className="metro-info">
              <h3>{station.title}</h3>
              <p className="metro-company">{station.subtitle}</p>
              {station.location && (
                <p className="metro-location">{station.location}</p>
              )}
              {station.detail && (
                <p className="metro-detail">{station.detail}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
