const t = {
  pl: {
    postOnFacebook: "Udostępnij na",
  },
  en: {
    postOnFacebook: "Share on",
  },
};

export function ShareOnFacebook({ url, locale }) {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url,
  )}`;
  const tr = t[locale] ?? t.pl;

  return (
    <section className="container bg-white max-w-7xl mx-auto py-4 md:py-6">
      <div className="flex justify-center">
        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row justify-center group"
        >
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full flex gap-1 items-center group-hover:bg-blue-700 transition-colors duration-200 ease-in">
            <p>{tr.postOnFacebook}</p>
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-white group-hover:fill-gray-200 transition-colors duration-200 ease-in"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}
