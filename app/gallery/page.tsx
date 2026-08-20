import type { Metadata } from "next";

const galleryItems = [
  ["Learning circle", "Children attending reading and homework support."],
  ["Health camp", "Community members joining a hygiene awareness session."],
  ["Volunteer day", "Supporters helping with activity setup and outreach."],
  ["Women workshop", "Skill-building and confidence sessions for local women."],
  ["Relief drive", "Essential kits prepared for families during urgent needs."],
  ["Environment drive", "Local clean-up and plantation activities."],
];

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View SurVijay Foundation activity gallery for learning sessions, health camps, volunteer days, workshops, relief drives, and environment work.",
};

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Gallery</p>
        <h1>Photos and field moments help people trust the work.</h1>
        <p>
          The gallery is ready for real event photos. For now, these categories
          show how the content can be organized.
        </p>
      </section>
      <section className="section gallery-grid">
        {galleryItems.map(([title, text], index) => (
          <article className="gallery-tile" key={title}>
            <div className="gallery-image" />
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
