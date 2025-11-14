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
    alert("Message sent! We will contact you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16 bg-[#fffaf4] text-gray-800"
    >
      {/* Title */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif font-semibold text-gray-900">
          Contact Us
        </h1>
        <div className="w-20 h-[3px] bg-[#C9A874] mx-auto mt-3"></div>
      </motion.div>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto items-start">
        {/* Left Info Section */}
        <motion.div
          className="space-y-6 pr-10 md:pr-16 leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif font-semibold text-gray-900">
            Let’s Make Your Moments Beautiful
          </h2>

          <div className="space-y-3 text-gray-700 text-lg">
            <p>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              <a
                href="mailto:mendapdecorator@gmail.com"
                className="underline hover:text-yellow-600"
              >
                jadhavvicky117@gmail.com
              </a>
            </p>

            <p>
              <span className="font-semibold text-gray-900">Phone:</span>{" "}
              <a
                href="tel:+917028060440"
                className="underline hover:text-yellow-600"
              >
                +91 70280 60440
              </a>
            </p>

            <p>
              <span className="font-semibold text-gray-900">Location:</span>{" "}
              Aurangabad, Maharashtra
            </p>

            <p>
              <span className="font-semibold text-gray-900">Working Hours:</span>{" "}
              Mon – Sat, 9AM – 7PM
            </p>
          </div>

          <a
            href="https://maps.google.com?q=Aurangabad"
            target="_blank"
            className="inline-block mt-4 px-7 py-2 bg-[#C9A874] text-white font-semibold rounded-md hover:bg-yellow-600 transition"
          >
            View on Map
          </a>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Input Fields */}
          {[
            { label: "Full Name *", name: "name", type: "text" },
            { label: "Email *", name: "email", type: "email" },
            { label: "Phone Number *", name: "phone", type: "tel" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block mb-2 text-gray-900 font-medium">
                {field.label}
              </label>
              <input
                name={field.name}
                type={field.type}
                required
                value={form[field.name]}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 pb-2 focus:outline-none focus:border-yellow-500 transition"
              />
            </div>
          ))}

          {/* Message */}
          <div>
            <label className="block mb-2 text-gray-900 font-medium">
              Message *
            </label>
            <textarea
              name="message"
              rows="3"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 pb-2 focus:outline-none focus:border-yellow-500 transition resize-none"
            />
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#C9A874] text-white font-semibold rounded-md hover:bg-yellow-600 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
