import { useEffect, useRef, useState } from "react";
import assureImage from "../../../assets/staffing/staffing_assurance.webp";

const Assurance = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full pt-20 pb-16 md:pt-24 md:pb-20 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

        {/* LEFT : CONTENT */}
        <div
          className={`
            rounded-2xl bg-gray-800 p-8 md:p-12 text-white
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <h3 className="text-2xl md:text-[1.75rem] font-normal tracking-tight">
            Staffing Assurance You Can Trust
          </h3>

          <ul className="mt-6 space-y-4 text-white/70 text-sm leading-relaxed">
            <li>
              <strong className="text-white/90 font-medium">
                Risk-free 1-week trial
              </strong>{" "}
              to evaluate skills, communication, and delivery before making a
              long-term commitment.
            </li>

            <li>
              Clear, professional communication using modern collaboration tools.
              Our teams work daily with clients across the United States, Canada,
              and the United Kingdom.
            </li>

            <li>
              Working hours aligned with U.S. morning time zones, ensuring smooth
              collaboration and flexibility when additional overlap is required.
            </li>

            <li>
              Dedicated managers support onboarding during the initial phase,
              ensuring a structured transition and steady progress from day one.
            </li>
          </ul>
        </div>

        {/* RIGHT : IMAGE + PROCESS */}
        <div
          className={`
            relative rounded-2xl overflow-hidden
            min-h-[420px] md:min-h-full
            transition-all duration-700 ease-out delay-150
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          {/* Image */}
          <img
            src={assureImage}
            alt="Staffing Assurance Process"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Softer overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content overlay */}
          <div className="relative h-full p-8 md:p-12 text-white flex flex-col justify-center">
            <h3 className="text-2xl md:text-[1.75rem] font-normal tracking-tight">
              Our Screening & Assurance Process
            </h3>

            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Every candidate goes through a structured evaluation process led
              by experienced engineering and delivery professionals to ensure
              technical strength, reliability, and cultural alignment.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li>• Understanding your organization and delivery goals</li>
              <li>• Defining required technical and communication skills</li>
              <li>• Conducting technical and behavioral interviews</li>
              <li>• Reviewing experience from similar engagements</li>
              <li>• Verifying references and work history</li>
              <li>• Ensuring reliability through background validation</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Assurance;
