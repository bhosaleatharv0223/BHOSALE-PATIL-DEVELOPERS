import { ScrollReveal } from "../components/ScrollReveal";
import { Globe, Bot, Phone, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

const modules = [
  { icon: Globe, label: "Website", desc: "Your professional online presence — fast, responsive, conversion-optimised." },
  { icon: Bot, label: "Automation", desc: "Auto-replies, lead capture, follow-ups — all running hands-free 24/7." },
  { icon: Phone, label: "AI Calling", desc: "Your AI receptionist handles every call, booking, and inquiry automatically." },
  { icon: TrendingUp, label: "Marketing", desc: "Digital marketing integration to amplify reach and drive qualified traffic." },
];

const highlights = ["One Unified System", "Fast Setup (7–14 days)", "Long-Term Cost Saving", "Dedicated Support", "Custom Integrations", "Scalable Architecture"];

export default function ComboPage() {
  return (
    <div style={{ background: "#FFF8E7" }}>
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-6 border-2" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>
              ⭐ Signature Offer
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
              The All-in-One<br />
              <span style={{ color: "#C9A24B" }}>Growth System</span>
            </h1>
            <p className="text-xl mb-4 font-semibold" style={{ color: "#6B5F45", fontFamily: "Sora, sans-serif" }}>
              "Ek system madhe sagla" — Everything in one system
            </p>
            <p className="text-base mb-10" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
              Website + Automation + AI Calling + Digital Marketing — seamlessly integrated into one powerful growth engine for your business.
            </p>
            <a href="https://wa.me/919860810865?text=I%20want%20the%20Combo%20Package" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105" style={{ background: "#1A1A1A", color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>
              Get the Combo Package <ArrowRight size={18} />
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* 4 Module Diagram */}
      <section className="py-16 px-4 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-black text-center mb-12" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>4 Integrated Modules</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            {modules.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 100}>
                <div className="rounded-2xl p-6 border text-center flex flex-col items-center h-full" style={{ background: "#FFF8E7", borderColor: "#E5DCC8" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#1A1A1A" }}>
                    <m.icon size={22} style={{ color: "#C9A24B" }} />
                  </div>
                  <h3 className="text-base font-black mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{m.label}</h3>
                  <p className="text-xs" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {/* Loop arrow */}
          <ScrollReveal delay={400}>
            <div className="text-center mt-6 text-sm font-semibold" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>
              Website → Automation → AI Calling → Marketing → (loops back to growth)
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-black text-center mb-10" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>What You Get</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {highlights.map((h, i) => (
            <ScrollReveal key={h} delay={i * 80}>
              <div className="flex items-center gap-3 rounded-xl px-5 py-4 border" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
                <CheckCircle size={18} style={{ color: "#C9A24B", flexShrink: 0 }} />
                <span className="font-semibold text-sm" style={{ color: "#111111", fontFamily: "Sora, sans-serif" }}>{h}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8" style={{ background: "#1A1A1A", borderTop: "4px solid #C9A24B" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4" style={{ color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>Get the Complete System</h2>
          <p className="text-base mb-8" style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}>
            Website + Automation + AI Calling + Marketing — starting from ₹60,000
          </p>
          <a href="https://wa.me/919860810865?text=I%20want%20the%20Combo%20Package" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105" style={{ background: "#C9A24B", color: "#111111", fontFamily: "Sora, sans-serif" }}>
            Get Combo Package <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
