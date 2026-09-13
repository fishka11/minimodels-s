// src/app/[locale]/mini-girls/[slug]/page.js
// export const dynamic = "force-dynamic";
export const revalidate = 21600; // 6h

import { fetchSanity } from "@/sanity/lib/client";
import {
  ALL_TEENS_SLUGS_QUERY,
  MODEL_WITH_SIBLINGS_QUERY,
} from "@/sanity/lib/queries";
import { getCutoffDate } from "@/lib/cutoffDate";
import { notFound } from "next/navigation";
import { Model } from "@/components/model";
import { LOCALES } from "@/lib/locales";

export async function getData(slug) {
  const data = await fetchSanity({
    query: MODEL_WITH_SIBLINGS_QUERY,
    params: { slug, cutoffDate: getCutoffDate() },
    tags: [`model:${slug}`, `category:nastolatki`],
  });

  return data;
}

// export async function generateStaticParams() {
//   const models = await fetchSanity({ query: ALL_TEENS_SLUGS_QUERY });

//   return models.flatMap(({ slug }) =>
//     LOCALES.map((locale) => ({ locale, slug })),
//   );
// }

// -------------------------------------------------------
// Metadata
// -------------------------------------------------------
export async function generateMetadata({ params }) {
  console.log("generateMetadata params:", await params);
  const { locale, slug } = await params;
  console.log("locale:", locale, "slug:", slug, "typeof slug:", typeof slug);

  const model = await getData(slug);

  const t = {
    pl: {
      title:
        `${model?.name} - nastolatek / nastolatka do reklam i sesji zdjęciowych | MiniModels` ||
        "Nastolatek / nastolatka do reklam i sesji zdjęciowych | MiniModels",
      description:
        "Oferujemy szeroką bazę nastolatków - modelek i modeli, które spełnią oczekiwania nawet najbardziej wymagających klientów. Skontaktuj się z nami, aby znaleźć idealną nastolatkę lub nastolatka do swojego projektu i stworzyć niezapomniane kampanie reklamowe z udziałem naszych młodych talentów.",
      keywords:
        "nastolatka do reklam,nastolatek do reklam,młodzież do reklam,nastoletni model,nastoletnia modelka,młodzieżowe sesje zdjęciowe,młody aktor,młoda aktorka,nastolatek do filmów,nastolatka do filmów,nastolatek do seriali,nastolatka do seriali,młody model,młoda modelka,casting dla nastolatków,reklamy z młodzieżą,agencja modeli nastoletnich,MiniModels",
    },
    en: {
      title:
        `${model?.name} - an teenager for Commercials and Photoshoots | MiniModels` ||
        "Teenager for Commercials and Photoshoots | MiniModels",
      description:
        "We offer a wide range of teenage models who will meet the expectations of even the most discerning clients. Contact us to find the perfect teenager for your project and create unforgettable advertising campaigns featuring our young talents.",
      keywords:
        "Teenager for commercials, youth for commercials, teen model, youth photo shoots, young actor, young actress, teenager for films, teenager for TV series, young model, young model, casting for teenagers, youth commercials, teen model agency, MiniModels",
    },
  };
  const tr = t[locale];

  return {
    title: tr.title,
    description: tr.description,
    keywords: tr.keywords,
  };
}

export default async function ModelPage({ params }) {
  const { locale, slug } = await params;

  if (!LOCALES.includes(locale)) notFound();

  const model = await getData(slug);

  if (!model) notFound();

  return (
    <Model
      model={model}
      locale={locale}
      slug={slug}
      siblings={model.siblings}
    />
  );
}
