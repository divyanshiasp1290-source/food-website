import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about/story")({
  component: AboutStory,
  head: () => ({
    meta: [
      { title: "Our story — Auréa Foods" },
      { name: "description", content: "Learn about Auréa Foods history." },
    ],
    links: [{ rel: "canonical", href: "/about/story" }],
  }),
});

function AboutStory() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            From craft to <em className="not-italic text-cocoa">global</em>
          </>
        }
        description="Auréa Foods began as a single bakery and grew with one obsession: making food families love."
      />
      <section className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">A legacy of care</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Every generation improved the process without changing the promise: quality,
              consistency and genuine passion.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today we work across 32 manufacturing sites in 80+ markets, still guided by the same
              craft-first mindset.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-secondary/50 p-8">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                Timeline
              </p>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li>• 1947 — Founded as a single bakery</li>
                <li>• 1962 — First chocolate manufacturing facility</li>
                <li>• 2001 — Expansion into pet nutrition</li>
                <li>• 2026 — 32 facilities, 80+ countries</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
