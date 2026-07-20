const priceFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 0,
});

/** 1250 → "1.250 ₺" */
export function formatPrice(price: number): string {
  return `${priceFormatter.format(price)} ₺`;
}
