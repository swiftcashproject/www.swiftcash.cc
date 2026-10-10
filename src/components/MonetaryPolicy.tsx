import { useState, useEffect, useRef } from 'react';
import { Scale, Gauge, CalendarDays, ChartLine, BadgePercent, BadgeCheck, Layers, ChartPie, ChartSpline } from 'lucide-react';
import type { SwiftData } from '@/hooks/useSwiftData';

interface MonetaryPolicyProps {
  data: SwiftData;
}

export default function MonetaryPolicy({ data }: MonetaryPolicyProps) {
  const targetRate = data.stats.interestRate;
  const [rate, setRate] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let target = targetRate;
    let current = 0;
    const step = 0.1;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setRate(parseFloat(current.toFixed(2)));
    }, 30);
    return () => clearInterval(interval);
  }, [inView, targetRate]);

  const ratePosition = ((rate - 1) / 9) * 100;

  return (
    <section ref={sectionRef} id="monetary-policy" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium mb-5">
            <ChartLine size={15} className="animate-icon-bounce" />
            Decentralized Interest Rates
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stake-Driven Rate Decisions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            SwiftCash puts monetary policy in the hands of its stakeholders. Like a decentralized bank, stakeholders collectively control the annual interest rate, adjusting it between 1% and 10%. Each stakeholder's influence is proportional to their stake, with rate hikes or rate cuts permitted once per calendar month.
          </p>
        </div>

        {/* Interest rate gauge */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/60 backdrop-blur-sm border border-slate-800/60 shadow-2xl">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 uppercase tracking-wider mb-2">Current Annual Interest Rate<BadgePercent size={17} className="text-sky-400" /></div>
            <div className="text-6xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              {rate.toFixed(2)}%
            </div>
            <div className="mt-2 text-slate-400">APR, minted and paid by the protocol<BadgeCheck size={17} className="text-sky-400" /></div>
          </div>

          {/* Rate bar */}
          <div className="relative mb-6">
            <div className="h-4 rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-500 opacity-30" />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-sky-400 border-4 border-slate-900 shadow-lg shadow-sky-500/50 transition-all duration-1000 ease-out"
              style={{ left: `calc((100% - 16px) * ${ratePosition} / 100 - 4px)` }}
            />
          </div>
          <div className="flex justify-between text-sm text-slate-500">
            <span>1% Min</span>
            <span>10% Max</span>
          </div>
          
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <Layers size={22} className="text-sky-400 mb-3" />
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total Deposits</div>
              <div className="text-2xl font-bold text-white">150M SWIFT</div>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <ChartPie size={22} className="text-emerald-400 mb-3" />
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Participation Rate</div>
              <div className="text-2xl font-bold text-white">55%</div>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <ChartSpline size={22} className="text-amber-400 mb-3" />
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Annualized Inflation</div>
              <div className="text-2xl font-bold text-white">1.65%</div>
            </div>
          </div>

          {/* Rules */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <Scale size={22} className="text-emerald-400 mb-3" />
              <h3 className="text-white font-semibold mb-1.5">Proportional Power</h3>
              <p className="text-sm text-slate-400">Each stakeholder's influence on the rate is proportional to their stake size.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <CalendarDays size={22} className="text-sky-400 mb-3" />
              <h3 className="text-white font-semibold mb-1.5">Monthly Rate Decisions</h3>
              <p className="text-sm text-slate-400">Each stakeholder can adjust the rate once per calendar month.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <Gauge size={22} className="text-amber-400 mb-3" />
              <h3 className="text-white font-semibold mb-1.5">Monthly Change Cap: ±1%</h3>
              <p className="text-sm text-slate-400">Monthly rate changes are capped at 1% in either direction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
