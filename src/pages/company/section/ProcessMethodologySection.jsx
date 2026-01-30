import { motion } from "framer-motion";
import {
  Search,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const easeLuxury = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeLuxury },
  },
};

const ProcessMethodologySection = () => {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">
            Process & Methodology
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            How we transform ideas into scalable digital products
          </p>
        </div>

        {/* PROCESS GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              step: "01",
              icon: Search,
              title: "Analysis & Planning",
              desc:
                "We analyze your idea, understand business goals, and define a clear roadmap with scope, timelines, and architecture.",
            },
            {
              step: "02",
              icon: Code2,
              title: "Implementation",
              desc:
                "Using agile practices, we build scalable and optimized solutions with regular updates and transparent milestones.",
            },
            {
              step: "03",
              icon: ShieldCheck,
              title: "Testing & Quality Assurance",
              desc:
                "Rigorous testing ensures performance, security, and reliability across all platforms and use cases.",
            },
            {
              step: "04",
              icon: Rocket,
              title: "Deployment & Maintenance",
              desc:
                "We handle deployment and provide continuous support, monitoring, and improvements post-launch.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              className="
                group relative rounded-xl bg-white p-8
                border border-gray-200
                transition-all duration-200
                hover:shadow-sm
              "
            >
              {/* LEFT HOVER BORDER */}
              <div
                className="
                  pointer-events-none
                  absolute top-0 left-0 h-full
                  w-[4px]
                  bg-transparent
                  rounded-l-xl
                  transition-colors duration-200
                  group-hover:bg-[#007bff]
                "
              />

              {/* STEP NUMBER */}
              <span className="absolute top-6 right-6 text-sm font-medium text-gray-300">
                {item.step}
              </span>

              {/* ICON */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-[#007bff]">
                <item.icon size={22} />
              </div>

              {/* TITLE */}
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                {item.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessMethodologySection;
