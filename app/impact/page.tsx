import type { Metadata } from "next";
import { organisationDetails } from "../foundationData";

export const metadata: Metadata = {
  title: "Organisation Information",
  description:
    "Verified public registration information for Survijay Foundation.",
};

export default function ImpactPage() {
  return (
    <main>
      <section className="page-hero page-hero-community">
        <p className="eyebrow">Organisation Information</p>
        <h1>Verified details before impact claims.</h1>
        <p>
          Impact figures, reports, and field stories can be added after
          verified records are provided by the organisation.
        </p>
      </section>
      <section className="section">
        <div className="wide-panel">
          <h2>Public registration details</h2>
          <dl className="info-list">
            {organisationDetails.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
