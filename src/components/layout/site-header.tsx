"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation, store } from "@/config/store";
import { Icon } from "@/components/ui/icon";
import { useCart } from "@/components/cart/cart-context";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return <>
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <div className="delivery-bar"><Icon name="delivery" /><span>Entrega grátis nas cidades atendidas</span><span className="delivery-extra">Sul de Minas e Joanópolis</span></div>
    <header className="site-header">
      <div className="header-inner">
        <Link href="/#inicio" className="brand" aria-label={`${store.name} — início`} onClick={() => setMenuOpen(false)}>
          <Image src="/tj/logo.png" alt={store.fullName} width={377} height={377} loading="eager" sizes="110px" />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link href="/catalogo" className="header-catalog">Abrir catálogo <Icon name="arrow" /></Link>
          <button type="button" className="cart-toggle" aria-label={`Abrir sacola com ${itemCount} ${itemCount === 1 ? "item" : "itens"}`} onClick={() => { setMenuOpen(false); openCart(); }}><Icon name="bag" />{itemCount > 0 && <span>{itemCount > 9 ? "9+" : itemCount}</span>}</button>
          <button ref={toggle} type="button" className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação no celular" hidden={!menuOpen}>
        {navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
      </nav>
    </header>
  </>;
}
