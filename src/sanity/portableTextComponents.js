import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export const components = {
  marks: {
    textColor: ({ children, value }) => (
      <span className={value.color}>{children}</span>
    ),
    fontWeight: ({ children, value }) => (
      <span className={value.weight}>{children}</span>
    ),
    fontFamily: ({ children, value }) => (
      <span className={value.font}>{children}</span>
    ),
    link: ({ children, value }) => (
      <a href={value.href} className="underline hover:text-pink-500">
        {children}
      </a>
    ),
  },
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="rounded-lg not-prose w-full h-auto"
          src={urlFor(props.value)
            .width(600)
            .height(400)
            .quality(80)
            .auto("format")
            .url()}
          alt={props?.value?.alt || ""}
          width="600"
          height="400"
        />
      ) : null,
  },
};
