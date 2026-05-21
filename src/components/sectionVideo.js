export function SectionVideo({ videoUrl, locale, videoTitle }) {
  return (
    <iframe
      src={videoUrl}
      title={locale === "pl" ? videoTitle.pl : videoTitle.en}
      className="w-full h-auto aspect-video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
