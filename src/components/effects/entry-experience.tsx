"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const droplets = Array.from({ length: 22 }, (_, index) => ({
  angle: index < 11 ? 124 + index * 5.2 : -56 + (index - 11) * 5.2,
  distance: 105 + (index % 5) * 28,
  delay: (index % 7) * 32,
  size: 3 + (index % 4),
}));

export function EntryExperience() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const entryWindow = window as Window & { __tjEntryShown?: boolean };
    if (entryWindow.__tjEntryShown) return;
    entryWindow.__tjEntryShown = true;
    window.requestAnimationFrame(() => setVisible(true));
    window.setTimeout(() => setVisible(false), 2700);
  }, []);

  if (!visible) return null;

  return <div className="entry-experience" aria-label="TJ Perfumes Importados" role="status">
    <div className="entry-glow" />
    <div className="spray-origin" aria-hidden="true">
      <span className="spray-mist spray-mist-left" />
      <span className="spray-mist spray-mist-right" />
      {droplets.map((drop, index) => <span key={index} className="spray-drop" style={{
        "--angle": `${drop.angle}deg`,
        "--distance": `${drop.distance}px`,
        "--delay": `${drop.delay}ms`,
        "--size": `${drop.size}px`,
      } as CSSProperties} />)}
    </div>
    <div className="entry-brand">
      <Image src="/tj/logo.png" alt="" width={377} height={377} preload sizes="150px" />
      <p>Uma fragrância muda o ar.</p>
      <span>Descubra a que muda a sua presença.</span>
    </div>
  </div>;
}
