import type { Metadata } from "next";
import { GetInvolvedPageClient } from "./GetInvolvedPageClient";

export const metadata: Metadata = {
  title: "Get Involved With Survijay Foundation",
  description:
    "Volunteer, collaborate or connect with Survijay Foundation to support education, community welfare and social participation in Rampur.",
  keywords: [
    "volunteer Survijay Foundation",
    "get involved NGO Rampur",
    "support education NGO Rampur",
    "community welfare volunteer Uttar Pradesh",
  ],
  alternates: {
    canonical: "/get-involved",
  },
};

export default function GetInvolvedPage() {
  return <GetInvolvedPageClient />;
}
