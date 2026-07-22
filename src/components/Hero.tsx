"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroContent } from "@/data/portfolio";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % heroContent.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90 z-10" />

      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Subtle animated grain texture */}
      <div className="absolute inset-0 z-10 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMSIgLz48L3N2Zz4=')]" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] text-accent mb-6 font-medium"
        >
          {heroContent.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-secondary font-[family-name:var(--font-heading)] mb-6"
        >
          {heroContent.name.split(" ").map((word, i) => (
            <span key={i} className="block leading-tight">
              {word}
            </span>
          ))}
        </motion.h1>

        {/* Rotating Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-10 md:h-12 mb-8 overflow-hidden"
        >
          <motion.div
            key={roleIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-xl md:text-2xl lg:text-3xl text-text-light font-light font-[family-name:var(--font-heading)] italic"
          >
            {heroContent.roles[roleIndex]}
          </motion.div>
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm md:text-base text-text-light/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {heroContent.introduction}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {heroContent.cta.map((cta) => (
            <button
              key={cta.label}
              onClick={() => handleScrollTo(cta.href)}
              className={`magnetic group relative px-8 py-4 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                cta.primary
                  ? "bg-accent text-primary hover:bg-accent-light"
                  : "bg-transparent text-secondary border border-secondary/30 hover:border-accent hover:text-accent"
              }`}
            >
              <span className="relative z-10">{cta.label}</span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => handleScrollTo("#about")}
        >
          <span className="text-xs text-text-light uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown size={16} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}