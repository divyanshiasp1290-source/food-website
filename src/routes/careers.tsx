import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Heart, Globe2, Sparkles, Briefcase } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Auréa Foods" },
      {
        name: "description",
        content:
          "Join 18,000 people building the world's most trusted food company. Open roles across manufacturing, R&D, supply chain and corporate.",
      },
      { property: "og:title", content: "Careers — Auréa Foods" },
      { property: "og:description", content: "Build a career that feeds the world." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const BENEFITS = [
  {
    icon: Heart,
    title: "Health & wellbeing",
    body: "Comprehensive medical, dental, mental-health and family support.",
  },
  {
    icon: Globe2,
    title: "Global mobility",
    body: "Work across our 80+ markets through internal exchange programs.",
  },
  {
    icon: Sparkles,
    title: "Learning fund",
    body: "Annual stipend for courses, conferences and continued education.",
  },
  {
    icon: Briefcase,
    title: "Equity & bonus",
    body: "Long-term incentive program for every full-time team member.",
  },
];

const JOBS = [
  { title: "Senior Food Scientist", team: "R&D", location: "Lyon, France" },
  { title: "Plant Operations Manager", team: "Manufacturing", location: "Da Nang, Vietnam" },
  { title: "Brand Director, Confectionery", team: "Marketing", location: "London, UK" },
  { title: "Sustainability Program Lead", team: "Sustainability", location: "São Paulo, Brazil" },
  { title: "Supply Chain Analyst", team: "Supply Chain", location: "Chicago, USA" },
  { title: "Quality Engineer", team: "Quality", location: "Hamburg, Germany" },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build a career that <em className="not-italic text-cocoa">feeds the world</em>.
          </>
        }
        description="18,000 people. 80+ countries. One shared belief: that what we make matters."
      />

      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Our culture
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl text-balance">
              A company you'd be proud to tell your family about.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We hire people who care — about the craft, about each other, about the long arc of
              doing things right. The work is real, the standards are high, and the impact is
              measured in millions of moments shared across kitchens, lunchboxes and celebrations
              around the world.
            </p>
          </Reveal>
        </div>

        <div className="container-x mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-card p-7 h-full">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-cocoa text-cream">
                  <Icon size={18} />
                </span>
                <h3 className="mt-5 font-display text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/60">
        <div className="container-x">
          <Reveal>
            <h2 className="text-4xl md:text-5xl">Open positions</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {JOBS.map((j) => (
              <div
                key={j.title}
                className="grid grid-cols-[1fr_auto] sm:grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center py-6 group hover:bg-background/60 transition-colors px-4 -mx-4 rounded-2xl"
              >
                <div className="font-display text-lg">{j.title}</div>
                <div className="hidden sm:block text-sm text-muted-foreground">{j.team}</div>
                <div className="hidden sm:block text-sm text-muted-foreground">{j.location}</div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                >
                  Apply <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-24">
        <div className="container-x max-w-2xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">General application</h2>
            <p className="mt-3 text-muted-foreground">
              Don't see the right role? Tell us about you.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-10 grid gap-5">
              <Field label="Full name">
                <input className="input" />
              </Field>
              <Field label="Email">
                <input type="email" className="input" />
              </Field>
              <Field label="Role of interest">
                <input className="input" />
              </Field>
              <Field label="Tell us about yourself">
                <textarea className="input min-h-32" />
              </Field>
              <button className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-cocoa text-cream px-7 py-3.5 text-sm font-medium hover:bg-cocoa/90">
                Submit application <ArrowRight size={14} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <style>{`.input{width:100%;border-radius:0.875rem;border:1px solid var(--border);background:var(--card);padding:0.875rem 1rem;font-size:0.9rem;outline:none;transition:border-color .2s}.input:focus{border-color:var(--cocoa)}`}</style>
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
