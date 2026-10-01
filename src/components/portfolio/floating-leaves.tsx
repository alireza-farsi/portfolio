"use client";

import { useMemo } from "react";

/**
 * برگ‌های سبز شناور در پس‌زمینه — با انیمیشن سقوط نرم
 */
export default function FloatingLeaves({ count = 10 }: { count?: number }) {
  const leaves = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 97) % 100,
        delay: (i * 1.37) % 9,
        duration: 8 + ((i * 1.61) % 6),
        size: 12 + ((i * 7) % 16),
        opacity: 0.25 + ((i * 13) % 40) / 100,
      })),
    [count]
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
      aria-hidden="true"
    >
      {leaves.map((leaf) => (
        <svg
          key={leaf.id}
          className="absolute animate-fall text-primary"
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            opacity: leaf.opacity,
            width: leaf.size,
            height: leaf.size,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
        </svg>
      ))}
    </div>
  );
}
