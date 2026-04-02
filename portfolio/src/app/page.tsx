import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EducationEtc from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#030508] min-h-screen text-white w-full selection:bg-cyan-500/30 selection:text-white relative">
      
      {/* Global Ambient Lighting matching the Face Model */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[60vw] bg-orange-600/10 rounded-full blur-[150px] mix-blend-screen opacity-70" />
        <div className="absolute bottom-[-10%] left-[10%] w-[60vw] h-[40vw] bg-blue-700/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationEtc />
        <Contact />
        <footer className="w-full py-12 border-t border-cyan-500/10 bg-[#030508]/80 backdrop-blur-md text-center text-sm font-mono text-cyan-100/40 relative z-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>RB. © {new Date().getFullYear()} Rhythm Bhattarai. All rights reserved.</p>
            <div className="flex gap-6 relative z-30">
               <a href="https://linkedin.com/in/rhythmishere" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
               <a href="https://github.com/rhythmhere" className="hover:text-orange-400 transition-colors">GitHub</a>
               <a href="https://fiverr.com/rhythm770" className="hover:text-cyan-400 transition-colors">Fiverr</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
