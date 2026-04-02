"use client";
import { motion } from "framer-motion";

export default function EducationEtc() {
  return (
    <section id="education" className="relative w-full bg-transparent py-32 px-6 md:px-12 z-20 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 relative z-10">
        
        {/* Education Column */}
        <div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-zinc-500 font-mono text-sm tracking-wider uppercase mb-4">Education</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-16">Academic background.</h2>
          </motion.div>

          <div className="space-y-12 border-l border-white/10 pl-6 relative">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <span className="absolute -left-[29px] top-2 w-3 h-3 bg-cyan-400 rounded-full ring-4 ring-[#030508] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              <p className="text-cyan-500/60 font-mono text-sm mb-2">2023 — 2025</p>
              <h3 className="text-2xl font-bold text-white tracking-tight">Higher Secondary Certificate (SLC)</h3>
              <p className="text-lg text-orange-400 font-medium mb-1 drop-shadow-sm">Computer Science</p>
              <p className="text-cyan-100/40 mb-4">National School of Sciences (NIST) · Kathmandu, Nepal</p>
              <p className="inline-block px-3 py-1 bg-cyan-900/20 text-cyan-200 border border-cyan-500/10 rounded-md font-mono text-sm mb-4">GPA 3.45 / 4.0 — A Grade</p>
              <div className="flex gap-2 flex-wrap text-sm text-cyan-500/40 font-mono uppercase">
                <span>Computer Science</span>•<span>Physics</span>•<span>Mathematics</span>•<span>Chemistry</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <span className="absolute -left-[29px] top-2 w-3 h-3 bg-orange-400 rounded-full ring-4 ring-[#030508] shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
              <p className="text-orange-500/60 font-mono text-sm mb-2">2012 — 2023</p>
              <h3 className="text-2xl font-bold text-cyan-50/70 tracking-tight">Secondary Education Examination (SEE)</h3>
              <p className="text-cyan-100/40 mb-4">Shivgadhi English School · Kapilvastu, Nepal</p>
              <p className="inline-block px-3 py-1 bg-orange-900/20 text-orange-200 border border-orange-500/10 rounded-md font-mono text-sm">GPA 3.35 / 4.0 — A Grade</p>
            </motion.div>
          </div>
        </div>

        {/* More About Me Column */}
        <div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-zinc-500 font-mono text-sm tracking-wider uppercase mb-4">More About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-16 leading-tight">Certifications, <br/>achievements & languages.</h2>
          </motion.div>

          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Achievements</h4>
              <ul className="space-y-6">
                <li>
                  <p className="font-bold text-lg text-white">IELTS Band 7 — C1 Advanced English</p>
                  <p className="text-zinc-400 text-sm mt-1">International English Language Testing System</p>
                </li>
                <li>
                  <p className="font-bold text-lg text-white">CodeCraft School Coding Challenge — 1st Position</p>
                  <p className="text-zinc-400 text-sm mt-1">First place in competitive school-level coding competition</p>
                </li>
                <li>
                  <p className="font-bold text-lg text-white">Hack4Impact</p>
                  <p className="text-zinc-400 text-sm mt-1">Participant in a 72-hour social impact hackathon</p>
                </li>
                <li>
                  <p className="font-bold text-lg text-white">7-Day Robotics Training</p>
                  <p className="text-zinc-400 text-sm mt-1">Embedded systems and robotics workshop</p>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Languages</h4>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <p className="text-white font-bold">English</p>
                  <p className="text-zinc-500 text-sm font-mono mt-1">C1 Advanced</p>
                </div>
                <div>
                  <p className="text-white font-bold">Nepali</p>
                  <p className="text-zinc-500 text-sm font-mono mt-1">Native</p>
                </div>
                <div>
                  <p className="text-white font-bold">Hindi</p>
                  <p className="text-zinc-500 text-sm font-mono mt-1">Fluent</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* References section inside EducationEtc for cleaner layout */}
      <div className="max-w-7xl mx-auto mt-32 bg-[#030508]/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-10 md:p-16 text-center relative z-10 shadow-[0_0_30px_rgba(6,182,212,0.05)]">
         <p className="text-orange-500/80 font-mono text-sm tracking-wider uppercase mb-8">Reference</p>
         <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-orange-100 tracking-tighter max-w-2xl mx-auto mb-12 drop-shadow-md">&quot;Who can vouch for my work.&quot;</h2>
         
         <div>
           <p className="text-2xl font-bold text-white">Arif Esa</p>
           <p className="text-cyan-400 font-medium my-2">CEO & Founder, MoneyIN Global Inc. & Cable Exchange Group</p>
           <p className="text-orange-200/50 text-sm">Top 10 Most Influential CEOs — 2022, 2023, 2024</p>
           <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-cyan-950/30 rounded-full border border-cyan-500/20 text-cyan-200 font-mono text-sm">
             <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
             +44 7404 896044
           </div>
         </div>
      </div>
    </section>
  );
}
