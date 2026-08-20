import Link from "next/link";

const programs = [
  {
    title: "Learning Support",
    text: "After-school classes, mentoring, and school-readiness support for children who need extra attention.",
  },
  {
    title: "Community Health",
    text: "Health awareness camps, hygiene sessions, and referral support for families in underserved communities.",
  },
  {
    title: "Women Empowerment",
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
      <section className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden bg-[#f6f1e8]">
        <img
          src="/images/community-hero.png"
          alt="Volunteers teaching children in a community courtyard"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/86 to-white/10" />
        <div className="mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#146c63] shadow-sm">
              Education, health, and dignity for every community
            </p>
            <h1 className="text-5xl font-bold leading-[1.03] text-[#132f3a] sm:text-6xl lg:text-7xl">
              Helping people build safer, stronger futures.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#34515b]">
              SurVijay Foundation partners with families, volunteers, and local
              leaders to create practical programs that improve learning,
              wellbeing, and opportunity.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/volunteer">
                Become a volunteer
              </Link>
              <Link className="btn-secondary" href="/programs">
                Explore our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#132f3a] px-5 py-8 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="border-l border-white/20 pl-4">
              <strong className="block text-3xl font-bold text-[#f2b84b]">
                {value}
              </strong>
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
              <Link href="/programs">Learn more</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eaf4f1] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Why trust us</p>
            <h2 className="text-4xl font-bold text-[#132f3a]">
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
