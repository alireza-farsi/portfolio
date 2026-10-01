# Worklog

---
Task ID: 1
Agent: Z.ai Code (main agent)
Task: ساخت سایت پورتفولیو شخصی تک‌صفحه‌ای با تم سبز و طراحی خلاقانه + پوش به گیت‌هاب

Work Log:
- بررسی ساختار پروژه Next.js 16 + Tailwind 4 + shadcn/ui موجود
- استخراج یوزرنیم گیت‌هاب از توکن کاربر → `alireza-farsi`
- ساخت `src/config/site.ts` — کانفیگ مرکزی (نام، شماره 09109338290، گیتهاب، کلید Web3Forms placeholder، پروژه‌ها، مهارت‌ها)
- بازنویسی `src/app/layout.tsx`: فونت Vazirmatn، `dir="rtl"`، `lang="fa"`، متادیتای فارسی
- بازنویسی `src/app/globals.css`: پالت جنگل تیره سبز (oklch)، انیمیشن‌های blob/marquee/float/fall/grow، اسکرول‌بار سفارشی، کلاس‌های glass/noise/text-gradient-leaf/grid-dots
- ساخت کامپوننت‌ها در `src/components/portfolio/`:
  - preloader.tsx (انیمیشن جوانه + خروج slide)
  - custom-cursor.tsx (نقطه + حلقه spring؛ فقط pointer:fine با media query CSS)
  - floating-leaves.tsx (برگ‌های سقوطی)
  - navbar.tsx (شیشه‌ای شناور + منوی موبایل با پس‌زمینه opaque)
  - hero.tsx (تایپوگرافی بزرگ staggered، بلاب‌ها، نشان چرخان SVG، CTA)
  - marquee.tsx (نوار مهارت‌ها با چرخش -1.5 درجه)
  - about.tsx (شمارنده fa-IR، ویژگی‌ها، چیپ‌های مهارت با گیاه تزئینی)
  - projects.tsx (۶ کارت شیشه‌ای با شماره outline، هاور glow، تگ‌ها)
  - contact.tsx (کارت گیتهاب + تلفن + کارت «زنگ بزن»)
  - contact-form.tsx (Web3Forms با هندل loading/success/error + توست هشدار کلید)
  - footer.tsx (فوتر sticky با mt-auto + safe-area)
- فیکس‌ها: خطای lint setState-in-effect در custom-cursor (حل با `[@media(pointer:fine)]`)، warning رنگ oklch در انیمیشن framer (حل با rgba)، مشکل کش CSS قدیمی (ری‌استارت سرور + پاک کردن .next)، شفافیت منوی موبایل (bg 0.96)
- تست E2E با agent-browser: اسکرین‌شات hero/about/projects/contact/footer/mobile + منوی موبایل + ناوبری منو (اسکرول به 2496px) + تست فرم (توست «کلید تنظیم نشده») + فول‌پیج دسکتاپ — بدون خطای کنسول
- gitignore به‌روز شد (حذف .shots، skills، examples، mini-services، tests، Caddyfile، .zscripts)
- ساخت ریپو `alireza-farsi/portfolio` با API گیت‌هاب، commit با پیام فارسی، push با توکن، و سپس حذف توکن از remote URL
- تأیید پوش با API (commit و فایل‌های src/app روی گیت‌هاب موجودند)

Stage Summary:
- سایت کامل و تست‌شده روی / تنها route قابل مشاهده
- ریپو: https://github.com/alireza-farsi/portfolio (branch: main)
- نکته مهم: کلید Web3Forms placeholder است؛ کاربر باید `web3formsAccessKey` را در `src/config/site.ts` عوض کند
- نکته امنیتی: توکن گیت‌هاب کاربر در چت/لاگ دیده شده — توصیه به revoke پس از استفاده
- نام/متن‌ها placeholder قابل ویرایش در `src/config/site.ts`

---
Task ID: 2
Agent: Z.ai Code (main agent)
Task: شخصی‌سازی سایت (نام واقعی، آمار، نمونه‌کار پیکو)، ساخت لوگو، رفع باگ انیمیشن، پوش مجدد

Work Log:
- خواندن peakoedu.ir با page_reader: «پیکو؛ مسیر آموزشی تخصصی برای المپیادهای هوش‌مصنوعی و اقتصاد، با دوره‌های جامع، کلاس‌های زنده و فضای یادگیری اختصاصی» (ساخته‌شده با Next.js)
- تولید لوگوی سبز (جوانه با دو برگ روی پس‌زمینه سبز تیره) با image-generation → public/logo.png
- بروزرسانی src/config/site.ts: fullName «سید علیرضا حسینی نسب»، name «علیرضا» (بدون نیم‌فاصله)، role «توسعه‌دهنده وب»، stats (۱ نمونه‌کار / ۳ ماه تجربه / ۱۰۰٪ اشتیاق)، متن درباره من جدید، جایگزینی projects با showcase واقعی پیکو
- بازطراحی projects.tsx: کارت ویژه showcase با بج «نمونه‌کار واقعی»، دامنه، نقش، تگ‌ها، دکمه «مشاهده زنده سایت» + ماکاپ مرورگر با لوگو + کارت دعوت «جای نمونه‌کار بعدی اینجاست…»
- جایگذاری لوگو در navbar، footer، preloader (با next/image) و فاوآیکون layout.tsx
- رفع باگ انیمیشن اسکرول (گزارش کاربر: تریگر قبل/بعد از رسیدن به المان و گیر کردن):
  - جایگزینی viewport margin با amount در همه کامپوننت‌ها (hero/heading/about/projects/contact/footer)
  - حذف filter blur از variants هرو (منبع jank)
  - حذف backdrop-blur از marquee + will-change:transform
  - کاهش delayChildren هرو به 2.2 و کوتاه‌کردن مدت انیمیشن‌ها
- تست با agent-browser: hero/پیکو/دعوت/درباره من/تماس اسکرین‌شات، اسکرول کامل smooth تا انتها، کنسول بدون خطا و هشدار
- فیکس gitignore: خط `.shots/` به `/skills/` چسبیده بود (sed جدا شد)؛ حذف .shots از tracking با git rm --cached + amend
- پوش با توکن one-off (توکن ذخیره نشد در remote) → commit a4decfa روی main

Stage Summary:
- سایت کاملاً شخصی‌سازی‌شده با اطلاعات واقعی کاربر و لوگوی اختصاصی
- انیمیشن‌های اسکرول حالا با amount تریگر می‌شوند (قابل پیش‌بینی و بدون گیر)
- ریپو: https://github.com/alireza-farsi/portfolio — آخرین کامیت a4decfa
- یادآوری: کلید Web3Forms همچنان placeholder است در src/config/site.ts
