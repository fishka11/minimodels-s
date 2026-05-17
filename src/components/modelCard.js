// src/components/modelCard.js
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { formatBirthDateLong, translateLabel } from "@/lib/modelTranslations";

export function ModelCard({ model, locale, category }) {
  const { _id, name, slug, birthDate, profileImage } = model;

  return (
    <Link
      key={_id}
      href={`/${locale}/${category}/${slug?.current}`}
      className="group flex flex-col items-center text-center overflow-clip p-3"
    >
      {/* Zdjęcie */}
      <div className="">
        <div className="relative aspect-2/3 h-82.5">
          {profileImage ? (
            <Image
              src={urlFor(profileImage)
                .width(220)
                .height(330)
                .fit("crop")
                .quality(80)
                .url()}
              alt={profileImage?.alt || name}
              fill
              className="mx-auto w-55 h-82.5 group-hover:scale-105 transition-transform duration-300 ease-out"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-pink-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Dane */}
      <div className="m-4 px-1">
        <h2 className="text-2xl font-normal text-gray-700 group-hover:text-pink-500 transition-colors duration-200 leading-tight">
          {name}
        </h2>
        {birthDate && (
          <div className="m-3 text-md font-bold text-gray-700">
            <p>{translateLabel(locale, "birthDate")}:</p>
            <p>{formatBirthDateLong(birthDate, locale)}</p>
          </div>
        )}
      </div>
    </Link>
  );
}
