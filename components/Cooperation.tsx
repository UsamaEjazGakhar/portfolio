"use client";
import { motion } from "framer-motion";
import Marquee from "./Marquee";
import { IoRocketOutline } from "react-icons/io5";
import OrbitingCircles from "./Orbit";
import { BorderBeam } from "./BorderBeam";

const companies = [
  "Google",
  "Microsoft",
  "Meta",
  "Amazon",
  "Apple",
  "Netflix",
  "Uber",
  "Airbnb",
  "Stripe",
  "Spotify",
  "Tesla",
  "NVIDIA",
  "OpenAI",
  "GitHub",
  "Salesforce",
  "LinkedIn",
];

function CompanyPill({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 bg-[#111] border border-[#1e1e1e] rounded-full mx-3 whitespace-nowrap">
      <div className="w-6 h-6 rounded-full bg-[#1e1e1e] flex items-center justify-center text-[10px] font-bold text-[#a8ff3e]">
        {name[0]}
      </div>
      <span className="text-sm font-bold text-[#555] tracking-tight">{name}</span>
    </div>
  );
}

export default function Cooperation() {
  return (
    <section className="py-24 border-t border-b border-[#1e1e1e] overflow-hidden bg-[#0c0c0c] relative">
      <BorderBeam duration={10} colorFrom="#a8ff3e" borderWidth={1.5} />
      {/* Background Orbital Animation */}
      <div className="absolute -bottom-24 -right-24 w-[350px] h-[350px] opacity-20 pointer-events-none">
        <OrbitingCircles radius={60} duration={12} reverse>
          <div className="text-[#a8ff3e] rotate-[-45deg] scale-75"><IoRocketOutline size={20} /></div>
        </OrbitingCircles>
        <OrbitingCircles radius={100} duration={20}>
          <div className="text-[#a8ff3e] rotate-[135deg] scale-90"><IoRocketOutline size={24} /></div>
        </OrbitingCircles>
        <OrbitingCircles radius={140} duration={30} reverse>
          <div className="text-[#a8ff3e] rotate-[-75deg] scale-110"><IoRocketOutline size={28} /></div>
        </OrbitingCircles>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-12 text-center relative z-10">
        <p className="text-[#a8ff3e] text-[10px] font-mono tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e]" />
          Cooperation
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
        >
          Top most <span className="text-[#a8ff3e]">Software Companies</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-[#a8ff3e] ml-1"
          >_</motion.span>
        </motion.h2>
      </div>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-8 relative z-10">
        <Marquee duration="50s" gap="1rem" pauseOnHover>
          {companies.map((c, i) => (
            <CompanyPill key={`top-${i}`} name={c} />
          ))}
        </Marquee>

        <Marquee duration="50s" gap="1rem" pauseOnHover reverse>
          {companies.slice().reverse().map((c, i) => (
            <CompanyPill key={`bottom-${i}`} name={c} />
          ))}
        </Marquee>
      </div>

      {/* Bottom contact info with orbital circle effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-16 flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex items-center gap-4 group">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0">
              <OrbitingCircles radius={28} duration={8} path={false}>
                <div className="w-1 h-1 bg-[#a8ff3e] rounded-full" />
              </OrbitingCircles>
            </div>
            <div className="avatar-initials w-full h-full flex items-center justify-center bg-[#111] border border-[#1e1e1e] rounded-full text-white font-bold group-hover:border-[#a8ff3e]/50 transition-colors relative z-10">UE</div>
          </div>
          <div>
            <p className="text-white text-base font-bold">Usama Ejaz</p>
            <a
              href="mailto:usamaejaz794@gmail.com"
              className="text-[#a8ff3e] text-sm hover:underline font-mono"
            >
              usamaejaz794@gmail.com
            </a>
          </div>
        </div>
        <p className="text-[#555] text-sm italic">
          &quot;Open to collaborations & new opportunities&quot;
        </p>
      </div>
    </section>
  );
}
