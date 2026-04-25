import heroImg from "@/assets/hero-students.jpg";

const Hero = () => (
  <section className="relative overflow-hidden rounded-b-[10px]">
    <img
      src={heroImg}
      alt="Diverse students learning online with UeCampus"
      width={1920}
      height={1080}
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-[#2b1850]/78" />
    <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[#6f5a86]/70" />

    <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-24 pt-10 text-center text-white md:pb-28 md:pt-12">
      <h1 className="mx-auto max-w-[840px] font-display text-4xl font-semibold leading-[1.08] tracking-[-0.01em] md:text-[62px]">
        Earn your Degree
        <br />
        Anytime, Anywhere with
        <br />
        UeCampus!
      </h1>

      <p className="mx-auto mt-7 max-w-[760px] text-[15px] leading-[1.5] text-white/92 md:text-[17px]">
        Flexible and fully accredited online programmes designed to fit around your lifestyle study online from anywhere, enhance your career, and achieve your goals without limits.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto mt-8 flex max-w-[920px] flex-col gap-3 sm:flex-row"
      >
        <input
          type="text"
          placeholder="Search courses..."
          className="h-[56px] flex-1 rounded-[9px] border-0 bg-[#ececef] px-5 text-base text-foreground placeholder:text-[#75757f] outline-none focus:ring-2 focus:ring-white/55"
        />
        <button
          type="submit"
          className="h-[56px] rounded-[9px] bg-[#531784] px-10 text-xl font-semibold text-white transition-colors hover:bg-[#67239b]"
        >
          Search
        </button>
      </form>
    </div>
  </section>
);

export default Hero;
