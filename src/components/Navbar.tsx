import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const desktopNavLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Food Trucks", href: "/food-trucks" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

const mobileNavLinks = [
  { label: "Events", href: "/events" },
  { label: "Food Trucks", href: "/food-trucks" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
            RESERVE
          </a>
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="https://www.instagram.com/offmarketn125/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground z-[10000] relative"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-7 h-7 text-white" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-[55] flex flex-col items-center justify-between md:hidden transition-opacity duration-[250ms] ease-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#0D0D0D" }}
      >
        {/* Nav links - centered */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
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
            RESERVE
          </a>
        </div>

        {/* Bottom section */}
        <div className="pb-8 flex flex-col items-center gap-4">
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
    </nav>
  );
}
