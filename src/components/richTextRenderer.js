import { PortableText } from "@portabletext/react";
import Image from "next/image";

const RichTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-slate-700 text-xl lg:text-2xl font-light leading-snug">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-4 lg:mb-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-slate-400 pl-4 italic text-slate-700 my-4">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 text-xl lg:text-2xl text-slate-700 font-light">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-8 mx-auto text-xl lg:text-2xl text-slate-700 font-light">
        {children}
      </ol>
    ),
  },

  marks: {
    // 🔗 Link
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-sky-600 underline hover:text-sky-800 transition-colors"
        >
          {children}
        </a>
      );
    },

    // ✉️ Email
    mailto: ({ value, children }) => (
      <a
        href={`mailto:${value.address}`}
        className="text-sky-500 underline hover:text-pink-800 transition-colors duration-200 ease-in"
      >
        {children}
      </a>
    ),

    // 🎨 Kolor tekstu
    textColor: ({ value, children }) => (
      <span className={value.color}>{children}</span>
    ),

    // 🔠 Font weight
    fontWeight: ({ value, children }) => (
      <span className={value.weight}>{children}</span>
    ),

    // 🅰️ Font family
    fontFamily: ({ value, children }) => (
      <span className={value.font}>{children}</span>
    ),

    // 🔤 Font size
    fontSize: ({ value, children }) => (
      <span className={value.size}>{children}</span>
    ),
  },

  // 🖼️ Obrazki
  types: {
    image: ({ value }) => {
      const ref = value?.asset?._ref;
      if (!ref) return null;

      const url = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${ref
        .replace("image-", "")
        .replace("-jpg", ".jpg")
        .replace("-png", ".png")}`;

      return (
        <div className="my-6">
          <Image
            src={url}
            alt={value.alt || ""}
            width={1200}
            height={800}
            className="rounded-lg"
          />
        </div>
      );
    },
    spacer: ({ value }) => <div className={value.size}></div>,
  },
};

export default function RichTextRenderer({ value }) {
  return <PortableText value={value} components={RichTextComponents} />;
}
