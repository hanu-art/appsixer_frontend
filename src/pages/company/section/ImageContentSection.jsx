import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import aboutSideImage from "../../../assets/company/top/company_top_2.webp";

const ImageContentSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-xl group"
          >
            {/* IMAGE */}
            <img
              src={aboutSideImage}
              alt="Appsixer work culture"
              className="
                w-full h-full object-cover
                transition-transform duration-700 ease-out
                group-hover:scale-[1.05]
                opacity-90
              "
            />

            {/* CONSTANT SOFT DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/45" />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Built to deliver real business impact
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-xl">
              We work closely with businesses to understand their challenges
              and transform ideas into scalable, high-performing digital
              solutions that drive growth and efficiency.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center rounded-md bg-[#007bff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0069d9]"
            >
              Contact Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ImageContentSection;
