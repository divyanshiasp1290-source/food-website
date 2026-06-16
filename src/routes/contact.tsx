import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Newspaper,
  BriefcaseBusiness,
  Handshake,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Auréa Foods" },
      {
        name: "description",
        content:
          "Get in touch with Auréa Foods — partnerships, press, careers and customer enquiries.",
      },
      { property: "og:title", content: "Contact — Auréa Foods" },
      { property: "og:description", content: "Reach our global offices." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const OFFICES = [
  { city: "Lyon", country: "France (HQ)", address: "12 Rue de la Confiserie, 69002 Lyon" },
  { city: "New York", country: "USA", address: "550 Madison Avenue, NY 10022" },
  { city: "Singapore", country: "Asia Pacific", address: "1 Raffles Place, Tower 2, Level 24" },
  { city: "São Paulo", country: "Brazil", address: "Av. Brigadeiro Faria Lima 3477" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's <em className="not-italic text-cocoa">talk</em>.
          </>
        }
        description="Whether you're a retailer, distributor, partner or simply curious — we'd love to hear from you."
      />

      <section className="border-b border-border py-16">
        <div className="container-x grid gap-px bg-border md:grid-cols-3">
          {[
            {
              icon: Newspaper,
              title: "Media enquiries",
              text: "Press materials, company statements and interview requests.",
              email: "media@aureafoods.com",
            },
            {
              icon: BriefcaseBusiness,
              title: "Careers",
              text: "Explore opportunities or ask about an existing application.",
              email: "careers@aureafoods.com",
            },
            {
              icon: Handshake,
              title: "Business partnerships",
              text: "Retail, distribution, sourcing and manufacturing enquiries.",
              email: "partners@aureafoods.com",
            },
          ].map(({ icon: Icon, title, text, email }) => (
            <article key={title} className="bg-background p-8">
              <Icon className="text-primary" />
              <h2 className="mt-6 text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <a
                href={`mailto:${email}`}
                className="mt-5 inline-block text-sm font-bold text-primary underline underline-offset-4"
              >
                {email}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-5 bg-card border border-border p-8 md:p-10 shadow-[var(--shadow-soft)]"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="First name">
                  <input required className="input" />
                </Field>
                <Field label="Last name">
                  <input required className="input" />
                </Field>
              </div>
              <Field label="Email">
                <input required type="email" className="input" />
              </Field>
              <Field label="Company">
                <input className="input" />
              </Field>
              <Field label="Enquiry type">
                <select required className="input" defaultValue="">
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option>Consumer care</option>
                  <option>Business partnership</option>
                  <option>Media</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="How can we help?">
                <textarea required className="input min-h-36" />
              </Field>
              <label className="flex gap-3 text-xs leading-relaxed text-muted-foreground">
                <input required type="checkbox" className="mt-0.5 accent-primary" />I confirm that I
                am 18 or older and consent to Auréa Foods processing my information to respond to
                this enquiry.
              </label>
              <Button type="submit" className="mt-2 h-12 rounded-none text-sm font-bold">
                Send message <ArrowRight size={14} />
              </Button>
              {sent && (
                <p
                  role="status"
                  className="border-l-4 border-primary bg-secondary p-4 text-sm font-medium"
                >
                  Thank you. Your message has been received and our team will respond shortly.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6">
                <span className="grid h-11 w-11 place-items-center bg-cocoa text-cream">
                  <Mail size={16} />
                </span>
                <div>
                  <div className="font-display text-lg">Email</div>
                  <div className="text-muted-foreground">hello@aureafoods.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6">
                <span className="grid h-11 w-11 place-items-center bg-cocoa text-cream">
                  <Phone size={16} />
                </span>
                <div>
                  <div className="font-display text-lg">Phone</div>
                  <div className="text-muted-foreground">+33 4 72 00 12 00</div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border h-64 bg-secondary">
                <iframe
                  title="Lyon office map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=4.82%2C45.74%2C4.86%2C45.77&amp;layer=mapnik"
                  className="size-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-secondary/60">
        <div className="container-x">
          <Reveal>
            <h2 className="text-4xl md:text-5xl">Our global offices</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.05}>
                <div className="rounded-2xl bg-card border border-border p-6 h-full">
                  <MapPin size={18} className="text-gold" />
                  <div className="mt-4 font-display text-xl">{o.city}</div>
                  <div className="text-sm text-muted-foreground">{o.country}</div>
                  <div className="mt-3 text-sm text-foreground/80 leading-relaxed">{o.address}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-4xl md:text-5xl">Before you contact us</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              For product feedback, include the product name, best-before date and batch code when
              available. This helps our consumer care team investigate quickly.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-border p-6">
              <p className="text-sm font-bold">Response times</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Consumer and business enquiries: 2–3 working days.
              </p>
            </div>
            <div className="border border-border p-6">
              <p className="text-sm font-bold">Privacy requests</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Please select “Other” and include “Privacy” in your message.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`.input{width:100%;border-radius:0;border:1px solid var(--border);background:var(--background);padding:0.875rem 1rem;font-size:0.9rem;outline:none;transition:border-color .2s}.input:focus{border-color:var(--cocoa)}`}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
