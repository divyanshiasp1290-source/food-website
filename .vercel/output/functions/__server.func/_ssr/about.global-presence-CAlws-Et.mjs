import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-BdJZt92n.mjs";
import { R as Reveal } from "./Reveal-B_-tUvzj.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AboutGlobalPresence() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Global presence", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "One company. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-cocoa", children: "Every continent" }),
      "."
    ] }), description: "Manufacturing and distribution in 80+ markets — supported by a single quality system." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-black", children: "Built for consistency at scale" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "We coordinate across facilities, innovation labs and quality teams to ensure every product matches the Auréa standard." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2", children: [{
          k: "80+",
          v: "markets served"
        }, {
          k: "32",
          v: "manufacturing sites"
        }, {
          k: "8",
          v: "innovation labs"
        }, {
          k: "18,000",
          v: "people worldwide"
        }].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-secondary/50 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-black text-foreground", children: x.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: x.v })
        ] }, x.v)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-black uppercase tracking-widest text-primary", children: "How we work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Central quality system + local accountability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Innovation labs aligned to market needs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Continuous improvement across the value chain" })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  AboutGlobalPresence as component
};
