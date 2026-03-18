import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const milestones = [
  { gp: "GP 01", titleEn: "THE QUALIFYING", titleAr: "التصفيات", descEn: "First Date — June 2019", descAr: "اللقاء الأول — يونيو ٢٠١٩", year: "2019" },
  { gp: "GP 02", titleEn: "FIRST PODIUM", titleAr: "أول منصة", descEn: "First Trip Together — Feb 2020", descAr: "أول رحلة معاً — فبراير ٢٠٢٠", year: "2020" },
  { gp: "GP 03", titleEn: "THE PIT STOP", titleAr: "محطة الصيانة", descEn: "Moved In Together — Aug 2021", descAr: "السكن معاً — أغسطس ٢٠٢١", year: "2021" },
  { gp: "GP 04", titleEn: "POLE POSITION", titleAr: "المركز الأول", descEn: "The Proposal — March 2024", descAr: "الخطوبة — مارس ٢٠٢٤", year: "2024" },
  { gp: "GP 05", titleEn: "RACE DAY", titleAr: "يوم السباق", descEn: "The Wedding — December 2025", descAr: "الزفاف — ديسمبر ٢٠٢٥", year: "2025" },
];

const F1OurStory = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Speed lines background */}
      {isInView && [...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 1.5, delay: i * 0.3, ease: [0.2, 0.8, 0.2, 1], repeat: Infinity, repeatDelay: 4 }}
          className="absolute speed-line"
          style={{ top: `${15 + i * 14}%`, width: "40%" }}
        />
      ))}

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-6 h-1 bg-primary" />
          <span className="font-display text-xs tracking-[0.3em] text-secondary uppercase">
            {t("SEASON HIGHLIGHTS", "أبرز المحطات")}
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl mb-3 text-foreground">
          {t("OUR LOVE STORY", "قصة حبنا")}
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-16 leading-relaxed">
          {t("Every great race has a story. Here's ours.", "كل سباق عظيم له قصة. هذه قصتنا.")}
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-8 w-px bg-border/10" />

          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative flex gap-6 md:gap-10 mb-12 last:mb-0"
            >
              {/* Node */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 md:w-16 md:h-16 bg-surface ghost-border flex items-center justify-center">
                  <span className="font-mono text-[10px] md:text-xs text-primary font-bold">{m.gp}</span>
                </div>
              </div>
              {/* Content */}
              <div className="pt-1 md:pt-4">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">{m.year}</span>
                <h3 className="font-display text-lg md:text-2xl text-foreground mt-1">
                  {t(m.titleEn, m.titleAr)}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {t(m.descEn, m.descAr)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default F1OurStory;
