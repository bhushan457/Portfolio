
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] flex items-center justify-center order-2 lg:order-1"
          >
            {/* Live Animation Replacement */}
            <div className="relative w-80 h-80">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 50% 50% / 50% 50% 50% 50%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-4 border-2 border-dashed border-primary/40 rounded-[40%]"
              />
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-10 border border-dotted border-secondary/40 rounded-[30%]"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <div className="relative group cursor-pointer">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-40 h-40 glass rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-primary/20"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-16 h-16 text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]"
                    >
                      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>
                  </motion.div>
                  {/* Floating elements */}
                  <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute -top-4 -right-4 w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 text-secondary font-bold">JS</motion.div>
                  <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }} className="absolute -bottom-4 -left-4 w-10 h-10 glass rounded-full flex items-center justify-center border border-white/10 text-primary font-bold">React</motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                I am a passionate <span className="text-foreground font-medium">Software Developer</span> dedicated to building immersive web applications that combine aesthetic design with robust engineering.
              </p>
              <p>
                My expertise lies in full-stack development, leveraging the power of <span className="text-primary font-medium">React, Next.js, and Node.js</span> to create scalable systems. I thrive on solving complex problems and turning ideas into interactive reality.
              </p>
              <p>
                From developing sophisticated e-commerce platforms to AI-powered identification systems, I am constantly exploring new frontiers in tech to deliver high-impact solutions.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-12">
              {[
                { label: "Projects Completed", value: "5+" },
                { label: "Tech Domains", value: "3+" },
                { label: "Learning Drive", value: "∞" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * idx }}
                >
                  <h4 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
