import { sanityFetch } from "@/sanity/lib/live";
import { CASTING_SECTION_QUERY } from "@/sanity/lib/queries";
import { lora } from "@/lib/fonts";
import { shadowsIntoLightTwo } from "@/lib/fonts";
import { FooterCastingSection } from "./footerCastingSection";

export async function Footer({ locale }) {
  const { data: castingSection } = await sanityFetch({
    query: CASTING_SECTION_QUERY,
    tags: ["castingSection"],
  });
  const { headline, subheadline, blocks } = castingSection;
  return (
    <>
      <FooterCastingSection
        headline={headline}
        subheadline={subheadline}
        blocks={blocks}
        locale={locale}
      />
    </>
  );
}
