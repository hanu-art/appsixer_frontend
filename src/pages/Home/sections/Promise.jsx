import worldmap from "../../../assets/endmap/worldmap1.png";

const Promise = () => {
  return (
    <section className="w-full mt-22 mb-22">
      
      {/* Trust Heading */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-700">
          Trust is built when clarity, consistency, and commitment come together.
        </h2>

        <p className="mt-4 text-sm md:text-base text-slate-500">
          — Appsixer
        </p>
      </div>

      {/* Image */}
      <div className="w-full">
        <img
          src={worldmap}
          alt="Global trust and presence"
          className="
            w-full
            h-auto
            max-h-[520px] md:max-h-[620px]
            object-contain
            block
            mx-auto
          "
        />
      </div>

    </section>
  );
};

export default Promise;
