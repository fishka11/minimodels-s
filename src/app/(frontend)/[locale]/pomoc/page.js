import { sanityFetch } from "@/sanity/lib/client";
import { FAQ_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import placeholder from "@/assets/images/about_bg.jpg";
import { CategoryHeader } from "@/components/categoryHeader";
import FAQAccordion from "@/components/faqAccordion";
import { cache } from "react";

export const getPageData = cache(async () => {
  const data = await sanityFetch({
    query: FAQ_PAGE_QUERY,
    tags: ["faqPage"],
  });

  return data;
});

// -------------------------------------------------------
// Metadata
// -------------------------------------------------------
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const pageData = await getPageData();

  return {
    title: pageData.seo && pageData?.seo[locale]?.title,
    description: pageData.seo && pageData?.seo[locale]?.description,
    keywords: pageData.seo && pageData?.seo[locale]?.keywords,
  };
}

export default async function HelpPage({ params }) {
  const { locale } = await params;
  if (!["pl", "en"].includes(locale)) notFound();

  const pageData = await getPageData();

  return (
    <main>
      {/* Header */}
      <CategoryHeader
        bgImage={placeholder}
        title={pageData?.pageTitle[locale]}
        subTitle={pageData?.pageSubtitle[locale]}
      />
      <section className="mx-auto container max-w-5xl py-12 lg:py-24 px-4">
        <FAQAccordion faq={pageData.faq} locale={locale} />
      </section>
    </main>
  );
}
