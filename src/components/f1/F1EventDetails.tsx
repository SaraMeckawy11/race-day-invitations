import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const schedule = [
  {
    dayEn: "FRIDAY", dayAr: "الجمعة", labelEn: "P1", labelAr: "الأول",
    titleEn: "WELCOME DINNER", titleAr: "عشاء الترحيب",
    timeEn: "7:00 PM", timeAr: "٧:٠٠ مساءً",
    venueEn: "The Circuit Lounge, Jeddah", venueAr: "صالة السباق، جدة",
  },
  {
    dayEn: "SATURDAY", dayAr: "السبت", labelEn: "P2", labelAr: "الثاني",
    titleEn: "HENNA NIGHT", titleAr: "ليلة الحناء",
    timeEn: "8:00 PM", timeAr: "٨:٠٠ مساءً",
    venueEn: "Ritz-Carlton Ballroom", venueAr: "قاعة الريتز كارلتون",
  },
  {
    dayEn: "SUNDAY", dayAr: "الأحد", labelEn: "RACE DAY", labelAr: "يوم السباق",
    titleEn: "THE WEDDING", titleAr: "حفل الزفاف",
    timeEn: "6:00 PM", timeAr: "٦:٠٠ مساءً",
    venueEn: "Jeddah Corniche Circuit", venueAr: "حلبة جدة كورنيش",
  },
];

const F1EventDetails = () => {
  const { t } = useLang();

  return (
    <section className="py-20 px-6 md:px-12 carbon-fiber">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-6 h-1 bg-primary" />
          <span className="font-display text-xs tracking-[0.3em] text-secondary uppercase">
            {t("RACE WEEKEND", "عطلة السباق")}
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl mb-3 text-foreground">
          {t("THE CELEBRATION", "الاحتفال")}
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-12 leading-relaxed max-w-lg">
          {t(
            "Join us for a weekend of love, laughter, and a little bit of racing spirit.",
            "انضموا إلينا في عطلة نهاية أسبوع مليئة بالحب والفرح وروح السباق."
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {schedule.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true }}
              className="ghost-border p-6 bg-surface/50 hover:bg-surface transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {t(s.dayEn, s.dayAr)}
                </span>
                <span className={`font-display text-2xl md:text-3xl ${i === 2 ? "text-primary" : "text-secondary"}`}>
                  {t(s.labelEn, s.labelAr)}
                </span>
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">
                {t(s.titleEn, s.titleAr)}
              </h3>
              <div className="space-y-1">
                <p className="font-mono text-sm text-accent">{t(s.timeEn, s.timeAr)}</p>
                <p className="font-body text-sm text-muted-foreground">{t(s.venueEn, s.venueAr)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 ghost-border relative"
        >
          <div className="absolute top-3 right-3 z-10 font-mono text-[10px] text-muted-foreground bg-background/80 px-2 py-1">
            {t("21.5433° N, 39.1728° E", "٢١.٥٤٣٣° شمال، ٣٩.١٧٢٨° شرق")}
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.4!2d39.1728!3d21.5433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMyJzM2LjAiTiAzOcKwMTAnMjIuMSJF!5e0!3m2!1sen!2s!4v1"
            className="w-full h-64 md:h-80 border-0 grayscale invert opacity-80"
            loading="lazy"
            title="Venue location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default F1EventDetails;
