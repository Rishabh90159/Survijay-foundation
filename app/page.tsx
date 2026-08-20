const programs = [
  {
    title: "Learning Support",
    href: "/programs/education",
    text: "After-school classes, mentoring, and school-readiness support for children who need extra attention.",
  },
  {
    title: "Community Health",
    href: "/programs/health",
    text: "Health awareness camps, hygiene sessions, and referral support for families in underserved communities.",
  },
  {
    title: "Women Empowerment",
    href: "/programs/women-empowerment",
    text: "Skill-building circles, financial literacy sessions, and confidence programs for women and adolescent girls.",
  },
];

const stats = [
  ["4,800+", "people reached"],
  ["32", "community drives"],
  ["18", "learning groups"],
  ["120+", "active volunteers"],
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <img
          src="/images/community-hero.png"
          alt="Volunteers teaching children in a community courtyard"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-pill">
              Education, health, and dignity for every community
            </p>
            <h1 className="hero-title">
              Helping people build safer, stronger futures.
            </h1>
            <p className="hero-text">
              SurVijay Foundation partners with families, volunteers, and local
              leaders to create practical programs that improve learning,
              wellbeing, and opportunity.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="/volunteer">
                Become a volunteer
              </a>
              <a className="btn-secondary" href="/programs">
                Explore our work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="stats-grid">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span className="text-sm text-white/78">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Our focus</p>
          <h2>Programs designed around real community needs.</h2>
          <p>
            Each initiative is simple to understand, easy to participate in,
            and measured by visible outcomes.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((program) => (
            <article className="card" key={program.title}>
              <div className="accent-bar" />
              <h3>{program.title}</h3>
              <p>{program.text}</p>
              <a href={program.href}>Learn more</a>
            </article>
          ))}
        </div>
      </section>

      <section className="soft-band">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Why trust us</p>
            <h2>
              Clear work, local leadership, transparent reporting.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[  
              "Program updates shared regularly",
              "Offline donation details, no payment gateway for now",
              "Volunteer-friendly activities and onboarding",
              "Impact stories written in plain language",
            ].map((item) => (
              <div className="trust-item" key={item}>
                <span aria-hidden="true">+</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section route-band">
        <div>
          <p className="eyebrow">Complete site map</p>
          <h2>Every key NGO page is ready to grow with real content.</h2>
        </div>
        <div className="route-list">
          {[
            ["About", "/about"],
            ["Programs", "/programs"],
            ["Impact", "/impact"],
            ["Stories", "/stories"],
            ["Gallery", "/gallery"],
            ["Get Involved", "/get-involved"],
            ["Volunteer", "/volunteer"],
            ["Donate", "/donate"],
            ["Transparency", "/transparency"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="section grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Featured story</p>
          <h2>Small support can change the rhythm of a family.</h2>
          <p>
            When children receive steady learning help and parents know where to
            find health support, confidence grows at home. Our stories page
            highlights these small, practical changes.
          </p>
        </div>
        <div className="quote-panel">
          <p>
            "The classes helped my daughter read with confidence, and the
            volunteer team guided us with patience."
          </p>
          <span>Parent from a community learning group</span>
        </div>
      </section>
    </main>
  );
}
