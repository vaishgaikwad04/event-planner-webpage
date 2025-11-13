import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-200 py-16 px-6 sm:px-10 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About / Branding */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-gray-100">
            Mendap Decorator
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Making your special moments beautiful and memorable.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="font-serif font-semibold text-gray-100 text-lg">Contact</h3>
          <p className="text-sm sm:text-base">
            <span className="font-medium text-gray-100">Email:</span>{" "}
            <a
              href="mailto:mendapdecorator@gmail.com"
              className="text-gray-300 hover:text-yellow-500 transition-colors underline underline-offset-2"
            >
              mendapdecorator@gmail.com
            </a>
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-medium text-gray-100">Phone:</span>{" "}
            <a
              href="tel:+919876543210"
              className="text-gray-300 hover:text-yellow-500 transition-colors underline underline-offset-2"
            >
              +91 98765 43210
            </a>
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-medium text-gray-100">Location:</span> Aurangabad, Maharashtra
          </p>
        </div>

        {/* Social / Quick Links */}
        <div className="space-y-3">
          <h3 className="font-serif font-semibold text-gray-100 text-lg">Follow Us</h3>
          <div className="flex gap-5 mt-2">
            <a
              href="https://instagram.com/mandapdecorator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition-colors font-medium"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/mandapdecorator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors font-medium"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-500 transition-colors font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Divider with shadow */}
      <div className="mt-10 pt-6 text-center text-gray-400 text-sm sm:text-base space-y-1 shadow-inner">
        <p>&copy; {new Date().getFullYear()} Mendap Decorator. All rights reserved.</p>
        <p>
          Developed by{" "}
          <span className="text-gray-100 font-medium">Vaishnavi Gaikwad</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
