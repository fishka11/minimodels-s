"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DisableContextMenu() {
  const pathname = usePathname();

  useEffect(() => {
    // nie blokujemy w /studio
    if (pathname.startsWith("/studio")) return;

    const handler = (e) => {
      const target = e.target;

      // 1) Zwykłe <img>
      const isImg = target.tagName?.toLowerCase() === "img";

      // 2) Element z background-image
      const bgImage = window
        .getComputedStyle(target)
        .getPropertyValue("background-image");
      const hasBackgroundImage = bgImage && bgImage !== "none";

      if (isImg || hasBackgroundImage) {
        e.preventDefault();
        alert("Prawy przycisk myszy jest zablokowany na obrazkach");
      }
    };

    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, [pathname]);

  return null;
}
