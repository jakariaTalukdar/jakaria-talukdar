"use client";

import { useEffect, useRef, useState } from "react";

function parseStatValue(value) {
  const numeric = parseInt(String(value).replace(/[^\d]/g, ""), 10);
  const suffix = String(value).replace(/[\d\s,]/g, "");
  return {
    target: Number.isFinite(numeric) ? numeric : 0,
    suffix,
  };
}

export default function StatCounter({ value, duration = 3000, className = "" }) {
  const { target, suffix } = parseStatValue(value);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frameId;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
