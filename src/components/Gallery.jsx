import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);

  const images = [
    { src: "/images/1.jpg", caption: "Wedding Stage – CIDCO, Aurangabad" },
    { src: "/images/2.jpg", caption: "Engagement Setup – Paithan Road, Aurangabad" },
    { src: "/images/4.jpg", caption: "Reception Décor – Jalna Road, Aurangabad" },
    { src: "/images/5.jpg", caption: "Traditional Wedding Setup – CIDCO, Aurangabad" },
    { src: "/images/6.jpg", caption: "Engagement Floral Setup – Aurangabad" },
    { src: "/images/7.jpg", caption: "Birthday Party Decoration – Aurangabad" },
    { src: "/images/8.jpg", caption: "Reception Stage & Lighting – Aurangabad" },
    { src: "/images/10.jpg", caption: "Housewarming Décor – Aurangabad" },
  ];

  const openImagePopup = (image) => setSelectedImage(image);
  const closePopup = () => setSelectedImage(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedImage) return;
      const currentIndex = images.findIndex((img) => img.src === selectedImage.src);

      if (e.key === "Escape") closePopup();
      if (e.key === "ArrowRight")
        setSelectedImage(images[(currentIndex + 1) % images.length]);
      if (e.key === "ArrowLeft")
        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, images]);

  // Horizontal scroll
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#FFF8EE] to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#C9A874] mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2E2424]">
            Our Decoration Gallery
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Over 10 years of experience delivering beautiful decorations on time, within budget,
            with a polite and professional team trusted by local families for every wedding,
            birthday, and special event.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative mt-14">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-14px] top-1/2 -translate-y-1/2
                       bg-white shadow-md text-[#C9A874] 
                       w-10 h-10 rounded-full z-10
                       hover:bg-[#C9A874] hover:text-white transition-all duration-300"
            aria-label="Scroll Left"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-14px] top-1/2 -translate-y-1/2
                       bg-white shadow-md text-[#C9A874] 
                       w-10 h-10 rounded-full z-10
                       hover:bg-[#C9A874] hover:text-white transition-all duration-300"
            aria-label="Scroll Right"
          >
            ›
          </button>

          {/* Images */}
          <motion.div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 scroll-smooth"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                onClick={() => openImagePopup(image)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative min-w-[260px] md:min-w-[340px] lg:min-w-[380px]
                           cursor-pointer rounded-3xl overflow-hidden shadow-lg group"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-[260px] md:h-[340px] lg:h-[380px]
                             object-cover transition-transform duration-700
                             group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full bg-black/40 text-white text-xs p-2 text-center">
                  {image.caption}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Hint */}
          <p className="mt-4 text-xs text-gray-500 md:hidden">
            Swipe left or right to see more work
          </p>
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
                className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-white"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 bg-white/90 text-black w-10 h-10 rounded-full text-xl
                             hover:bg-white transition-all duration-300 z-10"
                  aria-label="Close Image"
                >
                  ×
                </button>

                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="w-full max-h-[75vh] object-contain bg-black"
                />
                <p className="p-4 text-center text-gray-700 text-sm md:text-base">
                  {selectedImage.caption}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
