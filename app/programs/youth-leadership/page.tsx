import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youth Leadership Program",
  description:
    "SurVijay Foundation youth leadership program for digital literacy, career guidance, volunteering, and civic participation.",
};

export default function YouthLeadershipProgramPage() {
  return (
    <main>
      <section className="page-hero page-hero-empowerment">
        <p className="eyebrow">Program</p>
        <h1>Youth leadership for confident local changemakers.</h1>
        <p>
          A page for volunteer training, digital literacy, career guidance, and
          youth-led community activities.
        </p>
      </section>
      <section className="section grid gap-8 lg:grid-cols-2">
        <div className="wide-panel">
          <h2>Key activities</h2>
          <ul className="clean-list">
            <li>Digital literacy and communication workshops.</li>
            <li>Career guidance and mentoring sessions.</li>
            <li>Youth volunteer teams for field activities.</li>
          </ul>
        </div>
        <div className="card">
          <h2>Expected outcomes</h2>
          <ul className="clean-list">
            <li>More youth prepared for study, work, and service.</li>
            <li>Stronger local volunteer leadership.</li>
            <li>Better confidence in communication and planning.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
