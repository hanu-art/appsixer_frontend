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
            alt="IT Staffing Solutions"
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
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 leading-tight">
            Best-in-class offshore and nearshore IT staffing solutions for U.S. businesses.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Appsixer provides reliable IT staffing services by connecting U.S. organizations
            with highly skilled technology professionals across offshore and nearshore locations.
            We help companies scale their teams efficiently with vetted engineers, developers,
            QA specialists, and IT consultants.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our staffing model is designed to support flexibility and speed. Whether you need
            contract-based resources, long-term dedicated teams, or project-aligned staffing,
            we ensure seamless integration with your internal teams and workflows.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With a strong understanding of U.S. business standards and current technology demands,
            Appsixer helps reduce hiring overhead, improve delivery predictability, and build
            long-term staffing partnerships based on trust, transparency, and performance.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Proposal;
