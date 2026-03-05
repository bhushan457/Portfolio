
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "HireHub",
    description: "Full Stack Job Portal Web Application where users can search and apply for jobs.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    demo: "#",
    imageId: "hirehub",
  },
  {
    name: "ShopSphere",
    description: "Full Stack E-Commerce Web Application with product listing, shopping cart, and admin panel.",
    tech: ["React", "Redux", "Firebase", "Stripe"],
    github: "https://github.com",
    demo: "#",
    imageId: "shopsphere",
  },
  {
    name: "Plant ID AI",
    description: "Web application that identifies medicinal plants from uploaded images using deep learning.",
    tech: ["Python", "TensorFlow", "React", "Flask"],
    github: "https://github.com",
    demo: "#",
    imageId: "medical-plant",
  },
  {
    name: "Sales Analytics",
    description: "Interactive sales analytics dashboard created using Power BI with advanced visualization.",
    tech: ["Power BI", "Excel", "DAX", "SQL"],
    github: "https://github.com",
    demo: "#",
    imageId: "sales-dashboard",
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
            const imageData = PlaceHolderImages.find((img) => img.id === project.imageId);
            return (
              <motion.div
                key={project.name}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 glass transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={imageData?.imageUrl || "https://placehold.co/600x400"}
                    alt={project.name}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={imageData?.imageHint || "coding project"}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 bg-white text-black rounded-full hover:bg-secondary hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-white/5 border-white/10 hover:bg-white/10">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-3">{project.name}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
