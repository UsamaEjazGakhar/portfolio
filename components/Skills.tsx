"use client";
import { motion } from "framer-motion";
import { BorderBeam } from "./BorderBeam";
import {
  SiJavascript, SiReact, SiVite, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiFastapi, SiFirebase,
  SiLaravel, SiPhp, SiMysql, SiNextdotjs,
  SiGooglecloud, SiPostgresql, SiSupabase, SiPython
} from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";
import { FiLayers } from "react-icons/fi";

const skillCategories = [
  {
    category: "Front-End",
    techs: "JavaScript, Typescript, React JS, Vue JS",
  },
  {
    category: "Mobile Application",
    techs: "React Native, Swift UI, Kotlin",
  },
  {
    category: "Back-End",
    techs: "Laravel, Node.js, Express.js, FastAPI",
  },
  {
    category: "Databases",
    techs: "MySQL, PostgreSQL, MongoDB, Firebase, Supabase",
  },
  {
    category: "Tools & Platforms",
    techs: "Git, JIRA, ClickUp, Slack",
  },
  {
    category: "Others",
    techs: "RESTful APIs",
  },
];

const row1Logos = [
  { icon: <SiJavascript size={30} />, color: "#F7DF1E" },
  { icon: <SiReact size={30} />, color: "#61DAFB" },
  { icon: <SiTailwindcss size={30} />, color: "#06B6D4" },
  { icon: <SiFastapi size={30} />, color: "#05998B" },
  { icon: <SiNextdotjs size={30} />, color: "#FFFFFF" },
  { icon: <SiMongodb size={30} />, color: "#47A248" },
];

const row2Logos = [
  { icon: <SiLaravel size={30} />, color: "#FF2D20" },
  { icon: <SiPhp size={30} />, color: "#777BB4" },
  { icon: <SiNodedotjs size={30} />, color: "#339933" },
  { icon: <SiFirebase size={30} />, color: "#FFCA28" },
  { icon: <SiMysql size={30} />, color: "#4479A1" },
  { icon: <SiSupabase size={30} />, color: "#3ECF8E" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#0c0c0c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="mb-14 text-center lg:text-left">
          <p className="text-[#a8ff3e] text-[10px] font-mono tracking-[0.2em] mb-4 flex items-center justify-center lg:justify-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e]" />
            Technologies
          </p>
          {/* RESTORED SIZE + BLINKING UNDERSCORE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            My <span className="text-[#a8ff3e]">Skills
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
              >_</motion.span>
            </span>
          </motion.h2>
        </div>

        <div className="relative border border-[#1e1e1e] bg-[#111]/40 backdrop-blur-xl rounded-3xl p-5 sm:p-8 lg:p-16 overflow-hidden min-h-[500px]">
          <BorderBeam duration={12} colorFrom="#a8ff3e" borderWidth={1.5} />

          <div className="absolute top-0 -right-20 opacity-30 pointer-events-none hidden lg:block z-0">
            <div className="relative w-[350px] h-[350px] flex items-center justify-center">
              <div className="absolute inset-0 border border-[#a8ff3e]/30 rounded-full" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[0px] w-full h-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#a8ff3e] drop-shadow-[0_0_8px_#a8ff3e]">
                  <IoRocketOutline size={20} className="rotate-45" />
                </div>
              </motion.div>

              <div className="absolute inset-20 border border-[#a8ff3e]/15 rounded-full" />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[80px] w-[190px] h-[190px]"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[#a8ff3e]/40">
                  <IoRocketOutline size={14} className="-rotate-[135deg]" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center relative z-10">
            <div className="space-y-6 overflow-hidden">
              <div className="flex gap-4 overflow-hidden relative group/row1">
                <motion.div
                  animate={{ x: "-50%" }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex gap-4 w-max"
                >
                  {[...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos].map((logo, i) => (
                    <div key={i} className="w-16 h-16 lg:w-20 lg:h-20 bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl flex items-center justify-center transition-all hover:border-[#a8ff3e]/40 shrink-0 group">
                      <div className="opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_currentColor] transition-all" style={{ color: logo.color }}>
                        {logo.icon}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="flex gap-4 overflow-hidden relative group/row2">
                <motion.div
                  animate={{ x: [ "-50%", "0%" ] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex gap-4 w-max"
                >
                  {[...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos].map((logo, i) => (
                    <div key={i} className="w-16 h-16 lg:w-20 lg:h-20 bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl flex items-center justify-center transition-all hover:border-[#a8ff3e]/40 shrink-0 group">
                      <div className="opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_currentColor] transition-all" style={{ color: logo.color }}>
                        {logo.icon}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="space-y-6 lg:pr-32">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#a8ff3e] flex-shrink-0 shadow-[0_0_10px_#a8ff3e] group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="text-white text-sm font-black uppercase tracking-widest mb-1 group-hover:text-[#a8ff3e] transition-colors">
                      {cat.category}:
                    </h4>
                    <p className="text-[#555] text-xs font-mono leading-relaxed max-w-lg">
                      {cat.techs}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ACADEMIC WORK SECTION */}
        <div className="mt-24">
          <div className="mb-10 lg:text-left">
            <p className="text-[#a8ff3e] text-[10px] font-mono tracking-[0.2em] mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e]" />
              Academic Sector
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight uppercase">
              Academic <span className="text-[#a8ff3e]">Work & Services</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Coding Instructor */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               whileHover={{ y: -5 }}
               className="p-6 sm:p-8 bg-[#111]/30 border border-[#1e1e1e] rounded-3xl hover:border-[#a8ff3e]/40 transition-all border-t border-t-[#a8ff3e]/20"
            >
              <div className="mb-6 w-12 h-12 rounded-xl bg-[#a8ff3e]/10 flex items-center justify-center text-[#a8ff3e]">
                <SiPython size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Coding Instructor</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-6">
                Professional instruction and mentorship in core programming paradigms, empowering students to master industry-standard languages.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-widest text-[#a8ff3e] font-bold">
                <span className="px-3 py-1 bg-[#1e1e1e] rounded-lg">C++</span>
                <span className="px-3 py-1 bg-[#1e1e1e] rounded-lg">Java</span>
                <span className="px-3 py-1 bg-[#1e1e1e] rounded-lg">Python</span>
              </div>
            </motion.div>

            {/* Academic Writing & Assistance */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               whileHover={{ y: -5 }}
               className="p-6 sm:p-8 bg-[#111]/30 border border-[#1e1e1e] rounded-3xl hover:border-[#a8ff3e]/40 transition-all border-t border-t-[#a8ff3e]/20"
            >
              <div className="mb-6 w-12 h-12 rounded-xl bg-[#a8ff3e]/10 flex items-center justify-center text-[#a8ff3e]">
                 <SiNextdotjs size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Student Assistance</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-6">
                Comprehensive project assistance and academic writing services tailored for <span className="text-white font-bold italic">BS, MS, and PhD</span> candidates.
              </p>
              <div className="space-y-2 border-l border-[#a8ff3e]/30 pl-4">
                <p className="text-white text-[10px] font-bold uppercase tracking-wider">Research Support</p>
                <p className="text-[#555] text-[10px] font-mono leading-none">Thesis & Final Year Projects</p>
              </div>
            </motion.div>

            {/* Academic Services */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               whileHover={{ y: -5 }}
               className="p-6 sm:p-8 bg-[#111]/30 border border-[#1e1e1e] rounded-3xl hover:border-[#a8ff3e]/40 transition-all border-t border-t-[#a8ff3e]/20"
            >
              <div className="mb-6 w-12 h-12 rounded-xl bg-[#a8ff3e]/10 flex items-center justify-center text-[#a8ff3e]">
                 <FiLayers size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Academic Services</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-6">
                End-to-end support for <span className="text-white font-bold">Research Papers</span>, technical assignments, and high-fidelity simulations using <span className="text-white font-bold">Cisco Packet Tracer</span>.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-widest text-[#a8ff3e] font-bold">
                <span className="px-3 py-1 bg-[#1e1e1e] rounded-lg">Assignments</span>
                <span className="px-3 py-1 bg-[#1e1e1e] rounded-lg">Lab Reports</span>
                <span className="px-3 py-1 bg-[#1e1e1e] rounded-lg">Technical Writing</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
