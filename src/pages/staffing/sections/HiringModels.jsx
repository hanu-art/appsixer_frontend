import { useEffect, useRef, useState } from "react";
import { FaClock, FaTasks, FaUsers } from "react-icons/fa";

const models = [
  {
    title: "Hourly Basis",
    icon: FaClock,
    desc:
      "We provide dedicated resources equipped with the latest technologies. Our experts work with you as extended team members and align with your time zone.",
    points: [
      "Dedicated resources",
      "Flexible working hours",
      "Full-time communication",
      "Acts like in-house employee"
    ]
  },
  {
    title: "Fixed Cost / Time",
    icon: FaTasks,
    desc:
      "Best suited for projects with clear scope and limited budget. This model ensures predictable cost and timely delivery with maximum budget control.",
    points: [
      "Fixed budget & timeline",
      "Cost-effective delivery",
      "24×7 support availability",
      "Defined scope execution"
    ]
  },
  {
    title: "Dedicated Team",
    icon: FaUsers,
    highlight: true,
    desc:
      "Hire a complete team on a monthly basis and get full control over resources. Ideal for long-term and scalable projects requiring continuous development.",
    points: [
      "Monthly engagement model",
      "Full control on resources",
      "360° project support",
      "Scalable team size"
    ]
  }
];

const HiringModels = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* OUTER HEADING — ALWAYS CENTER */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-gray-900">
          Diverse Options for Hiring Our Experts
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Choose a flexible engagement model that fits your budget, timeline,
          and project requirements.
        </p>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {models.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  rounded-2xl border p-8
                  transition-all duration-700 ease-out
                  ${item.highlight ? "border-[#007bff] bg-[#007bff]/5" : "border-gray-200"}
                  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                `}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* ICON + TITLE */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-12 h-12 rounded-lg bg-[#007bff]/10 flex items-center justify-center">
                    <Icon className="text-[#007bff] text-xl" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-3 text-gray-600 leading-relaxed text-center md:text-left">
                  {item.desc}
                </p>

                {/* POINTS */}
                <ul className="mt-5 space-y-2 text-sm text-gray-600">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007bff]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HiringModels;
