import { useEffect, useRef, useState } from "react";
import worldmap from "../../../assets/endmap/worldmap1.png";

const Promise = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run once (trust section)
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 overflow-hidden"
    >
      {/* HEADING */}
      <div
        className={`
          max-w-6xl mx-auto px-6 md:px-12 mb-10 sm:mb-14 text-center
          transition-all duration-[900ms]
          [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }
        `}
      >
        {/* Brand accent line */}
        <span className="mx-auto block w-12 h-[2px] bg-[#007bff] mb-5" />

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-700 leading-snug">
          Trust is built when{" "}
          <span className="text-[#007bff]">clarity</span>, consistency,
          and <span className="text-[#007bff]">commitment</span> come together.
        </h2>

        <p className="mt-4 text-sm md:text-base text-slate-500">
          — Appsixer
        </p>
      </div>

      {/* MAP */}
      <div
        className={`
          w-full flex justify-center px-0 sm:px-6
          transition-all duration-[1100ms]
          [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
          ${
            visible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-[1.02]"
          }
        `}
      >
        {/* Wrapper to control zoom */}
        <div className="overflow-hidden will-change-transform">
          <img
            src={worldmap}
            alt="Global trust and presence"
            className="
              w-full
              h-auto
              max-w-none sm:max-w-[1400px]
              max-h-[520px] sm:max-h-[460px] md:max-h-[620px]
              object-contain
              opacity-80
              transition-transform duration-[900ms]
              [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
              hover:scale-[1.02]
            "
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Promise;
