import { useEffect, useRef, useState } from "react";
import { Lightbulb, Layers, Users, Briefcase } from "lucide-react";

const STATS = [
  { label: "Years of Experience", value: 8, icon: Lightbulb },
  { label: "Projects Delivered", value: 500, icon: Layers },
  { label: "Global Clients", value: 200, icon: Users },
  { label: "Team Members", value: 80, icon: Briefcase },
];

const TrustSection = () => {
  const sectionRef = useRef(null);

  // Left content (repeat animation)
  const [contentVisible, setContentVisible] = useState(false);

  // Right counters (run once)
  const [counterTriggered, setCounterTriggered] = useState(false);
  const [counts, setCounts] = useState(STATS.map(() => 0));

  // Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Left content repeats
        setContentVisible(entry.isIntersecting);

        // Counters run once
        if (entry.isIntersecting && !counterTriggered) {
          setCounterTriggered(true);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [counterTriggered]);

  // Counter animation (ONCE)
  useEffect(() => {
    if (!counterTriggered) return;

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
  }, [counterTriggered]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-28 bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TRUST STORY (VISIBLE & NOTICEABLE) */}
        <div
          className={`
            will-change-transform
            transition-all duration-[950ms]
            [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
            ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }
          `}
        >
          <p className="text-sm uppercase tracking-widest text-[#007bff] mb-3">
            Why companies trust Appsixer
          </p>

          <span className="block h-[2px] w-12 rounded-full bg-[#007bff]/70 mb-6" />

          <h2 className="text-3xl md:text-4xl font-normal text-white leading-tight">
            Experience that delivers confidence,
            <span className="text-[#007bff]"> not promises</span>
          </h2>

          <p className="mt-6 text-gray-300 max-w-lg leading-relaxed">
            We work as a long-term technology partner for U.S. businesses.
            Our focus is consistency, transparency, and engineering discipline
            that scales with your growth.
          </p>
        </div>

        {/* RIGHT — STATS (COUNTERS RUN ONCE) */}
        <div className="grid grid-cols-2 gap-6">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="
                  relative rounded-2xl
                  bg-white/5 backdrop-blur-md
                  px-6 py-8
                  transition-all duration-500
                  hover:bg-white/10 hover:-translate-y-1
                "
              >
                {/* Accent line */}
                <span className="absolute top-0 left-6 right-6 h-[1px] bg-[#007bff]/40" />

                <Icon className="w-7 h-7 text-[#007bff] mb-3" />

                <div className="text-4xl font-medium text-white">
                  {counts[index]}+
                </div>

                <p className="mt-2 text-sm text-slate-300">
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
