import { sanityFetch } from "@/sanity/lib/client";
import { CASTING_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import placeholder from "@/assets/images/casting_bg.jpg";
import { PageHeader } from "@/components/pageHeader";
import RichTextRenderer from "@/components/richTextRenderer";
import { cache } from "react";

export const getData = cache(async () => {
  const data = await sanityFetch({
    query: CASTING_PAGE_QUERY,
    tags: ["castingPage", "teamSection"],
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

export default async function CastingPage({ params }) {
  const { locale } = await params;
  if (!["pl", "en"].includes(locale)) notFound();

  const data = await getData();

  return (
    <main className="mx-auto bg-white pt-14 lg:pt-20 pb-12">
      {/* Header */}
      <PageHeader
        bgImage={placeholder}
        title={data?.pageTitle[locale]}
        subTitle={data?.pageSubtitle[locale]}
      />
      <section className="mx-auto container max-w-4xl py-12 lg:py-24 px-4">
        {data?.body[locale] ? (
          <div className="">
            <RichTextRenderer value={data.body[locale]} />
          </div>
        ) : null}
        {locale === "pl" && (
          <div className="w-fit mx-auto my-12">
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
