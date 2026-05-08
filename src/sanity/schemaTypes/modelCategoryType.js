// src/sanity/schemaTypes/modelCategoryType.js
import { defineField, defineType } from "sanity";

export const modelCategoryType = defineType({
  name: "modelCategory",
  title: "Kategoria modela",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nazwa kategorii",
      type: "string",
      options: {
        list: [
          { title: "Baby", value: "baby" },
          { title: "Mini Girls", value: "mini-girls" },
          { title: "Mini Boys", value: "mini-boys" },
          { title: "Nastolatki / Teenagers", value: "teens" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "inMenu",
      title: "Pokazuj w menu / Show in menu",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "displayName",
      title: "Nazwa wyświetlana / Display name",
      type: "object",
      fields: [
        defineField({
          name: "pl",
          title: "Polski",
          type: "string",
          description: 'np. "Nastolatki"',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "en",
          title: "English",
          type: "string",
          description: 'e.g. "Teenagers"',
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    // SEO — wersja polska
    defineField({
      name: "seo_pl",
      title: "SEO — Polski",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "SEO Title",
          type: "string",
          description: "Tytuł strony dla wyszukiwarek (ok. 60 znaków)",
          validation: (rule) => rule.max(60),
        }),
        defineField({
          name: "description",
          title: "SEO Description",
          type: "text",
          rows: 3,
          description: "Opis strony dla wyszukiwarek (ok. 155 znaków)",
          validation: (rule) => rule.max(155),
        }),
        defineField({
          name: "keywords",
          title: "SEO Keywords",
          type: "array",
          of: [{ type: "string" }],
          options: { layout: "tags" },
        }),
      ],
    }),

    // SEO — wersja angielska
    defineField({
      name: "seo_en",
      title: "SEO — English",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "SEO Title",
          type: "string",
          description: "Page title for search engines (approx. 60 characters)",
          validation: (rule) => rule.max(60),
        }),
        defineField({
          name: "description",
          title: "SEO Description",
          type: "text",
          rows: 3,
          description:
            "Page description for search engines (approx. 155 characters)",
          validation: (rule) => rule.max(155),
        }),
        defineField({
          name: "keywords",
          title: "SEO Keywords",
          type: "array",
          of: [{ type: "string" }],
          options: { layout: "tags" },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "displayName.pl",
      subtitle: "title",
    },
  },
});
