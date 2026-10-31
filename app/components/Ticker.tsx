"use client";

import { X } from "lucide-react";
import { useState } from "react";

const MESSAGES = [
  "open to product engineering roles",
  "currently shipping primeprofs",
  "2× hackathon podium",
  "based in tunis · works remote"
];

export default function Ticker() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  const run = (
    <span>
      {MESSAGES.map((message) => (
        <span key={message}>
          {message}
          <b aria-hidden="true">♥</b>
        </span>
      ))}
    </span>
  );

  return (
    <div className="ticker" role="region" aria-label="Announcements">
      <div className="ticker-track" aria-hidden="true">
        {run}
        {run}
      </div>
      <p className="sr-only">{MESSAGES.join(". ")}</p>
      <button
        type="button"
        className="ticker-close"
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
      >
        <X aria-hidden="true" />
      </button>
    </div>
  );
}
