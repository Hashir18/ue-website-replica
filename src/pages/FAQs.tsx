import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Plus, Minus, HelpCircle, GraduationCap, Wallet, Laptop, Globe2, ShieldCheck } from "lucide-react";

type Category = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: { q: string; a: string }[];
};

const categories: Category[] = [
  {
    id: "general",
    label: "General",
    icon: HelpCircle,
    items: [
      { q: "What is UeCampus?", a: "UeCampus is an online platform offering a wide range of accredited courses and degrees, delivered in partnership with leading universities and awarding bodies, to help you advance your career from anywhere in the world." },
      { q: "Where is UeCampus based?", a: "Our head office is in Hatfield, Hertfordshire, UK. We support students remotely in more than 90 countries." },
      { q: "How is UeCampus different from a traditional university?", a: "We deliver fully online, flexible programmes in partnership with accredited institutions, at a fraction of the cost of traditional study, with no need to relocate." },
    ],
  },
  {
    id: "admissions",
    label: "Admissions",
    icon: GraduationCap,
    items: [
      { q: "How do I enroll in a course?", a: "You can enrol in any course directly from our website by creating an account, choosing your programme, and completing the application. Our admissions team will guide you through every step." },
      { q: "Can I transfer credit hours from another institution?", a: "Yes. We allow credit-hour transfers, subject to an evaluation of your prior qualifications by the awarding body." },
      { q: "Do I need to take an English proficiency test?", a: "This depends on the programme and partner institution. Some require IELTS or TOEFL; others accept alternative qualifications or prior study in English." },
      { q: "When can I start?", a: "Most programmes have flexible intakes — you can apply at any time and start as soon as your enrolment is confirmed." },
    ],
  },
  {
    id: "fees",
    label: "Fees & Scholarships",
    icon: Wallet,
    items: [
      { q: "How much do courses cost?", a: "Fees vary by programme and partner institution. Tuition is published on each course page, and payment plans are available." },
      { q: "What financial aid or scholarships are available?", a: "UeCampus offers a range of scholarships, discounts, and promotional tuition offers. Full details are on our Scholarship page." },
      { q: "Can I pay in instalments?", a: "Yes. Most programmes support monthly or term-based instalment plans — speak to our admissions team for options." },
    ],
  },
  {
    id: "learning",
    label: "Learning Experience",
    icon: Laptop,
    items: [
      { q: "Is there a mobile app for studying?", a: "Yes. UeCampus offers a mobile app so you can attend classes, track progress, and stay in touch with tutors on the go." },
      { q: "How are classes delivered?", a: "Programmes are delivered fully online through a mix of live sessions, recorded lectures, guided readings, and interactive assessments." },
      { q: "Will I have tutor support?", a: "Yes. Every programme includes academic tutors, a dedicated student success manager, and peer study groups." },
    ],
  },
  {
    id: "recognition",
    label: "Recognition",
    icon: Globe2,
    items: [
      { q: "Are the degrees recognised globally?", a: "Yes. All qualifications are delivered with accredited universities or regulated awarding bodies, so they are recognised by employers and institutions internationally." },
      { q: "Can I use a UeCampus qualification to apply for further study?", a: "Absolutely. Our diplomas ladder into bachelor's and master's degrees, and our degrees are accepted for postgraduate progression worldwide." },
    ],
  },
  {
    id: "support",
    label: "Privacy & Support",
    icon: ShieldCheck,
    items: [
      { q: "How do I contact support?", a: "You can reach us at info@uecampus.com, on +44 7586 797014, or via the WhatsApp button on every page." },
      { q: "How is my data handled?", a: "Your data is processed in line with our Privacy Policy and UK GDPR. You can request data deletion at any time from our Data Deletion page." },
    ],
  },
];

const FAQs = () => {
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const [open, setOpen] = useState<string | null>(`${categories[0].id}-0`);

  useEffect(() => {
    document.title = "Frequently Asked Questions — UeCampus";
  }, []);

  const current = categories.find((c) => c.id === activeCat)!;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative container py-20 md:py-28 text-center text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Help Centre
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-4xl mx-auto">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about studying with UeCampus — from admissions and fees to how your qualification is recognised worldwide.
          </p>
        </div>
      </section>

      {/* Category tabs + accordion */}
      <section className="bg-background py-16 md:py-24">
        <div className="w-full px-6 md:px-10 grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Category rail */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Browse by topic
            </p>
            <ul className="flex lg:flex-col flex-wrap gap-2">
              {categories.map((c) => {
                const Icon = c.icon;
                const active = c.id === activeCat;
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => {
                        setActiveCat(c.id);
                        setOpen(`${c.id}-0`);
                      }}
                      className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-smooth ${
                        active
                          ? "bg-primary text-primary-foreground shadow-pill"
                          : "bg-card border border-border text-foreground hover:border-primary/40"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${active ? "" : "text-primary"}`} />
                      {c.label}
                      <span
                        className={`ml-auto text-xs font-semibold ${
                          active ? "text-white/80" : "text-muted-foreground"
                        }`}
                      >
                        {c.items.length}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Accordion */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {current.label}
            </h2>
            <div className="mt-6 divide-y divide-border border border-border rounded-3xl bg-card overflow-hidden">
              {current.items.map((f, i) => {
                const key = `${current.id}-${i}`;
                const isOpen = open === key;
                return (
                  <div key={key}>
                    <button
                      onClick={() => setOpen(isOpen ? null : key)}
                      className="w-full flex items-start gap-5 text-left px-6 md:px-8 py-6 transition-smooth hover:bg-accent/40"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-bold text-primary/40 text-2xl md:text-3xl leading-none shrink-0 w-10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 pt-1 font-medium text-foreground text-base md:text-lg">
                        {f.q}
                      </span>
                      <span className="shrink-0 h-8 w-8 rounded-full bg-accent text-primary flex items-center justify-center">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 md:px-8 pb-6 -mt-2 ml-[60px] md:ml-[72px] text-muted-foreground leading-relaxed text-sm md:text-base">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="w-full px-6 md:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-section-dark p-10 md:p-14 text-white">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-2xl" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
                  Still have questions?
                </h2>
                <p className="mt-5 text-white/75 leading-relaxed max-w-xl">
                  Our admissions team is happy to help. Reach out by email, phone or WhatsApp and we'll get back to you within one working day.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  to="/contact-us"
                  className="rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-pill transition-smooth hover:bg-primary-glow"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:info@uecampus.com"
                  className="rounded-full border-2 border-white/40 text-white px-7 py-3.5 font-semibold transition-smooth hover:bg-white hover:text-section-dark"
                >
                  info@uecampus.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQs;
