"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { demoProducts } from "@/data/products";
import { promotions } from "@/data/promotions";
import { store } from "@/config/store";
import { useCart } from "@/components/cart/cart-context";
import { Icon } from "@/components/ui/icon";
import { formatPrice } from "@/lib/format";

export function CatalogPromotions() {
  const { addItem, openCart } = useCart();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (!playing || hovered) return;
    const timer = window.setInterval(() => setActive(value => (value + 1) % promotions.length), 6500);
    return () => window.clearInterval(timer);
  }, [playing, hovered]);
  const offer = promotions[active];
  const product = demoProducts.find(item => item.id === offer.id);
  const panel = "panel" in offer ? offer.panel : undefined;
  const previousPrice = "previousPrice" in offer ? offer.previousPrice : undefined;
  const inquiry = `Olá, TJ! Tenho interesse na Floretta Fulla anunciada no site. Gostaria de consultar o valor e a disponibilidade.`;
  const select = (index: number) => { setActive(index); setPlaying(false); };

  return <section className="catalog-promotions container" aria-labelledby="promotions-title">
    <div className="black-friday-heading"><div><p className="eyebrow">O ESQUENTA JÁ COMEÇOU</p><h1 id="promotions-title">BLACK <em>FRIDAY</em></h1></div><p>Ofertas especiais.<br />Sua próxima fragrância está aqui.</p></div>
    <div className="promotion-carousel" role="region" aria-roledescription="carrossel" aria-label="Ofertas e novidades da Black Friday" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setPlaying(false)}>
      <div className="promotion-banner" style={{ "--promotion-accent": offer.accent } as CSSProperties} role="group" aria-roledescription="slide" aria-label={`${active + 1} de ${promotions.length}: ${offer.name}`}>
        <div className="promotion-art">
          {panel ? <div className={`promotion-kit promotion-kit-${panel}`} role="img" aria-label={offer.name} /> : product && <Image src={product.image} alt={`${offer.name} · ${offer.brand}`} fill priority sizes="(max-width: 760px) 100vw, 50vw" />}
          <span className="promotion-tag">{product ? "ESQUENTA BLACK FRIDAY" : "NOVIDADE EXCLUSIVA"}</span>
        </div>
        <div className="promotion-copy">
          <p className="eyebrow">{offer.brand}</p>
          <h2>{offer.title}</h2>
          <p className="promotion-brand">{offer.name}</p>
          <p className="promotion-description">{offer.description}</p>
          {product && previousPrice ? <div className="promotion-price"><span>De <s>{formatPrice(previousPrice)}</s></span><strong><small>por</small> {formatPrice(product.priceCents)}</strong><b>Economize {formatPrice(previousPrice - product.priceCents)}</b></div> : <p className="promotion-consult">Consulte valor e disponibilidade</p>}
          {product ? <button type="button" className="button button-gold" onClick={() => { setPlaying(false); addItem(product); openCart(); }}>Quero aproveitar <Icon name="bag" /></button> : <a className="button button-gold" href={`https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(inquiry)}`} target="_blank" rel="noreferrer">Consultar pelo WhatsApp <Icon name="arrow" /></a>}
          <a className="promotion-browse" href="#produtos-catalogo">Explorar todos os perfumes <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="promotion-navigation">
        <button type="button" aria-label="Promoção anterior" onClick={() => select((active - 1 + promotions.length) % promotions.length)}>←</button>
        <div className="promotion-dots">{promotions.map((item, index) => <button key={item.id} type="button" aria-label={`Exibir ${item.name}`} aria-current={index === active ? "true" : undefined} onClick={() => select(index)} />)}</div>
        <span>{active + 1} / {promotions.length}</span>
        <button type="button" aria-label="Próxima promoção" onClick={() => select((active + 1) % promotions.length)}>→</button>
        <button type="button" aria-label={playing ? "Pausar promoções" : "Reproduzir promoções automaticamente"} aria-pressed={playing} onClick={() => setPlaying(value => !value)}>{playing ? "Pausar" : "Reproduzir"}</button>
      </div>
    </div>
  </section>;
}
