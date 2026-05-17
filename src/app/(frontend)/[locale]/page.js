// src/app/[locale]/page.js
import { ParallaxSection } from "@/components/parallaxSection";
import { LOCALES } from "@/lib/locales";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { getYoutubeId } from "@/lib/getYoutubeID";
import Image from "next/image";
import imgPartnersUp from "@/assets/images/partners-up.png";
import imgPartnersDown from "@/assets/images/partners-down.png";
import imgCollage from "@/assets/images/mini-boy-girl.jpg";
import imgDreams from "@/assets/images/marzenia-zdj.jpg";
import imgShowBusiness from "@/assets/images/show_biznes.jpg";
import imgSection1Bg from "@/assets/images/strona-glowna.jpg";
import imgSection2Bg from "@/assets/images/sukces.jpg";
import imgSection3Bg from "@/assets/images/marzenia.jpg";
import imgSection4Bg from "@/assets/images/zaufanie.jpg";
import imgSection5Bg from "@/assets/images/slawa.jpg";
import imgSection6Bg from "@/assets/images/szansa.jpg";
import { ArrowDown } from "@/components/arrowDown";
import { SectionContent } from "@/components/sectionContent";
import { slides } from "@/lib/logotypes";
import { getText } from "@/lib/getText";
import { lora } from "@/lib/fonts";

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

  const [section1, section2, section3, section4, section5, section6] =
    homePage?.sections ?? [];
  const t = (section, i) => getText(section?.texts, locale, i);

  return (
    <main className="">
      <div
        className={`relative grid place-items-center bg-fixed bg-cover bg-top`}
        style={{
          backgroundImage: `url(${imgSection1Bg.src})`,
        }}
      >
        <div className="[grid-area:1/1] h-full text-white w-full">
          <div className="mx-auto h-full grid grid-cols-1 place-content-between text-center gap-2 pt-22 lg:pt-0">
            <div className="sm:min-w-md max-w-md md:max-w-lg lg:max-w-xl mx-auto container px-4 pt-14 lg:pt-32">
              <iframe
                src={`https://www.youtube.com/embed/${getYoutubeId(section1?.videoUrl)}`}
                title={
                  locale === "pl"
                    ? section1?.videoTitle.pl
                    : section1?.videoTitle.en ||
                      "Minimodels, bo warto być z nami..."
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-auto aspect-video"
              ></iframe>
            </div>
            <div className="relative container max-w-7xl mx-auto px-4">
              <hr className="before:content-[''] before:absolute before:block before:w-2 before:h-2 before:bg-white before:rotate-45 before:-top-1 before:left-1/2" />
            </div>

            <div className="container max-w-7xl mx-auto px-4 flex flex-col">
              <h1 className="text-xl font-bold uppercase  mx-auto">
                {t(section1, 0)}
              </h1>
              <p className="text-lg lg:text-xl font-light uppercase mx-auto">
                {t(section1, 1)}
              </p>
              <p className="text-lg lg:text-xl font-light uppercase mx-auto mt-6">
                {t(section1, 2)}
                <br />
                <span>{t(section1, 3)}</span>{" "}
                <span
                  className={`${lora.className} uppercase font-bold text-pink-500`}
                >
                  {t(section1, 4)}
                </span>
              </p>
            </div>
            <ArrowDown anchor="section2" />
            <div className="flex flex-col gap-5">
              <p className="text-lg lg:text-xl mx-auto px-4">
                {t(section1, 5)}
              </p>
              <div className="">
                <Image
                  src={imgPartnersUp}
                  alt={`${locale === "pl" ? "Logotypy partnerów Minimodels" : "Logos of Minimodels partners"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ParallaxSection
        bgImage={imgSection2Bg}
        parralaxAnchor="section2"
        sectionEnlargment="300"
      >
        <div className="mx-auto h-full grid grid-cols-1 place-content-between text-center gap-10">
          <Image
            src={imgPartnersDown}
            alt={`${locale === "pl" ? "Logotypy partnerów Minimodels" : "Logos of Minimodels partners"}`}
          />
          <SectionContent
            texts={section2?.texts}
            locale={locale}
            image={imgCollage}
            imageAlt={
              locale === "pl" ? "Kolaż mini-modeli" : "Collage of minimodels"
            }
            imageLeft={true}
            loraFontFirst={false}
            anchor="section3"
          />
        </div>
      </ParallaxSection>
      <ParallaxSection
        bgImage={imgSection3Bg}
        parralaxAnchor="section3"
        sectionEnlargment="300"
      >
        <div className="mx-auto h-full grid grid-cols-1 place-content-end text-center gap-10">
          <SectionContent
            texts={section3?.texts}
            locale={locale}
            image={imgDreams}
            imageAlt={locale === "pl" ? "Marzenia" : "Dreams"}
            imageLeft={false}
            loraFontFirst={false}
            anchor="section4"
          />
        </div>
      </ParallaxSection>
      <ParallaxSection
        bgImage={imgSection4Bg}
        parralaxAnchor="section4"
        sectionEnlargment="300"
      >
        <div className="mx-auto h-full grid grid-cols-1 place-content-end text-center gap-10">
          <SectionContent
            texts={section4?.texts}
            locale={locale}
            slides={slides}
            imageLeft={true}
            loraFontFirst={false}
            anchor="section5"
          />
        </div>
      </ParallaxSection>
      <ParallaxSection
        bgImage={imgSection5Bg}
        parralaxAnchor="section5"
        sectionEnlargment="300"
      >
        <div className="mx-auto h-full grid grid-cols-1 place-content-end text-center gap-10">
          <SectionContent
            texts={section5?.texts}
            locale={locale}
            image={imgShowBusiness}
            imageAlt={locale === "pl" ? "Show Business" : "Show Business"}
            imageLeft={false}
            loraFontFirst={false}
            anchor="section6"
          />
        </div>
      </ParallaxSection>
      <ParallaxSection
        bgImage={imgSection6Bg}
        parralaxAnchor="section6"
        sectionEnlargment="300"
      >
        <div className="mx-auto h-full grid grid-cols-1 place-content-end text-center gap-10">
          <SectionContent
            texts={section6?.texts}
            locale={locale}
            videoUrl={`https://www.youtube.com/embed/${getYoutubeId(section6?.videoUrl)}`}
            videoTitle={section6?.videoTitle}
            imageLeft={true}
            loraFontFirst={true}
            anchor="section7"
          />
        </div>
      </ParallaxSection>
    </main>
  );
}
