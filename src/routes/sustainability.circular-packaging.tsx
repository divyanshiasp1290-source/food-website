import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/sustainability/circular-packaging")({
  component: SustainabilityCircularPackaging,
  head: () => ({
    meta: [
      { title: "Circular packaging — Auréa Foods" },
      { name: "description", content: "Our approach to circular packaging." },
    ],
    links: [{ rel: "canonical", href: "/sustainability/circular-packaging" }],
  }),
});

function SustainabilityCircularPackaging() {
  return (
    <>
      <PageHero
        eyebrow="Circular packaging"
        title={
          <>
            Less waste, more <em className="not-italic text-cocoa">circulation</em>
          </>
        }
        description="Designing packaging to reduce impact and improve recyclability."
      />
      <section className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">Designed to be reused</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We’re working toward packaging that improves recyclability and reduces material
              use—without compromising product protection.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every change is tested for performance, safety and usability.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-secondary/50 p-8">
              <p className="text-xs font-black uppercase tracking-widest text-primary">
                Our roadmap
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>• Reduce material where possible</li>
                <li>• Increase recyclability across markets</li>
                <li>• Move toward circular material inputs</li>
                <li>• Improve packaging usability for consumers</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
