import type { Metadata } from "next";
import {
  aboutImages,
  foundationConfig,
  organisationDetails,
  purposeContent,
} from "../foundationData";

export const metadata: Metadata = {
  title: "About Survijay Foundation",
  description:
    "Learn about Survijay Foundation, a registered social welfare organisation in Rampur, Uttar Pradesh, focused on education, community welfare and social support.",
  keywords: [
    "About Survijay Foundation",
    "Survijay Foundation Rampur",
    "registered NGO Rampur",
    "social welfare organisation Uttar Pradesh",
  ],
  alternates: {
    canonical: "/about",
  },
};

const highlights = [
  ["Established", foundationConfig.establishedYear],
  ["Based In", foundationConfig.location],
  ["Status", foundationConfig.status],
];

const aboutFocusAreas = [
  [
    "Education Support",
    "Encouraging learning opportunities, educational awareness and continued participation in education.",
  ],
  [
    "Community Welfare",
    "Supporting initiatives designed around practical community needs.",
  ],
  [
    "Social Support",
    "Helping strengthen connections between people, families and communities.",
  ],
  [
    "Awareness & Participation",
    "Encouraging people to take part in positive and responsible community initiatives.",
  ],
];

const storyTimeline = [
  ["2022", "Foundation incorporated"],
  ["Today", "Focused on education, welfare and community support"],
  ["Future", "Building stronger participation and community initiatives"],
];

const matterPoints = [
  [
    "Learning Creates Opportunity",
    "Access to learning can help people build confidence and future possibilities.",
  ],
  [
    "Support Strengthens Communities",
    "Practical social support can help individuals and families feel more connected.",
  ],
  [
    "Participation Creates Ownership",
    "Communities become stronger when people are encouraged to take part and contribute.",
  ],
];

const purposeIcons = ["target", "eye", "people"];

function LineIcon({ name }: { name: string }) {
  if (name === "eye") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z" />
        <path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4Z" />
      </svg>
    );
  }

  if (name === "people") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.4 11.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
        <path d="M15.9 10.7a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z" />
        <path d="M3.2 19.5c.5-3.2 2.4-5.3 5.2-5.3s4.7 2.1 5.2 5.3" />
        <path d="M13.6 14.4c3.1-.3 5.4 1.8 6 5.1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  );
}

function Initials({ name }: { name: string }) {
  return (
    <>
      {name
        .split(" ")
        .slice(0, 2)
        .map((part) => part[0])
        .join("")}
    </>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">About Us</p>
          <h1>About Survijay Foundation</h1>
          <p>
            Working to support education, community welfare and meaningful
            social participation in Rampur, Uttar Pradesh.
          </p>
          <span>Based in {foundationConfig.location}</span>
        </div>
        <img
          src="/images/banner-education.png"
          alt="Education and community interaction"
        />
      </section>

      <section className="about-section who-section">
        <div className="who-image-collage">
          <img className="who-large" src={aboutImages[0].src} alt={aboutImages[0].alt} />
          <img src={aboutImages[1].src} alt={aboutImages[1].alt} loading="lazy" />
          <img src={aboutImages[2].src} alt={aboutImages[2].alt} loading="lazy" />
        </div>
        <div className="who-copy">
          <p className="eyebrow">Who We Are</p>
          <h2>Who We Are</h2>
          <span className="section-underline" />
          <p>
            Survijay Foundation is a registered social welfare organisation
            based in Rampur, Uttar Pradesh. Incorporated on 06 July 2022, the
            foundation works with a focus on education, community welfare and
            social support.
          </p>
          <p>
            We believe meaningful change begins by understanding local needs
            and creating opportunities for people to learn, participate and
            receive support when it matters.
          </p>
          <p>
            Our aim is to contribute through responsible, community-focused
            initiatives that help build stronger and more supported communities.
          </p>
          <div className="about-highlight-grid">
            {highlights.map(([label, value]) => (
              <div key={label}>
                <LineIcon name="target" />
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band focus-story-band">
        <div className="about-section-inner">
          <div className="center-heading">
            <p className="eyebrow">Focus</p>
            <h2>What We Focus On</h2>
            <span className="section-underline" />
            <p>
              Our work is centred around education, social support and
              community participation.
            </p>
          </div>
          <div className="about-focus-grid">
            {aboutFocusAreas.map(([title, text], index) => (
              <article
                className={index % 2 === 0 ? "focus-card warm" : "focus-card"}
                key={title}
              >
                <LineIcon name={index === 0 ? "target" : index === 1 ? "people" : "eye"} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section story-section">
        <div className="story-copy">
          <p className="eyebrow">Our Story</p>
          <h2>Our Story</h2>
          <span className="section-underline" />
          <p>
            Survijay Foundation was established in 2022 with the intent to
            contribute toward social welfare and community support in a
            responsible and grounded way.
          </p>
          <p>
            As the foundation grows, its focus remains on understanding the
            needs of people and communities, particularly in areas connected to
            education, social support and local participation.
          </p>
          <p>
            We aim to grow through genuine engagement, collaboration and
            initiatives that create practical value over time.
          </p>
          <div className="about-timeline">
            {storyTimeline.map(([year, text]) => (
              <div key={year}>
                <strong>{year}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/images/carousel-empowerment.png"
          alt="Community participation and support"
          loading="lazy"
        />
      </section>

      <section className="about-band about-purpose-band" id="purpose">
        <div className="about-section-inner">
          <div className="center-heading">
            <p className="eyebrow">Our Purpose</p>
            <h2>Mission, Vision & Approach</h2>
            <span className="section-underline" />
          </div>
          <div className="about-purpose-grid">
            {purposeContent.map((item, index) => (
              <article className="about-purpose-card" key={item.title}>
                <div>
                  <LineIcon name={purposeIcons[index]} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-matters-section">
        <img
          src="/images/community-hero.png"
          alt="Education and community support activity"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">Why It Matters</p>
          <h2>Why Our Work Matters</h2>
          <span className="section-underline" />
          <p>
            Education and community support can influence confidence,
            opportunity and well-being. By focusing on practical needs and
            participation, Survijay Foundation aims to contribute to stronger
            local communities.
          </p>
          <div className="matter-point-list">
            {matterPoints.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-leadership-section">
        <div className="center-heading">
          <p className="eyebrow">Our Leadership</p>
          <h2>Our Leadership</h2>
          <span className="section-underline" />
          <p>
            Survijay Foundation is guided by its directors with a focus on
            responsible community welfare and long-term social participation.
          </p>
        </div>
        <div className="about-leadership-grid">
          {foundationConfig.directors.map((director) => (
            <article className="leader-card about-leader-card" key={director.name}>
              {director.photo ? (
                <img
                  className="leader-photo"
                  src={director.photo}
                  alt={`${director.name}, ${director.role}`}
                  loading="lazy"
                />
              ) : (
                <div className="leader-avatar" aria-hidden="true">
                  <Initials name={director.name} />
                </div>
              )}
              <div>
                <h3>{director.name}</h3>
                <p>{director.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band about-organisation-section">
        <div className="about-section-inner">
          <div className="center-heading">
            <p className="eyebrow">Registered Details</p>
            <h2>Organisation Information</h2>
            <span className="section-underline" />
            <p>Registered details of Survijay Foundation.</p>
          </div>
          <dl className="about-info-grid">
            {organisationDetails.map(([label, value]) => (
              <div
                className={label === "Registered Address" ? "address-row" : ""}
                key={label}
              >
                <LineIcon name="target" />
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="about-cta-section">
        <div>
          <p className="eyebrow">Connect</p>
          <h2>Be Part of Our Journey</h2>
          <p>
            Whether you want to volunteer, collaborate or learn more about our
            work, we&apos;d be happy to connect with you.
          </p>
        </div>
        <div>
          <a className="btn-primary" href="/get-involved">
            Get Involved
          </a>
          <a className="btn-secondary hero-outline" href="/contact">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
