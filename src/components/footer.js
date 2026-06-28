import { fetchSanity } from "@/sanity/lib/client";
import { CASTING_SECTION_QUERY } from "@/sanity/lib/queries";
import { FooterCastingSection } from "@/components/footerCastingSection";
import BottomMenu from "@/components/bottomMenu";
import Copyrights from "./copyrights";
import { cache } from "react";

export const getData = cache(async () => {
  const data = await fetchSanity({
    query: CASTING_SECTION_QUERY,
    tags: ["castingSection"],
  });

  return data;
});

export async function Footer({ locale }) {
  const castingSectionData = await getData();

  if (!castingSectionData) return null;

  const { headline, subheadline, blocks } = castingSectionData;
  return (
    <>
      {castingSectionData && (
        <FooterCastingSection
          headline={headline}
          subheadline={subheadline}
          blocks={blocks}
          locale={locale}
        />
      )}
      <BottomMenu locale={locale} />
      <Copyrights locale={locale} />
    </>
  );
}
