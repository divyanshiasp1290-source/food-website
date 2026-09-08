import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import factory from "@/assets/about-factory.jpg";
import lab from "@/assets/innovation-lab.jpg";
import {
  Award,
  ShieldCheck,
  Leaf,
  Heart,
  Globe2,
  FlaskConical,
  Factory,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Auréa Foods" },
      {
        name: "description",
        content:
          "Four generations of craft, a global manufacturing footprint, and a single obsession: making food families love.",
      },
      { property: "og:title", content: "About Auréa Foods" },
      {
        property: "og:description",
        content: "Our story, mission, leadership and manufacturing excellence.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const TIMELINE = [
  { year: "1947", text: "Founded as a single bakery in Lyon, France." },
  { year: "1962", text: "First chocolate manufacturing facility opens." },
  { year: "1984", text: "Global expansion begins across Europe and North America." },
  { year: "2001", text: "Acquires its first pet nutrition brand." },
  { year: "2015", text: "Renewable energy program reaches 50% of operations." },
  { year: "2026", text: "32 facilities, 80+ countries, one mission." },
];

const VALUES = [
  {
    icon: Heart,
    title: "Quality is care",
    body: "We make food the way we'd want it made for our families.",
  },
  {
    icon: ShieldCheck,
    title: "Trust is earned daily",
    body: "Every batch, every shipment, every claim — verified.",
  },
  {
    icon: Leaf,
    title: "Tomorrow matters",
    body: "We measure success in generations, not quarters.",
  },
  {
    icon: Award,
    title: "Craft scales",
    body: "Industrial precision in service of artisan-level quality.",
  },
];

const LEADERS = [
  { name: "Élise Marchand", role: "Chief Executive Officer" },
  { name: "Rajiv Krishnan", role: "Chief Operating Officer" },
  { name: "Sofia Alvarez", role: "Chief Sustainability Officer" },
  { name: "Daniel Hoffmann", role: "Chief Innovation Officer" },
];

const CERTS = [
  "ISO 22000",
  "HACCP",
  "FDA Approved",
  "GMP Certified",
  "B Corp",
  "Rainforest Alliance",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A food company built on <em className="not-italic text-cocoa">care</em>.
          </>
        }
        description="Auréa Foods is a global manufacturer of premium chocolate, snacks, confectionery, healthy foods and pet nutrition — present in over 80 countries and made by 18,000 people who care deeply about what they do."
      />

      <section
        id="global-presence"
        className="border-b border-border bg-primary py-12 text-primary-foreground"
      >
        <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Globe2, value: "80+", label: "markets served" },
            { icon: Users, value: "18,000", label: "people worldwide" },
            { icon: Factory, value: "32", label: "manufacturing sites" },
            { icon: FlaskConical, value: "8", label: "innovation labs" },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 border-l border-primary-foreground/25 pl-5"
            >
              <Icon className="text-accent" />
              <div>
                <p className="text-3xl font-black">{value}</p>
                <p className="text-xs uppercase tracking-widest text-primary-foreground/65">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">Our journey</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              From a single bakery to a global presence — every chapter built on the last, every
              decade adding a craft we hadn't mastered before.
            </p>
          </Reveal>
          <div className="relative border-l-2 border-border pl-10 space-y-12">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="relative">
                  <span className="absolute -left-[3.05rem] top-1.5 h-4 w-4 rounded-full bg-cocoa border-4 border-background" />
                  <div className="font-display text-2xl text-gold">{t.year}</div>
                  <p className="mt-1 text-foreground/80 max-w-md">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="purpose" className="py-24 bg-secondary/60">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Mission
            </span>
            <h3 className="mt-3 text-3xl md:text-4xl text-balance">
              To craft food that makes everyday moments a little more remarkable.
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Vision</span>
            <h3 className="mt-3 text-3xl md:text-4xl text-balance">
              The world's most trusted food company — for families, partners and the planet.
            </h3>
          </Reveal>
        </div>

        <div className="container-x mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="rounded-2xl bg-card border border-border p-7 h-full">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-cocoa text-cream">
                  <Icon size={18} />
                </span>
                <h4 className="mt-5 font-display text-xl">{title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">
              How we create value
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl md:text-6xl">
              Purpose translated into everyday decisions.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
            {[
              {
                n: "01",
                title: "People and culture",
                text: "We invest in safe, inclusive workplaces where expertise travels freely across teams, regions and generations.",
              },
              {
                n: "02",
                title: "Partners and communities",
                text: "Long-term supplier and customer relationships help strengthen local economies and improve resilience across our value chain.",
              },
              {
                n: "03",
                title: "Science and quality",
                text: "Food safety, nutrition and consumer insight guide every decision from ingredient selection to final delivery.",
              },
            ].map((item) => (
              <Reveal key={item.n}>
                <article className="h-full bg-background p-8 md:p-10">
                  <span className="text-xs font-black tracking-widest text-primary">{item.n}</span>
                  <h3 className="mt-8 text-2xl">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="text-4xl md:text-5xl max-w-2xl text-balance">Leadership team</h2>
          </Reveal>
          <div className="mt-14 grid w-full grid-cols-2 gap-5 lg:grid-cols-4 auto-rows-fr">
            {LEADERS.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.05}>
                <div className="rounded-2xl border border-border overflow-hidden bg-card">
                  <div className="aspect-[5/6] bg-gradient-to-br from-secondary to-secondary/50 grid place-items-center">
                    <span className="font-display text-5xl text-cocoa/30">
                      {l.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="font-display text-lg">{l.name}</div>
                    <div className="text-sm text-muted-foreground">{l.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/60">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={factory}
              alt="Manufacturing facility"
              loading="lazy"
              className="rounded-3xl shadow-[var(--shadow-elegant)] aspect-[4/3] object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Manufacturing excellence
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl text-balance">
              Industrial precision, artisan-level care.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our 32 facilities are designed around a single principle: that quality cannot be
              inspected in — it has to be built in. From ingredient handling to final pack, we
              engineer for consistency first and speed second.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {CERTS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-wider"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
