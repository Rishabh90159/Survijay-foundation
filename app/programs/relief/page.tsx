import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relief and Essentials Program",
  description:
    "SurVijay Foundation relief program for food, clothing, learning material, and urgent family support.",
};

export default function ReliefProgramPage() {
  return (
    <main>
      <section className="page-hero page-hero-health">
        <p className="eyebrow">Program</p>
        <h1>Relief and essentials during urgent community needs.</h1>
        <p>
          This page explains how essential kits, food support, clothing, and
          learning materials can be organized and reported.
        </p>
      </section>
      <section className="section grid gap-8 lg:grid-cols-2">
        <div className="wide-panel">
          <h2>Key activities</h2>
          <ul className="clean-list">
            <li>Essential kit preparation and distribution.</li>
            <li>Food, clothing, and learning material support.</li>
            <li>Urgent field response with local volunteers.</li>
          </ul>
        </div>
        <div className="card">
          <h2>Expected outcomes</h2>
          <ul className="clean-list">
            <li>Families receive support during difficult periods.</li>
            <li>Children continue learning with basic materials.</li>
            <li>Supporters can see where relief help is used.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
