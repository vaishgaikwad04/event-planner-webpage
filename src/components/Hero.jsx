import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) gallerySection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/6b/c0/12/6bc012369085e7808d6a47541e97370c.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <motion.div
          className="max-w-xl text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.35em] text-[#e6c88c] uppercase mb-4">
            Event Planner & Décor
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 drop-shadow-lg">
            Planning an Event?
            <br />
            We Decorate Your{" "}
            <span className="text-[#f5e6c8]">Special Moments</span>
          </h1>

          <p className="text-gray-300 mb-8 leading-relaxed text-[15px] drop-shadow-md">
            Elegant wedding and event decoration for all celebrations.
            <br />
            <span className="text-[#e6c88c] font-medium">
              10+ years of experience
            </span>{" "}
            serving Aurangabad & nearby areas.
          </p>

          <div className="flex flex-wrap gap-4 justify-start">
            <a
              href="tel:+917028060440"
              className="bg-[#e6c88c] text-black px-7 py-3 rounded-full font-medium
                         shadow-lg shadow-black/30
                         hover:bg-[#d6b774] hover:scale-105 transition-all duration-300"
              aria-label="Call Event Planner"
            >
              📞 Call Now
            </a>

            <button
              onClick={scrollToGallery}
              className="border border-white/60 text-white px-7 py-3 rounded-full
                         hover:bg-white hover:text-black hover:scale-105
                         transition-all duration-300"
              aria-label="See Our Work Gallery"
            >
              See Our Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
