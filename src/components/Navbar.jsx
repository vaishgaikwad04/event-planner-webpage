import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-white/90 backdrop-blur-md shadow-md text-gray-800");
      } else {
        setBgColor("bg-transparent text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${bgColor}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a
          href="#home"
          className="font-serif text-2xl sm:text-3xl font-bold tracking-wide hover:text-yellow-600 transition"
        >
          Event <span className="text-yellow-500">Planner</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-500 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-yellow-500 transition">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-md text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
          <li>
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-yellow-600 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-yellow-600 transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-yellow-600 transition"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-yellow-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
