import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const desktopNavLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.events"), href: "/events" },
    { label: t("nav.foodTrucks"), href: "/food-trucks" },
    { label: t("nav.gallery"), href: "/gallery" },
    { label: t("nav.about"), href: "/about" },
  ];

  const mobileNavLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.events"), href: "/events" },
    { label: t("nav.foodTrucks"), href: "/food-trucks" },
    { label: t("nav.gallery"), href: "/gallery" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const LangToggle = ({ size = "sm" }: { size?: "sm" | "lg" }) => {
    const base = size === "lg" ? "px-4 py-1.5 text-sm" : "px-3 py-1 text-xs";
    return (
      <div className="flex gap-1">
        <button
          onClick={() => setLang("en")}
          className={`${base} rounded-full font-display tracking-wider transition-colors ${
            lang === "en"
              ? "text-white"
              : "text-white/70 border border-white/30"
          }`}
          style={lang === "en" ? { backgroundColor: "#E8321A" } : {}}
        >
          EN
        </button>
        <button
          onClick={() => setLang("pt")}
          className={`${base} rounded-full font-display tracking-wider transition-colors ${
            lang === "pt"
              ? "text-white"
              : "text-white/70 border border-white/30"
          }`}
          style={lang === "pt" ? { backgroundColor: "#E8321A" } : {}}
        >
          PT
        </button>
      </div>
    );
  };

  // Desktop lang toggle (uses foreground colors)
  const DesktopLangToggle = () => (
    <div className="flex gap-1">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 text-xs rounded-full font-display tracking-wider transition-colors ${
          lang === "en"
            ? "text-primary-foreground"
            : "text-foreground/70 border border-border"
        }`}
        style={lang === "en" ? { backgroundColor: "#E8321A" } : {}}
      >
        EN
      </button>
      <button
        onClick={() => setLang("pt")}
        className={`px-3 py-1 text-xs rounded-full font-display tracking-wider transition-colors ${
          lang === "pt"
            ? "text-primary-foreground"
            : "text-foreground/70 border border-border"
        }`}
        style={lang === "pt" ? { backgroundColor: "#E8321A" } : {}}
      >
        PT
      </button>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="off MKT" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {desktopNavLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-display text-lg tracking-wider transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <a
            href="#reserve"
            className="bg-primary text-primary-foreground font-display text-lg tracking-wider px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            {t("nav.reserve")}
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.instagram.com/offmarketn125/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <DesktopLangToggle />
        </div>

        {/* Mobile hamburger */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-foreground"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Mobile full-screen overlay */}
      {open && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#0D0D0D",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              zIndex: 10000,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Nav links */}
          <div className="flex flex-col items-center" style={{ gap: 32, paddingTop: 24 }}>
            {/* Language toggle */}
            <LangToggle size="lg" />

            {mobileNavLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-[48px] leading-none tracking-wider text-white hover:text-primary transition-colors"
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <a
              href="#reserve"
              onClick={() => setOpen(false)}
              className="mt-4 w-full max-w-[280px] text-center font-display text-2xl tracking-wider px-8 py-3 rounded-full text-white"
              style={{ backgroundColor: "#E8321A" }}
            >
              {t("nav.reserve")}
            </a>
          </div>

          {/* Bottom section */}
          <div className="absolute bottom-8 flex flex-col items-center gap-4">
            <a
              href="https://www.instagram.com/offmarketn125/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <p className="text-white/50 text-xs font-body">© 2025 Off Market Street Food</p>
          </div>
        </div>
      )}
    </nav>
  );
}
