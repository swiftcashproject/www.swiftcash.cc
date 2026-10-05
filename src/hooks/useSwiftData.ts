import { useState, useEffect, useCallback } from 'react';

export interface SwiftMarketData {
  price: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number | null;
  priceChange24h: number;
  priceChange7d: number;
  priceChange30d: number;
  ath: number;
  athChangePercentage: number;
  atl: number;
  atlChangePercentage: number;
  marketCapRank: number;
  high24h: number;
  low24h: number;
  sparkline: number[];
  lastUpdated: string;
  logoUrl: string;
}

export interface SwiftStats {
  holders: number | null;
  stakers: number | null;
  stakedAmount: number | null;
  interestRate: number;
}

export interface SwiftData {
  market: SwiftMarketData | null;
  stats: SwiftStats;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const DEFAULT_STATS: SwiftStats = {
  holders: null,
  stakers: null,
  stakedAmount: null,
  interestRate: 3,
};

export function useSwiftData(): SwiftData {
  const [market, setMarket] = useState<SwiftMarketData | null>(null);
  const [stats] = useState<SwiftStats>(DEFAULT_STATS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=swiftcash&sparkline=true&price_change_percentage=24h,7d,30d'
      );

      if (!res.ok) {
        if (res.status === 429) throw new Error('rate_limited');
        throw new Error('fetch_failed');
      }

      const json = await res.json();
      if (json.status?.error_code) throw new Error('api_error');

      const d = json[0];
      if (!d) throw new Error('no_data');

      setMarket({
        price: d.current_price ?? 0,
        marketCap: d.market_cap ?? 0,
        volume24h: d.total_volume ?? 0,
        circulatingSupply: d.circulating_supply ?? 0,
        totalSupply: d.total_supply ?? 0,
        maxSupply: d.max_supply ?? null,
        priceChange24h: d.price_change_percentage_24h ?? 0,
        priceChange7d: d.price_change_percentage_7d_in_currency ?? 0,
        priceChange30d: d.price_change_percentage_30d_in_currency ?? 0,
        ath: d.ath ?? 0,
        athChangePercentage: d.ath_change_percentage ?? 0,
        atl: d.atl ?? 0,
        atlChangePercentage: d.atl_change_percentage ?? 0,
        marketCapRank: d.market_cap_rank ?? 0,
        high24h: d.high_24h ?? 0,
        low24h: d.low_24h ?? 0,
        sparkline: d.sparkline_in_7d?.price ?? [],
        lastUpdated: d.last_updated ?? new Date().toISOString(),
        logoUrl: d.image ?? '',
      });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'unknown';
      if (msg === 'rate_limited') {
        setError('Live data temporarily unavailable due to API rate limits. Showing cached values.');
      } else {
        setError('Unable to fetch live market data. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 600000);
    return () => clearInterval(interval);
  }, [fetchData]);

  return { market, stats, loading, error, refetch: fetchData };
}
