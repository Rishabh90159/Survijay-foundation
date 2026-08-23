import { HeroCarousel } from "./HeroCarousel";
import {
  aboutImages,
  communityFocusItems,
  educationFocusItems,
  focusAreas,
  foundationConfig,
  galleryImages,
  getInvolvedOptions,
  organisationDetails,
  purposeContent,
  workAreas,
} from "./foundationData";

const trustFacts = [
  ["Established", foundationConfig.establishedYear],
  ["Based In", "Rampur, U.P."],
  ["Organisation Status", foundationConfig.status],
  ["Registration", `CIN ${foundationConfig.cin}`],
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

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero" id="home">
        <HeroCarousel />
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="hero-kicker">Survijay Foundation</p>
            <h1>
              Supporting Education.
              <br />
              Strengthening Communities.
            </h1>
            <p>
              Survijay Foundation is a social welfare organisation based in
              Rampur, Uttar Pradesh, working to support people through
              education, community welfare and meaningful social support.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#our-work">
                Explore Our Work <span aria-hidden="true">&gt;</span>
              </a>
              <a className="btn-secondary hero-outline" href="#get-involved">
                Get Involved <span aria-hidden="true">&gt;</span>
              </a>
            </div>
          </div>

          <div className="hero-collage" aria-hidden="true">
            <span className="collage-dots" />
            <img className="hero-card hero-card-one" src={aboutImages[0].src} alt="" />
            <img className="hero-card hero-card-two" src={aboutImages[1].src} alt="" />
            <img className="hero-card hero-card-three" src={aboutImages[2].src} alt="" />
          </div>
        </div>
      </section>

      <section className="home-trust-strip" aria-label="Verified organisation facts">
        <div className="home-trust-grid">
          {trustFacts.map(([label, value]) => (
            <div className="home-trust-item" key={label}>
              <LineIcon name="target" />
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-about-section" id="about">
        <div className="about-editorial">
          <div className="about-copy">
            <p className="eyebrow">About Us</p>
            <h2>About Survijay Foundation</h2>
            <span className="section-underline" />
            <p>
              Survijay Foundation is a registered social welfare organisation
              based in Rampur, Uttar Pradesh. Incorporated on 06 July 2022, the
              foundation works toward community welfare with a focus on
              education and social support.
            </p>
            <p>
              Our focus is on understanding local needs and supporting
              initiatives that encourage learning, social participation and
              stronger communities.
            </p>
            <a className="btn-primary btn-deep" href="/about">
              Know More About Us <span aria-hidden="true">&gt;</span>
            </a>
          </div>

          <div className="about-collage" aria-label="Education and community support visuals">
            <img className="about-large" src={aboutImages[0].src} alt={aboutImages[0].alt} />
            <div>
              <img src={aboutImages[1].src} alt={aboutImages[1].alt} loading="lazy" />
              <img src={aboutImages[2].src} alt={aboutImages[2].alt} loading="lazy" />
            </div>
          </div>

          <aside className="org-panel">
            <h2>Organisation Information</h2>
            <dl>
              {organisationDetails.map(([label, value]) => (
                <div key={label}>
                  <LineIcon name="target" />
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="home-section purpose-section" id="purpose">
        <div className="center-heading">
          <p className="eyebrow">Our Purpose</p>
          <h2>Our Purpose</h2>
          <span className="section-underline" />
        </div>
        <div className="purpose-grid">
          {purposeContent.map((item, index) => (
            <article className="purpose-card" key={item.title}>
              <div className="purpose-icon">
                <LineIcon name={purposeIcons[index]} />
              </div>
              <h3>Our {item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section image-copy-section education-section">
        <div className="image-copy-grid">
          <img
            src="/images/carousel-education.png"
            alt="Students learning together"
            loading="lazy"
          />
          <div>
            <p className="eyebrow">Education Support</p>
            <h2>Helping Create Better Learning Opportunities</h2>
            <span className="section-underline" />
            <p>
              Education can create confidence, opportunity and stronger futures.
              Survijay Foundation supports education-focused initiatives aimed
              at encouraging learning and continued participation in education.
            </p>
            <div className="focus-chip-list">
              {educationFocusItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section image-copy-section community-section">
        <div className="image-copy-grid image-right">
          <div>
            <p className="eyebrow">Social & Community Support</p>
            <h2>Standing With Communities Where Support Matters</h2>
            <span className="section-underline" />
            <p>
              Alongside education, Survijay Foundation works toward community
              welfare and social support by understanding local needs and
              encouraging responsible, people-focused initiatives.
            </p>
            <div className="focus-chip-list">
              {communityFocusItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <img
            src="/images/banner-community.png"
            alt="Community welfare and social support"
            loading="lazy"
          />
        </div>
      </section>

      <section className="home-section focus-section">
        <div className="center-heading">
          <p className="eyebrow">Focus Areas</p>
          <h2>Broad Areas of Community Welfare</h2>
          <span className="section-underline" />
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section work-section" id="our-work">
        <div className="center-heading">
          <p className="eyebrow">Our Work</p>
          <h2>Our Work</h2>
          <span className="section-underline" />
          <p>Our efforts focus on education, social support and community participation.</p>
        </div>
        <div className="work-card-grid">
          {workAreas.map((work) => (
            <article className="work-image-card" key={work.title}>
              <img src={work.image} alt={work.title} loading="lazy" />
              <div>
                <span>{work.category}</span>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section gallery-section" id="gallery">
        <div className="center-heading">
          <p className="eyebrow">Gallery</p>
          <h2>Moments From Our Work</h2>
          <span className="section-underline" />
        </div>
        <div className="home-gallery-grid">
          {galleryImages.map((image) => (
            <figure key={image.src + image.caption}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="home-cta-section" id="get-involved">
        <div>
          <p className="eyebrow">Get Involved</p>
          <h2>Be Part of the Change</h2>
          <p>
            Connect with Survijay Foundation to volunteer, collaborate or learn
            more about our work.
          </p>
        </div>
        <div>
          <a className="btn-primary" href="/get-involved">
            Get Involved <span aria-hidden="true">&gt;</span>
          </a>
          <a className="btn-secondary hero-outline" href="#contact">
            Contact Us <span aria-hidden="true">&gt;</span>
          </a>
        </div>
      </section>

      <section className="home-section contact-section" id="contact">
        <div className="contact-grid">
          <div className="contact-info-panel">
            <p className="eyebrow">Contact</p>
            <h2>Contact Survijay Foundation</h2>
            <span className="section-underline" />
            <dl>
              <div>
                <dt>Location</dt>
                <dd>{foundationConfig.location}</dd>
              </div>
              <div>
                <dt>Registered Address</dt>
                <dd>{foundationConfig.address}</dd>
              </div>
              {foundationConfig.phone && (
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href={`tel:${foundationConfig.phone}`}>{foundationConfig.phone}</a>
                  </dd>
                </div>
              )}
              {foundationConfig.email && (
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${foundationConfig.email}`}>
                      {foundationConfig.email}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
          <form className="form-card home-contact-form">
            <label>
              Full Name
              <input name="name" />
            </label>
            <label>
              Phone Number
              <input name="phone" type="tel" />
            </label>
            <label>
              Email
              <input name="email" type="email" />
            </label>
            <label>
              Interested In
              <select name="interest">
                <option value="">Select an option</option>
                {getInvolvedOptions.map((option) => (
                  <option value={option.title} key={option.title}>
                    {option.title}
                  </option>
                ))}
                <option value="General Enquiry">General Enquiry</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" />
            </label>
            <button type="button">Send Enquiry</button>
          </form>
        </div>
      </section>

      <section className="home-section leadership-section">
        <div className="center-heading">
          <p className="eyebrow">Our Leadership</p>
          <h2>Directors</h2>
          <span className="section-underline" />
        </div>
        <div className="leadership-grid">
          {foundationConfig.directors.map((director) => (
            <article className="leader-card" key={director.name}>
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
    </main>
  );
}
