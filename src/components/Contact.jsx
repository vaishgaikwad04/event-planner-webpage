import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Mandap Decorator! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-[#fff9f2] to-white py-28 px-6 md:px-16 mx-4 sm:mx-6 md:mx-16">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-4 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
      </div>

      {/* Content Layout */}
      <div className="grid gap-12 sm:gap-16 md:grid-cols-2 max-w-6xl mt-4 mx-auto">
        {/* Left Info Section */}
        <motion.div
          className="space-y-6 sm:space-y-8 mt-8 sm:mt-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-gray-900">
            Let’s Create Something Beautiful
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Planning an event or wedding? We’d love to bring your vision to life.  
            Reach out to us for decoration ideas, packages, and bookings.
          </p>

          <div className="space-y-2 text-gray-700 text-base sm:text-lg">
            <p>
              <span className="font-medium text-gray-900">Email:</span>{" "}
              <a
                href="mailto:mendapdecorator@gmail.com"
                className="text-gray-700 hover:text-yellow-500 transition-colors underline underline-offset-4"
              >
                jadhavvicky117@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium text-gray-900">Phone:</span>{" "}
              <a
                href="tel:+917028060440"
                className="text-gray-700 hover:text-yellow-500 transition-colors underline underline-offset-4"
              >
                +91 70280 60440
              </a>
            </p>
            <p>
              <span className="font-medium text-gray-900">Location:</span> Aurangabad, Maharashtra
            </p>
            <p>
              <span className="font-medium text-gray-900">Working Hours:</span> Mon – Sat, 9:00 AM – 7:00 PM
            </p>
          </div>

          <div className="mt-6">
            <a
              href="https://maps.google.com?q=Aurangabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-lg border border-yellow-500 bg-yellow-500 text-white font-semibold rounded-xl transform transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 hover:bg-white hover:text-yellow-500"
            >
              Find Us on Map
            </a>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 mt-8 sm:mt-12">
          {[
            { label: "Full Name *", name: "name", type: "text", placeholder: "Enter your name" },
            { label: "Email *", name: "email", type: "email", placeholder: "example@mail.com" },
            { label: "Phone Number *", name: "phone", type: "tel", placeholder: "+91 98765 43210" },
          ].map((field, idx) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + idx * 0.1, duration: 1 }}
            >
              <label className="block text-sm sm:text-base mb-1 text-gray-900">{field.label}</label>
              <input
                name={field.name}
                type={field.type}
                required
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 focus:outline-none  focus:ring-2 focus:ring-gray-400 shadow-sm transition-shadow duration-300 "
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <label className="block text-sm sm:text-base mb-1 text-gray-900">Message *</label>
            <textarea
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your event or decoration needs..."
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm transition-shadow duration-300 resize-none"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 border border-yellow-500 bg-yellow-500 text-white font-semibold rounded-xl transform transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 hover:bg-white hover:text-yellow-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
