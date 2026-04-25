import { Link } from "react-router-dom";

const CTABanner = () => (
  <section className="bg-gradient-primary">
    <div className="container py-14 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2 items-center text-primary-foreground">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join UeCampus Today or Schedule a Meeting
          </h2>
          <p className="text-primary-foreground/90 leading-relaxed">
            Explore our degree programmes. Discover a range of scholarships and financial aid to support your academic journey. Schedule an online meeting with the UeCampus Admission's Team to learn more about us.
          </p>
        </div>
        <div className="lg:text-right">
          <p className="text-2xl md:text-3xl font-semibold mb-2">Flexible Intake — Apply Anytime!</p>
          <p className="text-primary-foreground/80 mb-6">
            Enquire today or contact the UeCampus Admission's Team
          </p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/contact-us"
              className="rounded-full bg-white text-primary px-7 py-3 font-semibold shadow-pill transition-smooth hover:bg-white/90"
            >
              Enquire Now
            </Link>
            <a
              href="#"
              className="rounded-full border-2 border-white text-white px-7 py-3 font-semibold transition-smooth hover:bg-white hover:text-primary"
            >
              Book A Meeting
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
