import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import lab from "@/assets/innovation-lab.jpg";
import sustain from "@/assets/sustainability.jpg";
import factory from "@/assets/about-factory.jpg";
import chocolate from "@/assets/product-chocolate.jpg";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Media — Auréa Foods" },
      {
        name: "description",
        content:
          "Company news, industry insights, sustainability updates and product launches from Auréa Foods.",
      },
      { property: "og:title", content: "News & Media — Auréa Foods" },
      { property: "og:description", content: "The latest from the Auréa newsroom." },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

const CATEGORIES = ["All", "Company News", "Industry News", "Sustainability", "Product Updates"];

const POSTS = [
  {
    tag: "Sustainability",
    title: "Auréa joins regenerative agriculture coalition with 40,000 farmers.",
    date: "April 12, 2026",
    img: sustain,
  },
  {
    tag: "Company News",
    title: "Opening our 33rd manufacturing facility in Da Nang, Vietnam.",
    date: "March 28, 2026",
    img: factory,
  },
  {
    tag: "Product Updates",
    title: "Introducing single-origin cocoa to our premium chocolate line.",
    date: "March 04, 2026",
    img: chocolate,
  },
  {
    tag: "Industry News",
    title: "Reimagining cocoa: how fermentation science is reshaping the industry.",
    date: "February 21, 2026",
    img: lab,
  },
  {
    tag: "Sustainability",
    title: "Our packaging team eliminated 1,200 tons of plastic in 2025.",
    date: "January 30, 2026",
    img: sustain,
  },
  {
    tag: "Company News",
    title: "Auréa Foods named to TIME's Most Sustainable Companies list.",
    date: "January 15, 2026",
    img: factory,
  },
];

function News() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? POSTS : POSTS.filter((p) => p.tag === active);
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="Stories from across the company."
        description="Company news, industry insights and updates from our manufacturing, innovation and sustainability teams."
      />

      <section className="py-12 border-y border-border bg-background/85 backdrop-blur-xl sticky top-20 z-30">
        <div className="container-x flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full px-4 py-2 text-sm border transition-colors",
                active === c
                  ? "bg-cocoa text-cream border-cocoa"
                  : "bg-card border-border hover:border-cocoa/40",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={(i % 6) * 0.05}>
              <article className="group h-full rounded-3xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                    <span className="rounded-full bg-secondary px-3 py-1">{p.tag}</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl text-balance">{p.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
