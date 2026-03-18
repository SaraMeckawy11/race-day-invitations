import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import heroImg from "@/assets/hero-f1.jpg";

const F1Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Monaco circuit at night" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      {/* Speed lines decoration */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1 opacity-20 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5 + i * 0.15, duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="speed-line origin-left"
            style={{ width: `${60 + i * 15}%` }}
          />
        ))}
      </div>

      {/* Center content — invitation style */}
      <div className="relative z-10 px-6 max-w-xl">
        {/* Top flourish */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-secondary/40" />
            <div className="w-2 h-2 rotate-45 border border-secondary/40" />
            <div className="w-10 h-px bg-secondary/40" />
          </div>
          <p className="font-display text-xs tracking-[0.4em] text-secondary/80 uppercase">
            {t("You are invited to", "نتشرف بدعوتكم لحضور")}
          </p>
        </motion.div>

        {/* Couple names */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h1 className="text-[clamp(2.8rem,10vw,5.5rem)] leading-[0.85] font-display font-bold mb-2">
            <span className="text-foreground block">{t("Ahmad", "أحمد")}</span>
            <span className="text-secondary/60 text-[0.4em] tracking-[0.2em] block my-3">&</span>
            <span className="text-foreground block">{t("Sarah", "سارة")}</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-6"
        >
          <p className="font-display text-sm md:text-base tracking-[0.15em] text-primary mb-6">
            {t("FULL THROTTLE. FOREVER.", "انطلاق إلى الأبد.")}
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-6 h-px bg-primary/50" />
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <div className="w-6 h-px bg-primary/50" />
          </div>

          <p className="font-mono text-[11px] text-muted-foreground tracking-widest mt-4">
            {t("DECEMBER 20, 2025", "٢٠ ديسمبر ٢٠٢٥")}
          </p>
          <p className="font-body text-xs text-muted-foreground/70 mt-1">
            {t("JEDDAH, KINGDOM OF SAUDI ARABIA", "جدة، المملكة العربية السعودية")}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="mt-10"
        >
          <motion.a
            href="#rsvp"
            whileHover={{ y: -2, boxShadow: "0 4px 20px rgba(232,0,45,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-primary px-10 py-4 font-display text-xs tracking-[0.3em] text-primary-foreground"
          >
            {t("RSVP NOW", "سجّل حضورك")}
          </motion.a>
        </motion.div>

        {/* Bottom race tag — subtle F1 nod */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2 }}
          className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground mt-8"
        >
          {t("THE GRAND PRIX OF A LIFETIME", "سباق العمر الكبير")}
        </motion.p>
      </div>
    </section>
  );
};

export default F1Hero;
