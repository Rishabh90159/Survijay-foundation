import type { Metadata } from "next";
import { GalleryPageClient } from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View moments from Survijay Foundation's focus on education, community welfare, social support, and participation.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
