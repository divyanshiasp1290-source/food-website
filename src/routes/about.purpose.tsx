import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about/purpose")({
  component: AboutPurpose,
  head: () => ({
    meta: [
      { title: "Purpose & principles — Auréa Foods" },
      { name: "description", content: "Our purpose and principles." },
    ],
    links: [{ rel: "canonical", href: "/about/purpose" }],
  }),
});

function AboutPurpose() {
  return (
    <>
      <PageHero
        eyebrow="Purpose"
        title={
          <>
            Purpose translated into <em className="not-italic text-cocoa">everyday</em> decisions
          </>
        }
        description="How we choose, build, and deliver — guided by values that stand up to time."
      />
      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          {[
            {
              n: "01",
              title: "People and culture",
              text: "We invest in inclusive workplaces where expertise travels freely across teams, regions and generations.",
            },
            {
              n: "02",
              title: "Partners and communities",
              text: "Long-term supplier and customer relationships strengthen local economies and improve resilience.",
            },
            {
              n: "03",
              title: "Science and quality",
              text: "Food safety, nutrition and consumer insight guide every step from ingredients to delivery.",
            },
          ].map((x) => (
            <Reveal key={x.n}>
              <div className="rounded-3xl border border-border bg-card p-8">
                <div className="text-xs font-black tracking-widest text-primary">{x.n}</div>
                <h2 className="mt-6 text-2xl font-black">{x.title}</h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{x.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
