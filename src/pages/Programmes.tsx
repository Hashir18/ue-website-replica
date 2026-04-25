import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { ArrowRight, Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { courses as allCourses } from "@/data/courses";

type Programme = {
  slug: string;
  title: string;
  desc: string;
  img: string;
  price: string;
  categories: string[];
  university: string;
  level: string;
  intakes: string[];
};

const PROGRAM_TYPES = [
  "Accounting",
  "Artificial Intelligence (AI)",
  "Business",
  "Cyber Security",
  "Data Analytics",
  "Education",
  "Entrepreneurship",
  "Finance",
  "Hospitality and Tourism",
  "Human Resource",
  "Information Technology",
  "Marketing",
  "Psychology",
  "Supply Chain",
];

const UNIVERSITIES = [
  "Walsh College",
  "PPA",
  "eie Business School",
  "Qualifi",
];

const LEVELS = ["Diploma", "Doctorate", "Postgraduate", "Top-Up", "Undergraduate"];

const ACADEMIC_YEARS = [
  "September 2026",
  "March 2026",
  "January 2026",
  "September 2025",
  "March 2025",
];

const programmes: Programme[] = allCourses.map<Programme>((c) => ({
  slug: c.slug,
  title: c.title,
  desc: c.tagline,
  img: c.img,
  price:
    c.tuition === "Contact admissions"
      ? "Contact admissions"
      : c.tuition.replace("£", "") + " (GBP)",
  categories: c.categories,
  university: c.universityShort,
  level: c.level,
  intakes: c.intakes,
}));

type FilterSectionProps = {
  title: string;
  options: string[];
  selected: Set<string>;
  onToggle: (v: string) => void;
  defaultOpen?: boolean;
};

const FilterSection = ({ title, options, selected, onToggle, defaultOpen = true }: FilterSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const count = options.filter((o) => selected.has(o)).length;
  return (
    <div className="border-t border-border first:border-t-0 first:pt-0 pt-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between pb-3"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span className="font-display text-base font-semibold text-primary">{title}</span>
          {count > 0 && (
            <span className="inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold">
              {count}
            </span>
          )}
        </span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="space-y-2.5 pb-2">
          {options.map((t) => {
            const checked = selected.has(t);
            return (
              <li key={t}>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <span
                    className={`mt-0.5 h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-smooth ${
                      checked
                        ? "bg-primary border-primary"
                        : "bg-background border-border group-hover:border-primary/60"
                    }`}
                  >
                    {checked && (
                      <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => onToggle(t)}
                  />
                  <span className={`text-sm leading-tight ${checked ? "text-foreground font-medium" : "text-foreground/80"}`}>{t}</span>
                </label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const Programmes = ({ titleOverride }: { titleOverride?: string }) => {
  const [query, setQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [selectedUnis, setSelectedUnis] = useState<Set<string>>(new Set());
  const [selectedLevels, setSelectedLevels] = useState<Set<string>>(new Set());
  const [selectedYears, setSelectedYears] = useState<Set<string>>(new Set());
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    document.title = titleOverride || "Programmes & Diplomas — UeCampus";
  }, [titleOverride]);

  const toggler = (set: Set<string>, setter: (s: Set<string>) => void) => (v: string) => {
    const next = new Set(set);
    next.has(v) ? next.delete(v) : next.add(v);
    setter(next);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programmes.filter((p) => {
      if (q && !p.title.toLowerCase().includes(q) && !p.desc.toLowerCase().includes(q)) return false;
      if (selectedTypes.size > 0 && !p.categories.some((c) => selectedTypes.has(c))) return false;
      if (selectedUnis.size > 0 && !selectedUnis.has(p.university)) return false;
      if (selectedLevels.size > 0 && !selectedLevels.has(p.level)) return false;
      if (selectedYears.size > 0 && !p.intakes.some((i) => selectedYears.has(i))) return false;
      return true;
    });
  }, [query, selectedTypes, selectedUnis, selectedLevels, selectedYears]);

  const activeCount =
    selectedTypes.size + selectedUnis.size + selectedLevels.size + selectedYears.size;

  const clearAll = () => {
    setSelectedTypes(new Set());
    setSelectedUnis(new Set());
    setSelectedLevels(new Set());
    setSelectedYears(new Set());
    setQuery("");
  };

  const FilterPanel = (
    <div className="bg-card rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between pb-5 border-b border-border">
        <h2 className="font-display text-xl font-bold text-primary">Filter Courses</h2>
        {activeCount > 0 && (
          <button
            onClick={clearAll}
            className="text-xs font-semibold text-muted-foreground hover:text-primary"
          >
            Clear all
          </button>
        )}
      </div>
      <div className="mt-5 space-y-0">
        <FilterSection
          title="Program Types"
          options={PROGRAM_TYPES}
          selected={selectedTypes}
          onToggle={toggler(selectedTypes, setSelectedTypes)}
        />
        <FilterSection
          title="Universities"
          options={UNIVERSITIES}
          selected={selectedUnis}
          onToggle={toggler(selectedUnis, setSelectedUnis)}
        />
        <FilterSection
          title="Levels"
          options={LEVELS}
          selected={selectedLevels}
          onToggle={toggler(selectedLevels, setSelectedLevels)}
        />
        <FilterSection
          title="Academic Years"
          options={ACADEMIC_YEARS}
          selected={selectedYears}
          onToggle={toggler(selectedYears, setSelectedYears)}
        />
      </div>
    </div>
  );

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-section-dark">
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container py-20 md:py-24 text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            {titleOverride ? "All Courses" : "Programmes & Diplomas"}
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Explore our full catalogue of flexible, career-focused, fully accredited online programmes.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-12 md:py-16">
        <div className="w-full px-6 md:px-10 grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block lg:sticky lg:top-28 lg:self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-1">
            {FilterPanel}
          </aside>

          {/* Main column */}
          <div>
            {/* Search row */}
            <div className="flex items-center gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground shrink-0">
                Courses
              </h2>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex-1 flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-2"
              >
                <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Find your course"
                  className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm py-2"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-primary-glow"
                >
                  Search
                </button>
              </form>
              <button
                onClick={() => setFiltersOpen(true)}
                className="lg:hidden rounded-xl border border-border bg-card px-3 py-2.5 flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeCount > 0 && (
                  <span className="h-5 min-w-5 px-1.5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {activeCount}
                  </span>
                )}
              </button>
            </div>

            {/* Active chips */}
            {activeCount > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  ...[...selectedTypes].map((v) => ({ v, setter: setSelectedTypes, set: selectedTypes, k: "t" })),
                  ...[...selectedUnis].map((v) => ({ v, setter: setSelectedUnis, set: selectedUnis, k: "u" })),
                  ...[...selectedLevels].map((v) => ({ v, setter: setSelectedLevels, set: selectedLevels, k: "l" })),
                  ...[...selectedYears].map((v) => ({ v, setter: setSelectedYears, set: selectedYears, k: "y" })),
                ].map(({ v, setter, set, k }) => (
                  <button
                    key={`${k}-${v}`}
                    onClick={() => {
                      const next = new Set(set);
                      next.delete(v);
                      setter(next);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent text-primary px-3 py-1 text-xs font-semibold"
                  >
                    {v} <X className="h-3 w-3" />
                  </button>
                ))}
              </div>
            )}

            {/* Results count */}
            <p className="mt-6 text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "course" : "courses"}
            </p>

            {/* Results */}
            <div className="mt-4 flex flex-col gap-4">
              {filtered.length === 0 ? (
                <div className="bg-card border border-border rounded-2xl p-10 text-center">
                  <p className="text-foreground font-semibold">No courses match your filters</p>
                  <p className="mt-2 text-sm text-muted-foreground">Try clearing some filters or adjusting your search.</p>
                  <button
                    onClick={clearAll}
                    className="mt-5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                filtered.map((c) => (
                  <article
                    key={c.title}
                    className="group bg-card border border-border rounded-2xl overflow-hidden grid md:grid-cols-[300px_1fr] transition-smooth hover:border-primary/40 hover:shadow-card-soft"
                  >
                    <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img
                        src={c.img}
                        alt={c.title}
                        width={900}
                        height={675}
                        loading="lazy"
                        className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 md:p-7 flex flex-col">
                      <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight">
                        {c.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-md bg-accent text-primary text-xs font-semibold px-2.5 py-1">
                          Program {c.price}
                        </span>
                        <span className="inline-flex items-center rounded-md bg-muted text-muted-foreground text-xs font-semibold px-2.5 py-1">
                          Tuition N/A
                        </span>
                        <span className="inline-flex items-center rounded-md border border-border text-foreground/80 text-xs font-semibold px-2.5 py-1">
                          {c.level}
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                      <hr className="my-5 border-border" />
                      <div className="flex items-center justify-between gap-4 mt-auto">
                        <span className="text-xs text-muted-foreground truncate">
                          {c.university} · Next intake: {c.intakes[0]}
                        </span>
                        <Link
                          to={c.slug ? `/programmes/${c.slug}` : "/contact-us"}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all shrink-0"
                        >
                          Course Details <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter sheet */}
      {filtersOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="relative ml-auto w-[88%] max-w-sm bg-background h-full overflow-y-auto p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-bold text-primary">Filters</h3>
              <button
                onClick={() => setFiltersOpen(false)}
                className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center"
                aria-label="Close filters"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
            </div>
            {FilterPanel}
            <button
              onClick={() => setFiltersOpen(false)}
              className="mt-5 w-full rounded-full bg-primary text-primary-foreground font-semibold py-3"
            >
              Show {filtered.length} results
            </button>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Programmes;
