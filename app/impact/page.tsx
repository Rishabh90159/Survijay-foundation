import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "View SurVijay Foundation impact highlights, outcomes, reporting areas, and community progress.",
};

export default function ImpactPage() {
  return (
    <main>
      <section className="page-hero page-hero-community">
        <p className="eyebrow">Impact</p>
        <h1>Impact should be specific, visible, and easy to verify.</h1>
        <p>
          This page is prepared for numbers, annual reports, certificates,
          testimonials, and before-after stories.
        </p>
      </section>
      <section className="section">
        <div className="impact-grid">
          {[
            ["4,800+", "People reached through education, awareness, and relief support."],
            ["32", "Community drives completed with local volunteers."],
            ["18", "Learning groups supported with regular sessions."],
            ["120+", "Volunteers engaged across events and campaigns."],
          ].map(([value, text]) => (
            <article className="impact-card" key={value}>
              <strong>{value}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
