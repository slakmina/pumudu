"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experienceContent } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={experienceContent.title}
          subtitle={experienceContent.subtitle}
        />

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={20} className="text-accent" />
              <h3 className="text-xl font-semibold text-primary font-[family-name:var(--font-heading)]">
                Career
              </h3>
            </div>
            <div className="relative border-l-2 border-border pl-8 space-y-10">
              {experienceContent.timeline.map((item, i) => (
                <motion.div
                  key={item.year + item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[33px] w-3 h-3 rounded-full bg-accent border-2 border-secondary" />
                  <span className="text-xs text-accent font-medium uppercase tracking-wider">
                    {item.year}
                  </span>
                  <h4 className="text-base font-semibold text-primary mt-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-light">{item.company}</p>
                  <p className="text-sm text-text-light mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={20} className="text-accent" />
              <h3 className="text-xl font-semibold text-primary font-[family-name:var(--font-heading)]">
                Education
              </h3>
            </div>
            <div className="space-y-8">
              {experienceContent.education.map((item, i) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 bg-secondary rounded-lg border border-border/50"
                >
                  <span className="text-xs text-accent font-medium">
                    {item.year}
                  </span>
                  <h4 className="text-base font-semibold text-primary mt-1">
                    {item.degree}
                  </h4>
                  <p className="text-sm text-text-light">{item.school}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award size={20} className="text-accent" />
              <h3 className="text-xl font-semibold text-primary font-[family-name:var(--font-heading)]">
                Awards
              </h3>
            </div>
            <div className="space-y-6">
              {experienceContent.awards.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award size={14} className="text-accent" />
                  </div>
                  <div>
                    <span className="text-xs text-accent font-medium">
                      {item.year}
                    </span>
                    <h4 className="text-sm font-semibold text-primary mt-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-light">{item.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}