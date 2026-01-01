import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FFF8EE] pt-16 pb-10 border-t border-gray-300/40">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#C9A874] transition-colors duration-300 text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#C9A874] transition-colors duration-300 text-2xl"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/917028060440"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#C9A874] transition-colors duration-300 text-2xl"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-300/40 mt-6 pt-6 text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} Mendap Decorators. All Rights Reserved. • Developed by{" "}
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A874] font-medium transition-colors duration-300"
          >
            Vaishnavi Gaikwad
          </a>
        </div>
      </div>
    </footer>
  );
}
