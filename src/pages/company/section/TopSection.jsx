import aboutCompanyTop from "../../../assets/company/top/about_company_top.jpg";

const TopSection = () => {
  return (
    <section className="relative w-full bg-black">
      
      {/* IMAGE WRAPPER */}
      <div className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden bg-black">
        
        <img
          src={aboutCompanyTop}
          alt="About Appsixer Company"
          className="
            h-full w-full
            object-contain md:object-cover
            object-center md:object-left
          "
          loading="eager"
          fetchpriority="high"
        />

        {/* SOLID DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="
              max-w-2xl
              text-white
              text-[1.5rem] md:text-[2.5rem]
              font-medium
              tracking-tight
              leading-[1.35]
            "
          >
            We’re a company that led by our values, with a strong focus on our
            customers and team
          </p>
        </div>
      </div>

    </section>
  );
};

export default TopSection;
