import staffingTop from "../../../assets/staffing/staffing_top.webp";

const Proposal = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT : IMAGE */}
        <div className="relative overflow-hidden rounded-3xl group">
          
          {/* Image */}
          <img
            src={staffingTop}
            alt="Staffing"
            className="
              w-full h-full object-cover
              scale-105
              transition-transform duration-[2500ms]
              group-hover:scale-110
            "
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* RIGHT : CONTENT */}
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Best in class software development and information technology
            offshore staffing solutions.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Appsixer is a software development company established in 2011 and
            since our existence we are delivering exceptional results with our
            innovative solutions via our products and services.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our company has grown from a small group of passionate engineers and
            business managers to a full-scale mobile software company with a team
            of 50+ members comprising developers, designers, quality assurance
            engineers, and project managers.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With rationalized knowledge of current industry technologies and
            trends, we specialize in world-class mobile and web development. We
            prioritize time and cost predictability, assuring 100% client
            satisfaction.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Proposal;
