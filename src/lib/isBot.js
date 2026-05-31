// src/lib/isBot.js
import { BOT_PATTERNS } from "@/sanity/lib/bots";

export function isBot(userAgent = "") {
  const ua = userAgent.toLowerCase();
  return BOT_PATTERNS.some((pattern) => ua.includes(pattern));
}
