import type { Metadata } from "next";
import { FullCatalogBrowser } from "@/components/catalog/full-catalog-browser";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Icon } from "@/components/ui/icon";
import { fullCatalogEntries } from "@/data/full-catalog";

export const metadata: Metadata = {
  title: "Catálogo completo de perfumes",
  description: "Explore as fragrâncias da TJ, encontre seus favoritos e baixe o catálogo completo.",
};

export default function CompleteCatalogPage() {
  return <>
    <SiteHeader />
    <main id="conteudo" tabIndex={-1}>
      <section className="complete-hero"><div className="container complete-hero-grid">
        <div><p className="eyebrow">EXPLORE NOSSA SELEÇÃO</p><h1>Todos os perfumes,<br /><em>em um só lugar.</em></h1><p className="complete-lead">Uma coleção ampla para descobrir fragrâncias, comparar estilos e conhecer novas opções.</p><div className="complete-actions"><a className="button button-gold" href="/tj/catalogo-completo-tj.pdf" download>Baixar PDF completo <Icon name="arrow" /></a></div><span className="download-meta">Catálogo completo em PDF</span></div>
        <div className="complete-summary"><span>NOSSO CATÁLOGO</span><strong>{fullCatalogEntries.length}</strong><p>opções para descobrir sua próxima fragrância.</p><ul><li>Busca por nome</li><li>Filtro por marca</li><li>Visualização ampliada</li></ul></div>
      </div></section>
      <section className="container complete-section" aria-label="Perfumes do catálogo completo"><div className="complete-heading"><div><p className="eyebrow">EXPLORE A COLEÇÃO</p><h2>Descubra por nome ou marca.</h2></div><p>Explore as opções e encontre o perfume que combina com você.</p></div><FullCatalogBrowser /></section>
    </main>
    <SiteFooter />
  </>;
}
