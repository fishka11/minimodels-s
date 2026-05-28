import { LOCALES } from "@/lib/locales";
import { sanityFetch } from "@/sanity/lib/live";
import { CASTING_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

// -------------------------------------------------------
// Metadata
// -------------------------------------------------------
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { data: pageData } = await sanityFetch({
    query: CASTING_PAGE_QUERY,
    params: { category: "baby" },
  });
  console.log("METADATA: ", await pageData);

  return {
    title: pageData.seo && pageData?.seo[locale]?.title,
    description: pageData.seo && pageData?.seo[locale]?.description,
    keywords: pageData.seo && pageData?.seo[locale]?.keywords,
  };
}

export default async function CastingPage({ params }) {
  const { locale } = await params;
  if (!["pl", "en"].includes(locale)) notFound();

  return <main></main>;
}
