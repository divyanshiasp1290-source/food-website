import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-BdJZt92n.mjs";
import { R as Reveal, C as Counter } from "./Reveal-B_-tUvzj.mjs";
import { s as sustain } from "./router-B6llwF8O.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { a as Sprout, D as Droplets, P as PackageCheck, U as Users } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const SECTIONS = [{
  slug: "climate-action",
  title: "Climate action",
  body: "We are redesigning energy, logistics and manufacturing systems to reach net-zero scope 1 and 2 emissions by 2030 and address our full value chain by 2035.",
  detail: "Our transition plans prioritize efficiency first, renewable electricity second and high-quality removals only for residual emissions."
}, {
  slug: "responsible-sourcing",
  title: "Responsible sourcing",
  body: "Our cocoa, palm, dairy, grains and proteins are moving toward fully traceable supply chains through direct, long-term partnerships.",
  detail: "We combine farm mapping, third-party standards and supplier development to protect ecosystems and strengthen producer livelihoods."
}, {
  slug: "circular-packaging",
  title: "Circular packaging",
  body: "We are reducing virgin material, removing unnecessary formats and designing every pack for reuse, recycling or composting.",
  detail: "Design teams work with recyclers and local systems so packaging improvements perform in the real world, not only in the laboratory."
}, {
  slug: "community-impact",
  title: "Community impact",
  body: "Education, healthcare, safety and livelihood programs support the people and places connected to our operations.",
  detail: "Programs are built with local partners and measured against clear outcomes, with a focus on women, young people and smallholder producers."
}];
function Sustain() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Sustainability", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Food, made ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-cocoa", children: "responsibly" }),
      "."
    ] }), description: "We measure success in generations. Our 2035 roadmap commits Auréa to a regenerative food system across every product, partner and place we operate." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [{
      v: 62,
      s: "%",
      label: "Waste reduced since 2018"
    }, {
      v: 100,
      s: "%",
      label: "Recyclable packaging by 2030"
    }, {
      v: 84,
      s: "%",
      label: "Renewable energy"
    }, {
      v: 48,
      s: "%",
      label: "Less water per ton"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card border border-border p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-display text-cocoa", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.v, suffix: s.s }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm text-muted-foreground", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-1.5 w-full bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        width: 0
      }, whileInView: {
        width: `${s.v}%`
      }, viewport: {
        once: true
      }, transition: {
        duration: 1.5,
        ease: "easeOut"
      }, className: "h-full bg-gold" }) })
    ] }) }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-32 my-16 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sustain, alt: "Sustainable landscape", loading: "lazy", className: "absolute inset-0 size-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cocoa/65" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container-x text-cream max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl text-balance", children: `"We don't inherit the earth from our ancestors — we borrow it from our children."` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-cream/70", children: "— Our sustainability charter" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-[0.25em] text-primary", children: "Our action areas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 max-w-3xl text-4xl md:text-6xl", children: "Four connected priorities. One measurable plan." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4", children: [{
        icon: Sprout,
        title: "Healthy planet",
        text: "Cutting emissions, protecting forests and restoring soil and biodiversity."
      }, {
        icon: Droplets,
        title: "Water stewardship",
        text: "Reducing demand and supporting watershed resilience in high-risk regions."
      }, {
        icon: PackageCheck,
        title: "Circular design",
        text: "Building lower-impact packaging and reducing waste across operations."
      }, {
        icon: Users,
        title: "Thriving people",
        text: "Advancing opportunity, safety and resilient livelihoods throughout our value chain."
      }].map(({
        icon: Icon,
        title,
        text
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "h-full border-t-4 border-primary bg-background p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-primary", size: 28 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-2xl", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: text })
      ] }) }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16", children: SECTIONS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: s.slug, className: "grid gap-8 lg:grid-cols-[160px_1fr] items-baseline border-b border-border pb-16 last:border-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground", children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl text-balance", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: s.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground", children: s.detail })
      ] })
    ] }) }, s.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-[0.25em] text-accent", children: "Transparent progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl md:text-5xl", children: "Accountability turns ambition into action." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl leading-relaxed text-primary-foreground/70", children: "We review performance annually, update our roadmaps as science evolves and work with independent partners to strengthen our data and methods." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-px bg-primary-foreground/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black", children: "2030" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-wider text-primary-foreground/60", children: "Operational net-zero target" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black", children: "2035" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-wider text-primary-foreground/60", children: "Value-chain ambition" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Sustain as component
};
