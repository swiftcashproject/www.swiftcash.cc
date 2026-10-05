import Logo from './Logo';
import type { SwiftData } from '@/hooks/useSwiftData';
import { formatPrice, formatLargeNumber, formatPercent } from '@/utils/format';
import { ArrowDownRight, ArrowUpRight, Zap, Rocket } from 'lucide-react';

interface HeroProps {
  data: SwiftData;
}

export default function Hero({ data }: HeroProps) {
  const market = data.market;
  const change24h = market?.priceChange24h ?? 0;
  const isPositive = change24h >= 0;

  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slower" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-float">
          <Logo size={120} className="drop-shadow-2xl drop-shadow-sky-500/30" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping-slow" />
          Decentralized Monetary Governance
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
          Swift<span className="text-sky-400">Cash</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl text-slate-400 font-normal mt-3">
            Decentralized Crypto Savings
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          SwiftCash is a decentralized digital cash and peer-to-peer cryptocurrency built on BNB Chain with a stake-weighted monetary policy.
          Earn 1% to 10% APR through non-custodial staking with automatic compounding — no lock-up, no custodian, full control of your tokens at all times.
        </p>

        {/* Live price card */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 sm:px-10 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/60 shadow-2xl mb-10">
          {data.loading && !market ? (
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-sky-500 border-t-transparent rounded-full animate-spin" />
              <span className="text-slate-400 text-sm">Loading live data...</span>
            </div>
          ) : market ? (
            <>
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">$SWIFT Price</div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {formatPrice(market.price)}
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-700" />
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">24h Change</div>
                <div
                  className={`text-2xl sm:text-3xl font-bold flex items-center gap-1 ${
                    isPositive ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  {isPositive ? <ArrowUpRight size={24} /> : <ArrowDownRight size={24} />}
                  {formatPercent(change24h)}
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-700" />
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Market Cap</div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {formatLargeNumber(market.marketCap)}
                </div>
              </div>
            </>
          ) : (
            <span className="text-slate-400 text-sm">{data.error || 'Unable to load data'}</span>
          )}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wallet.swiftcash.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:scale-105"
          >
            <Rocket size={18} className="group-hover:animate-icon-bounce" />
            Launch App
          </a>
          <a
            href="./assets/whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-100 text-slate-900 font-semibold hover:bg-white transition-all duration-200 shadow-lg shadow-white/10 hover:scale-105"
          >
            <Zap size={18} className="fill-slate-900 group-hover:animate-zap-bounce" />
            Whitepaper
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-slate-500" />
        </div>
      </div>
    </section>
  );
}
