"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900 shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-blue-500">
            KARENA JONEMARY J
          </h1>
          <div className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Frontend Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 max-w-2xl"
        >
          React & Next.js Developer building scalable and user-focused applications.
        </motion.p>

      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-blue-500"
        >
          About Me
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-gray-300 leading-relaxed"
        >
          I am a React and Next.js developer with hands-on experience building full-stack applications.
          I focus on clean, scalable code and user-friendly interfaces.
          <br /><br />
          I emphasize time management and stress handling. During debugging challenges,
          I stay calm and approach problems logically.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-10 text-blue-500"
        >
          Skills
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Languages", "Frontend", "Tools"].map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
            >
              <h4 className="font-semibold mb-3">{title}</h4>
              <p>
                {title === "Languages" && "Python, Java, SQL, JavaScript"}
                {title === "Frontend" && "React, Next.js, HTML, CSS, Bootstrap"}
                {title === "Tools" && "Supabase, Git, GitHub, Photoshop"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-10 text-blue-500"
        >
          Projects
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "RetailPro – Full Stack Retail Management System",
            "Hospital Management System – Java Swing Application",
            "AI Grocery Assistant – AI-Based Mobile Assistant"
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition duration-300"
            >
              <p className="text-gray-300">{project}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-6 text-blue-500"
        >
          Contact
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400"
        >
          Dindigul, India
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400"
        >
          karenajonemaryj@gmail.com
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center p-4 text-gray-500">
        © 2026 Karena Jonemary J
      </footer>

    </main>
  );
}