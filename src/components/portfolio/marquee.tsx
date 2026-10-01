"use client";

import { Sprout } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * نوار متحرک مهارت‌ها — حلقه بی‌نهایت با چرخش ظریف
 */
export default function Marquee() {
  // دو نسخه برای حلقه بی‌نهایت
  const items = [...siteConfig.skills, ...siteConfig.skills];

  return (
    <section
      className="relative z-10 -my-6 select-none py-6"
      aria-hidden="true"
    >
      <div className="rotate-[-1.5deg] border-y border-primary/20 bg-gradient-to-l from-primary/15 via-limeglow/10 to-primary/15 py-5 backdrop-blur-sm">
        <div className="flex w-max animate-marquee items-center gap-8 pl-8">
          {items.map((skill, i) => (
            <span key={`${skill}-${i}`} className="flex items-center gap-8">
              <span className="whitespace-nowrap text-xl font-extrabold text-foreground/85 md:text-2xl">
                {skill}
              </span>
              <Sprout className="h-5 w-5 shrink-0 text-primary" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
