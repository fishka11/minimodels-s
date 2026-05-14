// src/components/modelHeader.js
import { lora, shadowsIntoLightTwo } from "@/lib/fonts";
import { Calendar1 } from "lucide-react";
import { translateLabel, formatBirthDateShort } from "@/lib/modelTranslations";

export function ModelHeader({ model, locale }) {
  return (
    <header className="container max-w-7xl bg-white mx-auto text-center">
      <h1
        className={`${lora.className} text-4xl md:text-5xl font-regular text-center py-3 text-slate-700`}
      >
        {model.name}
      </h1>
      <div className="mb-10">
        <div className="text-center flex flex-row justify-center">
          <p
            className={`${shadowsIntoLightTwo.className} flex flex-row gap-3 bg-pink-500 py-1.5 px-6 text-white text-lg uppercase translate-y-1/2`}
          >
            <span>
              <Calendar1 />
            </span>
            <span>{translateLabel(locale, "birthDate")}:</span>{" "}
            <span>{formatBirthDateShort(model.birthDate, locale)}</span>
          </p>
        </div>
        <div className="mx-auto">
          <hr className="h-1 text-slate-300 w-9/10 mx-auto " />
        </div>
      </div>
    </header>
  );
}
