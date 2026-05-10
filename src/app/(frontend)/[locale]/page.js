// src/app/[locale]/page.js

import { LOCALES } from "@/lib/locales";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

// -------------------------------------------------------
// Metadata
// -------------------------------------------------------
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { data: homePage } = await sanityFetch({ query: HOME_PAGE_QUERY });
  const seo = locale === "pl" ? homePage?.seo_pl : homePage?.seo_en;

  return {
    title: seo?.seoTitle ?? "MiniModels",
    description: seo?.seoDescription,
    keywords: seo?.seoKeywords,
  };
}

export default async function Page({ params }) {
  const { locale } = await params;

  if (!LOCALES.includes(locale)) notFound();

  const { data: homePage } = await sanityFetch({
    query: HOME_PAGE_QUERY,
    tags: ["homePage"],
  });

  if (!homePage) notFound();

  return <main></main>;
}
