import globe from "@/assets/globe-v2.png";

const PartnerInOnlineEd = () => (
  <section className="bg-background py-16 md:py-24 overflow-hidden">
    <div className="container grid gap-10 lg:grid-cols-2 items-center">
      {/* Left: purple wavy card */}
      <div className="relative bg-primary rounded-3xl p-10 md:p-14 overflow-hidden">
        {/* wavy SVG pattern overlay */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 400 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {Array.from({ length: 14 }).map((_, i) => (
            <path
              key={i}
              d={`M 0 ${30 + i * 28} Q 100 ${10 + i * 28}, 200 ${30 + i * 28} T 400 ${30 + i * 28}`}
              stroke="white"
              strokeWidth="1.2"
              fill="none"
            />
          ))}
        </svg>
        <div className="relative">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
            A Global Community, Connected
          </h2>
          <p className="mt-8 text-white/90 leading-relaxed text-base md:text-lg">
            Students from across the world choose UeCampus to advance their education and careers. This diversity aligns with our mission to provide globally relevant education and foster an environment of academic exchange. Our students build a global network and develop cross-cultural skills that today's employers demand.
          </p>
        </div>
      </div>

      {/* Right: dark globe */}
      <div className="relative flex items-center justify-center">
        <img
          src={globe}
          alt="Global student community"
          width={1024}
          height={1024}
          loading="lazy"
          className="w-full max-w-xl h-auto object-contain"
        />
      </div>
    </div>
  </section>
);

export default PartnerInOnlineEd;
