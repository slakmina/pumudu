"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillsContent } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={skillsContent.title}
          subtitle={skillsContent.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-12">
          {skillsContent.categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-8 font-[family-name:var(--font-heading)]">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: catIndex * 0.2 + i * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-text">
                        {skill}
                      </span>
                      <span className="text-xs text-text-light">
                        {(88 + (i * 2) % 10)}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${88 + (i * 2) % 10}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.2 + i * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}