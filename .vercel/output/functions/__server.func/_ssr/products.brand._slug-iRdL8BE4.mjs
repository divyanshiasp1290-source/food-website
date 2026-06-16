import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useParams, L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-BdJZt92n.mjs";
import { i as getBrand, f as PRODUCTS, B as BRANDS, a as CATEGORY_IMAGES, d as Button, P as PRODUCT_IMAGES } from "./router-B6llwF8O.mjs";
import { R as Reveal } from "./Reveal-B_-tUvzj.mjs";
import { n as Check, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
function BrandDetail() {
  const {
    slug
  } = useParams({
    from: "/products/brand/$slug"
  });
  const brand = getBrand(slug);
  const brandProducts = PRODUCTS.filter((p) => p.brand === brand?.name);
  const relatedBrands = BRANDS.filter((b) => b.category === brand?.category && b.slug !== slug).slice(0, 3);
  const categoryImage = brand ? brand.image || CATEGORY_IMAGES[brand.category] : "";
  if (!brand) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold", children: "Brand not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-muted-foreground", children: [
        "Sorry, we couldn't find this brand.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "text-primary hover:underline", children: "View all brands" })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: brand.category, title: brand.name, description: brand.tagline }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden bg-secondary aspect-[4/3]", children: categoryImage && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: categoryImage, alt: brand.name, className: "size-full object-cover" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-black mb-6", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-8", children: brand.details }),
        brand.mission && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 mt-8", children: "Our Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed mb-8", children: brand.mission })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold mb-6", children: [
          "Why Choose ",
          brand.name,
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: brand.features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 rounded-full bg-primary/10 p-2 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16, className: "text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: feature })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: "← Explore More Brands" }) })
      ] }) })
    ] }) }) }),
    (brand.founded || brand.heritage) && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        brand.founded && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-5xl md:text-6xl font-black text-primary mb-4", children: brand.founded }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-6", children: "Founded" })
        ] }),
        brand.heritage && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-black mb-6 mt-8", children: "Our Heritage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: brand.heritage })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden bg-secondary/50 aspect-square flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-6xl font-black text-muted-foreground/20 mb-4", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-muted-foreground", children: "Trusted by families worldwide" })
      ] }) }) })
    ] }) }) }),
    brandProducts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-secondary/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl font-black mb-8", children: [
        brand.name,
        " Products"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 auto-rows-fr justify-items-center", children: brandProducts.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$slug", params: {
        slug: product.slug
      }, className: "group w-full max-w-[320px] mx-auto h-full rounded-xl border border-border bg-card p-4 hover:shadow-[var(--shadow-elegant)] transition-all flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[5/6] overflow-hidden rounded-2xl bg-secondary mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: PRODUCT_IMAGES[product.slug] || CATEGORY_IMAGES[product.category], alt: product.name, className: "size-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-2", children: product.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold mb-2", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3 mb-3", children: product.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-2.5 transition-all", children: [
          "Learn more ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
        ] })
      ] }) }, product.slug)) })
    ] }) }),
    relatedBrands.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl font-black mb-10", children: [
        "Explore More ",
        brand.category
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-fr", children: relatedBrands.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products/brand/$slug", params: {
        slug: b.slug
      }, className: "group w-full max-w-[320px] mx-auto h-full rounded-3xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[5/6] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.image || CATEGORY_IMAGES[b.category], alt: b.name, loading: "lazy", className: "size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: b.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-bold text-base", children: b.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-accent font-semibold", children: b.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-snug", children: b.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all", children: "Explore brand →" })
        ] })
      ] }) }, b.slug)) })
    ] }) })
  ] });
}
export {
  BrandDetail as component
};
