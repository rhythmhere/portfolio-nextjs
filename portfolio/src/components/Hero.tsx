"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameCount = 120;
  const getImageUrl = (index: number) => {
    return `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.png`;
  };

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    for (let i = 0; i < frameCount; i++) {
      const img = new window.Image();
      img.src = getImageUrl(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  const drawFrame = (img: HTMLImageElement, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);

    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  };

  useEffect(() => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (images[0]?.complete) {
      drawFrame(images[0], canvas, ctx);
    }
  }, [images]);

  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      if (images.length > 0) {
        const index = Math.min(Math.floor(latest), frameCount - 1);
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (canvas && ctx && images[index]?.complete) {
          drawFrame(images[index], canvas, ctx);
        }
      }
    });
    return () => unsubscribe();
  }, [frameIndex, images]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const handleResize = () => {
      const index = Math.min(Math.floor(frameIndex.get()), frameCount - 1);
      if (canvas && images[index]?.complete) {
        const ctx = canvas.getContext("2d");
        if (ctx) drawFrame(images[index], canvas, ctx);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  // Framer motion text parallax
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  const subY = useTransform(scrollYProgress, [0.1, 0.4], [100, -100]);
  const subOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.4], [0, 1, 0]);

  const stackY = useTransform(scrollYProgress, [0.35, 0.7], [100, -100]);
  const stackOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.7], [0, 1, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        
        {/* Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/30 via-transparent to-[#030508] pointer-events-none" />

        {/* Floating Overlays */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10 pointer-events-none">
          
          <motion.div style={{ y: titleY, opacity: titleOpacity }} className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-6xl md:text-[9rem] font-bold tracking-tighter text-white drop-shadow-2xl leading-none">
              Rhythm
              <br />
              Bhattarai.
            </h1>
            <div className="mt-8 flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-white/50">
               <span className="w-12 h-[1px] bg-white/50"></span>
               Scroll down
               <span className="w-12 h-[1px] bg-white/50"></span>
            </div>
          </motion.div>

          <motion.div style={{ y: subY, opacity: subOpacity }} className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <h2 className="text-4xl md:text-6xl text-white font-semibold leading-tight tracking-tighter max-w-4xl drop-shadow-2xl text-balance">
              Full-stack developer shipping <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">production apps & platforms</span>
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-cyan-100/50 font-light max-w-2xl text-balance">
              Across fintech, edtech, and digital commerce.
            </p>
          </motion.div>

          <motion.div style={{ y: stackY, opacity: stackOpacity }} className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-3xl">
              {['Flutter', 'Laravel', 'Python', 'Node.js'].map((tech) => (
                <span key={tech} className="text-5xl md:text-8xl font-black text-white/10 tracking-tighter hover:text-white/30 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
