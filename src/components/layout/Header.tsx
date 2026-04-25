import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Info, Award, HelpCircle } from "lucide-react";
import logo from "@/assets/uecampus-logo.jpg";

type NavChild = {
  label: string;
  to: string;
  desc?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type NavItem = {
  label: string;
  to: string;
  children?: NavChild[];
};

const nav: NavItem[] = [
  {
    label: "About Us",
    to: "/about-us",
    children: [
      {
        label: "About Us",
        to: "/about-us",
        desc: "Who we are and what we stand for",
        icon: Info,
      },
      {
        label: "Accreditation & Partners",
        to: "/accreditation-and-partners",
        desc: "Universities and awarding bodies we work with",
        icon: Award,
      },
      {
        label: "Frequently Asked Questions",
        to: "/faqs",
        desc: "Answers to the most common questions",
        icon: HelpCircle,
      },
    ],
  },
  { label: "Programmes & Diploma", to: "/programmes" },
  { label: "Scholarship", to: "/scholarship" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", to: "/contact-us" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="UeCampus" width={140} height={48} className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => {
            if (item.children) {
              const isOpen = openDropdown === item.label;
              const isActive =
                location.pathname === item.to ||
                item.children.some((c) => c.to === location.pathname);
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    className={`flex items-center gap-1 text-sm font-medium transition-smooth hover:text-primary ${
                      isActive ? "text-primary" : "text-foreground/80"
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[340px]">
                      <div className="bg-card rounded-2xl border border-border shadow-card-soft p-2 animate-fade-up">
                        {item.children.map((c) => {
                          const Icon = c.icon;
                          const linkActive = location.pathname === c.to;
                          return (
                            <Link
                              key={c.to}
                              to={c.to}
                              onClick={() => setOpenDropdown(null)}
                              className={`flex items-start gap-3 rounded-xl px-4 py-3 transition-smooth ${
                                linkActive ? "bg-accent" : "hover:bg-accent/60"
                              }`}
                            >
                              {Icon && (
                                <span className="h-9 w-9 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                  <Icon className="h-4 w-4" />
                                </span>
                              )}
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold text-foreground">
                                  {c.label}
                                </span>
                                {c.desc && (
                                  <span className="block text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                    {c.desc}
                                  </span>
                                )}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-smooth hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="rounded-full border-2 border-primary px-5 py-2 text-sm font-semibold text-primary transition-smooth hover:bg-primary hover:text-primary-foreground"
          >
            Student Portal
          </a>
          <Link
            to="/contact-us"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-pill transition-smooth hover:bg-primary-glow"
          >
            Apply Now
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-1">
            {nav.map((item) => {
              if (item.children) {
                const expanded = mobileGroup === item.label;
                return (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setMobileGroup(expanded ? null : item.label)
                      }
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-md text-sm font-medium transition-smooth ${
                        expanded ? "bg-accent text-primary" : "text-foreground/80 hover:bg-secondary"
                      }`}
                      aria-expanded={expanded}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expanded && (
                      <div className="pl-3 mt-1 flex flex-col gap-1">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            onClick={() => {
                              setOpen(false);
                              setMobileGroup(null);
                            }}
                            className={`block px-3 py-2.5 rounded-md text-sm transition-smooth ${
                              location.pathname === c.to
                                ? "bg-accent text-primary font-medium"
                                : "text-foreground/75 hover:bg-secondary"
                            }`}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-3 rounded-md text-sm font-medium transition-smooth ${
                    location.pathname === item.to
                      ? "bg-accent text-primary"
                      : "text-foreground/80 hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-border">
              <a
                href="#"
                className="text-center rounded-full border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary"
              >
                Student Portal
              </a>
              <Link
                to="/contact-us"
                onClick={() => setOpen(false)}
                className="text-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
