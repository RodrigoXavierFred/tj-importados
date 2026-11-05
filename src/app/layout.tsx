import type { Metadata } from "next";
import type { ReactNode } from "react";
import { store } from "@/config/store";
import { EntryExperience } from "@/components/effects/entry-experience";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "TJ Importados — Sua próxima fragrância", template: "%s | TJ Importados" },
  description: "Conheça a seleção da TJ Perfumes Importados. Atendimento próximo e entrega grátis nas cidades atendidas do Sul de Minas e Joanópolis.",
  applicationName: store.name,
  icons: { icon: "/tj/logo.png" },
  // Liberar a indexação somente quando os dados comerciais forem confirmados.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="pt-BR" data-scroll-behavior="smooth"><body><EntryExperience />{children}</body></html>;
}
