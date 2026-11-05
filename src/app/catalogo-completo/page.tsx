import type { Metadata } from "next";
import { FullCatalogBrowser } from "@/components/catalog/full-catalog-browser";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Icon } from "@/components/ui/icon";
import { fullCatalogEntries } from "@/data/full-catalog";

export const metadata: Metadata = {
  title: "Catálogo completo de perfumes",
  description: "Consulte todas as fragrâncias do catálogo-base da TJ, sem preços, e baixe o PDF completo.",
};

export default function CompleteCatalogPage() {
  return <>
    <SiteHeader />
    <main id="conteudo" tabIndex={-1}>
      <section className="complete-hero"><div className="container complete-hero-grid">
        <div><p className="eyebrow">REFERÊNCIA COMPLETA · SEM PREÇOS</p><h1>Todos os perfumes,<br /><em>em um só lugar.</em></h1><p className="complete-lead">Uma coleção ampla para descobrir fragrâncias, comparar estilos e conhecer novas opções. As imagens foram refeitas em alta resolução, com foco nos perfumes e sem o campo de preço.</p><div className="complete-actions"><a className="button button-gold" href="/tj/catalogo-completo-tj.pdf" download>Baixar PDF completo <Icon name="arrow" /></a></div><span className="download-meta">PDF-base otimizado · 96 páginas · aproximadamente 20 MB</span></div>
        <div className="complete-summary"><span>EDIÇÃO BASE</span><strong>{fullCatalogEntries.length}</strong><p>entradas de perfumes catalogadas entre as páginas 4 e 95.</p><ul><li>Sem preços</li><li>Busca por nome</li><li>Filtro por marca</li><li>Visualização ampliada</li></ul></div>
      </div></section>
      <section className="container complete-section" aria-label="Perfumes do catálogo completo"><div className="complete-heading"><div><p className="eyebrow">EXPLORE A COLEÇÃO</p><h2>Descubra por nome ou marca.</h2></div><p>Recortes editoriais em alta definição, extraídos do material-base e apresentados sem o campo de preço.</p></div><FullCatalogBrowser /></section>
    </main>
    <SiteFooter />
  </>;
}
