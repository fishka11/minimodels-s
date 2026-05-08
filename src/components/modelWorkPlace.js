import Image from "next/image";
import placeHolder from "@/assets/images/mapa.png";

const translations = {
  pl: {
    workPlace: "Miejsce pracy",
  },
  en: {
    workPlace: "Workplace",
  },
};

export function ModelWorkPlace({ locale }) {
  const tr = translations[locale] ?? translations.pl;
  return (
    <section className="container bg-white max-w-7xl mx-auto py-4 md:py-6">
      <div className="flex flex-col items-center gap-3">
        <p className="text-xl font-bold uppercase">{tr.workPlace}:</p>
        <div className="w-36">
          <figure>
            <Image
              src={placeHolder}
              alt="Miejsce pracy"
              className="w-full h-auto"
              sizes="144px"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
