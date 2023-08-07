export const width = () => {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};

export const breakpoints = () => {
  if (width() < 576) return 'xs'
  if (width() >= 576 && width() <= 768) return 'sm'
  if (width() >= 768 && width() <= 992) return 'md'
  if (width() >= 992 && width() <= 1200) return 'lg'
  if (width() >= 1200 && width() >= 1400) return 'xl'
}

export function formatCurrency(currency: number | undefined, stripSymbols?: boolean) {
  if (!currency) return;
  const value = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currency);

  if (stripSymbols) return value.replace(/[^0-9,-]+/g, "");
  return value;
}
