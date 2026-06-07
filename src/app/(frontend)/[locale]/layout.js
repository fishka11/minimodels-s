// src/app/[locale]/layout.js
import "../../globals.css";
import { Header } from "@/components/header";
import { notFound } from "next/navigation";
import { LOCALES } from "@/lib/locales";
import { Footer } from "@/components/footer";

// src/app/[locale]/layout.js
export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: {
      template: "%s",
      default: "MiniModels",
    },
    // Next.js automatycznie ustawia lang na podstawie tego pola
    alternates: {
      canonical: `/${locale}`,
      languages: {
        pl: "/pl",
        en: "/en",
      },
    },
  };
}

export default async function FrontendLayout({ children, params }) {
  const { locale } = await params;

  if (!LOCALES.includes(locale)) {
    notFound();
  }
  return (
    <section className="min-h-screen">
      <Header locale={locale} />
      <div className="relative">{children}</div>
      <Footer locale={locale} />
    </section>
  );
}
