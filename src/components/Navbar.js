"use client";

import { navItems } from "@/lib/navItems";
import { siteData } from "@/lib/siteData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("/#home");

  useEffect(() => {
    if (pathname?.startsWith("/projects")) {
      setActive("/#projects");
      return;
    }

    const ids = navItems.map((item) => item.href.replace("/#", ""));

    const onScroll = () => {
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

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <nav className="w-full fixed top-1 z-50">
      <div className="max-w-6xl bg-[#ffffff36] md:bg-[#f1f1f113] backBlur rounded-lg shadow-md px-5 py-2 mx-3 md:mx-auto flex items-center justify-between">
        <Link
          href="/#home"
          onClick={handleNavClick}
          className="text-white font-semibold tracking-wide text-sm sm:text-base"
        >
          <span className="text-primary">{siteData.name.split(" ")[0]}</span>{" "}
          {siteData.name.split(" ").slice(1).join(" ")}
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 8H13.75M5 12H19M10.25 16L19 16" />
          </svg>
        </button>

        <div
          className={`absolute top-11 left-0 md:static ${
            isMenuOpen ? "flex" : "hidden md:flex"
          } flex-col md:flex-row bg-dark md:bg-transparent w-full md:w-auto gap-4 md:gap-6 border md:border-0 rounded-md border-white/20 p-3 md:p-0`}
        >
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              onClick={handleNavClick}
              className={`text-sm font-semibold text-white hover:text-primary transition ${
                active === item.href ? "border-b-2 border-b-primary" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
