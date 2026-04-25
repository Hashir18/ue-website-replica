import { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Mail, Phone, MapPin, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    document.title = "Contact Us — UeCampus";
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Our admissions team will get back to you shortly." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-section-dark">
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container py-24 md:py-32 text-center text-white">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/15 mb-5">
            <Mail className="h-7 w-7 text-white" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-white/90">Get in touch with our team</p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              We're here to help!
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you have questions about our courses, admissions, scholarships, or need support during your studies, the UeCampus team is ready to assist you.
            </p>

            <div className="mt-8 space-y-6">
              <InfoBlock icon={Phone} title="Phone">
                Call us Monday to Friday, 9:00 AM – 6:00 PM (GMT+1)
                <br />
                <span className="text-foreground font-semibold">+44 7586 797014 (UK)</span>
              </InfoBlock>
              <InfoBlock icon={Mail} title="Email">
                General Inquiries: <a className="text-primary" href="mailto:info@uecampus.com">info@uecampus.com</a>
                <br />
                Admissions: <a className="text-primary" href="mailto:admissions@uecampus.com">admissions@uecampus.com</a>
                <br />
                Support: <a className="text-primary" href="mailto:support@uecampus.com">support@uecampus.com</a>
              </InfoBlock>
              <InfoBlock icon={MessageCircle} title="Live Chat">
                Available on our website from 9:00 AM – 9:00 PM (GMT) for real-time assistance.
              </InfoBlock>
              <InfoBlock icon={MapPin} title="Mailing Address">
                UeCampus Headquarters, Office 249, 2nd Floor, Titan Court,
                <br />3 Bishop Square, Hatfield, Hertfordshire, England, AL10 9NA
              </InfoBlock>

              <div>
                <p className="font-semibold text-foreground mb-3">Follow us</p>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="h-10 w-10 rounded-full bg-secondary text-primary flex items-center justify-center transition-smooth hover:bg-primary hover:text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="bg-card border border-border rounded-2xl p-8 shadow-card-soft h-fit">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            <div className="space-y-4">
              <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
              <div>
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition-smooth"
                />
              </div>
              <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-pill transition-smooth hover:bg-primary-glow">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

const InfoBlock = ({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) => (
  <div className="flex gap-4">
    <div className="h-11 w-11 shrink-0 rounded-xl bg-accent text-primary flex items-center justify-center">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="font-semibold text-foreground">{title}</p>
      <div className="mt-1 text-muted-foreground text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

const Field = ({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) => (
  <div>
    <label className="text-sm font-medium text-foreground">{label}</label>
    <input
      required
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition-smooth"
    />
  </div>
);

export default Contact;
