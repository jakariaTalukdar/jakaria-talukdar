"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectScreenshots({ screenshots, projectTitle, liveUrl }) {
  const [failed, setFailed] = useState({});
  const [active, setActive] = useState(0);

  const available = screenshots.filter((_, i) => !failed[i]);
  const current = screenshots[active] && !failed[active] ? screenshots[active] : available[0];

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
        <div className="relative mb-4 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <div className="relative aspect-[16/10] w-full">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt || `${projectTitle} screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 900px"
              unoptimized={Boolean(current.remote)}
              onError={() => {
                const index = screenshots.findIndex((s) => s.src === current.src);
                if (index >= 0) {
                  setFailed((prev) => ({ ...prev, [index]: true }));
                  const next = screenshots.findIndex((_, i) => i !== index && !failed[i]);
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
        </div>
      ) : (
        <div className="mb-4 flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 text-center">
          <div>
            <p className="text-sm text-gray-300 mb-3">
              Live preview is temporarily unavailable.
            </p>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn">
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
              onClick={() => setActive(index)}
              className={`relative aspect-video overflow-hidden rounded-xl border transition ${
                isActive
                  ? "border-primary shadow-[0_0_20px_rgba(0,255,128,0.15)]"
                  : "border-white/10 hover:border-primary/40"
              }`}
            >
              <Image
                src={shot.src}
                alt={shot.alt || `${projectTitle} thumb ${index + 1}`}
                fill
                className="object-cover object-top"
                sizes="200px"
                unoptimized={Boolean(shot.remote)}
                onError={() => setFailed((prev) => ({ ...prev, [index]: true }))}
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
    </div>
  );
}
