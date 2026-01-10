import { useState } from "react";
import {
  Target,
  Smartphone,
  Monitor,
  ClipboardList,
  ShieldCheck,
  Users,
} from "lucide-react";

// 6 services – final content
const SERVICES = [
  {
    id: "ux-ui-strategy",
    title: "UX/UI Strategy",
    description:
      "We specialize in creating interfaces that works flawlessly on any device, and does not make compromise on the user experience. We're fanatical about the UX/UI design process and aimed at helping the users to complete functional tasks easily.",
    icon: Target,
    category: "design",
  },
  {
    id: "app-development",
    title: "App Development",
    description:
      "We strive to develop a scalable Android (smartphones and tablets), iOS (iPhone, iPod Touch, iPad and iPad Mini) app across multiple OS versions that meet your business goals and amplify user engagement and retention.",
    icon: Smartphone,
    category: "development",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Develop highly engaging responsive web solutions that will help you dominate the digital marketplace. Our services match your expectations. We create enticing, sophisticated products to gain maximum customer satisfaction.",
    icon: Monitor,
    category: "development",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "We help our clients across diverse industries and provide dedicated client-centric service focused and accomplish the complete process from scratch – planning, designing, executing, testing, deploying and publishing.",
    icon: ClipboardList,
    category: "management",
  },
  {
    id: "testing",
    title: "Testing",
    description:
      "We offer complete mobile app, web testing services that enable the organizations to deliver robust product that come with maximum test coverage, and deliver high-quality results. We ensure continuous quality enhancement.",
    icon: ShieldCheck,
    category: "quality",
  },
  {
    id: "staffing",
    title: "Staffing",
    description:
      "We offer the 'best in class' services to our clients at massive economic savings with three pricing options – Full-Time, As needed and Project Based software development or IT staff on monthly/hourly/fixed price as needed.",
    icon: Users,
    category: "staffing",
  },
];

const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices =
    selectedCategory === "all"
      ? SERVICES
      : SERVICES.filter((service) => service.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Services" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "management", label: "Management" },
    { id: "quality", label: "Quality" },
    { id: "staffing", label: "Staffing" },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            We provide excellent services for your business
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Plan your business strategy with our customized software and mobile
            app development services.
          </p>
        </div>

        {/* Category Buttons – MOBILE FIXED */}
        <div className="mb-12">
          <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  w-full sm:w-auto
                  px-4 py-2.5
                  text-sm font-medium
                  rounded-lg
                  transition-colors
                  ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-blue-300 transition-colors"
              >
                {/* Icon */}
                <div className="flex justify-center md:justify-start mb-6">
                  <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-gray-900" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center md:text-left">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm text-center md:text-left">
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
