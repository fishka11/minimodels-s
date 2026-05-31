import { FooterCastingSection } from "./footerCastingSection";
import { getCastingSectionData } from "@/lib/castingSectionData";

export async function Footer({ locale }) {
  const castingSectionData = await getCastingSectionData();

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
    </>
  );
}
