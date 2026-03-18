import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const placeholderImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=450&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=550&fit=crop",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=480&fit=crop",
];

const F1Gallery = () => {
  const { t } = useLang();

  return (
    <section className="py-20 px-6 md:px-12 carbon-fiber">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-6 h-1 bg-primary" />
          <span className="font-display text-xs tracking-[0.3em] text-secondary uppercase">
            {t("PARC FERMÉ", "الحظيرة المغلقة")}
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl mb-12 text-foreground">
          {t("GALLERY", "المعرض")}
        </h2>

        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {placeholderImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden ghost-border break-inside-avoid group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full object-cover transition-all duration-300 group-hover:saturate-150"
                loading="lazy"
              />
              {/* Carbon fiber overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity carbon-fiber pointer-events-none" />
              {/* Edge glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: "inset 0 0 30px rgba(232,0,45,0.2)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default F1Gallery;
