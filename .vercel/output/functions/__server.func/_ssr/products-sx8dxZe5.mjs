import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-BdJZt92n.mjs";
import { B as BRANDS, C as CATEGORIES, c as cn, a as CATEGORY_IMAGES } from "./router-VcT1RhEw.mjs";
import { S as Search } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
function Products() {
  const [active, setActive] = reactExports.useState("All");
  const [q, setQ] = reactExports.useState("");
  const routerState = useRouterState();
  const isChildRouteActive = routerState.matches.some((match) => match.routeId && (match.routeId.includes("brand") || match.routeId.includes("category")));
  const filtered = reactExports.useMemo(() => {
    return BRANDS.filter((b) => (active === "All" || b.category === active) && (q === "" || b.name.toLowerCase().includes(q.toLowerCase())));
  }, [active, q]);
  if (isChildRouteActive) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our brands", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Brands made for ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-cocoa", children: "everyday life" }),
      "."
    ] }), description: "Discover our brand families across food, confectionery and pet nutrition — each held to the same uncompromising standard." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-6 sticky top-20 z-30 bg-background/85 backdrop-blur-xl border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (event) => event.preventDefault(), className: "flex flex-1 min-w-[220px] max-w-md items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search brands...", className: "w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-cocoa" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "rounded-full bg-cocoa px-4 py-3 text-sm font-semibold text-cream transition hover:bg-cocoa/90", children: "Search" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["All", ...CATEGORIES].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(c), className: cn("rounded-full px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 border transition-colors", active === c ? "bg-cocoa text-cream border-cocoa" : "bg-card text-foreground border-border hover:border-cocoa/40"), children: c }, c)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "grid gap-4 grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 auto-rows-fr justify-items-center", children: filtered.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0
      }, transition: {
        duration: 0.25,
        delay: i % 10 * 0.02
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products/brand/$slug", params: {
        slug: b.slug
      }, className: "group block w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow h-full flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.image || CATEGORY_IMAGES[b.category], alt: b.name, loading: "lazy", className: "size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex-grow flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: b.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-semibold text-sm", children: b.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] text-accent font-semibold", children: b.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px] text-muted-foreground leading-relaxed flex-grow line-clamp-4", children: b.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-primary group-hover:gap-2 transition-all", children: "Explore brand →" })
        ] })
      ] }) }, b.slug)) }) }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg", children: [
        'No brands found matching "',
        q,
        '"'
      ] }) })
    ] }) })
  ] });
}
export {
  Products as component
};
