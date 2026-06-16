import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { getBrand, PRODUCTS, CATEGORY_IMAGES, PRODUCT_IMAGES, BRANDS } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/products/brand/$slug")({
  component: BrandDetail,
  head: () => ({
    meta: [
      { title: "Brand — Auréa Foods" },
      { name: "description", content: "Discover our premium brand" },
      { property: "og:title", content: "Brand — Auréa Foods" },
    ],
    links: [{ rel: "canonical", href: "/products/brand/" }],
  }),
});

function BrandDetail() {
  const { slug } = useParams({ from: "/products/brand/$slug" });
  const brand = getBrand(slug);
  const brandProducts = PRODUCTS.filter((p) => p.brand === brand?.name);
  const relatedBrands = BRANDS.filter(
    (b) => b.category === brand?.category && b.slug !== slug,
  ).slice(0, 3);
  const categoryImage = brand ? brand.image || CATEGORY_IMAGES[brand.category] : "";

  const brandProductGrid =
    brandProducts.length <= 1
      ? "grid-cols-1 justify-items-center"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center";

  const relatedBrandGrid =
    relatedBrands.length <= 1
      ? "grid-cols-1 justify-items-center"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center";

  if (!brand) {
    return (
      <section className="py-32 text-center">
        <div className="container-x">
          <h1 className="text-4xl font-bold">Brand not found</h1>
          <p className="mt-4 text-muted-foreground">
            Sorry, we couldn't find this brand.{" "}
            <Link to="/products" className="text-primary hover:underline">
              View all brands
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero eyebrow={brand.category} title={brand.name} description={brand.tagline} />

      <section className="py-12">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="rounded-2xl overflow-hidden bg-secondary aspect-[4/3]">
                {categoryImage && (
                  <img src={categoryImage} alt={brand.name} className="size-full object-cover" />
                )}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {brand.details}
                </p>

                {brand.mission && (
                  <>
                    <h3 className="text-xl font-bold mb-3 mt-8">Our Mission</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-8">
                      {brand.mission}
                    </p>
                  </>
                )}

                <h3 className="text-xl font-bold mb-6">Why Choose {brand.name}?</h3>
                <ul className="space-y-4">
                  {brand.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 rounded-full bg-primary/10 p-2 flex-shrink-0">
                        <Check size={16} className="text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-10">
                  <Link to="/products">← Explore More Brands</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Heritage & Founding Info */}
      {(brand.founded || brand.heritage) && (
        <section className="py-12">
          <div className="container-x">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <div>
                  {brand.founded && (
                    <>
                      <h3 className="text-5xl md:text-6xl font-black text-primary mb-4">
                        {brand.founded}
                      </h3>
                      <p className="text-xl text-muted-foreground mb-6">Founded</p>
                    </>
                  )}
                  {brand.heritage && (
                    <>
                      <h2 className="text-3xl md:text-4xl font-black mb-6 mt-8">Our Heritage</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {brand.heritage}
                      </p>
                    </>
                  )}
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-2xl overflow-hidden bg-secondary/50 aspect-square flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-6xl font-black text-muted-foreground/20 mb-4">✓</p>
                    <p className="text-lg font-semibold text-muted-foreground">
                      Trusted by families worldwide
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      {brandProducts.length > 0 && (
        <section className="py-12 bg-secondary/50">
          <div className="container-x">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-black mb-8">{brand.name} Products</h2>
            </Reveal>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 auto-rows-fr justify-items-center">
              {brandProducts.map((product, i) => (
                <Reveal key={product.slug} delay={i * 0.05}>
                  <Link
                    to="/product/$slug"
                    params={{ slug: product.slug }}
                    className="group w-full max-w-[320px] mx-auto h-full rounded-xl border border-border bg-card p-4 hover:shadow-[var(--shadow-elegant)] transition-all flex flex-col"
                  >
                    <div className="aspect-[5/6] overflow-hidden rounded-2xl bg-secondary mb-4">
                      <img
                        src={PRODUCT_IMAGES[product.slug] || CATEGORY_IMAGES[product.category]}
                        alt={product.name}
                        className="size-full object-cover"
                      />
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-base font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight size={12} />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Brands Section */}
      {relatedBrands.length > 0 && (
        <section className="py-14">
          <div className="container-x">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-black mb-10">
                Explore More {brand.category}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
              {relatedBrands.map((b, i) => (
                <Reveal key={b.slug} delay={i * 0.05}>
                  <Link
                    to="/products/brand/$slug"
                    params={{ slug: b.slug }}
                    className="group w-full max-w-[320px] mx-auto h-full rounded-3xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow flex flex-col justify-between"
                  >
                    <div className="aspect-[5/6] overflow-hidden bg-secondary">
                      <img
                        src={b.image || CATEGORY_IMAGES[b.category]}
                        alt={b.name}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3 flex flex-col">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {b.category}
                      </div>
                      <h3 className="mt-2 font-bold text-base">{b.name}</h3>
                      <p className="mt-1 text-sm text-accent font-semibold">{b.tagline}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-snug">
                        {b.description}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        Explore brand →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
