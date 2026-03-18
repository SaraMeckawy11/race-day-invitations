import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

interface RsvpData {
  driverName: string;
  team: string;
  gridPosition: number;
  attending: "yes" | "no" | "";
  guestCount: string;
  mealPreference: string;
  message: string;
}

const F1Rsvp = () => {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<RsvpData>({
    driverName: "",
    team: "",
    gridPosition: 0,
    attending: "",
    guestCount: "1",
    mealPreference: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("f1-rsvp") || "[]");
    const position = existing.length + 1;
    const entry = { ...form, gridPosition: position, timestamp: Date.now() };
    existing.push(entry);
    localStorage.setItem("f1-rsvp", JSON.stringify(existing));
    setForm({ ...form, gridPosition: position });
    setSubmitted(true);
  };

  const labelClass = "uppercase text-[10px] tracking-[0.2em] text-secondary font-display block mb-2";
  const inputClass = "w-full bg-surface ghost-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary";

  if (submitted) {
    return (
      <section id="rsvp" className="py-20 px-6 md:px-12">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-accent/40" />
              <div className="w-2 h-2 rotate-45 border border-accent/50" />
              <div className="w-10 h-px bg-accent/40" />
            </div>
            <div className="font-mono text-xs text-accent tracking-widest mb-4">
              {t("YOU'RE ON THE GRID", "أنت على الشبكة")}
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-2">
              P{form.gridPosition}
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">
              {t(
                `Thank you, ${form.driverName}! We're thrilled to have you celebrate with us.`,
                `شكراً لك ${form.driverName}! يسعدنا حضورك للاحتفال معنا.`
              )}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 px-6 md:px-12">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-1 bg-primary" />
          <span className="font-display text-xs tracking-[0.3em] text-secondary uppercase">
            {t("RSVP", "تأكيد الحضور")}
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl mb-3 text-foreground">
          {t("WILL YOU JOIN US?", "هل ستنضمون إلينا؟")}
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-10 leading-relaxed">
          {t(
            "We would be honored to have you celebrate this special day with us. Please let us know if you can make it.",
            "يسعدنا ويشرفنا حضوركم لمشاركتنا هذا اليوم المميز. يرجى إعلامنا بإمكانية حضوركم."
          )}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={labelClass}>{t("YOUR NAME", "الاسم")}</label>
            <input
              required
              value={form.driverName}
              onChange={(e) => setForm({ ...form, driverName: e.target.value })}
              className={inputClass}
              placeholder={t("Enter your name", "أدخل اسمك")}
            />
          </div>

          <div>
            <label className={labelClass}>{t("FAMILY / GROUP", "العائلة / المجموعة")}</label>
            <input
              value={form.team}
              onChange={(e) => setForm({ ...form, team: e.target.value })}
              className={inputClass}
              placeholder={t("Family / Group name", "اسم العائلة / المجموعة")}
            />
          </div>

          <div>
            <label className={labelClass}>{t("ATTENDING", "الحضور")}</label>
            <div className="flex gap-3">
              {(["yes", "no"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setForm({ ...form, attending: v })}
                  className={`flex-1 py-3 font-display text-sm tracking-widest transition-colors ghost-border ${
                    form.attending === v
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {v === "yes" ? t("LIGHTS OUT", "انطلق") : t("DNS", "لن أحضر")}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>{t("CREW SIZE", "عدد الأفراد")}</label>
              <select
                value={form.guestCount}
                onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
                className={inputClass}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>{t("FUEL TYPE", "نوع الوقود")}</label>
              <select
                value={form.mealPreference}
                onChange={(e) => setForm({ ...form, mealPreference: e.target.value })}
                className={inputClass}
              >
                <option value="">{t("Select", "اختر")}</option>
                <option value="standard">{t("Standard", "عادي")}</option>
                <option value="vegetarian">{t("Vegetarian", "نباتي")}</option>
                <option value="vegan">{t("Vegan", "نباتي صرف")}</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>{t("RADIO MESSAGE", "رسالة لاسلكية")}</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} h-24 resize-none`}
              placeholder={t("Leave a message for the team...", "اترك رسالة للفريق...")}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ x: 4, y: -2, boxShadow: "4px 4px 0px 0px #FFD700" }}
            whileTap={{ scale: 0.95 }}
            className="skew-btn bg-primary px-8 py-4 font-display text-sm tracking-widest text-primary-foreground w-full"
          >
            <span>{t("CONFIRM ENTRY", "تأكيد الدخول")}</span>
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default F1Rsvp;
