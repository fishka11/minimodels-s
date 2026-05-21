import { shadowsIntoLightTwo } from "@/lib/fonts";
import { lora } from "@/lib/fonts";

// src/components/sectionText.js
export function SectionText({ texts, locale, loraFontFirst, textBreak }) {
  const items = texts?.[locale] ?? [];

  if (loraFontFirst) {
    return (
      <h2>
        {items.map((text, i) => (
          <span key={i}>
            <span
              className={`${i % 2 === 0 ? lora.className : shadowsIntoLightTwo.className} ${i % 2 === 0 ? "text-pink-500 mx-2 lg:mx-3" : ""} text-xl lg:text-4xl font-bold uppercase`}
            >
              {text}
            </span>
            {textBreak ? <br /> : " "}
          </span>
        ))}
      </h2>
    );
  }
  return (
    <h2>
      {items.map((text, i) => (
        <span key={i}>
          <span
            className={`${i % 2 === 0 ? shadowsIntoLightTwo.className : lora.className} ${i % 2 !== 0 ? "text-pink-500 mx-2 lg:mx-3" : ""} text-xl lg:text-4xl font-bold uppercase`}
          >
            {text}
          </span>{" "}
        </span>
      ))}
    </h2>
  );
}
