import type { Metadata } from "next";
import { workImages } from "../foundationData";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Survijay Foundation's work in education support, community welfare, social support, and awareness.",
};

const educationPoints = [
  [
    "Learning Support",
    "Encouraging children and young people to continue learning.",
  ],
  [
    "Educational Awareness",
    "Supporting awareness around the importance of education and learning opportunities.",
  ],
  [
    "Continued Learning",
    "Encouraging participation in education and opportunities for personal development.",
  ],
];

const communityPoints = [
  [
    "Family & Community Support",
    "Encouraging community-focused assistance where support may be needed.",
  ],
  [
    "Social Participation",
    "Creating opportunities for people to participate in positive community activities.",
  ],
  [
    "Community Connections",
    "Supporting stronger relationships and cooperation within communities.",
  ],
];

const welfareRows = [
  [
    "Practical Support",
    "Focusing on community needs and areas where responsible support can contribute.",
  ],
  [
    "Local Engagement",
    "Encouraging communication and participation within local communities.",
  ],
  [
    "Stronger Communities",
    "Supporting initiatives that encourage cooperation, dignity and social well-being.",
  ],
];

const awarenessSteps = [
  ["01", "Understand", "Listen to and understand community needs."],
  ["02", "Engage", "Encourage participation and communication."],
  ["03", "Support", "Contribute through responsible community initiatives."],
];

const approachSteps = [
  ["Listen", "Understanding people and local needs."],
  ["Connect", "Building communication and community participation."],
  ["Support", "Contributing through responsible initiatives."],
  ["Grow", "Learning from experience and strengthening future efforts."],
];

function WorkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21a8.8 8.8 0 1 0 0-17.6 8.8 8.8 0 0 0 0 17.6Z" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M12 3.2v3M12 17.8v3M3.2 12h3M17.8 12h3" />
    </svg>
  );
}

function FocusPoint({ title, text }: { title: string; text: string }) {
  return (
    <article className="work-focus-point">
      <WorkIcon />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default function ProgramsPage() {
  return (
    <main className="work-page">
      <section className="work-hero">
        <img src={workImages.hero} alt="Education and community support" />
        <div className="work-hero-overlay" />
        <div className="work-hero-content">
          <p className="eyebrow">Our Work</p>
          <h1>
            Working With Communities.
            <br />
            Creating Opportunities.
          </h1>
          <p>
            Our efforts focus on education, social support and community
            participation, with an aim to respond to local needs through
            responsible initiatives.
          </p>
          <span>Education • Community Welfare • Social Support</span>
          <a className="btn-primary" href="#focus-areas">
            Explore Our Focus Areas
          </a>
        </div>
      </section>

      <section className="work-section work-intro" id="focus-areas">
        <div className="work-intro-copy">
          <p className="eyebrow">What We Work Toward</p>
          <h2>Supporting People Through Education and Community Action</h2>
          <span className="section-underline" />
          <p>
            Survijay Foundation works with a focus on education, community
            welfare and social support. Our approach is centred around
            understanding local needs, encouraging participation and supporting
            initiatives that can create practical value for people and
            communities.
          </p>
          <p>
            We believe sustainable community development begins with access to
            learning, social awareness and people coming together to support one
            another.
          </p>
        </div>
        <div className="work-intro-collage">
          {workImages.introduction.map((image, index) => (
            <img
              src={image}
              alt={index === 0 ? "Education support" : "Community support"}
              loading="lazy"
              key={image}
            />
          ))}
        </div>
      </section>

      <section className="work-band education-work-section">
        <div className="work-split">
          <div className="work-rich-image">
            <img
              className="work-large-image"
              src={workImages.education[0]}
              alt="Students studying together"
            />
            <div>
              <img src={workImages.education[1]} alt="Children reading" loading="lazy" />
              <img src={workImages.education[2]} alt="Learning activity" loading="lazy" />
            </div>
            <span aria-hidden="true" />
          </div>
          <div className="work-copy">
            <p className="eyebrow">01 — Education</p>
            <h2>Education Support</h2>
            <h3>Encouraging Learning and Opportunity</h3>
            <p>
              Education can help build confidence, opportunity and stronger
              futures. Survijay Foundation aims to support education-focused
              initiatives that encourage learning, awareness and continued
              participation in education.
            </p>
            <div className="work-focus-list">
              {educationPoints.map(([title, text]) => (
                <FocusPoint title={title} text={text} key={title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="work-band community-work-section">
        <div className="work-split reverse">
          <div className="work-copy">
            <p className="eyebrow">02 — Community</p>
            <h2>Social & Community Support</h2>
            <h3>Standing With Communities Where Support Matters</h3>
            <p>
              Community support begins with understanding people and their
              needs. Survijay Foundation works toward encouraging responsible
              social support, stronger community connections and participation
              in local welfare initiatives.
            </p>
            <div className="work-focus-list">
              {communityPoints.map(([title, text]) => (
                <FocusPoint title={title} text={text} key={title} />
              ))}
            </div>
          </div>
          <div className="work-single-image">
            <img
              src={workImages.community[0]}
              alt="Community support and participation"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="work-band welfare-section">
        <div className="welfare-grid">
          <div>
            <p className="eyebrow">Community Welfare</p>
            <h2>Community Welfare</h2>
            <span className="section-underline" />
            <p>
              Strong communities are built when people feel supported,
              connected and able to participate. Our welfare focus is centred
              around practical local needs and responsible community engagement.
            </p>
            <div className="welfare-row-list">
              {welfareRows.map(([title, text]) => (
                <article key={title}>
                  <WorkIcon />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <img
            src={workImages.welfare}
            alt="Community welfare and local engagement"
            loading="lazy"
          />
        </div>
      </section>

      <section className="work-section awareness-section">
        <div className="center-heading">
          <p className="eyebrow">Awareness & Participation</p>
          <h2>Encouraging People to Take Part</h2>
          <span className="section-underline" />
          <p>
            Positive social change becomes stronger when people understand
            community needs and participate in solutions. Survijay Foundation
            aims to encourage awareness, communication and responsible
            participation.
          </p>
        </div>
        <div className="awareness-process">
          {awarenessSteps.map(([number, title, text]) => (
            <article key={title}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section approach-section">
        <div className="center-heading">
          <p className="eyebrow">Our Approach</p>
          <h2>How We Approach Our Work</h2>
          <span className="section-underline" />
        </div>
        <div className="approach-journey">
          {approachSteps.map(([title, text]) => (
            <article key={title}>
              <WorkIcon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-story-break">
        <img
          src={workImages.storyBreak}
          alt="Education, support and community participation"
          loading="lazy"
        />
        <div>
          <h2>Small opportunities can create meaningful possibilities.</h2>
          <p>
            Education, support and participation can help strengthen communities
            over time.
          </p>
        </div>
      </section>

      <section className="work-band work-gallery-section">
        <div className="center-heading">
          <p className="eyebrow">Moments From Our Work</p>
          <h2>Moments From Our Work</h2>
          <span className="section-underline" />
          <p>Education, community participation and social support.</p>
        </div>
        <div className="work-gallery-grid">
          {workImages.gallery.map((image) => (
            <figure key={image.src + image.caption}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="work-cta-section">
        <div>
          <p className="eyebrow">Get Involved</p>
          <h2>Be Part of Something Meaningful</h2>
          <p>
            Whether you want to volunteer, collaborate or learn more about our
            work, we&apos;d be glad to connect with you.
          </p>
        </div>
        <img
          src={workImages.community[1]}
          alt="Community participation"
          loading="lazy"
        />
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
