// src/lib/translations.js
export const t = {
  pl: {
    copyright: `Agencja fotograficzno reklamowa dla dzieci i młodzieży © 2010-${new Date().getFullYear()}`,
  },
  en: {
    copyright: `Photography and advertising agency for children and youth © 2010-${new Date().getFullYear()}`,
  },
};

export default function Copyrights({ locale }) {
  const tr = t[locale];
  return (
    <div className="mb-6">
      <hr className="text-gray-300 w-28 mx-auto" />
      <div className="text-center text-sm text-gray-700 py-8 flex flex-col md:flex-row gap-2 items-center justify-center">
        <span>{tr.copyright}</span>
        <span className="text-gray-400 max-md:hidden" aria-hidden="true">
          |
        </span>
        <span>
          Developed by{" "}
          <a
            href="mailto:r.piasnik@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Rafał Piaśnik
          </a>
        </span>
      </div>
    </div>
  );
}
