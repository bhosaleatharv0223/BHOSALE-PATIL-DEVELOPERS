import { ScrollReveal } from "../components/ScrollReveal";
import { MessageSquare, UserCheck, Calendar, Users, ArrowRight, TrendingDown, Clock, DollarSign } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "Auto-Reply System", desc: "Instantly respond to Instagram DMs and WhatsApp messages 24/7 — zero manual effort required." },
  { icon: UserCheck, title: "Lead Collection System", desc: "Automatically capture lead info from every incoming message and store it in your CRM or spreadsheet." },
  { icon: ArrowRight, title: "Follow-Up Automation", desc: "Send personalised follow-ups at the right time, increasing conversions without any manual work." },
  { icon: Calendar, title: "Appointment Booking", desc: "Let customers book appointments directly through WhatsApp or Instagram — fully automated." },
  { icon: Users, title: "AI Calling Integration", desc: "Integrate AI calling for seamless lead qualification and booking via phone — hands-free." },
];

const flowSteps = [
  { label: "Customer Message", color: "#C9A24B" },
  { label: "AI Auto-Reply", color: "#1A1A1A" },
  { label: "Lead Captured", color: "#C9A24B" },
  { label: "Follow-Up Sent", color: "#1A1A1A" },
];

export default function AIAutomationPage() {
  return (
    <div style={{ background: "#FFF8E7" }}>
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-6 border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>
              AI Automation Services
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
              Automate Your<br />Business Growth
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
              Fast, cost-effective automation systems that handle lead capture, follow-ups, and customer communication — so you can focus on what matters.
            </p>
            <a href="https://wa.me/919860810865?text=I%20want%20AI%20Automation%20for%20my%20business" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base min-h-12 transition-all hover:scale-105" style={{ background: "#1A1A1A", color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>
              Automate My Business <ArrowRight size={16} />
            </a>
          </ScrollReveal>

          {/* Flow Diagram */}
          <ScrollReveal delay={150}>
            <div className="rounded-3xl p-6 sm:p-8 border" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 text-center" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>Automation Flow</p>
              <div className="flex flex-col gap-2 sm:gap-3">
                {flowSteps.map((step, i) => (
                  <div key={step.label}>
                  <div className="rounded-xl px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-bold text-center" style={{ background: step.color, color: step.color === "#C9A24B" ? "#111111" : "#FFF8E7", fontFamily: "Sora, sans-serif" }}>
                      {step.label}
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="text-center text-lg my-1" style={{ color: "#C9A24B" }}>↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>What We Offer</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="rounded-2xl p-6 sm:p-7 md:p-8 border h-full hover:shadow-lg transition-all hover:scale-[1.02]" style={{ background: "#FFF8E7", borderColor: "#E5DCC8" }}>
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg flex items-center justify-center mb-3 sm:mb-4" style={{ background: "#1A1A1A" }}>
                    <f.icon size={16} style={{ color: "#C9A24B" }} />
                  </div>
                  <h3 className="text-sm sm:text-base font-black mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{f.title}</h3>
                  <p className="text-xs sm:text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Value Block */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Value Delivered</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: TrendingDown, label: "Manual Work ↓", desc: "Eliminate repetitive tasks — replies, follow-ups, data entry all automated.", stat: "80% reduction" },
            { icon: Clock, label: "Time Saved ↑", desc: "Reclaim hours every day. Focus on strategy, not operations.", stat: "40+ hrs/week" },
            { icon: DollarSign, label: "Staff Cost ↓", desc: "One automation system does the work of multiple team members.", stat: "60% savings" },
          ].map((v, i) => (
            <ScrollReveal key={v.label} delay={i * 100}>
              <div className="rounded-2xl p-6 sm:p-8 border text-center h-full" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4" style={{ background: "#C9A24B" }}>
                  <v.icon size={18} style={{ color: "#1A1A1A" }} />
                </div>
                <div className="text-2xl sm:text-3xl font-black mb-2" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>{v.stat}</div>
                <h3 className="text-sm sm:text-base font-black mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{v.label}</h3>
                <p className="text-xs sm:text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8" style={{ background: "#1A1A1A" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4" style={{ color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>Ready to Automate?</h2>
          <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8" style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}>Get your automation system live in 1–3 days.</p>
          <a href="https://wa.me/919860810865?text=I%20want%20AI%20Automation" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base min-h-12 transition-all hover:scale-105" style={{ background: "#C9A24B", color: "#111111", fontFamily: "Sora, sans-serif" }}>
            Automate My Business <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
