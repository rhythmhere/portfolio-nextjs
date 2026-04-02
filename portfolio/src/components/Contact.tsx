"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-transparent py-32 md:py-48 px-6 md:px-12 z-20 border-t border-orange-500/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        
        <div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-zinc-500 font-mono text-sm tracking-wider uppercase mb-4">Contact</p>
            <h2 className="text-6xl md:text-[5.5rem] font-bold tracking-tighter text-white leading-none mb-8">
              Let&apos;s build <br/> something.
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-md leading-relaxed mb-16">
              Open to freelance projects, app development contracts, and full-time opportunities. I respond within 24 hours.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <a href="mailto:rhythmbhattari90@gmail.com" className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white transition-colors">
              <div>
                <p className="text-sm font-mono text-zinc-500 mb-1 uppercase">Email</p>
                <p className="text-2xl font-medium text-white group-hover:text-blue-400 transition-colors">rhythmbhattari90@gmail.com</p>
              </div>
              <ArrowUpRight className="w-8 h-8 text-zinc-600 group-hover:text-white transition-colors" />
            </a>
            <a href="tel:+9779867893043" className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white transition-colors">
              <div>
                <p className="text-sm font-mono text-zinc-500 mb-1 uppercase">Phone</p>
                <p className="text-2xl font-medium text-white group-hover:text-emerald-400 transition-colors">+977 9867893043</p>
              </div>
              <ArrowUpRight className="w-8 h-8 text-zinc-600 group-hover:text-white transition-colors" />
            </a>
            <div className="flex gap-4 pt-8">
              <a href="https://linkedin.com/in/rhythmishere" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors font-medium">
                LinkedIn
              </a>
              <a href="https://github.com/rhythmhere" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors font-medium">
                GitHub
              </a>
              <a href="https://fiverr.com/rhythm770" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-zinc-700 bg-zinc-900 text-emerald-400 hover:border-emerald-400 transition-colors font-medium">
                Fiverr
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          className="bg-[#030508]/80 border border-cyan-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-[0_0_30px_rgba(249,115,22,0.05)]"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Or send a message directly.</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-mono text-cyan-500/80 mb-2 uppercase">Name</label>
              <input type="text" placeholder="Your name" className="w-full bg-[#030508]/50 border border-cyan-500/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-mono text-cyan-500/80 mb-2 uppercase">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full bg-[#030508]/50 border border-cyan-500/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-mono text-cyan-500/80 mb-2 uppercase">Message</label>
              <textarea placeholder="Tell me about your project..." rows={4} className="w-full bg-[#030508]/50 border border-cyan-500/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"></textarea>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-orange-500 text-white font-bold rounded-xl text-lg hover:from-cyan-400 hover:to-orange-400 transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transform hover:scale-[1.02]">
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
