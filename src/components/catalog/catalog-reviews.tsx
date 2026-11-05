export function CatalogReviews() {
  return <section className="catalog-reviews" aria-labelledby="reviews-title">
    <div className="container reviews-layout">
      <div className="reviews-copy"><p className="eyebrow">EXPERIÊNCIAS REAIS</p><h2 id="reviews-title">Opiniões que ajudam<br /><em>de verdade.</em></h2><p>Esta área está preparada para receber notas e comentários somente depois da confirmação da compra. Assim, cada avaliação publicada terá contexto e confiança.</p></div>
      <div className="reviews-panel">
        <div className="reviews-stars" aria-hidden="true">☆ ☆ ☆ ☆ ☆</div>
        <strong>Avaliações confirmadas aparecerão aqui.</strong>
        <p>Nenhum depoimento foi inventado para preencher o catálogo. Quando os primeiros compradores avaliarem, você verá a nota, o comentário e o selo de compra verificada.</p>
        <div className="review-rules"><span><b>01</b> Compra identificada</span><span><b>02</b> Nota de 1 a 5</span><span><b>03</b> Comentário moderado</span></div>
      </div>
    </div>
  </section>;
}
