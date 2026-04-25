import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Award, Globe2 } from "lucide-react";
import FeaturedCourses from "@/components/sections/FeaturedCourses";

const stats = [
  { num: "36+", title: "Online Courses", desc: "Explore a wide range of flexible, career-focused programs." },
  { num: "4.9", title: "Course Rating", desc: "Trusted and highly rated by our students worldwide." },
  { num: "100+", title: "Students", desc: "A growing global community of engaged learners." },
];

const scholarships = [
  {
    icon: Award,
    title: "Academic Excellence Scholarship",
    desc: "This scholarship is awarded to outstanding students who demonstrate exceptional academic achievement. Whether you're a high performing high school graduate or a top-ranking university student, UeCampus recognizes your hard work and dedication. Eligible applicants may receive partial or full tuition support based on their academic performance and qualifications.",
  },
  {
    icon: Globe2,
    title: "Scholarships for Residents of Developing Countries",
    desc: "We are committed to creating global learning opportunities, especially for students from regions with limited access to higher education. This scholarship is specifically designed to support residents of developing countries by offering substantial tuition reductions. It aims to empower talented individuals who are eager to advance their education and make a positive impact in their communities.",
  },
];

const Scholarship = () => {
  useEffect(() => {
    document.title = "Scholarships — UeCampus";
  }, []);

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-section-dark">
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container py-24 md:py-32 text-center text-white">
          <h1 className="font-display text-4xl md:text-6xl font-bold">Scholarship</h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Financial aid options designed to help motivated students access world-class education.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-2xl p-8 text-center shadow-card-soft">
              <p className="font-display text-5xl font-bold text-primary">{s.num}</p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container grid gap-8 md:grid-cols-2">
          {scholarships.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card rounded-2xl p-8 shadow-card-soft">
              <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center text-white mb-5">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{desc}</p>
              <a href="#" className="mt-6 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-pill transition-smooth hover:bg-primary-glow">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </section>

      <FeaturedCourses />
    </PageLayout>
  );
};

export default Scholarship;
