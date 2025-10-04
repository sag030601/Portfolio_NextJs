"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GraduationCap, Code, Award, Briefcase } from "lucide-react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const highlights = [
    {
      icon: Briefcase,
      title: "1.6 Years",
      subtitle: "Experience",
      color: "from-teal-400 to-cyan-500"
    },
    {
      icon: Code,
      title: "MERN Stack",
      subtitle: "Specialist",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: GraduationCap,
      title: "BSc IT",
      subtitle: "Graduate",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Award,
      title: "Certified",
      subtitle: "Developer",
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-800 relative overflow-hidden"
    >
      {/* Subtle floating particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
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
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16"
        >
          About Me
        </motion.h2>

        {/* Highlights Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300`} />
              <div className="relative bg-gray-900 rounded-xl p-6 border border-gray-700 text-center shadow-xl">
                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{item.title}</div>
                <div className="text-sm text-gray-400">{item.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-pink-500 rounded-2xl blur-lg opacity-20" />
          
          <div className="relative bg-gray-900 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-700">
            <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
              {/* Paragraph 1 */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="leading-relaxed"
              >
                I am a passionate{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">MERN Stack Developer</span> with{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">1.6 years of professional experience</span>. I specialize in
                building scalable and efficient web applications using technologies like{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">React.js, Node.js, Express.js, MongoDB</span>, and{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">PostgreSQL</span>.
              </motion.p>

              {/* Paragraph 2 */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="leading-relaxed"
              >
                I have a strong background in{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">PHP Laravel</span> and have worked extensively on{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">user management systems</span> across multiple projects. I focus on writing
                clean, maintainable code and building well-structured backends that scale smoothly.
              </motion.p>

              {/* Paragraph 3 */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="leading-relaxed"
              >
                I hold a <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">BSc in Information Technology</span> and a{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">MERN Stack certification</span>, which solidified my expertise in full-stack development.
                I'm committed to continuous learning and delivering impactful digital solutions.
              </motion.p>
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}