import { ScrollReveal } from "../components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    num: "01",
    title: "Problem Quickly Identified",
    desc: "We don't waste time in discovery loops. Within the first call, we understand your exact challenge, constraints, and goals — and map a clear solution path immediately.",
    icon: "🔍",
    time: "Day 1",
  },
  {
    num: "02",
    title: "Ready Solution Mapped",
    desc: "Using our library of proven frameworks and systems, we define the solution architecture before development begins — eliminating costly pivots mid-project.",
    icon: "🗺️",
    time: "Day 1–2",
  },
  {
    num: "03",
    title: "Fast Design (Basic)",
    desc: "Clean, functional wireframes and UI designs are produced rapidly. We focus on information hierarchy and user flow — not endless aesthetic debates.",
    icon: "✏️",
    time: "Day 2–3",
  },
  {
    num: "04",
    title: "Rapid Build",
    desc: "High-velocity development using modern stacks (React, Spring Boot, AI APIs). We build modularly so features can be added without breaking what's already working.",
    icon: "⚡",
    time: "Day 3–10",
  },
  {
    num: "05",
    title: "Quick Demo",
    desc: "You see a working version early — not at the end. This allows for real feedback before final delivery, ensuring you get exactly what you envisioned.",
    icon: "👁️",
    time: "Day 5–12",
  },
  {
    num: "06",
    title: "Immediate Deployment",
    desc: "Production-ready deployment with proper configuration, testing, and handover documentation — so you're live and serving customers without delay.",
    icon: "🚀",
    time: "Day 7–14",
  },
];

export default function WorkflowPage() {
  return (
    <div style={{ background: "#FFF8E7" }}>
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-6 border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>
            Our Process
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
            Speed + Efficiency<br />Workflow
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
            From problem statement to live deployment — a structured 6-step process built for maximum speed without sacrificing quality.
          </p>
        </ScrollReveal>
      </section>

      {/* Timeline */}
      <section className="pb-24 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block" style={{ background: "linear-gradient(to bottom, #C9A24B, #E5DCC8)" }} />

          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 100}>
              <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Content card */}
                <div className="flex-1 md:w-5/12">
                  <div className="rounded-2xl p-7 border hover:shadow-lg transition-all" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl">{step.icon}</span>
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#F0E8D0", color: "#6B5F45", fontFamily: "Sora, sans-serif" }}>{step.time}</span>
                    </div>
                    <div className="text-4xl font-black mb-1" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>{step.num}</div>
                    <h3 className="text-xl font-black mb-3" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{step.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-2/12 justify-center pt-8">
                  <div className="w-4 h-4 rounded-full z-10" style={{ background: "#C9A24B", border: "3px solid #FFF8E7", boxShadow: "0 0 0 2px #C9A24B" }} />
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1 md:w-5/12" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8" style={{ background: "#1A1A1A" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4" style={{ color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>Start Your Project</h2>
          <p className="text-base mb-8" style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}>Begin Step 1 today — free problem identification call.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105" style={{ background: "#C9A24B", color: "#111111", fontFamily: "Sora, sans-serif" }}>
            Book a Free Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
