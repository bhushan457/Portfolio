
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-primary/20 bg-card">
              <Image
                src="https://picsum.photos/seed/bhushan-dev/600/600"
                alt="Bhushan Sonawane"
                width={600}
                height={600}
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="developer portrait"
              />
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
