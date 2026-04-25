import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PartnersMarquee from "@/components/sections/PartnersMarquee";
import { Award, ShieldCheck, GraduationCap, Globe2 } from "lucide-react";
import eie from "@/assets/partner-eie-exact.jpg";
import ppa from "@/assets/partner-ppa-exact-cropped.png";
import walsh from "@/assets/partner-walsh.png";
import qualifi from "@/assets/partner-qualifi-exact.png";
import eduqual from "@/assets/partner-eduqual-exact.png";

const partners = [
  {
    logo: eie,
    name: "eie European Business School",
    tagline: "European Institute of Executives",
    desc: "A European business school delivering professionally-focused bachelor's, master's and MBA programmes designed around the skills employers demand.",
    logoClass: "max-h-16",
  },
  {
    logo: ppa,
    name: "PPA Business School",
    tagline: "La Grande École en Alternance",
    desc: "A Paris-based grande école offering work-integrated bachelor and master programmes across business, marketing and management.",
    logoClass: "max-h-20",
  },
  {
    logo: walsh,
    name: "Walsh College",
    tagline: "Business-Focused Higher Education",
    desc: "A US institution offering accredited business, technology and accounting degrees with a strong emphasis on applied learning and career outcomes.",
    logoClass: "max-h-14",
  },
  {
    logo: qualifi,
    name: "Qualifi",
    tagline: "Ofqual-Regulated Awarding Organisation",
    desc: "A UK awarding organisation regulated by Ofqual, offering Level 3–7 diplomas used as pathways to full undergraduate and postgraduate degrees.",
    logoClass: "max-h-16",
  },
  {
    logo: eduqual,
    name: "EduQual",
    tagline: "SQA Accredited Awarding Body",
    desc: "A Scottish awarding body accredited by SQA Accreditation, delivering globally recognised qualifications across business, computing and more.",
    logoClass: "max-h-14",
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Fully Accredited",
    desc: "Every programme is delivered in partnership with a regulated awarding body or accredited higher-education institution.",
  },
  {
    icon: Globe2,
    title: "Globally Recognised",
    desc: "Qualifications that are respected by employers, universities and professional bodies worldwide.",
  },
  {
    icon: GraduationCap,
    title: "Progression Pathways",
    desc: "Our diplomas ladder into full bachelor's and master's degrees so you can build credentials step-by-step.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    desc: "Rigorous academic oversight, external examiners and regular reviews ensure the integrity of every award.",
  },
];

const Partners = () => {
  useEffect(() => {
    document.title = "Accreditation & Partners — UeCampus";
  }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="relative container py-20 md:py-28 text-center text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Accreditation & Partners
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-4xl mx-auto">
            Qualifications that travel with you
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            UeCampus partners with regulated awarding bodies and accredited universities to deliver degrees and diplomas that are recognised across the UK, Europe and beyond.
          </p>
        </div>
      </section>

      {/* Partners marquee */}
      <PartnersMarquee />

      {/* Pillars */}
      <section className="bg-background py-20 md:py-24">
        <div className="w-full px-6 md:px-10">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Why it matters
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
              Accreditation you can <span className="text-primary">trust</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, desc }, i) => {
              const purple = i === 0 || i === 3;
              const cardClass = purple
                ? "bg-gradient-card-purple text-white"
                : "bg-section-dark text-white";
              return (
                <div
                  key={title}
                  className={`${cardClass} rounded-3xl p-7 transition-smooth hover:-translate-y-1`}
                >
                  <div className="h-14 w-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-tight">{title}</h3>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner cards */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="w-full px-6 md:px-10">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05]">
              Our partners
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
              Each of our partners has been selected for their academic rigour, industry relevance and commitment to inclusive, flexible online learning.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <article
                key={p.name}
                className="bg-card rounded-3xl p-8 border border-border transition-smooth hover:-translate-y-1 hover:shadow-card-soft flex flex-col"
              >
                <div className="h-24 flex items-center">
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className={`${p.logoClass} w-auto object-contain`}
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{p.tagline}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 md:py-24">
        <div className="w-full px-6 md:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-card-purple p-10 md:p-16 text-white">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
                  Ready to earn a qualification that opens doors?
                </h2>
                <p className="mt-5 text-white/85 leading-relaxed max-w-xl">
                  Explore accredited programmes from our partner institutions and take the next step in your career.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  to="/programmes"
                  className="rounded-full bg-white text-primary px-7 py-3.5 font-semibold shadow-pill transition-smooth hover:bg-white/90"
                >
                  View Programmes
                </Link>
                <Link
                  to="/contact-us"
                  className="rounded-full border-2 border-white text-white px-7 py-3.5 font-semibold transition-smooth hover:bg-white hover:text-primary"
                >
                  Talk to Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Partners;
