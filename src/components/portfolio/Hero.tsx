
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  const revealVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { duration: 0.8, ease: "circOut" }
    }
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
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary rounded-full blur-[140px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            Available for Opportunities
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold mb-4 tracking-tight leading-[1.1]">
            Bhushan <span className="text-gradient relative">
              Sonawane
              <motion.span 
                variants={revealVariants}
                className="absolute bottom-0 left-0 w-full h-1 bg-primary origin-left"
              />
            </span>
          </h1>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-2xl md:text-3xl font-medium text-muted-foreground/80 mb-8"
          >
            Software Developer
          </motion.h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          "Crafting high-performance digital experiences through clean code and modern architecture."
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6">
          <Button 
            size="lg" 
            className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20" 
            asChild
          >
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <div className="flex items-center gap-4">
            {[
              { icon: <Github className="w-5 h-5" />, href: "https://github.com", title: "GitHub" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", title: "LinkedIn" },
              { icon: <Mail className="w-5 h-5" />, href: "#contact", title: "Contact" }
            ].map((social, idx) => (
              <Button 
                key={idx}
                variant="outline" 
                size="icon" 
                className="rounded-full w-12 h-12 border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all duration-300 hover:scale-110" 
                asChild
              >
                <a href={social.href} target={social.href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer" title={social.title}>
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
