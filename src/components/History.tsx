import { Cpu, GitBranch, Rocket, Lock } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TIMELINE: TimelineEvent[] = [
  {
    year: 'Mid 2017',
    title: 'Proof-of-Work Origins',
    description: 'SwiftCash started as a Proof-of-Work Bitcoin fork mixed with elements of Proof-of-Labor and Proof-of-Stake, establishing the foundational blockchain and initial distribution of tokens.',
    icon: <Cpu size={24} />,
  },
  {
    year: 'Late 2018',
    title: 'Transition to Proof-of-Stake',
    description: 'SwiftCash became a Proof-of-Stake blockchain on October 28, 2018, enabling decentralized staking and interest payments.',
    icon: <GitBranch size={24} />,
  },
  {
    year: 'Ongoing',
    title: 'Non-Custodial Staking',
    description: 'The SwiftCash contract accepts deposits and processes withdrawals in a decentralized non-custodial fashion with no lock-up or long-term commitment required. You retain full control of your stake at all times.',
    icon: <Lock size={24} />,
  },
  {
    year: 'Today',
    title: 'Decentralized Monetary Policy',
    description: 'Stake-weighted governance lets SwiftCash holders hike or cut the interest rate once per calendar month, with voting power proportional to their stake.',
    icon: <Rocket size={24} />,
  },
];

export default function History() {
  return (
    <section id="history" className="relative py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium mb-5">
            History
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">From forking Bitcoin to PoS</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            SwiftCash has evolved from a Bitcoin fork into a fully decentralized Proof-of-Stake digital cash with decentralized interest rates.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500/50 via-slate-700 to-slate-800 sm:-translate-x-1/2" />

          {TIMELINE.map((event, i) => (
            <div
              key={i}
              className={`relative flex items-center mb-12 last:mb-0 ${
                i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              } animate-fade-in-up`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Icon dot */}
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-slate-900 border-2 border-sky-500 flex items-center justify-center text-sky-400 shadow-lg shadow-sky-500/20">
                {event.icon}
              </div>

              {/* Content */}
              <div className={`ml-20 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-16 sm:text-right' : 'sm:pl-16'}`}>
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-sky-500/30 transition-colors duration-300">
                  <div className="text-sky-400 text-sm font-semibold mb-2">{event.year}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
