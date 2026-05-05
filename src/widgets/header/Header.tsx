import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

type HeaderProps = {
  variant?: "home" | "detail";
  meta?: string;
};

export function Header({ variant = "home", meta }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const isDetail = variant === "detail";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50"
      animate={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        transition: "backdrop-filter 0.25s ease-out, -webkit-backdrop-filter 0.25s ease-out",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 md:px-8 md:py-6">
        <div className="mx-auto flex items-center justify-between gap-6">
          {isDetail ? (
            <>
              <Link
                to="/"
                className="flex items-center gap-2 text-sm transition-colors hover:text-[#8df5c5]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-sm font-medium tracking-wider">
                <Link to="/" className="hover:text-[#8df5c5] transition-colors">
                  PORTFOLIO
                </Link>
              </h1>
            </>
          )}

          {isDetail ? (
            <>
              {meta && <div className="text-right text-sm">{meta}</div>}
            </>
            ) : (
            <>
              <nav className="flex gap-4 text-sm text-white/50 md:gap-8" aria-label="Primary navigation">
                <a href="#work" className="hover:text-[#8df5c5] transition-colors">
                  Work
                </a>
                <a href="#about" className="hover:text-[#8df5c5] transition-colors">
                  About
                </a>
              </nav>
            </>
          )}
        </div>
      </div>
    </motion.header>
  );
}
