import type { Metadata } from "next";
import { focusAreas, workAreas } from "../foundationData";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Survijay Foundation's broad community welfare focus areas.",
};

export default function ProgramsPage() {
  return (
    <main>
      <section className="page-hero page-hero-community">
        <p className="eyebrow">Our Work</p>
        <h1>Our Work</h1>
        <p>
          Our work is centred around community welfare, social support and
          responsible local engagement.
        </p>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Focus Areas</p>
          <h2>Broad areas aligned with social welfare.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {focusAreas.map((area) => (
            <article className="card" key={area.title}>
              <div className="accent-bar" />
              <h2>{area.title}</h2>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {workAreas.map((work) => (
            <article className="card" key={work.title}>
              <h2>{work.title}</h2>
              <p>{work.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
