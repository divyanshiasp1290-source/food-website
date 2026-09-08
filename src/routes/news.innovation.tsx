import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/news/innovation")({
  component: NewsInnovation,
  head: () => ({
    meta: [
      { title: "Innovation — Auréa Foods" },
      { name: "description", content: "Innovation stories from Auréa Foods." },
    ],
    links: [{ rel: "canonical", href: "/news/innovation" }],
  }),
});

function NewsInnovation() {
  return (
    <>
      <PageHero
        eyebrow="Innovation"
        title={
          <>
            From lab to life, <em className="not-italic text-cocoa">faster</em>
          </>
        }
        description="Research, product development and future-forward work."
      />
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">Innovation stories</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              This is a placeholder details page. Connect it with your real newsroom data when
              ready.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
