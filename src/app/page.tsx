import Preloader from "@/components/portfolio/preloader";
import CustomCursor from "@/components/portfolio/custom-cursor";
import FloatingLeaves from "@/components/portfolio/floating-leaves";
import Navbar from "@/components/portfolio/navbar";
import Hero from "@/components/portfolio/hero";
import Marquee from "@/components/portfolio/marquee";
import About from "@/components/portfolio/about";
import Projects from "@/components/portfolio/projects";
import Contact from "@/components/portfolio/contact";
import Footer from "@/components/portfolio/footer";

/**
 * صفحه اصلی پورتفولیو — باغ دیجیتال 🌿
 * ساختار: Hero → Marquee → درباره من → نمونه کارها → تماس + فرم → فوتر
 */
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      {/* لایه‌های سراسری */}
      <div className="noise-overlay" aria-hidden="true" />
      <Preloader />
      <CustomCursor />
      <FloatingLeaves count={10} />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
