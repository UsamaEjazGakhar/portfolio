/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BorderBeam } from "./BorderBeam";
import { FiPlay, FiPause, FiAward, FiStar, FiCpu, FiChevronRight, FiChevronLeft } from "react-icons/fi";

const certificates = [
  "/assets/competition_certificates/WhatsApp%20Image%202026-04-19%20at%2015.30.28.jpeg",
  "/assets/competition_certificates/WhatsApp%20Image%202026-04-19%20at%2015.30.29%20(1).jpeg",
  "/assets/competition_certificates/WhatsApp%20Image%202026-04-19%20at%2015.30.29%20(2).jpeg",
  "/assets/competition_certificates/WhatsApp%20Image%202026-04-19%20at%2015.30.29.jpeg",
  "/assets/competition_certificates/WhatsApp%20Image%202026-04-19%20at%2015.30.30.jpeg",
];

export default function FYP() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [certIndex, setCertIndex] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  // Auto-slide certificates
  useEffect(() => {
    const timer = setInterval(() => {
      setCertIndex((prev) => (prev + 1) % certificates.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-[#0c0c0c]">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#a8ff3e] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* Section label */}
        <div className="mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e]" />
          <span className="text-[#a8ff3e] text-[10px] font-mono tracking-[0.2em] uppercase">Final Year Project & Recognition</span>
        </div>

        {/* Main card */}
        <div className="relative border border-[#1e1e1e] bg-[#111]/40 backdrop-blur-xl rounded-2xl overflow-hidden">
          <BorderBeam duration={14} colorFrom="#a8ff3e" borderWidth={1.5} />

          {/* Media Section: Video Left, Slider Right */}
          <div className="grid lg:grid-cols-[0.6fr_1.4fr] gap-0 border-b border-[#1e1e1e] h-auto lg:h-[380px]">
            
            {/* VIDEO LEFT - Back to original contain behavior */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer border-r border-[#1e1e1e] bg-[#0c0c0c] flex items-center justify-center min-h-[300px]"
              onClick={togglePlay}
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <video
                  ref={videoRef}
                  src="/assets/fyp.mp4"
                  poster="/assets/humanarmmimicpic.jpg"
                  className="w-full h-full block"
                  style={{ maxHeight: "340px", objectFit: "contain" }}
                  loop
                  playsInline
                  onEnded={() => setPlaying(false)}
                  onPause={() => setPlaying(false)}
                  onPlay={() => setPlaying(true)}
                />
                
                {/* Thumbnail Overlay when paused */}
                <AnimatePresence>
                  {!playing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-0 flex items-center justify-center bg-[#0c0c0c]"
                    >
                      <img 
                        src="/assets/humanarmmimicpic.jpg" 
                        alt="FYP Thumbnail"
                        className="w-full h-full object-contain"
                        style={{ maxHeight: "340px" }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
                <div className="absolute inset-0 bg-black/35" />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative z-10 w-14 h-14 rounded-full bg-[#a8ff3e] flex items-center justify-center shadow-[0_0_30px_rgba(168,255,62,0.5)]"
                >
                  {playing ? (
                    <FiPause size={20} className="text-[#0c0c0c]" />
                  ) : (
                    <FiPlay size={20} className="text-[#0c0c0c] ml-1" />
                  )}
                </motion.div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0c0c0c]/80 backdrop-blur-md border border-[#1e1e1e] rounded-full px-4 py-1.5">
                <FiCpu size={12} className="text-[#a8ff3e]" />
                <span className="text-[10px] text-[#a8ff3e] font-mono tracking-widest uppercase">FYP Demo</span>
              </div>
            </motion.div>

            {/* CERTIFICATES SLIDER RIGHT - Horizontal Slide */}
            <div className="relative overflow-hidden bg-[#0c0c0c] flex flex-col justify-center min-h-[300px]">
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#0c0c0c]/80 backdrop-blur-md border border-[#1e1e1e] rounded-full px-4 py-1.5">
                <FiAward size={12} className="text-[#a8ff3e]" />
                <span className="text-[10px] text-[#a8ff3e] font-mono tracking-widest uppercase">{certIndex + 1}/{certificates.length} Honors</span>
              </div>
              
              <div className="relative w-full h-full flex items-center justify-center px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={certIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full h-full flex items-center justify-center p-2"
                  >
                    <div className="relative group/cert w-full h-full overflow-hidden flex items-center justify-center">
                      <img
                        src={certificates[certIndex]}
                        alt="Certificate"
                        className="max-w-full max-h-full object-contain grayscale opacity-80 group-hover/cert:grayscale-0 group-hover/cert:opacity-100 transition-all duration-700 shadow-2xl rounded-lg"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation arrows (optional but nice) */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button 
                    onClick={() => setCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length)}
                    className="w-8 h-8 rounded-full border border-[#1e1e1e] flex items-center justify-center text-[#555] hover:text-[#a8ff3e] transition-colors bg-[#111]"
                  >
                    <FiChevronLeft />
                  </button>
                  <button 
                    onClick={() => setCertIndex((prev) => (prev + 1) % certificates.length)}
                    className="w-8 h-8 rounded-full border border-[#1e1e1e] flex items-center justify-center text-[#555] hover:text-[#a8ff3e] transition-colors bg-[#111]"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT — below media */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid lg:grid-cols-[1fr_1fr] gap-0 px-5 sm:px-8 lg:px-10 py-8 sm:py-10"
          >
            {/* Left: description */}
            <div className="lg:pr-10 border-b lg:border-b-0 lg:border-r border-[#1e1e1e] pb-8 lg:pb-0">
              <h3 className="text-white text-2xl font-black tracking-tight mb-4">
                Robotic Arm —{" "}
                <span className="text-[#a8ff3e]">Real Time Control</span>
              </h3>
              <p className="text-[#888] text-sm leading-relaxed mb-6">
                Designed and built using{" "}
                <span className="text-white font-semibold">annealed aluminium</span>{" "}
                — mimics human arm movements in{" "}
                <span className="text-[#a8ff3e] font-semibold">real time</span>.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Robotics", "Annealed Aluminium", "Real-Time Control", "Arduino", "FYP"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] bg-[#a8ff3e]/5 border border-[#a8ff3e]/15 text-[#a8ff3e] rounded-full font-mono uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: achievements */}
            <div className="lg:pl-10 flex flex-col gap-6 justify-center pt-8 lg:pt-0">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#a8ff3e]/10 border border-[#a8ff3e]/20 flex items-center justify-center flex-shrink-0">
                  <FiAward size={18} className="text-[#a8ff3e]" />
                </div>
                <div>
                  <p className="text-white text-base font-bold leading-tight mb-1">Highest Grades</p>
                  <p className="text-[#555] text-xs">CS Department&apos;s Final Year Project evaluation — recognised for exceptional innovation.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#a8ff3e]/10 border border-[#a8ff3e]/20 flex items-center justify-center flex-shrink-0">
                  <FiStar size={18} className="text-[#a8ff3e]" />
                </div>
                <div>
                  <p className="text-white text-base font-bold leading-tight mb-1">National Competition</p>
                  <p className="text-[#555] text-xs">Selected by the university to compete at multiple inter-university competitions across Pakistan.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
