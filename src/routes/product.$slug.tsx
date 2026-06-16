import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  getProduct,
  getRelated,
  getBrand,
  CATEGORY_IMAGES,
  PRODUCT_IMAGES,
  PRODUCT_GALLERY_IMAGES,
  type Product,
} from "@/lib/products";

import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();

    const brand = product.brand ? getBrand(product.brand) : null;

    return { product, brand, related: getRelated(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Auréa Foods` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — Auréa Foods` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:type", content: "product" },
          { property: "og:url", content: `/product/${loaderData.product.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/product/${loaderData.product.slug}` }] : [],
  }),
  component: ProductDetail,
});

function ProductDetail() {
  const { product, brand, related } = Route.useLoaderData();
  const image = PRODUCT_IMAGES[product.slug] || CATEGORY_IMAGES[product.category];
  const gallery: string[] = PRODUCT_GALLERY_IMAGES[product.slug] || [image, image, image, image];

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-x">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={14} /> All brands
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <Reveal>
            <div className="mx-auto max-w-[520px] rounded-3xl overflow-hidden bg-secondary aspect-[4/5] shadow-[var(--shadow-elegant)]">
              <img src={image} alt={product.name} className="size-full object-cover" />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {gallery.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-xl bg-secondary border border-border"
                >
                  <img
                    src={src}
                    alt={`${product.name} gallery image ${i + 1}`}
                    className="size-full object-cover opacity-80"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-28">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {product.category}
              </span>
              {brand && (
                <div className="mt-2 mb-4">
                  <a
                    href={`/products/brand/${brand.slug}`}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    {brand.name} →
                  </a>
                </div>
              )}

              <h1 className="mt-4 text-5xl md:text-6xl text-balance">{product.name}</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <Section title="Ingredients">
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Sustainably sourced cocoa",
                    "Cane sugar",
                    "Whole milk powder",
                    "Vanilla extract",
                    "Sunflower lecithin",
                    "Natural flavours",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <Check size={14} className="text-gold" /> {i}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Nutritional information (per 100g)">
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    { k: "Energy", v: "542 kcal" },
                    { k: "Fat", v: "32g" },
                    { k: "Sugar", v: "48g" },
                    { k: "Protein", v: "7g" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-xl bg-secondary p-4">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        {s.k}
                      </div>
                      <div className="mt-1 font-display text-lg">{s.v}</div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Manufacturing standards">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Produced under ISO 22000, HACCP and GMP certified conditions. Every batch is
                  sampled and verified by our central quality lab before release.
                </p>
              </Section>

              {brand && (
                <Section title="About the brand">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {brand.details}
                  </p>
                  <a
                    href={`/products/brand/${brand.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
                  >
                    Explore {brand.name} <ArrowRight size={14} />
                  </a>
                </Section>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-14 bg-secondary/60">
          <div className="container-x">
            <h2 className="text-3xl md:text-4xl">More from this brand family</h2>
            <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 auto-rows-fr justify-items-center">
              {related.map((p: Product) => (
                <Link
                  key={p.slug}
                  to="/product/$slug"
                  params={{ slug: p.slug }}
                  className="group w-full h-full rounded-xl overflow-hidden bg-card border border-border flex flex-col justify-between"
                >
                  <div className="aspect-[5/6] overflow-hidden">
                    <img
                      src={CATEGORY_IMAGES[p.category]}
                      alt={p.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-3 py-2">
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">
                      {p.category}
                    </div>
                    <h3 className="mt-1 font-display text-[13px]">{p.name}</h3>
                    <span className="mt-1 inline-flex items-center gap-1 text-[11px]">
                      View <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10 pt-8 border-t border-border">
      <h3 className="font-display text-xl mb-4">{title}</h3>
      {children}
    </div>
  );
}
