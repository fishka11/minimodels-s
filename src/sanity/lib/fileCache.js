import fs from "fs";

const CACHE_PATH = "/tmp/sanity.json";

export function readSanityCache() {
  try {
    if (fs.existsSync(CACHE_PATH)) {
      const raw = fs.readFileSync(CACHE_PATH, "utf8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("readSanityCache error:", err);
  }
  return null;
}

export function writeSanityCache(data) {
  try {
    fs.writeFileSync(CACHE_PATH, JSON.stringify(data), "utf8");
  } catch (err) {
    console.error("writeSanityCache error:", err);
  }
}
