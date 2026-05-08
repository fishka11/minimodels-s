// src/app/layout.js
import { SanityLive } from "@/sanity/lib/live";
import { openSans } from "@/lib/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={openSans.className}>
      <body>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
