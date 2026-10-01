import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const cloudflareConfig = defineCloudflareConfig({});

/**
 * ─────────────────────────────────────────────────────────────
 *  ⚠️ نکته مهم — buildCommand باید «next build» باشد!
 *
 *  به‌صورت پیش‌فرض، `opennextjs-cloudflare build` اسکریپت build
 *  پروژه (یعنی `bun run build` / `npm run build`) را اجرا می‌کند؛
 *  اگر خود آن اسکریپت هم opennextjs را صدا بزند، حلقه بی‌نهایت
 *  ساخته می‌شود (باگ دیپلوی Cloudflare).
 *
 *  با تنظیم buildCommand، فاز «Building Next.js app» مستقیماً
 *  `next build` را اجرا می‌کند و حلقه از بین می‌رود.
 * ─────────────────────────────────────────────────────────────
 */
const config = {
  ...cloudflareConfig,
  buildCommand: "next build",
};

export default config;
