import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "AI Calling", to: "/ai-calling" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(230, 215, 195, 0.96)" : "#E6D7C3",
          borderBottom: scrolled ? "1px solid #D4C4B0" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="h-25 w-25 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: "#E6D7C3", border: "3px solid #C9A24B" }}>
              <img 
                src="/ChatGPT Image Jun 15, 2026, 03_56_57 PM.png" 
                alt="Bhosale Patil Developers Logo" 
                className="h-25 w-25 object-cover object-center"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-tight" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
                BHOSALE
              </span>
              <span className="font-bold text-lg tracking-tight" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
                PATIL
              </span>
              <span className="text-sm tracking-widest font-black" style={{ color: "#000000", fontFamily: "Sora, sans-serif", marginTop: "2px" }}>
                DEVELOPERS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-3 py-1.5 text-sm font-medium transition-colors group"
                style={{
                  color: location.pathname === link.to ? "#C9A24B" : "#000000",
                  fontFamily: "Sora, sans-serif",
                }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{
                    background: "#C9A24B",
                    width: location.pathname === link.to ? "100%" : "0%",
                  }}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/919860810865?text=Hi%2C%20I%20want%20a%20free%20consultation"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: "#000000",
                color: "#E6D7C3",
                fontFamily: "Sora, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#C9A24B";
                (e.target as HTMLElement).style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "#000000";
                (e.target as HTMLElement).style.color = "#E6D7C3";
              }}
            >
              Get Free Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            style={{ color: "#000000" }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex"
          onClick={() => setOpen(false)}
        >
          <div className="flex-1" />
          <div
            className="w-72 h-full flex flex-col p-8 gap-4 overflow-y-auto"
            style={{ background: "#E6D7C3", borderLeft: "1px solid #D4C4B0" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <div className="h-16 w-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: "#E6D7C3", border: "3px solid #C9A24B" }}>
                  <img 
                    src="/ChatGPT Image Jun 15, 2026, 03_56_57 PM.png" 
                    alt="Bhosale Patil Developers Logo" 
                    className="h-16 w-16 object-cover object-center"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm" style={{ fontFamily: "Sora, sans-serif", color: "#000000" }}>BP</span>
                  <span className="text-xs" style={{ fontFamily: "Sora, sans-serif", color: "#000000" }}>Dev</span>
                </div>
              </Link>
              <button onClick={() => setOpen(false)}><X size={20} /></button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-base font-semibold py-2 border-b"
                style={{
                  borderColor: "#D4C4B0",
                  color: location.pathname === link.to ? "#C9A24B" : "#000000",
                  fontFamily: "Sora, sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919860810865?text=Hi%2C%20I%20want%20a%20free%20consultation"
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-5 py-3 text-center text-sm font-semibold rounded-full"
              style={{ background: "#000000", color: "#E6D7C3", fontFamily: "Sora, sans-serif" }}
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
}
