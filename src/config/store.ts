// Informações da loja reunidas em um só lugar para facilitar a manutenção.
export const store = {
  name: "TJ Importados",
  fullName: "TJ Perfumes Importados",
  description: "Perfumes que fazem parte da sua história.",
  domain: "tjimportados.com.br",
  cities: [
    { name: "Santa Rita do Sapucaí", state: "MG" },
    { name: "Extrema", state: "MG" },
    { name: "Estiva", state: "MG" },
    { name: "Joanópolis", state: "SP" },
  ],
} as const;

export const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Destaques", href: "/#perfumes" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Todos os perfumes", href: "/catalogo-completo" },
  { label: "Como comprar", href: "/#como-comprar" },
  { label: "Entregas", href: "/#entregas" },
] as const;
