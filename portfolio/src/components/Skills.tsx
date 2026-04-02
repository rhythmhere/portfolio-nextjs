"use client";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    num: "01",
    title: "Mobile Development",
    items: ["Flutter", "Dart", "Android", "iOS", "Play Store", "App Store"]
  },
  {
    num: "02",
    title: "Web Development",
    items: ["Laravel", "PHP", "JavaScript", "Node.js", "React", "Tailwind CSS", "WordPress"]
  },
  {
    num: "03",
    title: "Backend & APIs",
    items: ["Python", "FastAPI", "REST APIs", "MySQL", "SQLite", "Firebase", "Redis"]
  },
  {
    num: "04",
    title: "AI & Automation",
    items: ["TensorFlow", "Keras", "OpenAI API", "CNN", "Telegram Bots", "Discord Bots"]
  },
  {
    num: "05",
    title: "eCommerce",
    items: ["WooCommerce", "Shopify", "Payment APIs", "Webhooks"]
  },
  {
    num: "06",
    title: "Tools & DevOps",
    items: ["Git", "GitHub", "Linux", "cPanel", "Figma", "Agile"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-transparent py-32 px-6 md:px-12 z-20 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-orange-500/80 font-mono text-sm tracking-wider uppercase mb-4">Skills</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">What I work with.</h2>
          <p className="text-xl text-cyan-100/60 font-light mt-6 max-w-2xl text-balance">
            I build across mobile, web, backend, and automation. Every tool in my stack has been used in a shipped, live product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={category.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-t border-cyan-500/20 pt-6 relative"
            >
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-gradient-to-r from-cyan-400 to-orange-400 group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <div className="flex items-start gap-6 mb-6">
                <span className="text-sm font-mono text-cyan-500">{category.num}</span>
                <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">{category.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2 pl-12">
                {category.items.map((item) => (
                  <li key={item} className="px-4 py-2 bg-white/[0.03] border border-cyan-500/10 rounded-full text-sm font-medium text-cyan-100/70 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
