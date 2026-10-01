"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";

/**
 * پیش‌لودر خلاقانه: جوانه‌ای که رشد می‌کند + نام شما
 */
export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[oklch(0.13_0.03_155)]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          {/* جوانه رشدکننده */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-primary/30 blur-2xl"
            />
            <Image
              src="/logo.png"
              alt=""
              width={80}
              height={80}
              className="relative h-20 w-20 rounded-3xl shadow-[0_0_60px_oklch(0.66_0.09_152/0.5)]"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 text-2xl font-extrabold text-gradient-leaf"
          >
            {siteConfig.fullName}
          </motion.p>

          {/* نوار رشد */}
          <div className="mt-6 h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="h-full w-full rounded-full bg-gradient-to-l from-leaf to-limeglow"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
