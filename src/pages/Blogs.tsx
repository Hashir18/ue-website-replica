import { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Search, ArrowRight } from "lucide-react";
import libraryBg from "@/assets/library-bg.jpg";
import dba from "@/assets/blog-dba.jpg";
import data from "@/assets/blog-data.jpg";
import diploma from "@/assets/blog-diploma.jpg";

const posts = [
  { img: dba, title: "DBA vs PhD in Business: Which Doctorate Fits You?", excerpt: "A practical breakdown of how the Doctor of Business Administration compares to the PhD — and which is the right fit for your career goals." },
  { img: data, title: "Data Science vs Data Analytics: Which One Should You Choose?", excerpt: "Two booming careers, two different mindsets. Understand the skills, tools and trajectories before you commit." },
  { img: diploma, title: "Level 4 vs Level 5 vs Level 7 Diploma in IT: What's the Difference?", excerpt: "From foundational skills to senior strategic roles — here's what each diploma level signals to employers." },
  { img: dba, title: "How to Choose the Right Online MBA in 2026", excerpt: "What accreditation, format and faculty really matter when picking an online MBA programme." },
  { img: data, title: "AI Career Paths: Where to Start in 2026", excerpt: "Mapping the most in-demand AI roles and the skills you'll need to land them." },
  { img: diploma, title: "Why Online Degrees Are Now Equal to On-Campus", excerpt: "Recognition, employer perception, and the credentials that actually move the needle." },
];

const Blogs = () => {
  const [q, setQ] = useState("");
  useEffect(() => {
    document.title = "Blogs — UeCampus";
  }, []);

  const filtered = posts.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <img src={libraryBg} alt="Library" width={1920} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container py-24 md:py-32 text-white text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold">Blogs</h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Be inspired by the latest trends that shape the world. Be the next one!
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-10 max-w-2xl mx-auto flex items-center gap-3">
            <div className="flex-1 flex items-center gap-2 bg-white/95 rounded-lg px-5 py-4 shadow-sm">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <button className="shrink-0 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-pill transition-smooth hover:bg-primary-glow">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.title} className="group bg-card rounded-2xl overflow-hidden shadow-card-soft border border-border transition-smooth hover:-translate-y-1">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} width={1024} height={640} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">UeCampus_Blog</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground line-clamp-2 min-h-[3.5rem]">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No articles match "{q}".</p>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Blogs;
