import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "./1.jpg", "./2.jpg", "./8.jpg", "./4.jpg",
    "./5.jpg", "./6.jpg", "./7.jpg", "./8.jpg", "./10.jpg",
  ];

  const imagesPerPage = 3;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleDotClick = (index) => setCurrentIndex(index);

  const nextPage = () =>
    setCurrentIndex((prev) => (prev + imagesPerPage >= images.length ? 0 : prev + imagesPerPage));

  const prevPage = () =>
    setCurrentIndex((prev) =>
      prev - imagesPerPage < 0 ? (totalPages - 1) * imagesPerPage : prev - imagesPerPage
    );

  const imagesToShow = images.slice(currentIndex, currentIndex + imagesPerPage);

  const openImagePopup = (image) => setSelectedImage(image);
  const closePopup = () => setSelectedImage(null);

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && closePopup();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-[#fff9f2] to-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-gray-900"
        >
          Wedding Moments Gallery
        </motion.h2>

        {/* Gallery Wrapper */}
        <div className="relative mt-12">
          {/* Left Arrow */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full z-10 hover:bg-black/70"
          >
            &#8592;
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full z-10 hover:bg-black/70"
          >
            &#8594;
          </button>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 min-h-[300px] md:min-h-[400px] lg:min-h-[480px]">
            {imagesToShow.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                onClick={() => openImagePopup(image)}
              >
                <img
                  loading="lazy"
                  src={image}
                  alt="wedding"
                  className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleDotClick(index * imagesPerPage)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                index * imagesPerPage === currentIndex ? "bg-yellow-500 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Popup */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
            >
              <motion.div
                className="relative max-w-5xl w-full rounded-2xl overflow-hidden"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={closePopup}
                  whileHover={{ scale: 1.2 }}
                  className="absolute top-3 right-3 bg-black/50 text-white text-2xl px-3 py-1 rounded-full hover:bg-black/70 z-10"
                >
                  ×
                </motion.button>

                {/* Open Fullscreen */}
                <a
                  href={selectedImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 bg-white/80 text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-white z-10"
                >
                  Open Fullscreen
                </a>

                {/* Image */}
                <motion.img
                  src={selectedImage}
                  alt="Selected wedding"
                  className="w-full h-auto max-h-[90vh] object-contain"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
