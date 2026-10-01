"use client";

import { Github, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

/**
 * فوتر — با mt-auto همیشه به پایین صفحه می‌چسبد
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 mt-auto border-t border-primary/15 bg-[oklch(0.14_0.028_155)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] md:flex-row">
        {/* لوگو و نام */}
        <div className="flex items-center gap-2.5">
          <span className="h-9 w-9 overflow-hidden rounded-xl ring-1 ring-primary/40">
            <Image
              src="/logo.png"
              alt={`لوگوی ${siteConfig.fullName}`}
              width={36}
              height={36}
              className="h-9 w-9 object-cover"
            />
          </span>
          <div>
            <p className="text-sm font-extrabold">{siteConfig.fullName}</p>
            <p className="text-[11px] text-foreground/45">
              © {year.toLocaleString("fa-IR", { useGrouping: false })} — همه حقوق محفوظ است
            </p>
          </div>
        </div>

        {/* شعار */}
        <p className="order-last flex items-center gap-1.5 text-xs text-foreground/50 md:order-none">
          ساخته‌شده با <span aria-hidden="true">💚</span> و کمی جادوی سبز
        </p>

        {/* لینک‌ها */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`گیت‌هاب ${siteConfig.fullName}`}
            className="grid h-10 w-10 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:text-limeglow"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.phoneLink}
            aria-label={`تماس با شماره ${siteConfig.phone}`}
            className="grid h-10 w-10 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:text-limeglow"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
