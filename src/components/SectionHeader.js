import Reveal from "./Reveal";

export default function SectionHeader({ title, accent, subtitle, center = true }) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          {accent ? (
            <>
              <span className="text-white">{title} </span>
              <span className="gradient-text-static">{accent}</span>
            </>
          ) : (
            <span className="gradient-text-static">{title}</span>
          )}
        </h2>
        <div
          className={`flex items-center gap-x-1 mt-3 mb-4 ${
            center ? "justify-center" : ""
          }`}
        >
          <div className="w-20 h-1 rounded-lg bg-primary" />
          <div className="w-3 h-1 rounded-lg bg-primary" />
          <div className="w-7 h-1 rounded-lg bg-primary" />
        </div>
        {subtitle ? (
          <p className="text-sm text-alpha max-w-2xl mx-auto">{subtitle}</p>
        ) : null}
      </Reveal>
    </div>
  );
}
