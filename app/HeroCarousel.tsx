"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { heroSlides } from "./foundationData";

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="home-hero-media"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="home-hero-slides" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <img
            className={index === activeSlide ? "active" : ""}
            src={slide.src}
            alt=""
            style={
              {
                "--desktop-position": slide.desktopPosition,
                "--mobile-position": slide.mobilePosition,
            } as CSSProperties
            }
            key={slide.src}
          />
        ))}
      </div>
      <div className="home-hero-gradient" />
      <div className="hero-indicators" aria-label="Hero images">
        {heroSlides.map((slide, index) => (
          <button
            type="button"
            className={index === activeSlide ? "active" : ""}
            aria-label={`Show ${slide.alt}`}
            aria-pressed={index === activeSlide}
            onClick={() => setActiveSlide(index)}
            key={slide.src}
          />
        ))}
      </div>
    </div>
  );
}
