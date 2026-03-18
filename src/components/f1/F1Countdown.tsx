import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const WEDDING_DATE = new Date("2025-12-20T18:00:00").getTime();

const F1Countdown = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [lightsOn, setLightsOn] = useState(0);
  const [lightsOut, setLightsOut] = useState(false);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, tenths: 0 });

  // Lights sequence
  useEffect(() => {
    if (!isInView) return;
    const intervals: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= 5; i++) {
      intervals.push(setTimeout(() => setLightsOn(i), i * 600));
    }
    intervals.push(setTimeout(() => { setLightsOut(true); }, 5 * 600 + 800));
    return () => intervals.forEach(clearTimeout);
  }, [isInView]);

  // Countdown timer
  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, WEDDING_DATE - now);
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
        tenths: Math.floor((diff % 1000) / 100),
      });
    };
    update();
    const id = setInterval(update, 100);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number, d = 2) => String(n).padStart(d, "0");

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 carbon-fiber">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-6 h-1 bg-primary" />
          <span className="font-display text-xs tracking-[0.3em] text-secondary uppercase">
            {t("LIGHTS OUT", "الانطلاق")}
          </span>
        </div>

        {/* Five lights */}
        <div className="flex gap-3 md:gap-5 mb-12 justify-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              animate={{
                backgroundColor: lightsOut ? "#333" : lightsOn >= i ? "#E8002D" : "#333",
                opacity: lightsOut ? 0 : 1,
                scale: lightsOut ? 0.5 : 1,
              }}
              transition={{ duration: lightsOut ? 0.15 : 0.1 }}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-background shadow-inner"
              style={{ boxShadow: lightsOn >= i && !lightsOut ? "0 0 20px #E8002D" : "none" }}
            />
          ))}
        </div>

        {/* Timer */}
        <motion.div
          animate={{ opacity: lightsOut ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
          className="ghost-border p-6 md:p-10"
        >
          <div className="flex items-center justify-center gap-2 md:gap-6 font-mono text-foreground">
            {[
              { val: pad(time.days), label: t("DAYS", "يوم") },
              { val: pad(time.hours), label: t("HRS", "ساعة") },
              { val: pad(time.minutes), label: t("MIN", "دقيقة") },
              { val: pad(time.seconds), label: t("SEC", "ثانية") },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl md:text-6xl font-bold tabular-nums">{item.val}</span>
                <span className="text-[10px] tracking-widest text-muted-foreground mt-1">{item.label}</span>
                {idx < 3 && <span className="hidden" />}
              </div>
            ))}
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-6xl font-bold tabular-nums text-primary animate-flicker">
                .{time.tenths}
              </span>
              <span className="text-[10px] tracking-widest text-muted-foreground mt-1">&nbsp;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default F1Countdown;
