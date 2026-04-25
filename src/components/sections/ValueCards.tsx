const values = [
  {
    title: "Study Anytime, Anywhere",
    desc: "Learn without limits. UeCampus brings you education that fits your world at any place, any time, on your terms.",
    variant: "purple" as const,
  },
  {
    title: "Internationally Recognised Degrees",
    desc: "Degrees that travel with you. UeCampus offers globally respected qualifications designed to open doors, wherever your journey takes you.",
    variant: "dark" as const,
  },
  {
    title: "Affordability & Accessibility",
    desc: "High-quality education made attainable because every motivated student deserves the opportunity to succeed without financial barriers.",
    variant: "light" as const,
  },
];

const ValueCards = () => (
  <section className="bg-[#1a2942] px-5 pb-10 pt-6 md:px-[38px] md:pb-11 md:pt-7 border-b-[10px] border-[#6814a7]">
    <div className="grid gap-6 md:grid-cols-3">
      {values.map(({ title, desc, variant }) => {
        const styles =
          variant === "purple"
            ? "bg-[#6e1ca5] text-white"
            : variant === "dark"
              ? "bg-[#2d2f67] text-white"
              : "bg-[#f5f5f5] text-[#0d1830]";
        const titleColor = variant === "light" ? "text-[#5520a0]" : "text-white";

        return (
          <article
            key={title}
            className={`${styles} min-h-[184px] rounded-2xl p-6 md:p-7`}
          >
            <h3 className={`text-3xl font-semibold leading-[1.2] ${titleColor}`}>
              {title}
            </h3>
            <p className={`mt-4 text-base leading-[1.45] ${variant === "light" ? "text-[#121826]" : "text-white/95"}`}>
              {desc}
            </p>
          </article>
        );
      })}
    </div>
  </section>
);

export default ValueCards;
