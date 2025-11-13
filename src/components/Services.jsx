import React from "react";
import { motion } from "framer-motion";
import { PartyPopper, Briefcase, Heart, Gift, MessageCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Weddings & Receptions",
      subtitle: "Elegant • Timeless • Memorable",
      img: "./1.jpg",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      desc: "From floral mandap designs to bespoke catering and themed décor, we craft every detail of your wedding with elegance and heart.",
      btn: "Explore Weddings",
    },
    {
      title: "Corporate Events",
      subtitle: "Professional • Impressive • Seamless",
      img: "./2.jpg",
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      desc: "Product launches, annual meets, or gala dinners — our planning and hospitality elevate your brand’s image effortlessly.",
      btn: "See Details",
    },
    {
      title: "Birthdays & Anniversaries",
      subtitle: "Fun • Joyful • Personalized",
      img: "./8.jpg",
      icon: <Gift className="w-8 h-8 text-yellow-500" />,
      desc: "Make every milestone magical with unique themes, curated décor, and delightful catering that brings smiles to every guest.",
      btn: "Plan Now",
    },
    {
      title: "Engagements & Housewarmings",
      subtitle: "Intimate • Classy • Charming",
      img: "./4.jpg",
      icon: <PartyPopper className="w-8 h-8 text-purple-500" />,
      desc: "Celebrate life’s precious moments with beautiful setups and warm hospitality designed to leave lasting impressions.",
      btn: "Book Today",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#fffaf5] via-white to-[#fffaf5]">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-gray-800"
        >
          Planning an Event? We’ve Got You Covered.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          From grand weddings to intimate gatherings, our event planning and catering services ensure every occasion shines with perfection.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {services.map((service, index) => (
          <motion.div
  key={index}
  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
  className="relative bg-white rounded-2xl shadow-md overflow-hidden group transform hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_25px_5px_rgba(255,200,0,0.4)] flex flex-col"
>
  {/* Image Section */}
  <div className="relative">
    <img
      src={service.img}
      alt={service.title}
      className="w-full h-64 object-cover brightness-90 group-hover:brightness-110 transition-all duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>

  {/* Text Section */}
  <div className="flex flex-col flex-grow p-6 text-center">
    <div>
      <div className="flex justify-center mb-3">{service.icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-amber-600 transition duration-300">
        {service.title}
      </h3>
      <p className="text-sm text-gray-500 italic mt-1">{service.subtitle}</p>
      <p className="mt-3 text-gray-600 text-base mb-2">{service.desc}</p>
    </div>

    {/* Button pinned at bottom */}
    <a
      href="/contact"
      className="inline-block mt-auto px-6 py-2  bg-blue-600 rounded-full text-white font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
    >
      {service.btn}
    </a>
  </div>
</motion.div>

          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Plan Your Perfect Event?
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            Contact us today and let’s bring your vision to life with seamless planning and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:from-pink-600 hover:to-red-600 transition duration-300"
            >
              Get a Free Quote
            </a>
            <a
              href="https://wa.me/919834608779"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 border-2 border-amber-400 text-amber-600 font-semibold rounded-full hover:bg-amber-500 hover:text-white shadow-md hover:shadow-[0_0_20px_rgba(255,200,0,0.4)] transition duration-300"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
