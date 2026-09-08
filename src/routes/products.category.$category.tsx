import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CATEGORIES, CATEGORY_IMAGES, PRODUCT_IMAGES, PRODUCTS, getBrandsByCategory } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/products/category/$category")({
  loader: ({ params }) => {
    const slug = params.category;
    const category = CATEGORIES.find((c) => c.toLowerCase().replace(/\s+/g, "-") === slug);
    if (!category) throw notFound();
    const brands = getBrandsByCategory(category);
    const items = PRODUCTS.filter((p) => p.category === category);
    return { category, brands, items };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category} — Auréa Foods` },
          {
            name: "description",
            content: `Explore ${loaderData.category} brands and products from Auréa Foods.`,
          },
          { property: "og:title", content: `${loaderData.category} — Auréa Foods` },
          {
            property: "og:description",
            content: `Explore ${loaderData.category} brands and products from Auréa Foods.`,
          },
        ]
      : [],
    links: loaderData
      ? [
          {
            rel: "canonical",
            href: `/products/category/${loaderData.category.toLowerCase().replace(/\s+/g, "-")}`,
          },
        ]
      : [],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, brands, items } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Our brands"
        title={<>{category}</>}
        description={`Explore our ${category} brands and product range.`}
      />

      {brands.length > 0 && (
        <section className="py-20 bg-secondary/40">
          <div className="container-x">
            <h2 className="text-3xl md:text-4xl mb-12">Featured Brands</h2>
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 auto-rows-fr justify-items-center"
              >
                {brands.map((brand, i) => (
                  <motion.div
                    key={brand.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, delay: (i % 10) * 0.015 }}
                  >
                    <Link
                      to={`/products/brand/${brand.slug}`}
                      className="group block w-full rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow h-full"
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-secondary">
                        <img
                          src={brand.image || CATEGORY_IMAGES[brand.category]}
                          alt={brand.name}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                        />
                      </div>
                      <div className="p-2">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
                          {brand.category}
                        </div>
                        <h3 className="text-sm font-bold">{brand.name}</h3>
                        <p className="mt-1 text-[11px] font-semibold text-accent">
                          {brand.tagline}
                        </p>
                        <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
                          {brand.description}
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold">
                          Explore brand <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      )}

      {items.length > 0 && (
        <section className="py-20">
          <div className="container-x">
            <h2 className="text-3xl md:text-4xl mb-6">All {category} Products</h2>
            <p className="text-sm text-muted-foreground mb-12">{items.length} products available</p>

            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 auto-rows-fr justify-items-center"
              >
                {items.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, delay: (i % 10) * 0.015 }}
                  >
                    <Link
                      to="/product/$slug"
                      params={{ slug: p.slug }}
                      className="group block w-full rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow"
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-secondary">
                        <img
                          src={PRODUCT_IMAGES[p.slug] || CATEGORY_IMAGES[p.category]}
                          alt={p.name}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          {p.brand || p.category}
                        </p>
                        <h3 className="mt-2 font-semibold text-sm">{p.name}</h3>
                        <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                          {p.description}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold">
                          View <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      )}
    </>
  );
}
