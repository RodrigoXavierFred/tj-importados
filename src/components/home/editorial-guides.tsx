import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";

export function EditorialGuides() {
  return <section className="editorial-guides" aria-labelledby="editorial-guides-title">
    <div className="container">
      <div className="editorial-guides-heading">
        <div><p className="eyebrow">CONHEÇA A TJ E ESSE UNIVERSO</p><h2 id="editorial-guides-title">Histórias que começam<br />antes do primeiro borrifo.</h2></div>
        <p>Descubra quem está por trás da curadoria e entenda por que os perfumes árabes conquistaram tanto espaço.</p>
      </div>
      <div className="editorial-guides-grid">
        <Link href="/quem-somos" className="editorial-card editorial-card-about">
          <Image src="/tj/hero-perfumes-v3.webp" alt="Seleção de perfumes da TJ Importados" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span className="editorial-card-shade" />
          <div><span>01 · NOSSA HISTÓRIA</span><h3>Quem somos</h3><p>Uma curadoria próxima, feita para transformar a escolha do perfume em uma experiência.</p><b>Conhecer a TJ <Icon name="arrow" /></b></div>
        </Link>
        <Link href="/perfumes-arabes" className="editorial-card editorial-card-guide">
          <span className="guide-orbit guide-orbit-one" /><span className="guide-orbit guide-orbit-two" />
          <Image className="guide-bottle guide-bottle-asad" src="/tj/asad.png" alt="Perfume árabe Asad" width={184} height={370} />
          <Image className="guide-bottle guide-bottle-yara" src="/tj/yara.png" alt="Perfume árabe Yara" width={184} height={387} />
          <div><span>02 · GUIA ESSENCIAL</span><h3>Perfumes árabes</h3><p>Concentração, matérias-primas, duração e tudo o que ajuda a encontrar a fragrância ideal.</p><b>Abrir a guia <Icon name="arrow" /></b></div>
        </Link>
      </div>
    </div>
  </section>;
}
