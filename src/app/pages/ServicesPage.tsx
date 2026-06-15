import { Link } from "react-router";
import { ScrollReveal } from "../components/ScrollReveal";
import { Bot, Phone, Globe, Smartphone, Palette, Package, ArrowRight, Star, Megaphone } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation Services",
    desc: "Auto-reply systems, lead capture, follow-up automation, appointment booking — all running 24/7 without human intervention.",
    to: "/ai-automation",
    features: ["Auto-reply (Instagram/WhatsApp)", "Lead collection system", "Follow-up automation", "Appointment booking"],
    value: "Reduce manual work by 80%",
  },
  {
    icon: Phone,
    title: "AI Calling Assistant",
    desc: "Never miss a customer call again. Our AI handles inbound and outbound calls, books appointments, qualifies leads automatically.",
    to: "/ai-calling",
    features: ["Incoming call automation", "Outgoing follow-up calls", "Booking via calls", "Lead qualification"],
    value: "24/7 receptionist for your business",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Fast-built, mobile-first, conversion-optimised business websites. From landing pages to full web platforms.",
    to: "/web-dev",
    features: ["Business websites", "Landing pages", "Lead capture systems", "React / HTML5 / CSS3"],
    value: "Online presence in days, not months",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Efficient, scalable mobile solutions for booking, operations, and customer management.",
    to: "/mobile-apps",
    features: ["Booking apps", "Business management apps", "Cross-platform", "Clean UI"],
    value: "Better customer experience",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Clean, efficient design that converts visitors into customers. From wireframes to polished, production-ready designs.",
    to: "/uiux",
    features: ["Website design", "App design", "Redesign services", "Prototype & wireframe"],
    value: "Higher engagement & conversions",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Strategic digital campaigns across social media, SEO, and content marketing to drive traffic, leads, and conversions.",
    to: "/digital-marketing",
    features: ["Social media strategy", "SEO optimization", "Content marketing", "Campaign management"],
    value: "Maximize your online reach",
  },
  {
    icon: Package,
    title: "Combo Signature System",
    desc: "Website + Automation + AI Calling + Digital Marketing — all integrated into one powerful growth system.",
    to: "/combo",
    features: ["Complete system integration", "One dashboard", "Fast setup", "Long-term cost saving"],
    value: "One unified growth system",
    featured: true,
  },
];

const comparisonTable = [
  { service: "AI Automation", value: "80% less manual work", time: "1–3 days", roi: "Very High" },
  { service: "AI Calling", value: "24/7 coverage", time: "2–4 days", roi: "High" },
  { service: "Website Dev", value: "Instant online presence", time: "3–7 days", roi: "High" },
  { service: "Mobile App", value: "Better operations", time: "7–21 days", roi: "Medium–High" },
  { service: "UI/UX Design", value: "Better conversions", time: "2–5 days", roi: "High" },
  { service: "Digital Marketing", value: "Increased traffic & leads", time: "Ongoing", roi: "High" },
  { service: "Combo System", value: "Complete transformation", time: "7–14 days", roi: "Very High" },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "#FFF8E7" }}>
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-6 border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>
            All Services
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
            Built on Speed,<br />Cost-Efficiency &<br />Maximum Output
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
            Every service we offer is engineered for rapid delivery, lasting impact, and measurable ROI.
          </p>
        </ScrollReveal>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <div
                className="rounded-2xl p-8 border h-full flex flex-col transition-all hover:shadow-xl hover:scale-[1.01]"
                style={{
                  background: s.featured ? "#1A1A1A" : "#FBF1DD",
                  borderColor: s.featured ? "#C9A24B" : "#E5DCC8",
                  borderWidth: s.featured ? "2px" : "1px",
                }}
              >
                {s.featured && (
                  <div className="inline-flex items-center gap-1 mb-4">
                    <Star size={12} style={{ color: "#C9A24B", fill: "#C9A24B" }} />
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>Signature Offer</span>
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: s.featured ? "#C9A24B" : "#1A1A1A" }}>
                  <s.icon size={22} style={{ color: s.featured ? "#1A1A1A" : "#C9A24B" }} />
                </div>
                <h3 className="text-xl font-black mb-2" style={{ color: s.featured ? "#FFF8E7" : "#000000", fontFamily: "Sora, sans-serif" }}>{s.title}</h3>
                <p className="text-sm mb-5 flex-1" style={{ color: s.featured ? "#B8A98A" : "#6B5F45", fontFamily: "Inter, sans-serif" }}>{s.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.features.map((f) => (
                    <li key={f} className="text-xs flex items-center gap-2" style={{ color: s.featured ? "#B8A98A" : "#6B5F45", fontFamily: "Inter, sans-serif" }}>
                      <span style={{ color: "#C9A24B" }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg px-3 py-2 mb-5 text-xs font-semibold" style={{ background: s.featured ? "rgba(201,162,75,0.15)" : "#F0E8D0", color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>
                  💡 {s.value}
                </div>
                <Link to={s.to} className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: s.featured ? "#C9A24B" : "#C9A24B", fontFamily: "Sora, sans-serif" }}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-black text-center mb-10" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Service vs. Value Delivered</h2>
          </ScrollReveal>
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E5DCC8" }}>
            <table className="w-full">
              <thead>
                <tr style={{ background: "#1A1A1A" }}>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>Service</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>Value Delivered</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>Delivery Time</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>ROI Potential</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={row.service} style={{ background: i % 2 === 0 ? "#FFF8E7" : "#FBF1DD", borderBottom: "1px solid #E5DCC8" }}>
                    <td className="px-6 py-4 text-sm font-bold" style={{ color: "#111111", fontFamily: "Sora, sans-serif" }}>{row.service}</td>
                    <td className="px-6 py-4 text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{row.value}</td>
                    <td className="px-6 py-4 text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{row.time}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: row.roi.includes("Very") ? "#C9A24B" : "#F0E8D0", color: row.roi.includes("Very") ? "#111" : "#6B5F45", fontFamily: "Sora, sans-serif" }}>
                        {row.roi}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
