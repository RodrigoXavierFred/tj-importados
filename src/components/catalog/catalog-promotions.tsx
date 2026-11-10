"use client";

import Image from "next/image";
import { demoProducts } from "@/data/products";
import { useCart } from "@/components/cart/cart-context";
import { Icon } from "@/components/ui/icon";
import { formatPrice } from "@/lib/format";

const lily = demoProducts.find(product => product.id === "lily")!;

export function CatalogPromotions() {
  const { addItem, openCart } = useCart();

  return <section className="catalog-promotions container" aria-labelledby="promotions-title">
    <div className="promotion-banner">
      <div className="promotion-art">
        <Image src={lily.image} alt="Kit Lily Maison Asrar com perfume e buquê em uma caixa de presente roxa" fill priority sizes="(max-width: 760px) 100vw, 50vw" />
        <span className="promotion-tag">ESQUENTA BLACK FRIDAY</span>
      </div>
      <div className="promotion-copy">
        <p className="eyebrow">SELEÇÃO ESPECIAL · TJ IMPORTADOS</p>
        <h1 id="promotions-title">Um presente<br />que <em>encanta.</em></h1>
        <p className="promotion-brand">LILY · MAISON ASRAR</p>
        <p className="promotion-description">Floral frutado, delicado e cheio de presença. Um conjunto especial para surpreender em cada detalhe.</p>
        <div className="promotion-price"><span>De <s>{formatPrice(49000)}</s></span><strong><small>por</small> {formatPrice(lily.priceCents)}</strong><b>Economize {formatPrice(49000 - lily.priceCents)}</b></div>
        <button type="button" className="button button-gold" onClick={() => { addItem(lily); openCart(); }}>Quero aproveitar <Icon name="bag" /></button>
        <a className="promotion-browse" href="#produtos-catalogo">Explorar todos os perfumes <span aria-hidden="true">↓</span></a>
      </div>
    </div>
  </section>;
}
