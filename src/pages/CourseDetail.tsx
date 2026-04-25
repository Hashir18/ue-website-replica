import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  GraduationCap,
  Globe2,
  Wallet,
  Plus,
  Minus,
  Sparkles,
  BookOpen,
  Users,
  Briefcase,
  DollarSign,
  FileText,
} from "lucide-react";
import {
  coursesBySlug,
  courses,
  defaultKeyBenefits,
  type Course,
} from "@/data/courses";

const TABS = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "admissions", label: "Admissions", icon: Users },
  { id: "academics", label: "Academics", icon: FileText },
  { id: "careers", label: "Careers", icon: Briefcase },
  { id: "tuition", label: "Tuition & Financing", icon: DollarSign },
] as const;

type TabId = (typeof TABS)[number]["id"];

const defaultApplicationSteps = [
  { title: "Enquire", desc: "Submit an enquiry so our admissions team can check your fit and answer your questions." },
  { title: "Apply", desc: "Complete the short online application and upload your supporting documents." },
  { title: "Assessment", desc: "An admissions advisor reviews your profile and confirms eligibility." },
  { title: "Offer & Enrolment", desc: "Accept your offer, select your intake, and activate your student portal access." },
];

const defaultPaymentPlans = [
  { title: "Upfront payment", desc: "Pay your tuition in full at enrolment for a simplified experience." },
  { title: "Monthly instalments", desc: "Spread your tuition across monthly instalments aligned to your intake." },
  { title: "Employer sponsorship", desc: "Have your tuition invoiced directly to your employer where supported." },
];

const defaultScholarships = [
  "Early-bird enrolment discount",
  "Alumni referral award",
  "Regional affordability scholarship",
  "Women in Tech / Women in Business scholarships",
];

const FactCard = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) => (
  <div className="bg-card border border-border rounded-2xl p-5 md:p-6 flex items-center gap-4">
    <span className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center text-primary shrink-0">
      <Icon className="h-5 w-5" />
    </span>
    <div className="min-w-0">
      <p className="text-sm font-semibold text-primary">{label}:</p>
      <p className="text-sm text-foreground truncate">{value}</p>
    </div>
  </div>
);

const CourseDetailBody = ({ course }: { course: Course }) => {
  const [tab, setTab] = useState<TabId>("overview");
  const [openModule, setOpenModule] = useState<number | null>(0);

  const keyBenefits = course.keyBenefits ?? defaultKeyBenefits;
  const applicationSteps = course.applicationSteps ?? defaultApplicationSteps;
  const paymentPlans = course.paymentPlans ?? defaultPaymentPlans;
  const scholarships = course.scholarships ?? defaultScholarships;
  const gains = course.gains ?? course.highlights;

  const related = courses
    .filter((c) => c.slug !== course.slug && c.categories.some((x) => course.categories.includes(x)))
    .slice(0, 3);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={course.img}
          alt={course.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-section-dark/75" />

        <div className="relative container py-16 md:py-24">
          <nav className="text-sm text-white/75 mb-6 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/programmes" className="hover:text-white">Programmes & Diplomas</Link>
            <span>/</span>
            <span className="text-white">{course.levelGroup}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_360px] items-center">
            {/* Title */}
            <div className="text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
                  <GraduationCap className="h-3.5 w-3.5" /> {course.levelGroup}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white text-primary px-3 py-1 text-xs font-semibold">
                  {course.universityShort}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] max-w-3xl mx-auto lg:mx-0">
                {course.title}
              </h1>
              <p className="mt-5 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {course.tagline}
              </p>
            </div>

            {/* Accredited by card */}
            <aside className="bg-gradient-card-purple text-white rounded-3xl p-7 md:p-8 shadow-card-soft">
              <h3 className="font-display text-lg md:text-xl font-bold leading-tight">
                Accredited by {course.accreditedBy}
              </h3>
              <p className="mt-3 text-sm text-white/90 leading-relaxed">
                {course.accreditedByDesc}
              </p>
              <p className="mt-4 text-xs text-white/80 leading-relaxed">
                Take the first step towards a globally recognised qualification. Enquire now for personalised guidance, programme details, and admissions support from our team.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <Link
                  to="/contact-us"
                  className="text-center rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold transition-smooth hover:bg-white/90"
                >
                  Enquire Now
                </Link>
                <Link
                  to="/contact-us"
                  className="text-center rounded-full border-2 border-white/70 text-white px-5 py-2.5 text-sm font-semibold transition-smooth hover:bg-white hover:text-primary"
                >
                  Request Info
                </Link>
                <Link
                  to="/contact-us"
                  className="text-center rounded-full bg-section-dark text-white px-5 py-2.5 text-sm font-semibold transition-smooth hover:bg-section-dark/80"
                >
                  Apply Now
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Facts bar */}
      <section className="bg-background py-8">
        <div className="w-full px-6 md:px-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FactCard icon={Sparkles} label="Accessibility" value={course.accessibility} />
          <FactCard icon={Award} label="Qualification" value={course.qualification} />
          <FactCard icon={Wallet} label="Affordability" value={course.tuition} />
          <FactCard icon={Globe2} label="Language" value={course.language} />
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-background">
        <div className="w-full px-6 md:px-10">
          <div className="border-b border-border overflow-x-auto">
            <div className="flex items-center gap-1 min-w-max">
              {TABS.map((t) => {
                const Icon = t.icon;
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`relative inline-flex items-center gap-2 px-4 md:px-5 py-4 text-sm font-semibold uppercase tracking-wider transition-smooth ${
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {t.label}
                    {active && (
                      <span className="absolute left-3 right-3 -bottom-px h-0.5 bg-primary rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tab content */}
      <section className="bg-background py-12 md:py-16">
        <div className="w-full px-6 md:px-10 grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Main content */}
          <div className="min-w-0">
            {tab === "overview" && (
              <div className="space-y-10">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    Launch Your Career with the {course.title}
                  </h2>
                  <p className="mt-5 text-foreground/80 leading-relaxed">{course.overview}</p>
                  {course.overviewLong && (
                    <p className="mt-4 text-foreground/80 leading-relaxed">{course.overviewLong}</p>
                  )}
                </div>

                {course.specializations && (
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                      Specialisations
                    </h3>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {course.specializations.map((s) => (
                        <div
                          key={s}
                          className="bg-card border border-border rounded-2xl p-5 flex items-center gap-3"
                        >
                          <span className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center text-primary">
                            <Sparkles className="h-4 w-4" />
                          </span>
                          <span className="font-semibold text-foreground">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    What Students Gain From This Programme
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {gains.map((g) => (
                      <li key={g} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-foreground/85 leading-relaxed">{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent rounded-3xl p-8 md:p-10">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Ready to Get Started?
                  </h3>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    Enrol in the {course.title} today and take the first step towards a rewarding career. Our admissions team is here to guide students from their very first enquiry right through to graduation.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/contact-us"
                      className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-pill transition-smooth hover:bg-primary-glow"
                    >
                      Apply Now
                    </Link>
                    <Link
                      to="/contact-us"
                      className="rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-smooth hover:bg-primary hover:text-primary-foreground"
                    >
                      Talk to Admissions
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {tab === "admissions" && (
              <div className="space-y-10">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Entry Requirements
                  </h2>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    We assess each application holistically. Below are the standard entry requirements for the {course.title}.
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {course.entryRequirements.map((r) => (
                      <li
                        key={r}
                        className="flex items-start gap-3 bg-card border border-border rounded-2xl p-4"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground/90 leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    How to Apply
                  </h2>
                  <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                    {applicationSteps.map((step, i) => (
                      <li
                        key={step.title}
                        className="bg-card border border-border rounded-2xl p-6 relative"
                      >
                        <span className="absolute top-4 right-5 font-display font-bold text-2xl text-primary/25">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h4 className="font-display text-lg font-bold text-foreground">{step.title}</h4>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">Intakes</h3>
                  <p className="mt-3 text-muted-foreground">
                    Choose the intake that best fits your schedule — our advisors can help you plan around work and personal commitments.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.intakes.map((i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 rounded-full bg-accent text-primary px-4 py-2 text-sm font-semibold"
                      >
                        <Clock className="h-3.5 w-3.5" /> {i}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {tab === "academics" && (
              <div className="space-y-10">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Academic Structure
                  </h2>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    The {course.title} is structured to build your expertise progressively, from foundations through to advanced application and capstone work.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">Curriculum</h3>
                  <div className="mt-5 rounded-2xl border border-border bg-card overflow-hidden divide-y divide-border">
                    {course.modules.map((m, i) => {
                      const isOpen = openModule === i;
                      return (
                        <div key={m.title}>
                          <button
                            onClick={() => setOpenModule(isOpen ? null : i)}
                            className="w-full flex items-center gap-4 text-left px-5 md:px-6 py-5 hover:bg-accent/40 transition-smooth"
                            aria-expanded={isOpen}
                          >
                            <span className="font-display font-bold text-primary/40 text-xl md:text-2xl shrink-0 w-10">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="flex-1 font-semibold text-foreground text-base md:text-lg">
                              {m.title}
                            </span>
                            <span className="h-8 w-8 rounded-full bg-accent text-primary flex items-center justify-center">
                              {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-5 md:px-6 pb-5 ml-[56px] grid gap-2 sm:grid-cols-2">
                              {m.items.map((it) => (
                                <div
                                  key={it}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                  <span>{it}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <div className="bg-card border border-border rounded-2xl p-5">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="mt-3 text-sm font-semibold text-primary">Duration</p>
                    <p className="text-foreground">{course.duration}</p>
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-5">
                    <Globe2 className="h-5 w-5 text-primary" />
                    <p className="mt-3 text-sm font-semibold text-primary">Language</p>
                    <p className="text-foreground">{course.language}</p>
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-5">
                    <Award className="h-5 w-5 text-primary" />
                    <p className="mt-3 text-sm font-semibold text-primary">Qualification</p>
                    <p className="text-foreground">{course.qualification}</p>
                  </div>
                </div>
              </div>
            )}

            {tab === "careers" && (
              <div className="space-y-10">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Where this programme can take you
                  </h2>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    {course.careerDesc ??
                      `Graduates of the ${course.title} are prepared for a range of senior, specialist and leadership roles across industries. Our careers team supports you with CV coaching, interview prep, and employer introductions.`}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">Typical Career Outcomes</h3>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {course.careerOutcomes.map((o, i) => (
                      <div
                        key={o}
                        className={`rounded-2xl p-6 border ${
                          i % 2 === 0
                            ? "bg-card border-border"
                            : "bg-section-dark text-white border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                              i % 2 === 0 ? "bg-accent text-primary" : "bg-white/15 text-white"
                            }`}
                          >
                            <Briefcase className="h-4 w-4" />
                          </span>
                          <h4 className="font-display text-base font-semibold">{o}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-card-purple rounded-3xl p-8 md:p-10 text-white">
                  <h3 className="font-display text-xl md:text-2xl font-bold">
                    Career support throughout your journey
                  </h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Dedicated career coaching",
                      "CV and LinkedIn review",
                      "Interview preparation",
                      "Employer introductions",
                      "Alumni network access",
                      "Portfolio development",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle2 className="h-4 w-4 text-white mt-0.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {tab === "tuition" && (
              <div className="space-y-10">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Tuition & Financing
                  </h2>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    We are committed to keeping accredited higher education affordable. Explore the options below, or reach out to our admissions team to discuss a plan that works for you.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="bg-primary text-white rounded-3xl p-7">
                    <p className="text-xs uppercase tracking-wider font-semibold text-white/80">Programme tuition</p>
                    <p className="mt-2 font-display text-4xl md:text-5xl font-bold">{course.tuition}</p>
                    <p className="mt-3 text-sm text-white/85 leading-relaxed">
                      Full programme tuition. Final fee may vary based on intake, prior study credits and chosen electives.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-3xl p-7">
                    <p className="text-xs uppercase tracking-wider font-semibold text-primary">Duration</p>
                    <p className="mt-2 font-display text-2xl md:text-3xl font-bold text-foreground">{course.duration}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      Flexible schedule — study alongside work and personal commitments.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">Payment Plans</h3>
                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {paymentPlans.map((p) => (
                      <div
                        key={p.title}
                        className="bg-card border border-border rounded-2xl p-6"
                      >
                        <Wallet className="h-5 w-5 text-primary" />
                        <h4 className="mt-3 font-display text-base font-bold text-foreground">{p.title}</h4>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">Scholarships & Discounts</h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {scholarships.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-3 bg-accent rounded-2xl p-4"
                      >
                        <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground/90 leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar — Programme Highlight */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="bg-section-dark text-white rounded-3xl p-7 overflow-hidden relative">
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/30 blur-2xl" />
              <div className="relative">
                <p className="text-xs uppercase tracking-wider font-semibold text-white/70">Programme Highlight</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Key Benefits</h3>
                <ul className="mt-5 space-y-3">
                  {keyBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-glow shrink-0" />
                      <span className="text-white/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-card border border-border rounded-3xl p-7">
              <h3 className="font-display text-lg font-bold text-foreground">Need help deciding?</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Our admissions advisors can help you confirm eligibility and plan your intake.
              </p>
              <Link
                to="/contact-us"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
              >
                Talk to Admissions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-secondary py-16 md:py-20">
          <div className="container">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Related programmes
              </h2>
              <Link
                to="/programmes"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
              >
                <ArrowLeft className="h-4 w-4" /> Back to all programmes
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/programmes/${r.slug}`}
                  className="group bg-card border border-border rounded-2xl overflow-hidden transition-smooth hover:-translate-y-1 hover:shadow-card-soft"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.title}
                      className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-flex items-center rounded-md bg-accent text-primary text-xs font-semibold px-2 py-0.5">
                      {r.levelGroup}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-foreground leading-snug">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground">{r.universityShort}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? coursesBySlug[slug] : undefined;

  useEffect(() => {
    document.title = course
      ? `${course.title} — UeCampus`
      : "Course not found — UeCampus";
    window.scrollTo({ top: 0 });
  }, [course]);

  if (!course) {
    return (
      <PageLayout>
        <section className="container py-24 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Course not found
          </h1>
          <p className="mt-4 text-muted-foreground">
            We couldn't find the programme you were looking for.
          </p>
          <Link
            to="/programmes"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all programmes
          </Link>
        </section>
      </PageLayout>
    );
  }

  return <CourseDetailBody course={course} />;
};

export default CourseDetail;
