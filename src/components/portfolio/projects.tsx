"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  LayoutDashboard,
  PenTool,
  MessageCircle,
  Rocket,
  CheckSquare,
  ArrowUpLeft,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./section-heading";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, LucideIcon> = {
  "shopping-bag": ShoppingBag,
  "layout-dashboard": LayoutDashboard,
  "pen-tool": PenTool,
  "message-circle": MessageCircle,
  rocket: Rocket,
  "check-square": CheckSquare,
};

/**
 * بخش نمونه کارها — شبکه‌ای از کارت‌های تعاملی با افکت هاور
 */
export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      {/* نور پس‌زمینه */}
      <div
        className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <SectionHeading index="۰۲" title="نمونه" highlight="کارها" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.projects.map((project, i) => {
          const Icon = iconMap[project.icon] ?? ShoppingBag;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="group glass relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_oklch(0.78_0.19_150/0.35)]"
            >
              {/* هاله هاور */}
              <div
                className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/25"
                aria-hidden="true"
              />

              {/* شماره بزرگ محو */}
              <span
                className="text-stroke pointer-events-none absolute -bottom-6 left-4 text-7xl font-black opacity-40 select-none"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* آیکون و سال */}
              <div className="relative mb-5 flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/30 to-limeglow/20 text-primary transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:text-limeglow">
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-mint/80">
                  {project.year}
                </span>
              </div>

              {/* محتوا */}
              <h3 className="relative text-xl font-extrabold transition-colors group-hover:text-mint">
                {project.title}
              </h3>
              <p className="relative mt-2.5 flex-1 text-sm leading-7 text-foreground/65">
                {project.description}
              </p>

              {/* تگ‌ها */}
              <div className="relative mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-foreground/5 px-2.5 py-1 font-mono text-[11px] font-medium text-foreground/60 transition-colors group-hover:bg-primary/10 group-hover:text-mint/80"
                    dir="ltr"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* فلش هاور */}
              <div
                className="absolute left-5 top-5 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-limeglow text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                aria-hidden="true"
              >
                <ArrowUpLeft className="h-4.5 w-4.5" />
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* لینک گیت‌هاب برای پروژه‌های بیشتر */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 text-center"
      >
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glass inline-flex items-center gap-3 rounded-2xl px-7 py-3.5 font-bold text-mint transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_30px_oklch(0.78_0.19_150/0.3)]"
        >
          پروژه‌های بیشتر در گیت‌هاب
          <span aria-hidden="true">↗</span>
        </a>
      </motion.div>
    </section>
  );
}
