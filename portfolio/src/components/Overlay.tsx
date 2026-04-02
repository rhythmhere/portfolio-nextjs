"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.65, 0.8], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-6 md:px-20 overflow-hidden">
        
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-8xl text-white font-extrabold mb-4 uppercase tracking-tighter drop-shadow-2xl">
            My Name
          </h1>
          <p className="text-xl md:text-3xl text-zinc-300 font-light tracking-widest uppercase drop-shadow-2xl">
            Creative Developer.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left pl-10 md:pl-32"
        >
          <h2 className="text-4xl md:text-7xl text-white font-bold leading-tight tracking-tighter drop-shadow-2xl max-w-3xl">
            I build digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">
              experiences.
            </span>
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right pr-10 md:pr-32"
        >
          <h2 className="text-4xl md:text-7xl text-white font-bold leading-tight tracking-tighter drop-shadow-2xl max-w-3xl">
            Bridging design <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-bl from-white to-zinc-500">
              and engineering.
            </span>
          </h2>
        </motion.div>
        
      </div>
    </div>
  );
}
