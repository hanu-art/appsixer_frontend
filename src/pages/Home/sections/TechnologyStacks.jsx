import {
    SiAdobexd, SiAdobephotoshop, SiSketch, SiAdobeillustrator,
    SiAdobeaftereffects, SiInvision,
    SiJavascript, SiTypescript, SiHtml5, SiCss3, SiAngular, SiReact,
    SiMysql, SiPostgresql, SiMongodb,
    SiBitbucket, SiDocker,
    SiCypress, SiPostman, SiSelenium,
    SiSwift, SiPython, SiNodedotjs, SiKotlin,
  } from "react-icons/si";
  import { FaAws, FaJava, FaDatabase, FaServer } from "react-icons/fa";
  
  const STACKS = [
    {
      title: "Design",
      items: [
        { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
        { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
        { name: "Sketch", icon: SiSketch, color: "#F7B500" },
        { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
        { name: "After Effects", icon: SiAdobeaftereffects, color: "#9999FF" },
        { name: "InVision", icon: SiInvision, color: "#FF3366" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Angular", icon: SiAngular, color: "#DD0031" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "DynamoDB", icon: FaDatabase, color: "#4053D6" },
        { name: "Redis", icon: FaDatabase, color: "#DC382D" },
        { name: "Neo4j", icon: FaDatabase, color: "#008CC1" },
      ],
    },
    {
      title: "DevOps",
      items: [
        { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Nagios", icon: FaServer, color: "#1EB300" },
        { name: "Monit", icon: FaServer, color: "#2F3A45" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Swarm", icon: SiDocker, color: "#2496ED" },
      ],
    },
    {
      title: "Testing",
      items: [
        { name: "JUnit", icon: FaJava, color: "#007396" },
        { name: "Cypress", icon: SiCypress, color: "#17202C" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
      ],
    },
    {
      title: "Languages",
      items: [
        { name: "Swift", icon: SiSwift, color: "#FA7343" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
      ],
    },
  ];
  
  const TechnologyStacks = () => {
    return (
      <section className="bg-white py-18">
        <div className="max-w-7xl mx-auto px-4">
  
          {/* SECTION HEADING */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-semibold text-gray-900">
              Technology Stacks
            </h2>
            <p className="mt-2 text-gray-500">
              We develop solutions armed with diverse technologies
            </p>
          </div>
  
          <div className="grid lg:grid-cols-2 gap-18 items-start">
  
            {/* LEFT */}
            <div className="space-y-6">
              {STACKS.map((stack) => (
                <div
                  key={stack.title}
                  className="
                    bg-white rounded-2xl
                    shadow-sm hover:shadow-lg
                    transition-all duration-300
                    hover:-translate-y-0.5
                  "
                >
                  {/* HEADING (CENTER, COMPACT HEIGHT) */}
                  <div className="
                    bg-gray-100
                    py-2.5
                    text-center
                    text-lg font-semibold text-gray-800
                    relative
                  ">
                    {stack.title}
                    {/* Arrow only on desktop */}
                    <span className="absolute right-0 top-0 h-full w-6 bg-gray-100 arrow-shape hidden lg:block" />
                  </div>
  
                  {/* ICON GRID (COMPACT) */}
                  <div
                    className="
                      grid grid-cols-3 lg:grid-cols-6
                      gap-y-5 gap-x-10
                      px-7 py-5
                    "
                  >
                    {stack.items.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="
                            text-center
                            transition-all duration-300
                            hover:-translate-y-0.5
                          "
                        >
                          <Icon
                            className="mx-auto text-[26px] mb-1.5"
                            style={{ color: tech.color }}
                          />
                          <div className="text-[13px] font-medium text-gray-700">
                            {tech.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
  
            {/* RIGHT IMAGE – DESKTOP ONLY */}
            <div className="hidden lg:block sticky top-24">
              <img
                src="/images/teck/teck_right.png"
                alt="Technology Illustration"
                className="max-w-md w-full object-contain"
              />
            </div>
  
          </div>
        </div>
  
        {/* ARROW SHAPE */}
        <style>{`
          .arrow-shape {
            clip-path: polygon(0 0, 100% 50%, 0 100%);
          }
        `}</style>
      </section>
    );
  };
  
  export default TechnologyStacks;
  