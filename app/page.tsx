import {
  focusAreas,
  foundationConfig,
  foundationImages,
  getInvolvedOptions,
  organisationDetails,
  purposeContent,
  workAreas,
} from "./foundationData";

const trustFacts = [
  ["Registered Organisation", foundationConfig.classification],
  ["Established", foundationConfig.establishedYear],
  ["Location", foundationConfig.location],
  ["Status", foundationConfig.status],
];

export default function Home() {
  return (
    <main>
      <section className="hero-section ngo-hero">
        <img
          src={foundationImages.hero}
          alt="Community welfare visual for Survijay Foundation"
          className="hero-image is-visible"
        />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-pill">SURVIJAY FOUNDATION</p>
            <h1 className="hero-title">
              Together, We Can Build Stronger Communities.
            </h1>
            <p className="hero-text">
              Survijay Foundation is a social welfare organisation based in
              Rampur, Uttar Pradesh, working toward community support and
              meaningful social initiatives.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#our-work">
                Explore Our Work
              </a>
              <a className="btn-secondary" href="#get-involved">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Verified organisation facts">
        <div className="trust-strip-grid">
          {trustFacts.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="split-layout">
          <div>
            <p className="eyebrow">About Us</p>
            <h2>About Survijay Foundation</h2>
          </div>
          <div className="stacked-copy">
            <p>
              Survijay Foundation is a registered organisation based in Rampur,
              Uttar Pradesh. Incorporated in 2022, the foundation operates in
              the area of social work and community welfare.
            </p>
            <p>
              Our aim is to support meaningful social initiatives and contribute
              toward stronger, more supported communities.
            </p>
            <dl className="info-list compact">
              <div>
                <dt>Founded</dt>
                <dd>{foundationConfig.incorporationDate}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{foundationConfig.location}</dd>
              </div>
              <div>
                <dt>CIN</dt>
                <dd>{foundationConfig.cin}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{foundationConfig.status}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="soft-band">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <p className="eyebrow">Our Purpose</p>
            <h2>Guided by responsible community welfare.</h2>
            <p>
              The foundation&apos;s work is presented with clear, conservative
              information while formal program records and activity details are
              documented.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {purposeContent.map((item) => (
              <article className="card" key={item.title}>
                <div className="accent-bar" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="our-work">
        <div className="section-heading">
          <p className="eyebrow">Our Focus Areas</p>
          <h2>Broad areas aligned with community welfare.</h2>
          <p>
            The following areas are intentionally broad until confirmed
            Survijay Foundation programs and field records are provided.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article className="card" key={area.title}>
              <div className="accent-bar" />
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-heading">
          <p className="eyebrow">Our Work</p>
          <h2>Verified initiatives will be documented with care.</h2>
          <p>
            Program updates will include confirmed activity details, locations,
            dates, and photographs as official records become available.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {workAreas.map((work) => (
            <article className="card" key={work.title}>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">Moments From Our Work</p>
          <h2>Community welfare in focus.</h2>
          <p>
            Verified field photographs can be published here with captions,
            dates, and locations as they are shared by the foundation.
          </p>
        </div>
        <div className="gallery-grid feature-gallery">
          {foundationImages.gallery.map((image) => (
            <article className="gallery-tile" key={image.caption}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <h3>{image.caption}</h3>
              {image.location && <p>{image.location}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="soft-band" id="get-involved">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <p className="eyebrow">Get Involved</p>
            <h2>Be Part of the Change</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {getInvolvedOptions.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <a className="btn-primary mt-6" href="/contact">
            Get Involved
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Our Leadership</p>
          <h2>Directors</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {foundationConfig.directors.map((director) => (
            <article className="leader-card" key={director.name}>
              <div className="leader-avatar" aria-hidden="true">
                {director.name
                  .split(" ")
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <h3>{director.name}</h3>
                <p>{director.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="wide-panel">
          <p className="eyebrow">Organisation Information</p>
          <h2>Verified public registration details</h2>
          <dl className="info-list">
            {organisationDetails.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
