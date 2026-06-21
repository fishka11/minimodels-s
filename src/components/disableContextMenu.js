"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DisableContextMenu() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/studio")) return;

    const handler = (e) => {
      let el = e.target;

      // 1) Sprawdzamy <img> lub background-image na elemencie lub jego rodzicach
      const hasProtectedImage = () => {
        while (el && el !== document.body) {
          // <img>
          if (el.tagName?.toLowerCase() === "img") return true;

          // background-image
          const bg = window
            .getComputedStyle(el)
            .getPropertyValue("background-image");
          if (bg && bg !== "none") return true;

          el = el.parentElement;
        }
        return false;
      };

      if (hasProtectedImage()) {
        e.preventDefault();
        alert(
          "ZAKAZ KOPIOWANIA. WSZYSTKIE PRAWA ZASTRZEZONE. MINIMODELS.COM.PL",
        );
      }
    };

    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, [pathname]);

  return null;
}
