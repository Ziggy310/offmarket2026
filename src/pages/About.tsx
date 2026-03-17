import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInSection } from "@/hooks/useFadeIn";

import heroImg from "@/assets/hero-aerial.jpg";
import venueOutdoor from "@/assets/venue-outdoor.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden grain-overlay">
        <img src={heroImg} alt="Venue aerial" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-6xl md:text-8xl text-foreground">MORE THAN A MARKET.</h1>
        </div>
      </section>

      {/* Story */}
      <FadeInSection>
        <section className="py-24 px-4">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">OUR STORY</h2>
              <div className="font-body text-base text-muted-foreground space-y-4 leading-relaxed">
                <p>Off Market was born from a love of great food, real music, and shared experiences. We built something the Algarve didn't know it needed — an outdoor space where food trucks, live artists, and families all belong in the same place.</p>
                <p>From samba circles to DJ showcases, from grilled halloumi to açaí bowls, every night at Off Market is its own story. We're open to everyone. Come hungry. Come curious. Come ready to stay late.</p>
                <p>Located on the N125 in Quarteira — easy to find, impossible to forget.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={venueOutdoor} alt="Off Market outdoor venue" className="w-full h-[400px] object-cover" loading="lazy" />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Stats */}
      <FadeInSection>
        <section className="py-16 px-4 bg-card">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "8", label: "Food Trucks" },
              { num: "4.7★", label: "Google Rating" },
              { num: "3+", label: "Events Per Week" },
              { num: "1", label: "Incredible Outdoor Space" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl text-primary">{stat.num}</p>
                <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Founder placeholder */}
      <FadeInSection>
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-foreground mb-4">THE TEAM</h2>
            <p className="font-body text-muted-foreground italic">[Owner name and story — to be added]</p>
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-center">
        <Link to="/events" className="inline-flex items-center gap-2 bg-foreground text-background font-display text-2xl tracking-wider px-10 py-4 rounded-full hover:bg-foreground/90 transition-all">
          SEE WHAT'S ON <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
