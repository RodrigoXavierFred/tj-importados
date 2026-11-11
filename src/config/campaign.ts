// Troque para "christmas" no Natal ou null para desativar a campanha.
// Edite os textos e a cor abaixo. As ofertas e preços ficam em src/data/promotions.ts.
export type CampaignKey = "black-friday" | "christmas";
export const activeCampaign: CampaignKey | null = "black-friday";

export const campaigns = {
  "black-friday": {
    eyebrow: "O ESQUENTA JÁ COMEÇOU",
    title: "BLACK", highlight: "FRIDAY",
    label: "Esquenta Black Friday",
    homeMessage: "Ofertas especiais para deixar sua marca.",
    action: "Ver ofertas", href: "/catalogo",
    description: "Ofertas especiais. Sua próxima fragrância está aqui.",
    accent: "#e7b85e",
  },
  christmas: {
    eyebrow: "TEMPO DE PRESENTEAR",
    title: "NATAL", highlight: "TJ",
    label: "Natal TJ Importados",
    homeMessage: "Um presente para ficar na memória.",
    action: "Ver presentes", href: "/catalogo",
    description: "Presentes especiais para surpreender quem você ama.",
    accent: "#ddbc76",
  },
} as const;

export function getCampaign(key: CampaignKey | null) {
  return key ? campaigns[key] : null;
}

export const campaign = getCampaign(activeCampaign);
