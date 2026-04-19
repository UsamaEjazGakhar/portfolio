"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiCpu,
  FiMonitor,
  FiClock,
} from "react-icons/fi";
import { BorderBeam } from "./BorderBeam";
import Marquee from "./Marquee";
import CountUp from "./CountUp";

const roles = [
  "Next.js & NestJS Expert",
  "Laravel & Django Architect",
  "MERN Stack & Node.js Specialist",
  "FastAPI & React Native Expert",
  "Modern {Full Stack} Technologies",
];

const stats = [
  { value: 3, label: "Years Experience", icon: <FiClock /> },
  { value: 100, label: "Projects Completed", icon: <FiMonitor /> },
  { value: 12, label: "Tech Mastered", icon: <FiCpu /> },
  { label: "GitHub", icon: <FiGithub /> },
];



// Custom Hexagon Frame with Revolving White Light
function HexagonFrame({ src }: { src: string }) {
  return (
    <div className="relative w-64 h-[360px] sm:w-80 sm:h-[450px] flex items-center justify-center group">
      {/* Outer Glow / Revolving Light Container */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: "polygon(50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)" }}
      >
        <div className="absolute inset-[-100%] aspect-square bg-[conic-gradient(from_0deg,transparent,white,transparent,transparent)] animate-spin-slow duration-[6s] blur-sm opacity-50" />
      </div>

      {/* Main Container */}
      <div
        className="absolute inset-[3px] bg-[#0c0c0c] border border-white/5 overflow-hidden z-10"
        style={{ clipPath: "polygon(50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)" }}
      >
        <div className="w-full h-full bg-[#111] flex items-center justify-center relative">
          <img
            src={src}
            alt="Usama"
            className="w-full h-full object-contain grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500 translate-y-10 scale-125"
            onError={(e) => {
              e.currentTarget.src = "https://ui-avatars.com/api/?name=Usama&background=111&color=a8ff3e&size=512";
            }}
          />

          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 p-3 bg-[#a8ff3e] flex items-center justify-center z-20 shadow-[0_0_20px_rgba(168,255,62,0.4)]"
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4L10 20" stroke="#0c0c0c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}



export default function Hero() {
  const introText = "Hey, I'm Usama (usamadev)";
  const [roleIndex, setRoleIndex] = useState(0);
  const [showResume, setShowResume] = useState(false);
  const [expandedAbout, setExpandedAbout] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-[#0c0c0c]"
    >
      <div className="absolute inset-0 z-0 opacity-[0.15]"
        style={{ backgroundImage: 'radial-gradient(#1e1e1e 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#a8ff3e] opacity-[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#a8ff3e] opacity-[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full flex flex-col gap-6 relative z-10">
        <div className="border border-[#1e1e1e] bg-[#111]/50 backdrop-blur-md rounded-3xl p-5 sm:p-8 lg:p-12 overflow-hidden relative">
          <BorderBeam duration={8} colorFrom="#a8ff3e" borderWidth={1.5} />

          <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <HexagonFrame src="/assets/avatar.png" />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <span className="inline-flex items-center gap-2 bg-[#0c0c0c] border border-[#a8ff3e]/20 rounded-full px-3 py-1 text-[10px] text-[#a8ff3e] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] animate-pulse" />
                  Available for hire
                </span>
              </motion.div>

              <div className="mb-4 flex flex-wrap gap-x-2">
                {introText.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 * i }}
                    className="text-sm text-white font-mono uppercase tracking-widest font-bold"
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-[3px] h-[1em] bg-[#a8ff3e] ml-2 align-middle"
                />
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight mb-6 uppercase">
                <span className="text-white block sm:inline">Senior </span>
                <span className="text-[#a8ff3e]">{"{"}Full Stack{"}"}</span>
                <br className="hidden sm:block" />
                <span className="block h-[1.3em] overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-110%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="block text-white lg:whitespace-nowrap"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-[#888] text-sm leading-relaxed max-w-xl mb-10 font-normal"
              >
                I&apos;m a <span className="text-white font-bold italic">Full Stack Developer</span> with
                expertise in cutting-edge technologies:{" "}
                <span className="text-white font-bold uppercase">Next.js</span>,{" "}
                <span className="text-white font-bold uppercase">Django</span>,{" "}
                <span className="text-white font-bold uppercase">Node.js</span>,{" "}
                <span className="text-white font-bold uppercase">Laravel</span>,{" "}
                <span className="text-white font-bold uppercase">React Native</span>, and{" "}
                <span className="text-white font-bold uppercase">FastAPI</span>.
              </motion.p>

              {/* EXPANDABLE ABOUT ME */}
              <div className="mb-10">
                <button 
                  onClick={() => setExpandedAbout(!expandedAbout)}
                  className="text-[#a8ff3e] font-bold text-xs uppercase tracking-widest hover:underline decoration-dotted underline-offset-8 transition-all flex items-center gap-2"
                >
                  {expandedAbout ? "[ Show Less ]" : "[ More About Me ]"}
                </button>

                <AnimatePresence>
                  {expandedAbout && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-6"
                    >
                      <div className="space-y-4 text-[#777] text-[13px] leading-relaxed max-w-xl border-l border-[#a8ff3e]/30 pl-6 pb-2">
                        <p>
                          My journey into software development started with a real passion for learning how digital systems are built. I began as a <span className="text-white font-bold">beginner</span>, teaching myself the basics by working on hands-on projects.
                        </p>
                        <p>
                          By analyzing complex designs and building my own <span className="text-white font-semibold italic">custom clones</span>, I mastered HTML, CSS, and JavaScript. This helped me grow from using simple tools like WordPress to building high-performance systems with <span className="text-white">Laravel, Django, Node.js, and Next.js</span>.
                        </p>
                        <p className="italic text-[#999]">
                          &quot;I focus on solving problems and always look for better ways to build scalable code with various databases like MongoDB, PostgreSQL, MySQL, and Firebase.&quot;
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-10 pt-8 border-t border-[#1e1e1e]">
                <div className="w-full max-w-md overflow-hidden opacity-80">
                  <Marquee duration="25s" gap="3.5rem" pauseOnHover={false}>
                    {["🔥", "⚛️", "🚀", "🍃", "🏗️"].map((icon, i) => (
                      <span key={i} className="text-2xl grayscale hover:grayscale-0 transition-all cursor-pointer">
                        {icon}
                      </span>
                    ))}
                  </Marquee>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-wrap gap-8 items-center">
                    {/* VIEW OPTION */}
                    <button
                      onClick={() => setShowResume(true)}
                      className="flex items-center gap-4 text-xs text-[#a8ff3e] hover:text-white transition-all group w-fit"
                    >
                      <span className="w-12 h-12 flex items-center justify-center bg-[#a8ff3e]/10 border border-[#a8ff3e]/20 rounded-2xl transition-all group-hover:bg-[#a8ff3e] group-hover:shadow-[0_0_15px_rgba(168,255,62,0.4)]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="group-hover:stroke-[#0c0c0c]" strokeWidth="2.5">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="font-mono uppercase tracking-wide font-bold">[ View Resume ]</span>
                    </button>

                    {/* DOWNLOAD OPTION */}
                    <a
                      href="/assets/resume.pdf"
                      download="Usama_Resume.pdf"
                      className="flex items-center gap-4 text-xs text-[#a8ff3e] hover:text-white transition-all group w-fit"
                    >
                      <span className="w-12 h-12 flex items-center justify-center bg-[#a8ff3e] rounded-2xl transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(168,255,62,0.2)]">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2v13M5 15l7 7 7-7M3 21h18" stroke="#0c0c0c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="font-mono uppercase underline decoration-dotted underline-offset-8 tracking-wide font-bold animate-pulse">[ Download CV ]</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Stats Block - BorderBeam REMOVED */}
        <div className="border border-[#1e1e1e] bg-[#111]/50 backdrop-blur-md rounded-3xl p-5 sm:p-10 overflow-hidden relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center justify-center relative z-10">
            {stats.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <div className="text-[#a8ff3e] text-2xl mb-4 opacity-50">{s.icon}</div>
                {"value" in s ? (
                  <div className="text-3xl lg:text-5xl font-black text-white leading-none mb-2">
                    <CountUp end={s.value as number} delay={i * 50} duration={800} />
                    <span className="text-[#a8ff3e] font-mono">+</span>
                  </div>
                ) : (
                  <div className="text-xl lg:text-2xl font-black text-white/20 uppercase tracking-widest mb-4">
                    GitHub
                  </div>
                )}
                <div className="text-[10px] text-[#555] uppercase tracking-[0.2em] font-bold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESUME MODAL */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#0c0c0c]/90 backdrop-blur-md"
              onClick={() => setShowResume(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl h-full bg-[#111] border border-[#1e1e1e] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e1e1e] bg-[#0c0c0c]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#a8ff3e] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0c0c0c" strokeWidth="3">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-sm tracking-tight">Resume Preview</h3>
                </div>
                <button
                  onClick={() => setShowResume(false)}
                  className="w-10 h-10 rounded-full bg-[#1e1e1e] flex items-center justify-center text-white hover:bg-[#a8ff3e] hover:text-[#0c0c0c] transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Viewport */}
              <div className="flex-1 bg-white relative">
                <iframe
                  src="/assets/resume.pdf#toolbar=0"
                  className="w-full h-full border-none"
                  title="Usama Resume"
                />
              </div>

              {/* Footer CTA */}
              <div className="px-6 py-4 border-t border-[#1e1e1e] bg-[#0c0c0c] flex items-center justify-end gap-4">
                <a
                  href="/assets/resume.pdf"
                  download="Usama_Resume.pdf"
                  className="px-6 py-2.5 bg-[#a8ff3e] text-[#0c0c0c] rounded-xl text-xs font-bold hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
