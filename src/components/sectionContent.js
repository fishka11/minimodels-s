// src/components/sectionContent.js
import Image from "next/image";
import { SectionText } from "@/components/sectionText";
import { ArrowDown } from "@/components/arrowDown";
import { SectionSlider } from "@/components/sectionSlider";
import { SectionVideo } from "@/components/sectionVideo";

export function SectionContent({
  texts,
  locale,
  slides,
  videoUrl,
  videoTitle,
  image,
  imageAlt,
  imageLeft = false,
  anchor,
  loraFontFirst = false,
}) {
  const videoEl = videoUrl && (
    <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
      <SectionVideo
        locale={locale}
        videoUrl={videoUrl}
        videoTitle={videoTitle}
      />
    </div>
  );
  const sliderEl = slides && (
    <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
      <SectionSlider locale={locale} slides={slides} />
    </div>
  );
  const imageEl = image && (
    <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
      <Image
        className="max-w-146 w-full max-lg:w-11/12"
        src={image}
        alt={imageAlt}
      />
    </div>
  );
  const textEl = texts && (
    <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
      <SectionText
        texts={texts}
        locale={locale}
        loraFontFirst={loraFontFirst}
      />
    </div>
  );

  return (
    <div className="text-center text-black bg-white pt-14 lg:pt-26 pb-7 lg:pb-13">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 w-full">
          {imageLeft ? (
            <>
              {imageEl || sliderEl || videoEl}
              {textEl}
            </>
          ) : (
            <>
              {textEl}
              {imageEl || sliderEl || videoEl}
            </>
          )}
        </div>
        {anchor && <ArrowDown anchor={anchor} />}
      </div>
    </div>
  );
}
