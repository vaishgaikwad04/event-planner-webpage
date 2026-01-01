import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="text-lg md:text-xl tracking-wide italic font-medium text-white">
          Event Planner & Décor
        </a>

        {/* Call & Map Buttons */}
        <div className="flex items-center gap-4">
          {/* Call Button */}
          <a
            href="tel:+917028060440"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#CBB892] text-black text-sm font-medium shadow"
          >
            <FaPhoneAlt /> Call
          </a>

          {/* Map Button */}
          <a
            href="https://www.google.com/maps?q=Aurangabad,Maharashtra"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#CBB892] text-black text-sm font-medium shadow"
          >
            <FaMapMarkerAlt /> Map
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
