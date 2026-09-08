import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about/global-presence")({
  component: AboutGlobalPresence,
  head: () => ({
    meta: [
      { title: "Global presence — Auréa Foods" },
      { name: "description", content: "Our global footprint." },
    ],
    links: [{ rel: "canonical", href: "/about/global-presence" }],
  }),
});

function AboutGlobalPresence() {
  return (
    <>
      <PageHero
        eyebrow="Global presence"
        title={
          <>
            One company. <em className="not-italic text-cocoa">Every continent</em>.
          </>
        }
        description="Manufacturing and distribution in 80+ markets — supported by a single quality system."
      />

      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">Built for consistency at scale</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We coordinate across facilities, innovation labs and quality teams to ensure every
              product matches the Auréa standard.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { k: "80+", v: "markets served" },
                { k: "32", v: "manufacturing sites" },
                { k: "8", v: "innovation labs" },
                { k: "18,000", v: "people worldwide" },
              ].map((x) => (
                <div key={x.v} className="rounded-2xl border border-border bg-secondary/50 p-6">
                  <div className="text-3xl font-black text-foreground">{x.k}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{x.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="text-xs font-black uppercase tracking-widest text-primary">
                How we work
              </div>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li>• Central quality system + local accountability</li>
                <li>• Innovation labs aligned to market needs</li>
                <li>• Continuous improvement across the value chain</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
