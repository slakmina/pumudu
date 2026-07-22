"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projectsContent } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={projectsContent.title}
          subtitle={projectsContent.subtitle}
        />

        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {projectsContent.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative break-inside-avoid overflow-hidden rounded-lg bg-background cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] md:aspect-auto md:h-[400px] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 flex items-center justify-center">
                  <span className="text-secondary text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2">
                    View Project <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-accent font-medium">
                    {project.category}
                  </span>
                  <span className="text-xs text-text-light">{project.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary font-[family-name:var(--font-heading)] mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-border/50 text-text-light rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}