"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, Sparkles, ArrowDown } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { siteConfig } from "@/config/site";

/**
 * بخش نمونه کارها — کارت ویژه پیکو + دعوت به همکاری
 */
export default function Projects() {
  const { showcase } = siteConfig;

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      {/* نور پس‌زمینه */}
      <div
        className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <SectionHeading index="۰۲" title="نمونه" highlight="کارها" />

      {/* کارت ویژه پروژه */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass group relative grid overflow-hidden rounded-3xl transition-all duration-500 hover:border-primary/50 hover:shadow-[0_24px_80px_-20px_oklch(0.78_0.19_150/0.4)] lg:grid-cols-5"
      >
        {/* هاله هاور */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-primary/0 blur-3xl transition-all duration-700 group-hover:bg-primary/20"
          aria-hidden="true"
        />

        {/* محتوا */}
        <div className="relative flex flex-col justify-center p-8 md:p-12 lg:col-span-3">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-limeglow/40 bg-limeglow/10 px-4 py-1.5 text-xs font-bold text-limeglow">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              نمونه‌کار واقعی
            </span>
            <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-mint/80">
              {showcase.year}
            </span>
          </div>

          <h3 className="text-2xl font-black leading-snug md:text-4xl">
            {showcase.name}
          </h3>
          <p className="mt-2 text-sm font-bold text-primary/90" dir="ltr" style={{ textAlign: "right" }}>
            {showcase.domain}
          </p>

          <p className="mt-5 text-sm leading-8 text-foreground/70 md:text-base md:leading-9">
            {showcase.description}
          </p>

          <div className="mt-4 text-xs font-medium text-foreground/50">
            نقش من: <span className="font-bold text-mint">{showcase.role}</span>
          </div>

          {/* تگ‌ها */}
          <div className="mt-5 flex flex-wrap gap-2">
            {showcase.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-mint/85 transition-colors group-hover:bg-primary/15"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* دکمه مشاهده */}
          <div className="mt-8">
            <a
              href={showcase.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-l from-primary to-limeglow px-7 py-3.5 font-extrabold text-primary-foreground shadow-[0_0_28px_oklch(0.78_0.19_150/0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_44px_oklch(0.78_0.19_150/0.55)]"
            >
              مشاهده زنده سایت
              <ExternalLink className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ماکاپ مرورگر */}
        <div className="relative flex items-center justify-center border-t border-primary/15 bg-gradient-to-br from-primary/10 via-transparent to-limeglow/10 p-8 md:p-12 lg:col-span-2 lg:border-t-0 lg:border-r">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: -1.5, scale: 1.03 }}
            className="w-full max-w-xs overflow-hidden rounded-2xl border border-primary/25 bg-[oklch(0.17_0.032_155)] shadow-[0_20px_60px_-15px_oklch(0_0_0/0.6)]"
            aria-hidden="true"
          >
            {/* نوار مرورگر */}
            <div className="flex items-center gap-2 border-b border-primary/15 bg-foreground/5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="mr-auto flex items-center gap-1.5 rounded-lg bg-foreground/5 px-3 py-1 font-mono text-[10px] text-foreground/55" dir="ltr">
                <Globe className="h-3 w-3" />
                {showcase.domain}
              </span>
            </div>
            {/* بدنه مرورگر */}
            <div className="flex flex-col items-center gap-4 px-6 py-10">
              <span className="relative">
                <span
                  className="absolute inset-0 animate-pulse-glow rounded-full bg-primary/30 blur-xl"
                  aria-hidden="true"
                />
                <Image
                  src="/logo.png"
                  alt=""
                  width={72}
                  height={72}
                  className="relative h-18 w-18 rounded-2xl"
                />
              </span>
              <div className="h-2.5 w-24 rounded-full bg-primary/40" />
              <div className="h-2.5 w-16 rounded-full bg-primary/20" />
              <div className="mt-2 grid w-full grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-12 rounded-lg bg-primary/10" />
                ))}
              </div>
              <div className="h-8 w-full rounded-lg bg-gradient-to-l from-primary/50 to-limeglow/50" />
            </div>
          </motion.div>
        </div>
      </motion.article>

      {/* کارت دعوت */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="group mt-8 flex items-center justify-between gap-4 rounded-3xl border-2 border-dashed border-primary/30 bg-primary/5 px-7 py-6 transition-all duration-300 hover:border-limeglow/60 hover:bg-primary/10"
      >
        <div>
          <p className="font-extrabold text-mint">
            ✦ جای نمونه‌کار بعدی اینجاست…
          </p>
          <p className="mt-1 text-sm text-foreground/60">
            شاید پروژه‌ی تو؟ بیا با هم بسازیمش!
          </p>
        </div>
        <span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/25 group-hover:text-limeglow"
          aria-hidden="true"
        >
          <ArrowDown className="h-5.5 w-5.5" />
        </span>
      </motion.a>
    </section>
  );
}
