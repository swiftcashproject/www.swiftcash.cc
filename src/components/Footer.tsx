import Logo from './Logo';
import { Github, Twitter, Send, MessageCircle, Facebook, Instagram, ChartCandlestick } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/swiftcashproject',
    icon: <Github size={20} />,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/swiftcashcc',
    icon: <Twitter size={20} />,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/swiftcashcc',
    icon: <Send size={20} />,
  },
  {
    label: 'Discord',
    href: 'https://discordapp.com/invite/MYVAbpD',
    icon: <MessageCircle size={20} />,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/swiftcashcc',
    icon: <Facebook size={20} />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/swiftcashcc/',
    icon: <Instagram size={20} />,
  },
];

const RESOURCE_LINKS = [
  { label: 'Explorer', href: 'https://explorer.swiftcash.cc/' },
  { label: 'CoinGecko', href: 'https://www.coingecko.com/en/coins/swiftcash' },
  { label: 'CoinMarketCap', href: 'https://coinmarketcap.com/currencies/swiftcash' },
  { label: 'BscScan', href: 'https://bscscan.com/token/0x99945f484ebc48f5307cc00cf8dcf8d6d3d4b017' },
];

export default function Footer() {
  return (
    <footer id="community" className="relative bg-slate-950 border-t border-slate-800/60">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA banner */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <Logo size={64} className="drop-shadow-lg drop-shadow-sky-500/20" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join the SwiftCash Community
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
            Start staking today and earn guaranteed interest on your digital cash. No custodian or lock-in contracts. You stay in full control.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x99945f484EBc48F5307cC00cF8dCF8d6D3d4B017"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:scale-105"
            >
              <ChartCandlestick size={18} className="group-hover:animate-icon-bounce" />
              Buy $SWIFT
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/30 hover:bg-slate-800 transition-all duration-200 hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 text-sm">
          {RESOURCE_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800/60 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Logo size={24} />
            <span className="font-bold text-white">Swift<span className="text-sky-400">Cash</span></span>
          </div>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Not financial advice. Cryptocurrency investments are subject to market risks.
          </p>
        </div>
      </div>
    </footer>
  );
}
