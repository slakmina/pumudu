"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Shapes,
  PenTool,
  Camera,
  User,
  Building2,
  Share2,
  Wand2,
  Clapperboard,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { servicesContent } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Palette,
  Shapes,
  PenTool,
  Camera,
  User,
  Building2,
  Share2,
  Wand2,
  Clapperboard,
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={servicesContent.title}
          subtitle={servicesContent.subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesContent.services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-8 bg-secondary rounded-lg border border-border/50 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-secondary transition-all duration-300">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3 font-[family-name:var(--font-heading)]">
                  {service.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}