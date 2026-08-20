import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women Empowerment Program",
  description:
    "SurVijay Foundation women empowerment program for skills, financial literacy, confidence-building, and community leadership.",
};

export default function WomenEmpowermentProgramPage() {
  return (
    <main>
      <section className="page-hero page-hero-empowerment">
        <p className="eyebrow">Program</p>
        <h1>Women empowerment through skills and confidence.</h1>
        <p>
          A program page for workshops, self-help groups, financial literacy,
          and leadership activities for women and adolescent girls.
        </p>
      </section>
      <section className="section grid gap-8 lg:grid-cols-2">
        <div className="wide-panel">
          <h2>Key activities</h2>
          <ul className="clean-list">
            <li>Skill-building sessions and peer learning groups.</li>
            <li>Financial literacy and rights awareness workshops.</li>
            <li>Confidence-building activities for young women.</li>
          </ul>
        </div>
        <div className="card">
          <h2>Expected outcomes</h2>
          <ul className="clean-list">
            <li>Greater confidence in daily decision-making.</li>
            <li>Improved awareness of financial and social resources.</li>
            <li>More participation in community leadership.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
