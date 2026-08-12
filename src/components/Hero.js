"use client";

import { siteData } from "@/lib/siteData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const techLine = ["Laravel", "React", "Next.js", "MySQL", "Inertia.js"];

export default function Hero() {
  const [ready, setReady] = useState(false);
  const portraitRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const el = portraitRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setParallax({ x: px * 14, y: py * 10 });
    };

    const onLeave = () => setParallax({ x: 0, y: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden bg-dark ${
        ready ? "hero-ready" : ""
      }`}
    >
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 15% 40%, rgba(0,255,128,0.1) 0%, transparent 55%), radial-gradient(ellipse 50% 60% at 85% 45%, rgba(0,247,255,0.08) 0%, transparent 50%), linear-gradient(180deg, #0a0a17 0%, #050508 100%)",
        }}
      />

      {/* Floating ambient orbs */}
      <div
        className="pointer-events-none absolute -left-16 top-24 w-72 h-72 rounded-full blur-3xl floating-orb pulse-glow"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,128,0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-10 w-96 h-96 rounded-full blur-3xl floating-orb pulse-glow"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(0,247,255,0.16) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/3 right-1/4 w-56 h-56 rounded-full blur-3xl floating-orb"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />

      {/* Drifting grid on portrait side */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-1/2 opacity-[0.1] hero-grid-drift"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,157,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,157,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to left, black 15%, transparent 95%)",
        }}
      />

      {/* Rotating dashed rings behind portrait */}
      <div
        className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block"
        aria-hidden="true"
      >
        <div
          className="w-[420px] h-[420px] rounded-full rotating-ring opacity-20"
          style={{ border: "1.5px dashed rgba(0,255,157,0.45)" }}
        />
        <div
          className="absolute inset-10 rounded-full rotating-ring opacity-15"
          style={{
            border: "1.5px dashed rgba(0,247,255,0.4)",
            animationDirection: "reverse",
            animationDuration: "22s",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div
              className="hero-fade-up inline-flex items-center gap-2 mb-6 text-xs tracking-[0.18em] uppercase text-alpha"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for client projects · {siteData.location}
            </div>

            <h1
              className="hero-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold tracking-tight leading-[1.05] mb-4"
              style={{ animationDelay: "0.12s" }}
            >
              <span className="gradient-text">{siteData.name}</span>
            </h1>

            <div
              className="hero-line h-px w-28 bg-gradient-to-r from-primary via-[#00f7ff] to-transparent mb-5"
              aria-hidden="true"
            />

            <p
              className="hero-fade-up text-lg sm:text-xl md:text-2xl text-white font-medium mb-5"
              style={{ animationDelay: "0.22s" }}
            >
              {siteData.headline}
            </p>

            <p
              className="hero-fade-up text-base sm:text-lg text-gray-300/90 max-w-xl leading-relaxed mb-8"
              style={{ animationDelay: "0.32s" }}
            >
              {siteData.tagline}
            </p>

            <div
              className="hero-fade-up flex flex-col sm:flex-row gap-3 mb-10"
              style={{ animationDelay: "0.42s" }}
            >
              <Link href="#projects" className="btn text-center">
                View selected work
              </Link>
              <Link href="#contact" className="transparent-button text-center">
                Discuss a project
              </Link>
            </div>

            <div
              className="hero-fade-up flex flex-wrap items-center gap-x-3 gap-y-2 text-sm"
              style={{ animationDelay: "0.52s" }}
            >
              {/* <span className="text-white/45 text-xs uppercase tracking-wider mr-1">
                Stack
              </span> */}
              {techLine.map((tech, i) => (
                <span
                  key={tech}
                  className="hero-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-gray-300 backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
                  style={{ animationDelay: `${0.58 + i * 0.07}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5 order-1 lg:order-2 hero-portrait-enter">
            <div
              ref={portraitRef}
              className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none"
            >
              <div className="hero-float relative">
                <div
                  className="hero-frame-enter absolute -inset-3 sm:-inset-4 rounded-[1.75rem] border border-primary/30"
                  aria-hidden="true"
                />
                <div
                  className="hero-frame-enter absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-24 h-24 border-t-2 border-r-2 border-primary/60 rounded-tr-2xl"
                  aria-hidden="true"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="hero-frame-enter absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-24 h-24 border-b-2 border-l-2 border-primary/45 rounded-bl-2xl"
                  aria-hidden="true"
                  style={{ animationDelay: "0.65s" }}
                />

                <div
                  className="absolute -inset-10 bg-primary/15 blur-3xl rounded-full pulse-glow"
                  aria-hidden="true"
                />

                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.55)] will-change-transform"
                  style={{
                    transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
                    transition: "transform 0.18s ease-out",
                  }}
                >
                  <Image
                    src={'/images/jakaria-talukdar-hero-image.png'}
                    alt={`${siteData.name} — ${siteData.headline}`}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 380px, 420px"
                  />
                  <div className="hero-shine" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll-cue absolute bottom-6 left-1/2 hidden md:flex flex-col items-center gap-2"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] tracking-[0.28em] uppercase text-white/50">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </a>
    </section>
  );
}
