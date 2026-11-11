import type { Metadata } from "next";
import type { ReactNode } from "react";
import { store } from "@/config/store";
import { EntryExperience } from "@/components/effects/entry-experience";
import { CartProvider } from "@/components/cart/cart-context";
import { CartDrawer } from "@/components/cart/cart-drawer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "TJ Importados — Sua próxima fragrância", template: "%s | TJ Importados" },
  description: "Perfumes originais com documentação, atendimento próximo, entrega local e envio rastreável para todo o Brasil.",
  applicationName: store.name,
  metadataBase: new URL(`https://${store.domain}`),
  icons: { icon: "/icon.png", apple: "/tj/logo-black.png" },
  openGraph: {
    type: "website", locale: "pt_BR", siteName: store.name,
    title: "TJ Importados — Sua próxima fragrância",
    description: store.description,
    images: [{ url: "/tj/logo-black.png", width: 1254, height: 1254, alt: store.fullName }],
  },
  twitter: {
    card: "summary", title: store.name, description: store.description,
    images: ["/tj/logo-black.png"],
  },
  // Liberar a indexação somente quando os dados comerciais forem confirmados.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="pt-BR" data-scroll-behavior="smooth"><body><CartProvider><EntryExperience />{children}<CartDrawer /></CartProvider></body></html>;
}
