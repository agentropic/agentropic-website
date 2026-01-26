import type { Metadata } from "next";
import Crates from "./crates-content";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.agentropic.org/crates",
  },
};

export default function CratesPage() {
  return <Crates />;
}