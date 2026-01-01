import React from "react";
import { motion } from "framer-motion";
import { PartyPopper, Briefcase, Heart, Gift } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Weddings & Receptions",
      subtitle:
        "Stage décor, fresh flower setup & complete lighting arrangement for your big day.",
      img: "/images/1.jpg",
      icon: Heart,
    },
    {
      title: "Corporate Events",
      subtitle:
        "Professional stage setup, banners, seating & branding for corporate functions.",
      img: "/images/2.jpg",
      icon: Briefcase,
    },
    {
      title: "Birthdays & Anniversaries",
      subtitle:
        "Theme-based decoration, balloon setup & photo backdrops for celebrations.",
      img: "https://i.pinimg.com/736x/c5/dc/a6/c5dca659f08e3aa3dc0d02a98fcc717d.jpg",
      icon: Gift,
    },
    {
      title: "Engagements & Housewarmings",
      subtitle:
        "Traditional décor, floral arrangements & elegant stage design.",
      img: "https://i.pinimg.com/1200x/71/43/63/7143635afbf381f6fa695d7198f36854.jpg",
      icon: PartyPopper,
    },
  ];

  return (
    <section id="services" className="bg-[#F7F2EA] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#C9A874] mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2E2424]">
            Event Decoration Services
          </h2>
          <p className="text-center text-gray-600 mt-6">
            Decoration is customized as per your budget, venue & function type.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <Icon className="w-7 h-7 text-[#C9A874]" />
                  </div>

                  <h3 className="text-lg font-serif text-[#3B2F2F]">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {service.subtitle}
                  </p>

                  <a
                    href="tel:+917028060440"
                    className="mt-5 inline-block text-sm border border-[#C9A874] text-[#C9A874] px-5 py-2 rounded-full
                               hover:bg-[#C9A874] hover:text-white transition-all duration-300"
                  >
                    Call for Booking
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
