// src/lib/getText.js
export function getText(texts, locale, index) {
  return texts?.[locale]?.[index] ?? "";
}
