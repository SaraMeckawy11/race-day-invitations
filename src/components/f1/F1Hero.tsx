import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import heroImg from "@/assets/hero-f1.jpg";

const F1Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Monaco circuit at night" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Top: Team Name */}
      <motion.div
        initial={{ x: -100, filter: "blur(10px)", opacity: 0 }}
        animate={{ x: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative z-10 p-6 md:p-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-1 bg-primary" />
          <span className="font-display text-xs tracking-[0.3em] text-secondary uppercase">
            {t("Team", "فريق")}
          </span>
        </div>
        <h1 className="text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] font-display font-bold">
          <span className="text-primary">{t("Ahmad", "أحمد")}</span>
          <span className="text-secondary mx-2">&</span>
          <span className="text-foreground">{t("Sarah", "سارة")}</span>
        </h1>
        <div className="mt-4 font-mono text-xs text-muted-foreground tracking-widest">
          {t("SEASON 2025 · ROUND 01", "الموسم ٢٠٢٥ · الجولة ٠١")}
        </div>
      </motion.div>

      {/* Bottom: Tagline + Date */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative z-10 p-6 md:p-12 pb-12"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-display text-lg md:text-2xl tracking-tight text-foreground">
              {t("FULL THROTTLE. FOREVER.", "انطلاق إلى الأبد.")}
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-2">
              {t("DECEMBER 20, 2025 · JEDDAH, KSA", "٢٠ ديسمبر ٢٠٢٥ · جدة، المملكة العربية السعودية")}
            </p>
          </div>
          <motion.a
            href="#rsvp"
            whileHover={{ x: 4, y: -2, boxShadow: "4px 4px 0px 0px #FFD700" }}
            whileTap={{ scale: 0.95 }}
            className="skew-btn bg-primary px-8 py-4 font-display text-sm tracking-widest text-primary-foreground inline-block w-fit"
          >
            <span>{t("REGISTER FOR THE GRID", "سجّل في السباق")}</span>
          </motion.a>
        </div>
        {/* Speed lines decoration */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1 opacity-30 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="speed-line origin-left"
              style={{ width: `${60 + i * 15}%` }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default F1Hero;
