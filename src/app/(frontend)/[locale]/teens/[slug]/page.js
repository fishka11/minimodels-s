// src/app/[locale]/mini-girls/[slug]/page.js
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import { trackView } from "@/lib/trackView";
import {
  MODEL_QUERY,
  ALL_TEENS_SLUGS_QUERY,
  MODEL_SIBLINGS_QUERY,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Model } from "@/components/model";
import { LOCALES } from "@/lib/locales";

export async function generateStaticParams() {
  const models = await client.fetch(ALL_TEENS_SLUGS_QUERY);

  return models.flatMap(({ slug }) =>
    LOCALES.map((locale) => ({ locale, slug })),
  );
}

export default async function ModelPage({ params }) {
  const { locale, slug } = await params;

  if (!LOCALES.includes(locale)) notFound();

  const cutoffDate = new Date();
  cutoffDate.setFullYear(cutoffDate.getFullYear() - 1);

  const { data: model } = await sanityFetch({
    query: MODEL_QUERY,
    params: { slug },
    tags: [`teens:${slug}`],
  });

  if (!model) notFound();

  // Tracking — działa po stronie serwera tylko podczas requestu, nie podczas prerenderingu
  await trackView(model._id);

  const { data: siblings } = await sanityFetch({
    query: MODEL_SIBLINGS_QUERY,
    params: {
      category: model.category,
      createdAt: model._createdAt,
      cutoffDate: cutoffDate.toISOString(),
    },
    tags: [`teens`],
  });

  return (
    <Model model={model} locale={locale} slug={slug} siblings={siblings} />
  );
}
