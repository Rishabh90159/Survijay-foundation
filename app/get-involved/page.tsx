import type { Metadata } from "next";
import { getInvolvedOptions } from "../foundationData";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Get involved with Survijay Foundation through volunteering, collaboration, or support enquiries.",
};

export default function GetInvolvedPage() {
  return (
    <main>
      <section className="page-hero page-hero-empowerment">
        <p className="eyebrow">Get Involved</p>
        <h1>Be Part of the Change</h1>
        <p>
          Connect with Survijay Foundation to explore volunteering,
          collaboration, or support opportunities.
        </p>
      </section>
      <section className="section grid gap-5 md:grid-cols-3">
        {getInvolvedOptions.map((item) => (
          <article className="card" key={item.title}>
            <div className="accent-bar" />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <a href="/contact">Contact Us</a>
          </article>
        ))}
      </section>
      <section className="section pt-0" id="contact-form">
        <div className="wide-panel">
          <h2>Support Our Work</h2>
          <p>
            No online payment or donation checkout is connected on this website.
            Please use the contact page for support enquiries until verified
            support details are provided by the organisation.
          </p>
          <a className="btn-primary mt-4" href="/contact">
            Get Involved
          </a>
        </div>
      </section>
    </main>
  );
}
