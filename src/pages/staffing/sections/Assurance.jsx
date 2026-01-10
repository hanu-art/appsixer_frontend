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
          observer.disconnect(); // run once (final section)
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full  pt-20 pb-16 md:pt-24 md:pb-20"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

        {/* LEFT : CONTENT */}
        <div
          className={`
            rounded-2xl bg-gray-900 p-8 md:p-12 text-white
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}
          `}
        >
          <h3 className="text-2xl md:text-3xl font-semibold">
            We Offer Distinctive Services
          </h3>

          <ul className="mt-6 space-y-4 text-white/85 text-sm leading-relaxed">
            <li>
              We offer a <strong>1-week trial</strong> to test our skills,
              communication, and responsiveness. Try us with a small task and
              let us prove the value we bring.
            </li>

            <li>
              Our resources are fluent in English and communicate clearly via
              Slack, Email, Google Docs, and Video Conferencing (Zoom, Skype,
              WhatsApp, or Phone). We have extensive experience working with
              clients in the United States, Canada, and the United Kingdom.
            </li>

            <li>
              Our working schedule overlaps with your morning hours in the West,
              enabling smooth daily discussions. We can also adjust schedules
              further if additional overlap is required.
            </li>

            <li>
              During the initial 1–2 weeks, dedicated managers help onboard
              resources and bring your project up to speed. We guide and support
              you to achieve your software and IT objectives with confidence.
            </li>
          </ul>
        </div>

        {/* RIGHT : IMAGE + PROCESS */}
        <div
          className={`
            relative rounded-2xl overflow-hidden
            min-h-[420px] md:min-h-full
            transition-all duration-700 ease-out delay-150
            ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}
          `}
        >
          {/* Image */}
          <img
            src={assureImage}
            alt="Onshore Staffing Assurance"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content overlay */}
          <div className="relative h-full p-8 md:p-12 text-white flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Onshore Staffing
            </h3>

            <p className="mt-4 text-white/85 text-sm leading-relaxed">
              We come from Software Engineering and Project Management backgrounds,
              and we interview candidates as if they were our own hires. Our
              combined experience of four decades ensures a rigorous and reliable
              hiring process.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/90">
              <li>• Understanding the organization and its clients</li>
              <li>• Identifying required technical and soft skills</li>
              <li>• Interviewing to find the perfect cultural fit</li>
              <li>• References from similar projects</li>
              <li>• Validating candidate experience</li>
              <li>• Background checks and work history verification</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Assurance;
