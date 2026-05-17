// src/app/[locale]/mini-girls/[slug]/page.js
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import { isBot } from "@/lib/isBot";
import {
  MODEL_QUERY,
  ALL_MINIGIRLS_SLUGS_QUERY,
  MODEL_SIBLINGS_QUERY,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Model } from "@/components/model";
import { LOCALES } from "@/lib/locales";

export async function generateStaticParams() {
  const models = await client.fetch(ALL_MINIGIRLS_SLUGS_QUERY);

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
    tags: [`mini-girls:${slug}`],
  });

  if (!model) notFound();

  // TRACKING — działa na serwerze, bez klienta
  const h = headers();
  const ua = h.get("user-agent") || "";
  const bot = isBot(ua);

  await client
    .patch(model._id)
    .inc({
      viewsAll: 1,
      viewsHuman: bot ? 0 : 1,
    })
    .commit();

  const { data: siblings } = await sanityFetch({
    query: MODEL_SIBLINGS_QUERY,
    params: {
      category: model.category,
      createdAt: model._createdAt,
      cutoffDate: cutoffDate.toISOString(),
    },
    tags: [`mini-girls`],
  });

  return (
    <Model model={model} locale={locale} slug={slug} siblings={siblings} />
  );
}
