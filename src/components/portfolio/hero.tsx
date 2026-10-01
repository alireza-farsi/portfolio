"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 2.2 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/**
 * بخش قهرمان: معرفی بزرگ با بلاب‌های گرادیانی و نشان چرخان
 */
export default function Hero() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* شبکه نقطه‌ای پس‌زمینه */}
      <div className="grid-dots absolute inset-0" aria-hidden="true" />

      {/* بلاب‌های گرادیانی */}
      <div
        className="absolute -right-32 top-1/4 h-96 w-96 animate-blob rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 top-1/2 h-[28rem] w-[28rem] animate-blob-slow rounded-full bg-limeglow/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-mint/10 blur-3xl [animation-delay:-6s]"
        aria-hidden="true"
      />

      {/* نشان چرخان */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.2, duration: 0.8, type: "spring" }}
        className="absolute left-8 top-28 hidden lg:block xl:left-24"
        aria-hidden="true"
      >
        <div className="relative h-36 w-36 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text className="fill-primary text-[8.5px] font-bold tracking-[0.18em]">
              <textPath href="#circlePath">
                WEB DEVELOPER ✦ UI DESIGNER ✦ CREATIVE CODER ✦
              </textPath>
            </text>
          </svg>
          <span className="absolute inset-0 grid place-items-center">
            <Sparkles className="h-6 w-6 text-limeglow" />
          </span>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        {/* بج وضعیت */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-sm font-medium text-mint">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-limeglow opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-limeglow" />
            </span>
            آماده همکاری در پروژه‌های جدید
          </span>
        </motion.div>

        {/* تیتر اصلی */}
        <motion.h1
          variants={item}
          className="text-[clamp(2.6rem,8vw,6rem)] font-black leading-[1.15] tracking-tight"
        >
          سلام! من{" "}
          <span className="text-gradient-leaf">{siteConfig.name}</span> هستم
          <span className="text-primary"> 🌿</span>
        </motion.h1>

        {/* زیرتیتر */}
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl"
        >
          {siteConfig.role}؛ اینجا جایی است که ایده‌های شما ریشه می‌دوانند و به
          وب‌سایت‌هایی <span className="font-bold text-mint">زنده، سبز و نفس‌کشنده</span>{" "}
          تبدیل می‌شوند.
        </motion.p>

        {/* دکمه‌ها */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => go("#projects")}
            className="group w-full rounded-2xl bg-gradient-to-l from-primary to-limeglow px-8 py-4 text-base font-extrabold text-primary-foreground shadow-[0_0_32px_oklch(0.78_0.19_150/0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_48px_oklch(0.78_0.19_150/0.6)] sm:w-auto"
          >
            دیدن نمونه کارها
            <span className="mr-2 inline-block transition-transform duration-300 group-hover:-translate-x-1.5">
              ←
            </span>
          </button>
          <button
            onClick={() => go("#contact")}
            className="glass w-full rounded-2xl px-8 py-4 text-base font-bold text-mint transition-all duration-300 hover:scale-105 hover:border-primary/40 sm:w-auto"
          >
            تماس با من
          </button>
        </motion.div>
      </motion.div>

      {/* نشانگر اسکرول */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        onClick={() => go("#about")}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-primary/80 transition-colors hover:text-primary"
        aria-label="اسکرول به بخش بعدی"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium">اسکرول کن</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.button>

      {/* سایه پایین برای محو شدن */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
