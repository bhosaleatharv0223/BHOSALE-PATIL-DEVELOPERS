import { ScrollReveal } from "../components/ScrollReveal";
import { Palette, ArrowRight } from "lucide-react";

const offerings = [
  { title: "Website Design", desc: "Visually striking, user-friendly website designs that match your brand and convert visitors to customers." },
  { title: "App Design", desc: "Intuitive mobile app interfaces that users love — from wireframes to pixel-perfect designs." },
  { title: "Redesign Services", desc: "Transform your outdated website or app into a modern, high-performing digital product." },
];

export default function UIUXPage() {
  return (
    <div style={{ background: "#FFF8E7" }}>
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-6 border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>
              UI/UX Design
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
              Clean, Efficient<br />Design for<br />
              <span style={{ color: "#C9A24B" }}>Better Results</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
              Design that doesn't just look good — it works. Every layout, colour, and interaction is optimised for conversion.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {["Better Engagement", "Higher Conversions", "Brand Aligned", "User Tested"].map((badge) => (
                <span key={badge} className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>{badge}</span>
              ))}
            </div>
            <a href="https://wa.me/919860810865?text=I%20want%20UI%2FUX%20Design" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base min-h-12 transition-all hover:scale-105" style={{ background: "#1A1A1A", color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>
              Redesign My Product <ArrowRight size={16} />
            </a>
          </ScrollReveal>

          {/* Before/After mockup */}
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-2 text-center" style={{ color: "#6B5F45", fontFamily: "Sora, sans-serif" }}>Before</p>
                <div className="rounded-xl p-3 sm:p-4 border" style={{ background: "#E5DCC8", borderColor: "#D4C9B0" }}>
                  <div className="h-3 sm:h-4 rounded mb-1 sm:mb-2" style={{ background: "#C4B99A", width: "70%" }} />
                  <div className="h-2 sm:h-3 rounded mb-1 sm:mb-2" style={{ background: "#C4B99A", width: "90%" }} />
                  <div className="h-2 sm:h-3 rounded mb-2 sm:mb-4" style={{ background: "#C4B99A", width: "60%" }} />
                  <div className="grid grid-cols-2 gap-1 sm:gap-2">
                    <div className="rounded h-10 sm:h-12" style={{ background: "#B8A98A" }} />
                    <div className="rounded h-10 sm:h-12" style={{ background: "#B8A98A" }} />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-2 text-center" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>After</p>
                <div className="rounded-xl p-3 sm:p-4 border shadow-lg" style={{ background: "#FBF1DD", borderColor: "#C9A24B" }}>
                  <div className="h-3 sm:h-4 rounded mb-1 sm:mb-2" style={{ background: "#1A1A1A", width: "70%" }} />
                  <div className="h-2 sm:h-3 rounded mb-1 sm:mb-2" style={{ background: "#E5DCC8", width: "90%" }} />
                  <div className="h-2 sm:h-3 rounded mb-2 sm:mb-4" style={{ background: "#E5DCC8", width: "60%" }} />
                  <div className="grid grid-cols-2 gap-1 sm:gap-2">
                    <div className="rounded-lg h-10 sm:h-12 flex items-center justify-center" style={{ background: "#1A1A1A" }}>
                      <Palette size={12} style={{ color: "#C9A24B" }} />
                    </div>
                    <div className="rounded-lg h-10 sm:h-12" style={{ background: "#C9A24B" }} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Design Services</h2>
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

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8" style={{ background: "#1A1A1A" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4" style={{ color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>Transform Your Design</h2>
          <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8" style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}>Polished, production-ready designs in 2–5 days.</p>
          <a href="https://wa.me/919860810865?text=I%20want%20UI%2FUX%20Design" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base min-h-12" style={{ background: "#C9A24B", color: "#111111", fontFamily: "Sora, sans-serif" }}>
            Start Redesign <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
