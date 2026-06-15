import { useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  Bot, Phone, Globe, Smartphone, Palette, Package,
  Zap, DollarSign, TrendingUp, Brain, ArrowRight,
  CheckCircle, Star, ChevronRight, Megaphone
} from "lucide-react";

const rotatingTexts = [
  { text: "Faster Delivery 🚀", color: "#C9A24B" },
  { text: "Cost-Effective Solutions 💰", color: "#B8954A" },
  { text: "High Efficiency ⚙️", color: "#C9A24B" },
  { text: "AI-Powered Automation 🤖", color: "#B8954A" },
];

function RotatingText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % rotatingTexts.length);
        setVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 flex items-center" style={{ minWidth: "280px" }}>
      <span
        className="font-bold text-2xl md:text-3xl"
        style={{
          color: rotatingTexts[index].color,
          fontFamily: "Sora, sans-serif",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          display: "inline-block",
          borderBottom: `3px solid ${rotatingTexts[index].color}`,
          paddingBottom: "2px",
        }}
      >
        {rotatingTexts[index].text}
      </span>
    </div>
  );
}

function CounterStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(end / 50);
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(start);
        }, 30);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black mb-1" style={{ fontFamily: "Sora, sans-serif", color: "#C9A24B" }}>
        {count}{suffix}
      </div>
      <div className="text-sm font-medium" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{label}</div>
    </div>
  );
}

const services = [
  { icon: Bot, title: "AI Automation", desc: "Auto-reply, lead capture & follow-up systems that work 24/7.", to: "/ai-automation" },
  { icon: Phone, title: "AI Calling Assistant", desc: "Never miss a call. AI handles inbound & outbound communication.", to: "/ai-calling" },
  { icon: Globe, title: "Website Development", desc: "Fast-built, conversion-optimised business websites & landing pages.", to: "/web-dev" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Scalable booking and business management mobile apps.", to: "/mobile-apps" },
  { icon: Palette, title: "UI/UX Design", desc: "Clean, efficient design that improves engagement & conversions.", to: "/uiux" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Strategic campaigns across social media, SEO & content marketing.", to: "/digital-marketing" },
  { icon: Package, title: "Combo Signature System", desc: "Website + Automation + AI Calling — one unified growth system.", to: "/combo" },
];

const whyUs = [
  { icon: Zap, title: "Lightning Speed", desc: "We prototype fast and deploy faster. No prolonged timelines." },
  { icon: DollarSign, title: "Cost-Effective", desc: "Fintech-grade quality at startup-friendly prices." },
  { icon: TrendingUp, title: "Scalable Architecture", desc: "Built to grow with your business, not rebuilt from scratch." },
  { icon: Brain, title: "AI-First Approach", desc: "Every solution is infused with automation and intelligence." },
];

const workflowSteps = [
  { num: "01", title: "Problem Identified", desc: "We understand your exact challenge quickly and precisely." },
  { num: "02", title: "Solution Mapped", desc: "A ready-made solution strategy is defined immediately." },
  { num: "03", title: "Fast Design", desc: "Clean UI wireframes & designs — minimal back-and-forth." },
  { num: "04", title: "Rapid Build", desc: "High-speed development using modern tech stacks." },
  { num: "05", title: "Quick Demo", desc: "Live demo delivered early for feedback loops." },
  { num: "06", title: "Immediate Deploy", desc: "Production-ready deployment within agreed timelines." },
];

const plans = [
  { name: "Basic", label: "Fast Start", price: "₹10,000 – ₹20,000", desc: "Quick setup solution for small businesses.", color: "#22C55E", features: ["Business landing page", "Basic automation", "Mobile responsive", "1 revision round"] },
  { name: "Standard", label: "Growth Setup", price: "₹25,000 – ₹50,000", desc: "Optimised system for growing brands.", color: "#C9A24B", popular: true, features: ["Full website / app", "AI automation setup", "WhatsApp integration", "2 revision rounds", "30-day support"] },
  { name: "Premium", label: "Full Efficiency", price: "₹60,000 – ₹1.5L+", desc: "Complete automation + scale-ready architecture.", color: "#EF4444", features: ["Combo system", "AI calling assistant", "Full automation suite", "Custom integrations", "Dedicated support", "Unlimited revisions"] },
];

export default function HomePage() {
  return (
    <div style={{ background: "#FFF8E7" }}>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>
              <Zap size={12} />
              Premium IT Solutions — India
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
              We Design.<br />We Develop.<br />
              <span style={{ color: "#C9A24B" }}>We Deliver.</span>
            </h1>
            <p className="text-lg md:text-xl font-semibold mt-4 mb-6" style={{ color: "#6B5F45", fontFamily: "Sora, sans-serif" }}>
              Make Your Business Global with Bhosale Tech Solution
            </p>
            <RotatingText />
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://wa.me/919860810865?text=Hi%2C%20I%20want%20to%20book%20a%20free%20call"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-base transition-all hover:scale-105"
                style={{ background: "#1A1A1A", color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}
              >
                Book Free Call
                <ChevronRight size={16} />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-base border-2 transition-all hover:scale-105"
                style={{ borderColor: "#1A1A1A", color: "#1A1A1A", fontFamily: "Sora, sans-serif" }}
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right: abstract illustration */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md h-96 rounded-3xl relative overflow-hidden" style={{ background: "#FBF1DD", border: "1px solid #E5DCC8" }}>
              {/* Abstract tech pattern */}
              <svg width="100%" height="100%" viewBox="0 0 400 350" fill="none">
                <circle cx="200" cy="175" r="80" stroke="#C9A24B" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
                <circle cx="200" cy="175" r="120" stroke="#E5DCC8" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
                <circle cx="200" cy="175" r="160" stroke="#E5DCC8" strokeWidth="0.5" strokeDasharray="3 8" opacity="0.3" />
                <circle cx="200" cy="175" r="24" fill="#1A1A1A" />
                <path d="M200 163 L207 175 L200 187 L193 175 Z" fill="#C9A24B" />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 200 + 80 * Math.cos(rad);
                  const y = 175 + 80 * Math.sin(rad);
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r="8" fill="#FFF8E7" stroke="#C9A24B" strokeWidth="1.5" />
                      <line x1="200" y1="175" x2={x} y2={y} stroke="#E5DCC8" strokeWidth="1" opacity="0.5" />
                    </g>
                  );
                })}
                <text x="200" y="280" textAnchor="middle" fill="#B8954A" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="600">AI • AUTOMATION • EFFICIENCY</text>
                <text x="72" y="100" fill="#6B5F45" fontSize="9" fontFamily="Inter, sans-serif">Web Dev</text>
                <text x="310" y="100" fill="#6B5F45" fontSize="9" fontFamily="Inter, sans-serif">AI Calls</text>
                <text x="50" y="230" fill="#6B5F45" fontSize="9" fontFamily="Inter, sans-serif">UI/UX</text>
                <text x="318" y="230" fill="#6B5F45" fontSize="9" fontFamily="Inter, sans-serif">Mobile</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ background: "#1A1A1A" }} className="py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {["⚡ Fast Delivery", "💰 Cost-Effective", "🤖 AI-Driven", "🏦 Fintech Experience", "✅ 100% Satisfaction"].map((item) => (
            <span key={item} className="text-sm font-semibold tracking-wide" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>{item}</span>
          ))}
        </div>
      </section>

      {/* Core Motto */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
            Our Core Motto
          </h2>
          <p className="text-center mb-12 text-base" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>Three principles that drive every project we touch.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "⏱️", title: "Less Time", sub: "Faster Delivery", desc: "We deliver in record time using structured rapid-development workflows." },
            { icon: "💸", title: "Less Cost", sub: "Better Value", desc: "Premium quality without premium prices — optimal resource allocation." },
            { icon: "📈", title: "Maximum Output", sub: "More Results", desc: "Every rupee invested delivers measurable ROI and business growth." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 120}>
              <div className="rounded-2xl p-8 h-full border transition-all hover:shadow-lg hover:scale-[1.02]" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-black mb-1" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{item.title}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>{item.sub}</p>
                <p className="text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Our Services</h2>
              <p className="text-base" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>Everything your business needs to grow digitally — under one roof.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <Link to={s.to} className="group block rounded-2xl p-7 border transition-all hover:shadow-xl hover:scale-[1.02]" style={{ background: "#FFF8E7", borderColor: "#E5DCC8" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:rotate-6" style={{ background: "#1A1A1A" }}>
                    <s.icon size={22} style={{ color: "#C9A24B" }} />
                  </div>
                  <h3 className="text-lg font-black mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{s.title}</h3>
                  <p className="text-sm mb-4" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 md:px-8" style={{ background: "#1A1A1A" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <CounterStat end={50} suffix="+" label="Projects Delivered" />
          <CounterStat end={100} suffix="%" label="Client Satisfaction" />
          <CounterStat end={12} suffix="+" label="Service Categories" />
          <CounterStat end={3} suffix="x" label="Faster Than Average" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
            Why Choose Bhosale Tech Solution?
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((w, i) => (
            <ScrollReveal key={w.title} delay={i * 100}>
              <div className="rounded-2xl p-6 border h-full hover:shadow-lg transition-all" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#C9A24B" }}>
                  <w.icon size={18} style={{ color: "#1A1A1A" }} />
                </div>
                <h3 className="text-base font-black mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{w.title}</h3>
                <p className="text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{w.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Workflow Preview */}
      <section className="py-20 px-4 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
              Our 6-Step Workflow
            </h2>
            <p className="text-center mb-12" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>From problem to production — faster than anyone else.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {workflowSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                <div className="rounded-2xl p-5 border text-center h-full" style={{ background: "#FFF8E7", borderColor: "#E5DCC8" }}>
                  <div className="text-2xl font-black mb-2" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>{step.num}</div>
                  <h4 className="text-sm font-bold mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{step.title}</h4>
                  <p className="text-xs" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/workflow" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>
              See Full Workflow <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
            Transparent Pricing
          </h2>
          <p className="text-center mb-12" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>No hidden costs. Pay for real value delivered.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div className="rounded-2xl p-8 border relative h-full flex flex-col" style={{ background: "#FBF1DD", borderColor: plan.popular ? "#C9A24B" : "#E5DCC8", borderWidth: plan.popular ? "2px" : "1px" }}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold" style={{ background: "#C9A24B", color: "#111111", fontFamily: "Sora, sans-serif" }}>
                    Most Popular
                  </div>
                )}
                <div className="w-3 h-3 rounded-full mb-4" style={{ background: plan.color }} />
                <h3 className="text-xl font-black mb-1" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{plan.name}</h3>
                <p className="text-xs font-semibold mb-3 uppercase tracking-wide" style={{ color: plan.color, fontFamily: "Sora, sans-serif" }}>{plan.label}</p>
                <p className="text-2xl font-black mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{plan.price}</p>
                <p className="text-sm mb-6" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{plan.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#111111", fontFamily: "Inter, sans-serif" }}>
                      <CheckCircle size={14} style={{ color: "#C9A24B", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919860810865"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
                  style={{ background: "#1A1A1A", color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}
                >
                  Get Started
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>
            View Full Pricing Details <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Founder Highlight */}
      <section className="py-20 px-4 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="rounded-3xl p-10 border" style={{ background: "#FFF8E7", borderColor: "#E5DCC8" }}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-28 h-28 rounded-2xl flex-shrink-0 flex items-center justify-center text-4xl font-black" style={{ background: "#1A1A1A", color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>
                  AB
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>Founder & Lead Developer</div>
                  <h3 className="text-2xl font-black mb-1" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Atharv Bhosale</h3>
                  <p className="text-sm mb-3" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>Computer Engineering — Sinhgad College of Engineering</p>
                  <p className="text-sm mb-4" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
                    Experienced freelance developer specializing in large-scale fintech applications, AI automation systems, and scalable architecture — delivering efficiency-first engineering solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "React", "Spring Boot", "AI Automation", "Machine Learning", "Agentic AI"].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "#F0E8D0", color: "#1A1A1A", fontFamily: "Sora, sans-serif", border: "1px solid #E5DCC8" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
            What Clients Say
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Rajesh Kumar", role: "CEO, FinanceFlow", quote: "Atharv delivered our fintech dashboard in record time. The AI automation saved us 40 hours per week." },
            { name: "Priya Sharma", role: "Founder, ShopEase", quote: "The website and WhatsApp automation completely transformed our customer handling. 5 stars!" },
            { name: "Amit Desai", role: "COO, TechVentures", quote: "The combo package was exactly what we needed. One system for everything. Worth every rupee." },
          ].map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="rounded-2xl p-7 border h-full" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
                <div className="flex gap-1 mb-4">
                  {Array(5).fill(0).map((_, j) => (
                    <Star key={j} size={14} style={{ color: "#C9A24B", fill: "#C9A24B" }} />
                  ))}
                </div>
                <p className="text-sm mb-6 italic" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>"{t.quote}"</p>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-8" style={{ background: "#1A1A1A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>
            Ready to Scale Your Business?
          </h2>
          <p className="text-base mb-10" style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}>
            Let's build something fast, efficient, and extraordinary together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919860810865"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105"
              style={{ background: "#25D366", color: "#fff", fontFamily: "Sora, sans-serif" }}
            >
              WhatsApp Now
            </a>
            <a
              href="mailto:bhosaleatharv8765@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 transition-all hover:scale-105"
              style={{ borderColor: "#C9A24B", color: "#C9A24B", fontFamily: "Sora, sans-serif" }}
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
