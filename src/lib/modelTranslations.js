// src/lib/modelTranslations.js

export const modelTranslations = {
  pl: {
    localeCode: "pl-PL",
    eyeColor: {
      blue: "Niebieskie",
      green: "Zielone",
      brown: "Brązowe",
      "dark-brown": "Ciemnobrązowe",
      grey: "Szare",
      hazel: "Piwne",
    },
    hairColor: {
      white: "Białe",
      "light-blonde": "Jasny blond",
      blonde: "Blond",
      "dark-blonde": "Ciemny blond",
      red: "Rude",
      "light-brown": "Jasnobrązowe",
      brown: "Brązowe",
      "dark-brown": "Ciemnobrązowe",
      black: "Czarne",
    },
    hairLength: {
      short: "Krótkie",
      medium: "Półdługie",
      long: "Długie",
    },
    hairType: {
      straight: "Proste",
      wavy: "Falowane",
      curly: "Kręcone",
      curls: "Loki",
    },
    labels: {
      eyeColor: "Kolor oczu",
      hairColor: "Kolor włosów",
      hairLength: "Długość włosów",
      hairType: "Typ włosów",
      birthDate: "Data urodzenia",
    },
  },
  en: {
    localeCode: "en-GB",
    eyeColor: {
      blue: "Blue",
      green: "Green",
      brown: "Brown",
      grey: "Grey",
      hazel: "Hazel",
    },
    hairColor: {
      "light-blonde": "Light blonde",
      blonde: "Blonde",
      "dark-blonde": "Dark blonde",
      red: "Red",
      "light-brown": "Light brown",
      brown: "Brown",
      "dark-brown": "Dark brown",
      black: "Black",
    },
    hairLength: {
      short: "Short",
      medium: "Medium-length",
      long: "Long",
    },
    hairType: {
      straight: "Straight",
      wavy: "Wavy",
      curly: "Curly",
      curls: "Curls",
    },
    labels: {
      eyeColor: "Eye color",
      hairColor: "Hair color",
      hairLength: "Hair length",
      hairType: "Hair type",
      birthDate: "Date of birth",
    },
  },
};

//  Zwraca przetłumaczoną wartość pola modela.
//  @param {string} locale - "pl" lub "en"
//  @param {string} field - np. "hairType"
//  @param {string} value - np. "straight"
//  @returns {string}
export function translateValue(locale, field, value) {
  return modelTranslations[locale]?.[field]?.[value] ?? value;
}

//  Zwraca przetłumaczony label pola.
//  @param {string} locale - "pl" lub "en"
//  @param {string} field - np. "hairType"
//  @returns {string}
export function translateLabel(locale, field) {
  return modelTranslations[locale]?.labels?.[field] ?? field;
}

//  Formatuje datę urodzenia zgodnie z locale.
//  @param {string} dateString - np. "2023-05-14"
//  @param {string} locale - "pl" lub "en"
//  @returns {string|null}
export function formatBirthDateLong(dateString, locale) {
  if (!dateString) return null;
  const localeCode = modelTranslations[locale]?.localeCode ?? "en-GB";
  return new Date(dateString).toLocaleDateString(localeCode, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function formatBirthDateShort(dateString, locale) {
  if (!dateString) return null;
  const localeCode = modelTranslations[locale]?.localeCode ?? "en-GB";
  return new Date(dateString).toLocaleDateString(localeCode, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
