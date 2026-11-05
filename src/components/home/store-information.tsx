import { store } from "@/config/store";

const steps = [
  { title: "Encontre seu perfume", text: "Explore as fragrâncias e conheça as opções da nossa seleção." },
  { title: "Converse com a TJ", text: "Conte quais perfumes você gostou e tire suas dúvidas pelo atendimento." },
  { title: "Combine sua entrega", text: "A TJ confirma disponibilidade, pagamento e prazo de entrega com você." },
];

export function StoreInformation() {
  return <>
    <section className="buying-section" id="como-comprar" aria-labelledby="buying-title"><div className="container section">
      <p className="eyebrow">DO SEU JEITO, SEM COMPLICAÇÃO</p><h2 id="buying-title">Uma escolha. Uma boa conversa.</h2>
      <div className="buying-grid">{steps.map((step, index) => <div className="buying-step" key={step.title}><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}</div>
    </div></section>
    <section className="container section delivery-section" id="entregas" aria-labelledby="delivery-title">
      <div><p className="eyebrow">PERTO DE VOCÊ</p><h2 id="delivery-title">O cuidado chega<br />até a sua porta.</h2><p className="delivery-description">Entrega grátis nas cidades atendidas. Confirme com a TJ a cobertura do seu endereço e o prazo.</p></div>
      <div><ul className="city-list">{store.cities.map(city => <li key={city.name}>{city.name}<span>{city.state}</span></li>)}</ul><p className="nearby-note">Também atendemos regiões próximas, mediante confirmação.</p></div>
    </section>
  </>;
}
