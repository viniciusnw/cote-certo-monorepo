export * from "./date";
export * as constants from "./constants";

export const isBrowser = () => typeof window !== "undefined";

export function formatCurrency(currency: number | undefined, stripSymbols?: boolean) {
  if (!currency) return;
  const value = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currency);

  if (stripSymbols) return value.replace(/[^0-9,-]+/g, "");
  return value;
}

export const width = () => {
  if (!isBrowser()) return 0;
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};
