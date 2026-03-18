import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const F1Navbar = () => {
  const { lang, toggle, t } = useLang();
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setScrolled(v > 0.02));
    return unsub;
  }, [scrollYProgress]);

  const links = [
    { href: "#countdown", label: t("COUNTDOWN", "العد التنازلي") },
    { href: "#story", label: t("STORY", "القصة") },
    { href: "#details", label: t("DETAILS", "التفاصيل") },
    { href: "#rsvp", label: t("RSVP", "الحضور") },
    { href: "#gallery", label: t("GALLERY", "المعرض") },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background/90 backdrop-blur-sm" : ""}`}>
      {/* Fuel gauge progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: lang === "ar" ? "right" : "left" }}
        className="h-[2px] bg-primary"
      />
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        <a href="#" className="font-display text-xs tracking-[0.2em] text-foreground">
          A × S
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-display text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={toggle}
          className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-foreground ghost-border px-3 py-1 transition-colors"
        >
          {lang === "en" ? "عربي" : "EN"}
        </button>
      </div>
    </nav>
  );
};

export default F1Navbar;
