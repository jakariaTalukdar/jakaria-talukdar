import Image from "next/image";
import { skillsData } from "@/lib/skillsData";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Skills"
          accent="& Tools"
          subtitle="The stack I use to ship full-stack production systems."
        />

        <div className="space-y-10">
          {skillsData.map((group, groupIndex) => (
            <div key={group.id}>
              <Reveal delay={groupIndex * 60}>
                <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold">
                  <span className="gradient-text-static">{group.title}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                </h3>
              </Reveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {group.items.map((item, i) => (
                  <Reveal key={item.name} delay={80 + i * 40}>
                    <div className="group glass-card card-hover rounded-xl p-4 sm:p-5 h-full flex flex-col items-center justify-center text-center gap-3 min-h-[120px] sm:min-h-[140px]">
                      <div className="relative h-12 w-12 sm:h-14 sm:w-14 transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain"
                          sizes="56px"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-200 group-hover:text-primary transition-colors">
                        {item.name}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
