import { headers } from "next/headers";
import { isBot } from "@/lib/isBot";
import { client } from "@/sanity/lib/client";

export async function trackView(modelId) {
  let ua = "";
  let isBuild = false;

  // Próba pobrania nagłówków — działa tylko podczas requestu
  try {
    const h = headers();
    ua = h.get("user-agent") || "";
  } catch {
    // Podczas prerenderingu headers() nie istnieje
    isBuild = true;
  }

  // Jeśli to prerendering — NIE liczymy wejścia
  if (isBuild) return;

  const bot = isBot(ua);

  await client
    .patch(modelId)
    .inc({
      viewsAll: 1,
      viewsHuman: bot ? 0 : 1,
    })
    .commit();
}
