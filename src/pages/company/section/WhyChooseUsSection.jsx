import {
    Code2,
    Smartphone,
    Cloud,
    ShieldCheck,
    Users,
    Layers,
  } from "lucide-react";
  
  import centerUp from "../../../assets/company/whychoose/center_up 4.14.04 PM.webp";
  import leftUp from "../../../assets/company/whychoose/left_up.webp";
  import mainBg from "../../../assets/company/whychoose/main_bg.webp";
  import rightUp from "../../../assets/company/whychoose/right_up.webp";
  
  const expertiseList = [
    {
      icon: Code2,
      title: "Full Stack Development",
      desc: "Scalable frontend and backend systems engineered for performance.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Engineering",
      desc: "Business-focused Android and iOS applications with real-world impact.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      desc: "Automated deployments, cloud infrastructure and CI/CD pipelines.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & Security",
      desc: "Testing, monitoring and security-first development practices.",
    },
    {
      icon: Users,
      title: "Dedicated Teams",
      desc: "Experienced engineers aligned with your product roadmap.",
    },
    {
      icon: Layers,
      title: "End-to-End Delivery",
      desc: "Complete ownership from planning to production deployment.",
    },
  ];
  
  const WhyChooseUsSection = () => {
    return (
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
  
          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:pl-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-14 relative inline-block">
              Why Choose Appsixer
              <span className="absolute -bottom-3 left-0 w-14 h-[2px] bg-gray-900" />
            </h2>
  
            <div className="space-y-8">
              {expertiseList.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-6 group transition-all duration-300"
                  >
                    <div className="mt-1 transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
                    </div>
  
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-black">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
  
          {/* ================= RIGHT IMAGES ================= */}
          <div className="relative w-full h-[460px] lg:pr-12 mt-16 lg:mt-0">
  
            {/* Base background (80%) */}
            <img
              src={mainBg}
              alt="Background"
               loading="lazy"
              className="absolute inset-0 w-full h-[80%] object-cover rounded-3xl"
            />
  
            {/* LEFT – BIG (slightly less outside now) */}
            <img
              src={leftUp}
              alt=""
               loading="lazy"
              className="absolute bottom-0 left-0 w-[320px] translate-y-[12%] rounded-2xl shadow-2xl z-20"
            />
  
            {/* CENTER – MEDIUM */}
            <img
              src={centerUp}
              alt="" 
               loading="lazy"
              className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[240px] rounded-xl shadow-xl z-30"
            />
  
            {/* RIGHT – SMALL */}
            <img
              src={rightUp}
              alt=""
              className="absolute top-16 right-0 w-[180px] rounded-xl shadow-lg z-10" 
              loading="lazy"
            />
          </div>
  
        </div>
      </section>
    );
  };
  
  export default WhyChooseUsSection;
  