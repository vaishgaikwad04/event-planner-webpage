import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section
      className="
        relative w-full h-screen 
        bg-cover bg-center 
        overflow-hidden
      "
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/29/83/18/298318b2086b780d252affe64324b20f.jpg')",
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center 
                      text-center text-white h-full px-6 sm:px-10">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-wide mb-4"
        >
          Making Your Special Day Beautiful
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm sm:text-lg max-w-md sm:max-w-xl mx-auto text-gray-200 mb-8 leading-relaxed"
        >
          We create soft, elegant and heartwarming décor that adds love and magic to your moments.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Gold Button */}
          <motion.a
            href="/contact"
            style={{ backgroundColor: '#A88B5E' }}
            className="text-white py-2.5 px-8 rounded-full text-base font-medium shadow-md"
            whileHover={{ scale: 1.05, opacity: 0.9 }}
          >
            Book Your Event
          </motion.a>

          {/* Outline Button */}
          <motion.a
            href="/gallery"
            className="border border-gray-200 text-white py-2.5 px-8 rounded-full text-base font-medium"
            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
          >
            View Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
