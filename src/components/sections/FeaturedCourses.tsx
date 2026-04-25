import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cyber from "@/assets/course-cyber.jpg";
import mba from "@/assets/course-mba.jpg";
import ai from "@/assets/course-ai.jpg";
import phd from "@/assets/course-phd.jpg";

const courses = [
  { tag: "Cyber Security", title: "BSc in Cyber Security", desc: "Protect digital systems and data with advanced cyber security knowledge.", img: cyber },
  { tag: "Business", title: "MBA in International Business", desc: "Gain expertise in managing global enterprises.", img: mba },
  { tag: "Artificial Intelligence (AI)", title: "MSc in AI and Machine Learning", desc: "Explore advanced AI models, deep learning, and automation.", img: ai },
  { tag: "Artificial Intelligence (AI)", title: "PhD in Artificial Intelligence & Machine Learning", desc: "Research AI innovations, deep learning, and intelligent automation.", img: phd },
];

const FeaturedCourses = () => (
  <section className="bg-background py-24 md:py-32">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.05] max-w-4xl">
          Want to know more about our courses?
        </h2>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-pill transition-smooth hover:bg-primary-glow"
        >
          View All Courses <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((c) => (
          <article
            key={c.title}
            className="group bg-section-dark rounded-3xl overflow-hidden flex flex-col transition-smooth hover:-translate-y-1"
          >
            <div className="px-7 pt-7 pb-6 flex flex-col">
              <span className="self-start inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary">
                {c.tag}
              </span>
              <h3 className="mt-6 text-xl md:text-[22px] font-bold text-white leading-tight min-h-[3.5rem]">
                {c.title}
              </h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                {c.desc}
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={c.img}
                alt={c.title}
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover transition-smooth group-hover:scale-105"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCourses;
