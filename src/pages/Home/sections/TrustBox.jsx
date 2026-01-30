import {
  Award,
  Workflow,
  Users,
  Smartphone,
} from "lucide-react";

const BRAND = "#007bff";

const TrustBox = () => {
  const items = [
    {
      title: "Top-notch Company",
      desc: "Best rated company for software solutions.",
      icon: Award,
    },
    {
      title: "Transparent Process",
      desc: "Insight, analyse, brainstorm, develop, test and deliver.",
      icon: Workflow,
    },
    {
      title: "Biggest Perk",
      desc: "Experienced, expert team delivering quality services.",
      icon: Users,
    },
    {
      title: "Product Delivered",
      desc: "High-performance mobile apps and web solutions.",
      icon: Smartphone,
    },
  ];

  return (
    <section className="relative z-20 -mt-16">
      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-4 rounded-2xl bg-white border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  relative group overflow-hidden
                  px-4 py-6 md:py-7
                  flex flex-col items-center justify-center
                  text-center
                  ${
                    index !== items.length - 1
                      ? "border-r border-gray-200/40"
                      : ""
                  }
                `}
              >
                {/* SWEEP BACKGROUND (LEFT → RIGHT) */}
                <span
                  className="
                    absolute inset-0
                    origin-left scale-x-0
                    transition-transform duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-x-100
                  "
                  style={{
                    backgroundColor: "rgba(0, 123, 255, 0.08)",
                  }}
                />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* ICON (PERFECT CENTER) */}
                  <div
                    className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg"
                    style={{
                      backgroundColor: "rgba(0, 123, 255, 0.12)",
                    }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: BRAND }}
                    />
                  </div>

                  {/* TITLE */}
                  <h4
                    className="
                      text-xs sm:text-sm md:text-base
                      font-medium
                      transition-colors duration-300
                    "
                    style={{ color: BRAND }}
                  >
                    {item.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="mt-1 hidden md:block text-xs leading-snug text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBox;
