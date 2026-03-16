import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInSection } from "@/hooks/useFadeIn";

import foodBowls from "@/assets/food-bowls.jpg";

const menuItems = [
  { name: "Buddha Power Bowl", desc: "Quinoa, roasted sweet potato, avocado, tahini dressing", price: "€12.50", category: "Mains" },
  { name: "BBQ Jackfruit Wrap", desc: "Pulled jackfruit in smoky BBQ sauce, slaw, pickled onion", price: "€10.00", category: "Mains" },
  { name: "Mushroom Burger", desc: "Portobello mushroom, vegan cheese, truffle aioli, brioche bun", price: "€11.50", category: "Mains" },
  { name: "Thai Coconut Curry Bowl", desc: "Vegetables in coconut curry, jasmine rice, fresh herbs", price: "€11.00", category: "Bowls" },
  { name: "Sweet Potato Fries", desc: "Crispy sweet potato fries with chipotle mayo", price: "€5.50", category: "Sides" },
  { name: "Green Smoothie", desc: "Spinach, banana, mango, coconut water", price: "€4.50", category: "Drinks" },
  { name: "Açaí Bowl", desc: "Açaí, banana, granola, coconut, fresh berries", price: "€9.00", category: "Bowls" },
  { name: "Fresh Lemonade", desc: "Hand-squeezed lemon, mint, sparkling water", price: "€3.50", category: "Drinks" },
];

const categories = ["Mains", "Bowls", "Sides", "Drinks"];

export default function CatyKitchen() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-end overflow-hidden grain-overlay">
        <img src={foodBowls} alt="Caty's Kitchen food" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link to="/food-trucks" className="inline-flex items-center gap-1 text-primary font-body text-sm mb-4 hover:gap-2 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Off Market
          </Link>
          <h1 className="font-display text-5xl md:text-7xl text-foreground">CATY'S KITCHEN</h1>
          <p className="font-body text-lg text-muted-foreground mt-2">Plant-Based & Vegan Street Food</p>
          <div className="flex items-center gap-2 mt-2 text-muted-foreground font-body text-sm">
            <MapPin className="w-4 h-4 text-primary" /> Open at Off Market · N125 Quarteira
          </div>
        </div>
      </section>

      {/* About */}
      <FadeInSection>
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 rounded-full bg-muted flex-shrink-0 overflow-hidden">
              <img src={foodBowls} alt="Caty" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-display text-3xl text-foreground mb-4">ABOUT</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Caty's Kitchen is where flavor meets conscience. Every dish is 100% plant-based, made fresh, and crafted to prove that vegan food is the most exciting thing on the menu. Come hungry. Leave converted.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Menu */}
      <FadeInSection>
        <section className="py-16 px-4 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-4xl text-foreground text-center mb-2">MENU</h2>
            <p className="font-body text-xs text-muted-foreground text-center mb-12 italic">Menu items are placeholders — to be updated by Caty's Kitchen.</p>
            {categories.map((cat) => (
              <div key={cat} className="mb-10">
                <h3 className="font-display text-2xl text-primary mb-4">{cat.toUpperCase()}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {menuItems.filter((m) => m.category === cat).map((item) => (
                    <div key={item.name} className="bg-background border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start">
                        <h4 className="font-display text-xl text-foreground">{item.name}</h4>
                        <span className="font-display text-lg text-primary">{item.price}</span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Find Us */}
      <FadeInSection>
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-foreground mb-4">FIND US</h2>
            <p className="font-body text-muted-foreground mb-4">You'll find us inside Off Market Street Food</p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground font-body mb-6">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" /> N125 395, Quarteira</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-primary" /> Tue–Sun evenings</span>
            </div>
            <div className="rounded-lg overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.5!2d-8.1!3d37.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA0JzEyLjAiTiA4wrAwNicwMC4wIlc!5e0!3m2!1sen!2spt!4v1709000000000"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Off Market location"
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      <Footer />
    </div>
  );
}
