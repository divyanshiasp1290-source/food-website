import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Globe2, Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BRANDS, PRODUCTS } from "@/lib/products";
import chocolate from "@/assets/product-chocolate.jpg";
import pet from "@/assets/product-pet.jpg";
import healthy from "@/assets/product-healthy.jpg";

const NAV = [
  {
    to: "/about",
    label: "Who We Are",
    items: [
      { label: "Our story", to: "/about#story" },
      { label: "Purpose & principles", to: "/about#purpose" },
      { label: "Leadership", to: "/about#leadership" },
      { label: "Global presence", to: "/about#global-presence" },
    ],
  },
  {
    to: "/sustainability",
    label: "Sustainability",
    items: [
      { label: "Climate action", to: "/sustainability#climate-action" },
      { label: "Responsible sourcing", to: "/sustainability#responsible-sourcing" },
      { label: "Circular packaging", to: "/sustainability#circular-packaging" },
      { label: "Community impact", to: "/sustainability#community-impact" },
    ],
  },
  {
    to: "/news",
    label: "News & Stories",
  },
] as const;

const BRAND_GROUPS = [
  {
    title: "Confectionery",
    description: "Chocolate, candy and snacks crafted for moments of everyday joy.",
    image: chocolate,
    category: "confectionery",
  },
  {
    title: "Pet Nutrition",
    description: "Science-led nutrition supporting healthier, happier lives for pets.",
    image: pet,
    category: "pet-nutrition",
  },
  {
    title: "Food & Wellness",
    description: "Wholesome foods and ingredients made for modern families.",
    image: healthy,
    category: "healthy-foods",
  },
] as const;

export function SiteHeader() {
  const routerState = useRouterState();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isProductsRoute = routerState.matches.some((match) =>
    match.routeId?.includes("products"),
  );

  const filteredBrands = BRANDS.filter((b) =>
    b.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close search when the route changes so the overlay doesn't persist.
  const _routeKey = routerState.matches.map((m) => m.routeId).join("|");
  useEffect(() => {
    setSearchOpen(false);
    setSearchQuery("");
  }, [_routeKey]);

  // Allow ESC to close the search overlay when open.
  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  return (
    <header
      className={cn(
        "sticky inset-x-0 top-0 z-50 border-b border-border bg-background transition-shadow",
        scrolled && "shadow-[var(--shadow-soft)]",
      )}
    >
      <div className="hidden h-10 bg-primary text-primary-foreground lg:block">
        <div className="container-x flex h-full items-center justify-between text-[10px] font-bold uppercase tracking-[0.15em]">
          <div className="flex items-center gap-7">
            <span className="flex items-center gap-2">
              <Globe2 size={14} /> Global locations
            </span>
          </div>
          <div className="flex items-center gap-7">
            <Link to="/careers" className="hover:text-accent">
              Careers
            </Link>
            <Link to="/contact" className="font-black hover:text-accent">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="container-x flex h-20 items-center justify-between gap-6 lg:h-24">
        <Link to="/" className="text-primary">
          <span className="text-2xl font-black tracking-[-0.06em] md:text-3xl">AURÉA</span>
          <span className="ml-1 text-lg font-light tracking-tight text-muted-foreground md:text-xl">
            FOODS
          </span>
        </Link>

        <nav className="hidden h-full items-center gap-9 lg:flex">
          <div className="group flex h-full items-center">
            <Link
              to="/products"
              className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent"
            >
              <span>Our Brands</span>
              <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />
            </Link>
            <div className="pointer-events-none invisible absolute inset-x-0 top-full translate-y-2 border-t-2 border-primary bg-background opacity-0 shadow-[var(--shadow-elegant)] transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="bg-primary py-8 text-primary-foreground">
                <div className="container-x flex items-center justify-between gap-10">
                  <h2 className="text-3xl font-black">Our Brands</h2>
                  <p className="max-w-2xl text-base text-primary-foreground/80">
                    Trusted brands, products and nutrition solutions made with quality, science and
                    care.
                  </p>
                  <a
                    href="/products"
                    className="whitespace-nowrap border-b border-primary-foreground pb-1 text-xs font-black uppercase tracking-widest"
                  >
                    View all brands
                  </a>
                </div>
              </div>
              <div className="container-x grid grid-cols-3 gap-10 py-10">
                {BRAND_GROUPS.map((brand) => (
                  <Link
                    key={brand.title}
                    to="/products/category/$category"
                    params={{ category: brand.category }}
                    className="group/brand grid grid-cols-[112px_1fr] items-center gap-5"
                  >
                    <img
                      src={brand.image}
                      alt={`${brand.title} image`}
                      className="aspect-square size-28 object-cover"
                    />
                    <div>
                      <h3 className="flex items-center justify-between text-xl font-black text-primary">
                        {brand.title}
                        <span className="transition-transform group-hover/brand:translate-x-1">
                          →
                        </span>
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {brand.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="border-t border-border bg-secondary">
                <div className="container-x flex gap-10 py-5 text-xs font-extrabold uppercase tracking-wider text-primary">
                  <Link to="/products">Brand directory</Link>
                  <Link to="/sustainability">Sourcing standards</Link>
                  <Link to="/contact">Partner with us</Link>
                </div>
              </div>
            </div>
          </div>
          {NAV.map((item) => (
            <div key={item.to} className="group flex h-full items-center">
              <Link
                to={item.to}
                className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent"
              >
                <span>{item.label}</span>
                {"items" in item && Array.isArray(item.items) && item.items.length ? (
                  <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />
                ) : null}
              </Link>

              {"items" in item && Array.isArray(item.items) && item.items.length ? (
                <div className="pointer-events-none invisible absolute inset-x-0 top-full translate-y-2 border-t-2 border-primary bg-background opacity-0 shadow-[var(--shadow-elegant)] transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="container-x grid grid-cols-[1fr_1.6fr] gap-16 py-10">
                    <Link
                      to={item.to}
                      className="mt-6 inline-flex items-center border-b border-primary pb-1 text-xs font-black uppercase tracking-widest text-primary"
                      onClick={() => {}}
                    >
                      Explore all
                    </Link>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-1 border-l border-border pl-12">
                      {(() => {
                        const items = (item as { items?: readonly { label: string; to: string }[] })
                          .items;
                        if (!Array.isArray(items) || items.length === 0) return null;

                        return items.map((x) => {
                          const label = x.label;
                          return (
                            <Link
                              key={label}
                              to={x.to}
                              className="flex items-center justify-between border-b border-border py-4 text-sm font-bold transition-colors hover:text-primary"
                              onClick={() => {}}
                            >
                              <span>{label}</span>
                              <span aria-hidden>→</span>
                            </Link>
                          );
                        });
                      })()}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          {!isProductsRoute &&
            (searchOpen ? (
              <div className="relative w-full max-w-[420px]">
                <form
                  onSubmit={(event) => event.preventDefault()}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2"
                >
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      autoFocus
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search brands or products..."
                      className="w-full rounded-full bg-card pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-cocoa px-4 py-3 text-sm font-semibold text-cream transition hover:bg-cocoa/90"
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="rounded-full p-2 text-muted-foreground transition hover:bg-muted/20 hover:text-foreground"
                    aria-label="Close search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </form>

              <div className="absolute left-0 top-full mt-2 w-full z-50">
                <div className="max-h-72 overflow-y-auto rounded-lg border border-border bg-background p-2 shadow-[var(--shadow-soft)]">
                  {searchQuery === "" ? (
                    <div className="p-3 text-sm text-muted-foreground">Start typing to search brands or products.</div>
                  ) : null}

                  {searchQuery !== "" && filteredBrands.length === 0 && filteredProducts.length === 0 ? (
                    <div className="p-3 text-sm text-muted-foreground">No results found.</div>
                  ) : null}

                  <div className="grid grid-cols-1 gap-2">
                    {filteredBrands.slice(0, 6).map((b) => (
                      <Link
                        key={b.slug}
                        to="/products/brand/$slug"
                        params={{ slug: b.slug }}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-start gap-3 rounded-md px-3 py-2 hover:bg-card transition"
                      >
                        <div className="flex-1">
                          <div className="text-[11px] font-semibold text-foreground">{b.name}</div>
                          <div className="text-xs text-muted-foreground truncate">{b.tagline}</div>
                        </div>
                        <div className="text-[10px] text-muted-foreground uppercase">Brand</div>
                      </Link>
                    ))}

                    {filteredProducts.slice(0, 6).map((p) => (
                      <Link
                        key={p.slug}
                        to="/product/$slug"
                        params={{ slug: p.slug }}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-start gap-3 rounded-md px-3 py-2 hover:bg-card transition"
                      >
                        <div className="flex-1">
                          <div className="text-[11px] font-semibold text-foreground">{p.name}</div>
                          <div className="text-xs text-muted-foreground truncate">{p.brand}</div>
                        </div>
                        <div className="text-[10px] text-muted-foreground uppercase">Product</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                aria-label="Search"
                className="text-primary"
                onClick={() => setSearchOpen(true)}
              >
                <Search />{" "}
                <span className="text-[10px] font-black uppercase tracking-widest">Search</span>
              </Button>
            ))}
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <div className="container-x py-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg font-bold text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/products"
                onClick={() => setOpen(false)}
                className="order-first py-3 text-lg font-bold text-foreground"
              >
                Our Brands
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
