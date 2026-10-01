import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `${siteConfig.fullName} | ${siteConfig.role}`,
  description: `نمونه‌کارها و معرفی ${siteConfig.fullName} — ${siteConfig.role}`,
  keywords: [
    siteConfig.fullName,
    "توسعه‌دهنده وب",
    "نمونه کار",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: siteConfig.fullName }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: `${siteConfig.fullName} | ${siteConfig.role}`,
    description: `نمونه‌کارها و معرفی ${siteConfig.fullName}`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazir.variable} font-vazir antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
