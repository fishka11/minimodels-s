import { shadowsIntoLightTwo } from "@/lib/fonts";
import { lora } from "@/lib/fonts";

export const Section6Text = ({ texts, locale }) => {
  const items = texts?.[locale] ?? [];
  return (
    <h2 className="text-xl lg:text-4xl font-bold uppercase flex">
      <span className={`${lora.className}`}>{items[0]}</span>
    </h2>
  );
};
