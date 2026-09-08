import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-BdJZt92n.mjs";
import { R as Reveal } from "./Reveal-B_-tUvzj.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AboutPurpose() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Purpose", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Purpose translated into ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-cocoa", children: "everyday" }),
      " decisions"
    ] }), description: "How we choose, build, and deliver — guided by values that stand up to time." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid gap-12 lg:grid-cols-3", children: [{
      n: "01",
      title: "People and culture",
      text: "We invest in inclusive workplaces where expertise travels freely across teams, regions and generations."
    }, {
      n: "02",
      title: "Partners and communities",
      text: "Long-term supplier and customer relationships strengthen local economies and improve resilience."
    }, {
      n: "03",
      title: "Science and quality",
      text: "Food safety, nutrition and consumer insight guide every step from ingredients to delivery."
    }].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-black tracking-widest text-primary", children: x.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-2xl font-black", children: x.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: x.text })
    ] }) }, x.n)) }) })
  ] });
}
export {
  AboutPurpose as component
};
