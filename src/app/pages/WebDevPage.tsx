import { ScrollReveal } from "../components/ScrollReveal";
import { Globe, Zap, Users, ArrowRight } from "lucide-react";

const offerings = [
  { title: "Business Websites", desc: "Professional, mobile-first websites that establish your online presence and build trust with customers." },
  { title: "Landing Pages", desc: "High-conversion landing pages designed to capture leads and drive specific actions from visitors." },
  { title: "Lead Capture Systems", desc: "Integrated forms, chatbots, and CRM connections that turn visitors into qualified leads automatically." },
];

const techStack = ["React", "HTML5", "CSS3", "JavaScript", "Spring Boot", "Node.js", "Tailwind CSS", "Firebase"];

export default function WebDevPage() {
  return (
    <div style={{ background: "#FFF8E7" }}>
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-6 border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>
              Website Development
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
              Fast-Built,<br />Cost-Effective<br />
              <span style={{ color: "#C9A24B" }}>Business Websites</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
              Get online quickly with websites that convert visitors into customers — built in days, not months.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {[{ icon: Zap, label: "Quick Online Presence" }, { icon: Users, label: "Immediate Lead Generation" }, { icon: Globe, label: "Mobile Responsive" }].map((v) => (
                <div key={v.label} className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold" style={{ background: "#FBF1DD", borderColor: "#E5DCC8", border: "1px solid #E5DCC8", color: "#111111", fontFamily: "Sora, sans-serif" }}>
                  <v.icon size={12} style={{ color: "#C9A24B" }} />
                  {v.label}
                </div>
              ))}
            </div>
            <a href="https://wa.me/919860810865?text=I%20want%20a%20website" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base min-h-12 transition-all hover:scale-105" style={{ background: "#1A1A1A", color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>
              Get My Website <ArrowRight size={16} />
            </a>
          </ScrollReveal>

          {/* Browser mockup */}
          <ScrollReveal delay={150}>
            <div className="rounded-2xl overflow-hidden border shadow-xl" style={{ borderColor: "#E5DCC8" }}>
              <div className="px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2" style={{ background: "#1A1A1A" }}>
                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full" style={{ background: "#EF4444" }} />
                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full" style={{ background: "#F59E0B" }} />
                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full" style={{ background: "#22C55E" }} />
                <div className="flex-1 mx-2 sm:mx-4 rounded px-2 sm:px-3 py-0.5 sm:py-1 text-xs" style={{ background: "#333", color: "#888", fontFamily: "Inter, sans-serif" }}>
                  bhosaletech.in
                </div>
              </div>
              <div className="p-4 sm:p-8" style={{ background: "#FBF1DD" }}>
                <div className="h-4 sm:h-6 rounded mb-2 sm:mb-3" style={{ background: "#E5DCC8", width: "60%" }} />
                <div className="h-3 sm:h-4 rounded mb-2" style={{ background: "#E5DCC8", width: "80%" }} />
                <div className="h-3 sm:h-4 rounded mb-4 sm:mb-6" style={{ background: "#E5DCC8", width: "70%" }} />
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="rounded-lg h-12 sm:h-16" style={{ background: "#FFF8E7", border: "1px solid #E5DCC8" }} />
                  ))}
                </div>
                <div className="h-6 sm:h-8 rounded-full w-24 sm:w-32" style={{ background: "#1A1A1A" }} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>What We Build</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {offerings.map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 100}>
                <div className="rounded-2xl p-6 sm:p-7 border h-full" style={{ background: "#FFF8E7", borderColor: "#E5DCC8" }}>
                  <h3 className="text-base sm:text-lg md:text-xl font-black mb-3" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{o.title}</h3>
                  <p className="text-xs sm:text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{o.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6 sm:mb-8" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {techStack.map((t) => (
              <span key={t} className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold border" style={{ background: "#FBF1DD", borderColor: "#E5DCC8", color: "#111111", fontFamily: "Sora, sans-serif" }}>{t}</span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8" style={{ background: "#1A1A1A" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4" style={{ color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>Get Your Website Live</h2>
          <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8" style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}>From domain to deployed — in 3 to 7 days.</p>
          <a href="https://wa.me/919860810865?text=I%20want%20a%20website%20built" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base min-h-12" style={{ background: "#C9A24B", color: "#111111", fontFamily: "Sora, sans-serif" }}>
            Build My Website <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
