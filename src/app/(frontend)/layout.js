import { SanityLive } from "@/sanity/lib/live";

export const metadata = {
  title: "Minimodels",
  description: "Minimodels",
};

export default function FrontendLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
