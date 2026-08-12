import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickySocial from "@/components/StickySocial";

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jakaria Talukdar — Full Stack Developer",
  description:
    "Full Stack Developer with 2+ years of experience delivering 150+ web applications using Laravel, React, Next.js, and MySQL. Based in Dhaka, Bangladesh.",
  keywords: [
    "Jakaria Talukdar",
    "Full Stack Developer",
    "Laravel",
    "React",
    "Next.js",
    "MySQL",
    "Dhaka",
    "Portfolio",
  ],
  openGraph: {
    title: "Jakaria Talukdar — Full Stack Developer",
    description:
      "Full Stack Developer specializing in Laravel, React, Next.js, and MySQL. 150+ projects delivered.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickySocial />
      </body>
    </html>
  );
}
