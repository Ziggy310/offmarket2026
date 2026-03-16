import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInSection } from "@/hooks/useFadeIn";
import { ArrowRight } from "lucide-react";

import foodCloseup from "@/assets/food-closeup.jpg";
import foodBowls from "@/assets/food-bowls.jpg";
import foodTruck from "@/assets/food-truck.jpg";
import cocktails from "@/assets/cocktails.jpg";

const trucks = [
  { name: "Caty's Kitchen", cuisine: "Plant-Based & Vegan", desc: "Where flavor meets conscience. 100% plant-based, made fresh.", slug: "caty-kitchen", image: foodBowls },
  { name: "67 BBQ — O Sabor do Brasil", cuisine: "Brazilian BBQ & Grilled Meats", desc: "Authentic Brazilian cuts, slow-smoked to perfection.", slug: null, image: foodCloseup },
  { name: "[Truck Name TBC]", cuisine: "Poke Bowls & Hawaiian", desc: "Fresh poke bowls with tropical flavors. Placeholder — name to be confirmed.", slug: null, image: foodBowls },
  { name: "[Truck Name TBC]", cuisine: "Burgers & American Street Food", desc: "Smashed burgers, loaded fries, and classic American comfort. Placeholder.", slug: null, image: foodTruck },
  { name: "[Truck Name TBC]", cuisine: "Latin Street Food & Empanadas", desc: "Empanadas, arepas, and the vibrant flavors of Latin America. Placeholder.", slug: null, image: foodCloseup },
  { name: "[Truck Name TBC]", cuisine: "Italian Pasta & Pizza", desc: "Handmade pasta and wood-fired pizza. Placeholder.", slug: null, image: foodTruck },
  { name: "[Truck Name TBC]", cuisine: "Açaí & Health Bowls", desc: "Açaí bowls, smoothies, and health-forward street food. Placeholder.", slug: null, image: foodBowls },
  { name: "Off Market Cocktail Bar", cuisine: "Cocktails, Wine & Craft Beer", desc: "Expertly mixed cocktails, local wines, and craft beer on tap.", slug: null, image: cocktails },
];

export default function FoodTrucksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-6xl md:text-8xl text-foreground mb-4">THE KITCHENS</h1>
          <p className="font-body text-lg text-muted-foreground">8 independent food trucks. One incredible space.</p>
        </div>
      </section>

      <FadeInSection>
        <section className="pb-24 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trucks.map((truck) => (
              <div key={truck.name} className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors group">
                <img src={truck.image} alt={truck.name} className="w-full h-56 object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-primary mb-1">{truck.name}</h3>
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full mb-3">{truck.cuisine}</span>
                  <p className="font-body text-sm text-muted-foreground mb-4">{truck.desc}</p>
                  {truck.slug ? (
                    <Link to={`/food-trucks/${truck.slug}`} className="inline-flex items-center gap-1 text-primary font-display text-base tracking-wider hover:gap-2 transition-all">
                      VIEW MENU <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="text-muted-foreground/50 font-body text-sm italic">Menu coming soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      <section className="pb-24 px-4 text-center">
        <div className="container mx-auto bg-card border border-border rounded-lg p-8">
          <h3 className="font-display text-2xl text-foreground mb-2">Are you a food truck?</h3>
          <p className="font-body text-sm text-muted-foreground mb-4">Join Off Market and be part of something incredible.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-lg tracking-wider px-6 py-2 rounded-full hover:bg-primary/90 transition-all">
            GET IN TOUCH <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
