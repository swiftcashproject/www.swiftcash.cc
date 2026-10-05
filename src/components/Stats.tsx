import type { SwiftData } from '@/hooks/useSwiftData';
import { formatPrice, formatLargeNumber, formatSupply, formatPercent, formatNumber } from '@/utils/format';
import { DollarSign, BarChart3, Coins, TrendingUp, Users, Layers, Activity, Award } from 'lucide-react';

interface StatsProps {
  data: SwiftData;
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sublabel?: string;
  accent: string;
  delay: number;
}

function StatCard({ icon, label, value, sublabel, accent, delay }: StatCardProps) {
  return (
    <div
      className={`relative group p-6 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-800/60 hover:border-slate-700 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      <div className="relative">
        <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${accent} mb-4`}>
          {icon}
        </div>
        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1.5">{label}</div>
        <div className="text-2xl font-bold text-white mb-1">{value}</div>
        {sublabel && <div className="text-sm text-slate-400">{sublabel}</div>}
      </div>
    </div>
  );
}

export default function Stats({ data }: StatsProps) {
  const m = data.market;

  return (
    <section id="stats" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Live Market Statistics</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-time market data sourced from CoinGecko. Updates automatically every 10 minutes.
          </p>
          {data.error && (
            <p className="mt-3 text-sm text-amber-400/80 bg-amber-500/10 inline-block px-4 py-1.5 rounded-lg border border-amber-500/20">
              {data.error}
            </p>
          )}
        </div>

        {data.loading && !m ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-10 h-10 border-3 border-sky-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : m ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard
              icon={<DollarSign size={20} className="text-white" />}
              label="$SWIFT Price"
              value={formatPrice(m.price)}
              sublabel={`24h: ${formatPercent(m.priceChange24h)}`}
              accent="from-sky-500 to-blue-600"
              delay={0}
            />
            <StatCard
              icon={<BarChart3 size={20} className="text-white" />}
              label="Market Cap"
              value={formatLargeNumber(m.marketCap)}
              sublabel={`Rank #${formatNumber(m.marketCapRank)}`}
              accent="from-blue-500 to-indigo-600"
              delay={80}
            />
            <StatCard
              icon={<TrendingUp size={20} className="text-white" />}
              label="24h Volume"
              value={formatLargeNumber(m.volume24h)}
              sublabel={`High: ${formatPrice(m.high24h)}`}
              accent="from-cyan-500 to-sky-600"
              delay={160}
            />
            <StatCard
              icon={<Coins size={20} className="text-white" />}
              label="Circulating Supply"
              value={`${formatSupply(m.circulatingSupply)} SWIFT`}
              sublabel={`Total: ${formatSupply(m.totalSupply)} SWIFT`}
              accent="from-teal-500 to-emerald-600"
              delay={240}
            />
            <StatCard
              icon={<Activity size={20} className="text-white" />}
              label="7d Change"
              value={formatPercent(m.priceChange7d)}
              sublabel={`30d: ${formatPercent(m.priceChange30d)}`}
              accent={m.priceChange7d >= 0 ? 'from-emerald-500 to-green-600' : 'from-red-500 to-rose-600'}
              delay={320}
            />
            <StatCard
              icon={<Award size={20} className="text-white" />}
              label="All-Time High"
              value={formatPrice(m.ath)}
              sublabel={`${formatPercent(m.athChangePercentage)} from ATH`}
              accent="from-amber-500 to-orange-600"
              delay={400}
            />
            <StatCard
              icon={<Layers size={20} className="text-white" />}
              label="All-Time Low"
              value={formatPrice(m.atl)}
              sublabel={`${formatPercent(m.atlChangePercentage)} from ATL`}
              accent="from-slate-500 to-slate-600"
              delay={480}
            />
            <StatCard
              icon={<Users size={20} className="text-white" />}
              label="Consensus"
              value="Proof of Stake"
              sublabel="Since Oct 2018"
              accent="from-violet-500 to-purple-600"
              delay={560}
            />
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400">
            {data.error || 'Unable to load market data.'}
          </div>
        )}
      </div>
    </section>
  );
}
