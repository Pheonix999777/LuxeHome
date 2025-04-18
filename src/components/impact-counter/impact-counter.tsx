"use client";

import { useState, useEffect, useRef } from "react";

interface ImpactCounterProps {
  number: number;
  label: string;
}

export function ImpactCounter({ number, label }: ImpactCounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const countedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !countedRef.current) {
          countedRef.current = true;
          let start = 0;
          const duration = 2000; // ms
          const step = Math.ceil(number / (duration / 16)); // 60fps

          const timer = setInterval(() => {
            start += step;
            if (start > number) {
              setCount(number);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [number]);

  const formattedCount = count.toLocaleString();

  return (
    <div ref={counterRef} className="text-center p-6 bg-slate-800 rounded-xl">
      <div className="text-4xl md:text-5xl font-bold text-rose-400 mb-2">
        {formattedCount}
      </div>
      <div className="text-lg text-slate-200">{label}</div>
    </div>
  );
}
