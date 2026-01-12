import worldmap from "../../../assets/endmap/worldmap1.png";

const Promise = () => {
  return (
    <section className="w-full py-16 sm:py-20">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-10 sm:mb-14 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-700 leading-snug">
          Trust is built when clarity, consistency, and commitment come together.
        </h2>

        <p className="mt-4 text-sm md:text-base text-slate-500">
          — Appsixer
        </p>
      </div>

      {/* Image */}
      <div className="w-full flex justify-center px-0 sm:px-6">
        <img
          src={worldmap}
          alt="Global trust and presence"
          className="
            w-full
            h-auto
            max-w-none sm:max-w-[1400px]
            max-h-[520px] sm:max-h-[460px] md:max-h-[620px]
            object-contain
          "
          loading="lazy"
          decoding="async"
        />
      </div>

    </section>
  );
};

export default Promise;
