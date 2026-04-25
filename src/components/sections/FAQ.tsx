import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is UeCampus?", a: "UeCampus is an online platform offering a wide range of courses and degrees to help you advance your career." },
  { q: "How do I enroll in a course?", a: "You can enroll in any course directly from our website by creating an account and choosing your desired program." },
  { q: "Are the degrees recognized globally?", a: "Yes, all degrees offered through UeCampus are globally accredited and recognized by employers and institutions worldwide." },
  { q: "What types of financial aid or scholarships are available?", a: "UeCampus may offer discounts, scholarships, or promotional offers on tuition fees. While we do not provide direct financial aid." },
  { q: "Can I shift my credit hours and complete my degree at UeCampus?", a: "Yes, we allow credit hour transfers, subject to evaluation of prior credits." },
  { q: "Do I need to take an English proficiency test?", a: "This depends on the university and program you choose. Some programs require IELTS/TOEFL, while others accept alternative qualifications." },
  { q: "Is there a mobile app for studying?", a: "Yes, UeCampus offers a mobile app that allows you to attend classes, track progress, and communicate on the go." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-section-dark py-20 md:py-28">
      <div className="container grid gap-10 lg:grid-cols-2 items-start">
        <div className="lg:sticky lg:top-28">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
            Everything you need to know about UeCampus
          </h2>
        </div>

        <div className="divide-y divide-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="py-6">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start gap-5 md:gap-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-3xl md:text-4xl text-white/30 shrink-0 leading-none w-12">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-white font-medium text-base md:text-lg pt-1">
                    {`${i + 1}. ${f.q}`}
                  </span>
                  <span className="shrink-0 text-white pt-1">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 ml-[68px] md:ml-[76px] text-white/70 leading-relaxed text-sm md:text-base">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
