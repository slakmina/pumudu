"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/portfolio";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Contact" subtitle="Get in touch" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-heading)] mb-6">
              Let's create something meaningful together.
            </h3>
            <p className="text-text-light mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to bring your vision to life. Feel free to reach
              out through the form or any of the channels below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-light uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base text-primary hover:text-accent transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-light uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-base text-primary hover:text-accent transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-light uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-base text-primary">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-12 pt-8 border-t border-border">
              <a
                href={siteConfig.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-light hover:text-accent transition-colors uppercase tracking-wider"
              >
                Behance
              </a>
              <span className="text-border">/</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-light hover:text-accent transition-colors uppercase tracking-wider"
              >
                LinkedIn
              </a>
              <span className="text-border">/</span>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-light hover:text-accent transition-colors uppercase tracking-wider"
              >
                Facebook
              </a>
              <span className="text-border">/</span>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-light hover:text-accent transition-colors uppercase tracking-wider"
              >
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-primary text-sm"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-primary text-sm"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-primary mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-primary text-sm"
                placeholder="Project inquiry"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primary mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-primary text-sm resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="magnetic group flex items-center gap-3 px-8 py-4 bg-primary text-secondary text-sm font-medium uppercase tracking-wider hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Send Message
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}