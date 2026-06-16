import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/sustainability/climate-action")({
  component: SustainabilityClimateAction,
  head: () => ({
    meta: [
      { title: "Climate action — Auréa Foods" },
      { name: "description", content: "Our climate action initiatives." },
    ],
    links: [{ rel: "canonical", href: "/sustainability/climate-action" }],
  }),
});

function SustainabilityClimateAction() {
  return (
    <>
      <PageHero
        eyebrow="Climate action"
        title={
          <>
            Cut emissions with <em className="not-italic text-cocoa">measurable</em> progress
          </>
        }
        description="Programs across energy, transport and operations—built for accountability and results."
      />
      <section className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">Where reduction starts</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We prioritize the biggest levers—renewable electricity, process efficiency and
              logistics optimization—so every facility moves in the same direction.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every initiative is tracked with targets and reviewed continuously.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-secondary/50 p-8">
              <p className="text-xs font-black uppercase tracking-widest text-primary">
                Focus areas
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>• Renewable energy acceleration</li>
                <li>• Process efficiency & waste reduction</li>
                <li>• Low-carbon transport planning</li>
                <li>• Supplier decarbonization</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
