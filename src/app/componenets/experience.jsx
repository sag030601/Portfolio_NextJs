"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Briefcase, Code, Database, Server, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const experiences = [
    {
      icon: Briefcase,
      title: "Software Developer",
      duration: "1.6 years",
      location: "Full-stack Development",
      color: "from-teal-400 to-cyan-500",
      responsibilities: [
        "Built full-stack web apps with the MERN stack",
        "Developed backend APIs with PHP Laravel",
        "Worked with PostgreSQL & MongoDB databases",
        "Collaborated in Agile teams for scalable solutions"
      ]
    },
    {
      icon: Server,
      title: "Backend Developer",
      duration: "1 year",
      location: "API Development",
      color: "from-blue-400 to-indigo-500",
      responsibilities: [
        "Developed backend services and APIs with Node.js and Express.js",
        "Optimized database queries and ensured high performance for API calls",
        "Worked on implementing security measures for data protection",
        "Collaborated with the frontend team to deliver fully integrated solutions"
      ]
    },
    {
      icon: Database,
      title: "Database Administrator",
      duration: "1 year",
      location: "Data Management",
      color: "from-purple-400 to-pink-500",
      responsibilities: [
        "Managed and optimized PostgreSQL and MongoDB databases",
        "Performed data migrations and database restructuring",
        "Implemented backup and disaster recovery strategies",
        "Collaborated with engineers to ensure data integrity and security"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-800 relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-300 text-lg">My journey in software development</p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl h-full">
                {/* Header Section */}
                <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center`}>
                      <exp.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed"
                      >
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 bg-gradient-to-r ${exp.color}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full"
        />
      </div>
    </section>
  );
}