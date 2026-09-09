import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-BdJZt92n.mjs";
import { R as Reveal } from "./Reveal-B_-tUvzj.mjs";
import { f as factory } from "./about-factory-DifoDJ7W.mjs";
import { E as Earth, U as Users, h as Factory, i as FlaskConical, e as Heart, j as ShieldCheck, k as Leaf, l as Award } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const TIMELINE = [{
  year: "1947",
  text: "Founded as a single bakery in Lyon, France."
}, {
  year: "1962",
  text: "First chocolate manufacturing facility opens."
}, {
  year: "1984",
  text: "Global expansion begins across Europe and North America."
}, {
  year: "2001",
  text: "Acquires its first pet nutrition brand."
}, {
  year: "2015",
  text: "Renewable energy program reaches 50% of operations."
}, {
  year: "2026",
  text: "32 facilities, 80+ countries, one mission."
}];
const VALUES = [{
  icon: Heart,
  title: "Quality is care",
  body: "We make food the way we'd want it made for our families."
}, {
  icon: ShieldCheck,
  title: "Trust is earned daily",
  body: "Every batch, every shipment, every claim — verified."
}, {
  icon: Leaf,
  title: "Tomorrow matters",
  body: "We measure success in generations, not quarters."
}, {
  icon: Award,
  title: "Craft scales",
  body: "Industrial precision in service of artisan-level quality."
}];
const LEADERS = [{
  name: "Élise Marchand",
  role: "Chief Executive Officer"
}, {
  name: "Rajiv Krishnan",
  role: "Chief Operating Officer"
}, {
  name: "Sofia Alvarez",
  role: "Chief Sustainability Officer"
}, {
  name: "Daniel Hoffmann",
  role: "Chief Innovation Officer"
}];
const CERTS = ["ISO 22000", "HACCP", "FDA Approved", "GMP Certified", "B Corp", "Rainforest Alliance"];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "About us", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "A food company built on ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-cocoa", children: "care" }),
      "."
    ] }), description: "Auréa Foods is a global manufacturer of premium chocolate, snacks, confectionery, healthy foods and pet nutrition — present in over 80 countries and made by 18,000 people who care deeply about what they do." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "global-presence", className: "border-b border-border bg-primary py-12 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4", children: [{
      icon: Earth,
      value: "80+",
      label: "markets served"
    }, {
      icon: Users,
      value: "18,000",
      label: "people worldwide"
    }, {
      icon: Factory,
      value: "32",
      label: "manufacturing sites"
    }, {
      icon: FlaskConical,
      value: "8",
      label: "innovation labs"
    }].map(({
      icon: Icon,
      value,
      label
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 border-l border-primary-foreground/25 pl-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary-foreground/65", children: label })
      ] })
    ] }, label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "story", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl", children: "Our journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "From a single bakery to a global presence — every chapter built on the last, every decade adding a craft we hadn't mastered before." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-l-2 border-border pl-10 space-y-12", children: TIMELINE.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[3.05rem] top-1.5 h-4 w-4 rounded-full bg-cocoa border-4 border-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-gold", children: t.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-foreground/80 max-w-md", children: t.text })
      ] }) }, t.year)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "purpose", className: "py-24 bg-secondary/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-16 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-3xl md:text-4xl text-balance", children: "To craft food that makes everyday moments a little more remarkable." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Vision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-3xl md:text-4xl text-balance", children: "The world's most trusted food company — for families, partners and the planet." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: VALUES.map(({
        icon: Icon,
        title,
        body
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-7 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center rounded-full bg-cocoa text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-5 font-display text-xl", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: body })
      ] }) }, title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-[0.25em] text-primary", children: "How we create value" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 max-w-3xl text-4xl md:text-6xl", children: "Purpose translated into everyday decisions." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-px bg-border lg:grid-cols-3", children: [{
        n: "01",
        title: "People and culture",
        text: "We invest in safe, inclusive workplaces where expertise travels freely across teams, regions and generations."
      }, {
        n: "02",
        title: "Partners and communities",
        text: "Long-term supplier and customer relationships help strengthen local economies and improve resilience across our value chain."
      }, {
        n: "03",
        title: "Science and quality",
        text: "Food safety, nutrition and consumer insight guide every decision from ingredient selection to final delivery."
      }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "h-full bg-background p-8 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black tracking-widest text-primary", children: item.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-2xl", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: item.text })
      ] }) }, item.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "leadership", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl max-w-2xl text-balance", children: "Leadership team" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid w-full grid-cols-2 gap-5 lg:grid-cols-4 auto-rows-fr", children: LEADERS.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border overflow-hidden bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[5/6] bg-gradient-to-br from-secondary to-secondary/50 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-cocoa/30", children: l.name.split(" ").map((w) => w[0]).join("") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: l.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: l.role })
        ] })
      ] }) }, l.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-secondary/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: factory, alt: "Manufacturing facility", loading: "lazy", className: "rounded-3xl shadow-[var(--shadow-elegant)] aspect-[4/3] object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Manufacturing excellence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl md:text-5xl text-balance", children: "Industrial precision, artisan-level care." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "Our 32 facilities are designed around a single principle: that quality cannot be inspected in — it has to be built in. From ingredient handling to final pack, we engineer for consistency first and speed second." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: CERTS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-wider", children: c }, c)) })
      ] })
    ] }) })
  ] });
}
export {
  About as component
};
