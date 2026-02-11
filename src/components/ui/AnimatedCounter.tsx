"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView || !nodeRef.current) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent =
            prefix + value.toFixed(decimals).replace(".", ",") + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [inView, target, prefix, suffix, duration, decimals]);

  return (
    <span ref={ref}>
      <span ref={nodeRef} className={className}>
        {prefix}0{suffix}
      </span>
    </span>
  );
}
