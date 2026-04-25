import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/sections/Hero";
import ValueCards from "@/components/sections/ValueCards";
import PartnersMarquee from "@/components/sections/PartnersMarquee";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import WhyStudy from "@/components/sections/WhyStudy";
import PartnerInOnlineEd from "@/components/sections/PartnerInOnlineEd";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "UeCampus — Earn your Degree Anytime, Anywhere";
    const m = document.querySelector('meta[name="description"]');
    const c = "Flexible, fully accredited online degrees from UeCampus. Study anywhere, advance your career, and earn globally recognised qualifications.";
    if (m) m.setAttribute("content", c);
    else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = c;e
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <PageLayout>
      <Hero />
      <ValueCards />
      <PartnersMarquee />
      <FeaturedCourses />
      <WhyStudy />
      <Testimonials />
      <PartnerInOnlineEd />
      <FAQ />
    </PageLayout>
  );
};

export default Index;
