import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { CATEGORIES, CATEGORY_IMAGES, BRANDS, type Category, type Brand } from "@/lib/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Brands — Auréa Foods" },
      {
        name: "description",
        content:
          "Explore Auréa Foods brands across chocolate, snacks, confectionery, pet nutrition, healthy foods and ingredients.",
      },
      { property: "og:title", content: "Our Brands — Auréa Foods" },
      {
        property: "og:description",
        content: "Trusted brands made with quality, science and care.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  const [active, setActive] = useState<string>("All");
  const [q, setQ] = useState("");
  const routerState = useRouterState();

  // Check if a child route is active (brand or category detail page)
  const isChildRouteActive = routerState.matches.some(
    (match) =>
      match.routeId && (match.routeId.includes("brand") || match.routeId.includes("category")),
  );

  const filtered = useMemo(() => {
    return BRANDS.filter(
      (b) =>
        (active === "All" || b.category === active) &&
        (q === "" || b.name.toLowerCase().includes(q.toLowerCase())),
    );
  }, [active, q]);

  // If a child route is active, render only the child
  if (isChildRouteActive) {
    return <Outlet />;
  }

  return (
    <>
      <PageHero
        eyebrow="Our brands"
        title={
          <>
            Brands made for <em className="not-italic text-cocoa">everyday life</em>.
          </>
        }
        description="Discover our brand families across food, confectionery and pet nutrition — each held to the same uncompromising standard."
      />

      <section className="py-6 sticky top-20 z-30 bg-background/85 backdrop-blur-xl border-y border-border">
        <div className="container-x flex flex-wrap items-center gap-3">
          <form
            onSubmit={(event) => event.preventDefault()}
            className="flex flex-1 min-w-[220px] max-w-md items-center gap-2"
          >
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search brands..."
                className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-cocoa"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-cocoa px-4 py-3 text-sm font-semibold text-cream transition hover:bg-cocoa/90"
            >
              Search
            </button>
          </form>

          <div className="flex flex-wrap gap-2">
            {(["All", ...CATEGORIES] as const).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c as string)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 border transition-colors",
                  active === c
                    ? "bg-cocoa text-cream border-cocoa"
                    : "bg-card text-foreground border-border hover:border-cocoa/40",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-x">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-4 grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 auto-rows-fr justify-items-center"
            >
              {filtered.map((b, i) => (
                <motion.div
                  key={b.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: (i % 10) * 0.02 }}
                >
                  <Link
                    to="/products/brand/$slug"
                    params={{ slug: b.slug }}
                    className="group block w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow h-full flex flex-col"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-secondary">
                      <img
                        src={b.image || CATEGORY_IMAGES[b.category]}
                        alt={b.name}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3 flex-grow flex flex-col">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {b.category}
                      </div>
                      <h3 className="mt-2 font-semibold text-sm">{b.name}</h3>
                      <p className="mt-1 text-[11px] text-accent font-semibold">{b.tagline}</p>
                      <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed flex-grow line-clamp-4">
                        {b.description}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-primary group-hover:gap-2 transition-all">
                        Explore brand →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground text-lg">No brands found matching "{q}"</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
