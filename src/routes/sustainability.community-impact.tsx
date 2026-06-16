import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/sustainability/community-impact")({
  component: SustainabilityCommunityImpact,
  head: () => ({
    meta: [
      { title: "Community impact — Auréa Foods" },
      { name: "description", content: "How we invest in communities." },
    ],
    links: [{ rel: "canonical", href: "/sustainability/community-impact" }],
  }),
});

function SustainabilityCommunityImpact() {
  return (
    <>
      <PageHero
        eyebrow="Community impact"
        title={
          <>
            Building better <em className="not-italic text-cocoa">tomorrows</em> together
          </>
        }
        description="Projects that support local resilience, nutrition and opportunity."
      />
      <section className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">Invest where we operate</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We support initiatives that strengthen communities—from nutrition programs to training
              and local partnerships.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We aim for measurable outcomes and long-term collaboration.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="text-xs font-black uppercase tracking-widest text-primary">Examples</p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>• Nutrition and education initiatives</li>
                <li>• Skills development programs</li>
                <li>• Community partnership projects</li>
                <li>• Local sustainability volunteering</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
