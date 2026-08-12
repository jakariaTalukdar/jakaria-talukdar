"use client";

import { siteData } from "@/lib/siteData";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function GetInTouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${siteData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full bg-contact py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Get In"
          accent="Touch"
          subtitle="Have a project in mind? Let's build something production-ready together."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <Reveal>
            <div className="flex flex-col gap-y-5 relative md:border-r md:border-gray-700 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Let&apos;s Talk
              </h3>
              <div className="flex items-center gap-x-1">
                <div className="w-20 h-1 rounded-lg bg-primary" />
                <div className="w-3 h-1 rounded-lg bg-primary" />
                <div className="w-7 h-1 rounded-lg bg-primary" />
              </div>
              <p className="text-sm text-alpha">
                Open to full-stack roles, freelance work, and collaboration on
                Laravel, React, and Next.js products.
              </p>

              <div className="space-y-3 text-sm text-gray-300">
                <a
                  href={siteData.phoneHref}
                  className="flex items-center gap-x-2 hover:text-primary transition"
                >
                  <PhoneIcon />
                  <span>{siteData.phone}</span>
                </a>
                <a
                  href={`mailto:${siteData.email}`}
                  className="flex items-center gap-x-2 hover:text-primary transition"
                >
                  <MailIcon />
                  <span>{siteData.email}</span>
                </a>
                <div className="flex items-center gap-x-2">
                  <PinIcon />
                  <span>{siteData.location}</span>
                </div>
                <a
                  href={siteData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 hover:text-primary transition"
                >
                  <GithubIcon />
                  <span>github.com/jakariaTalukdar</span>
                </a>
                <a
                  href={siteData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 hover:text-primary transition"
                >
                  <LinkedInIcon />
                  <span>linkedin.com/in/jakaria-talukdar</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href={siteData.cvPdf} download className="btn">
                  Download CV (PDF)
                </a>
                <a href={siteData.cvDocx} download className="transparent-button">
                  Download DOCX
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Send a Message
              </h3>
              <p className="text-sm text-alpha">
                Fill in the form — it opens your email client ready to send.
              </p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="p-4 rounded-md text-sm bg-white/5 border border-white/15 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="p-4 rounded-md text-sm bg-white/5 border border-white/15 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary"
              />
              <textarea
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                required
                className="p-4 rounded-md text-sm bg-white/5 border border-white/15 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary resize-y"
              />
              <button type="submit" className="btn self-start">
                Submit
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-primary shrink-0">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-primary shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-primary shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
