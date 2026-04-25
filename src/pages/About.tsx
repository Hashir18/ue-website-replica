import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { GraduationCap, Globe2, TrendingUp, Clock, Wallet, Users, Award, Heart } from "lucide-react";
import aboutImg from "@/assets/about-hero.jpg";
import PartnersMarquee from "@/components/sections/PartnersMarquee";

const stats = [
  { num: "36+", title: "Total Programs", desc: "Explore a wide range of flexible, career-focused programs." },
  { num: "4.9", title: "Course Rating", desc: "Trusted and highly rated by our students worldwide." },
  { num: "90+", title: "Students", desc: "A growing global community of engaged learners." },
];

const advantages = [
  { icon: Globe2, title: "Learn From Anywhere", desc: "Study from the comfort of your home with our flexible online learning platform." },
  { icon: Award, title: "Globally Recognized Degrees", desc: "Earn degrees that are recognized and respected by employers worldwide." },
  { icon: TrendingUp, title: "Career Advancement", desc: "Boost your career prospects with our industry-relevant programs." },
  { icon: Clock, title: "Flexible Timings", desc: "Study at your own pace with schedules that fit your lifestyle." },
  { icon: Wallet, title: "Affordable Tuition", desc: "Get quality education at a fraction of the cost of traditional programs." },
  { icon: GraduationCap, title: "Expert Faculty", desc: "Learn from industry experts and experienced academicians." },
  { icon: Heart, title: "Certifications & Credentials", desc: "Earn valuable certifications that enhance your professional profile." },
  { icon: Users, title: "Global Community", desc: "Connect with students and professionals from around the world." },
];

const About = () => {
  useEffect(() => {
    document.title = "About UeCampus — Your Online Learning Platform";
  }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={aboutImg} alt="UeCampus students" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container py-24 md:py-36 text-white text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold">About UeCampus</h1>
          <p className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Your Online Learning Platform, For the Community, For You.
          </p>
        </div>
      </section>

      {/* Accreditation & partners */}
      <PartnersMarquee />

      {/* Stats */}
      <section className="bg-background pt-16 pb-8">
        <div className="w-full px-6 md:px-10 grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => {
            const dark = i === 0;
            return (
              <div
                key={s.title}
                className={`rounded-2xl p-7 md:p-8 flex items-center gap-5 ${
                  dark
                    ? "bg-section-dark"
                    : "bg-card border border-border"
                }`}
              >
                <p
                  className="font-display font-bold text-[64px] md:text-[84px] leading-none shrink-0"
                  style={{
                    WebkitTextStroke: dark ? "1.5px rgba(255,255,255,0.9)" : "1.5px hsl(var(--foreground))",
                    color: "transparent",
                  }}
                >
                  {s.num}
                </p>
                <div className="min-w-0">
                  <h3 className={`text-lg md:text-xl font-semibold ${dark ? "text-white" : "text-foreground"}`}>
                    {s.title}
                  </h3>
                  <p className={`mt-1 text-sm leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Study + Mission/Vision */}
      <section className="bg-background py-12 md:py-16">
        <div className="w-full px-6 md:px-10 grid gap-6 lg:grid-cols-2">
          {/* Left: purple Why Study card */}
          <div className="bg-primary rounded-3xl p-10 md:p-14 flex flex-col">
            <span className="text-xl md:text-2xl font-medium text-white/90">About Us</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
              Why Study at UeCampus?
            </h2>
            <p className="mt-10 text-white/90 leading-relaxed text-base md:text-lg flex-1">
              Step into the future of learning with UeCampus where global opportunities meet true flexibility. We break down the barriers of traditional education by delivering world class accredited degrees online at a fraction of the usual cost. Study at your own pace, from anywhere in the world, while gaining knowledge, skills, and confidence that empower you to thrive. At UeCampus you don't just earn a degree you gain the freedom and competitive edge to shape the career and life you've always imagined.
            </p>
          </div>

          {/* Right: stacked Mission + Vision dark cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-section-dark rounded-3xl p-10 md:p-12 flex-1">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white">Mission</h3>
              <p className="mt-5 text-white/75 leading-relaxed text-sm md:text-base">
                At UeCampus, our mission is to expand access to higher education by providing flexible, affordable, and high quality online learning opportunities for students worldwide. We are dedicated to breaking down barriers and empowering individuals from all backgrounds to unlock their full potential through knowledge, skills, and opportunity-driven education
              </p>
            </div>
            <div className="bg-section-dark rounded-3xl p-10 md:p-12 flex-1">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white">Vision</h3>
              <p className="mt-5 text-white/75 leading-relaxed text-sm md:text-base">
                Our vision is to be a global leader in online education, recognized for creating pathways to opportunity and success. UeCampus envisions a future where every learner, regardless of circumstance, has the chance to learn, grow, and achieve their goals through inclusive and innovative education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="relative bg-background py-20 md:py-28 overflow-hidden">
        {/* soft gradient orbs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary-glow/10 blur-3xl" />

        <div className="relative w-full px-6 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 max-w-6xl">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Why UeCampus
              </span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
                Advance your career with an <span className="text-primary">online degree</span>
              </h2>
            </div>
            <p className="lg:max-w-md text-muted-foreground leading-relaxed">
              Eight reasons students choose UeCampus — from globally recognised qualifications to the flexibility of learning on your own terms.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, desc }, i) => {
              const purple = i % 5 === 0;
              const dark = i % 5 === 2;
              const cardClass = purple
                ? "bg-gradient-card-purple text-white"
                : dark
                ? "bg-section-dark text-white"
                : "bg-card border border-border text-foreground";
              const titleClass = purple || dark ? "text-white" : "text-foreground";
              const descClass = purple || dark ? "text-white/80" : "text-muted-foreground";
              const iconBg = purple || dark ? "bg-white/15 text-white" : "bg-primary text-white";
              const numClass = purple || dark ? "text-white/40" : "text-primary/30";
              return (
                <div
                  key={title}
                  className={`group relative ${cardClass} rounded-3xl p-7 overflow-hidden transition-smooth hover:-translate-y-1 hover:shadow-card-soft`}
                >
                  <span
                    className={`absolute top-5 right-5 font-display font-bold text-2xl ${numClass}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={`h-14 w-14 rounded-2xl ${iconBg} flex items-center justify-center mb-6 transition-smooth group-hover:scale-105`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className={`font-display text-lg font-semibold ${titleClass} leading-tight`}>
                    {title}
                  </h3>
                  <p className={`mt-3 text-sm ${descClass} leading-relaxed`}>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
