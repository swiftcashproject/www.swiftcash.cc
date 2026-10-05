import type { SwiftData } from '@/hooks/useSwiftData';
import Sparkline from './Sparkline';
import { formatPrice, formatPercent } from '@/utils/format';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ChartSectionProps {
  data: SwiftData;
}

export default function ChartSection({ data }: ChartSectionProps) {
  const m = data.market;
  const hasSpark = m && m.sparkline.length > 2;
  const isPositive = m ? m.priceChange7d >= 0 : true;

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/60 backdrop-blur-sm border border-slate-800/60 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">$SWIFT / USD Price Chart</h2>
              <p className="text-sm text-slate-500">7-day price chart</p>
            </div>
            {m && (
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{formatPrice(m.price)}</div>
                </div>
                <div
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold ${
                    isPositive
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  {formatPercent(m.priceChange7d)}
                </div>
              </div>
            )}
          </div>

          <div className="relative h-[300px]">
            {data.loading && !m ? (
              <div className="flex items-center justify-center h-full">
                <div className="w-10 h-10 border-3 border-sky-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : hasSpark ? (
              <Sparkline data={m!.sparkline} />
            ) : (
              <div className="flex items-center justify-center h-full text-slate-500 text-sm">
                {data.error ? 'Chart temporarily unavailable' : 'Loading chart...'}
              </div>
            )}
          </div>

          {m && (
            <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/60">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">24h High</div>
                <div className="text-lg font-semibold text-white">{formatPrice(m.high24h)}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">24h Low</div>
                <div className="text-lg font-semibold text-white">{formatPrice(m.low24h)}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">30d Change</div>
                <div className={`text-lg font-semibold ${m.priceChange30d >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {formatPercent(m.priceChange30d)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
