"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#030508]/80 backdrop-blur-xl border-b border-cyan-500/10 py-4 shadow-[0_0_15px_rgba(6,182,212,0.05)]" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
          RB.
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-cyan-100/60">
          <Link href="#about" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all">About</Link>
          <Link href="#skills" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all">Skills</Link>
          <Link href="#experience" className="hover:text-orange-400 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all">Experience</Link>
          <Link href="#work" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all">Work</Link>
          <Link href="#contact" className="hover:text-orange-400 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full text-sm hover:from-cyan-400 hover:to-blue-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
            Available for work
          </a>
        </div>
      </div>
    </motion.header>
  );
}
