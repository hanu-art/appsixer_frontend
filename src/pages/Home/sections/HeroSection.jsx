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
      aria-label="Appsixer staffing hero section"
    >
      {/* BACKGROUND IMAGES */}
      {heroImages.map((img, index) => (
        <img
          key={img}
          src={img}
          alt="Professional staffing and software solutions"
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
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-3">
            Perfect place for your startup idea
          </p>

          {/* SINGLE H1 – SEO SAFE */}
          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-4">
          We help businesses build, scale, and deliver technology solutions.
          </h1>  

          <p className="text-gray-200 text-base md:text-lg mb-8">
          We have wide experience of designing, delivering, and supporting world-class mobile applications.
          We think big and thrive on the impossible and deliver elegant solutions.
          </p>

          <div className="flex gap-4 flex-wrap">
           
          <button
      onClick={() => navigate("/contact")}
      className="bg-[#007bff] hover:bg-[#0069d9] text-white font-semibold px-8 py-3 rounded-lg transition"
    >
      Hire Developers
    </button>

    <button
      onClick={() => navigate("/contact")}
      className="border border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition"
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
