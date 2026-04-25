import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import eie from "@/assets/partner-eie-exact.jpg";
import ppa from "@/assets/partner-ppa-exact-cropped.png";
import walsh from "@/assets/partner-walsh.png";
import qualifi from "@/assets/partner-qualifi-exact.png";
import eduqual from "@/assets/partner-eduqual-exact.png";

const partners = [
  {
    src: eie,
    name: "eie European Business School",
    logoClass: "max-h-[115px] md:max-h-[135px] max-w-[95%]",
  },
  {
    src: ppa,
    name: "PPA Business School",
    logoClass: "max-h-[135px] md:max-h-[155px] max-w-[88%]",
  },
  {
    src: walsh,
    name: "Walsh College",
    logoClass: "max-h-[105px] md:max-h-[125px] max-w-[88%]",
  },
  {
    src: qualifi,
    name: "Qualifi Approved Centre",
    logoClass: "max-h-[115px] md:max-h-[135px] max-w-[95%]",
  },
  {
    src: eduqual,
    name: "EduQual",
    logoClass: "max-h-[100px] md:max-h-[115px] max-w-[88%]",
  },
];

const slides = [partners, [...partners].reverse()];

const PartnersMarquee = () => {
  const [idx, setIdx] = useState(0);
  const total = slides.length;

  return (
    <section className="bg-primary py-16 md:py-20 overflow-hidden">
      <div className="container relative">
        <div className="flex items-center gap-3 md:gap-6">
          <button
            onClick={() => setIdx((i) => (i - 1 + total) % total)}
            className="shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-full bg-section-dark/80 hover:bg-section-dark text-white flex items-center justify-center transition-smooth"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {slides.map((row, i) => (
                <div key={i} className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 items-center px-2">
                  {row.map((p, j) => (
                    <div
                      key={j}
                      className="h-40 md:h-48 bg-white rounded-xl flex items-center justify-center px-3 shadow-card-soft"
                    >
                      <img
                        src={p.src}
                        alt={`${p.name} - accredited UeCampus partner`}
                        width={768}
                        height={320}
                        loading="lazy"
                        className={`${p.logoClass} object-contain`}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIdx((i) => (i + 1) % total)}
            className="shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-full bg-section-dark/80 hover:bg-section-dark text-white flex items-center justify-center transition-smooth"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
