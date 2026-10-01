"use client";

import { motion } from "framer-motion";
import { Github, Phone, PhoneCall } from "lucide-react";
import SectionHeading from "./section-heading";
import ContactForm from "./contact-form";
import { siteConfig } from "@/config/site";

const channels = [
  {
    icon: Github,
    label: "گیت‌هاب",
    value: `@${siteConfig.githubUsername}`,
    hint: "کدها و پروژه‌های من",
    href: siteConfig.githubUrl,
    ltr: false,
    glow: "hover:shadow-[0_0_50px_-10px_oklch(0.78_0.19_150/0.5)]",
  },
  {
    icon: Phone,
    label: "تماس مستقیم",
    value: siteConfig.phone,
    hint: "همیشه در دسترس",
    href: siteConfig.phoneLink,
    ltr: true,
    glow: "hover:shadow-[0_0_50px_-10px_oklch(0.84_0.23_125/0.5)]",
  },
];

/**
 * بخش تماس: کانال‌های ارتباطی + فرم Web3Forms
 */
export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      {/* نور پس‌زمینه */}
      <div
        className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-limeglow/10 blur-3xl"
        aria-hidden="true"
      />

      <SectionHeading index="۰۳" title="بیا با هم" highlight="حرف بزنیم" />

      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
        {/* ستون کانال‌ها */}
        <div className="flex flex-col gap-5 lg:col-span-2">
          {channels.map((ch, i) => (
            <motion.a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group glass relative flex items-center gap-5 overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:border-primary/50 ${ch.glow}`}
            >
              <span
                className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/30 to-limeglow/15 text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-limeglow"
                aria-hidden="true"
              >
                <ch.icon className="h-8 w-8" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground/55">{ch.label}</p>
                <p
                  className="mt-1 truncate text-xl font-extrabold text-mint"
                  dir={ch.ltr ? "ltr" : undefined}
                  style={ch.ltr ? { textAlign: "right" } : undefined}
                >
                  {ch.value}
                </p>
                <p className="mt-1 text-xs text-foreground/45">{ch.hint}</p>
              </div>
              <span
                className="mr-auto text-primary/40 transition-all duration-500 group-hover:-translate-x-1 group-hover:text-primary"
                aria-hidden="true"
              >
                ↗
              </span>
            </motion.a>
          ))}

          {/* کارت تزئینی هشدار تماس */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="glass relative overflow-hidden rounded-3xl p-6"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-limeglow/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative flex items-center gap-4">
              <motion.span
                animate={{ rotate: [0, -12, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.4 }}
                className="grid h-12 w-12 place-items-center rounded-2xl bg-limeglow/15 text-limeglow"
                aria-hidden="true"
              >
                <PhoneCall className="h-6 w-6" />
              </motion.span>
              <p className="text-sm leading-7 text-foreground/70">
                ترجیح می‌دهی مستقیم صحبت کنیم؟
                <br />
                <span className="font-bold text-mint">همین حالا زنگ بزن!</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* فرم */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
