"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectScreenshots({ screenshots, projectTitle, liveUrl }) {
  const [failed, setFailed] = useState({});
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const availableIndexes = screenshots
    .map((_, i) => i)
    .filter((i) => !failed[i]);

  const current =
    screenshots[active] && !failed[active]
      ? screenshots[active]
      : screenshots[availableIndexes[0]];

  const openLightbox = (index) => {
    if (failed[index]) return;
    setActive(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goPrev = () => {
    if (!availableIndexes.length) return;
    const pos = availableIndexes.indexOf(active);
    const prevIndex =
      availableIndexes[(pos - 1 + availableIndexes.length) % availableIndexes.length];
    setActive(prevIndex);
  };

  const goNext = () => {
    if (!availableIndexes.length) return;
    const pos = availableIndexes.indexOf(active);
    const nextIndex = availableIndexes[(pos + 1) % availableIndexes.length];
    setActive(nextIndex);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, active, failed]);

  const lightboxImage =
    screenshots[active] && !failed[active]
      ? screenshots[active]
      : screenshots[availableIndexes[0]];

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-white">
          Screenshots <span className="gradient-text-static">& Previews</span>
        </h2>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          Open live site →
        </a>
      </div>

      {current ? (
        <button
          type="button"
          onClick={() => openLightbox(active)}
          className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 text-left"
          aria-label={`Zoom ${current.label || "screenshot"}`}
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt || `${projectTitle} screenshot`}
              fill
              className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 900px"
              unoptimized={Boolean(current.remote)}
              onError={() => {
                const index = screenshots.findIndex((s) => s.src === current.src);
                if (index >= 0) {
                  setFailed((prev) => ({ ...prev, [index]: true }));
                  const next = screenshots.findIndex(
                    (_, i) => i !== index && !failed[i]
                  );
                  if (next >= 0) setActive(next);
                }
              }}
            />
          </div>
          {current.label ? (
            <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[11px] text-white backdrop-blur">
              {current.label}
            </span>
          ) : null}
          <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-[11px] text-white backdrop-blur opacity-90 group-hover:opacity-100">
            <ZoomIcon />
            Click to zoom
          </span>
        </button>
      ) : (
        <div className="mb-4 flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 text-center">
          <div>
            <p className="text-sm text-gray-300 mb-3">
              Live preview is temporarily unavailable.
            </p>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Live
            </a>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {screenshots.map((shot, index) => {
          if (failed[index]) return null;
          const isActive = active === index;
          return (
            <button
              key={shot.src}
              type="button"
              onClick={() => openLightbox(index)}
              className={`group relative aspect-video overflow-hidden rounded-xl border transition ${
                isActive
                  ? "border-primary shadow-[0_0_20px_rgba(0,255,128,0.15)]"
                  : "border-white/10 hover:border-primary/40"
              }`}
              aria-label={`Zoom ${shot.label || `screenshot ${index + 1}`}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt || `${projectTitle} thumb ${index + 1}`}
                fill
                className="object-cover object-top transition duration-300 group-hover:scale-105"
                sizes="200px"
                unoptimized={Boolean(shot.remote)}
                onError={() =>
                  setFailed((prev) => ({ ...prev, [index]: true }))
                }
              />
              {shot.label ? (
                <span className="absolute bottom-1.5 left-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[10px] text-white">
                  {shot.label}
                </span>
              ) : null}
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/35">
                <span className="opacity-0 group-hover:opacity-100 transition text-white">
                  <ZoomIcon />
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {lightboxOpen && lightboxImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot fullscreen view"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-primary hover:text-black transition"
            aria-label="Close fullscreen image"
          >
            ✕
          </button>

          {availableIndexes.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-3 sm:left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:border-primary hover:text-primary transition"
                aria-label="Previous screenshot"
              >
                ←
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-3 sm:right-16 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:border-primary hover:text-primary transition"
                aria-label="Next screenshot"
              >
                →
              </button>
            </>
          ) : null}

          <div
            className="relative h-full w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={lightboxImage.src}
              src={lightboxImage.src}
              alt={lightboxImage.alt || `${projectTitle} fullscreen`}
              fill
              className="object-contain"
              sizes="100vw"
              unoptimized={Boolean(lightboxImage.remote)}
              priority
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs text-white backdrop-blur">
            {lightboxImage.label || "Screenshot"} ·{" "}
            {availableIndexes.indexOf(active) + 1}/{availableIndexes.length}
            <span className="hidden sm:inline text-alpha"> · Esc to close</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ZoomIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  );
}
