import { motion } from "framer-motion";
import OfficeCard from "./OfficeCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hiddenLeft: {
    opacity: 0,
    x: -24,
  },
  hiddenRight: {
    opacity: 0,
    x: 24,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const OfficesSection = () => {
  const offices = [
    {
      id: "usa",
      direction: "left",
      flag: "🇺🇸",
      title: "Head Office",
      subtitle: "USA – Headquarters",
      address: `522 W Riverside Ave Ste N
Spokane, WA 99201-0581`,
      email: "info@appsixer.com",
      phone: "+14254006878",
    },
    {
      id: "india",
      direction: "right",
      flag: "🇮🇳",
      title: "India Office",
      subtitle: "Development Center",
      address: `Pu-54 Vijaynagar Indore`,
      email: "contact@appsixer.com",
      phone: "+919893596975",
      skype: "contact appsixer",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {offices.map((office) => (
          <motion.div
            key={office.id}
            variants={cardVariants}
            initial={office.direction === "left" ? "hiddenLeft" : "hiddenRight"}
            animate="show"
          >
            <OfficeCard {...office} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OfficesSection;
