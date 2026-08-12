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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillsData.map((group, i) => (
            <Reveal key={group.id} delay={i * 90}>
              <div className="glass-card card-hover rounded-xl p-5 h-full">
                <h3 className="text-lg font-semibold text-white mb-4">
                  <span className="gradient-text-static">{group.title}</span>
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
