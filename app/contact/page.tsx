import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SurVijay Foundation for volunteering, donations, partnerships, program questions, and NGO support.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Start a conversation with the team.</h1>
        <p>
          Use this page for partnerships, volunteering, donations, field visits,
          and general questions.
        </p>
      </section>
      <section className="section grid gap-8 lg:grid-cols-2">
        <div className="wide-panel">
          <h2>Reach us</h2>
          <p>Email: hello@survijay.org</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: New Delhi, India</p>
        </div>
        <form className="form-card">
          <label>
            Name
            <input placeholder="Your name" />
          </label>
          <label>
            Email
            <input placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea placeholder="How can we help?" />
          </label>
          <button type="button">Send message</button>
        </form>
      </section>
    </main>
  );
}
