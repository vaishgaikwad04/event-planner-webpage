import React from "react";
import { motion } from "framer-motion";

const Packages = () => {
  const packages = [
    {
      name: "Basic Package",
      price: "$999",
      description:
        "Simple yet elegant Mandap setup with classic floral decorations and a minimal touch of tradition.",
      features: [
        "Basic Mandap Design",
        "Standard Floral Arrangements",
        "Setup & Takedown",
        "1 Hour Setup Time",
      ],
      img: "./1.jpg",
    },
    {
      name: "Premium Package",
      price: "$1999",
      description:
        "An elegant Mandap design with luxurious flowers, soft lighting, and a touch of sophistication.",
      features: [
        "Premium Mandap Design",
        "Enhanced Floral Arrangements",
        "Elegant Lighting Setup",
        "Setup & Takedown",
        "2 Hour Setup Time",
        "1 Free Consultation",
      ],
      img: "./2.jpg",
    },
    {
      name: "Deluxe Package",
      price: "$2999",
      description:
        "The ultimate wedding Mandap experience with custom design, floral art, and breathtaking décor elements.",
      features: [
        "Custom Mandap Design",
        "Full Floral Decorations",
        "Customized Lighting & Decor",
        "Setup & Takedown",
        "4 Hour Setup Time",
        "Free Design Consultation",
        "Exclusive Decor Additions",
      ],
      img: "./3.jpg",
    },
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-[#fff9f2] to-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-gray-900"
        >
          Our Exclusive Wedding Packages
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto"
        >
          Choose from our curated Mandap packages crafted to match every couple’s
          unique style, from simple elegance to royal grandeur.
        </motion.p>

        {/* Package Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(255,193,7,0.3)] transition-transform transform hover:-translate-y-2 duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <p className="absolute bottom-4 left-4 bg-amber-400 text-gray-900 font-semibold px-4 py-1 rounded-full shadow-md">
                  {pkg.price}
                </p>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-8 text-left">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{pkg.name}</h3>
                  <p className="mt-2 text-gray-700 text-sm">{pkg.description}</p>

                  {/* Features */}
                  <ul className="mt-5 space-y-2 text-gray-600 text-sm">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-amber-500">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button pinned bottom */}
                <div className="mt-auto text-center pt-6">
                  <a
                    href="#contact"
                    className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-[0_0_20px_rgba(255,200,0,0.4)] hover:scale-105 transition-all duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
