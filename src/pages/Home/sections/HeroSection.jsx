import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    }, 7000); // slow & premium
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-[85vh] flex items-center overflow-hidden"
      aria-label="Appsixer US IT staffing and software development hero section"
    >
      {/* BACKGROUND IMAGES */}
      {heroImages.map((img, index) => (
        <img
          key={img}
          src={img}
          alt="US IT staffing and custom software development services by Appsixer"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          loading={index === 0 ? "eager" : "lazy"}
          fetchpriority={index === 0 ? "high" : "auto"}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl">
          
          {/* EYEBROW TEXT */}
          <p className="text-blue-200 text-xs font-medium uppercase tracking-[0.18em] mt-6 mb-4">
            Perfect place for your startup idea
          </p>

          {/* MAIN HEADING */}
          <h1 className="text-white text-3xl md:text-[42px] font-medium leading-[1.15] tracking-[-0.01em] mb-6">
            US IT Staffing & Custom Software Development Company
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-9 max-w-3xl">
            Appsixer helps US businesses hire top IT talent and build scalable web and
            mobile applications. From IT staffing to end-to-end software development,
            we deliver reliable technology solutions that grow with your business.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#007bff] hover:bg-[#0069d9] text-white text-sm font-medium px-6 py-2.5 rounded-md transition"
            >
              Hire Developers
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border border-white/50 text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-white/10 transition"
            >
              Talk to an Expert
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
