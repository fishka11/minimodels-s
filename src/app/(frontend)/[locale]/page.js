// src/app/[locale]/page.js

import { ParallaxSection } from "@/components/parallaxSection";
import { LOCALES } from "@/lib/locales";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { getYoutubeId } from "@/lib/getYoutubeID";

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

  const section1 = homePage?.sections?.[0];
  const section2 = homePage?.sections?.[1];
  const section3 = homePage?.sections?.[2];

  const videoURL = section1?.videoUrl;

  console.log(section1);

  if (!homePage) notFound();

  return (
    <main className="">
      <ParallaxSection imageUrl={section1.backgroundImage.asset.url}>
        <div className="container max-w-8xl mx-auto text-center">
          <div className="max-w-xl mx-auto mb-8 mt-44">
            <iframe
              src={`https://www.youtube.com/embed/${getYoutubeId(videoURL)}`}
              title="Minimodels, warto być z nami..."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="w-full h-auto aspect-video"
            ></iframe>
          </div>
          <h1 className="text-lg md:text-xl font-bold uppercase subpixel-antialiased ">
            {locale === "pl" ? section1.texts.pl[0] : section1.texts.en[0]}
          </h1>
          <p className="text-lg md:text-xl font-light uppercase mx-auto subpixel-antialiased">
            {locale === "pl" ? section1.texts.pl[1] : section1.texts.en[1]}
          </p>
        </div>
      </ParallaxSection>
    </main>
  );
}
