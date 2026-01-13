import { motion } from "framer-motion";

const JOB_PORTAL_LINK =
  "https://www2.jobdiva.com/portal/?a=o4jdnwh2c2y0shnkhan44emi098fo50b97n3wvp70llngdmh48vquttetxkv2jyw&compid=-1#/";

const CareerCTA = () => {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            {/* brand accent */}
            <span className="block w-12 h-[3px] bg-[#007bff] rounded-full mb-4" />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight"
            >
              Ready to Explore New Opportunities?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-gray-600 max-w-xl leading-relaxed"
            >
              Browse current openings across multiple client companies and
              apply directly through our official hiring portal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
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

            <p className="mt-4 text-xs text-gray-500">
              You’ll be redirected to Appsixer’s official job portal
            </p>
          </div>

          {/* RIGHT SIDE – NO CARD, PURE CONTENT */}
          <div className="relative pl-6 mt-12">
            {/* vertical brand divider */}
            <span className="absolute left-0 top-1 w-[2px] h-28 bg-[#007bff]/70 rounded-full" />

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-sm font-medium text-gray-900"
            >
              What you can expect
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-4 space-y-3 text-sm text-gray-600 leading-relaxed"
            >
              <li>• Verified job requirements from active clients</li>
              <li>• Roles across startups and enterprise teams</li>
              <li>• Transparent hiring process & communication</li>
              <li>• New openings added on a regular basis</li>
            </motion.ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerCTA;
