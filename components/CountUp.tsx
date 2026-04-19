"use client";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  end,
  delay = 0,
  duration = 1800,
}: {
  end: number;
  delay?: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => {
            const start = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * end));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, delay, duration]);

  return <span ref={ref}>{count}</span>;
}
