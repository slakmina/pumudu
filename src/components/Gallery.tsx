"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { galleryContent } from "@/data/portfolio";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryContent.images
      : galleryContent.images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={galleryContent.title}
          subtitle={galleryContent.subtitle}
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryContent.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-secondary"
                  : "bg-secondary text-text-light hover:text-primary border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div className="gallery-masonry">
          <AnimatePresence mode="wait">
            {filteredImages.map((image, i) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setLightboxImage(image.src)}
              >
                <div
                  className="w-full bg-cover bg-center bg-border"
                  style={{
                    backgroundImage: `url('${image.src}')`,
                    paddingBottom: `${((i * 7 + 2) % 20) * 3 + 80}%`,
                    minHeight: "250px",
                  }}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center">
                  <span className="text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-wider">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lightbox-overlay flex items-center justify-center p-8"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-secondary hover:text-accent transition-colors z-10"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightboxImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}