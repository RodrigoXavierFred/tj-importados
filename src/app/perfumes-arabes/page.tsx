import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Guia de perfumes árabes",
  description: "Entenda as características, matérias-primas, concentração e duração dos perfumes árabes.",
};

const ingredients = [
  { name: "Oud", description: "Amadeirado profundo, resinoso e marcante. Traz densidade e assinatura luxuosa." },
  { name: "Âmbar", description: "Quente, envolvente e levemente adocicado. Ajuda a criar sensação de conforto e presença." },
  { name: "Especiarias", description: "Canela, açafrão, cardamomo e pimentas adicionam calor, contraste e personalidade." },
  { name: "Rosas e flores", description: "Equilibram intensidade com elegância, cremosidade e uma faceta mais luminosa." },
  { name: "Baunilha", description: "Entrega doçura macia e um fundo cremoso que costuma permanecer por mais tempo na pele." },
  { name: "Almíscar", description: "Traz acabamento limpo, sensual e confortável, prolongando a sensação da fragrância." },
];

export default function ArabicPerfumesPage() {
  return <>
    <SiteHeader />
    <main id="conteudo" tabIndex={-1} className="arabic-guide">
      <section className="arabic-hero">
        <div className="arabic-pattern" aria-hidden="true" />
        <div className="container arabic-hero-grid">
          <div className="arabic-hero-copy"><p className="eyebrow">GUIA ESSENCIAL TJ</p><h1>Perfumes árabes:<br /><em>presença que permanece.</em></h1><p>Conheça a tradição, as matérias-primas e os detalhes que tornam essas fragrâncias tão intensas, envolventes e memoráveis.</p><a href="#guia" className="button button-gold">Começar a leitura <Icon name="arrow" /></a></div>
          <div className="arabic-hero-bottles" aria-label="Exemplos de perfumes árabes"><span className="arabic-halo" /><Image className="arabic-asad" src="/tj/asad.png" alt="Asad da Lattafa" width={184} height={370} priority /><Image className="arabic-yara" src="/tj/yara.png" alt="Yara da Lattafa" width={184} height={387} priority /><Image className="arabic-khamrah" src="/tj/khamrah.png" alt="Khamrah da Lattafa" width={181} height={411} priority /></div>
        </div>
      </section>

      <section className="arabic-intro container" id="guia">
        <div><p className="eyebrow">POR QUE ELES CHAMAM ATENÇÃO?</p><h2>Mais concentração,<br />mais textura, mais identidade.</h2></div>
        <div><p>Os perfumes árabes são conhecidos por composições densas e expressivas. Muitas criações exploram óleos aromáticos em concentrações generosas e matérias-primas de perfil quente, resinoso, amadeirado ou adocicado.</p><p>O resultado costuma ser uma fragrância com evolução perceptível, rastro marcante e boa duração. Isso não significa que todo perfume árabe seja forte: há opções frescas, florais, cremosas e delicadas — a diferença está na construção e na identidade.</p></div>
      </section>

      <section className="guide-facts"><div className="container guide-facts-grid">
        <article><span>01</span><h3>Concentração</h3><p>Eau de Parfum e Extrait de Parfum aparecem com frequência. Quanto maior a concentração, menor costuma ser a quantidade necessária em cada aplicação.</p></article>
        <article><span>02</span><h3>Evolução na pele</h3><p>A saída é apenas o começo. Aguarde alguns minutos para perceber o coração e o fundo, onde a fragrância revela sua personalidade real.</p></article>
        <article><span>03</span><h3>Fixação e projeção</h3><p>Fixação é o tempo na pele; projeção é a distância em que o perfume é percebido. Elas variam conforme clima, pele e aplicação.</p></article>
      </div></section>

      <section className="ingredients-section container">
        <div className="ingredients-heading"><p className="eyebrow">MATÉRIAS-PRIMAS QUE CONTAM HISTÓRIAS</p><h2>Notas muito presentes na perfumaria árabe.</h2><p>Cada ingrediente pode aparecer com intensidades e combinações diferentes. Estes são alguns dos mais reconhecidos.</p></div>
        <div className="ingredients-grid">{ingredients.map((ingredient, index) => <article key={ingredient.name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{ingredient.name}</h3><p>{ingredient.description}</p></article>)}</div>
      </section>

      <section className="wear-guide"><div className="container wear-guide-grid">
        <div className="wear-guide-copy"><p className="eyebrow">COMO USAR MELHOR</p><h2>Presença sem exagero.</h2><ol><li><span>1</span><div><h3>Comece com pouco</h3><p>Duas ou três borrifadas já podem ser suficientes em fragrâncias mais concentradas.</p></div></li><li><span>2</span><div><h3>Aplique em pontos de pulsação</h3><p>Pescoço, nuca e pulsos ajudam na difusão. Evite esfregar para não alterar a evolução.</p></div></li><li><span>3</span><div><h3>Observe clima e ocasião</h3><p>Perfumes quentes pedem mais moderação no calor; opções frescas são ótimas para o dia.</p></div></li></ol></div>
        <div className="wear-guide-card"><p>ANTES DE ESCOLHER</p><h3>Não compre apenas pela nota principal.</h3><span>Considere o conjunto: família olfativa, intensidade, ocasião, clima e o tipo de presença que você deseja transmitir.</span><Link href="/catalogo" className="button button-gold">Comparar perfumes <Icon name="arrow" /></Link></div>
      </div></section>

      <section className="arabic-cta"><div className="container"><div><p className="eyebrow">AGORA FICOU MAIS FÁCIL</p><h2>Encontre uma fragrância que combine com você.</h2></div><Link href="/catalogo" className="button button-gold">Ver catálogo <Icon name="arrow" /></Link></div></section>
    </main>
    <SiteFooter />
  </>;
}
