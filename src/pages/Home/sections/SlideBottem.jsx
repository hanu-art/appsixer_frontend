import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import slideOne from "../../../assets/slidebottem/slide_one.webp";
import slideTwo from "../../../assets/slidebottem/slide_two.webp";

const slideImages = [slideOne, slideTwo];

const SlideBottem = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Background slide rotation
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Content animation on view (repeat allowed)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setContentVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[52vh] md:h-[60vh] overflow-hidden"
    >
      {/* Background Slides */}
      {slideImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Project discussion background"
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-[1400ms]
            ${
              activeIndex === index
                ? "opacity-90 scale-105"
                : "opacity-0 scale-100"
            }
          `}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div
          className={`
            max-w-5xl px-6 md:px-12 text-white
            will-change-transform
            transition-all duration-[900ms]
            [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
            ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }
          `}
        >
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-medium leading-snug">
            Let’s turn your ideas into
            <span className="text-[#60A5FA]"> production-ready software</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
            Share your idea with us and get expert guidance without friction.
            Our team responds within 24 hours with clear, actionable solutions.
          </p>

          {/* CTA (NO MOVEMENT ON HOVER) */}
          <button
            onClick={() => navigate("/contact")}
            className="
              mt-8 inline-flex items-center px-7 py-3 rounded-md
              bg-[#2563EB] text-white text-sm font-medium
              tracking-wide
              shadow-[0_8px_24px_rgba(37,99,235,0.30)]
              hover:bg-[#2F6CF6]
              hover:shadow-[0_10px_28px_rgba(37,99,235,0.35)]
              transition-colors transition-shadow duration-300
            "
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default SlideBottem;
