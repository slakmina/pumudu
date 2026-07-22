"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonialsContent } from "@/data/portfolio";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) =>
      prev === testimonialsContent.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonialsContent.testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title={testimonialsContent.title}
          subtitle={testimonialsContent.subtitle}
        />

        <div className="relative">
          {/* Quote Icon */}
          <Quote size={48} className="text-accent/20 absolute -top-4 -left-4" />

          {/* Testimonial */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="text-center px-8"
          >
            <p className="text-xl md:text-2xl text-primary leading-relaxed italic font-[family-name:var(--font-heading)] mb-8">
              &ldquo;{testimonialsContent.testimonials[current].quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-primary">
                {testimonialsContent.testimonials[current].author}
              </p>
              <p className="text-sm text-text-light">
                {testimonialsContent.testimonials[current].role}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-light hover:border-accent hover:text-accent transition-all"
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            <div className="flex gap-2">
              {testimonialsContent.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-accent w-6" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-light hover:border-accent hover:text-accent transition-all"
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}