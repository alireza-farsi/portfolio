/**
 * ─────────────────────────────────────────────────────────────
 *  تنظیمات سایت — همه چیز را از همین‌جا تغییر دهید
 *  Site Configuration — edit everything from here
 * ─────────────────────────────────────────────────────────────
 */
export const siteConfig = {
  // ✏️ نام شما (در سراسر سایت نمایش داده می‌شود)
  name: "علیرضا",
  fullName: "سید علیرضا حسینی نسب",
  role: "توسعه‌دهنده وب",

  // ✏️ شماره تماس
  phone: "09109338290",
  phoneLink: "tel:+989109338290",

  // ✏️ گیت‌هاب
  githubUsername: "alireza-farsi",
  githubUrl: "https://github.com/alireza-farsi",

  // ✏️ کلید Web3Forms — بعد از دریافت کلید، فقط همین خط را عوض کنید
  web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",

  // درباره من
  aboutTitle: "تازه اول راهم، ولی سرعتم کم نیست 🌿",
  aboutText:
    "سلام! من سید علیرضا حسینی نسب هستم؛ توسعه‌دهنده وب که این مسیر را با عشق به ساختن چیزهای زیبا و کاربردی شروع کرده. در همین مدت کوتاه، اولین پروژه واقعی‌ام — پیکو — را طراحی و توسعه دادم و هر روز با انرژی بیشتر سراغ چالش جدید می‌روم. اگر دنبال کسی هستی که با اشتیاق کامل، ایده‌ات را به یک وب‌سایت زنده و نفس‌کشنده تبدیل کند، جای درستی آمدی.",

  // آمار
  stats: [
    { value: 1, suffix: "", label: "نمونه‌کار واقعی" },
    { value: 3, suffix: " ماه", label: "تجربه عملی" },
    { value: 100, suffix: "٪", label: "اشتیاق و انرژی" },
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

  // ✏️ نمونه‌کار واقعی — پیکو
  showcase: {
    name: "پیکو | PeakO Edu",
    url: "https://peakoedu.ir",
    domain: "peakoedu.ir",
    role: "طراحی و توسعه وب",
    description:
      "پیکو یک پلتفرم آموزشی تخصصی برای المپیادهای هوش‌مصنوعی و اقتصاد است؛ با دوره‌های جامع، کلاس‌های زنده و فضای یادگیری اختصاصی. من در طراحی رابط کاربری و توسعه این پروژه نقش داشتم.",
    tags: ["Next.js", "پلتفرم آموزشی", "RTL فارسی", "واکنش‌گرا"],
    year: "۱۴۰۴",
  },

  // متن ناوبری
  nav: [
    { label: "خانه", href: "#home" },
    { label: "درباره من", href: "#about" },
    { label: "نمونه کارها", href: "#projects" },
    { label: "تماس", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
