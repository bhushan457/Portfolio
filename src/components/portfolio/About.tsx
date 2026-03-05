
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            {/* Live Animation Replacement */}
            <div className="relative w-64 h-64">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 border-2 border-dashed border-primary/40 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-4 border-2 border-dotted border-secondary/40 rounded-full"
              />
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-32 h-32 bg-primary/20 blur-3xl rounded-full absolute" />
                <div className="relative z-10 text-6xl font-bold text-gradient">{}</div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-24 h-24 text-primary"
                >
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-primary rounded-tl-3xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-secondary rounded-br-3xl z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a passionate Software Developer who enjoys building modern web applications and solving real-world
                problems through technology.
              </p>
              <p>
                I specialize in full-stack web development using technologies like React, JavaScript, Node.js, and Python.
                I enjoy creating clean user interfaces, scalable backend systems, and intelligent applications.
              </p>
              <p>
                I have built several projects including a job portal, an e-commerce platform, and an AI-based plant
                identification system. I'm constantly learning and pushing the boundaries of what's possible in the
                web ecosystem.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h4 className="text-2xl font-bold text-foreground">5+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground">3+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Tech Domains</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground">∞</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Learning Drive</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
