interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 48, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="SwiftCash logo"
    >
      <defs>
        <linearGradient id="swiftCoinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b9eff" />
          <stop offset="50%" stopColor="#1e7cd5" />
          <stop offset="100%" stopColor="#0a5fb0" />
        </linearGradient>
        <linearGradient id="swiftCoinInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e7cd5" />
          <stop offset="100%" stopColor="#0a4d8c" />
        </linearGradient>
        <filter id="swiftCoinShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0a5fb0" floodOpacity="0.4" />
        </filter>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#swiftCoinGradient)" filter="url(#swiftCoinShadow)" />
      <circle cx="50" cy="50" r="46" stroke="#0a4d8c" strokeWidth="2" fill="none" opacity="0.3" />
      <circle cx="50" cy="50" r="38" fill="url(#swiftCoinInner)" opacity="0.5" />
      <path
        d="M52 18 L34 54 L46 54 L42 82 L66 44 L52 44 L58 18 Z"
        fill="white"
        stroke="white"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
