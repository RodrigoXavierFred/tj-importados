"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useCart } from "@/components/cart/cart-context";
import { Icon } from "@/components/ui/icon";
import { formatPrice } from "@/lib/format";
import { store } from "@/config/store";

export function CartDrawer() {
  const { items, itemCount, totalCents, isOpen, closeCart, removeItem, updateQuantity } = useCart();

  const message = useMemo(() => {
    if (!items.length) return "";
    const products = items.map(item => `• ${item.quantity}x ${item.product.name} — ${formatPrice(item.product.priceCents * item.quantity)}`).join("\n");
    return `Olá, TJ Perfumes! Tenho interesse nestes produtos:\n\n${products}\n\nTotal estimado: ${formatPrice(totalCents)}\n\nGostaria de confirmar a disponibilidade e calcular o envio para o meu CEP.`;
  }, [items, totalCents]);

  const whatsappUrl = `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return <>
    <button type="button" className={`cart-backdrop ${isOpen ? "is-open" : ""}`} aria-label="Fechar sacola" onClick={closeCart} tabIndex={isOpen ? 0 : -1} />
    <aside className={`cart-drawer ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen} aria-label="Sacola de perfumes">
      <div className="cart-drawer-header">
        <div><span>SUA SELEÇÃO</span><h2>Sacola <small>{itemCount}</small></h2></div>
        <button type="button" aria-label="Fechar sacola" onClick={closeCart}><Icon name="close" /></button>
      </div>

      {!items.length ? <div className="cart-empty"><Icon name="bag" /><h3>Sua sacola está vazia</h3><p>Abra um perfume, veja os detalhes e adicione os seus favoritos aqui.</p><button type="button" className="button button-gold" onClick={closeCart}>Continuar escolhendo</button></div> : <>
        <div className="cart-items">
          {items.map(({ product, quantity }) => <article className="cart-item" key={product.id}>
            <div className="cart-item-image"><Image src={product.modalImage ?? product.image} alt={`${product.brand} ${product.name}`} width={product.modalImageWidth ?? product.imageWidth} height={product.modalImageHeight ?? product.imageHeight} /></div>
            <div className="cart-item-copy"><span>{product.brand}</span><h3>{product.name}</h3><strong>{formatPrice(product.priceCents)}</strong>
              <div className="cart-quantity"><button type="button" aria-label={`Diminuir quantidade de ${product.name}`} onClick={() => updateQuantity(product.id, quantity - 1)}>−</button><b>{quantity}</b><button type="button" aria-label={`Aumentar quantidade de ${product.name}`} onClick={() => updateQuantity(product.id, quantity + 1)}>+</button></div>
            </div>
            <button type="button" className="cart-remove" onClick={() => removeItem(product.id)}>Remover</button>
          </article>)}
        </div>
        <div className="cart-summary">
          <div className="cart-total"><span>Total estimado</span><strong>{formatPrice(totalCents)}</strong></div>
          <div className="cart-message-preview"><span>Mensagem pronta</span><p>{message}</p></div>
          <a className="button button-gold cart-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">Enviar pedido pelo WhatsApp <Icon name="arrow" /></a>
          <p className="cart-disclaimer">O pedido e a disponibilidade serão confirmados no atendimento.</p>
        </div>
      </>}
    </aside>
  </>;
}
