"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectScreenshots({ screenshots, projectTitle, liveUrl }) {
  const [failed, setFailed] = useState({});
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const modal =
    lightboxOpen && lightboxImage && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot modal"
          >
            {/* Dark backdrop */}
            <button
              type="button"
              aria-label="Close modal"
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-default"
              onClick={closeLightbox}
            />

            {/* Close (X) button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-primary hover:bg-primary hover:text-black"
              aria-label="Close"
            >
              <CloseIcon />
            </button>

            {/* Prev / Next */}
            {availableIndexes.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-3 sm:left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-primary hover:text-primary"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-3 sm:right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-primary hover:text-primary"
                  aria-label="Next screenshot"
                >
                  <ChevronRightIcon />
                </button>
              </>
            ) : null}

            {/* Modal image panel */}
            <div
              className="relative z-10 mx-4 flex max-h-[85vh] max-w-[92vw] flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={lightboxImage.src}
                  src={lightboxImage.src}
                  alt={lightboxImage.alt || `${projectTitle} fullscreen`}
                  className="block max-h-[78vh] max-w-[90vw] w-auto h-auto object-contain"
                />
              </div>

              <p className="mt-4 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs text-white backdrop-blur">
                {lightboxImage.label || "Screenshot"} ·{" "}
                {availableIndexes.indexOf(active) + 1}/{availableIndexes.length}
              </p>
            </div>
          </div>,
          document.body
        )
      : null;

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
          aria-label={`Open ${current.label || "screenshot"}`}
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
          <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-[11px] text-white backdrop-blur">
            <ZoomIcon />
            Click to enlarge
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
              aria-label={`Open ${shot.label || `screenshot ${index + 1}`}`}
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
            </button>
          );
        })}
      </div>

      {modal}
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
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
