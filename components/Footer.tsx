"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { SiUpwork, SiFiverr, SiWhatsapp } from "react-icons/si";

const navLinks = [
  { label: "Home", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FiGithub, href: "https://github.com/usamadev", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/usamadev", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com/usamadev", label: "Twitter" },
  { icon: SiUpwork, href: "https://upwork.com/freelancers/~usamadev", label: "Upwork" },
  { icon: SiFiverr, href: "https://fiverr.com/usamadev", label: "Fiverr" },
  { icon: FiMail, href: "mailto:usamaejaz794@gmail.com", label: "Email" },
  { icon: SiWhatsapp, href: "https://wa.me/1234567890", label: "WhatsApp" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#1e1e1e] overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#a8ff3e]/30 to-transparent" />



      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid sm:grid-cols-2 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-[#a8ff3e] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="#0c0c0c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-bold text-white text-sm">Usama.dev</span>
            </a>
            <p className="text-[#555] text-xs leading-relaxed max-w-[220px]">
              Senior Full Stack Developer specializing in FastAPI, React Native, MERN Stack, Laravel & Next.js.
            </p>
            {/* Availability badge */}
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-[#a8ff3e] animate-pulse" />
              <span className="text-[#a8ff3e] text-xs">Available for hire</span>
            </div>
          </div>



          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get in touch</h4>
            <a
              href="mailto:usamaejaz794@gmail.com"
              className="text-[#555] text-xs hover:text-[#a8ff3e] transition-colors block mb-2"
            >
              usamaejaz794@gmail.com
            </a>
            <p className="text-[#333] text-xs mb-5">Pakistan · Remote Worldwide</p>

            {/* Social icons */}
            <div className="flex gap-2 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-[#111] border border-[#1e1e1e] flex items-center justify-center text-[#555] hover:text-[#a8ff3e] hover:border-[#a8ff3e]/40 transition-all"
                >
                  <s.icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#1e1e1e] mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-xs">
            © {year} Usama (usamadev). All rights reserved.
          </p>
          <p className="text-[#555] text-xs">
            Built with{" "}
            <span className="text-[#a8ff3e]">Next.js</span> &{" "}
            <span className="text-[#a8ff3e]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
