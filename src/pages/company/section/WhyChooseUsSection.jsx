import {
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Users,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

import centerUp from "../../../assets/company/whychoose/center_up 4.14.04 PM.webp";
import leftUp from "../../../assets/company/whychoose/left_up.webp";
import mainBg from "../../../assets/company/whychoose/main_bg.webp";
import rightUp from "../../../assets/company/whychoose/right_up.webp";

const expertiseList = [
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Scalable frontend and backend systems built for long-term stability.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Engineering",
    desc: "Android and iOS applications aligned with real business use cases.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Secure cloud infrastructure, automation and CI/CD pipelines.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Security",
    desc: "Testing, monitoring and security-first engineering practices.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    desc: "Experienced engineers working as an extension of your team.",
  },
  {
    icon: Layers,
    title: "End-to-End Delivery",
    desc: "Ownership from planning to production deployment.",
  },
];

// Heading animation
const headingContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const headingWord = {
  hidden: { opacity: 0, x: -26 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyChooseUsSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:pl-10">

          {/* HEADING */}
          <motion.h2
            className="text-[2.25rem] md:text-[2.75rem] font-medium text-gray-900 mb-3 flex flex-wrap gap-2"
            variants={headingContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
          >
            <motion.span variants={headingWord}>Why</motion.span>
            <motion.span variants={headingWord}>Choose</motion.span>
            <motion.span variants={headingWord} className="text-[#007bff]">
              Appsixer
            </motion.span>
          </motion.h2>

          {/* BRAND ACCENT */}
          <div className="w-12 h-[2px] bg-[#007bff] mb-6" />

          {/* SUPPORTING LINE */}
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-lg mb-10">
            We focus on reliability, long-term partnerships, and predictable
            delivery for businesses across the United States.
          </p>

          {/* EXPERTISE LIST */}
          <div className="space-y-5">
            {expertiseList.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-5 items-start transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-400 mt-[2px]" />
                  <div>
                    <h4 className="text-[16px] font-medium text-gray-900 mb-[2px]">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-[14px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TRUST LINE */}
          <p className="mt-8 text-[13px] text-gray-500">
            Trusted by growing and established U.S.-based businesses.
          </p>
        </div>

        {/* ================= RIGHT IMAGES ================= */}
        <motion.div
          className="relative w-full h-[440px] lg:pr-10 mt-16 lg:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* BASE BG */}
          <motion.img
            src={mainBg}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-[78%] object-cover rounded-3xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* LEFT IMAGE */}
          <motion.img
            src={leftUp}
            alt=""
            loading="lazy"
            className="absolute bottom-0 left-0 w-[280px] translate-y-[8%] rounded-2xl shadow-lg z-20"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* CENTER IMAGE */}
          <motion.img
            src={centerUp}
            alt=""
            loading="lazy"
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[210px] rounded-xl shadow-md z-30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* RIGHT IMAGE */}
          <motion.img
            src={rightUp}
            alt=""
            loading="lazy"
            className="absolute top-14 right-0 w-[160px] rounded-xl shadow-sm z-10"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
