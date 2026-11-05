"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { fullCatalogBrands, fullCatalogEntries, type FullCatalogEntry } from "@/data/full-catalog";
import { Icon } from "@/components/ui/icon";

export function FullCatalogBrowser() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("Todas as marcas");
  const [selected, setSelected] = useState<FullCatalogEntry | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const entries = useMemo(() => fullCatalogEntries.filter(item => {
    const normalized = `${item.name} ${item.brand}`.toLocaleLowerCase("pt-BR");
    return (brand === "Todas as marcas" || item.brand === brand) && normalized.includes(query.toLocaleLowerCase("pt-BR"));
  }), [brand, query]);

  useEffect(() => {
    if (!selected || dialog.current?.open) return;
    dialog.current?.showModal();
    document.body.classList.add("modal-open");
  }, [selected]);

  function closePreview() {
    dialog.current?.close();
    document.body.classList.remove("modal-open");
    setSelected(null);
  }

  return <>
    <div className="complete-tools">
      <label className="complete-search"><span className="sr-only">Buscar no catálogo completo</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar perfume ou marca" /></label>
      <label className="complete-select"><span>Marca</span><select value={brand} onChange={event => setBrand(event.target.value)}><option>Todas as marcas</option>{fullCatalogBrands.map(item => <option key={item}>{item}</option>)}</select></label>
      <p><strong>{entries.length}</strong> opções encontradas</p>
    </div>

    <div className="complete-grid">{entries.map(item => <article className="complete-card" key={`${item.page}-${item.name}`}>
      <button type="button" className="complete-preview" onClick={() => setSelected(item)} aria-label={`Abrir ${item.name}, página ${item.page}`}>
        <span className="complete-page">PÁG. {String(item.page).padStart(2, "0")}</span>
        <Image src={item.image} alt={`Imagem em alta resolução de ${item.brand} ${item.name}`} width={1001} height={1982} sizes="(max-width: 760px) 46vw, 260px" />
        <span className="complete-zoom">Ampliar <Icon name="plus" /></span>
      </button>
      <div className="complete-card-copy"><p>{item.brand}</p><h2>{item.name}</h2><span>Imagem limpa em alta resolução · sem preço</span></div>
    </article>)}</div>

    {!entries.length && <p className="empty-state">Nenhum perfume encontrado. Tente outra marca ou forma de escrever.</p>}

    {selected && <dialog ref={dialog} className="catalog-page-modal" onClose={() => { document.body.classList.remove("modal-open"); setSelected(null); }} onClick={event => { if (event.target === event.currentTarget) closePreview(); }}>
      <div className="catalog-page-panel">
        <button type="button" className="modal-close" aria-label="Fechar página" onClick={closePreview}><Icon name="close" /></button>
        <div className="catalog-page-image"><Image src={selected.image} alt={`Imagem de ${selected.name} extraída da página ${selected.page}`} width={1001} height={1982} sizes="(max-width: 760px) 100vw, 66vw" /></div>
        <div className="catalog-page-info"><div><p>{selected.brand}</p><h2>{selected.name}</h2><span>Fonte: página {selected.page} do catálogo-base · imagem sem campo de preço</span></div><a className="button button-outline" href={`/tj/catalogo-completo-tj.pdf#page=${selected.page}`} target="_blank" rel="noreferrer">Abrir PDF-base <Icon name="arrow" /></a></div>
      </div>
    </dialog>}
  </>;
}
