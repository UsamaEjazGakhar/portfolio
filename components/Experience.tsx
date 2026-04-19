"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BorderBeam } from "./BorderBeam";
import { FiBookOpen, FiMapPin, FiPlay } from "react-icons/fi";

const jobs = [
  {
    id: 2,
    company: "Peham Ltd",
    location: "",
    period: "July 2025 – Present",
    initials: "PL",
    color: "#a8ff3e",
    role: "Full Stack Engineer",
    tasks: [
      "Architected an advanced ERP system for showroom owners and custom administrative panels using Next.js and Laravel.",
      "Spearheaded the maintenance and performance optimization of 'Prospect Rocket', ensuring zero-downtime operations.",
      "Engineered high-performance backend APIs with Django, FastAPI, and Flask, utilizing PostgreSQL for scalable data persistence.",
      "Led end-to-end delivery of production-grade systems, focusing on security hardening, deployment strategies, and full-stack ownership.",
    ],
    letter: "/assets/phmexpletteer.pdf",
    skills: ["Next.js", "Laravel", "PostgreSQL", "Django", "FastAPI", "ERP Systems", "API Integration", "Web Maintenance"],
  },
  {
    id: 0,
    company: "Funprime Technology",
    location: "Islamabad",
    period: "May 2024 – July 2025",
    initials: "FT",
    color: "#a8ff3e",
    role: "Backend Developer",
    tasks: [
      "Product Architect for Umingle.com — an Omegle-inspired real-time platform handling high-concurrency video/text streaming.",
      "Engineered architecturally complex backend infrastructures and scalable APIs for multiple high-profile confidential enterprise projects.",
      "Developed core systems using Django, Flask, and FastAPI with dedicated message brokers like Redis for real-time data handling.",
      "Streamlined deployment workflows using Docker, managing CI/CD pipelines and high-availability cloud setups on AWS.",
    ],
    letter: "/assets/fppexpp.pdf",
    skills: ["Django", "Flask", "FastAPI", "PostgreSQL", "Redis", "MongoDB", "Docker", "CI/CD", "AWS"],
  },
  {
    id: 1,
    company: "GrowUp Tech Solutions",
    location: "NUST Incubation Center Rawalpindi (On-site)",
    period: "2022 – 2024",
    initials: "GT",
    color: "#a8ff3e",
    role: "Development Internship",
    tasks: [
      "Completed a rigorous 15-month internship: 6 months unpaid (focussed on learning) and 9 months paid (focussed on production delivery).",
      "Mastered high-fidelity website cloning and frontend architecture with pixel-perfect implementation standards.",
      "Engineered an advanced Gesture-Controlled Gaming Algorithm utilizing computer vision for next-gen user interaction.",
    ],
    videos: [
      { id: "v1", title: "Website Cloning", src: "/assets/internship_videoOne.mp4", thumbnail: "/assets/internprojectimage.jpg" },
      { id: "v2", title: "Gesture Gaming Algorithm", src: "/assets/gesturecontrolgame.mp4", thumbnail: "/assets/cargesturecontroller.jpg" },
    ],
    letter: "/assets/ExperienceLetterstartup.pdf",
    skills: ["HTML", "CSS", "JavaScript", "Prompt Engineering", "Machine Learning", "Problem Solving", "Algorithm Writing"]
  },
];



const education = [
  {
    period: "2020-2024",
    school: "National University Of Modern Languages, Rawalpindi",
    degree: "Bachelors Degree In Computer Science",
    mapUrl: "https://maps.google.com/maps?q=National%20University%20Of%20Modern%20Languages,%20Rawalpindi&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    period: "2018-2020",
    school: "FG Science Degree College, Wah Cantt",
    degree: "Higher Secondary School Education (FCS)",
    mapUrl: "https://maps.google.com/maps?q=FG%20Science%20Degree%20College,%20Wah%20Cantt&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    period: "2018",
    school: "Sir Syed Campus 4, Wah Cantt",
    degree: "Secondary School Education (Computer Science)",
    mapUrl: "https://maps.google.com/maps?q=Sir%20Syed%20Campus%204,%20Wah%20Cantt&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
];

function VideoWithThumbnail({ src, thumbnail }: { src: string; thumbnail?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-full bg-[#0c0c0c] rounded-xl overflow-hidden group/vid">
      <video
        ref={videoRef}
        src={src}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onEnded={() => setIsPlaying(false)}
        controls={isPlaying}
      />
      {!isPlaying && thumbnail && (
        <div 
          className="absolute inset-0 cursor-pointer z-10"
          onClick={handlePlay}
        >
          <img src={thumbnail} className="w-full h-full object-cover" alt="Thumbnail" />
          <div className="absolute inset-0 bg-[#0c0c0c]/40 group-hover/vid:bg-[#0c0c0c]/20 transition-colors flex items-center justify-center">
             <motion.div 
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               className="w-14 h-14 rounded-full bg-[#a8ff3e] flex items-center justify-center shadow-[0_0_30px_rgba(168,255,62,0.4)]"
             >
                <FiPlay size={24} className="text-[#0c0c0c] ml-1" />
             </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}


export default function Experience() {
  const [active, setActive] = useState(jobs[0].id);
  const [hoveredEdu, setHoveredEdu] = useState<number | null>(null);
  const [showLetter, setShowLetter] = useState(false);
  const job = jobs.find(j => j.id === active) || jobs[0];

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#0c0c0c]">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.1]"
        style={{ backgroundImage: 'radial-gradient(#1e1e1e 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
        <div className="text-center mb-14">
          <div className="section-label mx-auto w-fit mb-6">
            <span /> Experience
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            +3 years of passion for
            <br />
            <span className="text-[#a8ff3e]">
              programming techniques
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
              >_</motion.span>
            </span>
          </motion.h2>
        </div>

        {/* Experience Block */}
        <div className="border border-[#1e1e1e] bg-[#111]/50 backdrop-blur-md rounded-3xl p-6 lg:p-10 overflow-hidden relative mb-16">
          <BorderBeam duration={10} colorFrom="#a8ff3e" borderWidth={1.5} />

          <div className="grid lg:grid-cols-[0.8fr_2.2fr] gap-10 items-start relative z-10">
            {/* Left: Tab list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {jobs.map((j) => (
                <button
                  key={j.id}
                  onClick={() => setActive(j.id)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 ${active === j.id
                      ? "bg-[#0c0c0c] border-[#a8ff3e]/40 shadow-[0_0_15px_rgba(168,255,62,0.05)]"
                      : "bg-[#111]/30 border-[#1e1e1e] hover:border-[#333]"
                    }`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-[#0c0c0c] flex-shrink-0"
                    style={{ background: j.color }}
                  >
                    {j.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-bold tracking-tight">{j.company}</p>
                    <p className="text-[#555] text-[10px] uppercase font-mono mt-1 leading-none">{j.period}</p>
                  </div>
                  {active === j.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] flex-shrink-0 animate-pulse" />
                  )}
                </button>
              ))}
            </motion.div>

            {/* Right: Detail */}
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#0c0c0c]/80 border border-[#1e1e1e] rounded-2xl p-8 lg:p-10 min-h-[400px]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold text-[#0c0c0c]"
                  style={{ background: job.color }}
                >
                  {job.initials}
                </div>
                <div>
                  <h3 className="text-white font-black text-2xl tracking-tight">{job.company}</h3>
                  <p className="text-[#555] text-xs font-mono">{job.period} {job.location && `· ${job.location}`}</p>
                </div>
              </div>

              {/* EXPERIENCE LETTER (If available) - MOVED TO TOP */}
              {(job as any).letter && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-10 p-5 bg-[#a8ff3e]/5 border border-[#a8ff3e]/10 rounded-2xl w-fit"
                >
                  <p className="text-[10px] text-[#a8ff3e] font-mono uppercase mb-4 tracking-widest font-bold">Experience Letter</p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setShowLetter(true)}
                      className="flex items-center gap-3 px-5 py-2.5 bg-[#a8ff3e] text-black text-[11px] font-black uppercase tracking-tight rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(168,255,62,0.2)]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      View Letter
                    </button>
                    <a 
                      href={(job as any).letter} 
                      download="Experience_Letter.pdf"
                      className="flex items-center gap-3 px-5 py-2.5 bg-[#111] border border-[#1e1e1e] rounded-xl text-white text-[11px] font-bold uppercase hover:border-[#a8ff3e]/40 transition-all"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                      </svg>
                      Download
                    </a>
                  </div>
                </motion.div>
              )}

              <p className="text-[#a8ff3e] text-[10px] font-mono uppercase tracking-[0.2em] mb-6 block border-l-2 border-[#a8ff3e]/30 pl-4">
                {(job as any).role || "Senior Developer · Systems Architect"}
              </p>

              <ul className="space-y-4 mb-10">
                {((job as any).tasks || [
                  "Architecting and shipping production-level mobile and web ecosystems across Pakistan, UAE, and USA, specializing in high-performance stacks.",
                  "Expertise in FastAPI, React Native, and Swift UI for mobile, alongside MERN, Laravel, and NestJS for robust server-side architecture.",
                  "Delivering tailored 0-to-1 solutions for startups and enterprises with deep focus on scalability, security, and premium user experience.",
                ]).map((bullet: string, i: number) => (
                  <li key={i} className="flex gap-4 text-[#888] text-sm leading-relaxed">
                    <span className="text-[#a8ff3e] font-mono opacity-50 flex-shrink-0">0{i + 1}.</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* VIDEO PROOFS (If available) */}
              {(job as any).videos && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="grid sm:grid-cols-2 gap-6 mb-10"
                >
                  {((job as any).videos).map((vid: any) => (
                    <div key={vid.id} className="group relative">
                      <p className="text-[10px] text-[#555] font-mono uppercase mb-3 tracking-widest">{vid.title}</p>
                      <div className="aspect-video rounded-xl overflow-hidden border border-[#1e1e1e] relative">
                         <VideoWithThumbnail src={vid.src} thumbnail={vid.thumbnail} />
                         <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-[#a8ff3e]/10 transition-all rounded-xl z-20" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-8 border-t border-[#1e1e1e] mt-10"
              >
                <p className="text-[10px] text-[#555] font-mono uppercase mb-4 tracking-widest">Skills Learned</p>
                <div className="flex flex-wrap gap-2">
                  {((job as any).skills || []).map((s: string) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-[10px] uppercase font-mono bg-[#111] border border-[#1e1e1e] rounded-md text-[#555] hover:text-[#a8ff3e] hover:border-[#a8ff3e]/30 transition-all font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Education Section - NOW WITH BorderBeam */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[#1e1e1e] bg-[#111]/30 backdrop-blur-md rounded-3xl p-8 lg:p-12 relative overflow-hidden"
        >
          <BorderBeam duration={12} colorFrom="#a8ff3e" borderWidth={1.5} delay={5} />

          <div className="flex items-center gap-3 mb-10 relative z-10">
            <FiBookOpen className="text-[#a8ff3e] text-3xl" />
            <h3 className="text-white font-black text-4xl lg:text-5xl tracking-tighter">Education</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left: Timeline */}
            <div className="space-y-10 relative">
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[#1e1e1e]" />

              {education.map((e, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 group cursor-crosshair"
                  onMouseEnter={() => setHoveredEdu(idx)}
                  onMouseLeave={() => setHoveredEdu(null)}
                >
                  <div className={hoveredEdu === idx ? "absolute left-0 top-[10px] w-[11px] h-[11px] rounded-full bg-[#a8ff3e] shadow-[0_0_10px_#a8ff3e] z-10 transition-all" : "absolute left-0 top-[10px] w-[11px] h-[11px] rounded-full bg-[#1e1e1e] border border-[#333] z-10"} />

                  <div className="flex flex-col gap-1 transition-transform group-hover:translate-x-1">
                    <div className="flex flex-col gap-1">
                      <span className="text-[#555] font-mono text-sm leading-none">{e.period}:</span>
                      <span className={`font-bold text-lg lg:text-xl tracking-tight leading-tight transition-colors ${hoveredEdu === idx ? 'text-[#a8ff3e]' : 'text-[#a8ff3e]/80'}`}>
                        {e.school}
                      </span>
                    </div>
                    <p className="text-[#888] font-mono text-sm leading-none mt-1">
                      {e.degree}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Map/Flag Preview Box */}
            <div className="relative h-[300px] lg:h-[450px] w-full border border-[#1e1e1e] rounded-2xl overflow-hidden bg-[#0c0c0c] flex items-center justify-center shadow-2xl">
              <AnimatePresence mode="wait">
                {hoveredEdu !== null ? (
                  <motion.div
                    key={hoveredEdu}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <iframe
                      src={education[hoveredEdu].mapUrl}
                      className="w-full h-full grayscale invert opacity-70 contrast-125"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md border border-[#a8ff3e]/20 rounded-xl flex items-center gap-3">
                      <FiMapPin className="text-[#a8ff3e]" />
                      <span className="text-[10px] text-white uppercase font-mono tracking-widest">{education[hoveredEdu].school}</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="flag-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <motion.img
                      src="/assets/pakistan_flag_full.png"
                      alt="Pakistan Flag Full"
                      className="w-full h-full object-cover"
                      animate={{
                        scale: [1, 1.05, 1],
                        x: [-5, 5, -5],
                        y: [-5, 5, -5],
                        skewX: [-1, 1, -1]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* LETTER MODAL */}
      <AnimatePresence>
        {showLetter && (job as any).letter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10"
          >
            <div className="absolute inset-0 bg-[#0c0c0c]/90 backdrop-blur-md" onClick={() => setShowLetter(false)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl h-full bg-[#111] border border-[#1e1e1e] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e1e1e] bg-[#0c0c0c]">
                <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e]" />
                  Experience Letter Preview
                </h3>
                <button onClick={() => setShowLetter(false)} className="w-10 h-10 rounded-full bg-[#1e1e1e] flex items-center justify-center text-white hover:bg-[#a8ff3e] hover:text-black transition-all">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="flex-1 bg-white relative">
                <iframe src={`${(job as any).letter}#toolbar=0`} className="w-full h-full border-none" title="Experience Letter" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
