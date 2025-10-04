"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, ChevronRight, Sparkles } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack MERN app with authentication, cart, and payment integration.",
    details: "This project is a fully functional E-Commerce platform built using the MERN stack. Users can browse products, add to cart, and proceed to checkout with integrated payment services like Stripe. Admin users can manage products and view order history.",
    demoLink: "https://example.com/demo-ecommerce",
    githubLink: "https://github.com/example/ecommerce-platform",
    color: "from-violet-600 to-indigo-600",
    accent: "bg-violet-500"
  },
  {
    title: "Task Manager",
    desc: "Project management tool built with Next.js and PostgreSQL.",
    details: "A web-based task management tool built with Next.js and PostgreSQL. It allows users to create tasks, assign deadlines, track progress, and collaborate in real-time with teammates.",
    demoLink: "https://example.com/demo-taskmanager",
    githubLink: "https://github.com/example/task-manager",
    color: "from-emerald-600 to-teal-600",
    accent: "bg-emerald-500"
  }
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Sparkles className="text-yellow-400" />
            Featured Projects
            <Sparkles className="text-yellow-400" />
          </h2>
          <p className="text-slate-400 text-lg">Click on any project to explore details</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glowing background effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-0 transition-opacity duration-500`}
                animate={{ opacity: hoveredIndex === i ? 0.6 : 0 }}
              />

              <motion.div
                className={`relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 transition-all duration-500 ${
                  expandedIndex === i ? 'shadow-2xl' : 'shadow-lg'
                }`}
                layout
              >
                {/* Header Section with Title */}
                <div
                  className={`bg-gradient-to-r ${project.color} p-6 cursor-pointer relative overflow-hidden`}
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      backgroundPosition: hoveredIndex === i ? ['0% 0%', '100% 100%'] : '0% 0%',
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                    style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <motion.h3
                          className="text-3xl font-bold text-white mb-2"
                          animate={{ scale: hoveredIndex === i ? 1.05 : 1 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-slate-100 text-sm">{project.desc}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIndex === i ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="text-white w-6 h-6" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Expandable Details Section */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === i ? 'auto' : 0,
                    opacity: expandedIndex === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-6 space-y-6">
                    {/* Details Text */}
                    <div className="space-y-3">
                      <div className={`h-1 w-16 ${project.accent} rounded-full`} />
                      <p className="text-slate-300 leading-relaxed">
                        {project.details}
                      </p>
                    </div>

                    {/* Action Buttons with Creative Design */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group relative overflow-hidden bg-white text-slate-900 py-3 px-5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        />
                        <ExternalLink className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
                        <span className="relative z-10 group-hover:text-white transition-colors">Live Demo</span>
                      </motion.a>

                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group relative overflow-hidden bg-slate-700 text-white py-3 px-5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 border border-slate-600"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <Github className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">GitHub</span>
                      </motion.a>
                    </div>

                    {/* Decorative Element */}
                    <div className="flex items-center gap-2 pt-2">
                      {[...Array(3)].map((_, idx) => (
                        <motion.div
                          key={idx}
                          className={`h-1 rounded-full ${project.accent}`}
                          initial={{ width: 0 }}
                          animate={{ width: expandedIndex === i ? '20px' : 0 }}
                          transition={{ delay: idx * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Indicator */}
                <div className="h-1 bg-slate-700">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${project.color}`}
                    initial={{ width: '0%' }}
                    animate={{ width: expandedIndex === i ? '100%' : '0%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}