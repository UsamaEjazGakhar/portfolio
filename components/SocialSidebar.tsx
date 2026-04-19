"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { SiUpwork, SiFiverr, SiWhatsapp } from "react-icons/si";

const socials = [
  { icon: FiGithub, href: "https://github.com/usamadev", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/usamadev", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com/usamadev", label: "Twitter" },
  { icon: SiUpwork, href: "https://upwork.com/freelancers/~usamadev", label: "Upwork" },
  { icon: SiFiverr, href: "https://fiverr.com/usamadev", label: "Fiverr" },
  { icon: FiMail, href: "mailto:usamaportfolio@gmail.com", label: "Email" },
  { icon: SiWhatsapp, href: "https://wa.me/1234567890", label: "WhatsApp" },
];

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="social-sidebar hidden lg:flex"
    >
      {socials.map((s, i) => (
        <motion.a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          whileHover={{ scale: 1.2, color: "#a8ff3e" }}
          className="text-[#555] hover:text-[#a8ff3e] transition-colors"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <s.icon size={16} />
        </motion.a>
      ))}
      <div className="w-px h-16 bg-[#1e1e1e] mx-auto mt-2" />
    </motion.div>
  );
}
