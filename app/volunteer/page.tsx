import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteer with SurVijay Foundation through teaching, event support, health awareness, content, and community outreach.",
};

export default function VolunteerPage() {
  return (
    <main>
      <section className="page-hero page-hero-empowerment">
        <p className="eyebrow">Volunteer</p>
        <h1>Give your time where it can be felt directly.</h1>
        <p>
          Volunteers can support teaching, events, awareness campaigns,
          photography, fundraising outreach, and operations.
        </p>
      </section>
      <section className="section grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <div className="wide-panel">
          <h2>Volunteer roles</h2>
          <ul className="clean-list">
            <li>Teach or mentor children for weekly learning support.</li>
            <li>Help organize health, hygiene, and awareness sessions.</li>
            <li>Support event logistics, field documentation, and reporting.</li>
            <li>Create content for stories, social media, and campaigns.</li>
          </ul>
        </div>
        <form className="form-card">
          <label>
            Full name
            <input placeholder="Your name" />
          </label>
          <label>
            Email or phone
            <input placeholder="you@example.com" />
          </label>
          <label>
            How would you like to help?
            <textarea placeholder="Tell us your interest" />
          </label>
          <button type="button">Submit interest</button>
        </form>
      </section>
    </main>
  );
}
