import type { Metadata } from "next";
import Docs from "./docs-content";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.agentropic.org/docs",
  },
};

export default function DocsPage() {
  return <Docs />;
}