import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false); // track if navbar is over light bg

  const menuItems = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "packages", path: "/packages" },
    { name: "gallery", path: "/gallery" },
    { name: "contact", path: "/contact" },
  ];

  const socialLinks = [
    { Icon: FaInstagram, url: "https://instagram.com/" },
    { Icon: FaFacebookF, url: "https://facebook.com/" },
    { Icon: FaPinterestP, url: "https://pinterest.com/" },
  ];

  // Optionally: detect scroll or page section for light/dark bg
  useEffect(() => {
    const handleScroll = () => {
      setIsLightBg(window.scrollY > 0); // adjust threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar background: dark only when menu open
  const getBgColor = () => (isMenuOpen ? "bg-[#0D0D0D]/95 backdrop-blur-xl" : "bg-transparent");

  // Hamburger color: white on dark/transparent, dark on light bg
  const getHamburgerColor = () => {
    if (isMenuOpen) return "text-white";
    return isLightBg ? "text-gray-900" : "text-white";
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${getBgColor()}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl italic font-light text-white transition">
       
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`text-3xl md:text-3xl transition ${getHamburgerColor()}`}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Full Width Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden"
      >
        <div className="flex flex-col items-center text-white space-y-6 py-6">
          {menuItems.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-light hover:text-[#CBB892] transition"
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </motion.div>
          ))}

          <div className="flex space-x-6 pt-4 text-2xl">
            {socialLinks.map(({ Icon, url }, idx) => (
              <motion.a
                key={idx}
                href={url}
                target="_blank"
                whileHover={{ scale: 1.2, color: "#CBB892" }}
                className="transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
