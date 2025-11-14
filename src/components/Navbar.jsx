import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");

 useEffect(() => {
  const handleScroll = () => {
    console.log(window.scrollY); // debug
    if (window.scrollY > 50) {
      setBgColor("bg-[#f8f4f0]/90 backdrop-blur-xl shadow-lg text-gray-900");
    } else {
      setBgColor("bg-transparent text-white");
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const menuItems = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "packages", path: "/packages" },
    { name: "gallery", path: "/gallery" },
    { name: "contact", path: "/contact" },
  ];

  const socialLinks = [
    { Icon: FaInstagram, url: "https://instagram.com/vickyjadhav475" },
    { Icon: FaFacebookF, url: "https://facebook.com/" }, // replace with your FB
    { Icon: FaPinterestP, url: "https://pinterest.com/" }, // replace with your Pinterest
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${bgColor}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl italic tracking-wide font-light text-white hover:text-[#CBB892] transition"
        >
          Elegant Moments
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300 font-light tracking-wide mx-auto">
          {menuItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }}>
              <Link to={item.path} className="hover:text-[#CBB892] transition">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-5 text-white text-xl">
          {socialLinks.map(({ Icon, url }, idx) => (
            <motion.a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#CBB892" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-white focus:outline-none"
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
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="md:hidden absolute w-full bg-[#0D0D0D]/95 backdrop-blur-xl shadow-xl text-gray-300"
      >
        <ul className="flex flex-col items-center space-y-6 py-6 font-light tracking-wide text-lg">
          {menuItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.05 }}>
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#CBB892] transition"
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Social Icons */}
        <div className="flex justify-center space-x-6 pb-6 text-white text-xl">
          {socialLinks.map(({ Icon, url }, idx) => (
            <motion.a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#CBB892" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
