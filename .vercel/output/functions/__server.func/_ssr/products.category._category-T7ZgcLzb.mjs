import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-BdJZt92n.mjs";
import { h as Route$1, a as CATEGORY_IMAGES, P as PRODUCT_IMAGES } from "./router-B6llwF8O.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function CategoryPage() {
  const {
    category,
    brands,
    items
  } = Route$1.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our brands", title: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: category }), description: `Explore our ${category} brands and product range.` }),
    brands.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl mb-12", children: "Featured Brands" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 auto-rows-fr justify-items-center", children: brands.map((brand, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0
      }, transition: {
        duration: 0.25,
        delay: i % 10 * 0.015
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/products/brand/${brand.slug}`, className: "group block w-full rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: brand.image || CATEGORY_IMAGES[brand.category], alt: brand.name, loading: "lazy", className: "size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1", children: brand.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold", children: brand.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] font-semibold text-accent", children: brand.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px] text-muted-foreground leading-relaxed line-clamp-3", children: brand.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-2 inline-flex items-center gap-1 text-[11px] font-semibold", children: [
            "Explore brand ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
          ] })
        ] })
      ] }) }, brand.slug)) }) })
    ] }) }),
    items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl mb-6", children: [
        "All ",
        category,
        " Products"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-12", children: [
        items.length,
        " products available"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 auto-rows-fr justify-items-center", children: items.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0
      }, transition: {
        duration: 0.25,
        delay: i % 10 * 0.015
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$slug", params: {
        slug: p.slug
      }, className: "group block w-full rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: PRODUCT_IMAGES[p.slug] || CATEGORY_IMAGES[p.category], alt: p.name, loading: "lazy", className: "size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: p.brand || p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-semibold text-sm", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px] text-muted-foreground leading-relaxed line-clamp-2", children: p.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-[11px] font-semibold", children: [
            "View ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
          ] })
        ] })
      ] }) }, p.slug)) }) })
    ] }) })
  ] });
}
export {
  CategoryPage as component
};
