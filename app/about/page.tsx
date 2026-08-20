import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SurVijay Foundation's mission, values, team approach, and community-first NGO model.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">About us</p>
        <h1>Rooted in community. Built for practical change.</h1>
        <p>
          SurVijay Foundation exists to help children, women, and families
          access support that is consistent, respectful, and easy to understand.
        </p>
      </section>
      <section className="section grid gap-8 lg:grid-cols-3">
        {[
          ["Mission", "Create community-led programs in education, health, and dignity."],
          ["Vision", "A future where every family can access support before hardship becomes crisis."],
          ["Values", "Transparency, respect, local leadership, and measurable action."],
        ].map(([title, text]) => (
          <article className="card" key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section className="section pt-0">
        <div className="wide-panel">
          <h2>How we work</h2>
          <p>
            We listen first, partner with local volunteers, run small but
            regular activities, and report outcomes in simple language. This
            keeps the work accountable and easy for supporters to follow.
          </p>
        </div>
      </section>
    </main>
  );
}
