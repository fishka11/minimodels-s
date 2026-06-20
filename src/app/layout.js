// src/app/layout.js
// import { SanityLive } from "@/sanity/lib/live";
import { openSans } from "@/lib/fonts";
import DisableContextMenu from "@/components/disableContextMenu";

export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
      className={`${openSans.className} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body>
        <DisableContextMenu />
        {children}
        {/* <SanityLive /> */}
      </body>
    </html>
  );
}
