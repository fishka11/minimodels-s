// src/app/[locale]/mini-girls/page.js
import { lora } from "@/lib/fonts";
import { getCutoffDate } from "@/lib/cutoffDate";
import { sanityFetch } from "@/sanity/lib/live";
import { TEENS_QUERY, MODEL_CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { ModelCard } from "@/components/modelCard";

// -------------------------------------------------------
// Tłumaczenia UI
// -------------------------------------------------------
const t = {
  pl: {
    pageTitle: "Nastolatki",
    noModels: "Brak modeli w tej kategorii.",
    modelsCount: (n) => `${n} modelek`,
  },
  en: {
    pageTitle: "Teenagers",
    noModels: "No models in this category.",
    modelsCount: (n) => `${n} models`,
  },
};

// -------------------------------------------------------
// Metadata
// -------------------------------------------------------
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { data: category } = await sanityFetch({
    query: MODEL_CATEGORIES_QUERY,
    params: { category: "teens", locale },
  });

  return {
    title: category?.seoTitle ?? "Nastolatki | MiniModels",
    description: category?.seoDescription,
    keywords: category?.seoKeywords,
  };
}

// -------------------------------------------------------
// Strona
// -------------------------------------------------------
export default async function MiniBoysPage({ params }) {
  const { locale } = await params;

  if (!["pl", "en"].includes(locale)) notFound();

  const tr = t[locale];

  const { data: models } = await sanityFetch({
    query: TEENS_QUERY,
    params: { cutoffDate: getCutoffDate() },
    tags: ["teens"],
  });

  return (
    <main className="container max-w-7xl mx-auto min-h-screen bg-white mt-14 md:mt-20 pt-24 pb-12">
      {/* Header */}
      <div className="py-6 md:py-10">
        <div className="mx-auto">
          <h1
            className={`${lora.className} text-4xl md:text-5xl font-regular text-center py-3 text-slate-700`}
          >
            {tr.pageTitle}
          </h1>
          {/* <p className="text-slate-500 mt-1 text-sm">
            {tr.modelsCount(models?.length ?? 0)}
          </p> */}
        </div>
      </div>

      <section className="mx-auto">
        {models?.length === 0 ? (
          <p className="text-center text-slate-400 py-20">{tr.noModels}</p>
        ) : (
          <div className="flex flex-row flex-wrap justify-center gap-2 transition-all duration-300">
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"> */}
            {models?.map((model) => (
              <ModelCard
                key={model._id}
                model={model}
                locale={locale}
                category="teens"
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
