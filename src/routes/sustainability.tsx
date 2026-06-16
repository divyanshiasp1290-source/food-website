import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, Counter } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import sustain from "@/assets/sustainability.jpg";
import { Droplets, PackageCheck, Sprout, Users } from "lucide-react";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — Auréa Foods" },
      {
        name: "description",
        content:
          "Our 2035 roadmap for regenerative sourcing, renewable energy, sustainable packaging and community impact.",
      },
      { property: "og:title", content: "Sustainability — Auréa Foods" },
      { property: "og:description", content: "How we make food a force for good." },
      { property: "og:url", content: "/sustainability" },
    ],
    links: [{ rel: "canonical", href: "/sustainability" }],
  }),
  component: Sustain,
});

const SECTIONS = [
  {
    slug: "climate-action",
    title: "Climate action",
    body: "We are redesigning energy, logistics and manufacturing systems to reach net-zero scope 1 and 2 emissions by 2030 and address our full value chain by 2035.",
    detail:
      "Our transition plans prioritize efficiency first, renewable electricity second and high-quality removals only for residual emissions.",
  },
  {
    slug: "responsible-sourcing",
    title: "Responsible sourcing",
    body: "Our cocoa, palm, dairy, grains and proteins are moving toward fully traceable supply chains through direct, long-term partnerships.",
    detail:
      "We combine farm mapping, third-party standards and supplier development to protect ecosystems and strengthen producer livelihoods.",
  },
  {
    slug: "circular-packaging",
    title: "Circular packaging",
    body: "We are reducing virgin material, removing unnecessary formats and designing every pack for reuse, recycling or composting.",
    detail:
      "Design teams work with recyclers and local systems so packaging improvements perform in the real world, not only in the laboratory.",
  },
  {
    slug: "community-impact",
    title: "Community impact",
    body: "Education, healthcare, safety and livelihood programs support the people and places connected to our operations.",
    detail:
      "Programs are built with local partners and measured against clear outcomes, with a focus on women, young people and smallholder producers.",
  },
];

function Sustain() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title={
          <>
            Food, made <em className="not-italic text-cocoa">responsibly</em>.
          </>
        }
        description="We measure success in generations. Our 2035 roadmap commits Auréa to a regenerative food system across every product, partner and place we operate."
      />

      <section className="py-24">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: 62, s: "%", label: "Waste reduced since 2018" },
            { v: 100, s: "%", label: "Recyclable packaging by 2030" },
            { v: 84, s: "%", label: "Renewable energy" },
            { v: 48, s: "%", label: "Less water per ton" },
          ].map((s) => (
            <Reveal key={s.label}>
              <div className="rounded-3xl bg-card border border-border p-8">
                <div className="text-5xl font-display text-cocoa">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
                <div className="mt-5 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.v}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gold"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-32 my-16 overflow-hidden">
        <img
          src={sustain}
          alt="Sustainable landscape"
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-cocoa/65" />
        <div className="relative container-x text-cream max-w-3xl">
          <Reveal>
            <h2 className="text-4xl md:text-5xl text-balance">
              "We don't inherit the earth from our ancestors — we borrow it from our children."
            </h2>
            <p className="mt-6 text-cream/70">— Our sustainability charter</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">
              Our action areas
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl md:text-6xl">
              Four connected priorities. One measurable plan.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Sprout,
                title: "Healthy planet",
                text: "Cutting emissions, protecting forests and restoring soil and biodiversity.",
              },
              {
                icon: Droplets,
                title: "Water stewardship",
                text: "Reducing demand and supporting watershed resilience in high-risk regions.",
              },
              {
                icon: PackageCheck,
                title: "Circular design",
                text: "Building lower-impact packaging and reducing waste across operations.",
              },
              {
                icon: Users,
                title: "Thriving people",
                text: "Advancing opportunity, safety and resilient livelihoods throughout our value chain.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <article className="h-full border-t-4 border-primary bg-background p-8">
                  <Icon className="text-primary" size={28} />
                  <h3 className="mt-8 text-2xl">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="space-y-16">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.title}>
                <div
                  id={s.slug}
                  className="grid gap-8 lg:grid-cols-[160px_1fr] items-baseline border-b border-border pb-16 last:border-none"
                >
                  <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl text-balance">{s.title}</h3>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                      {s.body}
                    </p>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      {s.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Transparent progress
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Accountability turns ambition into action.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-primary-foreground/70">
              We review performance annually, update our roadmaps as science evolves and work with
              independent partners to strengthen our data and methods.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-px bg-primary-foreground/20">
            <div className="bg-primary p-6">
              <p className="text-3xl font-black">2030</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-primary-foreground/60">
                Operational net-zero target
              </p>
            </div>
            <div className="bg-primary p-6">
              <p className="text-3xl font-black">2035</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-primary-foreground/60">
                Value-chain ambition
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
