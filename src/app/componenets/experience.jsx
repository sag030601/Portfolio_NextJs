"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaDatabase, FaTasks } from "react-icons/fa"; // Optional icons

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12">Professional Experience</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Experience Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-72 bg-white shadow-2xl rounded-xl p-6 transform transition duration-300 overflow-hidden group"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl"></div>
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center text-white opacity-100 group-hover:opacity-0 transition duration-300">
              <FaBriefcase className="text-5xl mb-4" />
              <h3 className="text-2xl font-semibold">Software Developer</h3>
              <p>1.6 years of experience</p>
            </div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-white bg-opacity-90 text-gray-900 rounded-xl p-6">
              <ul className="space-y-2">
                <li>Built full-stack web apps with the MERN stack.</li>
                <li>Developed backend APIs with PHP Laravel.</li>
                <li>Worked with PostgreSQL & MongoDB databases.</li>
                <li>Collaborated in Agile teams for scalable solutions.</li>
              </ul>
            </div>
          </motion.div>

          {/* Experience Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-72 bg-white shadow-2xl rounded-xl p-6 transform transition duration-300 overflow-hidden group"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 to-teal-600 rounded-xl"></div>
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center text-white opacity-100 group-hover:opacity-0 transition duration-300">
              <FaCode className="text-5xl mb-4" />
              <h3 className="text-2xl font-semibold">Backend Developer</h3>
              <p>1 year of experience</p>
            </div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-white bg-opacity-90 text-gray-900 rounded-xl p-6">
              <ul className="space-y-2">
                <li>Developed backend services and APIs with Node.js and Express.js.</li>
                <li>Optimized database queries and ensured high performance for API calls.</li>
                <li>Worked on implementing security measures for data protection.</li>
                <li>Collaborated with the frontend team to deliver fully integrated solutions.</li>
              </ul>
            </div>
          </motion.div>

          {/* Experience Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-72 bg-white shadow-2xl rounded-xl p-6 transform transition duration-300 overflow-hidden group"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl"></div>
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center text-white opacity-100 group-hover:opacity-0 transition duration-300">
              <FaDatabase className="text-5xl mb-4" />
              <h3 className="text-2xl font-semibold">Database Administrator</h3>
              <p>1 year of experience</p>
            </div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-white bg-opacity-90 text-gray-900 rounded-xl p-6">
              <ul className="space-y-2">
                <li>Managed and optimized PostgreSQL and MongoDB databases.</li>
                <li>Performed data migrations and database restructuring.</li>
                <li>Implemented backup and disaster recovery strategies.</li>
                <li>Collaborated with engineers to ensure data integrity and security.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
