"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_DATA, SOCIAL_LINKS } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    // Simulate submission
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormState("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 lg:py-40 bg-[#0a0a0a] relative">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Large heading */}
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[0.95] mb-8">
            {CONTACT_DATA.heading.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-xl mb-12">
            {CONTACT_DATA.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Links */}
          <AnimatedSection delay={100}>
            <div className="flex flex-col gap-4">
              <MagneticButton
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="border border-white/20 text-white px-8 py-4 text-sm tracking-widest hover:bg-white hover:text-black justify-center lg:justify-start w-full sm:w-auto"
              >
                EMAIL ME ↗
              </MagneticButton>
              <MagneticButton
                href={SOCIAL_LINKS.github}
                className="border border-white/10 text-gray-400 px-8 py-4 text-sm tracking-widest hover:border-white/30 hover:text-white justify-center lg:justify-start w-full sm:w-auto"
              >
                GITHUB ↗
              </MagneticButton>
              <MagneticButton
                href={SOCIAL_LINKS.linkedin}
                className="border border-white/10 text-gray-400 px-8 py-4 text-sm tracking-widest hover:border-white/30 hover:text-white justify-center lg:justify-start w-full sm:w-auto"
              >
                LINKEDIN ↗
              </MagneticButton>
            </div>
          </AnimatedSection>

          {/* Right: Contact Form */}
          <AnimatedSection delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono text-gray-500 tracking-widest uppercase mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-sm focus:border-white/30 focus:outline-none transition-colors duration-300 placeholder:text-gray-700"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono text-gray-500 tracking-widest uppercase mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-sm focus:border-white/30 focus:outline-none transition-colors duration-300 placeholder:text-gray-700"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-gray-500 tracking-widest uppercase mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-sm focus:border-white/30 focus:outline-none transition-colors duration-300 resize-none placeholder:text-gray-700"
                  placeholder="Tell me about your idea..."
                />
              </div>

              <button
                type="submit"
                disabled={formState !== "idle"}
                className="w-full border border-white text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === "idle" && "SEND MESSAGE"}
                {formState === "sending" && "SENDING..."}
                {formState === "success" && "✓ MESSAGE SENT"}
              </button>

              {/* Success message */}
              {formState === "success" && (
                <p className="text-center text-sm text-gray-400 animate-fade-in">
                  Thanks! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
