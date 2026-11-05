"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { bestSellerProducts } from "@/data/products";
import { Icon } from "@/components/ui/icon";

const carouselColors = ["#b67a35", "#d28c91", "#c07a32", "#87956e"];

export function BestSellersCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive(current => (current + 1) % bestSellerProducts.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  const product = bestSellerProducts[active];

  return <section className="best-sellers section" aria-labelledby="best-sellers-title">
    <div className="container">
      <div className="section-heading carousel-heading">
        <div><p className="eyebrow">OS MAIS PROCURADOS</p><h2 id="best-sellers-title">Perfumes que deixam marca.</h2></div>
        <div className="carousel-controls" aria-label="Controles do carrossel">
          <button type="button" onClick={() => setActive(current => (current - 1 + bestSellerProducts.length) % bestSellerProducts.length)} aria-label="Perfume anterior"><Icon name="arrow" /></button>
          <span>{String(active + 1).padStart(2, "0")} / {String(bestSellerProducts.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => setActive(current => (current + 1) % bestSellerProducts.length)} aria-label="Próximo perfume"><Icon name="arrow" /></button>
        </div>
      </div>
      <div className="carousel-stage" key={product.id} style={{ "--carousel-accent": carouselColors[active] } as CSSProperties}>
        <div className="carousel-visual">
          <span className="carousel-number">0{active + 1}</span>
          <span className="carousel-brand-watermark">{product.brand}</span>
          <div className="carousel-atmosphere" aria-hidden="true"><i /><i /><i /></div>
          <div className="carousel-floating-notes" aria-hidden="true">{product.notes.slice(0, 3).map(note => <span key={note}>{note}</span>)}</div>
          <Image src={product.image} alt={`Frasco de ${product.name}`} width={product.imageWidth} height={product.imageHeight} sizes="(max-width: 760px) 210px, 320px" />
        </div>
        <div className="carousel-copy">
          <p className="product-brand">{product.brand}</p>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <ul>{product.notes.map(note => <li key={note}>{note}</li>)}</ul>
          <Link className="button button-outline" href={`/catalogo#${product.id}`}>Ver no catálogo <Icon name="arrow" /></Link>
        </div>
      </div>
      <div className="carousel-dots">{bestSellerProducts.map((item, index) => <button key={item.id} type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Exibir ${item.name}`} aria-current={index === active ? "true" : undefined} />)}</div>
    </div>
  </section>;
}
