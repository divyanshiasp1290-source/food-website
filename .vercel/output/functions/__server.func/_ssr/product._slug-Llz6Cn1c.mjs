import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$b, P as PRODUCT_IMAGES, a as CATEGORY_IMAGES, e as PRODUCT_GALLERY_IMAGES } from "./router-VcT1RhEw.mjs";
import { R as Reveal } from "./Reveal-B_-tUvzj.mjs";
import { n as ArrowLeft, o as Check, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ProductDetail() {
  const {
    product,
    brand,
    related
  } = Route$b.useLoaderData();
  const image = PRODUCT_IMAGES[product.slug] || CATEGORY_IMAGES[product.category];
  const gallery = PRODUCT_GALLERY_IMAGES[product.slug] || [image, image, image, image];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
      " All brands"
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[520px] rounded-3xl overflow-hidden bg-secondary aspect-[4/5] shadow-[var(--shadow-elegant)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: product.name, className: "size-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-4 gap-2", children: gallery.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden rounded-xl bg-secondary border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `${product.name} gallery image ${i + 1}`, className: "size-full object-cover opacity-80" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: product.category }),
        brand && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `/products/brand/${brand.slug}`, className: "text-sm font-semibold text-primary hover:underline", children: [
          brand.name,
          " →"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-5xl md:text-6xl text-balance", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: product.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Ingredients", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-2 text-sm", children: ["Sustainably sourced cocoa", "Cane sugar", "Whole milk powder", "Vanilla extract", "Sunflower lecithin", "Natural flavours"].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-gold" }),
          " ",
          i
        ] }, i)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Nutritional information (per 100g)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 text-center", children: [{
          k: "Energy",
          v: "542 kcal"
        }, {
          k: "Fat",
          v: "32g"
        }, {
          k: "Sugar",
          v: "48g"
        }, {
          k: "Protein",
          v: "7g"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-secondary p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-lg", children: s.v })
        ] }, s.k)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Manufacturing standards", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Produced under ISO 22000, HACCP and GMP certified conditions. Every batch is sampled and verified by our central quality lab before release." }) }),
        brand && /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "About the brand", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: brand.details }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `/products/brand/${brand.slug}`, className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent", children: [
            "Explore ",
            brand.name,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] })
        ] })
      ] }) })
    ] }) }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-secondary/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl", children: "More from this brand family" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 auto-rows-fr justify-items-center", children: related.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$slug", params: {
        slug: p.slug
      }, className: "group w-full h-full rounded-xl overflow-hidden bg-card border border-border flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[5/6] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: CATEGORY_IMAGES[p.category], alt: p.name, loading: "lazy", className: "size-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-[13px]", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-1 inline-flex items-center gap-1 text-[11px]", children: [
            "View ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 11 })
          ] })
        ] })
      ] }, p.slug)) })
    ] }) })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-8 border-t border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-4", children: title }),
    children
  ] });
}
export {
  ProductDetail as component
};
