import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/sustainability/responsible-sourcing")({
  component: SustainabilityResponsibleSourcing,
  head: () => ({
    meta: [
      { title: "Responsible sourcing — Auréa Foods" },
      { name: "description", content: "How we source responsibly." },
    ],
    links: [{ rel: "canonical", href: "/sustainability/responsible-sourcing" }],
  }),
});

function SustainabilityResponsibleSourcing() {
  return (
    <>
      <PageHero
        eyebrow="Responsible sourcing"
        title={
          <>
            Traceability that earns <em className="not-italic text-cocoa">trust</em>
          </>
        }
        description="Sourcing standards built for quality, transparency and long-term partnerships."
      />
      <section className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">From farm to facility</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We work with suppliers to uphold standards that protect people, improve quality and
              strengthen farming communities.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Quality is verified at every step—so you always know what’s in the product.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="text-xs font-black uppercase tracking-widest text-primary">
                Standards include
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>• Traceability and documentation</li>
                <li>• Responsible farming practices</li>
                <li>• Quality and safety verification</li>
                <li>• Continuous supplier improvement</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
