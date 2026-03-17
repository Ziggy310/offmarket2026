import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInSection } from "@/hooks/useFadeIn";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import cocktails from "@/assets/cocktails.jpg";
import point80Thumb from "@/assets/point80-thumb.jpg";
import ohmydogThumb from "@/assets/ohmydog-thumb.jpg";
import milanesaThumb from "@/assets/milanesa-thumb.jpg";
import gelateria1997Thumb from "@/assets/1997-thumb.jpg";
import vagabunsThumb from "@/assets/vagabuns-thumb.jpg";
import bbq67Thumb from "@/assets/67bbq-thumb.jpg";
import takebaoThumb from "@/assets/takebao-thumb.jpg";
import beirutThumb from "@/assets/beirut-thumb.jpg";

const trucks = [
  { name: "67 BBQ — O Sabor do Brasil", cuisine: "Brazilian BBQ & Grilled Meats", desc: "Authentic Brazilian cuts, slow-smoked to perfection.", slug: null, image: bbq67Thumb },
  { name: "Point'80 — Burger House", cuisine: "Burgers & Comfort Food", desc: "Smashed burgers, loaded fries, and classic comfort.", slug: null, image: point80Thumb },
  { name: "Oh My Dog!", cuisine: "Street Food & Wings", desc: "Hot dogs, crispy wings, and bold street flavors.", slug: null, image: ohmydogThumb },
  { name: "Milanesa Street", cuisine: "Latin Street Food & Milanesas", desc: "Crispy milanesas and the vibrant flavors of Latin America.", slug: null, image: milanesaThumb },
  { name: "1997 Gelateria", cuisine: "Italian Ice Cream & Desserts", desc: "Artisan gelato, crepes, coffee, and cake.", slug: null, image: gelateria1997Thumb },
  { name: "Vagabuns Smash Burger", cuisine: "Smash Burgers", desc: "Smashed to perfection with bold, loaded toppings.", slug: null, image: vagabunsThumb },
  { name: "Take a Bao", cuisine: "Asian Street Food", desc: "Steamed bao buns and Asian street food favorites.", slug: null, image: takebaoThumb },
  { name: "Beirut Bites", cuisine: "Lebanese & Middle Eastern", desc: "Wraps, shawarma, and the flavors of Beirut.", slug: null, image: beirutThumb },
  { name: "Off Market Cocktail Bar", cuisine: "Cocktails, Wine & Craft Beer", desc: "Expertly mixed cocktails, local wines, and craft beer on tap.", slug: null, image: cocktails },
];

export default function FoodTrucksPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-6xl md:text-8xl text-foreground mb-4">{t("trucksPage.title")}</h1>
          <p className="font-body text-lg text-muted-foreground">{t("trucksPage.sub")}</p>
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
                      {t("trucksPage.viewMenu")} <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="text-muted-foreground/50 font-body text-sm italic">{t("trucksPage.menuSoon")}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      <section className="pb-24 px-4 text-center">
        <div className="container mx-auto bg-card border border-border rounded-lg p-8">
          <h3 className="font-display text-2xl text-foreground mb-2">{t("trucksPage.areYou")}</h3>
          <p className="font-body text-sm text-muted-foreground mb-4">{t("trucksPage.joinUs")}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-lg tracking-wider px-6 py-2 rounded-full hover:bg-primary/90 transition-all">
            {t("trucksPage.getInTouch")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
