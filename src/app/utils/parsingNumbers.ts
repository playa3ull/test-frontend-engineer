// formatCurrency function formats a number as a currency without rounding it.
// formatCurrency(1234.56) => "$1,234.56"
export const formatCurrency = (value: number): string => {
  return `$${value.toFixed(2).toLocaleString()}`
};