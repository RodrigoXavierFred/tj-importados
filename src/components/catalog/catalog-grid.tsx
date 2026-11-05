"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/catalog/product-card";
import { demoProducts } from "@/data/products";
import Image from "next/image";

const categories = ["Todos", "Feminino", "Masculino", "Unissex"] as const;

export function CatalogGrid() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Todos");
  const [query, setQuery] = useState("");
  const products = useMemo(() => demoProducts.filter(product => {
    const matchesCategory = category === "Todos" || product.category === category;
    const normalized = `${product.name} ${product.brand} ${product.family}`.toLocaleLowerCase("pt-BR");
    return matchesCategory && normalized.includes(query.toLocaleLowerCase("pt-BR"));
  }), [category, query]);

  return <>
    <div className="catalog-tools">
      <div className="catalog-filters" aria-label="Filtrar perfumes">{categories.map(item => <button key={item} type="button" className={category === item ? "is-active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <label className="catalog-search"><span className="sr-only">Buscar perfume</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar perfume ou marca" /></label>
    </div>
    {category === "Masculino" && <aside className="masculine-campaign" aria-label="Campanha da seleção masculina">
      <div className="masculine-campaign-image"><Image src="/tj/catalogo-compartilhado/ofertas-04.png" alt="Campanha Club de Nuit Intense Man com modelo masculino" width={327} height={778} sizes="(max-width: 760px) 42vw, 280px" /></div>
      <div><p className="eyebrow">SELEÇÃO MASCULINA</p><h2>Presença que marca.</h2><span>Fragrâncias intensas, amadeiradas e elegantes para escolher pelo seu estilo.</span></div>
    </aside>}
    <div className="product-grid catalog-product-grid">{products.map(product => <div id={product.id} key={product.id}><ProductCard product={product} /></div>)}</div>
    {!products.length && <p className="empty-state">Nenhum perfume encontrado com esses filtros.</p>}
  </>;
}
