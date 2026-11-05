const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency", currency: "BRL",
});

export function formatPrice(cents: number) {
  return currency.format(cents / 100);
}
