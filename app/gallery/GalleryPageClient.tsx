"use client";

import { KeyboardEvent, useEffect, useMemo, useState } from "react";
import { galleryConfig } from "../foundationData";

type GalleryItem = (typeof galleryConfig.items)[number];

const INITIAL_VISIBLE_COUNT = 12;

export function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>([]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return galleryConfig.items;
    }

    return galleryConfig.items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const activeItem = activeIndex === null ? null : lightboxItems[activeIndex];

  function changeCategory(category: string) {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    setActiveIndex(null);
    setLightboxItems([]);
  }

  function openLightbox(item: GalleryItem, items: GalleryItem[]) {
    const nextIndex = items.findIndex((entry) => entry.id === item.id);
    setLightboxItems(items);
    setActiveIndex(nextIndex);
  }

  function closeLightbox() {
    setActiveIndex(null);
  }

  function showNext() {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % lightboxItems.length,
    );
  }

  function showPrevious() {
    setActiveIndex((current) =>
      current === null
        ? 0
        : (current - 1 + lightboxItems.length) % lightboxItems.length,
    );
  }

  function handleLightboxKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      showNext();
    }

    if (event.key === "ArrowLeft") {
      showPrevious();
    }
  }

  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [activeItem]);

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <img src={galleryConfig.hero} alt="Education and community participation" />
        <div className="gallery-hero-overlay" />
        <div className="gallery-hero-content">
          <p className="eyebrow">Gallery</p>
          <h1>Moments From Our Work</h1>
          <p>
            A visual glimpse into education, community participation and social
            support.
          </p>
          <span>
            Every image represents the spirit of learning, participation and
            community connection.
          </span>
        </div>
      </section>

      <section className="gallery-section-intro">
        <div>
          <p className="eyebrow">Stories Through Moments</p>
          <h2>Stories Through Moments</h2>
          <span className="section-underline" />
          <p>
            Survijay Foundation works around education, community welfare and
            social support. This gallery brings together moments that reflect
            learning, participation and community engagement.
          </p>
        </div>
        <div className="gallery-intro-collage" aria-hidden="true">
          {galleryConfig.intro.map((image) => (
            <img src={image} alt="" loading="lazy" key={image} />
          ))}
        </div>
      </section>

      <section className="gallery-filter-section" aria-label="Gallery categories">
        <div className="gallery-filter-bar">
          {galleryConfig.categories.map((category) => (
            <button
              type="button"
              className={activeCategory === category.value ? "active" : ""}
              aria-pressed={activeCategory === category.value}
              onClick={() => changeCategory(category.value)}
              key={category.value}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="gallery-featured-section">
        <div className="center-heading">
          <p className="eyebrow">Featured Moments</p>
          <h2>Featured Moments</h2>
          <span className="section-underline" />
        </div>
        <div className="gallery-featured-grid">
          {galleryConfig.featured.map((item) => (
            <button
              type="button"
              className="gallery-featured-card"
              onClick={() => openLightbox(item, galleryConfig.featured)}
              key={item.id}
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
              <span>{item.categoryLabel}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="gallery-main-section">
        {visibleItems.length > 0 ? (
          <>
            <div className="gallery-masonry-grid">
              {visibleItems.map((item) => (
                <button
                  type="button"
                  className="gallery-moment"
                  onClick={() => openLightbox(item, filteredItems)}
                  key={item.id}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span>{item.categoryLabel}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.categoryLabel}</p>
                  </div>
                </button>
              ))}
            </div>
            {visibleCount < filteredItems.length && (
              <button
                type="button"
                className="gallery-view-more"
                onClick={() => setVisibleCount((current) => current + 8)}
              >
                View More
              </button>
            )}
          </>
        ) : (
          <div className="gallery-empty-state">
            <p>No moments have been added to this category yet.</p>
            <button type="button" onClick={() => changeCategory("all")}>
              View All
            </button>
          </div>
        )}
      </section>

      <section className="gallery-story-strip">
        <img src={galleryConfig.story} alt="Learning and community support" loading="lazy" />
        <div>
          <h2>Every Moment Begins With Participation</h2>
          <p>
            Education and community support grow stronger when people come
            together, participate and share responsibility.
          </p>
        </div>
      </section>

      <section className="gallery-cta-section">
        <div>
          <p className="eyebrow">Get Involved</p>
          <h2>Want to Be Part of Our Work?</h2>
          <p>
            Connect with Survijay Foundation to volunteer, collaborate or learn
            more about upcoming community-focused initiatives.
          </p>
        </div>
        <div>
          <a className="btn-primary" href="/get-involved">
            Get Involved
          </a>
          <a className="btn-secondary hero-outline" href="/contact">
            Contact Us
          </a>
        </div>
      </section>

      {activeItem && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.title} preview`}
          tabIndex={-1}
          onKeyDown={handleLightboxKeyDown}
        >
          <button
            type="button"
            className="lightbox-backdrop"
            aria-label="Close image preview"
            onClick={closeLightbox}
          />
          <div className="lightbox-panel">
            <button
              type="button"
              className="lightbox-close"
              aria-label="Close image preview"
              onClick={closeLightbox}
              autoFocus
            >
              X
            </button>
            <button
              type="button"
              className="lightbox-nav previous"
              aria-label="Show previous image"
              onClick={showPrevious}
            >
              &lt;
            </button>
            <img src={activeItem.image} alt={activeItem.alt} />
            <button
              type="button"
              className="lightbox-nav next"
              aria-label="Show next image"
              onClick={showNext}
            >
              &gt;
            </button>
            <div>
              <span>{activeItem.categoryLabel}</span>
              <h2>{activeItem.title}</h2>
              <p>{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
