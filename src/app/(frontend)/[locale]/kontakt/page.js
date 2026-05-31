import { LOCALES } from "@/lib/locales";
import { sanityFetch } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function ContactPage({ params }) {
  const { locale } = await params;
  if (!["pl", "en"].includes(locale)) notFound();

  return <main></main>;
}
