"use client";

import { motion } from "framer-motion";
import { ArrowUp, Link2, Camera, Globe } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-secondary py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)] text-secondary hover:text-accent transition-colors"
            >
              Pumudu<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-text-light mt-2 max-w-xs">
              Creative Designer & Photographer crafting visual stories that inspire.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light hover:text-accent transition-colors"
              aria-label="Behance"
            >
              <Globe size={20} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Link2 size={20} />
            </a>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light hover:text-accent transition-colors"
              aria-label="Facebook Photography"
            >
              <Camera size={20} />
            </a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 border border-text-light/30 rounded-full text-text-light hover:text-accent hover:border-accent transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        <div className="border-t border-text-light/20 mt-12 pt-8 text-center">
          <p className="text-sm text-text-light">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}