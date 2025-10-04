"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/app/componenets/navbar";
import Hero from "@/app/componenets/hero";
import About from "@/app/componenets/about";
import Skills from "@/app/componenets/skills";
import Experience from "@/app/componenets/experience";
import Projects from "@/app/componenets/projects";
import Contact from "@/app/componenets/contact";
import Footer from "@/app/componenets/footer";

export default function Home() {
  return (
    <main className="font-sans bg-gradient-to-r from-gray-50 to-gray-100">
      <Navbar />
      <Hero />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <Footer />
    </main>
  );
}

function AnimatedSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animation to trigger multiple times
    threshold: 0.2,     // Start animation when 20% of the section is in view
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden, slightly down)
      animate={{
        opacity: inView ? 1 : 0, // Fade-in/fade-out based on visibility
        y: inView ? 0 : 50,      // Slide-in/slide-out based on visibility
      }}
      exit={{
        opacity: 0, // Fade out when exiting
        y: 50,      // Slide out when exiting
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="py-20"
    >
      {children}
    </motion.section>
  );
}
