import React from "react";
import { motion } from "framer-motion";

const Packages = () => {
  const packages = [
    {
      name: "Basic Package",
      price: "₹9,999 – ₹14,999",
      description:
        "A clean and simple mandap setup perfect for small weddings and home functions.",
      features: [
        "Simple Mandap Setup",
        "Basic Flower Decoration",
        "Cloth Backdrop",
        "Setup & Takedown",
      ],
      img: "./1.jpg",
    },
    {
      name: "Premium Package",
      price: "₹19,999 – ₹29,999",
      description:
        "A stylish mandap with good flowers, soft lighting, and neat decoration for medium-budget events.",
      features: [
        "Premium Mandap Design",
        "Good Quality Flowers",
        "Soft Lighting",
        "Entry Decoration",
        "Setup & Takedown",
      ],
      img: "./2.jpg",
    },
    {
      name: "Deluxe Package",
      price: "₹39,999 – ₹59,999",
      description:
        "A full decoration package with a beautiful mandap, stage backdrop, and floral design.",
      features: [
        "Complete Mandap Setup",
        "Heavy Floral Decoration",
        "Stage Backdrop",
        "Lighting & Side Decor",
        "Setup & Takedown",
      ],
      img: "./8.jpg",
    },
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-[#fff9f2] to-white">
      <div className="max-w-7xl mx-auto text-center px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-serif text-gray-900"
        >
          Our Wedding Packages
        </motion.h2>

        {/* Optional short paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Choose a package that suits your style and budget. We take care of all the décor details, from the mandap to floral arrangements, to make your wedding day truly special.
        </motion.p>

        {/* Package Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03, boxShadow: "0px 15px 35px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.5, type: "spring", stiffness: 250 }}
              className="group relative bg-white rounded-2xl overflow-hidden flex flex-col shadow-lg"
            >
              
              {/* Image */}
              <motion.div
                className="relative w-full h-64 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute bottom-3 left-3 bg-[#C9A874] text-white font-semibold px-4 py-1 rounded-full shadow-lg text-sm"
                >
                  {pkg.price}
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-8 text-left">
                <h3 className="text-2xl font-semibold text-gray-900">{pkg.name}</h3>
                <p className="mt-2 text-gray-700 text-sm">{pkg.description}</p>

                {/* Features */}
                <ul className="mt-5 space-y-2 text-gray-600 text-sm">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C9A874]">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <motion.div className="mt-auto text-center pt-6">
                  <motion.a
                    href="/contact"
                    className="inline-block bg-[#C9A874] text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md"
                    whileHover={{ scale: 1.05, backgroundColor: "#b7905c" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Book Now
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
