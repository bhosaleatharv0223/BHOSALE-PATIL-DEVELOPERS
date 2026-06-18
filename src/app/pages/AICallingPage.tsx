import { ScrollReveal } from "../components/ScrollReveal";
import { Phone, PhoneIncoming, PhoneOutgoing, Calendar, UserCheck, ArrowRight } from "lucide-react";

const features = [
  { icon: PhoneIncoming, title: "Incoming Call Automation", desc: "AI picks up every call, greets customers professionally, and handles their queries without human involvement." },
  { icon: PhoneOutgoing, title: "Outgoing Follow-Up Calls", desc: "Automatically call leads and customers with personalised follow-up messages at the right time." },
  { icon: Calendar, title: "Booking via Calls", desc: "Customers can book appointments directly through the AI calling system — seamlessly integrated with your calendar." },
  { icon: UserCheck, title: "Lead Qualification", desc: "AI asks the right questions, qualifies leads, and routes hot prospects to your sales team instantly." },
];

const badges = ["No Missed Calls", "Faster Response", "Better Customer Handling", "24/7 Available", "Cost-Effective"];

export default function AICallingPage() {
  return (
    <div style={{ background: "#FFF8E7" }}>
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-6 border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>
              AI Calling Assistant
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
              24/7 AI Calling<br />Assistant — Never<br />
              <span style={{ color: "#C9A24B" }}>Miss a Customer.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
              Your AI receptionist handles all incoming and outgoing calls, books appointments, and qualifies leads — even at 3 AM.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {badges.map((b) => (
                <span key={b} className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>{b}</span>
              ))}
            </div>
            <a href="https://wa.me/919860810865?text=I%20want%20AI%20Calling%20Assistant" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base min-h-12 transition-all hover:scale-105" style={{ background: "#1A1A1A", color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>
              Set Up My AI Receptionist <ArrowRight size={16} />
            </a>
          </ScrollReveal>

          {/* Phone illustration */}
          <ScrollReveal delay={150}>
            <div className="rounded-3xl p-6 sm:p-8 md:p-10 border flex flex-col items-center gap-4 sm:gap-6" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
              <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full flex items-center justify-center" style={{ background: "#1A1A1A" }}>
                <Phone size={32} style={{ color: "#C9A24B" }} />
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-2xl font-black mb-1" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>AI Receptionist</p>
                <p className="text-xs sm:text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>Online 24 hours · 7 days a week</p>
              </div>
              <div className="w-full space-y-2">
                {["📲 Incoming call received", "🤖 AI greets customer", "📋 Info collected & stored", "✅ Appointment booked"].map((step) => (
                  <div key={step} className="rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium" style={{ background: "#FFF8E7", color: "#333", fontFamily: "Inter, sans-serif" }}>{step}</div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Feature Grid</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="rounded-2xl p-6 sm:p-7 border flex gap-4 sm:gap-5 h-full" style={{ background: "#FFF8E7", borderColor: "#E5DCC8" }}>
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#1A1A1A" }}>
                    <f.icon size={16} style={{ color: "#C9A24B" }} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{f.title}</h3>
                    <p className="text-xs sm:text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8" style={{ background: "#1A1A1A" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4" style={{ color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>Never Miss Another Customer</h2>
          <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8" style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}>Your AI receptionist will be live in 2–4 days.</p>
          <a href="https://wa.me/919860810865?text=I%20want%20AI%20Calling%20Assistant" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base min-h-12" style={{ background: "#C9A24B", color: "#111111", fontFamily: "Sora, sans-serif" }}>
            Get Started Today <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
