const StaffingIntro = () => {
  return (
    <section className="relative w-full bg-[#007bff] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-28 md:pt-32 pb-32 md:pb-44">
        
        {/* slight right shift on desktop */}
        <div className="max-w-3xl text-center md:text-left md:pl-8">
          <h1
            className="
              text-3xl md:text-5xl
              font-medium
              tracking-[-0.02em]
              leading-tight
            "
          >
            <span className="text-white/85">
              Build Your Team
            </span>
            <br />
            <span className="text-white">
              with the Right Tech Talent
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/90 leading-relaxed">
            We help startups and enterprises hire pre-vetted developers, designers,
            and engineers through flexible, scalable staffing models — without the
            hiring hassle.
          </p>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 md:h-32"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,90 480,110 720,100 960,90 1200,50 1440,40 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default StaffingIntro;
