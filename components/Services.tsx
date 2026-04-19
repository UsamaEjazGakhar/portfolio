"use client";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiZap,
  FiTrello,
  FiShoppingCart,
  FiCpu,
  FiSmartphone,
  FiPackage,
  FiGlobe,
} from "react-icons/fi";
import { BorderBeam } from "./BorderBeam";

const services = [
  {
    icon: FiCode,
    title: "Web & App Development",
    desc: "Crafting visually appealing and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Angular.",
  },
  {
    icon: FiDatabase,
    title: "Database Management",
    desc: "Designing and managing databases with SQL and NoSQL technologies such as MySQL, PostgreSQL, and MongoDB.",
  },
  {
    icon: FiZap,
    title: "API Development",
    desc: "Creating and integrating RESTful APIs to enable smooth communication between front-end and back-end systems.",
  },
  {
    icon: FiTrello,
    title: "Project Management",
    desc: "Managing projects from concept to delivery using Agile methodologies, JIRA, ClickUp, and Slack for seamless collaboration.",
  },
  {
    icon: FiShoppingCart,
    title: "E-commerce Solutions",
    desc: "Developing scalable and secure payment solutions for e-commerce platforms tailored to your business needs.",
  },
  {
    icon: FiCpu,
    title: "Integrating AI",
    desc: "Boost your applications with AI for improved efficiency, automation, and enhanced user experience.",
  },
  {
    icon: FiSmartphone,
    title: "Play Store Deployment",
    desc: "Publishing and managing your Android apps on Google Play Store with proper ASO, versioning, and release management.",
  },
  {
    icon: FiPackage,
    title: "App Store Deployment",
    desc: "Deploying your iOS apps to Apple App Store with TestFlight testing, App Store Connect setup, and review compliance.",
  },
  {
    icon: FiGlobe,
    title: "Website Deployment",
    desc: "Deploying websites to Vercel, Netlify, AWS, and custom servers with CI/CD pipelines and domain configuration.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0c0c0c]">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.1]"
        style={{ backgroundImage: 'radial-gradient(#1e1e1e 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#a8ff3e] opacity-[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16 px-4">
          <div className="section-label mx-auto w-fit mb-6">
            <span /> Services
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Designing solutions customized
            <br className="hidden sm:block" />
            <span className="text-[#a8ff3e]">
              {" "}to meet your requirements
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
              >_</motion.span>
            </span>
          </motion.h2>
        </div>

        {/* Services Grid Container */}
        <div className="border border-[#1e1e1e] bg-[#111]/30 backdrop-blur-md rounded-3xl p-8 lg:p-10 relative overflow-hidden">
          <BorderBeam duration={12} delay={2} colorFrom="#a8ff3e" borderWidth={1} />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={itemVariants}
                className="card p-8 rounded-2xl group border-[#1e1e1e] hover:border-[#a8ff3e]/40 transition-all duration-300 bg-[#0c0c0c]/80"
              >
                <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#1e1e1e] flex items-center justify-center mb-6 group-hover:border-[#a8ff3e]/40 group-hover:bg-[#a8ff3e]/10 transition-all">
                  <s.icon size={22} className="text-[#a8ff3e]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3 tracking-tight">{s.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Replaced CTA Strip - Integrated into same box */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 pt-10 border-t border-[#1e1e1e] flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10"
          >
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Excited to take on new projects!</h4>
              <p className="text-[#666] text-sm">
                Let&apos;s collaborate and build something extraordinary together.
              </p>
            </div>
            <a href="#contact" className="btn-primary px-8 py-3">
              Reach out!
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
