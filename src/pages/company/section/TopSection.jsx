import { motion } from "framer-motion";
import aboutSideImage from "../../../assets/company/top/about_company_top.webp";

const TopSection = () => {
  return (
    <section className="relative w-full bg-black">
      
      {/* IMAGE WRAPPER */}
      <div className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden bg-black">
        <img
          src={aboutSideImage}
          alt="About Appsixer Company"
          className="
            h-full w-full
            object-contain md:object-cover
            object-center md:object-left
          "
          loading="lazy"
          fetchpriority="high"
        />

        {/* BLACK OVERLAY (UNCHANGED) */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center pt-10 md:pt-16">
        <div className="max-w-7xl mx-auto px-10 w-full">
          
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white tracking-tight leading-[1.35]"
          >
            {/* LINE 1 */}
            <p className="text-[1.6rem] md:text-[2.6rem] font-normal mb-2 pl-16">
              We’re a company led by our{" "}
              <span className="text-[#007bff] text-[1.75rem] md:text-[2.8rem] underline decoration-[#007bff] decoration-2 underline-offset-4">
                values
              </span>
              ,
            </p>

            {/* LINE 2 */}
            <p className="text-[1.3rem] md:text-[2.1rem] font-normal pl-16">
              with a strong focus on our{" "}
              <span className="text-[#007bff] text-[1.4rem] md:text-[2.25rem] underline decoration-[#007bff] decoration-2 underline-offset-4">
                customers
              </span>{" "}
              and{" "}
              <span className="text-[#007bff] text-[1.4rem] md:text-[2.25rem] underline decoration-[#007bff] decoration-2 underline-offset-4">
                team
              </span>
            </p>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default TopSection;
