import type { Metadata } from "next";
import { GetInvolvedPageClient } from "./GetInvolvedPageClient";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Get involved with Survijay Foundation through volunteering, collaboration, responsible support, or general enquiries.",
};

export default function GetInvolvedPage() {
  return <GetInvolvedPageClient />;
}
