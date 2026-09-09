import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-BdJZt92n.mjs";
import { R as Reveal } from "./Reveal-B_-tUvzj.mjs";
import { e as Heart, E as Earth, f as Sparkles, g as Briefcase, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const BENEFITS = [{
  icon: Heart,
  title: "Health & wellbeing",
  body: "Comprehensive medical, dental, mental-health and family support."
}, {
  icon: Earth,
  title: "Global mobility",
  body: "Work across our 80+ markets through internal exchange programs."
}, {
  icon: Sparkles,
  title: "Learning fund",
  body: "Annual stipend for courses, conferences and continued education."
}, {
  icon: Briefcase,
  title: "Equity & bonus",
  body: "Long-term incentive program for every full-time team member."
}];
const JOBS = [{
  title: "Senior Food Scientist",
  team: "R&D",
  location: "Lyon, France"
}, {
  title: "Plant Operations Manager",
  team: "Manufacturing",
  location: "Da Nang, Vietnam"
}, {
  title: "Brand Director, Confectionery",
  team: "Marketing",
  location: "London, UK"
}, {
  title: "Sustainability Program Lead",
  team: "Sustainability",
  location: "São Paulo, Brazil"
}, {
  title: "Supply Chain Analyst",
  team: "Supply Chain",
  location: "Chicago, USA"
}, {
  title: "Quality Engineer",
  team: "Quality",
  location: "Hamburg, Germany"
}];
function Careers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Careers", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Build a career that ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-cocoa", children: "feeds the world" }),
      "."
    ] }), description: "18,000 people. 80+ countries. One shared belief: that what we make matters." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Our culture" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl md:text-5xl text-balance", children: "A company you'd be proud to tell your family about." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "We hire people who care — about the craft, about each other, about the long arc of doing things right. The work is real, the standards are high, and the impact is measured in millions of moments shared across kitchens, lunchboxes and celebrations around the world." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: BENEFITS.map(({
        icon: Icon,
        title,
        body
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-7 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center rounded-full bg-cocoa text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: body })
      ] }) }, title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-secondary/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl", children: "Open positions" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 divide-y divide-border border-y border-border", children: JOBS.map((j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_auto] sm:grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center py-6 group hover:bg-background/60 transition-colors px-4 -mx-4 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: j.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block text-sm text-muted-foreground", children: j.team }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block text-sm text-muted-foreground", children: j.location }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#apply", className: "inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all", children: [
          "Apply ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] }, j.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "apply", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl", children: "General application" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Don't see the right role? Tell us about you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mt-10 grid gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", className: "input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Role of interest", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tell us about yourself", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "input min-h-32" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 inline-flex items-center gap-2 self-start rounded-full bg-cocoa text-cream px-7 py-3.5 text-sm font-medium hover:bg-cocoa/90", children: [
          "Submit application ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.input{width:100%;border-radius:0.875rem;border:1px solid var(--border);background:var(--card);padding:0.875rem 1rem;font-size:0.9rem;outline:none;transition:border-color .2s}.input:focus{border-color:var(--cocoa)}` })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: label }),
    children
  ] });
}
export {
  Careers as component
};
