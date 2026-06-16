import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Leaf, Sparkles, ShieldCheck, FlaskConical, Globe2, Quote } from "lucide-react";
import hero from "@/assets/hero-factory.jpg";
import factory from "@/assets/about-factory.jpg";
import lab from "@/assets/innovation-lab.jpg";
import sustain from "@/assets/sustainability.jpg";
import { CATEGORIES, CATEGORY_IMAGES } from "@/lib/products";
import { Reveal, Counter } from "@/components/site/Reveal";
import { CorporateHome } from "@/components/site/CorporateHome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auréa Foods — Crafting Food Experiences Loved Around The World" },
      {
        name: "description",
        content:
          "Global food manufacturer delivering premium chocolate, snacks, confectionery, healthy foods and pet nutrition to families in 80+ countries.",
      },
      { property: "og:title", content: "Auréa Foods — Crafting Food Experiences" },
      {
        property: "og:description",
        content: "Quality, innovation and trust in every product we make.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return <CorporateHome />;
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-dvh min-h-[640px] overflow-hidden">
      <motion.img
        src={hero}
        alt="Auréa Foods chocolate manufacturing line"
        style={{ scale }}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cocoa/20 via-cocoa/10 to-cocoa/60" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container-x flex h-full flex-col justify-end pb-24 text-cream"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 self-start rounded-full border border-cream/25 bg-cream/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] backdrop-blur-md"
        >
          <Sparkles size={14} /> A global food company
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-6 max-w-5xl text-balance text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95]"
        >
          Crafting food experiences <em className="not-italic text-gold">loved</em> around the
          world.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl text-lg text-cream/80"
        >
          Delivering quality, innovation and trusted food products for families everywhere — in over
          80 countries and counting.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-cocoa transition-all hover:bg-gold hover:shadow-[var(--shadow-elegant)]"
          >
            Explore Products
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream backdrop-blur-md transition-colors hover:bg-cream/10"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-32">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Our story
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Four generations of craft, brought to a global stage.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Auréa Foods began in a single bakery in 1947. Today, our products are made in 32
            facilities across five continents — yet every recipe still passes through hands that
            care about what families eat.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground"
          >
            Read our story <ArrowRight size={14} />
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
            <img
              src={factory}
              alt="Auréa Foods facility"
              loading="lazy"
              className="size-full object-cover aspect-[4/3]"
            />
          </div>
        </Reveal>
      </div>

      <div className="container-x mt-24 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-t border-border pt-16">
        {[
          { v: 80, s: "+", label: "Countries served" },
          { v: 240, s: "+", label: "Premium products" },
          { v: 78, s: "", label: "Years of experience" },
          { v: 1500, s: "+", label: "Global partners" },
        ].map((s) => (
          <Reveal key={s.label}>
            <div className="text-4xl md:text-5xl font-display text-foreground">
              <Counter to={s.v} suffix={s.s} />
            </div>
            <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="py-32 bg-secondary/60">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Our portfolio
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl max-w-2xl text-balance">
              A world of flavours, crafted with the same care.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium">
              View all categories <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat} delay={i * 0.05}>
              <Link
                to="/products"
                className="group relative block overflow-hidden rounded-3xl bg-card aspect-[4/5] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
              >
                <img
                  src={CATEGORY_IMAGES[cat]}
                  alt={cat}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/85 via-cocoa/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
                  <h3 className="text-2xl font-display">{cat}</h3>
                  <div className="mt-2 inline-flex items-center gap-1 text-sm text-cream/80 opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                    Explore range <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    icon: FlaskConical,
    title: "Research & Development",
    body: "Eight innovation labs reimagining the future of food, from ingredient science to packaging.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    body: "Every batch passes 32 quality checkpoints before it ever reaches a shelf.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    body: "Net-zero operations by 2035 across every facility, supplier and shipment.",
  },
  {
    icon: Globe2,
    title: "Food Safety",
    body: "FDA, HACCP, GMP and ISO 22000 certified across our global supply chain.",
  },
];

function Innovation() {
  return (
    <section className="py-32">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
            <img
              src={lab}
              alt="Food scientist at work"
              loading="lazy"
              className="size-full object-cover aspect-[5/4]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Innovation
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Where heritage recipes meet tomorrow's science.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-cocoa text-cream">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section className="relative py-32 overflow-hidden">
      <img
        src={sustain}
        alt="Sustainable sourcing landscape"
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-cocoa/70" />
      <div className="relative container-x text-cream">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-cream/70">Sustainability</span>
          <h2 className="mt-4 text-4xl md:text-5xl max-w-3xl text-balance">
            A better tomorrow is something we have to manufacture.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: 62, s: "%", label: "Waste reduced since 2018" },
            { v: 100, s: "%", label: "Recyclable packaging by 2030" },
            { v: 84, s: "%", label: "Renewable energy across facilities" },
            { v: 48, s: "%", label: "Less water used per ton" },
          ].map((s) => (
            <Reveal key={s.label}>
              <div className="text-5xl md:text-6xl font-display text-gold">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-3 text-sm text-cream/75 max-w-[220px]">{s.label}</div>
              <div className="mt-4 h-1 w-full bg-cream/15 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.v}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gold"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            to="/sustainability"
            className="mt-16 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-gold transition-colors"
          >
            Our 2035 roadmap <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const REGIONS = [
  { name: "North America", offices: 14, plants: 9, dcs: 22, top: "22%", left: "20%" },
  { name: "Europe", offices: 21, plants: 11, dcs: 34, top: "26%", left: "48%" },
  { name: "Asia Pacific", offices: 18, plants: 8, dcs: 27, top: "42%", left: "75%" },
  { name: "Latin America", offices: 9, plants: 3, dcs: 14, top: "62%", left: "30%" },
  { name: "Middle East & Africa", offices: 7, plants: 1, dcs: 11, top: "52%", left: "55%" },
];

function GlobalPresence() {
  return (
    <section className="py-32">
      <div className="container-x">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Global presence
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl max-w-2xl text-balance">
            One company. Every continent.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[16/10] rounded-3xl bg-gradient-to-br from-secondary to-secondary/40 border border-border overflow-hidden">
              <svg
                viewBox="0 0 800 500"
                className="absolute inset-0 size-full opacity-[0.25]"
                aria-hidden
              >
                <defs>
                  <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.4" fill="oklch(0.28 0.06 40)" />
                  </pattern>
                </defs>
                <rect width="800" height="500" fill="url(#dots)" />
              </svg>
              {REGIONS.map((r) => (
                <div
                  key={r.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ top: r.top, left: r.left }}
                >
                  <span className="relative grid h-4 w-4 place-items-center">
                    <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-60" />
                    <span className="relative h-3 w-3 rounded-full bg-cocoa border-2 border-gold" />
                  </span>
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-cocoa text-cream text-xs px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    {r.name}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-2">
              {REGIONS.map((r) => (
                <div
                  key={r.name}
                  className="flex items-baseline justify-between border-b border-border py-4"
                >
                  <div className="font-display text-lg">{r.name}</div>
                  <div className="text-sm text-muted-foreground tabular-nums">
                    {r.offices} offices · {r.plants} plants · {r.dcs} DCs
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const QUOTES = [
  {
    q: "Auréa has been our anchor partner for sixteen years. Their consistency at global scale is unmatched.",
    who: "Ana Ribeiro",
    role: "Procurement Director, Continental Retail",
  },
  {
    q: "From cocoa farm to finished bar — they treat traceability as a craft, not a checkbox.",
    who: "James Okafor",
    role: "Sustainability Lead, Harvest Cooperative",
  },
  {
    q: "The quality bar is extraordinary. We've never had to second-guess a shipment.",
    who: "Mei Tanaka",
    role: "Head of Buying, Mori Group",
  },
];

function Testimonials() {
  return (
    <section className="py-32 bg-secondary/60">
      <div className="container-x">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Partners</span>
          <h2 className="mt-4 text-4xl md:text-5xl max-w-2xl text-balance">
            Trusted by the world's most discerning brands.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {QUOTES.map((t, i) => (
            <Reveal key={t.who} delay={i * 0.08}>
              <figure className="h-full rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-soft)]">
                <Quote className="text-gold" size={28} />
                <blockquote className="mt-6 text-lg leading-relaxed font-display">{t.q}</blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <div className="font-medium">{t.who}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const POSTS = [
  {
    tag: "Innovation",
    title: "Reimagining cocoa: how fermentation science is shaping the next decade of chocolate.",
    date: "May 2026",
  },
  {
    tag: "Sustainability",
    title: "Auréa joins the regenerative agriculture coalition with 40,000 partner farmers.",
    date: "April 2026",
  },
  {
    tag: "Company",
    title: "Opening our 33rd manufacturing facility in Da Nang, Vietnam.",
    date: "March 2026",
  },
];

function LatestNews() {
  return (
    <section className="py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Newsroom
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl text-balance">Latest from Auréa.</h2>
          </Reveal>
          <Reveal>
            <Link to="/news" className="inline-flex items-center gap-2 text-sm font-medium">
              All stories <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="group h-full rounded-3xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={[lab, sustain, factory][i]}
                    alt={p.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                    <span className="rounded-full bg-secondary px-3 py-1">{p.tag}</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl text-balance">{p.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-cocoa text-cream px-8 md:px-16 py-20 md:py-28">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
            <div className="relative max-w-3xl">
              <h2 className="text-4xl md:text-6xl text-balance">
                Let's build the next great food brand together.
              </h2>
              <p className="mt-6 text-cream/75 max-w-xl text-lg">
                Whether you're a retailer, a distributor or an ingredient partner, we'd love to talk
                about what we can create.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-cocoa hover:bg-cream transition-colors"
              >
                Start a conversation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
