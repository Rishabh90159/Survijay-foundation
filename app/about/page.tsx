import type { Metadata } from "next";
import {
  foundationConfig,
  organisationDetails,
  purposeContent,
} from "../foundationData";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Survijay Foundation, a registered social welfare organisation based in Rampur, Uttar Pradesh.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero page-hero-community">
        <p className="eyebrow">About Us</p>
        <h1>About Survijay Foundation</h1>
        <p>
          A registered organisation based in Rampur, Uttar Pradesh, operating
          in the area of social work and community welfare.
        </p>
      </section>
      <section className="section">
        <div className="split-layout">
          <div>
            <p className="eyebrow">Registered in 2022</p>
            <h2>Rooted in community welfare.</h2>
          </div>
          <div className="stacked-copy">
            <p>
              Survijay Foundation was incorporated on{" "}
              {foundationConfig.incorporationDate}. The foundation is listed as
              an active non-government company under RoC Kanpur.
            </p>
            <p>
              This website presents available public registration details and
              avoids unsupported claims until official activity records,
              photographs, and contact details are confirmed.
            </p>
          </div>
        </div>
      </section>
      <section className="soft-band" id="purpose">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {purposeContent.map((item) => (
            <article className="card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="wide-panel">
          <p className="eyebrow">Organisation Information</p>
          <h2>Verified details</h2>
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
