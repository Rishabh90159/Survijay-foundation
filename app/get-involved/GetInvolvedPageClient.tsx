"use client";

import { FormEvent, useRef, useState } from "react";
import {
  involvementImages,
  involvementOptions,
} from "../foundationData";

const volunteerAreas = [
  "Education Support",
  "Community Outreach",
  "Awareness Activities",
  "Event Coordination",
  "Content & Communication",
  "General Volunteering",
];

const supportOptions = [
  [
    "Share Awareness",
    "Help more people learn about community and education initiatives.",
  ],
  [
    "Contribute Skills",
    "Offer professional or practical skills where they may be useful.",
  ],
  [
    "Support Resources",
    "Connect with the foundation regarding useful educational or community resources.",
  ],
  [
    "Connect & Participate",
    "Stay involved and participate in suitable community activities.",
  ],
];

const whyParticipate = [
  [
    "Support Learning",
    "Participation can help create more opportunities around education and awareness.",
  ],
  [
    "Strengthen Community Connections",
    "Community participation can bring people together around shared needs.",
  ],
  [
    "Contribute Your Skills",
    "Time, experience and practical skills can support responsible initiatives.",
  ],
];

const processSteps = [
  "Choose How You Want to Help",
  "Send Your Details",
  "Connect With Our Team",
  "Explore a Suitable Opportunity",
];

const interestOptions = [
  "Volunteer",
  "Partner With Survijay Foundation",
  "Support an Initiative",
  "Offer Skills / Resources",
  "General Enquiry",
];

const areaOptions = [
  "Education Support",
  "Community Welfare",
  "Social Support",
  "Awareness & Participation",
  "Not Sure Yet",
];

type Errors = Partial<Record<"name" | "phone" | "interest" | "message", string>>;

function MiniIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21a8.8 8.8 0 1 0 0-17.6 8.8 8.8 0 0 0 0 17.6Z" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M12 3.2v3M12 17.8v3M3.2 12h3M17.8 12h3" />
    </svg>
  );
}

export function GetInvolvedPageClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [interest, setInterest] = useState("");
  const [area, setArea] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  function selectInterest(value: string) {
    setInterest(value);
    setStatus("");
    setErrors({});
    window.setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};

    if (!String(form.get("name") || "").trim()) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!String(form.get("phone") || "").trim()) {
      nextErrors.phone = "Please enter your phone number.";
    }

    if (!interest) {
      nextErrors.interest = "Please choose how you want to get involved.";
    }

    if (!String(form.get("message") || "").trim()) {
      nextErrors.message = "Please add a short message.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStatus(
        "Thank you for sharing your interest. The foundation can review and follow up through its configured contact channel.",
      );
    }
  }

  return (
    <main className="involved-page">
      <section className="involved-hero">
        <img src={involvementImages.hero} alt="Community participation and support" />
        <div className="involved-hero-overlay" />
        <div className="involved-hero-content">
          <p className="eyebrow">Get Involved</p>
          <h1>Be Part of Something Meaningful.</h1>
          <p>
            Volunteer, collaborate or connect with Survijay Foundation to
            support education, community welfare and social participation.
          </p>
          <div>
            <a className="btn-primary" href="#ways-to-help">
              Choose How to Get Involved
            </a>
            <a className="btn-secondary hero-outline" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="involved-section involved-intro">
        <div>
          <p className="eyebrow">Connect With Us</p>
          <h2>Together, Communities Grow Stronger</h2>
          <span className="section-underline" />
          <p>
            Positive community work becomes stronger when people participate.
            Whether you want to contribute your time, skills, ideas or support,
            Survijay Foundation welcomes people who want to engage responsibly
            with education and community-focused initiatives.
          </p>
          <p>
            You do not need to make a financial contribution to get involved.
            Time, collaboration, awareness and participation can also play an
            important role.
          </p>
        </div>
        <img
          src={involvementImages.intro}
          alt="Community and education participation"
          loading="lazy"
        />
      </section>

      <section className="involved-band involved-options-section" id="ways-to-help">
        <div className="involved-section-inner">
          <div className="center-heading">
            <p className="eyebrow">Ways to Get Involved</p>
            <h2>Ways to Get Involved</h2>
            <span className="section-underline" />
          </div>
          <div className="involved-option-grid">
            {involvementOptions.map((option) => (
              <article key={option.title}>
                <MiniIcon />
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <button type="button" onClick={() => selectInterest(option.value)}>
                  {option.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="involved-section involved-split volunteer-section">
        <div className="involved-image-stack">
          <img
            src={involvementImages.volunteer}
            alt="Education support and volunteering"
            loading="lazy"
          />
        </div>
        <div>
          <p className="eyebrow">Volunteer</p>
          <h2>Volunteer With Survijay Foundation</h2>
          <h3>Your Time and Skills Can Matter</h3>
          <p>
            Volunteering is one way to contribute directly to community
            initiatives. Depending on upcoming activities, volunteers may help
            with education support, awareness, coordination and community
            engagement.
          </p>
          <div className="involved-chip-grid">
            {volunteerAreas.map((item) => (
              <span key={item}>
                <MiniIcon />
                {item}
              </span>
            ))}
          </div>
          <button type="button" className="btn-primary" onClick={() => selectInterest("Volunteer")}>
            I&apos;m Interested in Volunteering
          </button>
        </div>
      </section>

      <section className="involved-band">
        <div className="involved-section involved-split reverse">
          <img
            src={involvementImages.partner}
            alt="Education and community collaboration"
            loading="lazy"
          />
          <div>
            <p className="eyebrow">Collaboration</p>
            <h2>Partner With Us</h2>
            <p>
              Survijay Foundation welcomes conversations with individuals,
              organisations, educational institutions and community groups
              interested in responsible collaboration.
            </p>
            <p>
              Partnerships can help bring together ideas, resources, knowledge
              and participation around education and community welfare.
            </p>
            <div className="involved-chip-grid compact">
              {[
                "Education Initiatives",
                "Community Awareness",
                "Local Outreach",
                "Skill-Based Support",
                "Resource Support",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <button
              type="button"
              className="btn-primary"
              onClick={() => selectInterest("Partner With Survijay Foundation")}
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      <section className="involved-section support-section">
        <div>
          <p className="eyebrow">Support</p>
          <h2>Support Our Work</h2>
          <span className="section-underline" />
          <p>
            There are many ways to support community initiatives. You can help
            by contributing useful resources, sharing awareness, offering
            professional skills or connecting with the foundation to understand
            current needs.
          </p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => selectInterest("Support an Initiative")}
          >
            Ask How You Can Support
          </button>
        </div>
        <div className="support-option-grid">
          {supportOptions.map(([title, text]) => (
            <article key={title}>
              <MiniIcon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="involved-band why-participate-section">
        <div className="involved-section-inner">
          <div className="center-heading">
            <p className="eyebrow">Why Participate</p>
            <h2>Why Get Involved?</h2>
            <span className="section-underline" />
          </div>
          <div className="why-participate-grid">
            {whyParticipate.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="involved-section process-section">
        <div className="center-heading">
          <p className="eyebrow">How It Works</p>
          <h2>A Simple Way to Start</h2>
          <span className="section-underline" />
        </div>
        <div className="involved-process">
          {processSteps.map((step, index) => (
            <article key={step}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="involved-band form-section">
        <div className="involved-form-layout">
          <div>
            <p className="eyebrow">Let&apos;s Connect</p>
            <h2>Let&apos;s Connect</h2>
            <span className="section-underline" />
            <p>
              Tell us how you&apos;d like to get involved and we&apos;ll use
              your enquiry to understand your interest.
            </p>
            <img
              src={involvementImages.support}
              alt="Education and community support"
              loading="lazy"
            />
          </div>
          <form
            className="form-card involved-form"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
          >
            <label>
              Full Name *
              <input name="name" aria-describedby={errors.name ? "name-error" : undefined} />
              {errors.name && <span id="name-error">{errors.name}</span>}
            </label>
            <label>
              Phone Number *
              <input
                name="phone"
                type="tel"
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && <span id="phone-error">{errors.phone}</span>}
            </label>
            <label>
              Email
              <input name="email" type="email" />
            </label>
            <label>
              I Want To *
              <select
                name="interest"
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
                aria-describedby={errors.interest ? "interest-error" : undefined}
              >
                <option value="">Select an option</option>
                {interestOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.interest && <span id="interest-error">{errors.interest}</span>}
            </label>
            <label>
              Area of Interest
              <select
                name="area"
                value={area}
                onChange={(event) => setArea(event.target.value)}
              >
                <option value="">Select an option</option>
                {areaOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Message *
              <textarea
                name="message"
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && <span id="message-error">{errors.message}</span>}
            </label>
            <button type="submit">Submit Interest</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </section>

      <section className="involved-final-cta">
        <img src={involvementImages.finalCta} alt="Community participation" loading="lazy" />
        <div>
          <p className="eyebrow">Ready</p>
          <h2>Ready to Get Involved?</h2>
          <p>
            Start with a conversation. Tell us how you&apos;d like to
            contribute and explore where your time, skills or support may be
            useful.
          </p>
          <div>
            <button
              type="button"
              className="btn-primary"
              onClick={() => selectInterest("General Enquiry")}
            >
              Share Your Interest
            </button>
            <a className="btn-secondary hero-outline" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
