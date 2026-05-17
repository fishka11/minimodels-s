// src/sanity/schemaTypes/modelType.js
import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const modelType = defineType({
  name: "model",
  title: "Model",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Imię i nazwisko (inicjał)",
      type: "string",
      description: 'np. "Ksawery K."',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategoria",
      type: "reference",
      to: [{ type: "modelCategory" }],
      options: { layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "birthDate",
      title: "Data urodzenia",
      type: "date",
      options: { dateFormat: "DD-MM-YYYY" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "profileImage",
      title: "Zdjęcie profilowe",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Tekst alternatywny / Alt text",
          type: "string",
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Galeria zdjęć / Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Tekst alternatywny / Alt text",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "eyeColor",
      title: "Kolor oczu / Eye color",
      type: "string",
      options: {
        list: [
          { title: "Niebieskie / Blue", value: "blue" },
          { title: "Zielone / Green", value: "green" },
          { title: "Brązowe / Brown", value: "brown" },
          { title: "Ciemnobrązowe / Dark Brown", value: "dark-brown" },
          { title: "Szare / Grey", value: "grey" },
          { title: "Piwne / Hazel", value: "hazel" },
        ],
      },
    }),
    defineField({
      name: "hairColor",
      title: "Kolor włosów / Hair color",
      type: "string",
      options: {
        list: [
          { title: "Białe / White", value: "white" },
          { title: "Jasny blond / Light blonde", value: "light-blonde" },
          { title: "Blond / Blonde", value: "blonde" },
          { title: "Ciemny blond / Dark blonde", value: "dark-blonde" },
          { title: "Rude / Red", value: "red" },
          { title: "Jasnobrązowe / Light brown", value: "light-brown" },
          { title: "Brązowe / Brown", value: "brown" },
          { title: "Ciemnobrązowe / Dark brown", value: "dark-brown" },
          { title: "Czarne / Black", value: "black" },
        ],
      },
    }),
    defineField({
      name: "hairLength",
      title: "Długość włosów / Hair length",
      type: "string",
      options: {
        list: [
          { title: "Krótkie / Short", value: "short" },
          { title: "Półdługie / Medium-length", value: "medium" },
          { title: "Długie / Long", value: "long" },
        ],
      },
    }),
    defineField({
      name: "hairType",
      title: "Typ włosów / Hair type",
      type: "string",
      options: {
        list: [
          { title: "Proste / Straight", value: "straight" },
          {
            title: "Podatne na kręcenie / Prone to curling",
            value: "prone-to-curling",
          },
          { title: "Falowane / Wavy", value: "wavy" },
          { title: "Kręcone / Curly", value: "curly" },
          { title: "Loki / Curls", value: "curls" },
        ],
      },
    }),
    defineField({
      name: "active",
      title: "Aktywny profil / Active profile",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "contractDate",
      title: "Data podpisania umowy / Contract date",
      type: "date",
      options: { dateFormat: "DD-MM-YYYY" },
    }),
    defineField({
      name: "viewsAll",
      title: "All views / Wszystkie wejścia",
      type: "number",
      initialValue: 0,
      readOnly: true,
    }),

    defineField({
      name: "viewsHuman",
      title: "Human views / Wejścia (bez botów)",
      type: "number",
      initialValue: 0,
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      categoryTitle: "category.title",
      media: "profileImage", // Pobranie pola z grafiką
      createdAt: "_createdAt",
    },
    prepare(selection) {
      const { title, categoryTitle, media, createdAt } = selection;

      // Formatowanie daty (RRRR-MM-DD)
      const date = createdAt
        ? new Date(createdAt).toLocaleDateString("pl-PL")
        : "";

      // Budowanie podtytułu
      const categoryLabel = categoryTitle
        ? `[${categoryTitle}]`
        : "[Brak kategorii]";
      const dateLabel = date ? `Utworzono: ${date}` : "";

      return {
        title: title,
        subtitle: `${categoryLabel} ${dateLabel}`.trim(),
        media: media, // Przekazanie grafiki/ikony do wyświetlenia obok elementu
      };
    },
  },
});
