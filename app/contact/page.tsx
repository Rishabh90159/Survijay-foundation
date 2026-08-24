import type { Metadata } from "next";
import { foundationConfig } from "../foundationData";

export const metadata: Metadata = {
  title: "Contact Survijay Foundation",
  description:
    "Contact Survijay Foundation in Rampur, Uttar Pradesh for volunteering, collaboration and social welfare enquiries.",
  keywords: [
    "Contact Survijay Foundation",
    "Survijay Foundation phone",
    "Survijay Foundation email",
    "NGO contact Rampur Uttar Pradesh",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const hasDirectContact = Boolean(
    foundationConfig.phone || foundationConfig.email || foundationConfig.whatsapp,
  );

  return (
    <main>
      <section className="page-hero page-hero-community">
        <p className="eyebrow">Contact</p>
        <h1>Get in Touch</h1>
        <p>
          Want to learn more about our work, volunteer, collaborate or support
          an initiative? We would be happy to hear from you.
        </p>
      </section>
      <section className="section grid gap-8 lg:grid-cols-2" id="contact-form">
        <div className="wide-panel">
          <h2>Registered Location</h2>
          <p>{foundationConfig.location}</p>
          <p>{foundationConfig.address}</p>
          {foundationConfig.mapsUrl && (
            <a className="btn-secondary mt-4" href={foundationConfig.mapsUrl}>
              Get Directions
            </a>
          )}
          {hasDirectContact && (
            <div className="detail-list">
              {foundationConfig.email && <p>Email: {foundationConfig.email}</p>}
              {foundationConfig.phone && <p>Phone: {foundationConfig.phone}</p>}
              {foundationConfig.whatsapp && (
                <p>WhatsApp: {foundationConfig.whatsapp}</p>
              )}
            </div>
          )}
        </div>
        <form className="form-card">
          <label>
            Full Name *
            <input name="name" required />
          </label>
          <label>
            Phone Number *
            <input name="phone" type="tel" required />
          </label>
          <label>
            Email
            <input name="email" type="email" />
          </label>
          <label>
            I&apos;m Interested In *
            <select name="interest" required>
              <option value="">Select an option</option>
              <option value="Volunteering">Volunteering</option>
              <option value="Partnership">Partnership</option>
              <option value="Supporting an Initiative">
                Supporting an Initiative
              </option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </label>
          <label>
            Message *
            <textarea name="message" required />
          </label>
          <button type="button">Send Enquiry</button>
          <p className="form-note">
            Thank you. Contact functionality will be connected with the
            organisation&apos;s official communication channel.
          </p>
        </form>
      </section>
    </main>
  );
}
