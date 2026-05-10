// src/components/model.js
import { ModelHeader } from "@/components/modelHeader";
import { ModelGallery } from "@/components/modelGallery";
import { ModelData } from "@/components/modelData";
import { ModelWorkPlace } from "./modelWorkPlace";
import { ShareOnX } from "@/components/shareOnX";
import { ModelSiblings } from "@/components/modelSiblings";

export function Model({ model, locale, slug, siblings }) {
  return (
    <main>
      <article className="bg-white mx-auto mt-14 md:mt-20 pt-24 pb-12">
        <ModelHeader model={model} locale={locale} />
        <ModelGallery model={model} />
        <ModelData model={model} locale={locale} />
        <ModelWorkPlace locale={locale} />
        <ShareOnX
          text={model.name}
          url={`https://minimodels.com.pl/${locale}/${model.category}/${slug}`}
          locale={locale}
        />
        <ModelSiblings
          siblings={siblings}
          locale={locale}
          category={model.category}
        />
      </article>
    </main>
  );
}
