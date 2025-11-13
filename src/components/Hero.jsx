import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('./1.jpg')",
      }}
    >
      {/* Romantic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20"></div>

      {/* Soft ambient vignette */}
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-6 sm:px-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-[0_5px_12px_rgba(0,0,0,0.4)]"
        >
          Celebrate with{" "}
          <span className="text-yellow-400" >Elegance & Grandeur</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-2xl max-w-3xl mx-auto text-gray-100 mb-10 leading-relaxed"
        >
          From weddings to corporate celebrations, we design breathtaking event
          experiences that reflect your style, culture, and dreams.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 px-10 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300"
          >
            Book Your Dream Setup
          </a>
          <a
            href="#gallery"
            className="border-2 border-white text-white py-3 px-10 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Decorative subtle sparkles overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-soft-light"></div>

      {/* Optional Floating Light Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-40 h-40 bg-pink-300/20 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '15%', right: '10%' }}
        />
      </div>
    </section>
  );
};

export default Hero;
