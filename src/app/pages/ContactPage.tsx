import { useState } from "react";
import { ScrollReveal } from "../components/ScrollReveal";
import { Mail, Phone, Send, ArrowRight } from "lucide-react";

const services = [
  "AI Automation", "AI Calling Assistant", "Website Development",
  "Mobile App Development", "UI/UX Design", "Combo System", "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. I'm interested in: ${form.service}. ${form.message} | Email: ${form.email} | Phone: ${form.phone}`;
    window.open(`https://wa.me/919860810865?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#FFF8E7" }}>
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-6 border" style={{ borderColor: "#C9A24B", color: "#C9A24B", background: "rgba(201,162,75,0.08)", fontFamily: "Sora, sans-serif" }}>
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>
              Let's Build Something<br />
              <span style={{ color: "#C9A24B" }}>Fast & Efficient</span>
            </h1>
            <p className="text-lg" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
              Together. Tell us about your project and we'll get back to you within hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="space-y-6">
              <div className="rounded-2xl p-7 border" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#1A1A1A" }}>
                  <Mail size={18} style={{ color: "#C9A24B" }} />
                </div>
                <h3 className="font-black text-base mb-1" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Email</h3>
                <a href="mailto:bhosaleatharv8765@gmail.com" className="text-sm hover:text-amber-600 transition-colors" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
                  bhosaleatharv8765@gmail.com
                </a>
              </div>

              <div className="rounded-2xl p-7 border" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#1A1A1A" }}>
                  <Phone size={18} style={{ color: "#C9A24B" }} />
                </div>
                <h3 className="font-black text-base mb-1" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Call / WhatsApp</h3>
                <a href="tel:+919860810865" className="text-sm block hover:text-amber-600 transition-colors mb-3" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
                  +91 9860810865
                </a>
                <a
                  href="https://wa.me/919860810865"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105"
                  style={{ background: "#25D366", color: "#fff", fontFamily: "Sora, sans-serif" }}
                >
                  Chat on WhatsApp <ArrowRight size={14} />
                </a>
              </div>

              <div className="rounded-2xl p-7 border" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
                <h3 className="font-black text-base mb-3" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Response Time</h3>
                <p className="text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
                  We typically respond within <span className="font-bold" style={{ color: "#C9A24B" }}>2–4 hours</span> on WhatsApp and within <span className="font-bold" style={{ color: "#C9A24B" }}>24 hours</span> via email.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={150}>
            {submitted ? (
              <div className="rounded-2xl p-10 border text-center flex flex-col items-center justify-center h-full" style={{ background: "#FBF1DD", borderColor: "#C9A24B" }}>
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-black mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: "#6B5F45", fontFamily: "Inter, sans-serif" }}>
                  Your WhatsApp message has been prepared. We'll reply within a few hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2.5 rounded-full text-sm font-bold" style={{ background: "#1A1A1A", color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl p-8 border space-y-5" style={{ background: "#FBF1DD", borderColor: "#E5DCC8" }}>
                {[
                  { label: "Your Name", name: "name", type: "text", placeholder: "Atharv Bhosale" },
                  { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com" },
                  { label: "Phone Number", name: "phone", type: "tel", placeholder: "+91 98765 43210" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-bold mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>{field.label}</label>
                    <input
                      required
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border outline-none transition-all"
                      style={{ background: "#FFF8E7", borderColor: "#E5DCC8", color: "#111111", fontFamily: "Inter, sans-serif" }}
                      onFocus={(e) => (e.target.style.borderColor = "#C9A24B")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5DCC8")}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Service Interested In</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border outline-none"
                    style={{ background: "#FFF8E7", borderColor: "#E5DCC8", color: form.service ? "#111111" : "#6B5F45", fontFamily: "Inter, sans-serif" }}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: "#000000", fontFamily: "Sora, sans-serif" }}>Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border outline-none resize-none"
                    style={{ background: "#FFF8E7", borderColor: "#E5DCC8", color: "#111111", fontFamily: "Inter, sans-serif" }}
                    onFocus={(e) => (e.target.style.borderColor = "#C9A24B")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5DCC8")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base transition-all hover:scale-[1.02]"
                  style={{ background: "#1A1A1A", color: "#FFF8E7", fontFamily: "Sora, sans-serif" }}
                >
                  Send via WhatsApp <Send size={16} />
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
