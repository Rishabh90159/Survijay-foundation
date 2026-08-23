import type { Metadata } from "next";
import { foundationImages } from "../foundationData";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A photo gallery structure for Survijay Foundation community welfare photographs.",
};

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero page-hero-community">
        <p className="eyebrow">Gallery</p>
        <h1>Moments From Our Work</h1>
        <p>
          This gallery is structured for real activity photographs, captions,
          locations, and dates from Survijay Foundation.
        </p>
      </section>
      <section className="section gallery-grid feature-gallery">
        {foundationImages.gallery.map((image) => (
          <article className="gallery-tile" key={image.caption}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <h2>{image.caption}</h2>
            {image.location && <p>{image.location}</p>}
          </article>
        ))}
      </section>
    </main>
  );
}
