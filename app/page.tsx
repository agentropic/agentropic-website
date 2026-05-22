import type { Metadata } from "next";
import Home from "./home-content";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.zeroicai.org/",
  },
};

export default function HomePage() {
  return <Home />;
}