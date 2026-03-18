import { useState } from "react";
import { useNavigate } from "react-router-dom";

const themes = [
  { id: "f1", name: "FORMULA 1", desc: "High-speed racing meets luxury celebration", color: "#E8002D", path: "/" },
];

const Admin = () => {
  const navigate = useNavigate();
  const [activeTheme, setActiveTheme] = useState("f1");

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-3xl mb-2">THEME CONTROL CENTER</h1>
        <p className="font-body text-sm text-muted-foreground mb-10">Preview and switch wedding invitation themes</p>

        <div className="grid gap-4">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className={`ghost-border p-6 cursor-pointer transition-colors ${
                activeTheme === theme.id ? "bg-surface" : "hover:bg-surface/50"
              }`}
              onClick={() => {
                setActiveTheme(theme.id);
                navigate(theme.path);
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.color }} />
                  <div>
                    <h3 className="font-display text-lg">{theme.name}</h3>
                    <p className="font-body text-sm text-muted-foreground">{theme.desc}</p>
                  </div>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-accent">
                  {activeTheme === theme.id ? "ACTIVE" : "PREVIEW →"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 ghost-border p-6">
          <h3 className="font-display text-sm mb-3 text-secondary">RSVP ENTRIES</h3>
          <div className="font-mono text-xs text-muted-foreground">
            {(() => {
              const entries = JSON.parse(localStorage.getItem("f1-rsvp") || "[]");
              if (entries.length === 0) return <p>No registrations yet.</p>;
              return entries.map((e: any, i: number) => (
                <div key={i} className="flex justify-between py-2 border-b border-border/10">
                  <span>P{e.gridPosition} — {e.driverName}</span>
                  <span className={e.attending === "yes" ? "text-accent" : "text-primary"}>
                    {e.attending === "yes" ? "CONFIRMED" : "DNS"}
                  </span>
                </div>
              ));
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
