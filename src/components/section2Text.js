import { shadowsIntoLightTwo } from "@/lib/fonts";
import { lora } from "@/lib/fonts";

export const Section2Text = ({ texts, locale }) => {
  const items = texts?.[locale] ?? [];
  return (
    <h2 className="text-xl lg:text-4xl font-bold uppercase mx-auto">
      <span className={`${shadowsIntoLightTwo.className}`}>{items[0]}</span>{" "}
      <span className={`${lora.className} text-pink-500 mx-2 lg:mx-4`}>
        {items[1]}
      </span>{" "}
      <span className={`${shadowsIntoLightTwo.className}`}>
        {items[2]}
      </span>{" "}
    </h2>
  );
};
