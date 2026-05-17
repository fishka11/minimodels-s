export function SectionVideo({ videoUrl, locale, videoTitle }) {
  console.log(videoTitle);
  return (
    <div className="sm:min-w-md max-w-md md:max-w-lg lg:max-w-2xl flex justify-center lg:justify-end w-full">
      <iframe
        src={videoUrl}
        title={locale === "pl" ? videoTitle.pl : videoTitle.en}
        className="w-full h-auto aspect-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
