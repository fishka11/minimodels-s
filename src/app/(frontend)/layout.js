import { SanityLive } from "@/sanity/lib/live";
import { Header } from "@/components/header";

export const metadata = {
  title: "Minimodels",
  description: "Minimodels",
};

export default function FrontendLayout({ children }) {
  return (
    <section className="bg-white min-h-screen">
      <Header />
      {children}
      <SanityLive />
    </section>
  );
}
