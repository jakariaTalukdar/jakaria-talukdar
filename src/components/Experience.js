import { experienceData } from "@/lib/experienceData";
import { siteData } from "@/lib/siteData";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-dark-green/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Work"
          accent="Experience"
          subtitle="Professional roles delivering client software in Dhaka."
        />

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute left-[1.15rem] md:left-[1.4rem] top-3 bottom-3 w-px bg-gradient-to-b from-primary via-primary/35 to-transparent"
            aria-hidden="true"
          />

          <ol className="relative space-y-0">
            {experienceData.map((job, i) => (
              <Reveal
                key={job.id}
                delay={i * 140}
                as="li"
                className="relative pb-10 last:pb-0"
              >
                <article className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[3rem_1fr] gap-x-4 md:gap-x-6">
                  <div className="relative z-10 flex justify-center pt-1">
                    <span
                      className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                        job.current
                          ? "border-primary bg-primary/20 experience-node-pulse"
                          : "border-primary/50 bg-black"
                      }`}
                      aria-hidden="true"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          job.current ? "bg-primary" : "bg-primary/60"
                        }`}
                      />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <time className="text-xs font-medium tracking-wide text-primary">
                        {job.period}
                      </time>
                      {job.current ? (
                        <span className="rounded border border-primary/35 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                          Current
                        </span>
                      ) : null}
                      <span className="text-xs text-alpha">· {job.location}</span>
                    </div>

                    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-5 md:p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-[0_8px_32px_rgba(0,255,128,0.06)]">
                      <header className="mb-4">
                        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-alpha mb-1">
                          {String(i + 1).padStart(2, "0")} — Role
                        </p>
                        <h3 className="text-xl font-semibold text-white leading-snug">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-primary">
                          {job.company}
                        </p>
                        {job.website ? (
                          <a
                            href={job.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-alpha hover:text-primary transition"
                          >
                            <span>{job.websiteLabel || job.website}</span>
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 17L17 7M17 7H7M17 7v10"
                              />
                            </svg>
                          </a>
                        ) : null}
                      </header>

                      <ul className="mb-5 space-y-2.5">
                        {job.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-3 text-sm leading-relaxed text-gray-300"
                          >
                            <span
                              className="mt-2 h-px w-3 shrink-0 bg-primary/70"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={280}>
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <h3 className="shrink-0 text-sm font-semibold uppercase tracking-[0.16em] text-white">
                Highlights
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {siteData.highlights.map((item, i) => (
                <li key={item} className="flex gap-3 group">
                  <span className="mt-0.5 font-mono text-xs font-semibold text-primary tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-gray-300 border-b border-transparent group-hover:border-primary/25 transition-colors pb-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
