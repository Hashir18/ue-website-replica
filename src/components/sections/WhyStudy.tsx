import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const WhyStudy = () => (
  <section className="bg-section-dark py-16 md:py-24">
    <div className="container grid gap-6 lg:grid-cols-2">
      {/* Left: Purple card */}
      <div className="bg-primary rounded-3xl p-10 md:p-14 flex flex-col">
        <span className="text-xl md:text-2xl font-medium text-white/90">About Us</span>
        <h2 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
          Why Study at UeCampus?
        </h2>
        <p className="mt-10 text-white/90 leading-relaxed text-base md:text-lg flex-1">
          Step into the future of learning with UeCampus where global opportunities meet true flexibility. We break down the barriers of traditional education by delivering world class accredited degrees online at a fraction of the usual cost. Study at your own pace, from anywhere in the world, while gaining knowledge, skills, and confidence that empower you to thrive. At UeCampus you don't just earn a degree you gain the freedom and competitive edge to shape the career and life you've always imagined.
        </p>
        <Link
          to="/about-us"
          className="mt-10 self-start inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-smooth hover:bg-white/90"
        >
          Read More
        </Link>
      </div>

      {/* Right column: white text card + video */}
      <div className="flex flex-col gap-6">
        <div className="bg-card rounded-3xl p-10 md:p-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary uppercase leading-[1.15] tracking-tight">
            Your reliable partner in online higher education
          </h3>
          <p className="mt-6 text-foreground/80 leading-relaxed text-sm md:text-base">
            At UeCampus, we're dedicated to making quality education accessible to everyone, anywhere. We partner with leading higher education (HE) universities to offer flexible, affordable, and fully accredited qualifications designed to fit your lifestyle. We offer online programmes in business, information technology, cyber security, tourism and hospitality management and more. Whether you're looking to earn a degree and/or start a new career path, UeCampus provides the support, expertise, and global recognition you need to succeed.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-gradient-card-purple aspect-video group cursor-pointer">
          {/* YouTube-style top overlay */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-start justify-between px-4 py-3 bg-gradient-to-b from-black/60 to-transparent">
            <div className="text-white">
              <p className="font-semibold text-sm md:text-base">Why study at UeCampus?</p>
              <p className="text-xs text-white/80 mt-0.5">Student Testimonial | Part 1</p>
            </div>
          </div>
          {/* Brand text in middle */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <div className="text-white font-display font-black text-4xl md:text-6xl tracking-wider drop-shadow-lg">UECAMPUS</div>
              <div className="text-white/90 text-xs md:text-sm mt-3 tracking-[0.3em] font-semibold">STUDENT TESTIMONIAL</div>
            </div>
          </div>
          {/* Red play button */}
          <button
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video"
          >
            <span className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-destructive flex items-center justify-center shadow-pill transition-smooth group-hover:scale-110">
              <Play className="h-6 w-6 md:h-7 md:w-7 text-white fill-white ml-0.5" />
            </span>
          </button>
          {/* Watch on YouTube button */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 rounded-md bg-black/70 px-3 py-1.5 text-xs font-medium text-white">
              Watch on <span className="font-bold">YouTube</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyStudy;
