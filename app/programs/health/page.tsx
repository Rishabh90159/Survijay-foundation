import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Health Program",
  description:
    "SurVijay Foundation community health program for hygiene awareness, nutrition guidance, referral support, and health camps.",
};

export default function HealthProgramPage() {
  return (
    <main>
      <section className="page-hero page-hero-health">
        <p className="eyebrow">Program</p>
        <h1>Community health awareness and support.</h1>
        <p>
          This program helps families access practical health information,
          hygiene guidance, and local referral support.
        </p>
      </section>
      <section className="section grid gap-8 lg:grid-cols-2">
        <div className="wide-panel">
          <h2>Key activities</h2>
          <ul className="clean-list">
            <li>Health and hygiene awareness sessions.</li>
            <li>Nutrition guidance for families and children.</li>
            <li>Referral support through local healthcare networks.</li>
          </ul>
        </div>
        <div className="card">
          <h2>Expected outcomes</h2>
          <ul className="clean-list">
            <li>Improved awareness around preventable health issues.</li>
            <li>More families connected to timely guidance.</li>
            <li>Cleaner, safer community practices.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
