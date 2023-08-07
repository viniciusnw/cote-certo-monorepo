export function formatCurrency(currency: number, stripSymbols?: boolean) {
  const value = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(currency);

  if (stripSymbols) return value.replace(/[^0-9,-]+/g, '');
  return value;
}

export const formatCurrencyRegex = (value: number) =>
  `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

export const currencyToNumber = (value: string): number => {
  const float = parseInt(value.replace(/\./g, ''), 10);
  return float || 0;
};
