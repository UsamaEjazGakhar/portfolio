"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FYP from "@/components/FYP";
import Cooperation from "@/components/Cooperation";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen overflow-x-hidden">
      <Navbar />
      <SocialSidebar />
      <Hero />
      <FYP />
      <Cooperation />
      <Services />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
