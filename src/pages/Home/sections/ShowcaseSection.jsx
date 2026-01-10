import { useEffect, useState } from "react";

import firstShow from "../../../assets/ShowCase/first_show.jpg";
import secondShow from "../../../assets/ShowCase/second_show.jpg";
import thirdShow from "../../../assets/ShowCase/third_show.jpg";
import fourthShow from "../../../assets/ShowCase/fourth_show.jpg";
import fifthShow from "../../../assets/ShowCase/fifth_show.jpg";
import sixShow from "../../../assets/ShowCase/six_show.jpg";
import sevenShow from "../../../assets/ShowCase/seven_show.jpg";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % showcaseImages.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-16 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-16">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-[35%] text-center md:text-left md:pl-6 lg:pl-10">
          <span className="mx-auto md:mx-0 block w-10 h-[2px] bg-black mb-4 md:mb-6" />

          <h2 className="text-[32px] md:text-[44px] font-semibold leading-tight">
            Designed to Scale <br /> Built to Perform
          </h2>

          <p className="mt-4 md:mt-6 text-gray-600 text-[15px] leading-relaxed max-w-sm mx-auto md:mx-0">
            We craft refined digital experiences where clean
            interfaces meet strong engineering — focused on
            performance, clarity, and growth.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="w-full md:w-[65%] flex justify-center md:justify-start px-4 md:px-0 md:pl-6">

          {/* FIXED VISUAL BOX */}
          <div className="relative w-full h-[280px] md:h-[420px] flex items-center justify-center">

            {/* BACK IMAGE */}
            <img
              src={showcaseImages[(current + 1) % showcaseImages.length]}
              alt=""
              className="
                absolute
                h-full
                max-w-[750px]
                w-full
                object-contain
                scale-[0.88]
                opacity-20
                translate-y-8
                transition-all
                duration-1000
              "
            />

            {/* FRONT IMAGE */}
            <img
              src={showcaseImages[current]}
              alt=""
              className="
                relative
                z-10
                h-full
                max-w-[750px]
                w-full
                object-contain
                transition-all
                duration-1000
                drop-shadow-[0_50px_110px_rgba(0,0,0,0.32)]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}
