const t = {
  pl: {
    postOnX: "Opublikuj na",
  },
  en: {
    postOnX: "Post on",
  },
};

export function ShareOnX({ text, url, locale }) {
  const shareUrl = `https://x.com/intent/post?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
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
          <div className="bg-black text-white px-3 py-1 rounded-full flex gap-1 items-center group-hover:text-pink-500 group-hover:bg-slate-800 transition-colors duration-200 ease-in">
            <p className="">{tr.postOnX}</p>
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-white group-hover:fill-pink-500 transition-colors duration-200 ease-in"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}
