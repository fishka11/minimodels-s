// src/sanity/schemaTypes/homePageType.js
import { defineField, defineType, defineArrayMember } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const homePageType = defineType({
  name: "homePage",
  title: "Strona główna / Home Page",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Tytuł strony (wewnętrzny)",
      type: "string",
      initialValue: "Strona główna",
      readOnly: true,
    }),

    // SEO — wersja polska
    defineField({
      name: "seo_pl",
      title: "SEO — Polski",
      type: "object",
      fields: [
        defineField({
          name: "seoTitle",
          title: "SEO Title",
          type: "string",
          description: "Tytuł strony dla wyszukiwarek (ok. 60 znaków)",
          validation: (rule) => rule.max(60),
        }),
        defineField({
          name: "seoDescription",
          title: "SEO Description",
          type: "text",
          rows: 3,
          description: "Opis strony dla wyszukiwarek (ok. 155 znaków)",
          validation: (rule) => rule.max(155),
        }),
        defineField({
          name: "seoKeywords",
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
          name: "seoTitle",
          title: "SEO Title",
          type: "string",
          description: "Page title for search engines (approx. 60 characters)",
          validation: (rule) => rule.max(60),
        }),
        defineField({
          name: "seoDescription",
          title: "SEO Description",
          type: "text",
          rows: 3,
          description:
            "Page description for search engines (approx. 155 characters)",
          validation: (rule) => rule.max(155),
        }),
        defineField({
          name: "seoKeywords",
          title: "SEO Keywords",
          type: "array",
          of: [{ type: "string" }],
          options: { layout: "tags" },
        }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Sekcje / Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "section",
          title: "Sekcja",
          type: "object",
          fields: [
            defineField({
              name: "sectionTitle",
              title: "Nazwa sekcji (wewnętrzna)",
              type: "string",
              description: 'np. "Sekcja#1"',
              validation: (rule) => rule.required(),
            }),

            // Teksty — dwujęzyczne
            defineField({
              name: "texts",
              title: "Teksty / Texts",
              type: "object",
              fields: [
                defineField({
                  name: "pl",
                  title: "Polski",
                  type: "array",
                  of: [defineArrayMember({ type: "text", rows: 3 })],
                  description: "Każdy element to osobny akapit",
                }),
                defineField({
                  name: "en",
                  title: "English",
                  type: "array",
                  of: [defineArrayMember({ type: "text", rows: 3 })],
                  description: "Each item is a separate paragraph",
                }),
              ],
            }),

            // defineField({
            //   name: "body",
            //   type: "blockContent",
            // }),

            // // Obrazek tła
            // defineField({
            //   name: "backgroundImage",
            //   title: "Obrazek tła / Background image",
            //   type: "image",
            //   options: { hotspot: true },
            //   fields: [
            //     defineField({
            //       name: "alt",
            //       title: "Tekst alternatywny / Alt text",
            //       type: "object",
            //       fields: [
            //         defineField({
            //           name: "pl",
            //           title: "Polski",
            //           type: "string",
            //         }),
            //         defineField({
            //           name: "en",
            //           title: "English",
            //           type: "string",
            //         }),
            //       ],
            //     }),
            //   ],
            //   validation: (rule) => rule.required(),
            // }),

            // Zdjęcia
            // defineField({
            //   name: "pictures",
            //   title: "Zdjęcia / Pictures",
            //   type: "array",
            //   of: [
            //     defineArrayMember({
            //       type: "image",
            //       options: { hotspot: true },
            //       fields: [
            //         defineField({
            //           name: "alt",
            //           title: "Tekst alternatywny / Alt text",
            //           type: "object",
            //           fields: [
            //             defineField({
            //               name: "pl",
            //               title: "Polski",
            //               type: "string",
            //             }),
            //             defineField({
            //               name: "en",
            //               title: "English",
            //               type: "string",
            //             }),
            //           ],
            //         }),
            //       ],
            //     }),
            //   ],
            // }),

            // Przycisk
            // defineField({
            //   name: "button",
            //   title: "Przycisk / Button",
            //   type: "object",
            //   fields: [
            //     defineField({
            //       name: "label",
            //       title: "Tekst przycisku / Button label",
            //       type: "object",
            //       fields: [
            //         defineField({
            //           name: "pl",
            //           title: "Polski",
            //           type: "string",
            //         }),
            //         defineField({
            //           name: "en",
            //           title: "English",
            //           type: "string",
            //         }),
            //       ],
            //     }),
            //     defineField({
            //       name: "url",
            //       title: "URL",
            //       type: "string",
            //       description: 'np. "/baby" lub "https://..."',
            //     }),
            //   ],
            // }),

            // Link do video
            defineField({
              name: "videoUrl",
              title: "Link do video / Video URL",
              type: "url",
              description: "YouTube, Vimeo lub inny link do video",
            }),
          ],
          preview: {
            select: {
              title: "sectionTitle",
              // media: "backgroundImage",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
