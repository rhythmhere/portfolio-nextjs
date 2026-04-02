"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameCount = 120; // Based on 0 to 119 frames found

  const getImageUrl = (index: number) => {
    return `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.png`;
  };

  // Preload Images
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
        // Adding Math.floor to ensure we get an integer index
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

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas ref={canvasRef} className="w-full h-full object-cover origin-center max-w-none opacity-80" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>
    </div>
  );
}
