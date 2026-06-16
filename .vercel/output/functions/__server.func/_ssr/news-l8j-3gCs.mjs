import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-BdJZt92n.mjs";
import { R as Reveal } from "./Reveal-B_-tUvzj.mjs";
import { l as lab } from "./innovation-lab-DI00cNGd.mjs";
import { s as sustain, b as chocolate, c as cn } from "./router-B6llwF8O.mjs";
import { f as factory } from "./about-factory-DifoDJ7W.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
import "../_libs/lucide-react.mjs";
const CATEGORIES = ["All", "Company News", "Industry News", "Sustainability", "Product Updates"];
const POSTS = [{
  tag: "Sustainability",
  title: "Auréa joins regenerative agriculture coalition with 40,000 farmers.",
  date: "April 12, 2026",
  img: sustain
}, {
  tag: "Company News",
  title: "Opening our 33rd manufacturing facility in Da Nang, Vietnam.",
  date: "March 28, 2026",
  img: factory
}, {
  tag: "Product Updates",
  title: "Introducing single-origin cocoa to our premium chocolate line.",
  date: "March 04, 2026",
  img: chocolate
}, {
  tag: "Industry News",
  title: "Reimagining cocoa: how fermentation science is reshaping the industry.",
  date: "February 21, 2026",
  img: lab
}, {
  tag: "Sustainability",
  title: "Our packaging team eliminated 1,200 tons of plastic in 2025.",
  date: "January 30, 2026",
  img: sustain
}, {
  tag: "Company News",
  title: "Auréa Foods named to TIME's Most Sustainable Companies list.",
  date: "January 15, 2026",
  img: factory
}];
function News() {
  const [active, setActive] = reactExports.useState("All");
  const filtered = active === "All" ? POSTS : POSTS.filter((p) => p.tag === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Newsroom", title: "Stories from across the company.", description: "Company news, industry insights and updates from our manufacturing, innovation and sustainability teams." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 border-y border-border bg-background/85 backdrop-blur-xl sticky top-20 z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x flex flex-wrap gap-2", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(c), className: cn("rounded-full px-4 py-2 text-sm border transition-colors", active === c ? "bg-cocoa text-cream border-cocoa" : "bg-card border-border hover:border-cocoa/40"), children: c }, c)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 6 * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group h-full rounded-3xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[5/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-3 py-1", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl text-balance", children: p.title })
      ] })
    ] }) }, p.title)) }) })
  ] });
}
export {
  News as component
};
