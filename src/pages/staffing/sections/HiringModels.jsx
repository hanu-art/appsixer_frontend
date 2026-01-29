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
      "Functions as an extended in-house team member"
    ]
  },
  {
    title: "Fixed Cost / Time",
    icon: FaTasks,
    desc:
      "Best suited for projects with a clearly defined scope and budget. This model ensures predictable cost, controlled execution, and timely delivery.",
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
      "Hire a complete team on a monthly engagement and retain full control over resources. Ideal for long-term, scalable initiatives requiring continuous development.",
    points: [
      "Monthly engagement model",
      "Full control over resources",
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
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // 🔥 animation sirf ek baar
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
      className="w-full bg-gray-50 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* HEADING */}
        <h2 className="text-center text-2xl md:text-4xl font-medium text-gray-900">
          Flexible Hiring Models Tailored to Your Needs
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Choose an engagement model that aligns with your technical requirements,
          budget expectations, and delivery timelines.
        </p>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {models.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  rounded-2xl border p-8 bg-white
                  transition-all duration-700 ease-out
                  ${
                    item.highlight
                      ? "border-[#007bff] bg-[#007bff]/5 scale-[1.02]"
                      : "border-gray-200"
                  }
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }
                `}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* ICON + TITLE */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-12 h-12 rounded-xl bg-[#007bff]/10 flex items-center justify-center">
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
