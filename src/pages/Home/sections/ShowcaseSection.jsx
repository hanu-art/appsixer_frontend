import { useEffect, useRef, useState } from "react";

import firstShow from "../../../assets/ShowCase/first_show.webp";
import secondShow from "../../../assets/ShowCase/second_show.webp";
import thirdShow from "../../../assets/ShowCase/third_show.webp";
import fourthShow from "../../../assets/ShowCase/fourth_show.webp";
import fifthShow from "../../../assets/ShowCase/fifth_show.webp";
import sixShow from "../../../assets/ShowCase/six_show.webp";
import sevenShow from "../../../assets/ShowCase/seven_show.webp";

const showcaseImages = [
  firstShow,
  secondShow,
  thirdShow,
  fourthShow,
  fifthShow,
  sixShow,
  sevenShow,
];

export default function ShowcaseSection() {
  const [current, setCurrent] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % showcaseImages.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setContentVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const prevIndex =
    (current - 1 + showcaseImages.length) % showcaseImages.length;

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-16">

        {/* LEFT CONTENT */}
        <div
          className={`
            w-full md:w-[35%]
            text-center md:text-left
            md:pl-6 lg:pl-10
            will-change-transform
            transition-all duration-[850ms]
            [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
            ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6"
            }
          `}
        >
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-tight text-gray-900">
            <span className="relative inline-block text-[#007bff] text-[36px] md:text-[48px]">
              Designed
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#007bff]" />
            </span>{" "}
            to Scale <br />
            Built to{" "}
            <span className="relative inline-block text-[#007bff] text-[36px] md:text-[48px]">
              Perform
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#007bff]" />
            </span>
          </h2>

          <p className="mt-4 md:mt-6 text-gray-600 text-[15px] leading-relaxed max-w-sm mx-auto md:mx-0">
            We craft refined digital experiences where clean
            interfaces meet strong engineering — focused on
            performance, clarity, and growth.
          </p>
        </div>

        {/* RIGHT VISUAL – FOCUSED SHOWCASE */}
        <div className="w-full md:w-[65%] flex justify-center md:justify-start px-4 md:px-0 md:pl-6">
          <div className="relative w-full h-[280px] md:h-[420px] flex items-center justify-center">

            {/* PREVIOUS IMAGE (BACKGROUND CONTEXT) */}
            <img
              src={showcaseImages[prevIndex]}
              alt=""
              className="
                absolute
                h-full max-w-[720px] w-full object-contain
                opacity-20
                scale-[0.92]
                -translate-x-10
                transition-all duration-[700ms]
                [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
              "
            />

            {/* CURRENT IMAGE (FOCUS) */}
            <img
              src={showcaseImages[current]}
              alt=""
              className="
                relative z-10
                h-full max-w-[720px] w-full object-contain
                scale-100
                transition-all duration-[700ms]
                [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                drop-shadow-[0_40px_90px_rgba(0,0,0,0.28)]
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}
