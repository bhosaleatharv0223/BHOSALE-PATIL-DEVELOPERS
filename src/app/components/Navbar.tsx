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

  // Prevent body scroll when drawer is open
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
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm md:shadow-none"
        style={{
          background: scrolled ? "rgba(230, 215, 195, 0.96)" : "#E6D7C3",
          borderBottom: "1px solid #D4C4B0",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between py-2 md:py-3">
          {/* Logo - Responsive sizing */}
          <Link to="/" className="flex items-center gap-1.5 md:gap-4 group hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="h-10 w-10 md:h-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: "#E6D7C3", border: "3px solid #C9A24B" }}>
              <img 
                src="/ChatGPT Image Jun 15, 2026, 03_56_57 PM.png" 
                alt="Bhosale Patil Developers Logo" 
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* Brand name - hidden on small mobile, visible on sm and up */}
            <div className="flex flex-col leading-tight hidden sm:flex">
              <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-tight" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
                BHOSALE
              </span>
              <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-tight" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
                PATIL
              </span>
              <span className="text-xs tracking-widest font-black" style={{ color: "#000000", fontFamily: "Sora, sans-serif", marginTop: "2px" }}>
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
                className="relative px-4 py-2 text-sm font-medium transition-colors group min-h-12 flex items-center"
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
              className="px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 min-h-12 flex items-center"
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
            className="lg:hidden p-3 min-h-12 min-w-12 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            style={{ color: "#000000" }}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex overflow-hidden"
          onClick={() => setOpen(false)}
          style={{ marginTop: "56px" }} // Account for navbar height
        >
          <div className="flex-1" />
          <div
            className="w-full sm:w-80 h-[calc(100vh-56px)] flex flex-col p-4 sm:p-6 gap-0 overflow-y-auto"
            style={{ background: "#FFF8E7", borderLeft: "1px solid #D4C4B0" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - top right */}
            <div className="flex justify-end mb-6">
              <button 
                onClick={() => setOpen(false)} 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors touch-manipulation"
                style={{ minHeight: "48px", minWidth: "48px" }}
                aria-label="Close menu"
              >
                <X size={24} style={{ color: "#000000" }} />
              </button>
            </div>

            {/* Navigation links - 48px+ height for mobile touch targets */}
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-base font-semibold px-4 border-b transition-colors hover:bg-gray-100 rounded-lg touch-manipulation"
                style={{
                  borderColor: "#D4C4B0",
                  color: location.pathname === link.to ? "#C9A24B" : "#000000",
                  fontFamily: "Sora, sans-serif",
                  minHeight: "56px",
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA button in drawer */}
            <a
              href="https://wa.me/919860810865?text=Hi%2C%20I%20want%20a%20free%20consultation"
              target="_blank"
              rel="noreferrer"
              className="mt-auto mb-4 px-6 text-center text-base font-semibold rounded-full transition-all hover:scale-105 touch-manipulation"
              style={{
                background: "#000000",
                color: "#FFF8E7",
                fontFamily: "Sora, sans-serif",
                minHeight: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
}
