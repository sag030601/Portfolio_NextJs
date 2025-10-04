"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, Copy, Check } from "lucide-react";

export default function Contact() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [copied, setCopied] = useState(false);

  const email = "sagarsingh030601@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sag030601",
      icon: Github,
      color: "bg-gray-900",
      hoverColor: "bg-gray-800"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
      color: "bg-blue-600",
      hoverColor: "bg-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
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
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Header */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Contact
            </h2>
            <p className="text-gray-300 text-lg">
              Have a project in mind? Let's build something amazing together!
            </p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-12 relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-pink-500 rounded-2xl blur-lg opacity-30" />
            
            <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-teal-400 to-pink-500 rounded-xl shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Let's connect! Email me at</h3>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href={`mailto:${email}`}
                  className="group relative overflow-hidden bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                  <span>{email}</span>
                </motion.a>

                <motion.button
                  onClick={handleCopyEmail}
                  className="relative overflow-hidden bg-gray-800 text-white px-6 py-4 rounded-xl font-semibold flex items-center gap-2 border border-gray-700 hover:bg-gray-700 transition-all shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative group"
                  onMouseEnter={() => setHoveredButton(link.name)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 ${link.color} rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  />

                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative flex items-center gap-3 ${link.color} text-white px-8 py-4 rounded-2xl font-semibold shadow-xl overflow-hidden min-w-[200px] justify-center transition-all duration-300 ${link.hoverColor}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    <link.icon className="w-6 h-6" />
                    <span className="text-lg">{link.name}</span>
                    
                    <motion.div
                      animate={{ x: hoveredButton === link.name ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative Bottom Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}