import type { Metadata } from "next";
import { organisationDetails } from "../foundationData";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "Verified registration details and future transparency information for Survijay Foundation.",
};

export default function TransparencyPage() {
  return (
    <main>
      <section className="page-hero page-hero-community">
        <p className="eyebrow">Transparency</p>
        <h1>Trust begins with verified information.</h1>
        <p>
          This page presents available public registration details. Additional
          reports or policy documents can be added when supplied by the
          organisation.
        </p>
      </section>
      <section className="section">
        <div className="wide-panel">
          <h2>Organisation details</h2>
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
