
"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "HireHub",
    description: "Full Stack Job Portal Web Application where users can search and apply for jobs.",
  },
  {
    name: "ShopSphere",
    description: "Full Stack E-Commerce Web Application with product listing, shopping cart, and admin panel.",
  },
  {
    name: "Plant ID AI",
    description: "Web application that identifies medicinal plants from uploaded images using deep learning.",
  },
  {
    name: "Sales Analytics",
    description: "Interactive sales analytics dashboard created using Power BI with advanced visualization.",
  },
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent works across web development, AI, and data analytics.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => {
            return (
              <motion.div
                key={project.name}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 glass transition-all p-8"
              >
                <div className="relative">
                  <h3 className="text-2xl font-bold font-headline mb-4">{project.name}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
