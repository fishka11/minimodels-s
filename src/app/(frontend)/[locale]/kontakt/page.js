import { LOCALES } from "@/lib/locales";
import { sanityFetch } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function ContactPage({ params }) {
  const { locale } = await params;
  if (!["pl", "en"].includes(locale)) notFound();

  return (
    <main className="mx-auto min-h-screen bg-white pt-14 lg:pt-20 pb-12"></main>
  );
}
