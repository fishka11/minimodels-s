import { sanityFetch } from "@/sanity/lib/client";
import { FAQ_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
// import placeholder from "@/assets/images/about_bg.jpg";
import { PageHeader } from "@/components/pageHeader";
import FAQAccordion from "@/components/faqAccordion";
import { cache } from "react";

export const getData = cache(async () => {
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
  const data = await getData();

  return {
    title: data?.seo?.[locale]?.title,
    description: data?.seo?.[locale]?.description,
    keywords: data?.seo?.[locale]?.keywords,
  };
}

export default async function HelpPage({ params }) {
  const { locale } = await params;
  if (!["pl", "en"].includes(locale)) notFound();

  const data = await getData();

  return (
    <main className="mx-auto bg-white pt-14 lg:pt-20 pb-18 lg:pb-28">
      {/* Header */}
      <PageHeader
        // bgImage={placeholder}
        title={data?.pageTitle[locale]}
        subTitle={data?.pageSubtitle[locale]}
      />
      <section className="mx-auto container max-w-6xl px-4">
        <FAQAccordion faq={data.faq} locale={locale} />
      </section>
    </main>
  );
}
