import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pattern from "@/assets/diamond-pattern.jpg";
import s1 from "@/assets/student-1.jpg";
import s2 from "@/assets/student-2.jpg";
import s3 from "@/assets/student-3.jpg";

const testimonials = [
  {
    name: "JACEK ZALEWSKI",
    program: "Bachelor of Business Administration in Marketing — Poland",
    quote:
      "UeCampus transformed my career trajectory. The BBA in Marketing program gave me both the strategic knowledge and hands-on experience I needed to thrive in today's competitive marketing landscape. If you're serious about building a successful marketing career, UeCampus delivers.",
    img: s1,
  },
  {
    name: "JOSE ARISMENDY",
    program: "BBA in Marketing — United Kingdom",
    quote:
      "Completing my BBA at UeCampus was a pivotal moment in my career. The in-depth curriculum and industry-focused training provided me with the expertise and confidence to excel in any professional setting.",
    img: s2,
  },
  {
    name: "LILIANA SEQUIA",
    program: "Psychology Level 5 — UAE",
    quote:
      "Completing my Psychology Level 5 at UeCampus was a game-changer for my career. The comprehensive curriculum and practical training equipped me with the skills and confidence to excel.",
    img: s3,
  },
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  const total = testimonials.length;

  return (
    <section
      className="relative bg-background py-20 md:py-28"
      style={{ backgroundImage: `url(${pattern})`, backgroundSize: "600px" }}
    >
      <div className="container grid gap-10 lg:grid-cols-2 items-center">
        {/* Left: heading */}
        <div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.05]">
            What Our Students Say
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">
            Hear directly from our students about their experiences, growth, and achievements at our university. Their stories reflect the quality of education and support we provide.
          </p>
        </div>

        {/* Right: testimonial card */}
        <div className="relative bg-card rounded-3xl shadow-card-soft p-6 md:p-8">
          <div className="flex items-start gap-5">
            <button
              onClick={() => setIdx((i) => (i - 1 + total) % total)}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card shadow-card-soft text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <img
              src={t.img}
              alt={t.name}
              width={768}
              height={896}
              loading="lazy"
              className="h-32 w-28 md:h-40 md:w-32 object-cover rounded-xl shrink-0"
            />
            <div className="flex-1">
              <h3 className="font-display font-bold text-foreground text-base md:text-lg leading-snug">
                {t.name}
              </h3>
              <p className="text-sm text-primary font-medium mt-1">{t.program}</p>
              <p className="mt-3 text-sm text-muted-foreground italic leading-relaxed line-clamp-5">
                {t.quote}
              </p>
            </div>

            <button
              onClick={() => setIdx((i) => (i + 1) % total)}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card shadow-card-soft text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
