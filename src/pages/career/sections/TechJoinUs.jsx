import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaDatabase,
  FaBrain,
  FaMobileAlt,
  FaBug,
  FaPaintBrush,
  FaCode,
} from "react-icons/fa";

const JOB_LINK =
  "https://www2.jobdiva.com/portal/?a=o4jdnwh2c2y0shnkhan44emi098fo50b97n3wvp70llngdmh48vquttetxkv2jyw&compid=-1#/";

const roles = [
  {
    title: "Frontend Engineers (React / UI)",
    desc: "Design and build intuitive, high-performance interfaces for modern web applications.",
    icon: FaReact,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    title: "Backend Developers (Node.js)",
    desc: "Develop scalable APIs and backend systems that support real-world production workloads.",
    icon: FaNodeJs,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Full Stack Developers",
    desc: "Own features end-to-end across frontend, backend, and data layers.",
    icon: FaCode,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Python Developers",
    desc: "Work on backend services, automation pipelines, and data-focused applications.",
    icon: FaPython,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    title: "AI / ML Engineers",
    desc: "Build intelligent systems and machine learning solutions for real business use cases.",
    icon: FaBrain,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "DevOps Engineers",
    desc: "Manage cloud infrastructure, CI/CD pipelines, and reliable deployment systems.",
    icon: FaDocker,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Cloud Engineers (AWS)",
    desc: "Architect and scale cloud-based systems using modern AWS services.",
    icon: FaAws,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "Database Engineers",
    desc: "Design and optimize databases powering high-availability applications.",
    icon: FaDatabase,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Mobile App Developers",
    desc: "Develop cross-platform mobile applications with a focus on performance and usability.",
    icon: FaMobileAlt,
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    title: "QA / Automation Engineers",
    desc: "Ensure product quality through automated testing and reliable QA processes.",
    icon: FaBug,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "UI / UX Designers",
    desc: "Create thoughtful, user-centered designs that improve product experiences.",
    icon: FaPaintBrush,
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const TechJoinsUs = () => {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="block w-10 h-[3px] bg-[#007bff] rounded-full mb-4" />

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Opportunities Across Technology & Engineering
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl leading-relaxed">
            We work with multiple client organizations to hire skilled professionals
            across a wide range of technology domains.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => {
            const Icon = role.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="
                  bg-white
                  rounded-xl
                  p-6
                  border border-gray-200
                  transition
                  hover:border-gray-300
                "
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${role.bg}`}
                >
                  <Icon className={`text-2xl ${role.color}`} />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-medium text-gray-900">
                  {role.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {role.desc}
                </p>

                {/* CTA */}
                <a
                  href={JOB_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-sm font-medium text-[#007bff] hover:text-[#0069d9] transition"
                >
                  View open positions →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechJoinsUs;
