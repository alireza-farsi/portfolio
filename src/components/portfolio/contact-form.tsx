"use client";

import { useState } from "react";
import { Send, Loader2, Leaf, KeyRound } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/site";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-primary/20 bg-foreground/[0.03] px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/35 outline-none transition-all duration-300 focus:border-primary/60 focus:bg-primary/5 focus:shadow-[0_0_0_4px_oklch(0.66_0.09_152/0.12)]";

/**
 * فرم تماس با Web3Forms — کلید دسترسی را در src/config/site.ts تنظیم کنید
 */
export default function ContactForm() {
  const { toast } = useToast();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const keyNotSet =
    !siteConfig.web3formsAccessKey ||
    siteConfig.web3formsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (keyNotSet) {
      toast({
        title: "کلید Web3Forms تنظیم نشده است 🔑",
        description:
          "فایل src/config/site.ts را باز کنید و مقدار web3formsAccessKey را با کلید خودتان جایگزین کنید.",
        variant: "destructive",
      });
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsAccessKey,
          subject: `پیام جدید از سایت ${siteConfig.name}`,
          from_name: form.name,
          ...form,
        }),
      });
      const data = (await res.json()) as { success?: boolean };

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        toast({
          title: "پیامت با موفقیت رسید! 🌱",
          description: "خیلی زود جواب می‌دم. مرسی که ارتباط گرفتی!",
        });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        throw new Error("Web3Forms error");
      }
    } catch {
      setStatus("error");
      toast({
        title: "ارسال پیام ناموفق بود",
        description: "لطفاً دوباره تلاش کن یا مستقیم تماس بگیر.",
        variant: "destructive",
      });
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass relative h-full overflow-hidden rounded-3xl p-7 md:p-9"
      aria-label="فرم تماس"
    >
      {/* نور تزئینی */}
      <div
        className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mb-7 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-limeglow/20 text-primary">
          <Leaf className="h-5.5 w-5.5" strokeWidth={1.8} />
        </span>
        <div>
          <h3 className="text-xl font-extrabold">پیام بگذار</h3>
          <p className="text-xs text-foreground/50">
            از طریق فرم زیر، مستقیم به صندوق پیام من ارسال می‌شود
          </p>
        </div>
      </div>

      <div className="relative grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className="mb-2 block text-sm font-bold text-mint/90">
              نام و نام خانوادگی
            </label>
            <input
              id="cf-name"
              type="text"
              required
              value={form.name}
              onChange={update("name")}
              placeholder="مثلاً سارا محمدی"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="cf-email" className="mb-2 block text-sm font-bold text-mint/90">
              ایمیل
            </label>
            <input
              id="cf-email"
              type="email"
              required
              dir="ltr"
              value={form.email}
              onChange={update("email")}
              placeholder="you@example.com"
              className={`${inputClasses} text-left`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="cf-message" className="mb-2 block text-sm font-bold text-mint/90">
            پیام شما
          </label>
          <textarea
            id="cf-message"
            required
            rows={5}
            value={form.message}
            onChange={update("message")}
            placeholder="سلام علی‌رضا! یک ایده دارم که می‌خوام با هم بسازیمش…"
            className={`${inputClasses} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="group mt-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-l from-primary to-limeglow px-7 py-4 font-extrabold text-primary-foreground shadow-[0_0_28px_oklch(0.66_0.09_152/0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_44px_oklch(0.66_0.09_152/0.4)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              در حال ارسال…
            </>
          ) : status === "success" ? (
            <>ارسال شد ✓</>
          ) : (
            <>
              ارسال پیام
              <Send className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>

        {/* راهنمای کلید */}
        {keyNotSet && (
          <p className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-limeglow/40 bg-limeglow/5 px-4 py-3 text-center text-xs leading-5 text-mint/75">
            <KeyRound className="h-4 w-4 shrink-0" aria-hidden="true" />
            برای فعال‌سازی فرم، کلید Web3Forms را در فایل
            <code className="rounded bg-primary/15 px-1.5 py-0.5 font-mono" dir="ltr">
              src/config/site.ts
            </code>
            وارد کنید.
          </p>
        )}
      </div>
    </form>
  );
}
