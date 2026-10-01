"use client";

import { motion } from "framer-motion";

/**
 * تیتر استاندارد بخش‌ها با شماره و خط تزئینی
 */
export default function SectionHeading({
  index,
  title,
  highlight,
}: {
  index: string;
  title: string;
  highlight?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 flex items-center gap-4"
    >
      <span className="font-mono text-sm font-bold text-primary md:text-base">
        {index}
      </span>
      <div className="h-px w-10 bg-primary/50 md:w-16" aria-hidden="true" />
      <h2 className="text-3xl font-black tracking-tight md:text-5xl">
        {title}{" "}
        {highlight && <span className="text-gradient-leaf">{highlight}</span>}
      </h2>
    </motion.div>
  );
}
