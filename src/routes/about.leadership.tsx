import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about/leadership")({
  component: AboutLeadership,
  head: () => ({
    meta: [
      { title: "Leadership — Auréa Foods" },
      { name: "description", content: "Meet the leadership team at Auréa Foods." },
    ],
    links: [{ rel: "canonical", href: "/about/leadership" }],
  }),
});

function AboutLeadership() {
  const leaders = [
    { name: "Élise Marchand", role: "Chief Executive Officer" },
    { name: "Rajiv Krishnan", role: "Chief Operating Officer" },
    { name: "Sofia Alvarez", role: "Chief Sustainability Officer" },
    { name: "Daniel Hoffmann", role: "Chief Innovation Officer" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={
          <>
            Leading with <em className="not-italic text-cocoa">care</em> and science
          </>
        }
        description="A team built around craft, accountability, and continuous improvement."
      />
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black">Leadership team</h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-6 auto-rows-fr">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.05}>
                <div className="rounded-2xl border border-border overflow-hidden bg-card">
                  <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-secondary/50 grid place-items-center">
                    <div className="text-6xl font-display text-cocoa/30">
                      {l.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="font-display text-lg">{l.name}</div>
                    <div className="text-sm text-muted-foreground">{l.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
