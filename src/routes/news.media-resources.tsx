import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/news/media-resources")({
  component: NewsMediaResources,
  head: () => ({
    meta: [
      { title: "Media resources — Auréa Foods" },
      { name: "description", content: "Downloadables and media resources." },
    ],
    links: [{ rel: "canonical", href: "/news/media-resources" }],
  }),
});

function NewsMediaResources() {
  return (
    <>
      <PageHero
        eyebrow="Media resources"
        title={
          <>
            Assets for <em className="not-italic text-cocoa">journalists</em>
          </>
        }
        description="Press kits, brand assets and related resources."
      />
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">Media resources</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              This is a placeholder details page. Connect it with your real media assets when ready.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
