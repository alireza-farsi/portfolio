"use client";

import { Reveal } from "./reveal";

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
    <Reveal
      y={16}
      amount={0.5}
      duration={0.6}
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
    </Reveal>
  );
}
