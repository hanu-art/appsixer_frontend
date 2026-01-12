import { motion } from "framer-motion";

const ContactCTA = ({ onCTAClick }) => {
  return (
    <section className="bg-[#007bff] text-white py-14 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        {/* 🔹 Bigger Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Start Your Project?
        </h2>

        <p className="text-blue-100 mb-7 max-w-2xl mx-auto text-sm md:text-base">
          Join 100+ satisfied clients who trusted us to build scalable,
          reliable, and high-performing digital products.
        </p>

        {/* 🔹 Buttons always in ROW (even mobile) */}
        <div className="flex flex-row gap-3 justify-center items-center">
          {/* Primary CTA */}
          <button
            onClick={onCTAClick}
            className="bg-white text-[#007bff]
                       text-sm font-medium
                       px-6 py-2.5
                       rounded-md
                       shadow-sm hover:shadow-md
                       transition-all duration-200"
          >
            Get a Free Quote
          </button>

          {/* Secondary CTA */}
          <a
            href="mailto:info@appsixer.com"
            className="border border-white/70
                       text-white
                       text-sm font-medium
                       px-6 py-2.5
                       rounded-md
                       hover:bg-white hover:text-[#007bff]
                       transition-all duration-200"
          >
            Email Us
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
