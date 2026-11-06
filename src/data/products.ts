export type Product = {
  id: string;
  name: string;
  brand: string;
  volumeMl: number;
  concentration: string;
  priceCents: number;
  availability: "ready" | "order";
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  modalImage?: string;
  modalImageWidth?: number;
  modalImageHeight?: number;
  category: "Feminino" | "Masculino" | "Unissex";
  family: string;
  notes: string[];
  catalogDescription: string;
  traits: string[];
  catalogPage: number;
  presentation?: string;
  imageCrop?: { x: number; y: number; width: number; height: number };
  featured?: boolean;
  bestSeller?: boolean;
};

// Dados de demonstração, ainda sem confirmação comercial pela TJ.
// Depois esta lista será substituída pela consulta ao Supabase.
export const demoProducts: Product[] = [
  {
    id: "asad", name: "Asad", brand: "Lattafa", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 30990, availability: "ready",
    description: "Intenso, ambarado e envolvente.",
    image: "/tj/catalogo-compartilhado/studio/asad.webp", imageWidth: 1024, imageHeight: 1280,
    modalImage: "/tj/asad.png", modalImageWidth: 184, modalImageHeight: 370,
    category: "Masculino", family: "Âmbar especiado", notes: ["Pimenta preta", "Tabaco", "Café", "Baunilha"],
    catalogDescription: "Uma fragrância intensa e sofisticada, com especiarias vibrantes, nuances ambaradas e fundo quente e cremoso. Pimenta preta, tabaco e café encontram baunilha e âmbar em uma assinatura poderosa e envolvente.",
    traits: ["Intenso", "Quente", "Sofisticado", "Noturno", "Poderoso"], catalogPage: 10, featured: true, bestSeller: true,
  },
  {
    id: "yara", name: "Yara", brand: "Lattafa", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 31990, availability: "order",
    description: "Doce, cremosa e delicadamente envolvente.",
    image: "/tj/catalogo-compartilhado/studio/yara.webp", imageWidth: 1024, imageHeight: 1280,
    modalImage: "/tj/yara.png", modalImageWidth: 184, modalImageHeight: 387,
    category: "Feminino", family: "Floral gourmand", notes: ["Tangerina", "Orquídea", "Baunilha", "Almíscar"],
    catalogDescription: "Uma fragrância feminina doce e envolvente, com toque tropical cremoso e elegância delicada. Perfeita para quem ama suavidade, charme e feminilidade moderna.",
    traits: ["Doce", "Agradável", "Cremoso", "Delicado", "Charmoso", "Sofisticado"], catalogPage: 43, featured: true, bestSeller: true,
  },
  {
    id: "club-de-nuit-intense-man", name: "Club de Nuit Intense Man", brand: "Armaf", volumeMl: 105,
    concentration: "Eau de Toilette", priceCents: 44990, availability: "order",
    description: "Cítrico, frutado e intensamente marcante.",
    image: "/tj/catalogo-compartilhado/studio/club-de-nuit-intense-man.webp", imageWidth: 1024, imageHeight: 1280,
    modalImage: "/tj/club-de-nuit-intense-man.webp", modalImageWidth: 667, modalImageHeight: 1000,
    category: "Masculino", family: "Cítrico frutado", notes: ["Limão siciliano", "Abacaxi", "Bétula", "Baunilha"],
    catalogDescription: "Uma fragrância intensa e sofisticada, com saída cítrica frutada e fundo amadeirado envolvente. Limão, abacaxi e cassis encontram bétula, patchouli e baunilha em uma assinatura marcante e memorável.",
    traits: ["Marcante", "Elegante", "Amadeirado", "Intenso", "Noturno", "Envolvente"], catalogPage: 9, featured: true, bestSeller: true,
  },
  {
    id: "philos-centro", name: "Philos Centro", brand: "Maison Alhambra", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 34990, availability: "order",
    description: "Floral elegante, intenso e sofisticado.",
    image: "/tj/catalogo-compartilhado/studio/philos-centro.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Unissex", family: "Floral ambarado", notes: ["Flores brancas", "Âmbar", "Madeiras", "Almíscar"],
    catalogDescription: "Uma fragrância elegante e envolvente, com assinatura floral refinada e fundo quente. Uma escolha marcante para ocasiões especiais.",
    traits: ["Elegante", "Floral", "Marcante", "Sofisticado"], catalogPage: 0, featured: true,
  },
  {
    id: "pride-of-lattafa", name: "Pride of Lattafa", brand: "Lattafa", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 37990, availability: "order",
    description: "Frutado, floral e amadeirado.",
    image: "/tj/catalogo-compartilhado/studio/pride-of-lattafa.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Masculino", family: "Frutado amadeirado", notes: ["Maçã", "Limão", "Lavanda", "Madeiras"],
    catalogDescription: "Uma composição masculina com saída frutada vibrante, coração aromático e base amadeirada de presença.",
    traits: ["Elegante", "Aromático", "Versátil", "Marcante"], catalogPage: 0,
  },
  {
    id: "seduction", name: "Seduction", brand: "Lattafa", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 37990, availability: "order",
    description: "Doce, sedutor e envolvente.",
    image: "/tj/catalogo-compartilhado/studio/seduction.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Feminino", family: "Floral frutado", notes: ["Frutas vermelhas", "Flores", "Baunilha", "Almíscar"],
    catalogDescription: "Uma fragrância feminina de perfil doce e sedutor, com flores e frutas sobre um fundo macio e envolvente.",
    traits: ["Sedutor", "Doce", "Feminino", "Noturno"], catalogPage: 0,
  },
  {
    id: "sabah-al-ward", name: "Sabah Al Ward", brand: "Al Wataniah", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 30990, availability: "ready",
    description: "Floral adocicado, delicado e marcante.",
    image: "/tj/catalogo-compartilhado/studio/sabah-al-ward.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Feminino", family: "Floral doce", notes: ["Rosa", "Flores brancas", "Baunilha", "Almíscar"],
    catalogDescription: "Um dos femininos mais procurados da seleção, combina flores, doçura e uma presença delicadamente envolvente.",
    traits: ["Mais vendido", "Floral", "Doce", "Marcante"], catalogPage: 17, featured: true, bestSeller: true,
  },
  {
    id: "khayali", name: "Khayali", brand: "Arabiyat Prestige", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 24990, availability: "order",
    description: "Amadeirado, quente e elegante.",
    image: "/tj/catalogo-compartilhado/studio/khayali.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Masculino", family: "Amadeirado oriental", notes: ["Especiarias", "Madeiras", "Âmbar", "Almíscar"],
    catalogDescription: "Perfume masculino amadeirado, com calor oriental e acabamento elegante para quem gosta de presença.",
    traits: ["Amadeirado", "Elegante", "Quente", "Noturno"], catalogPage: 0, featured: true,
  },
  {
    id: "ameerat-al-arab-vermelho", name: "Ameerat Al Arab Vermelho", brand: "Asdaaf", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 31990, availability: "order",
    description: "Floral frutado, poderoso e elegante.",
    image: "/tj/catalogo-compartilhado/studio/ameerat-al-arab.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Feminino", family: "Floral frutado", notes: ["Frutas vermelhas", "Rosa", "Flores", "Almíscar"],
    catalogDescription: "Uma fragrância feminina vibrante, elegante e marcante, apresentada em um frasco vermelho de presença.",
    traits: ["Elegante", "Marcante", "Floral", "Feminino"], catalogPage: 0,
  },
  {
    id: "luminus", name: "Luminus", brand: "Lattafa", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 31990, availability: "order",
    description: "Fresco, luminoso e floral frutado.",
    image: "/tj/catalogo-compartilhado/studio/luminus.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Feminino", family: "Floral frutado", notes: ["Frutas", "Flores", "Madeiras", "Almíscar"],
    catalogDescription: "Uma composição sofisticada que ilumina com frutas, flores e um fundo elegante de madeiras e almíscar.",
    traits: ["Luminoso", "Fresco", "Elegante", "Versátil"], catalogPage: 0,
  },
  {
    id: "dubai-nights", name: "Dubai Nights", brand: "Armaf", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 51990, availability: "order",
    description: "Luxuoso, intenso e noturno.",
    image: "/tj/catalogo-compartilhado/studio/dubai-nights.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Unissex", family: "Âmbar oriental", notes: ["Especiarias", "Âmbar", "Madeiras", "Baunilha"],
    catalogDescription: "Uma fragrância de perfil luxuoso e noturno, com calor oriental e assinatura intensa.",
    traits: ["Luxuoso", "Intenso", "Noturno", "Presenteável"], catalogPage: 0,
  },
  {
    id: "lail-maleki", name: "Lail Maleki", brand: "Lattafa", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 37990, availability: "order",
    description: "Oriental, intenso e sofisticado.",
    image: "/tj/catalogo-compartilhado/studio/lail-maleki.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Unissex", family: "Oriental especiado", notes: ["Especiarias", "Âmbar", "Madeiras", "Almíscar"],
    catalogDescription: "Perfume árabe oriental com alta presença, calor especiado e fundo marcante.",
    traits: ["Oriental", "Intenso", "Quente", "Exclusivo"], catalogPage: 0,
  },
  {
    id: "fakhar-platinum", name: "Fakhar Platinum", brand: "Lattafa", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 34990, availability: "order",
    description: "Fresco, poderoso e moderno.",
    image: "/tj/catalogo-compartilhado/studio/fakhar-platinum.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Masculino", family: "Aromático fresco", notes: ["Cítricos", "Aromáticos", "Madeiras", "Almíscar"],
    catalogDescription: "Uma fragrância masculina de frescor marcante, fixação presente e perfil contemporâneo.",
    traits: ["Fresco", "Poderoso", "Moderno", "Versátil"], catalogPage: 38,
  },
  {
    id: "thahaani", name: "Thahaani", brand: "Khadlaj", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 37990, availability: "order",
    description: "Floral frutado, intenso e cativante.",
    image: "/tj/catalogo-compartilhado/studio/thahaani.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Unissex", family: "Floral frutado", notes: ["Romã", "Rosa", "Flores", "Madeiras"],
    catalogDescription: "Uma fragrância unissex que chama atenção com flores, frutas e uma base elegante de longa duração.",
    traits: ["Cativante", "Floral", "Marcante", "Unissex"], catalogPage: 0,
  },
  {
    id: "sabah-al-ward-sugar", name: "Sabah Al Ward Sugar", brand: "Al Wataniah", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 31990, availability: "order",
    description: "Doce, frutado e feminino.",
    image: "/tj/catalogo-compartilhado/studio/sabah-al-ward-sugar.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Feminino", family: "Floral frutado doce", notes: ["Frutas vermelhas", "Flores", "Açúcar", "Baunilha"],
    catalogDescription: "Uma fragrância feminina doce e frutada, com sensação macia e uma presença encantadora.",
    traits: ["Doce", "Frutado", "Feminino", "Encantador"], catalogPage: 0,
  },
  {
    id: "fakhar-gold", name: "Fakhar Gold", brand: "Lattafa", volumeMl: 100,
    concentration: "Extrait de Parfum", priceCents: 39990, availability: "ready",
    description: "Dourado, intenso e sofisticado.",
    image: "/tj/catalogo-compartilhado/studio/fakhar-gold.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Unissex", family: "Âmbar floral", notes: ["Flores", "Âmbar", "Madeiras", "Baunilha"],
    catalogDescription: "Uma fragrância sofisticada de presença dourada, com flores envolventes e fundo quente.",
    traits: ["Sofisticado", "Intenso", "Luxuoso", "Marcante"], catalogPage: 12,
  },
  {
    id: "al-noble-wazeer", name: "Al Noble Wazeer", brand: "Lattafa", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 37990, availability: "order",
    description: "Refinado, quente e marcante.",
    image: "/tj/catalogo-compartilhado/studio/al-noble-wazeer.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Unissex", family: "Amadeirado oriental", notes: ["Especiarias", "Madeiras", "Âmbar", "Almíscar"],
    catalogDescription: "Um perfume refinado e imponente, com perfil quente e amadeirado que marca presença.",
    traits: ["Refinado", "Amadeirado", "Quente", "Marcante"], catalogPage: 57,
  },
  {
    id: "magical-lamp", name: "Magical Lamp", brand: "Khadlaj", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 51990, availability: "order",
    description: "Exótico, luxuoso e presenteável.",
    image: "/tj/catalogo-compartilhado/studio/magical-lamp.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Unissex", family: "Oriental ambarado", notes: ["Especiarias", "Âmbar", "Madeiras", "Almíscar"],
    catalogDescription: "Uma apresentação especial em formato de lâmpada, com fragrância oriental e perfil luxuoso para presentear.",
    traits: ["Luxuoso", "Exótico", "Presenteável", "Marcante"], catalogPage: 0,
  },
  {
    id: "rayhaan-dark-leather", name: "Dark Leather", brand: "Rayhaan", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 24990, availability: "order",
    description: "Couro escuro, intenso e amadeirado.",
    image: "/tj/catalogo-compartilhado/studio/rayhaan-dark-leather.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Masculino", family: "Couro amadeirado", notes: ["Couro", "Especiarias", "Madeiras", "Âmbar"],
    catalogDescription: "Uma assinatura masculina intensa, construída em couro escuro, especiarias e madeiras.",
    traits: ["Intenso", "Couro", "Masculino", "Noturno"], catalogPage: 0,
  },
  {
    id: "spectrum", name: "Spectrum", brand: "Maison Alhambra", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 39990, availability: "order",
    description: "Sofisticado, elegante e de longa duração.",
    image: "/tj/catalogo-compartilhado/studio/spectrum.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Masculino", family: "Amadeirado aromático", notes: ["Aromáticos", "Especiarias", "Madeiras", "Âmbar"],
    catalogDescription: "Uma fragrância masculina sofisticada, com personalidade, alta presença e longa duração.",
    traits: ["Sofisticado", "Elegante", "Masculino", "Longa duração"], catalogPage: 0,
  },
  {
    id: "lily", name: "Lily", brand: "Maison Asrar", volumeMl: 100,
    concentration: "Eau de Parfum", priceCents: 48990, availability: "order",
    description: "Floral frutado, delicado e encantador.",
    image: "/tj/catalogo-compartilhado/studio/lily.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Feminino", family: "Floral frutado", notes: ["Flores", "Frutas", "Baunilha", "Almíscar"],
    catalogDescription: "Um perfume feminino floral frutado, apresentado em um conjunto delicado e presenteável.",
    traits: ["Floral", "Feminino", "Delicado", "Presenteável"], catalogPage: 0,
  },
  {
    id: "club-de-nuit-elite", name: "Club de Nuit Elite", brand: "Armaf", volumeMl: 105,
    concentration: "Eau de Parfum", priceCents: 51990, availability: "order",
    description: "Sofisticado, vibrante e elegante.",
    image: "/tj/catalogo-compartilhado/studio/club-de-nuit-elite-v2.webp", imageWidth: 1024, imageHeight: 1280,
    modalImage: "/tj/club-de-nuit-elite.webp", modalImageWidth: 667, modalImageHeight: 1000,
    category: "Unissex", family: "Floral frutado", notes: ["Frutas", "Flores", "Madeiras", "Almíscar"],
    catalogDescription: "Uma fragrância sofisticada com abertura vibrante, coração floral e base elegante.",
    traits: ["Sofisticado", "Elegante", "Vibrante", "Marcante"], catalogPage: 0,
  },
  {
    id: "badee-al-oud-mini-kit", name: "Kit Badee Al Oud", brand: "Lattafa", volumeMl: 125,
    presentation: "5 miniaturas de 25 ml", concentration: "Eau de Parfum", priceCents: 39990, availability: "order",
    description: "Cinco fragrâncias em um kit para conhecer a coleção.",
    image: "/tj/catalogo-compartilhado/studio/badee-al-oud-mini-kit.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Unissex", family: "Kit de miniaturas", notes: ["5 fragrâncias", "25 ml cada", "Femininas", "Masculina"],
    catalogDescription: "Um kit com cinco miniaturas de 25 ml da linha Badee Al Oud, ideal para conhecer novas fragrâncias ou presentear.",
    traits: ["Kit", "Miniaturas", "Presenteável", "Variedade"], catalogPage: 0,
  },
  {
    id: "asad-kit", name: "Kit Asad", brand: "Lattafa", volumeMl: 100,
    presentation: "Perfume 100 ml + spray 12 ml + gel 100 ml", concentration: "Kit perfumado", priceCents: 51990, availability: "order",
    description: "Experiência completa da fragrância Asad.",
    image: "/tj/catalogo-compartilhado/studio/asad-kit.webp", imageWidth: 1024, imageHeight: 1280,
    category: "Masculino", family: "Kit âmbar especiado", notes: ["Perfume", "Spray", "Gel de banho", "Asad"],
    catalogDescription: "Kit completo Asad com Eau de Parfum, spray perfumado e gel de banho para prolongar a experiência da fragrância.",
    traits: ["Kit", "Completo", "Presenteável", "Masculino"], catalogPage: 0,
  },
];

export const featuredProducts = demoProducts.filter(product => product.featured).slice(0, 6);
export const bestSellerProducts = demoProducts.filter(product => product.bestSeller).slice(0, 4);
