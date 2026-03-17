import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Food Trucks", href: "/food-trucks" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="off MKT" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
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
          className="md:hidden text-foreground z-50"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-background/98 z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl tracking-wider text-foreground hover:text-primary transition-colors"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            className="bg-primary text-primary-foreground font-display text-3xl tracking-wider px-10 py-3 rounded-full"
          >
            RESERVE
          </a>
          <a
            href="https://www.instagram.com/offmarketn125/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors mt-4"
          >
            <Instagram className="w-8 h-8" />
          </a>
        </div>
      )}
    </nav>
  );
}
