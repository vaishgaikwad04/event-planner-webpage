import React from "react";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
  <footer className="bg-[#fef7ef] pt-16 pb-10 border-t border-gray-300/40">
  <div className="max-w-7xl mx-auto px-6">

   

     

    {/* Bottom */}
    <div className="border-t border-gray-300 mt-10 pt-6 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Mendap Decorators. All Rights Reserved. • Developed by <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">Vaishnavi Gaikwad</a>
    </div>
  </div>
</footer>

  );
}
