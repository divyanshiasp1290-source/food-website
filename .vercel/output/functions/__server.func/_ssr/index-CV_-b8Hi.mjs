import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { f as factory } from "./about-factory-DifoDJ7W.mjs";
import { l as lab } from "./innovation-lab-DI00cNGd.mjs";
import { d as Button, C as CATEGORIES, a as CATEGORY_IMAGES, s as sustain } from "./router-VcT1RhEw.mjs";
import { R as Reveal, C as Counter } from "./Reveal-B_-tUvzj.mjs";
import { a as useScroll, b as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, m as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const hero = "/assets/hero-factory-D9B46hRi.jpg";
const IMPACT = [
  {
    value: 80,
    suffix: "+",
    title: "Markets served",
    text: "Trusted products, adapted for communities across six continents."
  },
  {
    value: 32,
    suffix: "",
    title: "Manufacturing sites",
    text: "A resilient global network built around quality and food safety."
  },
  {
    value: 84,
    suffix: "%",
    title: "Renewable energy",
    text: "Across our owned production facilities and innovation campuses."
  },
  {
    value: 1500,
    suffix: "+",
    title: "Supply partners",
    text: "Long-term relationships supporting responsible, traceable sourcing."
  }
];
function CorporateHome() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CorporateHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StoryBand, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InnovationBand, {})
  ] });
}
function CorporateHero() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.13]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      className: "relative min-h-[670px] h-[calc(100svh-8.5rem)] overflow-hidden bg-primary",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
            src: hero,
            alt: "Auréa Foods advanced manufacturing facility",
            style: { y: imageY, scale: imageScale },
            className: "absolute inset-0 size-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary via-primary/65 to-primary/5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative z-10 grid h-full grid-cols-12 items-center pt-10 text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 34 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              className: "col-span-12 lg:col-span-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7 flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.24em]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary-foreground px-4 py-2 text-primary", children: "Pillar: Progress" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-primary-foreground/50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground/80", children: "Manufacturing transformation" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-5xl text-balance text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl xl:text-[6rem]", children: "Making tomorrow’s food better, together." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 max-w-2xl text-lg font-medium leading-relaxed text-primary-foreground/85 md:text-xl", children: "We unite food science, responsible sourcing and world-class manufacturing to create products people trust in every market we serve." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      size: "lg",
                      className: "h-14 rounded-none bg-primary-foreground px-8 text-xs font-extrabold uppercase tracking-[0.14em] text-primary hover:bg-accent hover:text-accent-foreground",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", children: [
                        "Discover our story ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      variant: "outline",
                      size: "lg",
                      className: "h-14 rounded-none border-primary-foreground/50 bg-transparent px-8 text-xs font-extrabold uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sustainability", children: "View commitments" })
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "col-span-4 hidden justify-end xl:flex", delay: 0.4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-72 border border-primary-foreground/20 bg-primary-foreground/10 p-7 backdrop-blur-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground/60", children: "Latest metric" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-5xl font-black", children: "84%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-primary-foreground/75", children: "Renewable energy powering our global manufacturing network." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-1 bg-primary-foreground/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: 0 },
                animate: { width: "84%" },
                transition: { duration: 1.4, delay: 0.8 },
                className: "h-full bg-accent"
              }
            ) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/sustainability",
            className: "absolute bottom-8 right-6 z-10 hidden items-center gap-4 text-primary-foreground hover:text-primary-foreground transition-colors md:flex lg:right-12",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold uppercase tracking-[0.2em] text-primary-foreground/50", children: "Next chapter" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: "Regenerative ingredients" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-12 place-items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur group-hover:bg-primary-foreground/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 }) })
            ]
          }
        )
      ]
    }
  );
}
function ImpactStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-background py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid gap-10 md:grid-cols-2 xl:grid-cols-4", children: IMPACT.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-primary/20 pl-5 transition-colors hover:border-primary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black tracking-tight text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: item.value, suffix: item.suffix }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 text-xs font-extrabold uppercase tracking-[0.14em]", children: item.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs leading-relaxed text-muted-foreground", children: item.text })
  ] }) }, item.title)) }) });
}
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.3em] text-primary", children: "Curated excellence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-primary md:text-4xl", children: "Our brands" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground", children: "From treasured confectionery to advanced pet nutrition, our brand portfolio balances craft, science and everyday joy." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          variant: "link",
          className: "w-fit px-0 text-xs font-black uppercase tracking-[0.14em] text-primary",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", children: [
            "Explore all brands ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: CATEGORIES.map((category, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/products/category/$slug",
        params: { slug: category.toLowerCase().replace(/\s+/g, "-") },
        className: "group relative block aspect-[5/4] overflow-hidden bg-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: CATEGORY_IMAGES[category],
              alt: `${category} products`,
              loading: "lazy",
              className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/5 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-primary-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold uppercase tracking-[0.2em] text-primary-foreground/60", children: "Auréa brands" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-extrabold", children: category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-10 place-items-center border border-primary-foreground/35 transition-colors group-hover:bg-primary-foreground group-hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 18 }) })
          ] })
        ]
      }
    ) }, category)) })
  ] }) });
}
function StoryBand() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[520px] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: factory,
        alt: "Auréa Foods associates at a production facility",
        loading: "lazy",
        className: "size-full object-cover transition-transform duration-[1.5s] hover:scale-[1.03]"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center bg-primary p-10 text-primary-foreground md:p-16 xl:p-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.3em] text-accent", children: "Who we are" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-4xl font-black leading-[0.98] tracking-[-0.04em] md:text-6xl", children: "Built on quality. Driven by possibility." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/75", children: "Since 1947, we have grown by protecting what matters: uncompromising standards, long-term partnerships and the curiosity to keep improving." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          className: "mt-9 h-13 rounded-none bg-primary-foreground px-7 text-xs font-black uppercase tracking-[0.14em] text-primary hover:bg-accent",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", children: [
            "Meet Auréa Foods ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
          ] })
        }
      )
    ] }) })
  ] });
}
function InnovationBand() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-background py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-14 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.3em] text-primary", children: "Science at scale" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl", children: "Innovation that earns trust." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground", children: "Our teams combine nutrition, packaging and manufacturing expertise to solve complex challenges without compromising taste or quality." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            variant: "link",
            className: "mt-5 px-0 text-xs font-black uppercase tracking-[0.14em] text-primary",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/news", children: [
              "See what’s next ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: lab,
            alt: "Auréa food science laboratory",
            loading: "lazy",
            className: "aspect-[4/3] w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-7 left-6 bg-accent p-6 text-accent-foreground md:left-[-2rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black", children: "8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-extrabold uppercase tracking-[0.15em]", children: "Global innovation labs" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sustainability", className: "group relative block min-h-[430px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: sustain,
          alt: "Regenerative agriculture landscape",
          loading: "lazy",
          className: "absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl p-10 text-primary-foreground md:p-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.3em] text-accent", children: "Sustainable in a generation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-4xl font-black leading-tight md:text-6xl", children: "A resilient future starts at the source." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-primary-foreground/75", children: "Working across our value chain to protect nature, improve livelihoods and reach net zero." })
      ] })
    ] }) })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CorporateHome, {});
}
export {
  Home as component
};
