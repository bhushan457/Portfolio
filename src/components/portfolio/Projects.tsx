
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "HireHub",
    description: "A comprehensive job board platform facilitating seamless recruitment and job applications.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    name: "ShopSphere",
    description: "Modern e-commerce ecosystem featuring real-time inventory and intuitive admin dashboard.",
    tags: ["Next.js", "Tailwind", "Firebase"],
  },
  {
    name: "Plant ID AI",
    description: "Intelligent medical plant classifier using deep learning to identify species from images.",
    tags: ["Python", "React", "Deep Learning"],
  },
  {
    name: "Sales Analytics",
    description: "Data-driven visualization engine providing deep insights into complex sales metrics.",
    tags: ["Power BI", "Data Visualization", "SQL"],
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
            Featured <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            A selection of my most challenging and impactful software engineering projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, idx) => {
            return (
              <motion.div
                key={project.name}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2rem] overflow-hidden border border-white/5 glass transition-all duration-500 p-10 hover:border-primary/30 hover:shadow-2xl"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-bold font-headline group-hover:text-primary transition-colors">{project.name}</h3>
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="p-3 rounded-full bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    >
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-light group-hover:text-foreground/80 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-primary/5 text-primary/80 border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] group-hover:bg-primary/10 transition-all duration-500 rounded-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
