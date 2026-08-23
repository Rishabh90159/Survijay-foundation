import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "A future space for verified Survijay Foundation updates and field notes.",
};

export default function StoriesPage() {
  return (
    <main>
      <section className="page-hero page-hero-community">
        <p className="eyebrow">Updates</p>
        <h1>Verified updates will be shared here.</h1>
        <p>
          This section is reserved for real field notes, photographs, dates, and
          activity details from Survijay Foundation.
        </p>
      </section>
      <section className="section">
        <div className="wide-panel">
          <h2>No public updates have been added yet</h2>
          <p>
            Once official updates are provided, this page can help visitors
            follow the foundation&apos;s work in a clear and transparent way.
          </p>
        </div>
      </section>
    </main>
  );
}
