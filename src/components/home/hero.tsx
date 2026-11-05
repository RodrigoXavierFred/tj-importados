"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";

const sprayDrops = Array.from({ length: 18 }, (_, index) => ({
  angle: 198 + index * 2.25,
  distance: 105 + (index % 6) * 16,
  delay: (index % 6) * 24,
  size: 3 + (index % 3),
}));

export function Hero() {
  const [spray, setSpray] = useState(0);

  return <section className="container hero hero-interactive" id="inicio" aria-labelledby="hero-title">
    <Image
      src="/tj/hero-perfumes-v3.webp"
      alt="Perfumes Lattafa Khamrah, Asad e Yara em uma composição de estúdio"
      fill
      preload
      sizes="(max-width: 760px) 100vw, 1240px"
      className="hero-campaign"
    />
    <div className="hero-shade" />
    <div className="hero-message">
      <p className="eyebrow">UMA PRESENÇA INESQUECÍVEL</p>
      <h1 id="hero-title">Antes da palavra,<br /><em>fica a essência.</em></h1>
    </div>
    <div className="hero-spray-control">
      <button type="button" onClick={() => setSpray(value => value + 1)} aria-label="Borrifar perfume Asad em direção à frase">
        <span className="spray-button-icon" aria-hidden="true" />
        Borrife o Asad
      </button>
      <span>Toque para sentir o movimento</span>
    </div>
    {spray > 0 && <div key={spray} className="hero-spray" aria-hidden="true">
      <span className="hero-spray-cloud" />
      {sprayDrops.map((drop, index) => <span key={index} className="hero-spray-drop" style={{
        "--spray-angle": `${drop.angle}deg`,
        "--spray-distance": `${drop.distance}px`,
        "--spray-delay": `${drop.delay}ms`,
        "--spray-size": `${drop.size}px`,
      } as CSSProperties} />)}
    </div>}
  </section>;
}
