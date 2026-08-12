import { navItems } from "@/lib/navItems";
import { siteData } from "@/lib/siteData";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">
            <span className="text-primary">{siteData.name.split(" ")[0]}</span>{" "}
            {siteData.name.split(" ").slice(1).join(" ")}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {siteData.headline} ({siteData.headlineDetail}). Based in{" "}
            {siteData.location}.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="hover:text-primary transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a
                href={`mailto:${siteData.email}`}
                className="hover:text-primary transition"
              >
                {siteData.email}
              </a>
            </li>
            <li>
              <a
                href={siteData.phoneHref}
                className="hover:text-primary transition"
              >
                {siteData.phone}
              </a>
            </li>
            <li>
              <a
                href={siteData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={siteData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={siteData.cvPdf}
                download
                className="hover:text-primary transition"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} {siteData.name}. All rights reserved.
      </div>
    </footer>
  );
}
