import { sanityFetch } from "@/sanity/lib/client";
import { CASTING_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import placeholder from "@/assets/images/casting_bg.jpg";
import { CategoryHeader } from "@/components/categoryHeader";
import RichTextRenderer from "@/components/richTextRenderer";
import { cache } from "react";

export const getPageData = cache(async () => {
  const data = await sanityFetch({
    query: CASTING_PAGE_QUERY,
    tags: ["castingPage"],
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

export default async function CastingPage({ params }) {
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
        {pageData?.body[locale] ? (
          <div className="">
            <RichTextRenderer value={pageData.body[locale]} />
          </div>
        ) : null}
        {locale === "pl" && (
          <div className="w-fit  mx-auto my-12">
            <a
              href="/files/rodominimodels.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-pink-500 hover:bg-sky-500 text-white text-2xl transition-colors duration-200 ease-in"
            >
              RODO
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
