import { useEffect, useRef, useState } from "react";
import { Lightbulb, Layers, Users, Briefcase } from "lucide-react";

// =======================
// TRUST DATA
// =======================
const STATS = [
  { id: 1, label: "Experience", value: 8, icon: Lightbulb },
  { id: 2, label: "Projects", value: 500, icon: Layers },
  { id: 3, label: "Clients", value: 200, icon: Users },
  { id: 4, label: "Employees", value: 80, icon: Briefcase },
];

const TrustSection = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(STATS.map(() => 0));

  // Trigger animation once
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Counter animation
  useEffect(() => {
    if (!hasAnimated) return;

    STATS.forEach((stat, index) => {
      let current = 0;
      const end = stat.value;
      const duration = 1200;
      const step = Math.ceil(end / (duration / 16));

      const timer = setInterval(() => {
        current += step;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
      }, 16);
    });
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20"
      style={{
        backgroundImage: "url('/images/trust/trust_section.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* UPDATED DARK OVERLAY (STRONGER FADE) */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="flex flex-col items-center">
                {/* Icon */}
                <Icon className="w-9 h-9 text-white mb-3 opacity-90" />

                {/* Number */}
                <div className="text-4xl md:text-5xl font-semibold text-white">
                  {counts[index]}+
                </div>

                {/* Label */}
                <p className="mt-2 text-sm md:text-base text-gray-300 tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
