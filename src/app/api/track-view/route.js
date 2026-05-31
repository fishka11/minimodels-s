// src/app/api/track-view/route.js
import { trackView } from "@/lib/trackView";

export async function POST(request) {
  const { modelId } = await request.json();
  const ua = request.headers.get("user-agent") || "";
  await trackView(modelId, ua);
  return new Response(null, { status: 204 });
}
