// src/components/languageSwitcher.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import placeHolderEn from "@/assets/images/btn-en.png";
import placeHolderPl from "@/assets/images/btn-pl.png";

export function LanguageSwitcher({ locale }) {
  const pathname = usePathname();
  const otherLocale = locale === "pl" ? "en" : "pl";
  const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <Link
      href={newPath}
      className="group"
      title={
        otherLocale === "pl"
          ? "Minimodels - Wersja polska"
          : "Minimodels - English version"
      }
    >
      {otherLocale === "pl" ? (
        <Image
          src={placeHolderPl}
          alt="Minimodels - Wersja polska"
          className="opacity-75 group-hover:opacity-100 transition-all duration-200 ease-in w-10 lg:w-12"
        />
      ) : (
        <Image
          src={placeHolderEn}
          alt="Minimodels - English version"
          className="opacity-75 group-hover:opacity-100 transition-all duration-200 ease-in w-10 lg:w-12"
        />
      )}
    </Link>
  );
}
