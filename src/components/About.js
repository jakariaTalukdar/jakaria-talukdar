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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Reveal className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/60 shadow-[0_0_40px_rgba(0,255,128,0.2)]">
                <Image
                  src={siteData.profileImage}
                  alt={siteData.name}
                  fill
                  className="object-cover"
                  sizes="288px"
                  priority
                />
              </div>
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
