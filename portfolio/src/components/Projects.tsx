"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Forex trading platform",
    category: "Fintech · Mobile App",
    description: "KYC/AML-compliant currency exchange and digital wallet. Real-time rates, multi-currency, live on both stores.",
    tech: ["Flutter", "Laravel", "MySQL", "REST API"]
  },
  {
    title: "Scan and pay",
    category: "Fintech · Multi-sided Platform",
    description: "Three-app ecosystem covering user, merchant, and agent flows. QR payments with real-time settlement.",
    tech: ["Flutter", "Node.js", "Firebase"]
  },
  {
    title: "Secure escrow",
    category: "Fintech · Web + Mobile",
    description: "Secure escrow platform with fund locking, dispute flow, and automated release.",
    tech: ["Flutter", "Laravel", "REST API"]
  },
  {
    title: "E-learning platform",
    category: "Edtech · Dual App",
    description: "Instructor and student apps with course management and certifications. Live in 60+ countries.",
    tech: ["Flutter", "Laravel", "MySQL"]
  },
  {
    title: "Digital identity card",
    category: "Identity Tech · Mobile App",
    description: "NFC-ready digital card replacing physical cards. Custom branding per user profile.",
    tech: ["Flutter", "Node.js", "Firebase"]
  },
  {
    title: "Van delivery logistics",
    category: "Logistics · Mobile App",
    description: "On-demand van booking with real-time tracking and driver management.",
    tech: ["Flutter", "Laravel", "Maps API"]
  },
  {
    title: "Devanagari recognition",
    category: "AI / ML · Research Project",
    description: "CNN model for Nepali script recognition with word-level splitting and a FastAPI backend.",
    tech: ["TensorFlow", "Keras", "FastAPI", "Python"]
  },
  {
    title: "Payment gateway",
    category: "Fintech · Portfolio Project",
    description: "RhynoPay — Custom Payment Gateway with merchant dashboard, developer API, webhooks, and AI fraud detection.",
    tech: ["Laravel 11", "MySQL", "REST API", "Redis"]
  }
];

export default function Projects() {
  return (
    <section id="work" className="relative w-full bg-transparent py-32 px-6 md:px-12 z-20 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-orange-500/80 font-mono text-sm tracking-wider uppercase mb-4">Work</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-cyan-100 drop-shadow-2xl">Shipped. Live. Real.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
              className="group relative rounded-3xl border border-white/5 bg-[#030508]/50 p-8 md:p-10 backdrop-blur-xl overflow-hidden hover:border-cyan-500/40 hover:bg-[#030508]/80 transition-all duration-500 cursor-pointer hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
            >
              {/* Subtle hover glow effect inside card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full" />
              </div>
              
              <div className="flex justify-between items-start mb-6 relative z-10 w-full">
                <div className="pr-8">
                  <p className="text-xs font-mono text-cyan-400 mb-3 uppercase tracking-widest">{project.category}</p>
                  <h4 className="text-3xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-200 transition-all duration-500">
                    {project.title}
                  </h4>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-cyan-500/20 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-black hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 text-cyan-400">
                  <ArrowUpRight className="w-5 h-5 group-hover:text-black" />
                </div>
              </div>
              
              <p className="text-cyan-50/60 text-lg leading-relaxed relative z-10 mb-8 max-w-lg group-hover:text-white/90 transition-colors">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 text-cyan-200 text-xs font-medium rounded-full border border-white/10 uppercase tracking-wide group-hover:border-cyan-500/30 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
