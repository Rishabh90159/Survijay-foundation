import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education and Learning Support",
  description:
    "SurVijay Foundation education program for reading support, mentoring, homework help, and school-readiness activities.",
};

export default function EducationProgramPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Program</p>
        <h1>Education and learning support for children.</h1>
        <p>
          A focused program page for reading clubs, bridge learning, mentoring,
          school materials, and parent engagement.
        </p>
      </section>
      <ProgramDetails
        outcomes={["Better reading confidence", "Regular homework support", "School-readiness for younger children"]}
        activities={["Weekly learning circles", "Volunteer mentoring", "Notebook and material distribution"]}
      />
    </main>
  );
}

function ProgramDetails({
  outcomes,
  activities,
}: {
  outcomes: string[];
  activities: string[];
}) {
  return (
    <section className="section grid gap-8 lg:grid-cols-2">
      <div className="wide-panel">
        <h2>Key activities</h2>
        <ul className="clean-list">
          {activities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h2>Expected outcomes</h2>
        <ul className="clean-list">
          {outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
