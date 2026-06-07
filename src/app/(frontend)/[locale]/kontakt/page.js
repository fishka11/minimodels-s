import { LOCALES } from "@/lib/locales";
import { sanityFetch } from "@/sanity/lib/client";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/pageHeader";
import RichTextRenderer from "@/components/richTextRenderer";
import { cache } from "react";
import { Phone } from "lucide-react";
import Link from "next/link";

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
  console.log("ContactPage data:", data?.sections[0]);
  return (
    <main className="mx-auto bg-white pt-14 lg:pt-20 pb-12">
      <PageHeader
        title={data?.pageTitle[locale]}
        subTitle={data?.pageSubtitle[locale]}
      />
      <section className="mx-auto container max-w-7xl px-4 ">
        {data?.bodySections[0]?.texts[locale] ? (
          <div className="mb-6 lg:mb-12">
            <RichTextRenderer value={data.bodySections[0].texts[locale]} />
          </div>
        ) : null}
        <div className="sm:grid sm:grid-cols-2 sm:gap-5 lg:gap-14">
          <div>
            <div className="mb-6 lg:mb-12">
              {data?.sections[0]?.phones[locale] &&
                data.sections[0].phones[locale].map((phone, index) => (
                  <a
                    href={`tel:${phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row justify-start items-center gap-3 mb-6"
                    key={index}
                  >
                    <Phone size={34} className="text-pink-500 " />
                    <p className="text-xl lg:text-2xl font-light text-slate-700 hover:text-pink-500 transition-colors duration-200 ease-in">
                      {phone}
                    </p>
                  </a>
                ))}
            </div>
            <div className="mb-6 lg:mb-12">
              {data?.sections[0]?.texts[locale] &&
                data.sections[0].texts[locale].map((text, index) => (
                  <p
                    className="text-xl lg:text-2xl font-light text-slate-700"
                    key={index}
                  >
                    {text}
                  </p>
                ))}
            </div>
            <div className="mb-6 lg:mb-12 py-4">
              {data?.sections[0]?.button && (
                <Link
                  href={data.sections[0].button.url}
                  className="px-8 py-3 border-2 border-sky-500 text-sky-500 hover:border-black hover:text-black text-lg font-bold uppercase transition-colors duration-200 ease-in"
                >
                  {data.sections[0].button.label[locale]}
                </Link>
              )}
            </div>
          </div>
          <div>
            {data?.bodySections[1]?.texts[locale] ? (
              <div className="mb-6 lg:mb-12">
                <RichTextRenderer value={data.bodySections[1].texts[locale]} />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
