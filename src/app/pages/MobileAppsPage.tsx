import { ScrollReveal } from "../components/ScrollReveal";
import { Smartphone, ArrowRight, Star } from "lucide-react";

const offerings = [
  { title: "Booking Apps", desc: "Let customers book services, appointments, and reservations from their phone — fully integrated with your backend." },
  { title: "Business Management Apps", desc: "Manage inventory, staff, orders, and operations from a single mobile interface — built for efficiency." },
];

export default function MobileAppsPage() {
  return (
    <div style={{ background: "#FFF8E7" }}>
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-6 border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>
              Mobile App Development
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
              Efficient &<br />Scalable Mobile<br />
              <span style={{ color: "#C9A24B" }}>Solutions</span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
              Mobile apps that simplify operations, delight customers, and scale with your business.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Easy Operations", "Better Customer Experience", "Cross-Platform", "Fast Delivery"].map((badge) => (
                <span key={badge} className="px-3 py-1.5 rounded-full text-xs font-bold border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>{badge}</span>
              ))}
            </div>
            <a href="https://wa.me/919860810865?text=I%20want%20a%20mobile%20app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105" style={{ background: "#1A1A1A", color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>
              Build My App <ArrowRight size={16} />
            </a>
          </ScrollReveal>

          {/* Phone mockup */}
          <ScrollReveal delay={150}>
            <div className="flex justify-center">
              <div className="w-48 rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: "#1A1A1A" }}>
                <div className="h-6 flex items-center justify-center" style={{ background: "#1A1A1A" }}>
                  <div className="w-12 h-1 rounded-full" style={{ background: "#333" }} />
                </div>
                <div className="p-4" style={{ background: "#FBF1DD", minHeight: "320px" }}>
                  <div className="text-center mb-4">
                    <Smartphone size={32} className="mx-auto" style={{ color: "#C9A24B" }} />
                    <p className="text-xs font-bold mt-2" style={{ color: "#000", fontFamily: "Sora, sans-serif" }}>Your App</p>
                  </div>
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="rounded-lg h-8 mb-2" style={{ background: "#FFF8E7", border: "1px solid #E5DCC8" }} />
                  ))}
                  <div className="rounded-lg h-10 mt-4" style={{ background: "#1A1A1A" }}>
                    <div className="h-full flex items-center justify-center">
                      <Star size={12} style={{ color: "#C9A24B" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-black text-center mb-12" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>What We Build</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {offerings.map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 100}>
                <div className="rounded-2xl p-8 border h-full" style={{ background: "#FFF8E7", borderColor: "#E5DCC8" }}>
                  <h3 className="text-xl font-black mb-3" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{o.title}</h3>
                  <p className="text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{o.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8" style={{ background: "#1A1A1A" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4" style={{ color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>Launch Your Mobile App</h2>
          <p className="text-base mb-8" style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}>From concept to App Store in as little as 7 days.</p>
          <a href="https://wa.me/919860810865?text=I%20want%20a%20mobile%20app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold" style={{ background: "#C9A24B", color: "#111111", fontFamily: "Sora, sans-serif" }}>
            Start Building <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
