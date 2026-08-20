import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparency and Legal",
  description:
    "SurVijay Foundation transparency page for registration details, reports, policies, donation records, and legal documents.",
};

export default function TransparencyPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Transparency</p>
        <h1>Trust grows when documents and updates are easy to find.</h1>
        <p>
          This page is prepared for NGO registration details, annual reports,
          certificates, donation policies, and compliance updates.
        </p>
      </section>
      <section className="section grid gap-5 md:grid-cols-2">
        {[
          ["Registration Details", "Registration number, date, governing body, and address can be added here."],
          ["Tax Exemption", "80G, 12A, CSR, or FCRA information can be shown if applicable."],
          ["Annual Reports", "Upload yearly PDF reports, audit summaries, and program highlights."],
          ["Policies", "Privacy, refund, child safety, volunteer conduct, and donation receipt policies."],
        ].map(([title, text]) => (
          <article className="card" key={title}>
            <div className="accent-bar" />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
