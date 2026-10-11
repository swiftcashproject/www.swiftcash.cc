import { ExternalLink, ShieldCheck, ShieldEllipsis } from 'lucide-react';

export default function Audits() {
  return (
    <section id="audits" className="relative py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-xs font-medium text-sky-300">
            <ShieldEllipsis size={15} className="animate-icon-bounce" />
            Security Audits
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Smart Contract Reviews</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg mb-10">
            SwiftCash contracts are verified and open source, with their code publicly available on the BNB blockchain explorer. Additionally, SWIFT contracts have undergone independent security assessments by AuditForge using multiple analysis engines.
          </p>

          <div className="space-y-4 text-left">
            <a href="./assets/swiftcash-audit.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-6 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5 transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/15">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300"><ShieldCheck size={26} /></div>
                <div><div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Security Audit</div><div className="text-white">SwiftCash.sol review by auditforge.org</div></div>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <div className="text-right"><div className="text-3xl font-bold text-emerald-300">100<span className="text-base font-medium text-emerald-300/70">/100</span></div><div className="text-xs text-slate-400">View report</div></div>
                <ExternalLink size={18} className="text-emerald-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
            <a href="./assets/migration-audit.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-6 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5 transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/15">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300"><ShieldCheck size={26} /></div>
                <div><div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Security Audit</div><div className="text-white">Migration.sol review by auditforge.org</div></div>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <div className="text-right"><div className="text-3xl font-bold text-emerald-300">100<span className="text-base font-medium text-emerald-300/70">/100</span></div><div className="text-xs text-slate-400">View report</div></div>
                <ExternalLink size={18} className="text-emerald-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
