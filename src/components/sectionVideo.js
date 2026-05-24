import { getYoutubeId } from "@/lib/getYoutubeID";

export function SectionVideo({ video, locale }) {
  return (
    <iframe
      src={
        `https://www.youtube.com/embed/${getYoutubeId(video[locale].url)}` ||
        `https://www.youtube.com/embed/${getYoutubeId(video.pl.url)}`
      }
      title={video[locale].title}
      className="w-full h-auto aspect-video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
