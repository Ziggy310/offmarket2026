import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInSection } from "@/hooks/useFadeIn";

// Batch 1
import galleryWaitress from "@/assets/gallery-waitress.png";
import galleryWings from "@/assets/gallery-wings.png";
import galleryBurger from "@/assets/gallery-burger.png";
import galleryDrinks from "@/assets/gallery-drinks.png";
import galleryCrowdSinger from "@/assets/gallery-crowd-singer.png";
import galleryCheers from "@/assets/gallery-cheers.png";
import galleryGuitarists from "@/assets/gallery-guitarists.png";
import galleryDrummer from "@/assets/gallery-drummer.png";
import galleryTeam from "@/assets/gallery-team.png";
import galleryDancing from "@/assets/gallery-dancing.png";

// Batch 2
import galleryGrilledMeat from "@/assets/gallery-grilled-meat.jpeg";
import galleryBarGirl from "@/assets/gallery-bar-girl.jpeg";
import galleryKaraoke from "@/assets/gallery-karaoke.png";
import galleryFamilies from "@/assets/gallery-families.png";
import galleryBlackBurger from "@/assets/gallery-black-burger.png";
import galleryBartender from "@/assets/gallery-bartender.jpeg";
import galleryDessertCounter from "@/assets/gallery-dessert-counter.jpeg";
import galleryBeers from "@/assets/gallery-beers.jpeg";
import galleryVinylDj from "@/assets/gallery-vinyl-dj.jpeg";
import galleryPerformerSolo from "@/assets/gallery-performer-solo.jpeg";

type Category = "All" | "Food" | "Music" | "Crowd" | "Vibes";

const photos = [
  { src: galleryCrowdSinger, cat: "Music" as Category },
  { src: galleryWings, cat: "Food" as Category },
  { src: galleryDancing, cat: "Vibes" as Category },
  { src: galleryGrilledMeat, cat: "Food" as Category },
  { src: galleryBarGirl, cat: "Vibes" as Category },
  { src: galleryGuitarists, cat: "Music" as Category },
  { src: galleryKaraoke, cat: "Crowd" as Category },
  { src: galleryBurger, cat: "Food" as Category },
  { src: galleryFamilies, cat: "Crowd" as Category },
  { src: galleryWaitress, cat: "Vibes" as Category },
  { src: galleryBlackBurger, cat: "Food" as Category },
  { src: galleryBartender, cat: "Vibes" as Category },
  { src: galleryDrinks, cat: "Food" as Category },
  { src: galleryDrummer, cat: "Music" as Category },
  { src: galleryDessertCounter, cat: "Food" as Category },
  { src: galleryCheers, cat: "Crowd" as Category },
  { src: galleryBeers, cat: "Vibes" as Category },
  { src: galleryVinylDj, cat: "Music" as Category },
  { src: galleryTeam, cat: "Crowd" as Category },
  { src: galleryPerformerSolo, cat: "Music" as Category },
];

const categories: Category[] = ["All", "Food", "Music", "Crowd", "Vibes"];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? photos : photos.filter((p) => p.cat === filter);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((c) => (c !== null ? (c - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightbox((c) => (c !== null ? (c + 1) % filtered.length : null));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-6xl md:text-8xl text-foreground mb-4">GALLERY</h1>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full font-body text-sm transition-colors ${
                  filter === c ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground border border-border hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <FadeInSection>
        <section className="pb-16 px-4">
          <div className="container mx-auto columns-1 md:columns-2 lg:columns-3 gap-3 space-y-3">
            {filtered.map((photo, i) => (
              <div key={i} onClick={() => openLightbox(i)} className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group relative">
                <img src={photo.src} alt="Off Market" className="w-full object-cover group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200" />
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      <section className="pb-24 text-center">
        <a
          href="https://www.instagram.com/offmarketpt"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          See more on Instagram →
        </a>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-foreground hover:text-primary z-50">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-foreground hover:text-primary">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img src={filtered[lightbox].src} alt="Gallery photo" className="max-h-[85vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-foreground hover:text-primary">
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}