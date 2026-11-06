import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Icon } from "@/components/ui/icon";
import { store } from "@/config/store";

export const metadata: Metadata = {
  title: "Quem somos",
  description: "Conheça a TJ Perfumes Importados, nossa curadoria e a experiência de atendimento próximo.",
};

const pillars = [
  { number: "01", title: "Curadoria com intenção", text: "Selecionamos fragrâncias árabes e importadas com personalidade, presença e uma história para contar." },
  { number: "02", title: "Atendimento próximo", text: "A escolha acontece com conversa, escuta e orientação para encontrar um perfume que combine com você." },
  { number: "03", title: "Confiança em cada detalhe", text: "Apresentamos informações claras sobre perfil, notas, disponibilidade e valores antes da confirmação." },
  { number: "04", title: "Entrega que aproxima", text: "Levamos a experiência até as cidades atendidas e combinamos cada entrega diretamente com o cliente." },
];

export default function AboutPage() {
  return <>
    <SiteHeader />
    <main id="conteudo" tabIndex={-1}>
      <section className="about-hero">
        <Image className="about-hero-image" src="/tj/hero-perfumes-v3.webp" alt="Perfumes selecionados pela TJ Importados" fill priority sizes="100vw" />
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <div className="about-logo-seal"><Image src="/tj/logo.png" alt={store.fullName} width={377} height={377} /></div>
          <p className="eyebrow">PRAZER, SOMOS A TJ IMPORTADOS</p>
          <h1>Mais que perfumes,<br /><em>uma experiência.</em></h1>
          <p className="about-hero-lead">Uma curadoria de fragrâncias árabes e importadas com atendimento próximo, informação clara e o cuidado de ajudar cada pessoa a encontrar uma presença que seja só sua.</p>
          <Link href="/catalogo" className="button button-gold">Conhecer a seleção <Icon name="arrow" /></Link>
        </div>
      </section>

      <section className="about-intro container">
        <div className="about-intro-heading"><p className="eyebrow">NOSSA ESSÊNCIA</p><h2>Perfumes que aproximam pessoas.</h2></div>
        <div className="about-intro-copy"><p>A TJ nasceu do desejo de tornar o universo da perfumaria importada mais próximo, simples e acolhedor. Não queremos apenas apresentar frascos: queremos entender gostos, momentos e a impressão que cada cliente deseja deixar.</p><p>Atendemos Joanópolis, Sul de Minas e região com uma experiência pessoal — da primeira descoberta até a entrega.</p></div>
      </section>

      <section className="about-pillars"><div className="container">
        <div className="about-pillars-heading"><p className="eyebrow">O QUE VOCÊ ENCONTRA AQUI</p><h2>Escolher bem também faz parte da experiência.</h2></div>
        <div className="about-pillars-grid">{pillars.map(pillar => <article key={pillar.number}><span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}</div>
      </div></section>

      <section className="about-regions container">
        <div className="about-regions-visual">
          <Image src="/tj/hero-perfumes-v3.webp" alt="Frascos de Asad, Yara e Khamrah" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span>FRAGRÂNCIAS QUE CONTAM HISTÓRIAS</span>
        </div>
        <div className="about-regions-copy"><p className="eyebrow">PERTO DE VOCÊ</p><h2>Levamos até sua casa. Você escolhe com calma.</h2><p>As entregas são combinadas diretamente com a TJ nas cidades atendidas. Assim, você confirma disponibilidade, prazo e recebe orientação antes de decidir.</p><ul>{store.cities.map(city => <li key={`${city.name}-${city.state}`}><span>{city.state}</span>{city.name}</li>)}</ul><Link href="/#entregas" className="text-link">Ver informações de entrega <Icon name="arrow" /></Link></div>
      </section>

      <section className="story-cta"><div className="container"><div><p className="eyebrow">SUA PRÓXIMA HISTÓRIA</p><h2>Qual perfume vai marcar este momento?</h2></div><Link href="/catalogo" className="button button-gold">Explorar catálogo <Icon name="arrow" /></Link></div></section>
    </main>
    <SiteFooter />
  </>;
}
