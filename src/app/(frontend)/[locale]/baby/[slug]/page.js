// src/app/[locale]/baby/[slug]/page.js
import { sanityFetch } from "@/sanity/lib/client";
import {
  ALL_BABY_SLUGS_QUERY,
  MODEL_WITH_SIBLINGS_QUERY,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Model } from "@/components/model";
import { LOCALES } from "@/lib/locales";
import { cache } from "react";

export const getData = cache(async (slug) => {
  const cutoffDate = new Date();
  cutoffDate.setFullYear(cutoffDate.getFullYear() - 1);

  const data = await sanityFetch({
    query: MODEL_WITH_SIBLINGS_QUERY,
    params: { slug, cutoffDate: cutoffDate.toISOString() },
    tags: [`nastolatki:${slug}`],
  });

  return data;
});

export async function generateStaticParams() {
  const models = await sanityFetch({ query: ALL_BABY_SLUGS_QUERY });

  return models.flatMap(({ slug }) =>
    LOCALES.map((locale) => ({ locale, slug })),
  );
}

// -------------------------------------------------------
// Metadata
// -------------------------------------------------------
export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const t = {
    pl: { title: "Brak modeli w tej kategorii." },
    en: { noModels: "No models in this category." },
  };
  const tr = t[locale];
  const data = await getData(slug);

  return {
    // title: seo?.title,
    // description: seo?.description,
    // keywords: seo?.keywords,
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
