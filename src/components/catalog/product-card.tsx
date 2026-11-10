"use client";

import { useRef } from "react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Icon } from "@/components/ui/icon";
import { ProductVisual } from "@/components/catalog/product-visual";
import { useCart } from "@/components/cart/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const ready = product.availability === "ready";
  const modal = useRef<HTMLDialogElement>(null);
  const { addItem, openCart } = useCart();

  function openModal() {
    modal.current?.showModal();
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.current?.close();
    document.body.classList.remove("modal-open");
  }

  function addToBag() {
    addItem(product);
    closeModal();
    openCart();
  }

  return <article className="product-card" aria-labelledby={`product-${product.id}`}>
    <div className="card-art">
      <span className={`availability ${ready ? "is-ready" : "is-order"}`}>{ready ? "Pronta entrega" : "Sob encomenda"}</span>
      <ProductVisual product={product} />
    </div>
    <div className="card-body">
      <p className="product-brand">{product.brand}</p>
      <h3 className="card-name" id={`product-${product.id}`}>{product.name}</h3>
      <p className="card-meta">{product.concentration} · {product.presentation ?? `${product.volumeMl} ml`}</p>
      <p className="card-family">{product.category} · {product.family}</p>
      <p className="card-price">{formatPrice(product.priceCents)}</p>
      <button type="button" className="product-open" onClick={openModal}>Conhecer perfume <Icon name="plus" /></button>
    </div>
    <dialog ref={modal} className="product-modal" onClose={() => document.body.classList.remove("modal-open")} onClick={event => { if (event.target === event.currentTarget) closeModal(); }}>
      <div className="product-modal-panel">
        <button type="button" className="modal-close" aria-label="Fechar detalhes" onClick={closeModal}><Icon name="close" /></button>
        <div className="modal-visual">
          <ProductVisual product={product} variant="modal" />
        </div>
        <div className="modal-content">
          <p className="product-brand">{product.brand}</p>
          <h2>{product.name}</h2>
          <p className="modal-meta">{product.concentration} · {product.presentation ?? `${product.volumeMl} ml`} · {product.category}</p>
          <p className="modal-description">{product.catalogDescription}</p>
          <div className="modal-block"><span>Notas principais</span><ul>{product.notes.map(note => <li key={note}>{note}</li>)}</ul></div>
          <div className="modal-block"><span>Perfil</span><ul>{product.traits.map(trait => <li key={trait}>{trait}</li>)}</ul></div>
          <div className="modal-bottom"><div><span>Preço atual</span><strong>{formatPrice(product.priceCents)}</strong></div><button type="button" className="button button-gold modal-add" onClick={addToBag}><Icon name="bag" />Adicionar à sacola</button></div>
        </div>
      </div>
    </dialog>
  </article>;
}
