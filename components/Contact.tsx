"use client";
import { motion } from "framer-motion";
import { FiMail, FiCheck } from "react-icons/fi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";
import { BorderBeam } from "./BorderBeam";

const socials = [
  { icon: FiGithub, href: "https://github.com/usamadev", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/usamadev", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com/usamadev", label: "Twitter" },
  { icon: SiUpwork, href: "https://upwork.com/freelancers/~usamadev", label: "Upwork" },
  { icon: SiFiverr, href: "https://fiverr.com/usamadev", label: "Fiverr" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0c0c0c]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#a8ff3e] opacity-[0.025] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="section-label mx-auto w-fit">
            <span /> Contact
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Let&apos;s <span className="text-[#a8ff3e]">connect
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
              >_</motion.span>
            </span>
          </motion.h2>
          <p className="text-[#555] text-sm mt-3">
            Have a project in mind? I&apos;d love to hear about it.
          </p>

          {/* Simple Hire Me CTA OUTSIDE the div */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-white text-base font-medium">
              Let&apos;s work together and build something great.
            </p>
            <a
              href="mailto:usamaejaz794@gmail.com"
              className="px-6 py-2 bg-[#a8ff3e] text-[#0c0c0c] rounded-full text-sm font-bold hover:scale-105 transition-transform"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* PROTECTED CONTAINER WITH GREEN LIGHT EFFECT */}
        <div className="relative border border-[#1e1e1e] bg-[#111]/40 backdrop-blur-3xl rounded-3xl p-8 lg:p-12 overflow-hidden shadow-2xl">
          <BorderBeam duration={12} colorFrom="#a8ff3e" borderWidth={1.5} />

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {/* Email card with ORBITAL SPACESHIP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl p-8 flex flex-col gap-6 hover:border-[#a8ff3e]/30 transition-all group relative overflow-hidden"
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="absolute inset-x-0 top-1/2 h-12 w-12 border border-[#a8ff3e]/10 rounded-xl transform translate-y-1/2" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#a8ff3e] drop-shadow-[0_0_5px_#a8ff3e] z-20">
                    <IoRocketOutline size={14} className="rotate-45" />
                  </div>
                </motion.div>
                <div className="w-full h-full rounded-xl bg-[#a8ff3e]/10 border border-[#a8ff3e]/20 flex items-center justify-center relative z-10 transition-transform group-hover:scale-110 shadow-2xl">
                  <FiMail size={20} className="text-[#a8ff3e]" />
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-[#555] text-[10px] mb-1 font-mono uppercase tracking-[0.2em] font-black">Contact Email</p>
                <a
                  href="mailto:usamaejaz794@gmail.com"
                  className="text-white text-base lg:text-lg font-black hover:text-[#a8ff3e] transition-colors break-words"
                >
                  usamaejaz794@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl p-8 flex flex-col justify-center"
            >
              <p className="text-[#555] text-[10px] mb-4 font-mono uppercase tracking-[0.2em] font-black">Current Availability</p>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#a8ff3e] animate-pulse shadow-[0_0_10px_#a8ff3e]" />
                <span className="text-white text-lg font-black tracking-tight">Open to opportunities</span>
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {["Remote base", "Full-time", "Contract", "Consulting"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <FiCheck size={14} className="text-[#a8ff3e]" />
                    <span className="text-[#888] text-[11px] font-bold tracking-tight whitespace-nowrap uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl p-8 flex flex-col justify-center"
            >
              <p className="text-[#555] text-[10px] mb-5 font-mono uppercase tracking-[0.2em] font-black">Digital Handshakes</p>
              <div className="grid grid-cols-5 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="aspect-square rounded-xl bg-[#111] border border-[#1e1e1e] flex items-center justify-center text-[#555] hover:text-[#a8ff3e] hover:border-[#a8ff3e]/40 transition-all group shadow-xl"
                  >
                    <s.icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
