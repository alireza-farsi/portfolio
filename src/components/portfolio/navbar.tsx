"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

/**
 * نوبار شیشه‌ای شناور با منوی موبایل
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-3xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "glass glass-blur shadow-[0_8px_40px_-8px_oklch(0.66_0.09_152/0.22)]"
            : "border border-transparent bg-transparent"
        }`}
        aria-label="ناوبری اصلی"
      >
        {/* لوگو */}
        <button
          onClick={() => go("#home")}
          className="group flex items-center gap-2.5"
          aria-label="بازگشت به بالای صفحه"
        >
          <span className="h-10 w-10 overflow-hidden rounded-xl shadow-lg ring-1 ring-primary/40 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt={`لوگوی ${siteConfig.fullName}`}
              width={40}
              height={40}
              className="h-10 w-10 object-cover"
              priority
            />
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            {siteConfig.name}
            <span className="text-primary">.</span>
          </span>
        </button>

        {/* لینک‌ها — دسکتاپ */}
        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => go(item.href)}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* دکمه تماس — دسکتاپ */}
        <button
          onClick={() => go("#contact")}
          className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_0_20px_oklch(0.66_0.09_152/0.35)] transition-all hover:shadow-[0_0_32px_oklch(0.66_0.09_152/0.4)] hover:brightness-110 md:block"
        >
          بیا صحبت کنیم ✦
        </button>

        {/* دکمه منو — موبایل */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary md:hidden"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* منوی موبایل */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-x-0 top-[calc(100%+8px)] rounded-2xl border border-primary/25 bg-[oklch(0.17_0.032_155/0.96)] p-3 shadow-[0_20px_60px_-10px_oklch(0_0_0/0.6)] backdrop-blur-2xl md:hidden"
            >
              <ul className="flex flex-col">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => go(item.href)}
                      className="w-full rounded-xl px-4 py-3 text-right text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className="mt-2 border-t border-primary/15 pt-2">
                  <button
                    onClick={() => go("#contact")}
                    className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
                  >
                    بیا صحبت کنیم ✦
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
