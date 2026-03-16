import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, UtensilsCrossed, Music, Moon, Users, ArrowRight, Star, Phone, MapPin } from "lucide-react";
import { FadeInSection } from "@/hooks/useFadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroImg from "@/assets/hero-aerial.jpg";
import foodImg from "@/assets/food-closeup.jpg";
import crowdImg from "@/assets/crowd-bw.jpg";
import performerImg from "@/assets/performer.jpg";
import familyImg from "@/assets/family-dining.jpg";
import flyerSamba from "@/assets/flyer-samba.jpg";
import flyerTarde from "@/assets/flyer-samba-tarde.jpg";
import flyerRitmo from "@/assets/flyer-ritmo.jpg";
import cocktailsImg from "@/assets/cocktails.jpg";
import foodBowls from "@/assets/food-bowls.jpg";
import foodTruck from "@/assets/food-truck.jpg";

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
  { name: "Roda de Samba", date: "March 7", time: "19h", entry: "Entrada Gratuita", image: flyerSamba },
  { name: "Samba de Tarde — Sambambas", date: "March 15", time: "15h", entry: "Special Offer: Open Bar + Lunch €40", image: flyerTarde },
  { name: "Ritmo Futuro Showcase", date: "March 14", time: "17h", entry: "Entrada Gratuita", image: flyerRitmo },
];

const galleryImages = [heroImg, crowdImg, performerImg, familyImg, cocktailsImg, foodBowls, foodTruck, foodImg];

const cuisineTags = ["Brazilian BBQ", "Plant-Based", "Burgers", "Latin Street Food", "Poke Bowls", "Pulled Beef", "Cocktail Bar", "Açaí"];

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden grain-overlay">
        <img src={heroImg} alt="Off Market venue at night" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        {/* TODO: Replace placeholder with actual video file. Recommend 16:9 crop of existing Instagram vertical content. */}
        <div className="absolute inset-0 bg-background/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <img src={heroImg} alt="" className="hidden" />
          <img src={logo} alt="off MKT" className="w-[120px] md:w-[180px] h-auto mx-auto mb-6 animate-fade-in" />
          <h1 className="font-display text-6xl md:text-8xl lg:text-[96px] leading-none tracking-wide text-foreground mb-4 animate-fade-in">
            WHERE THE ALGARVE COMES ALIVE
          </h1>
          <p className="font-body text-lg font-light text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Street food. Live music. Nightlife energy. Family welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a href="#reserve" className="bg-primary text-primary-foreground font-display text-xl tracking-wider px-8 py-3 rounded-full hover:bg-primary/90 transition-all hover:scale-105">
              RESERVE A TABLE
            </a>
            <Link to="/events" className="border border-foreground text-foreground font-display text-xl tracking-wider px-8 py-3 rounded-full hover:bg-foreground/10 transition-all hover:scale-105">
              SEE EVENTS
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
              MORE THAN A MARKET. IT'S A FEELING.
            </h2>
            <p className="font-body text-base font-light text-muted-foreground max-w-xl mx-auto mb-16">
              An outdoor space unlike anything else in the Algarve. By day, a gathering place for families and food lovers. By night, the energy of a nightclub under the open sky.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: UtensilsCrossed, label: "WORLD FOOD", desc: "8 global food trucks. Burgers, samba bowls, BBQ, plant-based, cocktails and more." },
                { icon: Music, label: "LIVE MUSIC", desc: "Samba, rock, world music, DJ sets. Multiple events every week." },
                { icon: Moon, label: "NIGHTLIFE VIBES", desc: "Open until 2AM on weekends. Music, dancing, and great drinks under the Algarve sky." },
                { icon: Users, label: "FAMILY WELCOME", desc: "Kids' play area, relaxed seating, and something for every age. Come as a family. Stay as a crowd." },
              ].map((card) => (
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
            <p className="font-body text-sm font-semibold tracking-[0.2em] text-primary mb-2 text-center uppercase">What's On</p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground text-center mb-12">UPCOMING EVENTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event) => (
                <Link to="/events" key={event.name} className="group block">
                  <div className="overflow-hidden rounded-lg border-b-2 border-transparent group-hover:border-primary transition-all">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-4">
                    <h3 className="font-display text-2xl text-foreground">{event.name}</h3>
                    <p className="font-body text-sm text-muted-foreground">{event.date} · {event.time}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                      {event.entry}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/events" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-xl tracking-wider px-8 py-3 rounded-full hover:bg-primary/90 transition-all">
                VIEW ALL EVENTS <ArrowRight className="w-5 h-5" />
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
              <img src={foodImg} alt="Grilled food" className="w-full h-[500px] object-cover rounded-lg" loading="lazy" />
            </div>
            <div>
              <p className="font-body text-sm font-semibold tracking-[0.2em] text-primary mb-2 uppercase">The Food</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">EIGHT KITCHENS. ONE INCREDIBLE SPACE.</h2>
              <p className="font-body text-base text-muted-foreground mb-8">
                From wood-fired BBQ and Brazilian street food to plant-based bowls and exotic cocktails — Off Market brings the world's flavors to Quarteira. Every truck is independent. Every dish is made with love.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {cuisineTags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 border border-border rounded-full text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/food-trucks" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-xl tracking-wider px-8 py-3 rounded-full hover:bg-primary/90 transition-all">
                EXPLORE FOOD TRUCKS <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* GALLERY STRIP */}
      <FadeInSection>
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto">
            <p className="font-body text-sm font-semibold tracking-[0.2em] text-primary mb-8 text-center uppercase">The Vibe</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {galleryImages.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-sm group cursor-pointer relative">
                  <img
                    src={img}
                    alt="Off Market atmosphere"
                    className="w-full h-48 md:h-56 object-cover group-hover:brightness-110 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="https://www.instagram.com/offmarketpt"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors tracking-wider"
              >
                FOLLOW US ON INSTAGRAM @offmarketpt
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="font-body text-sm font-semibold tracking-[0.2em] text-primary-foreground/80 mb-8 uppercase">What People Say</p>
          <div className="relative min-h-[200px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
                  i === currentTestimonial ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="font-body text-xl md:text-2xl text-primary-foreground font-light italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <p className="font-body text-sm text-primary-foreground/80">
                  — {t.author} <span className="text-primary-foreground">⭐⭐⭐⭐⭐</span>
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentTestimonial ? "bg-primary-foreground" : "bg-primary-foreground/30"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <p className="font-display text-2xl text-primary-foreground mt-8">
            4.7 <Star className="inline w-5 h-5 fill-current" /> on Google — 256 Reviews
          </p>
        </div>
      </section>

      {/* ABOUT / STORY */}
      <section className="relative py-32 px-4 overflow-hidden grain-overlay">
        <img src={heroImg} alt="Venue aerial" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 container mx-auto max-w-2xl">
          <FadeInSection>
            <p className="font-body text-sm font-semibold tracking-[0.2em] text-primary mb-4 uppercase">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">BORN IN QUARTEIRA. BUILT FOR EVERYONE.</h2>
            <p className="font-body text-base text-foreground/80 mb-8 leading-relaxed">
              Off Market started with a simple idea: bring the best food, the best music, and the best vibes to one outdoor space in the heart of the Algarve. What began as a gathering of food trucks became the most exciting night out — and afternoon in — this region has ever seen. Come for the food. Stay for the music. Come back for the feeling.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 border border-foreground text-foreground font-display text-xl tracking-wider px-8 py-3 rounded-full hover:bg-foreground/10 transition-all">
              READ OUR STORY <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* HOURS & LOCATION */}
      <FadeInSection>
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-4xl text-foreground mb-8">HOURS</h2>
              <div className="space-y-3 font-body text-base">
                {[
                  { day: "Tuesday – Thursday", time: "6:30 PM – 12:00 AM" },
                  { day: "Friday – Saturday", time: "6:30 PM – 2:00 AM" },
                  { day: "Sunday", time: "7:00 PM – 12:00 AM" },
                  { day: "Monday", time: "CLOSED" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-border pb-2">
                    <span className="text-foreground">{h.day}</span>
                    <span className={h.time === "CLOSED" ? "text-primary font-semibold" : "text-muted-foreground"}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl text-foreground mb-8">FIND US</h2>
              <div className="rounded-lg overflow-hidden h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.5!2d-8.1!3d37.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA0JzEyLjAiTiA4wrAwNicwMC4wIlc!5e0!3m2!1sen!2spt!4v1709000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Off Market location"
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
          <h2 className="font-display text-5xl md:text-7xl text-primary-foreground mb-4">READY TO EXPERIENCE OFF MARKET?</h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-8">
            Reservations recommended, especially on event nights. Walk-ins always welcome.
          </p>
          <a href="#reserve" className="inline-block bg-foreground text-background font-display text-2xl tracking-wider px-10 py-4 rounded-full hover:bg-foreground/90 transition-all hover:scale-105">
            RESERVE YOUR TABLE
          </a>
          <p className="font-body text-sm text-primary-foreground/60 mt-4">
            Or call us: <a href="tel:+351937208678" className="underline">+351 937 208 678</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
