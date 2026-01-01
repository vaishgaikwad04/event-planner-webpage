import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-[#FFF8EE] to-white px-6"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A874] mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2E2424]">
          Let’s Plan Your Event
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-[15px] leading-relaxed">
          Call us directly or send a short enquiry — we’ll respond quickly and professionally.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* LEFT – Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-10 space-y-8 hover:shadow-2xl transition-all"
        >
          <h3 className="text-2xl font-serif text-[#2E2424]">Event Planner & Décor</h3>

          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              📞{" "}
              <a href="tel:+917028060440" className="hover:text-[#C9A874]">
                +91 70280 60440
              </a>
            </p>
            <p>
              ✉️{" "}
              <a href="mailto:jadhavvicky117@gmail.com" className="hover:text-[#C9A874]">
                jadhavvicky117@gmail.com
              </a>
            </p>
            <p>📍 Aurangabad, Maharashtra</p>
            <p>⏰ Mon – Sat, 9:00 AM – 7:00 PM</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="tel:+917028060440"
              className="px-6 py-3 bg-gradient-to-r from-[#C9A874] to-[#bfa66a] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Call Now
            </a>
            <a
              href="https://maps.google.com?q=Aurangabad"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-[#C9A874] text-[#C9A874] rounded-full font-semibold hover:bg-[#C9A874] hover:text-white transition-all"
            >
              View Map
            </a>
          </div>
        </motion.div>

        {/* RIGHT – Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-10 space-y-6 hover:shadow-2xl transition-all"
        >
          {/** Name */}
          <div className="relative">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 pt-5 pb-3 focus:outline-none focus:border-[#C9A874] focus:ring-1 focus:ring-[#C9A874] transition-all"
            />
            <label className="absolute top-1 left-4 text-gray-400 text-sm pointer-events-none">
              Name
            </label>
          </div>

          {/** Phone */}
          <div className="relative">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 pt-5 pb-3 focus:outline-none focus:border-[#C9A874] focus:ring-1 focus:ring-[#C9A874] transition-all"
            />
            <label className="absolute top-1 left-4 text-gray-400 text-sm pointer-events-none">
              Phone Number
            </label>
          </div>

          {/** Message */}
          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Event type, date & location (optional)"
              className="w-full border border-gray-300 rounded-lg px-4 pt-5 pb-3 resize-none focus:outline-none focus:border-[#C9A874] focus:ring-1 focus:ring-[#C9A874] transition-all"
            ></textarea>
            <label className="absolute top-1 left-4 text-gray-400 text-sm pointer-events-none">
              Message
            </label>
          </div>

          {/** Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#C9A874] to-[#bfa66a] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Send Enquiry
          </button>

          {success && (
            <p className="text-green-600 text-center font-medium mt-2">
              ✅ Your enquiry has been sent successfully!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
