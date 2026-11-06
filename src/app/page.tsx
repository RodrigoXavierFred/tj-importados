import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/home/hero";
import { ProductShowcase } from "@/components/home/product-showcase";
import { StoreInformation } from "@/components/home/store-information";
import { BestSellersCarousel } from "@/components/home/best-sellers-carousel";
import { EditorialGuides } from "@/components/home/editorial-guides";

export default function HomePage() {
  return <>
    <SiteHeader />
    <main id="conteudo" tabIndex={-1}>
      <Hero />
      <ProductShowcase />
      <BestSellersCarousel />
      <EditorialGuides />
      <StoreInformation />
    </main>
    <SiteFooter />
  </>;
}
