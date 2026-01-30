import { useState } from "react";
import {
  Target,
  Smartphone,
  Monitor,
  ClipboardList,
  ShieldCheck,
  Users,
} from "lucide-react";

const SERVICES = [
  {
    id: "ux-ui-strategy",
    title: "UX & Interface Strategy",
    description:
      "Thoughtfully designed user experiences focused on clarity, usability, and long-term product scalability.",
    icon: Target,
    category: "design",
  },
  {
    id: "app-development",
    title: "Mobile Application Development",
    description:
      "Scalable Android and iOS applications engineered for performance, reliability, and evolving business needs.",
    icon: Smartphone,
    category: "development",
  },
  {
    id: "web-development",
    title: "Web Engineering",
    description:
      "Modern, responsive web solutions built with clean architecture and performance standards.",
    icon: Monitor,
    category: "development",
  },
  {
    id: "project-management",
    title: "Delivery & Project Management",
    description:
      "Structured execution with clear ownership, predictable timelines, and transparent communication.",
    icon: ClipboardList,
    category: "management",
  },
  {
    id: "testing",
    title: "Quality Assurance",
    description:
      "Continuous testing processes ensuring stability, security, and high-quality outcomes.",
    icon: ShieldCheck,
    category: "quality",
  },
  {
    id: "staffing",
    title: "IT Staffing Solutions",
    description:
      "Flexible staffing models providing vetted engineers aligned with your delivery and growth needs.",
    icon: Users,
    category: "staffing",
  },
];

const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices =
    selectedCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  const categories = [
    { id: "all", label: "All" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "management", label: "Management" },
    { id: "quality", label: "Quality" },
    { id: "staffing", label: "Staffing" },
  ];

  return (
    <section className="w-full bg-gray-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-20">

          {/* subtle accent line */}
          <div className="flex justify-center mb-6">
            <span className="h-[2px] w-12 rounded-full bg-[#007bff]/60" />
          </div>

          <h2 className="text-3xl md:text-[2.75rem] font-normal text-gray-900 tracking-tight">
            Services designed to feel
            <span className="text-[#007bff]"> effortless</span>,
            <span className="text-[#007bff]"> reliable</span>, and
            <span className="text-[#007bff]"> scalable</span>
          </h2>

          <p className="mt-6 text-gray-500 text-base md:text-lg leading-relaxed">
            We help teams design, build, and scale digital products through
            thoughtful engineering and flexible staffing solutions.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-4 mb-20 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-4 py-2 text-sm rounded-full transition-all duration-300
                ${
                  selectedCategory === category.id
                    ? "bg-[#007bff]/10 text-[#007bff]"
                    : "text-gray-500 hover:text-gray-700"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="
                  group
                  rounded-2xl bg-white
                  p-8
                  border border-gray-200/70
                  shadow-[0_1px_2px_rgba(0,0,0,0.04)]
                  transition-all duration-500 ease-out
                  hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                "
              >
                {/* ICON */}
                <div className="mb-6">
                  <div
                    className="
                      w-11 h-11 rounded-xl
                      bg-[#007bff]/10
                      flex items-center justify-center
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  >
                    <Icon className="w-5 h-5 text-[#007bff]" />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
