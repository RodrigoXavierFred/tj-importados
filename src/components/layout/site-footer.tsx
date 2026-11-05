import Link from "next/link";
import { navigation, store } from "@/config/store";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-inner">
      <div><Link href="/#inicio" className="footer-brand">TJ <span>IMPORTADOS</span></Link><p>{store.description}</p></div>
      <nav className="footer-nav" aria-label="Navegação do rodapé">{navigation.slice(1).map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <div className="footer-domain">{store.domain}<span>Endereço previsto para a loja</span></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 {store.fullName}</span><span>Uma seleção, muitas possibilidades.</span></div>
  </footer>;
}
