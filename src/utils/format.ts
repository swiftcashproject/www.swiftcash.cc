export function formatPrice(value: number): string {
  if (value === 0) return '$0.00';
  if (value < 0.001) return `$${value.toFixed(7)}`;
  if (value < 1) return `$${value.toFixed(6)}`;
  if (value < 100) return `$${value.toFixed(4)}`;
  return `$${value.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
}

export function formatLargeNumber(value: number): string {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
  return `$${value.toFixed(2)}`;
}

export function formatSupply(value: number): string {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return value.toLocaleString('en-US');
}

export function formatPercent(value: number): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}

export function formatNumber(value: number): string {
  return value.toLocaleString('en-US');
}
