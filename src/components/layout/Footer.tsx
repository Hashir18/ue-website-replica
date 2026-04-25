import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/uecampus-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-section-dark">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="bg-white inline-flex p-2 rounded-lg mb-4">
              <img src={logo} alt="UeCampus" width={120} height={40} className="h-10 w-auto" loading="lazy" />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Your reliable partner in online higher education. Flexible, accredited, affordable degrees designed for the world.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link to="/about-us" className="hover:text-white transition-smooth">About Us</Link></li>
              <li><Link to="/accreditation-and-partners" className="hover:text-white transition-smooth">Accreditation & Partners</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition-smooth">Frequently Asked Questions</Link></li>
              <li><Link to="/programmes" className="hover:text-white transition-smooth">Programmes & Diploma</Link></li>
              <li><Link to="/scholarship" className="hover:text-white transition-smooth">Scholarships</Link></li>
              <li><Link to="/blogs" className="hover:text-white transition-smooth">Blogs</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-smooth">Contact Us</Link></li>
              <li><a href="#" className="hover:text-white transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Data Deletion</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Programmes</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link to="/programmes" className="hover:text-white transition-smooth">Walsh Programmes</Link></li>
              <li><Link to="/programmes" className="hover:text-white transition-smooth">PPA Programmes</Link></li>
              <li><Link to="/programmes" className="hover:text-white transition-smooth">eie Business School</Link></li>
              <li><Link to="/programmes" className="hover:text-white transition-smooth">Qualifi Diplomas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-primary-glow shrink-0 mt-0.5" />
                <span>+44 7586 797014 (UK)</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-primary-glow shrink-0 mt-0.5" />
                <span>info@uecampus.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-primary-glow shrink-0 mt-0.5" />
                <span>Office 249, Titan Court, 3 Bishop Square, Hatfield, Hertfordshire, AL10 9NA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} UeCampus. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-white transition-smooth">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
