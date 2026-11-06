import type { Metadata } from "next";
import Link from "next/link";
import { CatalogGrid } from "@/components/catalog/catalog-grid";
import { CatalogReviews } from "@/components/catalog/catalog-reviews";
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
      <section className="catalog-hero catalog-share-hero"><div className="container">
        <p className="eyebrow">CATÁLOGO PARA COMPARTILHAR</p>
        <h1>Escolha com informação.<br /><em>Compre com confiança.</em></h1>
        <div className="catalog-intro-row"><p>Uma seleção de perfumes originais, com preços, disponibilidade e detalhes úteis para decidir. Enviamos para todo o Brasil com documentação e código de rastreamento.</p><Link href="/#como-comprar" className="text-link">Como comprar <Icon name="arrow" /></Link></div>
        <div className="catalog-trust"><span>100% originais</span><span>Com documentação</span><span>Envio para todo o Brasil</span><span>Código de rastreamento</span><span>Preço visível</span></div>
      </div></section>
      <section className="container section catalog-section" aria-label="Perfumes do catálogo"><CatalogGrid /></section>
      <CatalogReviews />
      <section className="catalog-cta"><div className="container"><div><p className="eyebrow">PRECISA DE AJUDA?</p><h2>A escolha certa começa com uma conversa.</h2></div><Link href="/#como-comprar" className="button button-gold">Falar com a TJ <Icon name="arrow" /></Link></div></section>
    </main>
    <SiteFooter />
  </>;
}
