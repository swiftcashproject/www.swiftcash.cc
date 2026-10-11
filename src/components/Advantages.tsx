import { Layers2, Scale3D, ChartPie, GitCompareArrows } from 'lucide-react';

export default function Advantages() {
  return (
    <section id="advantages" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium mb-5">
            <GitCompareArrows size={15} className="animate-icon-bounce" />
            Monetary Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Beyond Artificial Scarcity</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Rather than relying solely on a fixed supply, SwiftCash takes a different approach by utilizing inflation not only to counter dilution, but also to give stakeholders the opportunity to increase their ownership percentage over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group p-7 rounded-2xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 transition-all duration-300 hover:scale-[1.02]">
            <div className="inline-flex p-3.5 rounded-xl text-sky-400 bg-sky-500/10 mb-5"><Layers2 size={28} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Beneficial Expansion</h3>
            <p className="text-slate-400 leading-relaxed">Bitcoin, Litecoin, and other PoW cryptocurrencies distribute newly issued coins among miners, whereas the SwiftCash protocol shares all its newly minted coins between stakeholders.</p>
          </div>
          <div className="group p-7 rounded-2xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 transition-all duration-300 hover:scale-[1.02]">
            <div className="inline-flex p-3.5 rounded-xl text-emerald-400 bg-emerald-500/10 mb-5"><Scale3D size={28} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Dilution Protection</h3>
            <p className="text-slate-400 leading-relaxed">Similar to Dogecoin, SwiftCash has no maximum supply. However, unlike Dogecoin, SwiftCash holders can offset 100% of the network's dilution through interest-bearing deposits.</p>
          </div>
          <div className="group p-7 rounded-2xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 transition-all duration-300 hover:scale-[1.02]">
            <div className="inline-flex p-3.5 rounded-xl text-amber-400 bg-amber-500/10 mb-5"><ChartPie size={28} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Ownership Accumulation</h3>
            <p className="text-slate-400 leading-relaxed">Unlike zero-inflationary memecoins like Shiba Inu, SwiftCash allows holders to grow their share of the total supply through inflation, without additional investment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
