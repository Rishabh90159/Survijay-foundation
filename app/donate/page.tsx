import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support SurVijay Foundation through offline donation details. No payment gateway is connected in this static version.",
};

export default function DonatePage() {
  return (
    <main>
      <section className="page-hero page-hero-community">
        <p className="eyebrow">Donate</p>
        <h1>Support the work without online payment integration.</h1>
        <p>
          This static version keeps donation instructions simple and offline.
          Payment gateway integration can be added later.
        </p>
      </section>
      <section className="section grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card">
          <h2>Donation details</h2>
          <p>
            Add verified bank account, UPI ID, QR code, and receipt contact
            details here once the NGO confirms them.
          </p>
          <div className="detail-list">
            <p><strong>Account name:</strong> SurVijay Foundation</p>
            <p><strong>Bank:</strong> To be updated</p>
            <p><strong>UPI:</strong> To be updated</p>
            <p><strong>Receipt email:</strong> donations@survijay.org</p>
          </div>
        </div>
        <div className="wide-panel">
          <h2>What your support can do</h2>
          <ul className="clean-list">
            <li>Provide notebooks and learning materials for children.</li>
            <li>Support transport and setup for community health sessions.</li>
            <li>Help run skill-building workshops for women and youth.</li>
            <li>Fund relief kits during urgent community needs.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
