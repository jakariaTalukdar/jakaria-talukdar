"use client";

import { siteData } from "@/lib/siteData";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const orbs = Array.from({ length: 3 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 200 + Math.random() * 300,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      hue: i === 0 ? 160 : i === 1 ? 180 : 140,
    }));

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 23, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb) => {
        orb.x += orb.speedX;
        orb.y += orb.speedY;

        if (orb.x < -orb.radius || orb.x > canvas.width + orb.radius)
          orb.speedX *= -1;
        if (orb.y < -orb.radius || orb.y > canvas.height + orb.radius)
          orb.speedY *= -1;

        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        gradient.addColorStop(0, `hsla(${orb.hue}, 100%, 60%, 0.15)`);
        gradient.addColorStop(0.5, `hsla(${orb.hue}, 100%, 50%, 0.08)`);
        gradient.addColorStop(1, `hsla(${orb.hue}, 100%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, #0a0a17 0%, #000000 50%, #0a0a17 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />

      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      <div
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl floating-orb pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 255, 157, 0.2) 0%, transparent 70%)",
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      <div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl floating-orb pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 247, 255, 0.15) 0%, transparent 70%)",
          animationDelay: "2s",
          transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
        }}
      />

      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rotating-ring opacity-10"
        style={{
          border: "2px dashed rgba(0, 255, 157, 0.3)",
          borderRadius: "50%",
        }}
      />

      <div
        className={`relative z-10 text-center px-4 max-w-6xl mx-auto ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="hero-fade-up inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl">
          <div className="w-2 h-2 rounded-full bg-[#00ff9d] pulse-glow" />
          <span className="text-xs font-light tracking-[0.2em] text-white/80 uppercase">
            {siteData.headlineDetail}
          </span>
        </div>

        <h1 className="hero-fade-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-4 leading-[1.1] tracking-tight">
          <span className="gradient-text block">{siteData.name}</span>
        </h1>

        <p
          className="hero-fade-up text-xl sm:text-2xl md:text-3xl text-white/90 font-extralight tracking-wider mb-8"
          style={{ animationDelay: "0.15s" }}
        >
          {siteData.headline}
        </p>

        <div
          className="hero-fade-up flex items-center justify-center gap-4 mb-10"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] pulse-glow" />
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00f7ff] to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#00f7ff] pulse-glow" />
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" />
        </div>

        <p
          className="hero-fade-up text-lg sm:text-xl text-white/60 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ animationDelay: "0.35s" }}
        >
          {siteData.tagline}
        </p>

        <div
          className="hero-fade-up flex flex-col sm:flex-row justify-center items-center gap-4"
          style={{ animationDelay: "0.45s" }}
        >
          <Link
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-[#00ff9d] to-[#00f7ff] text-black font-medium text-sm tracking-wider uppercase rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,157,0.5)]"
          >
            View Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-white/[0.03] border border-white/10 text-white font-medium text-sm tracking-wider uppercase rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/5"
          >
            Contact
          </Link>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        <div className="w-px h-16 bg-gradient-to-b from-[#00ff9d] via-[#00f7ff] to-transparent" />
        <div className="w-1 h-1 rounded-full bg-[#00ff9d] pulse-glow" />
        <span className="text-[10px] text-white/50 font-light tracking-[0.3em] uppercase mt-2">
          Scroll
        </span>
      </a>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />
    </section>
  );
}
