import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/news/company-stories")({
  component: NewsCompanyStories,
  head: () => ({
    meta: [
      { title: "Company stories — Auréa Foods" },
      { name: "description", content: "Culture and company stories from Auréa Foods." },
    ],
    links: [{ rel: "canonical", href: "/news/company-stories" }],
  }),
});

function NewsCompanyStories() {
  return (
    <>
      <PageHero
        eyebrow="Company stories"
        title={
          <>
            People, process and <em className="not-italic text-cocoa">progress</em>
          </>
        }
        description="Culture, milestones and behind-the-scenes stories."
      />
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">Company stories</h2>
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
