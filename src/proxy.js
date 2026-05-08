// src/proxy.js
import { NextResponse } from "next/server";
import { LOCALES } from "@/lib/locales";

const DEFAULT_LOCALE = "pl";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Pomiń pliki statyczne i wewnętrzne ścieżki Next.js
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/studio") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Sprawdź czy URL już zawiera locale
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Spróbuj odczytać preferowany język z nagłówka Accept-Language
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferredLocale = acceptLanguage
    .split(",")[0]
    .split("-")[0]
    .toLowerCase();
  const locale = LOCALES.includes(preferredLocale)
    ? preferredLocale
    : DEFAULT_LOCALE;

  // Przekieruj na URL z locale
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
