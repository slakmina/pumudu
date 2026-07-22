"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { processContent } from "@/data/portfolio";

export default function Process() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={processContent.title}
          subtitle={processContent.subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processContent.steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              {/* Step number */}
              <span className="text-6xl md:text-7xl font-bold text-accent/20 font-[family-name:var(--font-heading)] block mb-4">
                {step.step}
              </span>
              <h3 className="text-xl font-semibold text-primary mb-3 font-[family-name:var(--font-heading)]">
                {step.title}
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                {step.description}
              </p>
              {/* Timeline connector */}
              {i < processContent.steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[calc(100%-0.5rem)] w-[calc(100%+1rem)] h-[1px] bg-border">
                  <div className="w-2 h-2 rounded-full bg-accent absolute -top-[3px] right-0" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}