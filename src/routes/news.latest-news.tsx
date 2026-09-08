import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/news/latest-news")({
  component: NewsLatest,
  head: () => ({
    meta: [
      { title: "Latest news — Auréa Foods" },
      { name: "description", content: "Latest updates from Auréa Foods." },
    ],
    links: [{ rel: "canonical", href: "/news/latest-news" }],
  }),
});

function NewsLatest() {
  return (
    <>
      <PageHero
        eyebrow="Latest news"
        title={
          <>
            News that moves <em className="not-italic text-cocoa">with you</em>
          </>
        }
        description="Company updates, milestones and announcements."
      />
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">Latest from Auréa</h2>
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
