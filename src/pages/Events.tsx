import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInSection } from "@/hooks/useFadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

import flyerSamba from "@/assets/flyer-samba.webp";
import flyerTarde from "@/assets/flyer-samba-tarde.webp";
import flyerRitmo from "@/assets/flyer-ritmo.webp";

const allEvents = [
  { id: 1, name: "Roda de Samba — Viva o Samba", date: "April 4, 2025", time: "19h", entryKey: null, entryText: "Ingressos Disponíveis", category: "Samba", image: flyerSamba, description: "An authentic Brazilian samba circle with DJ Teagá. Live percussion, dancing, and the spirit of Rio right here in Quarteira.", featured: true },
  { id: 2, name: "Samba de Tarde — Sambambas", date: "March 15, 2025", time: "15h", entryKey: null, entryText: "Special Offer: Open Bar 70min + Lunch €40", category: "Samba", image: flyerTarde, description: "An afternoon of samba with Sambambas. Enjoy an exclusive lunch and open bar combo.", featured: true },
  { id: 3, name: "Ritmo Futuro Showcase", date: "March 14, 2025", time: "17h", entryKey: "eventsPage.freeEntry", entryText: "Free Entry", category: "DJ", image: flyerRitmo, description: "Electronic beats meet world rhythms. A showcase of emerging DJs and producers.", featured: false },
];

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { t } = useLanguage();

  const filterLabels: Record<string, string> = {
    "All": t("eventsPage.all"),
    "This Week": t("eventsPage.thisWeek"),
    "Music": "Music",
    "DJ": "DJ",
    "Samba": "Samba",
    "Rock": "Rock",
    "Special Events": "Special Events",
  };

  const filters = ["All", "This Week", "Music", "DJ", "Samba", "Rock", "Special Events"];

  const featured = allEvents.filter((e) => e.featured);
  const filtered = activeFilter === "All" || activeFilter === "This Week"
    ? allEvents
    : allEvents.filter((e) => e.category === activeFilter);

  const getEntry = (event: typeof allEvents[0]) => {
    if (event.entryKey) return t(event.entryKey);
    return event.entryText;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-6xl md:text-8xl text-foreground mb-4">{t("eventsPage.title")}</h1>
          <p className="font-body text-lg text-muted-foreground">{t("eventsPage.sub")}</p>
        </div>
      </section>

      <FadeInSection>
        <section className="pb-16 px-4">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl text-foreground mb-8">{t("eventsPage.featured")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((event) => (
                <div key={event.id} className="bg-card rounded-[4px] overflow-hidden border border-border hover:border-primary/50 transition-colors group">
                  <img src={event.image} alt={event.name} className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                  <div className="p-6">
                    <h3 className="font-display text-3xl text-foreground mb-2">{event.name}</h3>
                    <p className="font-body text-sm text-muted-foreground mb-2">{event.date} · {event.time}</p>
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-4">{getEntry(event)}</span>
                    <p className="font-body text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <section className="pb-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full font-body text-sm transition-colors ${
                    activeFilter === f ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground border border-border hover:border-primary"
                  }`}
                >
                  {filterLabels[f] || f}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setViewMode("grid")} className={`px-3 py-1.5 rounded text-sm font-body ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`}>Grid</button>
              <button onClick={() => setViewMode("list")} className={`px-3 py-1.5 rounded text-sm font-body ${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`}>List</button>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="bg-card border border-primary/30 rounded-lg p-12 text-center">
              <p className="font-body text-muted-foreground">Check back soon or follow us on Instagram <a href="https://www.instagram.com/offmarketn125/reels/" target="_blank" rel="noopener noreferrer" className="text-primary">@offmarketn125</a> for the latest.</p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered.map((event) => (
                <div key={event.id} className="bg-card rounded-[4px] overflow-hidden border border-border hover:border-primary/50 transition-colors group">
                  <img src={event.image} alt={event.name} className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                  <div className="p-4">
                    <h3 className="font-display text-2xl text-foreground">{event.name}</h3>
                    <p className="font-body text-sm text-muted-foreground">{event.date} · {event.time}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">{getEntry(event)}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((event) => (
                <div key={event.id} className="bg-card rounded-lg border border-border hover:border-primary/50 transition-colors flex gap-4 p-4">
                  <img src={event.image} alt={event.name} className="w-24 h-32 object-cover rounded" loading="lazy" />
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-foreground">{event.name}</h3>
                    <p className="font-body text-sm text-muted-foreground">{event.date} · {event.time}</p>
                    <span className="inline-block mt-1 px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">{getEntry(event)}</span>
                    <p className="font-body text-sm text-muted-foreground mt-2">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
