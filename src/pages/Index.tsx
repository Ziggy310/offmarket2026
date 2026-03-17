import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, UtensilsCrossed, Music, Moon, Users, ArrowRight, Star, Phone, MapPin } from "lucide-react";
import { FadeInSection } from "@/hooks/useFadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

import heroImg from "@/assets/hero-aerial.jpg";
import logo from "@/assets/logo.png";
import flyerSamba from "@/assets/flyer-samba.webp";
import flyerTarde from "@/assets/flyer-samba-tarde.webp";
import flyerRitmo from "@/assets/flyer-ritmo.webp";
import galleryCrowdSinger from "@/assets/gallery-crowd-singer.png";
import galleryDancing from "@/assets/gallery-dancing.png";
import galleryGuitarists from "@/assets/gallery-guitarists.png";
import galleryWings from "@/assets/gallery-wings.png";
import galleryBurger from "@/assets/gallery-burger.png";
import galleryDrummer from "@/assets/gallery-drummer.png";
import galleryCheers from "@/assets/gallery-cheers.png";
import galleryWaitress from "@/assets/gallery-waitress.png";

const testimonials = [
  {
    quote: "If you're on the hunt for a unique culinary adventure, look no further. This is more than just a food destination — it's an experience.",
    author: "Google Review",
  },
  {
    quote: "Great food and great space. Loved the plant-based food from Caty's Kitchen. Nice options at the bar too — delicious rosé wine. Fun live music and great events.",
    author: "Allison S., Google Review",
  },
  {
    quote: "Families will love the lively atmosphere, complete with play areas for kids and live music events. I've never come across a place like this in the Algarve before.",
    author: "Google Review",
  },
  {
    quote: "An array of food trucks and trailers offering diverse cuisines from around the globe. A true culinary haven — something for everyone.",
    author: "Google Review",
  },
];

const events = [
  { name: "Roda de Samba — Viva o Samba", date: "April 4", time: "19h", entry: "Ingressos Disponíveis", image: flyerSamba },
  { name: "Samba de Tarde — Sambambas", date: "March 15", time: "15h", entry: "Special Offer: Open Bar + Lunch €40", image: flyerTarde },
  { name: "Ritmo Futuro Showcase", date: "March 14", time: "17h", entry: "Entrada Gratuita", image: flyerRitmo },
];

const galleryImages = [galleryCrowdSinger, galleryDancing, galleryGuitarists, galleryWings, galleryBurger, galleryDrummer, galleryCheers, galleryWaitress];

const cuisineTags = ["Brazilian BBQ", "Plant-Based", "Burgers", "Latin Street Food", "Poke Bowls", "Pulled Beef", "Cocktail Bar", "Açaí"];

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const pillars = [
    { icon: UtensilsCrossed, label: t("pillars.food"), desc: t("pillars.foodDesc") },
    { icon: Music, label: t("pillars.music"), desc: t("pillars.musicDesc") },
    { icon: Moon, label: t("pillars.night"), desc: t("pillars.nightDesc") },
    { icon: Users, label: t("pillars.family"), desc: t("pillars.familyDesc") },
  ];

  const hours = [
    { day: t("hours.tueThu"), time: "6:30 PM – 12:00 AM" },
    { day: t("hours.friSat"), time: "6:30 PM – 2:00 AM" },
    { day: t("hours.sun"), time: "7:00 PM – 12:00 AM" },
    { day: t("hours.mon"), time: t("hours.closed") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden grain-overlay">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Off_Market_Hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <img src={logo} alt="off MKT" className="w-[120px] md:w-[180px] h-auto mx-auto mb-6 animate-fade-in" />
          <h1 className="font-display text-6xl md:text-8xl lg:text-[96px] leading-none tracking-wide text-foreground mb-4 animate-fade-in">
            {t("hero.headline")}
          </h1>
          <p className="font-body text-lg font-light text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {t("hero.sub")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a href="#reserve" className="bg-primary text-primary-foreground font-display text-xl tracking-wider px-8 py-3 rounded-full hover:bg-primary/90 transition-all hover:scale-105">
              {t("hero.cta1")}
            </a>
            <Link to="/events" className="border border-foreground text-foreground font-display text-xl tracking-wider px-8 py-3 rounded-full hover:bg-foreground/10 transition-all hover:scale-105">
              {t("hero.cta2")}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-foreground/60" />
        </div>
      </section>

      {/* VENUE PILLARS */}
      <FadeInSection>
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              {t("pillars.headline")}
            </h2>
            <p className="font-body text-base font-light text-muted-foreground max-w-xl mx-auto mb-16">
              {t("pillars.sub")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((card) => (
                <div key={card.label} className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors group">
                  <card.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-2xl text-foreground mb-2">{card.label}</h3>
                  <p className="font-body text-sm text-muted-foreground">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FEATURED EVENTS */}
      <FadeInSection>
        <section className="py-24 px-4 bg-card">
          <div className="container mx-auto">
            <p className="font-body text-sm font-semibold tracking-[0.2em] text-primary mb-2 text-center uppercase">{t("events.label")}</p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground text-center mb-12">{t("events.headline")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event) => (
                <Link to="/events" key={event.name} className="group block">
                  <div className="overflow-hidden rounded-[4px] border-b-2 border-transparent group-hover:border-primary transition-all">
                    <img src={event.image} alt={event.name} className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="pt-4">
                    <h3 className="font-display text-2xl text-foreground">{event.name}</h3>
                    <p className="font-body text-sm text-muted-foreground">{event.date} · {event.time}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">{event.entry}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/events" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-xl tracking-wider px-8 py-3 rounded-full hover:bg-primary/90 transition-all">
                {t("events.cta")} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FOOD TRUCK SPOTLIGHT */}
      <FadeInSection>
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg">
              <img src={galleryWings} alt="Grilled food" className="w-full h-[500px] object-cover rounded-lg" loading="lazy" />
            </div>
            <div>
              <p className="font-body text-sm font-semibold tracking-[0.2em] text-primary mb-2 uppercase">{t("food.label")}</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">{t("food.headline")}</h2>
              <p className="font-body text-base text-muted-foreground mb-8">{t("food.desc")}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {cuisineTags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 border border-border rounded-full text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">{tag}</span>
                ))}
              </div>
              <Link to="/food-trucks" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-xl tracking-wider px-8 py-3 rounded-full hover:bg-primary/90 transition-all">
                {t("food.cta")} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* GALLERY STRIP */}
      <FadeInSection>
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto">
            <p className="font-body text-sm font-semibold tracking-[0.2em] text-primary mb-8 text-center uppercase">{t("vibe.label")}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {galleryImages.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-sm group cursor-pointer relative">
                  <img src={img} alt="Off Market atmosphere" className="w-full h-48 md:h-56 object-cover group-hover:brightness-110 transition-all duration-300" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="https://www.instagram.com/offmarketn125/reels/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors tracking-wider">
                {t("vibe.instagram")}
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="font-body text-sm font-semibold tracking-[0.2em] text-primary-foreground/80 mb-8 uppercase">{t("testimonials.label")}</p>
          <div className="relative min-h-[200px] flex items-center justify-center">
            {testimonials.map((item, i) => (
              <div key={i} className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${i === currentTestimonial ? "opacity-100" : "opacity-0"}`}>
                <p className="font-body text-xl md:text-2xl text-primary-foreground font-light italic leading-relaxed mb-6">"{item.quote}"</p>
                <p className="font-body text-sm text-primary-foreground/80">— {item.author} <span className="text-primary-foreground">⭐⭐⭐⭐⭐</span></p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-2 h-2 rounded-full transition-colors ${i === currentTestimonial ? "bg-primary-foreground" : "bg-primary-foreground/30"}`} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
          <p className="font-display text-2xl text-primary-foreground mt-8">
            4.7 <Star className="inline w-5 h-5 fill-current" /> {t("testimonials.rating")}
          </p>
        </div>
      </section>

      {/* ABOUT / STORY */}
      <section className="relative py-32 px-4 overflow-hidden grain-overlay">
        <img src={heroImg} alt="Venue aerial" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 container mx-auto max-w-2xl">
          <FadeInSection>
            <p className="font-body text-sm font-semibold tracking-[0.2em] text-primary mb-4 uppercase">{t("story.label")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">{t("story.headline")}</h2>
            <p className="font-body text-base text-foreground/80 mb-8 leading-relaxed">{t("story.desc")}</p>
            <Link to="/about" className="inline-flex items-center gap-2 border border-foreground text-foreground font-display text-xl tracking-wider px-8 py-3 rounded-full hover:bg-foreground/10 transition-all">
              {t("story.cta")} <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* HOURS & LOCATION */}
      <FadeInSection>
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-4xl text-foreground mb-8">{t("hours.title")}</h2>
              <div className="space-y-3 font-body text-base">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-border pb-2">
                    <span className="text-foreground">{h.day}</span>
                    <span className={h.time === t("hours.closed") ? "text-primary font-semibold" : "text-muted-foreground"}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl text-foreground mb-8">{t("hours.findUs")}</h2>
              <div className="rounded-lg overflow-hidden h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.5!2d-8.1!3d37.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA0JzEyLjAiTiA4wrAwNicwMC4wIlc!5e0!3m2!1sen!2spt!4v1709000000000"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Off Market location"
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-col sm:flex-row justify-center gap-8 mt-12 text-muted-foreground font-body text-sm">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +351 937 208 678</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> N125 395, 8125-017 Quarteira, Algarve, Portugal</span>
          </div>
        </section>
      </FadeInSection>

      {/* RESERVE CTA */}
      <section className="py-24 px-4 bg-primary text-center" id="reserve">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-5xl md:text-7xl text-primary-foreground mb-4">{t("reserve.headline")}</h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-8">{t("reserve.sub")}</p>
          <a href="#reserve" className="inline-block bg-foreground text-background font-display text-2xl tracking-wider px-10 py-4 rounded-full hover:bg-foreground/90 transition-all hover:scale-105">
            {t("reserve.cta")}
          </a>
          <p className="font-body text-sm text-primary-foreground/60 mt-4">
            {t("reserve.call")} <a href="tel:+351937208678" className="underline">+351 937 208 678</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
