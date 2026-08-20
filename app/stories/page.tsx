import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories and Updates",
  description:
    "Read community stories, field updates, volunteer notes, and event highlights from SurVijay Foundation.",
};

export default function StoriesPage() {
  return (
    <main>
      <section className="page-hero page-hero-education">
        <p className="eyebrow">Stories</p>
        <h1>Human stories make the mission memorable.</h1>
        <p>
          Blog-style posts will help SEO and give donors, volunteers, and
          partners a reason to return.
        </p>
      </section>
      <section className="section grid gap-5 md:grid-cols-3">
        {[
          ["A reading circle finds its voice", "How regular practice helped children speak and read with confidence."],
          ["Health awareness in one afternoon", "A field update from a local hygiene and nutrition session."],
          ["Why volunteers keep coming back", "Simple roles, clear purpose, and visible community connection."],
        ].map(([title, text]) => (
          <article className="story-card" key={title}>
            <span>Update</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
