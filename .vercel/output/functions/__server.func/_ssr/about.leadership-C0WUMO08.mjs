import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-BdJZt92n.mjs";
import { R as Reveal } from "./Reveal-B_-tUvzj.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AboutLeadership() {
  const leaders = [{
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Leadership", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Leading with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-cocoa", children: "care" }),
      " and science"
    ] }), description: "A team built around craft, accountability, and continuous improvement." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-black", children: "Leadership team" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-6 auto-rows-fr", children: leaders.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border overflow-hidden bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] bg-gradient-to-br from-secondary to-secondary/50 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl font-display text-cocoa/30", children: l.name.split(" ").map((w) => w[0]).join("") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: l.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: l.role })
        ] })
      ] }) }, l.name)) })
    ] }) })
  ] });
}
export {
  AboutLeadership as component
};
