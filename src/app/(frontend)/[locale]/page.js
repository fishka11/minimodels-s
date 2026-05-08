import Link from "next/link";
import { Title } from "@/components/title";
import { LOCALES } from "@/lib/locales";
import { notFound } from "next/navigation";

const t = {
  pl: {
    title: "Agencja Minimodels",
    posts: "Posty",
  },
  en: {
    title: "Minimodels Agency",
    posts: "Posts",
  },
};

export default async function Page({ params }) {
  const { locale } = await params;
  if (!LOCALES.includes(locale)) notFound();
  const tr = t[locale];

  return (
    <section className="container max-w-8xl mx-auto bg-white mt-14 md:mt-20 pt-24 pb-12">
      <Title>{tr.title}</Title>
    </section>
  );
}
