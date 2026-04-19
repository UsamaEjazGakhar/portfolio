"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BorderBeam } from "./BorderBeam";

type Project = {
  title: string;
  subtitle: string;
  status: string;
  description: string;
  logoText: string;
  client: string;
  time: string;
  technologies: string;
  tags: string[];
  github?: string;
  website?: string;
};

const filters = [
  "All",
  "Laravel",
  "FastAPI",
  "MERN Stack",
  "React Native",
  "Web Development",
  "Mobile Apps",
  "Open Source",
];

const liveProjects: Project[] = [];

const localhostProjects: Project[] = [
  {
    title: "Sign-Sense Recognition",
    subtitle: "Accessibility Tool",
    status: "Localhost / Ongoing",
    logoText: "SSRS",
    description: "Real-time sign language recognition system for speech-impaired individuals. Translates complex gestures into audible speech using computer vision.",
    client: "Independent Research",
    time: "4 Months",
    technologies: "Python, OpenCV, TensorFlow",
    tags: ["Machine Learning", "Open Source"],
  },
  {
    title: "School Management",
    subtitle: "Complete LMS",
    status: "Localhost / Ongoing",
    logoText: "EFMS",
    description: "A full-scale School Management System built on Laravel for comprehensive administrative, academic, and financial tracking.",
    client: "Academic Resource",
    time: "6 Months",
    technologies: "Laravel, Vue.js, MySQL",
    tags: ["Laravel", "Web Development"],
  },
  {
    title: "Neuro Predictor",
    subtitle: "Medical AI Detection",
    status: "Localhost / Ongoing",
    logoText: "NPPD",
    description: "A diagnostic tool utilizing ML to predict 5 common types of neurodegenerative diseases, aiding early clinical intervention.",
    client: "Research Lab",
    time: "5 Months",
    technologies: "Python, Scikit-learn",
    tags: ["Machine Learning", "Research"],
  },
  {
    title: "Be FIT",
    subtitle: "Exercise Pose Tracker",
    status: "Localhost / Ongoing",
    logoText: "BFIT",
    description: "Real-time pose checking application that monitors workout techniques and provides instant feedback on posture and alignment.",
    client: "Fitness Community",
    time: "3 Months",
    technologies: "Python, MediaPipe, React",
    tags: ["Web Development", "Machine Learning"],
  },
  {
    title: "CoderAI",
    subtitle: "Autonomous Coding Agent",
    status: "Localhost / Ongoing",
    logoText: "CAI",
    description: "An autonomous agent that executes end-to-end coding tasks, bug fixing, and refactoring based on natural language prompts.",
    client: "Developer Ecosystem",
    time: "4 Months",
    technologies: "OpenAI API, Node.js",
    tags: ["Open Source", "Web Development"],
  },
  {
    title: "Umegle",
    subtitle: "Global Dating App",
    status: "Localhost / Ongoing",
    logoText: "UMGL",
    description: "A high-performance global dating application featuring real-time matching, secure chat, and global connectivity nodes.",
    client: "Self Project",
    time: "5 Months",
    technologies: "MERN Stack, Socket.io",
    tags: ["MERN Stack", "Mobile Apps"],
  },
  {
    title: "Quran Recitation Checker",
    subtitle: "Tajweed AI Validator",
    status: "Localhost / Ongoing",
    logoText: "TCAI",
    description: "Speech-processing system that provides real-time Tajweed validation and pronunciation correction for Quranic recitation.",
    client: "Religious Education",
    time: "6 Months",
    technologies: "Speech Processing, DL",
    tags: ["Machine Learning", "Web Development"],
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Filter for localhost projects only
  const filteredLocalhost = useMemo(() => {
    return activeTab === "All" ? localhostProjects : localhostProjects.filter((p) => p.tags.includes(activeTab));
  }, [activeTab]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  useEffect(() => {
    if (isPaused || filteredLocalhost.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredLocalhost.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused, filteredLocalhost]);

  const currentProject = filteredLocalhost[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredLocalhost.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredLocalhost.length) % filteredLocalhost.length);
  };

  return (
    <section id="portfolio" className="py-24 relative bg-[#0c0c0c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* 1. SELF-INITIATED PROJECTS SECTION (SLIDER) - MOVED TO TOP */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left">
            <p className="text-[#a8ff3e] text-[10px] font-mono tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e]" />
              Localhost / Development
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight uppercase">
              Self <span className="text-[#a8ff3e]">Projects</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveTab(f)}
                className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest rounded-full border transition-all duration-300 ${activeTab === f
                  ? "bg-[#a8ff3e] border-[#a8ff3e] text-[#0c0c0c] font-bold"
                  : "bg-transparent border-[#1e1e1e] text-[#555] hover:border-[#333] hover:text-[#888]"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative border border-[#1e1e1e] bg-[#111]/40 backdrop-blur-xl rounded-3xl p-5 sm:p-8 lg:p-16 min-h-[580px] flex items-center overflow-hidden mb-24 pb-20 sm:pb-16"
        >
          <BorderBeam duration={12} colorFrom="#a8ff3e" borderWidth={1.5} />

          <div className="relative w-full h-auto min-h-[500px] overflow-hidden">
            <AnimatePresence mode="wait">
              {currentProject && (
                <motion.div
                  key={currentProject.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-20 items-center w-full h-full py-4 lg:py-0"
                >
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="relative group"
                    >
                      <span className="text-7xl lg:text-9xl font-black text-white tracking-tighter select-none opacity-20">
                        {currentProject.logoText.substring(0, 4)}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl lg:text-6xl font-black text-[#a8ff3e] drop-shadow-[0_0_20px_rgba(168,255,62,0.3)] text-center px-4">
                          {currentProject.subtitle}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="space-y-6 lg:space-y-8 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div className="flex items-center gap-4 flex-wrap mb-4">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                          {currentProject.title}
                        </h3>
                        <span className="px-3 py-1 bg-[#a8ff3e]/10 border border-[#a8ff3e]/20 text-[#a8ff3e] text-[10px] font-bold rounded-md flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] animate-pulse" />
                          {currentProject.status}
                        </span>
                      </div>

                      <p className="text-[#888] text-sm leading-relaxed max-w-xl line-clamp-4">
                        {currentProject.description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="space-y-2 pt-6 border-t border-[#1e1e1e]"
                    >
                      <p className="text-[#a8ff3e] text-[10px] font-mono uppercase tracking-[0.2em] mb-4">Project Info</p>

                      <div className="grid grid-cols-[1fr_2fr] gap-4 py-3 border-b border-[#1e1e1e]/50">
                        <span className="text-white text-xs font-bold uppercase tracking-widest leading-none">Client</span>
                        <span className="text-[#555] text-xs font-mono leading-none">{currentProject.client}</span>
                      </div>

                      <div className="grid grid-cols-[1fr_2fr] gap-4 py-3 border-b border-[#1e1e1e]/50">
                        <span className="text-white text-xs font-bold uppercase tracking-widest leading-none">Completion Time</span>
                        <span className="text-[#555] text-xs font-mono leading-none">{currentProject.time}</span>
                      </div>

                      <div className="grid grid-cols-[1fr_2fr] gap-4 py-3 border-b border-[#1e1e1e]/50">
                        <span className="text-white text-xs font-bold uppercase tracking-widest leading-none">Technologies</span>
                        <span className="text-[#555] text-xs font-mono leading-none">{currentProject.technologies}</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex gap-6 pt-6"
                    >
                      {currentProject.website && (
                        <a
                          href={currentProject.website} target="_blank" rel="noreferrer"
                          className="text-white hover:text-[#a8ff3e] transition-colors text-xs font-bold uppercase tracking-widest border-b border-[#333] hover:border-[#a8ff3e] pb-1"
                        >
                          View Website
                        </a>
                      )}
                      {currentProject.github && (
                        <a
                          href={currentProject.github} target="_blank" rel="noreferrer"
                          className="text-white hover:text-[#a8ff3e] transition-colors text-xs font-bold uppercase tracking-widest border-b border-[#333] hover:border-[#a8ff3e] pb-1"
                        >
                          Github Repository
                        </a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 flex gap-3 sm:gap-4 z-30">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#a8ff3e]/10 border border-[#a8ff3e]/20 flex items-center justify-center text-[#a8ff3e] hover:bg-[#a8ff3e] hover:text-[#0c0c0c] transition-all duration-300 disabled:opacity-30"
              disabled={filteredLocalhost.length <= 1}
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#a8ff3e]/10 border border-[#a8ff3e]/20 flex items-center justify-center text-[#a8ff3e] hover:bg-[#a8ff3e] hover:text-[#0c0c0c] transition-all duration-300 disabled:opacity-30"
              disabled={filteredLocalhost.length <= 1}
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* 2. LIVE PROJECTS SECTION - MOVED TO BOTTOM & EMPTIED */}
        <div className="mt-12">
          <p className="text-[#a8ff3e] text-[10px] font-mono tracking-[0.2em] mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e]" />
            Live
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight uppercase mb-10">
            Live <span className="text-[#a8ff3e]">Projects</span>
          </h2>
          
          <div className="border border-dashed border-[#1e1e1e] rounded-3xl p-10 sm:p-20 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#111] border border-[#1e1e1e] flex items-center justify-center mb-6">
               <FiExternalLink className="text-[#333]" size={30} />
            </div>
            <h3 className="text-white font-bold text-xl mb-2 italic opacity-50">Industrial Projects Coming Soon</h3>
            <p className="text-[#555] text-xs max-w-sm font-mono">Real-world production environments and enterprise solutions in progress. Stay tuned for future deployments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
