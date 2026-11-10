import type { Metadata } from "next";
import Link from "next/link";
import { CatalogPromotions } from "@/components/catalog/catalog-promotions";
import { CatalogGrid } from "@/components/catalog/catalog-grid";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Catálogo de perfumes",
  description: "Explore perfumes originais da TJ Importados, com documentação e envio rastreável para todo o Brasil.",
};

export default function CatalogPage() {
  return <>
    <SiteHeader />
    <main id="conteudo" tabIndex={-1}>
      <CatalogPromotions />
      <section id="produtos-catalogo" className="container section catalog-section" aria-label="Perfumes do catálogo"><CatalogGrid /></section>
      <section className="catalog-cta"><div className="container"><div><p className="eyebrow">PRECISA DE AJUDA?</p><h2>A escolha certa começa com uma conversa.</h2></div><Link href="/#como-comprar" className="button button-gold">Falar com a TJ <Icon name="arrow" /></Link></div></section>
    </main>
    <SiteFooter />
  </>;
}
