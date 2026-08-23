import type { Metadata } from "next";
import { getInvolvedOptions } from "../foundationData";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteer enquiry information for Survijay Foundation community initiatives.",
};

export default function VolunteerPage() {
  const volunteer = getInvolvedOptions.find((item) => item.title === "Volunteer");

  return (
    <main>
      <section className="page-hero page-hero-empowerment">
        <p className="eyebrow">Volunteer</p>
        <h1>Volunteer with Survijay Foundation</h1>
        <p>{volunteer?.text}</p>
      </section>
      <section className="section">
        <div className="wide-panel">
          <h2>Start with an enquiry</h2>
          <p>
            Volunteer roles and field activities will be listed once they are
            confirmed by the organisation. Please use the contact page to share
            your interest.
          </p>
          <a className="btn-primary mt-4" href="/contact">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
