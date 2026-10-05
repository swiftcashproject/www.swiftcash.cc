interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
}

export default function Sparkline({ data, width = 1200, height = 300 }: SparklineProps) {
  if (!data || data.length < 2) {
    return (
      <div className="flex items-center justify-center h-[300px] text-slate-500 text-sm">
        Chart data unavailable
      </div>
    );
  }

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const padding = 20;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const points = data.map((value, i) => {
    const x = padding + (i / (data.length - 1)) * chartWidth;
    const y = padding + chartHeight - ((value - min) / range) * chartHeight;
    return { x, y };
  });

  const pathData = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(' ');

  const areaData = `${pathData} L ${points[points.length - 1].x.toFixed(2)} ${height - padding} L ${padding} ${height - padding} Z`;

  const isPositive = data[data.length - 1] >= data[0];
  const strokeColor = isPositive ? '#38bdf8' : '#f87171';
  const gradientId = isPositive ? 'sparkGradientUp' : 'sparkGradientDown';

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" preserveAspectRatio="none" role="img" aria-label="$SWIFT 7-day price chart">
      <defs>
        <linearGradient id="sparkGradientUp" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sparkGradientDown" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f87171" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f87171" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaData} fill={`url(#${gradientId})`} />
      <path
        d={pathData}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="4"
        fill={strokeColor}
        className="animate-pulse"
      />
    </svg>
  );
}
