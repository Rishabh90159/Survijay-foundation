import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Development",
  description:
    "A future focus-area page for verified Survijay Foundation community development details.",
};

export default function YouthLeadershipProgramPage() {
  return (
    <main>
      <section className="page-hero page-hero-empowerment">
        <p className="eyebrow">Focus Area</p>
        <h1>Community Development</h1>
        <p>
          This page is reserved for verified activity details, locations, dates,
          and photographs once provided by Survijay Foundation.
        </p>
      </section>
      <section className="section">
        <div className="wide-panel">
          <h2>Details will be added after verification</h2>
          <p>
            For now, please see the Our Work page for broad community welfare
            areas or contact the foundation for enquiries.
          </p>
          <a className="btn-primary mt-4" href="/programs">
            View Our Work
          </a>
        </div>
      </section>
    </main>
  );
}
