import {
    SiApple,
    SiAndroid,
    SiFigma,
    SiNodedotjs,
    SiPhp,
    SiMysql,
    SiOpensourceinitiative
  } from "react-icons/si";
  
  import {
    FaProjectDiagram,
    FaUsersCog,
    FaBug,
    FaUserTie,
    FaHeadset
  } from "react-icons/fa";
  
  // NOTE: Image is inside src/assets/staffing/
  import bgImage from "../../../assets/staffing/expertise.jpg";
  
  const expertise = [
    { icon: SiApple, label: "iOS App Development" },
    { icon: SiAndroid, label: "Android App Development" },
    { icon: SiFigma, label: "UI / UX Design" },
    { icon: SiNodedotjs, label: "Node.js Development" },
    { icon: SiPhp, label: "PHP Development" },
    { icon: SiMysql, label: "Database Management" },
    { icon: SiOpensourceinitiative, label: "Open Source Technology" },
    { icon: FaProjectDiagram, label: "Project Management" },
    { icon: FaUserTie, label: "Business Analyst" },
    { icon: FaBug, label: "QA Analyst" },
    { icon: FaUsersCog, label: "Software Engineers" },
    { icon: FaHeadset, label: "Technical Support" }
  ];
  
  const ExpertiseGrid = () => {
    return (
      <section
        className="
          relative w-full
          py-20 md:py-24
          bg-cover
          bg-top md:bg-center
        "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
  
        {/* Wider container for better left-right spacing */}
        <div className="relative mx-auto max-w-[1400px] px-8 md:px-14">
  
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-4xl font-semibold text-white">
            Adroit Resources Available Across Multiple Platforms
          </h2>
  
          <p className="mt-3 text-center text-white/85 max-w-2xl mx-auto">
            Skilled professionals delivering excellence across modern technologies
            and platforms.
          </p>
  
          {/* Expertise Grid */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-14">
            {expertise.map(({ icon: Icon, label }, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div
                  className="
                    w-24 h-24 rounded-full
                    border border-white/30
                    flex items-center justify-center
                    transition-all duration-300 ease-out
                    group-hover:scale-110
                    group-hover:border-white/70
                    group-hover:bg-white/5
                  "
                >
                  {/* Bigger Icon */}
                  <Icon className="text-[44px] text-white/80 transition-colors duration-300 group-hover:text-white" />
                </div>
  
                <p className="mt-4 text-sm text-white/95">
                  {label}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default ExpertiseGrid;
  