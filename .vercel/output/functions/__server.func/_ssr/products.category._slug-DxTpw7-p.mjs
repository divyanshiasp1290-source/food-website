import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useParams, L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-BdJZt92n.mjs";
import { g as getBrandsByCategory, f as PRODUCTS, d as Button, a as CATEGORY_IMAGES, P as PRODUCT_IMAGES } from "./router-B6llwF8O.mjs";
import { R as Reveal } from "./Reveal-B_-tUvzj.mjs";
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
function CategoryDetail() {
  const {
    slug
  } = useParams({
    from: "/products/category/$slug"
  });
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const brands = getBrandsByCategory(slug);
  const products = PRODUCTS.filter((p) => p.category === slug);
  const image = CATEGORY_IMAGES[categoryName];
  const categoryDescriptions = {
    Chocolate: {
      headline: "Crafted Excellence in Every Bite",
      description: "Our chocolate collection represents generations of craftsmanship combined with modern innovation. Each bar is made from carefully selected cocoa beans sourced from sustainable farms around the world. From silky milk chocolate to intense dark varieties, we bring moments of pure indulgence to families everywhere."
    },
    Snacks: {
      headline: "Wholesome Nutrition, Delicious Taste",
      description: "Our snack range combines nutritional excellence with exceptional taste. Whether you need energy for an active day or a moment of mindful indulgence, our snacks are crafted with premium ingredients and care."
    },
    Confectionery: {
      headline: "Pure Joy in Every Piece",
      description: "Confectionery is about creating moments of happiness. Our collection brings together traditional candy-making craftsmanship with modern flavor innovations, ensuring every piece brings a smile."
    },
    "Pet Nutrition": {
      headline: "Love Made Nutritious",
      description: "Your pet's health and happiness matter to us. Our pet nutrition range is formulated by veterinary experts and backed by science, delivering complete nutrition for every life stage and breed."
    },
    "Healthy Foods": {
      headline: "Nourish Your Family Naturally",
      description: "Healthy living starts with wholesome choices. Our healthy foods collection brings together organic ingredients, whole grains, and nutritional excellence to support your family's wellbeing."
    },
    Ingredients: {
      headline: "Premium Quality at Its Foundation",
      description: "Great products start with exceptional ingredients. Our ingredient line supplies premium cocoa, vanilla, spices and other essentials to food manufacturers, restaurants, and culinary professionals worldwide."
    }
  };
  const info = categoryDescriptions[categoryName];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: categoryName, title: info.headline, description: info.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl font-black", children: [
            "Our ",
            categoryName,
            " Brands"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-muted-foreground", children: "Discover the brands behind the products. Each represents our commitment to quality, innovation, and your satisfaction." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "link", className: "w-fit px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", children: [
          "View all products ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 lg:grid-cols-2", children: brands.map((brand, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products/brand/$slug", params: {
        slug: brand.slug
      }, className: "group block rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] overflow-hidden bg-secondary", children: image && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: brand.name, className: "size-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: brand.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-2xl font-bold", children: brand.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed line-clamp-2", children: brand.details }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all", children: [
            "Learn more ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] })
        ] })
      ] }) }, brand.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-secondary/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-black mb-12", children: "Featured Products" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: products.slice(0, 6).map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$slug", params: {
        slug: product.slug
      }, className: "group block rounded-xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: PRODUCT_IMAGES[product.slug] || CATEGORY_IMAGES[product.category], alt: product.name, loading: "lazy", className: "size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: product.brand }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-bold", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground line-clamp-2", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2 text-xs font-medium text-primary group-hover:gap-3 transition-all", children: [
            "Explore ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
          ] })
        ] })
      ] }) }, product.slug)) })
    ] }) })
  ] });
}
export {
  CategoryDetail as component
};
