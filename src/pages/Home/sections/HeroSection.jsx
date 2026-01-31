import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/images/hero/first_hero.webp",
  "/images/hero/second_hero.webp",
  "/images/hero/third_hero.webp",
  "/images/hero/fourth_hero.webp",
  "/images/hero/fifith_hero.webp",
  "/images/hero/six_hero.webp",
  "/images/hero/seven_hero.webp",
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const isLeft = activeIndex % 2 === 0;

  return (
    <section
      className="relative w-full min-h-[85vh] flex items-center overflow-hidden"
      aria-label="Appsixer US IT staffing and software development hero section"
    >
      {/* BACKGROUND IMAGE */}
      <AnimatePresence>
        <motion.img
          key={heroImages[activeIndex]}
          src={heroImages[activeIndex]}
          alt="IT staffing and  software  services by Appsixer"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.06 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          fetchpriority={activeIndex === 0 ? "high" : "auto"}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/55" />

      {/* SIDE VISUAL BALANCER (desktop only) */}
      <div
        className={`hidden lg:block absolute top-0 h-full w-[35%]
        ${isLeft ? "right-0" : "left-0"}
        bg-gradient-to-r
        ${isLeft ? "from-white/5 to-transparent" : "from-transparent to-white/5"}
        pointer-events-none`}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`
            max-w-4xl text-left
            ${isLeft ? "lg:mr-auto" : "lg:ml-auto"}
          `}
        >
          {/* EYEBROW */}
          <p className="text-white text-xs font-medium uppercase tracking-[0.18em] mb-4">
            Trusted IT Staffing Partner for U.S. Businesses
          </p>

          {/* HEADING */}
          <h1 className="text-white text-3xl md:text-[42px] font-medium leading-[1.15] mb-6">
             IT{" "}
            <span className="text-[#007bff] text-[1.05em] font-semibold">
              Staffing
            </span>{" "}
            &  Software{" "}
            <span className="text-[#007bff] text-[1.05em] font-semibold">
              Service
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-9 max-w-3xl">
            We help U.S. companies hire skilled IT professionals and build scalable
            web and mobile applications with predictable delivery and long-term
            reliability.
          </p>

          {/* CTA */}
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#007bff] hover:bg-[#0069d9] text-white text-sm font-medium px-6 py-2.5 rounded-md transition"
            >
              Hire Developers
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border border-white/40 text-white/90 text-sm font-medium px-6 py-2.5 rounded-md hover:bg-white/10 transition"
            >
              Talk to an Expert
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
