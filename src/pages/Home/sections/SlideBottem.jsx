import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import slideOne from "../../../assets/slidebottem/slide_one.jpg";
import slideTwo from "../../../assets/slidebottem/slide_two.jpg";

const slideImages = [slideOne, slideTwo];

const SlideBottem = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideImages.length);
    }, 4500);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="relative w-full h-[52vh] md:h-[60vh] overflow-hidden">
      
      {/* Background Slides */}
      {slideImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="slide background"
          className={`absolute inset-0 w-full h-full object-cover
            transition-opacity duration-1000
            ${activeIndex === index ? "opacity-80" : "opacity-0"}`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-5xl px-6 md:px-12 text-white">

          <h2
            className="
              text-2xl md:text-4xl
              font-medium md:font-semibold
              leading-snug
            "
          >
            Connect with us to turn your ideas and specs into working code
          </h2>

          <p className="mt-4 max-w-2xl text-gray-300 text-sm md:text-base">
            Share, discuss your idea with us and get hassle-free support.
            Our experts will reply within 24 hours with the best possible solutions.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="
              mt-6 inline-flex items-center px-7 py-3 rounded-md
              bg-[#2563EB] text-white font-medium cursor-pointer
              hover:bg-[#2F6CF6] transition-colors duration-300
            "
          >
            Get A Free Quote
          </button>

        </div>
      </div>
    </section>
  );
};

export default SlideBottem;
