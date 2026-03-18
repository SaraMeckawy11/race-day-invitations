import { LanguageProvider } from "@/contexts/LanguageContext";
import F1Navbar from "@/components/f1/F1Navbar";
import F1Hero from "@/components/f1/F1Hero";
import F1Countdown from "@/components/f1/F1Countdown";
import F1OurStory from "@/components/f1/F1OurStory";
import F1EventDetails from "@/components/f1/F1EventDetails";
import F1Rsvp from "@/components/f1/F1Rsvp";
import F1Gallery from "@/components/f1/F1Gallery";
import F1Footer from "@/components/f1/F1Footer";

const F1Theme = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <F1Navbar />
        <F1Hero />
        <div id="countdown"><F1Countdown /></div>
        <div id="story"><F1OurStory /></div>
        <div id="details"><F1EventDetails /></div>
        <F1Rsvp />
        <div id="gallery"><F1Gallery /></div>
        <F1Footer />
      </div>
    </LanguageProvider>
  );
};

export default F1Theme;
