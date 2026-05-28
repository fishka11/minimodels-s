import { LOCALES } from "@/lib/locales";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function AboutUsPage({ params }) {
  const { locale } = await params;
  if (!["pl", "en"].includes(locale)) notFound();

  return <main></main>;
}
