import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Our Work",
  description:
    "Support information for Survijay Foundation. No online payment mechanism is connected.",
};

export default function DonatePage() {
  return (
    <main>
      <section className="page-hero page-hero-community">
        <p className="eyebrow">Support Our Work</p>
        <h1>Support enquiries are handled through contact.</h1>
        <p>
          This website does not collect donations or process payments. Verified
          support details can be added once provided by Survijay Foundation.
        </p>
      </section>
      <section className="section">
        <div className="wide-panel">
          <h2>No online payment is connected</h2>
          <p>
            Please do not send money through any unverified channel. For now,
            use the contact page to enquire about volunteering, collaboration,
            or support.
          </p>
          <a className="btn-primary mt-4" href="/contact">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
