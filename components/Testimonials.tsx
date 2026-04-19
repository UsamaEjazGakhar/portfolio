"use client";
import { motion } from "framer-motion";
import Marquee from "./Marquee";
import { BorderBeam } from "./BorderBeam";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  tags: string[];
  initials: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Noman Akram",
    role: "Software Engineer, Pakistan",
    initials: "NA",
    text: "Usama possesses a rare blend of technical proficiency, creativity, leadership, and communication skills. His mastery of Node.js, FastAPI, and Laravel makes him a complete professional. Working with him has been both productive and inspiring.",
    tags: ["Node.js", "FastAPI", "Laravel"],
  },
  {
    name: "Zainab Malik",
    role: "PhD Candidate, NUST",
    initials: "ZM",
    text: "Usama's contribution to my doctoral research was much more than just technical support. He helped optimize my research methodology and provided the core implementation for my thesis simulation modules. His academic writing reflects a deep understanding of complex data patterns.",
    tags: ["Academic Research", "Thesis Modules"],
  },
  {
    name: "Huzaifa Naseer",
    role: "Software Engineer, Pakistan",
    initials: "HN",
    text: "Usama's expertise as a Senior Full Stack Developer is truly exceptional. Proficient in FastAPI, React Native, Laravel, and React.js, he consistently delivers seamless, user-centric solutions. He transforms ideas into polished realities.",
    tags: ["FastAPI", "React Native", "Laravel"],
  },
  {
    name: "Dr. Sultan Mahmood",
    role: "HOD Computer Science, Pakistan",
    initials: "SM",
    text: "Usama has been a remarkable asset to our department. As a guest mentor, his ability to break down low-level C++ concepts and Java architectural patterns into digestible modules is highly impressive. His pedagogical approach combines theory with high-impact industrial logic.",
    tags: ["Mentoring", "Architecture", "Pedagogy"],
  },
  {
    name: "Queen Dyson",
    role: "MSc Finance, South Africa",
    initials: "QD",
    text: "Usama's portfolio clearly reflects a deep passion for building user-centric web and mobile applications and a strong command of modern frameworks. His communication skills and proactive mindset make him a valuable asset to any tech team.",
    tags: ["Full Stack", "Mobile"],
  },
  {
    name: "Asad Chaudhry",
    role: "MS Computer Science Student",
    initials: "AC",
    text: "I hired Usama for a complex network simulation using Cisco Packet Tracer. He delivered a flawless, detailed design that exceeded my expectations. His assistance with technical assignments is simply professional.",
    tags: ["Cisco", "Networking", "Assignments"],
  },
  {
    name: "Baiaman Apsamatov",
    role: "iOS & FastAPI Developer, Kyrgyzstan",
    initials: "BA",
    text: "I had the opportunity to work with him on a deprecated FastAPI package, and it was a great experience. He handled technical challenges efficiently and communicated clearly and professionally throughout.",
    tags: ["FastAPI"],
  },
  {
    name: "Talha Siddiqui",
    role: "Mobile App Developer, Pakistan",
    initials: "TS",
    text: "Usama is an exceptional mobile app and Laravel developer. His attention to detail, clean coding practices, and ability to solve problems efficiently make him stand out. He is proactive, communicates clearly, and consistently meets deadlines.",
    tags: ["FastAPI", "Laravel"],
  },
  {
    name: "Sarah Mitchell",
    role: "New York, USA",
    initials: "SM",
    text: "Our e-commerce website built with Next.js exceeded all expectations. Page load times dropped significantly, and organic traffic increased within weeks of launch. Usama's technical delivery is outstanding.",
    tags: ["Next.js"],
  },
  {
    name: "Omar Farooq",
    role: "Dubai, UAE",
    initials: "OF",
    text: "Usama architected our entire backend using NestJS and PostgreSQL. His clean code structure and thorough API documentation made onboarding our in-house team completely effortless.",
    tags: ["NestJS", "PostgreSQL"],
  },
  {
    name: "David Thompson",
    role: "London, UK",
    initials: "DT",
    text: "Usama developed a comprehensive property management dashboard using the MERN stack. The real-time analytics and reporting features have transformed how we track our entire portfolio.",
    tags: ["MERN Stack"],
  },
  {
    name: "James Wilson",
    role: "Sydney, Australia",
    initials: "JW",
    text: "Usama built our travel booking platform from scratch using the MERN stack. His expertise in MongoDB aggregation pipelines and Redis caching made search incredibly fast and reliable.",
    tags: ["MERN Stack"],
  },
  {
    name: "Falak Naz",
    role: "Full Stack Developer, Pakistan",
    initials: "FN",
    text: "During our time working together at Mercury Sols, Usama demonstrated exceptional technical expertise, problem-solving abilities, and a strong work ethic. He is a dedicated professional, always willing to collaborate.",
    tags: ["Full Stack", "Mobile"],
  },
  {
    name: "Ahmed Raza",
    role: "Lahore, Pakistan",
    initials: "AR",
    text: "Usama delivered a flawless FastAPI app for our logistics platform. His ability to handle complex state management and API integrations was truly impressive. An outstanding developer.",
    tags: ["FastAPI"],
  },
];

const avatarColors = [
  "from-emerald-800 to-emerald-600",
  "from-blue-800 to-blue-600",
  "from-purple-800 to-purple-600",
  "from-orange-800 to-orange-600",
  "from-rose-800 to-rose-600",
  "from-teal-800 to-teal-600",
  "from-indigo-800 to-indigo-600",
  "from-yellow-800 to-yellow-600",
];

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const grad = avatarColors[index % avatarColors.length];
  return (
    <div className="testimonial-card group relative bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl p-5 sm:p-6 mx-2 sm:mx-3 w-[280px] sm:w-[350px] flex-shrink-0 flex flex-col gap-5 hover:border-[#a8ff3e]/30 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${grad} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}>
            {t.initials}
          </div>
          <div>
            <h4 className="text-white text-[13px] font-bold">{t.name}</h4>
            <p className="text-[#555] text-[10px]">{t.role}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#a8ff3e">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </div>

      <p className="text-[#888] text-[12px] leading-relaxed italic">
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {t.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[9px] bg-[#a8ff3e]/5 border border-[#a8ff3e]/10 text-[#a8ff3e] rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-10 sm:mb-14 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e]" />
          <span className="text-[#a8ff3e] text-[10px] font-mono tracking-[0.2em] uppercase">Testimonials</span>
        </div>

        {/* RESTORED SIZE + BLINKING UNDERSCORE */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
        >
          What my clients <span className="text-[#444]">say about</span>
          <br />
          <span className="text-[#a8ff3e]">working with me
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1"
            >_</motion.span>
          </span>
        </motion.h2>
      </div>

      {/* Testimonials inside a Protected Container with Green Light (BorderBeam) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative border border-[#1e1e1e] bg-[#111]/40 backdrop-blur-3xl rounded-3xl py-10 sm:py-16 overflow-hidden min-h-[400px] sm:min-h-[500px] flex flex-col justify-center">
          <BorderBeam duration={12} colorFrom="#a8ff3e" borderWidth={1.5} />

          {/* Fade effect on edges */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#111] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none" />

          <div className="relative flex flex-col gap-8">
            <Marquee duration="60s" pauseOnHover>
              {row1.map((t, i) => (
                <TestimonialCard key={`r1-${i}`} t={t} index={i} />
              ))}
            </Marquee>

            <Marquee duration="60s" reverse pauseOnHover>
              {row2.map((t, i) => (
                <TestimonialCard key={`r2-${i}`} t={t} index={i} />
              ))}
            </Marquee>
          </div>

          {/* CTA INSIDE THE DIV */}
          <div className="mt-12 pt-10 border-t border-[#1e1e1e]/50 text-center relative z-10">
            <p className="text-[#555] text-xs mb-5 font-mono">
              Trusted by <span className="text-white font-bold">30+ clients</span> worldwide.<br />
              Ready to build something amazing?
            </p>
            <a
              href="#contact"
              className="px-8 py-3 bg-[#a8ff3e]/10 border border-[#a8ff3e]/20 text-[#a8ff3e] rounded-xl text-sm font-bold hover:bg-[#a8ff3e] hover:text-[#0c0c0c] transition-all inline-flex items-center gap-2"
            >
              Let&apos;s talk!
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
