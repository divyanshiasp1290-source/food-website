import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useRef } from "react";
import hero from "@/assets/hero-factory.jpg";
import factory from "@/assets/about-factory.jpg";
import lab from "@/assets/innovation-lab.jpg";
import sustain from "@/assets/sustainability.jpg";
import { CATEGORIES, CATEGORY_IMAGES } from "@/lib/products";
import { Counter, Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

const IMPACT = [
  {
    value: 80,
    suffix: "+",
    title: "Markets served",
    text: "Trusted products, adapted for communities across six continents.",
  },
  {
    value: 32,
    suffix: "",
    title: "Manufacturing sites",
    text: "A resilient global network built around quality and food safety.",
  },
  {
    value: 84,
    suffix: "%",
    title: "Renewable energy",
    text: "Across our owned production facilities and innovation campuses.",
  },
  {
    value: 1500,
    suffix: "+",
    title: "Supply partners",
    text: "Long-term relationships supporting responsible, traceable sourcing.",
  },
];

export function CorporateHome() {
  return (
    <>
      <CorporateHero />
      <ImpactStrip />
      <Portfolio />
      <StoryBand />
      <InnovationBand />
    </>
  );
}

function CorporateHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.13]);

  return (
    <section
      ref={ref}
      className="relative min-h-[670px] h-[calc(100svh-8.5rem)] overflow-hidden bg-primary"
    >
      <motion.img
        src={hero}
        alt="Auréa Foods advanced manufacturing facility"
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/65 to-primary/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />

      <div className="container-x relative z-10 grid h-full grid-cols-12 items-center pt-10 text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 lg:col-span-8"
        >
          <div className="mb-7 flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.24em]">
            <span className="bg-primary-foreground px-4 py-2 text-primary">Pillar: Progress</span>
            <span className="h-px w-10 bg-primary-foreground/50" />
            <span className="text-primary-foreground/80">Manufacturing transformation</span>
          </div>
          <h1 className="max-w-5xl text-balance text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl xl:text-[6rem]">
            Making tomorrow’s food better, together.
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-primary-foreground/85 md:text-xl">
            We unite food science, responsible sourcing and world-class manufacturing to create
            products people trust in every market we serve.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-none bg-primary-foreground px-8 text-xs font-extrabold uppercase tracking-[0.14em] text-primary hover:bg-accent hover:text-accent-foreground"
            >
              <Link to="/about">
                Discover our story <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-none border-primary-foreground/50 bg-transparent px-8 text-xs font-extrabold uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/sustainability">View commitments</Link>
            </Button>
          </div>
        </motion.div>

        <Reveal className="col-span-4 hidden justify-end xl:flex" delay={0.4}>
          <div className="w-72 border border-primary-foreground/20 bg-primary-foreground/10 p-7 backdrop-blur-xl">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground/60">
              Latest metric
            </p>
            <p className="mt-4 text-5xl font-black">84%</p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
              Renewable energy powering our global manufacturing network.
            </p>
            <div className="mt-6 h-1 bg-primary-foreground/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "84%" }}
                transition={{ duration: 1.4, delay: 0.8 }}
                className="h-full bg-accent"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <Link
        to="/sustainability"
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-4 text-primary-foreground hover:text-primary-foreground transition-colors md:flex lg:right-12"
      >
        <div className="text-right">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-foreground/50">
            Next chapter
          </p>
          <p className="text-sm font-bold">Regenerative ingredients</p>
        </div>
        <span className="grid size-12 place-items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur group-hover:bg-primary-foreground/20 transition-colors">
          <ArrowRight size={18} />
        </span>
      </Link>
    </section>
  );
}

function ImpactStrip() {
  return (
    <section className="border-b border-border bg-background py-14">
      <div className="container-x grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        {IMPACT.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <div className="border-l-4 border-primary/20 pl-5 transition-colors hover:border-primary">
              <p className="text-4xl font-black tracking-tight text-primary">
                <Counter to={item.value} suffix={item.suffix} />
              </p>
              <h2 className="mt-1 text-xs font-extrabold uppercase tracking-[0.14em]">
                {item.title}
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="container-x">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              Curated excellence
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-primary md:text-4xl">
              Our brands
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              From treasured confectionery to advanced pet nutrition, our brand portfolio balances
              craft, science and everyday joy.
            </p>
          </Reveal>
          <Button
            asChild
            variant="link"
            className="w-fit px-0 text-xs font-black uppercase tracking-[0.14em] text-primary"
          >
            <Link to="/products">
              Explore all brands <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category, index) => (
            <Reveal key={category} delay={index * 0.05}>
              <Link
                to="/products/category/$slug"
                params={{ slug: category.toLowerCase().replace(/\s+/g, "-") }}
                className="group relative block aspect-[5/4] overflow-hidden bg-card"
              >
                <img
                  src={CATEGORY_IMAGES[category]}
                  alt={`${category} products`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-primary-foreground">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-foreground/60">
                      Auréa brands
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold">{category}</h3>
                  </div>
                  <span className="grid size-10 place-items-center border border-primary-foreground/35 transition-colors group-hover:bg-primary-foreground group-hover:text-primary">
                    <ChevronRight size={18} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryBand() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="min-h-[520px] overflow-hidden">
        <img
          src={factory}
          alt="Auréa Foods associates at a production facility"
          loading="lazy"
          className="size-full object-cover transition-transform duration-[1.5s] hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-center bg-primary p-10 text-primary-foreground md:p-16 xl:p-24">
        <Reveal>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
            Who we are
          </p>
          <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.04em] md:text-6xl">
            Built on quality. Driven by possibility.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
            Since 1947, we have grown by protecting what matters: uncompromising standards,
            long-term partnerships and the curiosity to keep improving.
          </p>
          <Button
            asChild
            className="mt-9 h-13 rounded-none bg-primary-foreground px-7 text-xs font-black uppercase tracking-[0.14em] text-primary hover:bg-accent"
          >
            <Link to="/about">
              Meet Auréa Foods <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function InnovationBand() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            Science at scale
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
            Innovation that earns trust.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Our teams combine nutrition, packaging and manufacturing expertise to solve complex
            challenges without compromising taste or quality.
          </p>
          <Button
            asChild
            variant="link"
            className="mt-5 px-0 text-xs font-black uppercase tracking-[0.14em] text-primary"
          >
            <Link to="/news">
              See what’s next <ArrowRight />
            </Link>
          </Button>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative">
            <img
              src={lab}
              alt="Auréa food science laboratory"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute -bottom-7 left-6 bg-accent p-6 text-accent-foreground md:left-[-2rem]">
              <p className="text-4xl font-black">8</p>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.15em]">
                Global innovation labs
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="container-x mt-28">
        <Link to="/sustainability" className="group relative block min-h-[430px] overflow-hidden">
          <img
            src={sustain}
            alt="Regenerative agriculture landscape"
            loading="lazy"
            className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/10" />
          <div className="relative max-w-2xl p-10 text-primary-foreground md:p-16">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
              Sustainable in a generation
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              A resilient future starts at the source.
            </h2>
            <p className="mt-5 text-primary-foreground/75">
              Working across our value chain to protect nature, improve livelihoods and reach net
              zero.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
