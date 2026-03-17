import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t("nav.events"), href: "/events" },
    { label: t("nav.foodTrucks"), href: "/food-trucks" },
    { label: t("nav.gallery"), href: "/gallery" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <footer className="bg-offmkt-black border-t-2 border-primary">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <Link to="/">
            <img src={logo} alt="off MKT" className="h-12 w-auto" />
          </Link>
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="font-display text-base tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/offmarketn125/reels/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100090935670781&sk=photos" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            N125 395, 8125-017 Quarteira, Algarve, Portugal
          </span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            +351 937 208 678
          </span>
          <span>Tue–Thu 6:30PM–12AM · Fri–Sat 6:30PM–2AM · Sun 7PM–12AM</span>
        </div>

        <div className="text-center text-xs text-muted-foreground/60">
          © 2025 Off Market Street Food. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
