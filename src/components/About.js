import Image from "next/image";
import { siteData } from "@/lib/siteData";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="About"
          accent="Me"
          subtitle="Full-stack delivery across CRM, HRM, e-commerce, hospital, and education platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          <Reveal className="w-full md:h-full">
            <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full md:min-h-[420px] overflow-hidden rounded-2xl border-2 border-primary/60 shadow-[0_0_40px_rgba(0,255,128,0.2)]">
              <div className="absolute inset-0 bg-primary/10 blur-2xl" aria-hidden="true" />
              <Image
                src="/images/about-jakaria-talukdar.png"
                alt={siteData.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                {siteData.bio}
              </p>
            </Reveal>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {siteData.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={150 + i * 80}>
                  <div className="glass-card card-hover rounded-xl p-4 text-center">
                    <div className="text-xl md:text-2xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-[11px] md:text-xs text-alpha mt-1">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={350}>
              <div className="glass-card rounded-xl p-5 space-y-3">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    Education
                  </h3>
                  <p className="text-sm text-gray-300">
                    {siteData.education.degree} ·{" "}
                    {siteData.education.university}
                  </p>
                  <p className="text-xs text-alpha">
                    Graduated {siteData.education.graduated} ·{" "}
                    {siteData.education.institute}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    Certification
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    <span className="text-primary font-semibold">
                      {siteData.certification.name}:
                    </span>{" "}
                    {siteData.certification.detail}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    Languages
                  </h3>
                  <p className="text-sm text-alpha">
                    {siteData.languages.join(" · ")}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
