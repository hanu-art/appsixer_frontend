import { motion } from "framer-motion";

const ContactHero = ({ onCTAClick }) => {
  return (
    <section className="relative w-full overflow-hidden pt-28 md:pt-32 min-h-[72vh] flex items-center">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2070&q=80"
        alt="Technology background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center pb-14"
      >
        {/* Tagline */}
        <p className="text-blue-200 text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
          Turning ideas into scalable products
        </p>

        {/* Main Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
          Let’s Build Something <br className="hidden sm:block" />
          Remarkable Together
        </h1>

        {/* Description */}
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          From idea to launch, our experts help startups and enterprises
          build reliable, high-performance digital products.
        </p>

        {/* CTA Button */}
        <button
          onClick={onCTAClick}
          className="mt-9 inline-flex items-center justify-center
                     bg-[#007bff] hover:bg-[#0069d9]
                     text-white text-sm font-medium
                     px-8 py-3 rounded-md
                     shadow-md hover:shadow-lg
                     transition-all duration-200"
        >
          Start Your Project
        </button>
      </motion.div>
    </section>
  );
};

export default ContactHero;
