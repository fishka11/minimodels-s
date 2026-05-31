import { sanityFetch } from "@/sanity/lib/client";
import { CASTING_SECTION_QUERY } from "@/sanity/lib/queries";
import { cache } from "react";

export const getCastingSectionData = cache(async () => {
  const data = await sanityFetch({
    query: CASTING_SECTION_QUERY,
    tags: ["castingSection"],
  });

  return data;
});
