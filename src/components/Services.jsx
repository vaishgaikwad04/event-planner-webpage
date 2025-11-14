import React from "react";
import { motion } from "framer-motion";
import { PartyPopper, Briefcase, Heart, Gift } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Weddings & Receptions",
      subtitle: "Simple • Elegant",
      img: "./1.jpg",
      icon: <Heart className="w-8 h-8 text-[#C9A874]" />,
      btn: "Explore",
    },
    {
      title: "Corporate Events",
      subtitle: "Clean • Professional",
      img: "./2.jpg",
      icon: <Briefcase className="w-8 h-8 text-[#C9A874]" />,
      btn: "Details",
    },
    {
      title: "Birthdays & Anniversaries",
      subtitle: "Warm • Family-Friendly",
      img: "https://i.pinimg.com/736x/c5/dc/a6/c5dca659f08e3aa3dc0d02a98fcc717d.jpg",
      icon: <Gift className="w-8 h-8 text-[#C9A874]" />,
      btn: "Plan",
    },
    {
      title: "Engagements & Housewarmings",
      subtitle: "Soft • Classy",
      img: "https://i.pinimg.com/1200x/71/43/63/7143635afbf381f6fa695d7198f36854.jpg",
      icon: <PartyPopper className="w-8 h-8 text-[#C9A874]" />,
      btn: "Book",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#F6F0E7]">
      <div className="max-w-7xl mx-auto text-center px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-serif text-black"
        >
          We Decorate Your Special Moments
        </motion.h2>

        {/* Short paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          From intimate gatherings to grand celebrations, we craft décor that is soft, elegant, and full of love. Each event is designed to leave lasting memories for you and your guests.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 250 }}
              className="bg-[#F8F4EF] border border-[#D8C29E] rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2"
            >
              {/* Image */}
              <a
                href={service.img}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-60 object-cover rounded-t-2xl"
                />
              </a>

              {/* Title Section */}
              <div className="p-6 text-center">
                <div className="flex justify-center mb-3">{service.icon}</div>
                <h3 className="text-2xl font-semibold font-serif text-[#3B2F2F]">
                  {service.title}
                </h3>
                <p className="text-sm text-[#A08D80] italic mt-1">{service.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
