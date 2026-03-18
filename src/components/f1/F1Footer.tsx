import { useLang } from "@/contexts/LanguageContext";

const F1Footer = () => {
  const { t } = useLang();

  return (
    <footer className="py-20 px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Monogram */}
        <div className="mb-8">
          <span className="text-outline-lg font-display text-6xl md:text-8xl tracking-tighter">
            A <span className="text-primary" style={{ WebkitTextStroke: "0" }}>×</span> S
          </span>
        </div>

        <p className="font-body text-sm text-muted-foreground max-w-md mx-auto mb-8">
          {t(
            "Thank you for being part of our pit crew. See you on the grid.",
            "شكراً لكونك جزءاً من فريقنا. نراك على خط الانطلاق."
          )}
        </p>

        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="w-12 h-px bg-border/10" />
          <span className="font-mono text-[10px] tracking-widest">
            {t("DECEMBER 20, 2025", "٢٠ ديسمبر ٢٠٢٥")}
          </span>
          <div className="w-12 h-px bg-border/10" />
        </div>
      </div>
    </footer>
  );
};

export default F1Footer;
