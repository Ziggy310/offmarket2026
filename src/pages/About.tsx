import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInSection } from "@/hooks/useFadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

import aboutHero from "@/assets/about-hero.png";
import venueOutdoor from "@/assets/venue-outdoor.png";

export default function AboutPage() {
  const { t } = useLanguage();

  const stats = [
    { num: "8", label: t("aboutPage.foodTrucks") },
    { num: "4.7★", label: t("aboutPage.googleRating") },
    { num: "3+", label: t("aboutPage.eventsPerWeek") },
    { num: "1", label: t("aboutPage.outdoorSpace") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden grain-overlay">
        <img src={aboutHero} alt="Off Market venue at night" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-6xl md:text-8xl text-foreground">{t("aboutPage.hero")}</h1>
        </div>
      </section>

      <FadeInSection>
        <section className="py-24 px-4">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">{t("aboutPage.storyTitle")}</h2>
              <div className="font-body text-base text-muted-foreground space-y-4 leading-relaxed">
                <p>{t("aboutPage.story1")}</p>
                <p>{t("aboutPage.story2")}</p>
                <p>{t("aboutPage.story3")}</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={venueOutdoor} alt="Off Market outdoor venue" className="w-full h-[400px] object-cover" loading="lazy" />
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-16 px-4 bg-card">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl text-primary">{stat.num}</p>
                <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-foreground mb-4">{t("aboutPage.teamTitle")}</h2>
            <p className="font-body text-muted-foreground italic">{t("aboutPage.teamPlaceholder")}</p>
          </div>
        </section>
      </FadeInSection>

      <section className="py-16 px-4 bg-primary text-center">
        <Link to="/events" className="inline-flex items-center gap-2 bg-foreground text-background font-display text-2xl tracking-wider px-10 py-4 rounded-full hover:bg-foreground/90 transition-all">
          {t("aboutPage.cta")} <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
