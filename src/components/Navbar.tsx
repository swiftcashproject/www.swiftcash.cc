import { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Search } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Stats', href: '#stats' },
  { label: 'Features', href: '#features' },
  { label: 'Monetary Policy', href: '#monetary-policy' },
  { label: 'History', href: '#history' },
  { label: 'Community', href: '#community' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group">
            <Logo size={36} className="transition-transform group-hover:scale-110" />
            <span className="text-lg font-bold text-white tracking-tight">
              Swift<span className="text-sky-400">Cash</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://explorer.swiftcash.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-400 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:scale-105"
            >
              <Search size={16} className="group-hover:animate-icon-bounce" />
              Explorer
            </a>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 animate-fade-in">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors px-2 py-1.5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://explorer.swiftcash.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-sky-500 text-white text-center"
            >
              <Search size={16} className="group-hover:animate-icon-bounce" />
              Explorer
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
