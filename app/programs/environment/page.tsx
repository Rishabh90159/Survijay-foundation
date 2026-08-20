import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environment Drives",
  description:
    "SurVijay Foundation environment program for clean-up drives, tree plantation, and awareness activities.",
};

export default function EnvironmentProgramPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Program</p>
        <h1>Environment drives for cleaner, safer public spaces.</h1>
        <p>
          This page can host plantation updates, clean-up activities, community
          awareness notes, and photo documentation.
        </p>
      </section>
      <section className="section grid gap-8 lg:grid-cols-2">
        <div className="wide-panel">
          <h2>Key activities</h2>
          <ul className="clean-list">
            <li>Tree plantation and care follow-ups.</li>
            <li>Community clean-up drives.</li>
            <li>Awareness activities around public cleanliness.</li>
          </ul>
        </div>
        <div className="card">
          <h2>Expected outcomes</h2>
          <ul className="clean-list">
            <li>Cleaner shared spaces for families and children.</li>
            <li>Higher local awareness around waste and greenery.</li>
            <li>Documented participation from volunteers and residents.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
