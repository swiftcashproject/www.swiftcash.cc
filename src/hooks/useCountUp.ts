import { useState, useEffect } from 'react';

export function useCountUp(target: number | null, active: boolean, duration = 2000): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active || target === null) return;
    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}
