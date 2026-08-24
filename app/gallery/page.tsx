import type { Metadata } from "next";
import { GalleryPageClient } from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery | Moments From Our Work",
  description:
    "View moments connected to Survijay Foundation's focus on education, community welfare, social support and participation.",
  keywords: [
    "Survijay Foundation gallery",
    "NGO gallery Rampur",
    "education support photos",
    "community welfare photos Uttar Pradesh",
  ],
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
