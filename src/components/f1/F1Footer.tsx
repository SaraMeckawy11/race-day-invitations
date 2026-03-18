import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const F1Footer = () => {
  const { t } = useLang();

  return (
    <footer className="py-24 px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-16 h-px bg-secondary/20" />
          <div className="w-2 h-2 rotate-45 border border-secondary/30" />
          <div className="w-16 h-px bg-secondary/20" />
        </div>

        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-outline-lg font-display text-6xl md:text-8xl tracking-tighter">
            A <span className="text-primary" style={{ WebkitTextStroke: "0" }}>×</span> S
          </span>
        </motion.div>

        <p className="font-body text-sm text-muted-foreground max-w-sm mx-auto mb-3 leading-relaxed">
          {t(
            "We can't wait to celebrate this day with you. Thank you for being part of our journey.",
            "لا نستطيع الانتظار للاحتفال بهذا اليوم معكم. شكراً لكونكم جزءاً من رحلتنا."
          )}
        </p>
        <p className="font-body text-xs text-muted-foreground/60 italic mb-8">
          {t(
            "With love, Ahmad & Sarah",
            "مع حبنا، أحمد وسارة"
          )}
        </p>

        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="w-12 h-px bg-border/10" />
          <span className="font-mono text-[10px] tracking-widest">
            {t("20 · 12 · 2025", "٢٠ · ١٢ · ٢٠٢٥")}
          </span>
          <div className="w-12 h-px bg-border/10" />
        </div>
      </div>
    </footer>
  );
};

export default F1Footer;
