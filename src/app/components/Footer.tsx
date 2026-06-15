import { Link } from "react-router";
import { Mail, Phone, Zap } from "lucide-react";

const services = [
  { label: "AI Automation", to: "/ai-automation" },
  { label: "AI Calling Assistant", to: "/ai-calling" },
  { label: "Website Development", to: "/web-dev" },
  { label: "Mobile Apps", to: "/mobile-apps" },
  { label: "UI/UX Design", to: "/uiux" },
  { label: "Combo System", to: "/combo" },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Workflow", to: "/workflow" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer style={{ background: "#1A1A1A", color: "#FFF8E7" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#C9A24B" }}>
                <Zap size={16} style={{ color: "#1A1A1A" }} />
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "Sora, sans-serif", color: "#FFF8E7" }}>
                Bhosale Tech Solution
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}>
              Premium IT startup delivering AI automation, web & mobile development, and UI/UX design — faster, smarter, more affordable.
            </p>
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>
              We Design. We Develop. We Deliver.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-5" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm transition-colors hover:text-amber-400"
                    style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-5" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="text-sm transition-colors hover:text-amber-400"
                    style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-5" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A24B" }} />
                <a
                  href="mailto:bhosaleatharv8765@gmail.com"
                  className="text-sm break-all hover:text-amber-400 transition-colors"
                  style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}
                >
                  bhosaleatharv8765@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A24B" }} />
                <a
                  href="tel:+919860810865"
                  className="text-sm hover:text-amber-400 transition-colors"
                  style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}
                >
                  +91 9860810865
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919860810865"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mt-2 transition-all hover:scale-105"
                  style={{ background: "#25D366", color: "#fff", fontFamily: "Sora, sans-serif" }}
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid #333" }}>
          <p className="text-xs" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
            © 2026 Bhosale Tech Solution — We Design, We Develop, We Deliver.
          </p>
          <p className="text-xs" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
            Built with speed, efficiency & precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
