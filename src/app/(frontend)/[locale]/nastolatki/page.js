// src/app/[locale]/mini-girls/page.js
import { getCutoffDate } from "@/lib/cutoffDate";
import { sanityFetch } from "@/sanity/lib/live";
import { TEENS_QUERY, MODEL_CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { ModelCard } from "@/components/modelCard";
import { NameColorSwitcher } from "@/lib/nameColorSwitcher";
import placeholder from "@/assets/images/reservation_bg.jpg";
import { CategoryHeader } from "@/components/categoryHeader";

// -------------------------------------------------------
// Metadata
// -------------------------------------------------------
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { data: category } = await sanityFetch({
    query: MODEL_CATEGORIES_QUERY,
    params: { category: "nastolatki", locale },
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

  const nameColor = NameColorSwitcher("nastolatki");

  const { data: models } = await sanityFetch({
    query: TEENS_QUERY,
    params: { cutoffDate: getCutoffDate() },
    tags: ["nastolatki"],
  });

  const { data: category } = await sanityFetch({
    query: MODEL_CATEGORIES_QUERY,
    params: { category: "nastolatki" },
  });

  return (
    <main className="mx-auto min-h-screen bg-white pt-14 lg:pt-20 pb-12">
      {/* Header */}
      <CategoryHeader
        bgImage={placeholder}
        title={category?.pageTitle[locale]}
      />
      <section className="mx-auto container max-w-7xl pt-12">
        {models?.length === 0 ? (
          <p className="text-center text-slate-400 py-20">No models</p>
        ) : (
          <div className="flex flex-row flex-wrap justify-center gap-2 transition-all duration-200 ease-in">
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"> */}
            {models?.map((model) => (
              <ModelCard
                key={model._id}
                model={model}
                locale={locale}
                category="nastolatki"
                nameColor={nameColor}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
