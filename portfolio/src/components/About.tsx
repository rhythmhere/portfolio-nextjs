"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-transparent py-32 px-6 md:px-12 md:py-48 z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-500/80 font-mono text-sm tracking-wider uppercase mb-4"
          >
            About me
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]"
          >
            Building things <br />
            that actually <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-orange-400">ship.</span>
          </motion.h2>
        </div>
        <div className="md:col-span-7 flex flex-col gap-8 md:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed space-y-6"
          >
            <p>
              I&apos;m a 19-year-old full-stack developer based in Kathmandu, Nepal, with hands-on experience building and deploying production mobile apps and web platforms for fintech, neobanking, and edtech clients across the UK, North America, and Europe.
            </p>
            <p>
              I&apos;ve shipped apps live on Google Play and the App Store including forex and digital wallet platforms, scan-and-pay systems, escrow solutions, e-learning platforms, and digital identity products. Not prototypes. <strong className="text-white font-medium">Real products, real users.</strong>
            </p>
            <p>
              I work across the full product lifecycle from architecture and development through to deployment and store release.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-12 border-t border-cyan-500/10"
          >
            <div>
              <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">9+</p>
              <p className="text-cyan-400/80 font-medium text-sm mt-2 uppercase tracking-wide">Apps in Production</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">4+</p>
              <p className="text-cyan-400/80 font-medium text-sm mt-2 uppercase tracking-wide">Countries Served</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">3+</p>
              <p className="text-orange-400/80 font-medium text-sm mt-2 uppercase tracking-wide">Years Building</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
