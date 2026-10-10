import type { SwiftData } from '@/hooks/useSwiftData';
import { ShieldCheck, HandCoins, RefreshCcwDot, Wallet, Landmark, LockKeyholeOpen, DatabaseZap } from 'lucide-react';

interface FeaturesProps {
  data: SwiftData;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
}

const FEATURES: Feature[] = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'Guaranteed Interest',
    description: 'Earn 1% to 10% APR paid directly by the SwiftCash protocol. Interest is calculated, minted and guaranteed by a decentralized and ownerless smart contract.',
    accent: 'text-sky-400 bg-sky-500/10',
  },
  {
    icon: <Wallet size={28} />,
    title: 'Non-Custodial Staking',
    description: 'Your stake remains in your own wallet while it accumulates interest. No third party, or custodian will be able to access your funds. You maintain full ownership.',
    accent: 'text-blue-400 bg-blue-500/10',
  },
  {
    icon: <RefreshCcwDot size={28} />,
    title: 'Automatic Compounding',
    description: 'Compounding is automatic for all participants. Every deposit, withdrawal, or mint-interest call mints all accrued interest, triggering compounding across the entire pool.',
    accent: 'text-cyan-400 bg-cyan-500/10',
  },
  {
    icon: <Landmark size={28} />,
    title: 'Decentralized Monetary Policy',
    description: 'Anyone who holds SwiftCash can hike or cut the interest rate once per calendar month. Each stakeholder\'s adjustment power is proportional to their stake.',
    accent: 'text-teal-400 bg-teal-500/10',
  },
  {
    icon: <HandCoins size={28} />,
    title: 'No Team/Dev Funds',
    description: 'SwiftCash has no team funds, dev funds, or budgets, and no central authority. The only way to mint new coins is via an ownerless and decentralized staking protocol.',
    accent: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    icon: <LockKeyholeOpen size={28} />,
    title: 'No Lock-In Contracts',
    description: 'No lock-in contracts or long-term commitments are required. Earn interest while keeping your funds accessible. Withdraw anytime with no penalties.',
    accent: 'text-indigo-400 bg-indigo-500/10',
  },
];

export default function Features({ data: _data }: FeaturesProps) {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium mb-5">
            <DatabaseZap size={15} className="animate-icon-bounce" />
            Core Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why SwiftCash?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A truly decentralized digital cash and cryptocurrency with non-custodial yields, and stake-driven interest rates between 1% and 10%. SwiftCash deposits are designed to always outpace the blockchain's inflation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`inline-flex p-3.5 rounded-xl ${feature.accent} mb-5 transition-transform group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
