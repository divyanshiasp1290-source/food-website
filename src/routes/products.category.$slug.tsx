import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import {
  BRANDS,
  getBrandsByCategory,
  CATEGORY_IMAGES,
  PRODUCT_IMAGES,
  PRODUCTS,
  type Category,
} from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/products/category/$slug")({
  component: CategoryDetail,
  head: ({ params }: { params: { slug: string } }) => {
    const categorySlug = params.slug as string;
    const categoryName = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
    return {
      meta: [
        { title: `${categoryName} — Auréa Foods` },
        { name: "description", content: `Explore our ${categoryName} brands and products.` },
        { property: "og:title", content: `${categoryName} — Auréa Foods` },
      ],
      links: [{ rel: "canonical", href: `/products/category/${categorySlug}` }],
    };
  },
});

function CategoryDetail() {
  const { slug } = useParams({ from: "/products/category/$slug" });
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const brands = getBrandsByCategory(slug as Category);
  const products = PRODUCTS.filter((p) => p.category === slug);
  const image = CATEGORY_IMAGES[categoryName as Category];

  const categoryDescriptions: Record<string, { headline: string; description: string }> = {
    Chocolate: {
      headline: "Crafted Excellence in Every Bite",
      description:
        "Our chocolate collection represents generations of craftsmanship combined with modern innovation. Each bar is made from carefully selected cocoa beans sourced from sustainable farms around the world. From silky milk chocolate to intense dark varieties, we bring moments of pure indulgence to families everywhere.",
    },
    Snacks: {
      headline: "Wholesome Nutrition, Delicious Taste",
      description:
        "Our snack range combines nutritional excellence with exceptional taste. Whether you need energy for an active day or a moment of mindful indulgence, our snacks are crafted with premium ingredients and care.",
    },
    Confectionery: {
      headline: "Pure Joy in Every Piece",
      description:
        "Confectionery is about creating moments of happiness. Our collection brings together traditional candy-making craftsmanship with modern flavor innovations, ensuring every piece brings a smile.",
    },
    "Pet Nutrition": {
      headline: "Love Made Nutritious",
      description:
        "Your pet's health and happiness matter to us. Our pet nutrition range is formulated by veterinary experts and backed by science, delivering complete nutrition for every life stage and breed.",
    },
    "Healthy Foods": {
      headline: "Nourish Your Family Naturally",
      description:
        "Healthy living starts with wholesome choices. Our healthy foods collection brings together organic ingredients, whole grains, and nutritional excellence to support your family's wellbeing.",
    },
    Ingredients: {
      headline: "Premium Quality at Its Foundation",
      description:
        "Great products start with exceptional ingredients. Our ingredient line supplies premium cocoa, vanilla, spices and other essentials to food manufacturers, restaurants, and culinary professionals worldwide.",
    },
  };

  const info = categoryDescriptions[categoryName as Category];

  return (
    <>
      <PageHero eyebrow={categoryName} title={info.headline} description={info.description} />

      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <h2 className="text-3xl md:text-4xl font-black">Our {categoryName} Brands</h2>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  Discover the brands behind the products. Each represents our commitment to
                  quality, innovation, and your satisfaction.
                </p>
              </div>
              <Button asChild variant="link" className="w-fit px-0">
                <Link to="/products">
                  View all products <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {brands.map((brand, i) => (
              <Reveal key={brand.slug} delay={i * 0.1}>
                <Link
                  to="/products/brand/$slug"
                  params={{ slug: brand.slug }}
                  className="group block rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-secondary">
                    {image && (
                      <img
                        src={image}
                        alt={brand.name}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="p-8">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {brand.tagline}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold">{brand.name}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed line-clamp-2">
                      {brand.details}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black mb-12">Featured Products</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.05}>
                <Link
                  to="/product/$slug"
                  params={{ slug: product.slug }}
                  className="group block rounded-xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={PRODUCT_IMAGES[product.slug] || CATEGORY_IMAGES[product.category]}
                      alt={product.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {product.brand}
                    </p>
                    <h3 className="mt-3 text-lg font-bold">{product.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary group-hover:gap-3 transition-all">
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
