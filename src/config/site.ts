/**
 * ─────────────────────────────────────────────────────────────
 *  تنظیمات سایت — همه چیز را از همین‌جا تغییر دهید
 *  Site Configuration — edit everything from here
 * ─────────────────────────────────────────────────────────────
 */
export const siteConfig = {
  // ✏️ نام شما (در سراسر سایت نمایش داده می‌شود)
  name: "علی‌رضا",
  fullName: "علی‌رضا فارس",
  role: "توسعه‌دهنده وب و خالق تجربه‌های دیجیتال",

  // ✏️ شماره تماس
  phone: "09109338290",
  phoneLink: "tel:+989109338290",

  // ✏️ گیت‌هاب
  githubUsername: "alireza-farsi",
  githubUrl: "https://github.com/alireza-farsi",

  // ✏️ کلید Web3Forms — بعد از دریافت کلید، فقط همین خط را عوض کنید
  web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",

  // درباره من
  aboutTitle: "من جایی بین کد و خلاقیت زندگی می‌کنم 🌿",
  aboutText:
    "سلام! من علی‌رضا هستم؛ توسعه‌دهنده‌ای که عاشق ساختن چیزهای زیبا و کاربردی روی وب است. با هر پروژه تلاش می‌کنم ترکیبی از طراحی مدرن، کد تمیز و تجربه کاربری روان بسازم. اگر دنبال کسی هستید که ایده‌هایتان را به یک وب‌سایت زنده و نفس‌کشنده تبدیل کند، جای درستی آمده‌اید.",

  // آمار
  stats: [
    { value: 15, suffix: "+", label: "پروژه تکمیل‌شده" },
    { value: 3, suffix: "+", label: "سال تجربه" },
    { value: 100, suffix: "%", label: "اشتیاق و انرژی" },
  ],

  // مهارت‌ها
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Git & GitHub",
    "Responsive Design",
    "UI/UX",
  ],

  // ✏️ نمونه کارها — پروژه‌های خودتان را اینجا اضافه/ویرایش کنید
  projects: [
    {
      title: "فروشگاه اینترنتی سبز",
      description:
        "یک فروشگاه آنلاین مدرن با تجربه خرید روان، سبد خرید هوشمند و طراحی واکنش‌گرا.",
      tags: ["Next.js", "Tailwind", "TypeScript"],
      icon: "shopping-bag",
      year: "۱۴۰۳",
    },
    {
      title: "داشبورد مدیریت",
      description:
        "پنل ادمین با نمودارهای زنده، مدیریت کاربران و گزارش‌گیری پیشرفته.",
      tags: ["React", "Recharts", "shadcn/ui"],
      icon: "layout-dashboard",
      year: "۱۴۰۳",
    },
    {
      title: "وبلاگ شخصی مینیمال",
      description:
        "وبلاگی سریع و سئو شده با تایپوگرافی فارسی زیبا و حالت شب/روز.",
      tags: ["Next.js", "MDX", "SEO"],
      icon: "pen-tool",
      year: "۱۴۰۲",
    },
    {
      title: "چت ریل‌تایم",
      description:
        "پیام‌رسان آنلاین با وب‌سوکت، نوتیفیکیشن لحظه‌ای و رابط کاربری جذاب.",
      tags: ["Socket.io", "Node.js", "React"],
      icon: "message-circle",
      year: "۱۴۰۲",
    },
    {
      title: "لندینگ استارتاپ",
      description:
        "صفحه فرود انیمیشنی با افکت‌های اسکرول، آمار زنده و نرخ تبدیل بالا.",
      tags: ["Framer Motion", "Tailwind", "Landing"],
      icon: "rocket",
      year: "۱۴۰۲",
    },
    {
      title: "ابزار مدیریت وظایف",
      description:
        "اپلیکیشن تو-دو با درگ‌اند‌دراپ، دسته‌بندی و ذخیره‌سازی ابری.",
      tags: ["React", "dnd-kit", "LocalStorage"],
      icon: "check-square",
      year: "۱۴۰۱",
    },
  ],

  // متن ناوبری
  nav: [
    { label: "خانه", href: "#home" },
    { label: "درباره من", href: "#about" },
    { label: "نمونه کارها", href: "#projects" },
    { label: "تماس", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
