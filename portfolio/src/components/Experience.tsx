"use client";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    period: "Mar 2025 — Present",
    company: "MoneyIN Global Inc. & Cable Exchange Group",
    location: "Remote, UK",
    role: "Full-Stack Developer",
    bullets: [
      "Shipped 9+ production apps across fintech, edtech, and logistics on both app stores.",
      "Built a 3-sided scan-and-pay ecosystem (user, merchant, agent) with QR payments and real-time settlement.",
      "Developed a KYC/AML-compliant forex and digital wallet platform with live exchange rates.",
      "Built a dual-app e-learning platform deployed in 60+ countries."
    ],
    tech: ["Flutter", "Laravel", "Node.js", "Firebase", "MySQL", "REST API"]
  },
  {
    period: "2026 — Present",
    company: "Apulza",
    location: "Remote",
    role: "Software Engineer",
    bullets: [
      "Joined the founding engineering team for an AI-driven student learning platform.",
      "Contributing to architecture and technical execution during the pre-launch phase."
    ],
    tech: ["React", "Laravel", "Python", "MySQL"]
  },
  {
    period: "Jul 2025 — Present",
    company: "CodeCrypse IT Solutions Ltd.",
    location: "Remote, UK-registered",
    role: "Founder & Lead Developer",
    bullets: [
      "Founded a UK-registered digital solutions company delivering web, mobile, AI, and branding services.",
      "Built and deployed client projects end-to-end across multiple industries."
    ],
    tech: ["Flutter", "Laravel", "Python", "Node.js", "WordPress"]
  },
  {
    period: "Ongoing",
    company: "Fiverr",
    location: "Remote, International",
    role: "Full-Stack Developer (Freelance)",
    bullets: [
      "Built web and mobile apps for international clients using Flutter, Laravel, and Node.js.",
      "Delivered custom WordPress themes, eCommerce solutions, and third-party API integrations."
    ],
    tech: ["Flutter", "Laravel", "WordPress", "WooCommerce"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-transparent py-32 px-6 md:px-12 z-20 border-t border-orange-500/10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-cyan-500/80 font-mono text-sm tracking-wider uppercase mb-4">Experience</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-100 drop-shadow-xl">Where I&apos;ve worked.</h2>
        </motion.div>

        <div className="space-y-24">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                <div className="md:col-span-3 mb-6 md:mb-0">
                  <p className="text-orange-400 font-mono text-sm drop-shadow-sm">{exp.period}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-3xl font-bold text-white tracking-tight mb-2 drop-shadow-md">{exp.company}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                    <p className="text-xl font-medium text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">{exp.role}</p>
                    <span className="hidden md:inline text-cyan-500/50">•</span>
                    <p className="text-cyan-100/50 text-sm">{exp.location}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-cyan-50/70 leading-relaxed flex items-start">
                        <span className="mr-4 text-orange-500 mt-1.5 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 bg-cyan-900/10 text-cyan-300 text-xs font-mono rounded border border-cyan-500/20 uppercase tracking-wide hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-shadow cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
