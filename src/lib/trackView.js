import { isBot } from "@/lib/isBot";
import { writeClient } from "@/sanity/lib/writeClient";

export async function trackView(modelId, userAgent) {
  console.log("🔥 TRACKVIEW FIRED FOR:", modelId);

  const bot = isBot(userAgent);

  await writeClient
    .patch(modelId)
    .setIfMissing({ viewsAll: 0, viewsHuman: 0 })
    .inc({ viewsAll: 1, viewsHuman: bot ? 0 : 1 })
    .commit();

  console.log("✅ TRACKING SAVED");
}
