// src/sanity/schemaTypes/castingSectionType.js
import { defineField, defineType, defineArrayMember } from "sanity";
import { UsersIcon } from "@sanity/icons";

export const castingSectionType = defineType({
  name: "castingSection",
  title: "Sekcja Castingów / Casting Section",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "title",
      title: "Tytuł sekcji (wewnętrzny)",
      type: "string",
      initialValue: "Castingi",
      readOnly: true,
    }),

    // Nagłówek sekcji
    defineField({
      name: "headline",
      title: "Nagłówek / Headline",
      type: "object",
      fields: [
        defineField({ name: "pl", title: "Polski", type: "string" }),
        defineField({ name: "en", title: "English", type: "string" }),
      ],
    }),

    defineField({
      name: "subheadline",
      title: "Podtytuł / Subheadline",
      type: "object",
      fields: [
        defineField({ name: "pl", title: "Polski", type: "string" }),
        defineField({ name: "en", title: "English", type: "string" }),
      ],
    }),

    // BLOKI (lewy i prawy)
    defineField({
      name: "blocks",
      title: "Bloki / Blocks",
      type: "array",
      of: [
        defineArrayMember({
          name: "castingBlock",
          title: "Blok",
          type: "object",
          fields: [
            defineField({
              name: "internalTitle",
              title: "Nazwa bloku (wewnętrzna)",
              type: "string",
              description: "np. MiniModels / Academy",
            }),

            // Dwujęzyczny tytuł bloku
            defineField({
              name: "title",
              title: "Tytuł bloku / Block title",
              type: "object",
              fields: [
                defineField({ name: "pl", title: "Polski", type: "string" }),
                defineField({ name: "en", title: "English", type: "string" }),
              ],
            }),

            defineField({
              name: "logo",
              title: "Logo",
              type: "object",
              fields: [
                // POLSKI
                defineField({
                  name: "pl",
                  title: "Polski",
                  type: "object",
                  fields: [
                    defineField({
                      name: "image",
                      title: "Logo — Polski",
                      type: "image",
                      options: { hotspot: true },
                    }),
                    defineField({
                      name: "alt",
                      title: "ALT — Polski",
                      type: "string",
                      description: "Opis alternatywny obrazu dla wersji PL",
                    }),
                  ],
                }),

                // ENGLISH
                defineField({
                  name: "en",
                  title: "English",
                  type: "object",
                  fields: [
                    defineField({
                      name: "image",
                      title: "Logo — English",
                      type: "image",
                      options: { hotspot: true },
                    }),
                    defineField({
                      name: "alt",
                      title: "ALT — English",
                      type: "string",
                      description: "ALT text for English version",
                    }),
                  ],
                }),
              ],
            }),

            // Opis — PL / EN
            defineField({
              name: "description",
              title: "Opis / Description",
              type: "object",
              fields: [
                defineField({
                  name: "pl",
                  title: "Polski",
                  type: "array",
                  of: [defineArrayMember({ type: "text" })],
                  description: "Każdy element to osobny akapit",
                }),
                defineField({
                  name: "en",
                  title: "English",
                  type: "array",
                  of: [defineArrayMember({ type: "text" })],
                  description: "Each item is a separate paragraph",
                }),
              ],
            }),

            // Przycisk
            defineField({
              name: "button",
              title: "Przycisk / Button",
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  title: "Tekst przycisku / Button label",
                  type: "object",
                  fields: [
                    defineField({
                      name: "pl",
                      title: "Polski",
                      type: "string",
                    }),
                    defineField({
                      name: "en",
                      title: "English",
                      type: "string",
                    }),
                  ],
                }),
                defineField({
                  name: "url",
                  title: "URL",
                  type: "string",
                }),
              ],
            }),
          ],

          preview: {
            select: {
              title: "internalTitle",
              media: "logo",
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
