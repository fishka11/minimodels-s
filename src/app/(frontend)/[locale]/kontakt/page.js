import { LOCALES } from "@/lib/locales";
import { sanityFetch } from "@/sanity/lib/client";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/pageHeader";
import RichTextRenderer from "@/components/richTextRenderer";
import { cache } from "react";

export const getData = cache(async () => {
  const data = await sanityFetch({
    query: CONTACT_PAGE_QUERY,
    tags: ["contactPage"],
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
    title: data.seo && data?.seo[locale]?.title,
    description: data.seo && data?.seo[locale]?.description,
    keywords: data.seo && data?.seo[locale]?.keywords,
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  if (!["pl", "en"].includes(locale)) notFound();

  const data = await getData();

  return (
    <main className="mx-auto min-h-screen bg-white pt-14 lg:pt-20 pb-12">
      <PageHeader
        title={data?.pageTitle[locale]}
        subTitle={data?.pageSubtitle[locale]}
      />
      <section className="mx-auto container max-w-7xl py-12 lg:py-24 px-4 grid grid-cols-2 gap-10">
        <div></div>
        <div></div>
        {/* {data?.body[locale] ? (
                <div className="">
                  <RichTextRenderer value={data.body[locale]} />
                </div>
              ) : null} */}
      </section>
    </main>
  );
}
