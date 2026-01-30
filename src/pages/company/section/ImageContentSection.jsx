import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import aboutSideImage from "../../../assets/company/top/company_top_2.webp";

const ImageContentSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl group shadow-sm"
          >
            {/* IMAGE */}
            <img
              src={aboutSideImage}
              alt="Appsixer work culture"
              className="
                w-full h-full object-cover
                transition-all duration-700 ease-out
                group-hover:scale-[1.04]
              "
            />

            {/* SOFT OVERLAY (LIGHTER) */}
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/25" />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* HEADING */}
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">
              Built to deliver real business impact
            </h3>

            {/* BRAND ACCENT */}
            <div className="w-10 h-[2px] bg-[#007bff] mb-5" />

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed mb-7 max-w-xl text-[15px]">
              We work closely with businesses to understand their challenges
              and transform ideas into scalable, high-performing digital
              solutions that drive growth and efficiency.
            </p>

            {/* CTA */}
            <button
              onClick={() => navigate("/contact")}
              className="
                inline-flex items-center rounded-md
                bg-[#007bff] px-5 py-2.5
                text-sm font-medium text-white
                transition hover:bg-[#0069d9]
              "
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
