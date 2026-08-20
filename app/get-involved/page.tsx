import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Get involved with SurVijay Foundation through volunteering, offline donations, CSR partnerships, sponsorships, and community drives.",
};

export default function GetInvolvedPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Get involved</p>
        <h1>Choose the way you want to support the community.</h1>
        <p>
          Visitors can quickly understand the main support paths: volunteer
          time, donate offline, sponsor a program, or partner through CSR.
        </p>
      </section>
      <section className="section grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["Volunteer", "/volunteer", "Join teaching, field events, awareness sessions, documentation, and outreach."],
          ["Donate Offline", "/donate", "Use verified bank, UPI, or receipt contact details once confirmed by the NGO."],
          ["Partner", "/contact", "Collaborate for CSR, workplace giving, program sponsorship, or field campaigns."],
          ["Share", "/stories", "Help community stories reach supporters, volunteers, and local partners."],
        ].map(([title, href, text]) => (
          <article className="card" key={title}>
            <div className="accent-bar" />
            <h2>{title}</h2>
            <p>{text}</p>
            <Link href={href}>Continue</Link>
          </article>
        ))}
      </section>
      <section className="section pt-0">
        <div className="wide-panel">
          <h2>For corporate and institutional partners</h2>
          <p>
            This page can later include CSR documents, partnership forms, past
            collaborator logos, sponsorship slabs, and downloadable proposals.
          </p>
        </div>
      </section>
    </main>
  );
}
