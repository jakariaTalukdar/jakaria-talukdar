"use client";

import { navItems } from "@/lib/navItems";
import { siteData } from "@/lib/siteData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("/#home");

  useEffect(() => {
    if (pathname?.startsWith("/projects")) {
      setActive("/#projects");
      return;
    }

    const ids = navItems.map((item) => item.href.replace("/#", ""));

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offset = window.scrollY + 120;
      let current = "/#home";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) {
          current = `/#${id}`;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 md:px-4">
        <div
          className={`mx-auto max-w-6xl transition-all duration-300 ${
            scrolled || isMenuOpen
              ? "bg-[#0a0a17]/85 border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              : "bg-[#ffffff18] md:bg-[#f1f1f113] border-white/10"
          } backBlur rounded-2xl border px-4 py-3 md:px-5`}
        >
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/#home"
              onClick={closeMenu}
              className="relative z-10 text-white font-semibold tracking-wide text-base sm:text-lg md:text-xl"
            >
              <span className="text-primary">{siteData.name.split(" ")[0]}</span>{" "}
              <span className="text-white/90">
                {siteData.name.split(" ").slice(1).join(" ")}
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.href;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-white/80 hover:text-primary hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                    {isActive ? (
                      <span className="absolute left-1/2 -bottom-0.5 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                    ) : null}
                  </Link>
                );
              })}
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 md:hidden ${
                isMenuOpen
                  ? "border-primary bg-primary text-black"
                  : "border-white/15 bg-white/5 text-white hover:border-primary/50"
              }`}
            >
              <span className="sr-only">{isMenuOpen ? "Close" : "Menu"}</span>
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 origin-center ${
                    isMenuOpen
                      ? "top-1/2 -translate-y-1/2 rotate-45"
                      : "top-0 translate-y-0 rotate-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 origin-center ${
                    isMenuOpen
                      ? "top-1/2 -translate-y-1/2 -rotate-45"
                      : "top-full -translate-y-full rotate-0"
                  }`}
                />
              </span>
            </button>
          </div>

          {/* Mobile dropdown panel */}
          <div
            className={`md:hidden grid transition-all duration-300 ease-out ${
              isMenuOpen
                ? "grid-rows-[1fr] opacity-100 mt-3"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const isActive = active === item.href;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={closeMenu}
                      style={{
                        transitionDelay: isMenuOpen ? `${index * 40}ms` : "0ms",
                      }}
                      className={`group flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium transition-all duration-300 ${
                        isMenuOpen
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-2 opacity-0"
                      } ${
                        isActive
                          ? "bg-primary/15 text-primary border border-primary/30"
                          : "text-white/85 border border-transparent hover:bg-white/5 hover:text-primary hover:border-white/10"
                      }`}
                    >
                      <span>
                        {/* <span
                          className={`flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-semibold transition ${
                            isActive
                              ? "bg-primary text-black"
                              : "bg-white/5 text-alpha group-hover:text-primary"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span> */}
                        {item.name}
                      </span>
                      <span
                        className={`transition-transform duration-200 ${
                          isActive
                            ? "text-primary translate-x-0"
                            : "text-white/30 group-hover:text-primary group-hover:translate-x-0.5"
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2 p-1">
                <Link
                  href="/projects"
                  onClick={closeMenu}
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-center text-xs font-semibold text-white hover:border-primary/50 hover:text-primary transition"
                >
                  All Projects
                </Link>
                <Link
                  href="/#contact"
                  onClick={closeMenu}
                  className="rounded-xl bg-primary px-3 py-3 text-center text-xs font-semibold text-black hover:brightness-110 transition"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
}
