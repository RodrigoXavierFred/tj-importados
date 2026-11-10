import { ProductCard } from "@/components/catalog/product-card";
import Link from "next/link";
import { featuredProducts } from "@/data/products";
import { Icon } from "@/components/ui/icon";

export function ProductShowcase() {
  return <section className="container section" id="perfumes" aria-labelledby="showcase-title">
    <div className="section-heading"><div><p className="eyebrow">ESCOLHAS PARA DESCOBRIR</p><h2 id="showcase-title">Qual é a sua essência?</h2></div><p className="section-aside">Uma seleção para<br />cada momento seu.</p></div>
    <div className="product-grid">{featuredProducts.map(product => <ProductCard key={product.id} product={product} />)}</div>
    <div className="showcase-action"><Link href="/catalogo" className="button button-outline">Explorar catálogo completo <Icon name="arrow" /></Link></div>
  </section>;
}
