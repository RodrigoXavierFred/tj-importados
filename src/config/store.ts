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
  { label: "Quem somos", href: "/quem-somos" },
  { label: "Perfumes árabes", href: "/perfumes-arabes" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Todos os perfumes", href: "/catalogo-completo" },
  { label: "Entregas", href: "/#entregas" },
] as const;
