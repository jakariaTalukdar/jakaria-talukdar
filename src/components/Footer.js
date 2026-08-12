import { navItems } from "@/lib/navItems";
import { projectCategories } from "@/lib/projectsData";
import { siteData } from "@/lib/siteData";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05050c] text-gray-300">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 10% 0%, rgba(0,255,128,0.08) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 90% 100%, rgba(0,247,255,0.05) 0%, transparent 50%)",
        }}
      />

      {/* CTA band */}
      <div className="relative border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-7 md:px-8 backdrop-blur-sm">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2">
                Available for projects
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                Let’s build something{" "}
                <span className="gradient-text-static">production-ready</span>
              </h2>
              <p className="mt-2 text-sm text-alpha leading-relaxed">
                Full-stack delivery with Laravel, React, Next.js, and MySQL —
                from idea to live launch.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="btn">
                Start a conversation
              </Link>
              <a href={siteData.cvPdf} download className="transparent-button">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/#home" className="inline-block mb-4">
              <span className="text-2xl font-semibold tracking-tight text-white">
                <span className="text-primary">
                  {siteData.name.split(" ")[0]}
                </span>{" "}
                {siteData.name.split(" ").slice(1).join(" ")}
              </span>
            </Link>
            <p className="text-sm text-primary mb-3">{siteData.headline}</p>
            <p className="text-sm text-alpha leading-relaxed max-w-md mb-6">
              {siteData.tagline}
            </p>

            <div className="flex items-center gap-3">
              <SocialLink href={siteData.github} label="GitHub">
                <GithubIcon />
              </SocialLink>
              <SocialLink href={siteData.linkedin} label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href={siteData.facebook} label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href={`mailto:${siteData.email}`} label="Email">
                <MailIcon />
              </SocialLink>
              <SocialLink
                href={`https://wa.me/8801798165091`}
                label="WhatsApp"
              >
                <WhatsAppIcon />
              </SocialLink>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-alpha hover:text-primary transition"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white mb-4">
              Work
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 text-sm text-alpha hover:text-primary transition"
                >
                  <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                  All Projects
                </Link>
              </li>
              {projectCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/projects?category=${category.id}`}
                    className="group inline-flex items-center gap-2 text-sm text-alpha hover:text-primary transition"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteData.email}`}
                  className="flex items-start gap-3 text-alpha hover:text-primary transition"
                >
                  <span className="mt-0.5 text-primary">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  <span className="break-all">{siteData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteData.phoneHref}
                  className="flex items-start gap-3 text-alpha hover:text-primary transition"
                >
                  <span className="mt-0.5 text-primary">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  <span>{siteData.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-alpha">
                <span className="mt-0.5 text-primary">
                  <PinIcon className="h-4 w-4" />
                </span>
                <span>{siteData.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-alpha">
          <p>
            © {year} {siteData.name}. Crafted with care in{" "}
            {siteData.location}.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Open to opportunities
            </span>
            <a
              href={siteData.cvPdf}
              download
              className="hover:text-primary transition"
            >
              CV (PDF)
            </a>
            <Link href="/#home" className="hover:text-primary transition">
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

function GithubIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.537 2.865 8.369 6.839 9.725.5.094.682-.222.682-.482 0-.237-.009-.866-.014-1.7-2.782.62-3.369-1.38-3.369-1.38-.455-1.181-1.11-1.495-1.11-1.495-.908-.638.069-.625.069-.625 1.004.072 1.532 1.061 1.532 1.061.892 1.57 2.341 1.116 2.91.854.091-.662.35-1.116.636-1.372-2.22-.259-4.555-1.146-4.555-5.102 0-1.126.39-2.046 1.03-2.768-.103-.26-.447-1.302.098-2.714 0 0 .84-.276 2.75 1.055A9.27 9.27 0 0 1 12 6.918c.85.004 1.705.118 2.504.346 1.909-1.331 2.747-1.055 2.747-1.055.547 1.412.203 2.454.1 2.714.64.722 1.028 1.642 1.028 2.768 0 3.966-2.339 4.84-4.566 5.094.359.318.679.946.679 1.909 0 1.378-.012 2.489-.012 2.828 0 .263.18.58.688.481A10.03 10.03 0 0 0 22 12.253C22 6.586 17.523 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1-.004-4.123 2.062 2.062 0 0 1 .004 4.123zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073C0 18.063 4.388 23.027 10.125 23.927v-8.437H7.078v-3.417h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.417h-2.796v8.437C19.612 23.027 24 18.063 24 12.073z" />
    </svg>
  );
}

function MailIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  );
}

function PinIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
