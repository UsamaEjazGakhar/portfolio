"use client";
import { motion } from "framer-motion";
import { FiCode, FiLayers, FiZap, FiTerminal } from "react-icons/fi";

const highlights = [
  {
    icon: FiTerminal,
    title: "Core Foundations",
    desc: "Systematic mastery of web standards and design patterns, initiated through an autodidactic learning path.",
  },
  {
    icon: FiLayers,
    title: "Engineering Precision",
    desc: "Extensive experience in reverse-engineering high-fidelity designs into pixel-perfect, performant codebases.",
  },
  {
    icon: FiZap,
    title: "Stack Agnostic",
    desc: "Seamless transition across diverse ecosystems—from modern CMS platforms to distributed backend infrastructures.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0c0c0c]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a8ff3e] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#a8ff3e] opacity-[0.01] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          
          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label mb-6">
              <span /> Technical Evolution
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-8 tracking-tight">
              From <span className="text-[#a8ff3e]">Beginner</span> to <br />
              Full-Stack <span className="text-[#a8ff3e]">Architect</span>.
            </h2>
            
            <div className="space-y-6 text-[#777] text-lg leading-relaxed font-medium">
              <p>
                My entry into software engineering was driven by an autodidactic approach to understanding complex digital systems. I initiated my technical journey as a <span className="text-white font-bold">beginner</span>, focused on internalizing core web foundations through the lens of engineering best practices.
              </p>
              <p>
                By reverse-engineering high-fidelity interfaces and implementing pixel-perfect custom clones, I cultivated a deep proficiency in <span className="text-white font-semibold">HTML5, CSS3, and modern JavaScript environments</span>. This rigorous attention to detail facilitated a transition from UI frameworks and CMS ecosystems like <span className="text-white">WordPress and Bootstrap</span> toward the engineering of sophisticated full-stack infrastructures.
              </p>
              <p className="border-l-2 border-[#a8ff3e] pl-6 italic text-[#999]">
                &quot;I operate with a problem-solving-first methodology, maintaining a high-velocity learning curve to stay ahead of emerging paradigms and architectural trends.&quot;
              </p>
              <p>
                Today, I specialize in architecting scalable solutions using <span className="text-[#a8ff3e] font-bold">Laravel, Django, Node.js, and Next.js</span>. My focus remains on delivering high-performance, clean-code implementations that transform complex requirements into streamlined digital realities.
              </p>
            </div>
          </motion.div>

          {/* Visual Indicators */}
          <div className="grid gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-[#111]/30 border border-[#1e1e1e] rounded-3xl hover:border-[#a8ff3e]/40 transition-all group"
              >
                <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#0c0c0c] border border-[#1e1e1e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#a8ff3e] group-hover:border-[#a8ff3e] transition-all duration-500 shadow-2xl">
                    <item.icon className="text-[#a8ff3e] group-hover:text-[#0c0c0c] transition-colors" size={26} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 tracking-tight">{item.title}</h3>
                    <p className="text-[#555] leading-relaxed text-sm antialiased">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6 flex flex-wrap gap-2.5 px-2"
            >
              {["Engineering", "Problem Solving", "Scalability", "Clean Code", "Paradigm Shift"].map((lab) => (
                <div key={lab} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111] border border-[#1e1e1e]">
                  <span className="w-1 h-1 rounded-full bg-[#a8ff3e]" />
                  <span className="text-[10px] text-[#555] font-mono uppercase tracking-[0.2em] font-bold">{lab}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
