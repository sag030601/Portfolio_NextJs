"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Database, Code, Server, GitBranch, Layers, Zap, Box, Terminal } from "lucide-react";

const skills = [
  { 
    name: "MongoDB", 
    icon: Database, 
    color: "from-green-500 to-emerald-600",
    category: "Database",
    level: 90
  },
  { 
    name: "Express.js", 
    icon: Server, 
    color: "from-gray-500 to-slate-600",
    category: "Backend",
    level: 85
  },
  { 
    name: "React.js", 
    icon: Code, 
    color: "from-cyan-500 to-blue-600",
    category: "Frontend",
    level: 95
  },
  { 
    name: "Node.js", 
    icon: Box, 
    color: "from-green-600 to-lime-600",
    category: "Backend",
    level: 88
  },
  { 
    name: "PHP Laravel", 
    icon: Terminal, 
    color: "from-red-500 to-orange-600",
    category: "Backend",
    level: 82
  },
  { 
    name: "PostgreSQL", 
    icon: Database, 
    color: "from-blue-500 to-indigo-600",
    category: "Database",
    level: 87
  },
  { 
    name: "TypeScript", 
    icon: Code, 
    color: "from-blue-600 to-purple-600",
    category: "Language",
    level: 80
  },
  { 
    name: "Git & GitHub", 
    icon: GitBranch, 
    color: "from-orange-500 to-red-600",
    category: "Tools",
    level: 92
  }
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(skills.map(skill => skill.category))];
  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Subtle floating particles */}
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Core Skills
          </h2>
          <p className="text-gray-300 text-lg">Technologies I work with to bring ideas to life</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white text-indigo-700 shadow-xl"
                  : "bg-gray-900 text-white hover:bg-gray-700 border border-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.05 }}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                />

                {/* Card */}
                <motion.div
                  className="relative bg-gray-900 rounded-2xl p-6 border border-gray-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative"
                    animate={{
                      rotate: hoveredIndex === i ? [0, -10, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-bold text-white text-center mb-3">
                    {skill.name}
                  </h3>

                  {/* Category Badge */}
                  <div className="flex justify-center mb-3">
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Level Bar */}
                  <div className="relative">
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    </div>
                  </div>

                  {/* Sparkle Effect on Hover */}
                  {hoveredIndex === i && (
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: [0, 1.2, 1], rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Technologies", value: skills.length, icon: Code },
            { label: "Years Experience", value: "3+", icon: Zap },
            { label: "Projects Built", value: "20+", icon: Box },
            { label: "Commits", value: "1000+", icon: GitBranch }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}