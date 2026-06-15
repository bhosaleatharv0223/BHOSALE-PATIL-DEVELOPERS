import { ScrollReveal } from "../components/ScrollReveal";
import { Link } from "react-router";
import { ArrowRight, Award, Users, Target, Lightbulb } from "lucide-react";
import { teamMembers } from "../data/teamData";

const skills = ["Java", "DSA", "DBMS", "HTML", "CSS", "JavaScript", "React", "Spring", "Spring Boot", "AI Automation", "Machine Learning", "Agentic AI", "AI Agents", "Multi-Agent AI Systems", "Figma", "UI/UX Design"];

const values = [
  { icon: Target, title: "Speed", desc: "We believe time is the most valuable resource. Every process is optimised to deliver faster without sacrificing quality." },
  { icon: Users, title: "Transparency", desc: "Honest timelines, clear pricing, no hidden costs. You always know where your project stands." },
  { icon: Lightbulb, title: "Innovation", desc: "We leverage the latest in AI, automation, and modern dev stacks to keep your business ahead of the curve." },
  { icon: Award, title: "Affordability", desc: "Enterprise-grade solutions at startup-friendly prices — our core promise, always." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#FFF8E7" }}>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-6 border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>
              Our Story
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
              About Bhosale Tech Solution
            </h1>
            <p className="text-lg" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
              A purpose-built IT startup dedicated to delivering faster, smarter, and more cost-effective digital solutions for businesses of every size.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: "Our Mission", content: "To empower businesses with AI-driven automation, high-quality web and mobile solutions, and efficient digital systems — delivered faster than the industry standard and priced for maximum ROI." },
            { label: "Our Vision", content: "To become India's most trusted IT partner for businesses seeking smart automation and digital transformation — where speed, affordability, and innovation are non-negotiable." },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 100}>
              <div className="rounded-2xl p-8 border" style={{ background: "#FFF8E7", borderColor: "#E5DCC8" }}>
                <h3 className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>{item.label}</h3>
                <p className="text-base leading-relaxed" style={{ color: "#333", fontFamily: "Inter, sans-serif" }}>{item.content}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Meet the Founder</h2>
        </ScrollReveal>
        <div className="max-w-4xl mx-auto rounded-3xl p-10 border" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-2xl flex items-center justify-center text-4xl font-black" style={{ background: "#1A1A1A", color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>
                AB
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>Founder & Lead Developer</div>
              <h3 className="text-3xl font-black mb-1" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Atharv Bhosale</h3>
              <p className="text-sm font-semibold mb-4" style={{ color: "#6B5F45", fontFamily: "Sora, sans-serif" }}>Computer Engineering — Sinhgad College of Engineering</p>
              <p className="text-base mb-4" style={{ color: "#333", fontFamily: "Inter, sans-serif" }}>
                Atharv is a passionate computer engineering student with hands-on experience building large-scale fintech applications and AI automation systems. With an efficiency-first engineering mindset, he founded Bhosale Tech Solution to bring enterprise-grade solutions to businesses that can't afford enterprise-grade timelines or prices.
              </p>
              <p className="text-base mb-6" style={{ color: "#333", fontFamily: "Inter, sans-serif" }}>
                His work spans intelligent multi-agent AI systems, scalable spring-boot backends, responsive React frontends, and end-to-end automation pipelines — all delivered with speed and precision.
              </p>

              <div className="rounded-xl p-4 mb-6" style={{ background: "#FFF8E7", border: "1px solid #E5DCC8" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif" }}>Experience Highlights</p>
                <div className="flex flex-wrap gap-3 text-xs font-semibold" style={{ color: "#6B5F45", fontFamily: "Sora, sans-serif" }}>
                  <span>Fintech-Grade Applications</span>
                  <span>•</span>
                  <span>AI Automation Systems</span>
                  <span>•</span>
                  <span>Scalable Architecture</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#6B5F45", fontFamily: "Sora, sans-serif" }}>Skills</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-semibold border" style={{ background: "#F0E8D0", color: "#1A1A1A", borderColor: "#E5DCC8", fontFamily: "Sora, sans-serif" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-8" style={{ background: "#FBF1DD" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Our Core Values</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="rounded-2xl p-7 border h-full transition-all hover:scale-105 hover:shadow-lg" style={{ background: "#FFF8E7", borderColor: "#E5DCC8" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#C9A24B" }}>
                    <v.icon size={18} style={{ color: "#1A1A1A" }} />
                  </div>
                  <h3 className="text-lg font-black mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{v.title}</h3>
                  <p className="text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 px-4 md:px-8" style={{ background: "#FFF8E7" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Meet Our Team</h2>
            <p className="text-center mb-12" style={{ color: "#C9A24B", fontFamily: "Sora, sans-serif", fontWeight: "600" }}>The Minds Behind Bhosale Tech Solution</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="rounded-2xl p-8 border h-full transition-all hover:scale-102 hover:shadow-lg" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
                  {/* Avatar */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black" style={{ background: "#C9A24B", color: "#1A1A1A", fontFamily: "Sora, sans-serif" }}>
                      {member.initials}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-black text-center mb-3" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{member.name}</h3>

                  {/* Role Badge */}
                  <div className="flex justify-center mb-4">
                    <span className="px-4 py-2 rounded-full text-xs font-bold" style={{ background: "#C9A24B", color: "#1A1A1A", fontFamily: "Sora, sans-serif" }}>
                      {member.role}
                    </span>
                  </div>

                  {/* Education */}
                  <p className="text-sm font-medium text-center mb-4" style={{ color: "#000000", fontFamily: "Inter, sans-serif" }}>
                    {member.education}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 rounded-full text-xs font-bold" style={{ background: "#F0E8D0", color: "#1A1A1A", fontFamily: "Sora, sans-serif" }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-center" style={{ color: "#000000", fontFamily: "Inter, sans-serif" }}>
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8" style={{ background: "#1A1A1A" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4" style={{ color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>Work With Us</h2>
          <p className="text-base mb-8" style={{ color: "#B8A98A", fontFamily: "Inter, sans-serif" }}>Let's build something efficient, scalable, and impactful together.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105" style={{ background: "#C9A24B", color: "#111111", fontFamily: "Sora, sans-serif" }}>
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
