
"use client";

import { motion } from "framer-motion";
import { Code2, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-secondary" />,
    skills: ["Node.js", "Python", "Java", "SQL", "PostgreSQL", "Firebase"],
  },
  {
    title: "Tools",
    icon: <Wrench className="w-6 h-6 text-accent" />,
    skills: ["Git", "GitHub", "Power BI", "VS Code", "Postman", "Figma"],
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My expertise covers a wide range of modern technologies across the full software development lifecycle.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-white/10 glass relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {category.icon}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold font-headline">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
