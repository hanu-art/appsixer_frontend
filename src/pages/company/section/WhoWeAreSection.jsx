import { motion } from "framer-motion";
import {
  Lightbulb,
  Code2,
  Globe,
  TrendingUp,
} from "lucide-react";

/* =======================
   MOTION CONFIG
======================= */
const easeLuxury = [0.22, 1, 0.36, 1];

const leftFade = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.95,
      ease: easeLuxury,
    },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeLuxury,
    },
  },
};

const WhoWeAreSection = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            variants={leftFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="absolute -left-5 top-1 h-12 w-[2px] bg-[#007bff]" />

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Who we are
            </h2>

            <p className="text-lg text-gray-600 mb-6 max-w-lg">
              A technology partner built on trust, experience, and execution.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
              Established in 2011, Appsixer is a global software technology,
              consulting, and development company delivering end-to-end digital
              solutions. We partner with businesses to design, build, and scale
              products that create long-term value.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• 13+ years of industry experience</li>
              <li>• End-to-end product & engineering solutions</li>
              <li>• Expertise across multiple business domains</li>
              <li>• Focus on quality, scalability, and time-to-market</li>
            </ul>
          </motion.div>

          {/* RIGHT ICON CARDS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Lightbulb,
                title: "Innovation First",
                desc: "Driving ideas with modern technology and creative thinking.",
              },
              {
                icon: Code2,
                title: "Engineering Excellence",
                desc: "Scalable architecture and clean, reliable systems.",
              },
              {
                icon: Globe,
                title: "Global Delivery",
                desc: "Trusted by clients across countries and industries.",
              },
              {
                icon: TrendingUp,
                title: "Sustainable Growth",
                desc: "Solutions designed for long-term business success.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={card}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-[#007bff] group-hover:bg-[#007bff] group-hover:text-white transition">
                  <item.icon size={22} />
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
