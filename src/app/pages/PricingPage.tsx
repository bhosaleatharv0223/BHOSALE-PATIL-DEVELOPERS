import { useState } from "react";
import { ScrollReveal } from "../components/ScrollReveal";
import { CheckCircle, ChevronDown, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    label: "Fast Start",
    price: "₹2,000 – ₹20,000",
    desc: "Quick setup solution for small businesses ready to establish their digital presence.",
    color: "#22C55E",
    features: [
      "Business landing page or basic website",
      "Mobile-responsive design",
      "WhatsApp/contact integration",
      "Basic SEO setup",
      "1 revision round",
      "7-day post-launch support",
    ],
  },
  {
    name: "Standard",
    label: "Growth Setup",
    price: "₹25,000 – ₹50,000",
    desc: "Optimised system for growing brands that need more than just a website.",
    color: "#C9A24B",
    popular: true,
    features: [
      "Full multi-page website or mobile app",
      "AI automation setup (WhatsApp/Instagram)",
      "Lead capture system",
      "Basic AI calling assistant",
      "CRM integration",
      "2 revision rounds",
      "30-day post-launch support",
    ],
  },
  {
    name: "Premium",
    label: "Full Efficiency System",
    price: "₹60,000 – ₹1.5L+",
    desc: "Complete automation + scale-ready architecture for ambitious businesses.",
    color: "#EF4444",
    features: [
      "Full Combo System (Website + Automation + AI Calling + Marketing)",
      "Advanced AI automation suite",
      "Full AI calling assistant",
      "Custom integrations & APIs",
      "Fintech-grade architecture",
      "Digital marketing setup",
      "Unlimited revision rounds",
      "3-month dedicated support",
      "Scalability roadmap consultation",
    ],
  },
];

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Basic projects: 3–7 days. Standard projects: 7–14 days. Premium / Combo systems: 14–30 days. We always aim to deliver faster than quoted.",
  },
  {
    q: "Are there any hidden charges?",
    a: "Absolutely not. Our pricing is transparent — what you see is what you pay. Third-party costs (hosting, domains, APIs) are discussed upfront.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. Basic plans include 7-day support, Standard plans 30-day support, and Premium plans 3-month dedicated support.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. All our systems are designed for scalability. You can upgrade from Basic to Standard or Standard to Premium at any time.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, bank transfers, and major payment gateways. A 50% advance is required before work begins.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "#E5DCC8" }}>
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-bold pr-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{q}</span>
        <ChevronDown size={18} style={{ color: "#C9A24B", flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
      </button>
      {open && (
        <p className="pb-5 text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{a}</p>
      )}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div style={{ background: "#FFF8E7" }}>
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-6 border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>
            Pricing & Packages
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
            Transparent, Motto-Aligned Pricing
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
            Every plan is priced to deliver maximum value with minimum cost — exactly as our motto promises.
          </p>
        </ScrollReveal>
      </section>

      {/* Plans */}
      <section className="pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div className="rounded-3xl p-8 border relative flex flex-col h-full" style={{ background: "#FBF1DD", borderColor: plan.popular ? "#C9A24B" : "#E5DCC8", borderWidth: plan.popular ? "2px" : "1px" }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-black" style={{ background: "#C9A24B", color: "#111111", fontFamily: "Sora, sans-serif" }}>
                    ⭐ Most Popular
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 rounded-full" style={{ background: plan.color }} />
                  <div>
                    <div className="font-black text-xl" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{plan.name}</div>
                    <div className="text-xs font-bold uppercase tracking-wider" style={{ color: plan.color, fontFamily: "Sora, sans-serif" }}>{plan.label}</div>
                  </div>
                </div>
                <div className="text-3xl font-black mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{plan.price}</div>
                <p className="text-sm mb-6" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{plan.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#111111", fontFamily: "Inter, sans-serif" }}>
                      <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A24B" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/919860810865?text=I%20want%20the%20${encodeURIComponent(plan.name)}%20plan`}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center px-6 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105"
                  style={{ background: plan.popular ? "#1A1A1A" : "#1A1A1A", color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}
                >
                  Get {plan.name} Plan <ArrowRight className="inline ml-1" size={14} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-black text-center mb-12" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Frequently Asked Questions</h2>
          </ScrollReveal>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm mb-4" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>Still have questions?</p>
            <a href="https://wa.me/919860810865" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold" style={{ background: "#1A1A1A", color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>
              Ask on WhatsApp <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
