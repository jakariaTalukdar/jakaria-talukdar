import { experienceData } from "@/lib/experienceData";
import { siteData } from "@/lib/siteData";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Work"
          accent="Experience"
          subtitle="Professional roles delivering client software in Dhaka."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />

          <div className="space-y-6">
            {experienceData.map((job, i) => (
              <Reveal key={job.id} delay={i * 120}>
                <article className="relative pl-12 md:pl-16">
                  <div className="absolute left-2.5 md:left-[1.125rem] top-5 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(0,255,128,0.6)]" />
                  <div className="glass-card card-hover rounded-xl p-5 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {job.role}
                        </h3>
                        <p className="text-primary text-sm font-medium">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-xs text-alpha sm:text-right">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-sm text-gray-300 leading-relaxed flex gap-2"
                        >
                          <span className="text-primary mt-1.5 shrink-0">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-center text-lg font-semibold text-white mb-5">
              Professional <span className="gradient-text-static">Highlights</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {siteData.highlights.map((item, i) => (
                <li
                  key={item}
                  className="glass-card rounded-lg px-4 py-3 text-sm text-gray-300 flex gap-2"
                >
                  <span className="text-primary shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
