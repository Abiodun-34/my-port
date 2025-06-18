import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt'; // Changed from 'import Tilt from' to named import
import { projects } from '../data/data.jsx'; // Your project data

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Work = () => {
  return (
    <section className="bg-gray-800 w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-amber-500 text-3xl md:text-5xl font-bold mb-4">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent works. Each project was built to solve
            specific problems and improve my skills.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Tilt
                options={{
                  max: 15,
                  scale: 1.03,
                  speed: 500,
                  glare: true,
                  "max-glare": 0.2,
                }}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gray-700 rounded-xl overflow-hidden shadow-xl h-full flex flex-col border border-gray-600"
                >
                  {/* Project image */}
                  <div className="overflow-hidden h-48">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Project content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-800 text-amber-500 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-sm bg-amber-500 text-gray-900 px-4 py-2 rounded font-medium"
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-sm border border-amber-500 text-amber-500 px-4 py-2 rounded font-medium"
                      >
                        View Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;