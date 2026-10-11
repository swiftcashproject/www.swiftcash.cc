import { Cpu, GitBranch, CalendarArrowUp, Luggage, ShieldCheck, Milestone } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TIMELINE: TimelineEvent[] = [
  {
    year: 'July 2017',
    title: 'Proof-of-Work Origins',
    description: 'The SwiftCash journey dates back to July 2017 as a modified fork of Bitcoin, with elements of Proof-of-Labor and Proof-of-Stake.',
    icon: <Cpu size={24} />,
  },
  {
    year: 'October 2018',
    title: 'Transition to Proof-of-Stake',
    description: 'On October 28, 2018, SwiftCash forked into a 100% Proof-of-Stake blockchain, enabling decentralized staking and interest payments.',
    icon: <GitBranch size={24} />,
  },
  {
    year: 'November 2026',
    title: 'Migration to the BNB Chain',
    description: 'On November 25, 2026, SwiftCash transitioned to a native BEP-20 token on the BNB Chain. An additional ~15M SWIFT was minted to establish permanent liquidity pools.',
    icon: <Luggage size={24} />,
  },
  {
    year: 'Ongoing',
    title: 'Non-Custodial Yields',
    description: 'Decentralized and non-custodial deposits that earn interest, stake-driven rate decisions, and no team or developer funds to dilute your stake.',
    icon: <ShieldCheck size={24} />,
  },
  {
    year: 'Upcoming',
    title: 'Non-Inflationary Farms',
    description: 'Lend USDT, USDC, BNB, CAKE, BTC, LTC, etc and earn $SWIFT, powered by the Venus protocol. The yield from Venus will be used to buy SwiftCash at market price.',
    icon: <CalendarArrowUp size={24} />,
  },
];

export default function History() {
  return (
    <section id="history" className="relative py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium mb-5">
            <Milestone size={15} className="animate-icon-bounce" />
            History and Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Bitcoin Fork, PoS and DeFi</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            SwiftCash has evolved from a Bitcoin fork into a 100% Proof-of-Stake economy with stake-driven rate decisions and non-custodial yields.
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
