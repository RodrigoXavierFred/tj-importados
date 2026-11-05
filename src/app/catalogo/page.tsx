import type { Metadata } from "next";
import Link from "next/link";
import { CatalogGrid } from "@/components/catalog/catalog-grid";
import { CatalogReviews } from "@/components/catalog/catalog-reviews";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Catálogo de perfumes",
  description: "Explore o catálogo digital da TJ Perfumes Importados.",
};

export default function CatalogPage() {
  return <>
    <SiteHeader />
    <main id="conteudo" tabIndex={-1}>
      <section className="catalog-hero catalog-share-hero"><div className="container">
        <p className="eyebrow">CATÁLOGO PARA COMPARTILHAR</p>
        <h1>Escolha com informação.<br /><em>Compre com confiança.</em></h1>
        <div className="catalog-intro-row"><p>Uma seleção atualizada com preços, disponibilidade e detalhes úteis para decidir. As avaliações serão publicadas somente depois da confirmação da compra.</p><Link href="/#como-comprar" className="text-link">Como comprar <Icon name="arrow" /></Link></div>
        <div className="catalog-trust"><span>Preço visível</span><span>Disponibilidade clara</span><span>Notas olfativas</span><span>Avaliação verificada</span></div>
      </div></section>
      <section className="container section catalog-section" aria-label="Perfumes do catálogo"><CatalogGrid /></section>
      <CatalogReviews />
      <section className="catalog-cta"><div className="container"><div><p className="eyebrow">PRECISA DE AJUDA?</p><h2>A escolha certa começa com uma conversa.</h2></div><Link href="/#como-comprar" className="button button-gold">Falar com a TJ <Icon name="arrow" /></Link></div></section>
    </main>
    <SiteFooter />
  </>;
}
