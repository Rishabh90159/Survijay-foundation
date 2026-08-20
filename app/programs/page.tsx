import type { Metadata } from "next";
import Link from "next/link";

const programs = [
  ["Learning Support", "/programs/education", "Bridge classes, reading clubs, mentoring, and school-readiness support for children."],
  ["Community Health", "/programs/health", "Awareness camps, hygiene education, nutrition guidance, and referral support."],
  ["Women Empowerment", "/programs/women-empowerment", "Skill sessions, financial literacy, self-help circles, and confidence-building workshops."],
  ["Relief and Essentials", "/programs/relief", "Food, clothing, learning materials, and emergency support during difficult periods."],
  ["Youth Leadership", "/programs/youth-leadership", "Volunteer training, career guidance, digital literacy, and civic participation."],
  ["Environment Drives", "/programs/environment", "Clean-up activities, tree plantation, and community awareness for safer public spaces."],
];

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore SurVijay Foundation programs in education, health, women empowerment, relief, youth leadership, and environment.",
};

export default function ProgramsPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Our work</p>
        <h1>Programs that turn support into visible outcomes.</h1>
        <p>
          The site is structured so every program can become its own SEO page as
          the NGO grows.
        </p>
      </section>
      <section className="section grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {programs.map(([title, href, text]) => (
          <article className="card" key={title}>
            <div className="accent-bar" />
            <h2>{title}</h2>
            <p>{text}</p>
            <Link href={href}>View program</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
