import {
    Award,
    Workflow,
    Users,
    Smartphone,
  } from "lucide-react";
  
  const TrustBox = () => {
    const items = [
      {
        title: "Top-notch Company",
        desc: "Best rated company for software solution.",
        icon: Award,
      },
      {
        title: "Transparent Process",
        desc: "Insight, Analyse, Brainstorm, Develop, Test and Deliver.",
        icon: Workflow,
      },
      {
        title: "Biggest Perk",
        desc: "Experienced, expert team with quality services.",
        icon: Users,
      },
      {
        title: "Product Delivered",
        desc: "High performance mobile apps and web.",
        icon: Smartphone,
      },
    ];
  
    return (
      <section className="relative z-20 -mt-16">
        {/* 80% WIDTH */}
        <div className="mx-auto w-[80%]">
          <div className="grid grid-cols-4 rounded-2xl bg-white shadow-lg">
            {items.map((item, index) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center
                    px-3 py-5 sm:py-6 md:py-7
                    text-center
                    ${index !== items.length - 1 ? "border-r" : ""}
                    border-gray-200`}
                >
                  {/* ICON */}
                  <Icon className="mb-2 h-6 w-6 md:h-7 md:w-7 text-black" />
  
                  {/* HEADING (FINAL BEHAVIOR) */}
                  <h4 className="text-xs sm:text-sm md:text-lg font-semibold text-blue-600">
                    {item.title}
                  </h4>
  
                  {/* DESCRIPTION (HIDES BELOW MD) */}
                  <p className="mt-1 hidden md:block text-xs leading-snug text-gray-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustBox;
  