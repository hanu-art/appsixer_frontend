import { motion } from "framer-motion";

const JOB_PORTAL_LINK =
  "https://www2.jobdiva.com/portal/?a=o4jdnwh2c2y0shnkhan44emi098fo50b97n3wvp70llngdmh48vquttetxkv2jyw&compid=-1#/";

const CareerHero = () => {
  return (
    <section className="relative w-full pt-28 md:pt-32 pb-24 bg-white overflow-hidden">
      {/* soft background accent */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-50 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* grid: left wider, right narrower */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-14 items-start">

          {/* LEFT CONTENT */}
          <div className="relative pl-6 mt-10">
            {/* brand vertical line */}
            <span className="absolute left-0 top-1 w-[3px] h-16 bg-[#007bff] rounded-full" />

            {/* Hiring context */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-medium text-[#007bff]"
            >
              Hiring for multiple client companies
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl md:text-5xl font-semibold text-gray-900 leading-tight"
            >
              Explore Job Opportunities <br />
              Across Leading Companies
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base md:text-lg text-gray-600 max-w-xl leading-relaxed"
            >
              Appsixer partners with startups and enterprises to hire skilled
              professionals across technology, engineering, and digital roles.
              Browse active openings and apply directly through our hiring portal.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href={JOB_PORTAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#007bff] hover:bg-[#0069d9] text-white text-sm font-medium px-7 py-3 rounded-md transition shadow-md hover:shadow-lg"
              >
                View Open Positions →
              </a>
            </motion.div>
          </div>

          {/* RIGHT INFO BLOCK (slightly compact) */}
            
      {/* RIGHT INFO BLOCK (polished & premium) */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="
    mt-14
    rounded-xl
    bg-gradient-to-br from-blue-50/60 to-white
    p-6 md:p-7
    shadow-sm
    hover:shadow-lg
    transition
  "
>
  {/* subtle top accent line */}
  <span className="block w-10 h-[3px] bg-[#007bff] rounded-full mb-4" />

  <h3 className="text-sm font-semibold text-gray-900">
    Current Hiring Snapshot
  </h3>

  <ul className="mt-4 space-y-3 text-sm text-gray-600 leading-relaxed">
    <li>• 50+ active job openings</li>
    <li>• Frontend, Backend, AI/ML, DevOps roles</li>
    <li>• Opportunities with multiple client companies</li>
    <li>• Remote & onsite positions available</li>
  </ul>

  <p className="mt-4 text-xs text-gray-500">
    New requirements are added on a regular basis
  </p>
</motion.div>


        </div>
      </div>
    </section>
  );
};

export default CareerHero;
