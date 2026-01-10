const StaffingIntro = () => {
    return (
      <section className="relative w-full bg-[#007bff] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-28 md:pt-32 pb-32 md:pb-44 text-center">
          
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Build  Team with the Right Tech Talent
          </h1>
  
          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-white/90 leading-relaxed">
            We help startups and enterprises hire pre-vetted developers, designers,
            and engineers through flexible and scalable staffing models — without
            the hiring hassle.
          </p>
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
  