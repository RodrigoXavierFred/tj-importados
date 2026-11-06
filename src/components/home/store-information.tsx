import { store } from "@/config/store";

const steps = [
  { title: "Encontre seu perfume", text: "Explore as fragrâncias e conheça as opções da nossa seleção." },
  { title: "Converse com a TJ", text: "Conte quais perfumes você gostou e tire suas dúvidas pelo atendimento." },
  { title: "Combine sua entrega", text: "A TJ confirma disponibilidade, pagamento e envio local ou para qualquer lugar do Brasil." },
];

export function StoreInformation() {
  return <>
    <section className="buying-section" id="como-comprar" aria-labelledby="buying-title"><div className="container section">
      <p className="eyebrow">DO SEU JEITO, SEM COMPLICAÇÃO</p><h2 id="buying-title">Uma escolha. Uma boa conversa.</h2>
      <div className="buying-grid">{steps.map((step, index) => <div className="buying-step" key={step.title}><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}</div>
    </div></section>
    <section className="container section delivery-section" id="entregas" aria-labelledby="delivery-title">
      <div><p className="eyebrow">DO ATENDIMENTO LOCAL AO ENVIO NACIONAL</p><h2 id="delivery-title">O cuidado chega<br />até a sua porta.</h2><p className="delivery-description">Entrega grátis nas cidades atendidas e envio para todo o Brasil. Para outras cidades, consulte o frete e o prazo informando seu CEP.</p></div>
      <div><ul className="city-list">{store.cities.map(city => <li key={city.name}>{city.name}<span>{city.state}</span></li>)}</ul><p className="nearby-note">As cidades acima contam com entrega local gratuita. Para as demais regiões, enviamos por transportadora ou Correios, conforme disponibilidade.</p></div>
      <div className="shipping-trust" aria-label="Garantias de compra e envio"><article><span>01</span><strong>Perfumes originais</strong><p>Produtos autênticos, selecionados de fornecedores confiáveis.</p></article><article><span>02</span><strong>Com documentação</strong><p>Compra acompanhada da documentação correspondente.</p></article><article><span>03</span><strong>Envio rastreável</strong><p>Você recebe o código ou ID para acompanhar o envio.</p></article></div>
    </section>
  </>;
}
