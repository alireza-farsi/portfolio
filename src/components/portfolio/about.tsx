"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";
import SectionHeading from "./section-heading";
import { siteConfig } from "@/config/site";

/** شمارنده انیمیشنی */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("fa-IR")}
      {suffix}
    </span>
  );
}

const features = [
  {
    icon: Code2,
    title: "کد تمیز و استاندارد",
    text: "کدی خوانا و مقیاس‌پذیر که سال‌ها بدون دردسر نگهداری می‌شود.",
  },
  {
    icon: Palette,
    title: "طراحی خلاقانه",
    text: "رابط کاربری‌ای که اول از همه چشم را می‌گیرد و بعد دل را.",
  },
  {
    icon: Zap,
    title: "سرعت و کارایی",
    text: "سایت‌هایی سریع و بهینه که کاربر عاشق تجربه‌اش می‌شود.",
  },
];

/**
 * بخش درباره من: متن + ویژگی‌ها + آمار + مهارت‌ها
 */
export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading index="۰۱" title="درباره" highlight="من" />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* متن معرفی */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-2xl font-extrabold leading-snug text-mint md:text-3xl">
            {siteConfig.aboutTitle}
          </h3>
          <p className="mt-6 text-base leading-8 text-foreground/75 md:text-lg md:leading-9">
            {siteConfig.aboutText}
          </p>

          {/* کارت‌های ویژگی */}
          <div className="mt-10 space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group glass flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-limeglow/15 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <f.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div>
                  <h4 className="font-bold text-foreground">{f.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-foreground/65">
                    {f.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* آمار و مهارت‌ها */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          {/* آمار */}
          <div className="grid grid-cols-3 gap-4">
            {siteConfig.stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
              >
                <div className="text-3xl font-black text-gradient-leaf md:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs font-medium text-foreground/60 md:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* کارد بزرگ مهارت‌ها */}
          <div className="glass relative flex-1 overflow-hidden rounded-3xl p-7">
            <div
              className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <h4 className="relative mb-5 flex items-center gap-2 text-lg font-extrabold">
              <span className="h-2 w-2 rounded-full bg-limeglow" aria-hidden="true" />
              جعبه‌ابزار من
            </h4>
            <div className="relative flex flex-wrap gap-2.5">
              {siteConfig.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  className="cursor-default rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-bold text-mint transition-colors hover:border-limeglow/60 hover:bg-primary/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* گیاه تزئینی پایین کارت */}
            <div
              className="pointer-events-none mt-6 flex items-end justify-start gap-1 opacity-30"
              aria-hidden="true"
            >
              {[14, 22, 32, 22, 14].map((h, i) => (
                <span
                  key={i}
                  className="w-2 animate-grow rounded-t-full bg-gradient-to-t from-primary to-limeglow"
                  style={{ height: h, animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
