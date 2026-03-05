
"use client";

import { motion } from "framer-motion";
import { Code2, Server, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-7 h-7" />,
    color: "text-primary",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Server className="w-7 h-7" />,
    color: "text-secondary",
    skills: ["Node.js", "Python", "Java", "SQL", "PostgreSQL", "Firebase"],
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-7 h-7" />,
    color: "text-accent",
    skills: ["Git", "GitHub", "Power BI", "Docker", "Postman", "Figma"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
            Technical <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            My toolkit for building modern, scalable, and high-performance digital solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] border border-white/5 glass relative overflow-hidden group transition-all duration-500 hover:border-white/20 hover:shadow-2xl"
            >
              <div className={cn("absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 scale-150", category.color)}>
                {category.icon}
              </div>
              
              <div className="flex items-center gap-5 mb-10">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className={cn("p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors", category.color)}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-2xl font-bold font-headline tracking-tight">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-medium transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
