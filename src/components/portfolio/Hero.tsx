
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4">
            Available for Opportunities
          </span>
          <h1 className="text-5xl md:text-8xl font-headline font-bold mb-4 tracking-tight">
            Bhushan <span className="text-gradient">Sonawane</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            Software Developer
          </h2>
        </motion.div>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          "I build modern, scalable web applications using modern technologies."
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-white/10 hover:bg-white/5" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-white/10 hover:bg-white/5" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-white/10 hover:bg-white/5" asChild>
              <a href="#contact" title="Contact Me">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted flex items-start justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
