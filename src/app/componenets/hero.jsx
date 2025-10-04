"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Mail, ArrowDown, Code, Database, Server, Sparkles } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { icon: Code, label: "MERN Stack", color: "from-green-400 to-emerald-600" },
    { icon: Server, label: "PHP Laravel", color: "from-red-400 to-orange-600" },
    { icon: Database, label: "PostgreSQL", color: "from-blue-400 to-cyan-600" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-800">
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Subtle gradient orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl opacity-10"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-10"
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-6 text-center md:text-left"
          >
            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide text-white"
              >
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-pink-500">
                  Sagar Singh
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-4 text-xl md:text-2xl max-w-md mx-auto md:mx-0 text-gray-300"
              >
                MERN Stack Developer | PHP Laravel | PostgreSQL
              </motion.p>
            </div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-300`} />
                  <div className="relative flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-xl border border-gray-700">
                    <skill.icon className="w-4 h-4 text-white" />
                    <span className="text-white font-medium text-sm">{skill.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-6 flex gap-6 justify-center md:justify-start"
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-white text-indigo-700 rounded-2xl shadow-xl hover:scale-105 transform transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>

              <motion.a
                href="https://github.com/sag030601"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-900 text-white rounded-2xl shadow-xl hover:bg-gray-800 hover:scale-105 transform transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          >
            <div className="relative">
              {/* Subtle glow effect */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-pink-500 rounded-full blur-lg opacity-30"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Image Container */}
              <motion.div
                className="relative w-[270px] h-[270px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-teal-400 shadow-2xl hover:shadow-3xl transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/me.jpeg"
                  alt="Sagar Singh"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Available Badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gray-900/90 backdrop-blur-sm rounded-full border border-teal-400 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white font-semibold flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  Available for work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}