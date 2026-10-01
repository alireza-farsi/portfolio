"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

type GroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
};

/**
 * گروه استگر — فقط «یک» ناظر (Observer) برای کل گروه.
 * بچه‌ها variantها را از والد ارث می‌برند و ناظر مستقل ندارند؛
 * به همین دلیل هیچ چشمک‌زدن، پرش یا دوباره‌اجرا بین انیمیشن‌های تو‌در‌تو رخ نمی‌دهد.
 * با once:true وضعیت show بعد از اولین نمایش برای همیشه قفل می‌شود.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  amount = 0.2,
}: GroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
};

/** آیتم داخل RevealGroup — بدون ناظر مستقل؛ فقط از والد ارث می‌برد */
export function RevealItem({
  children,
  className,
  y = 24,
  x = 0,
  scale,
  duration = 0.7,
}: ItemProps) {
  const hiddenStyle: Record<string, number> = { opacity: 0, y, x };
  const showStyle: Record<string, number> = { opacity: 1, y: 0, x: 0 };
  if (scale !== undefined) {
    hiddenStyle.scale = scale;
    showStyle.scale = 1;
  }

  return (
    <motion.div
      variants={{
        hidden: hiddenStyle,
        show: { ...showStyle, transition: { duration, ease: EASE_OUT } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type RevealProps = ItemProps & {
  delay?: number;
  amount?: number;
};

/**
 * ریویل تکی — یک ناظر برای یک عنصر.
 * با once:true وضعیت بعد از اولین اجرا قفل می‌شود و
 * حتی اگر ناظر مرورگر خطا بدهد، عنصر دیگر به حالت مخفی برنمی‌گردد.
 */
export function Reveal({
  children,
  className,
  y = 24,
  x = 0,
  delay = 0,
  duration = 0.7,
  amount = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
