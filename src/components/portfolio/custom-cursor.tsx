"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * نشانگر ماوس سفارشی: نقطه سبز + حلقه دنبال‌کننده با افکت درخشش
 * فقط در دستگاه‌هایی با ماوس دقیق نمایش داده می‌شود (کنترل با CSS media query)
 */
export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(
        !!target?.closest("a, button, [role='button'], input, textarea, select, label")
      );
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      {/* نقطه اصلی */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-2.5 w-2.5 rounded-full bg-limeglow [@media(pointer:fine)]:block"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        aria-hidden="true"
      />
      {/* حلقه دنبال‌کننده */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden rounded-full border border-primary/70 [@media(pointer:fine)]:block"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          backgroundColor: hovering
            ? "rgba(101, 175, 132, 0.14)"
            : "rgba(101, 175, 132, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        aria-hidden="true"
      />
    </>
  );
}
