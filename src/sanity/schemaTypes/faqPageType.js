import { defineField, defineType, defineArrayMember } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const faqPageType = defineType({
  name: "faqPage",
  title: "Pomoc / FAQ",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Tytuł strony (wewnętrzny)",
      type: "string",
      initialValue: "Pomoc",
      readOnly: true,
    }),

    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        // SEO PL
        defineField({
          name: "pl",
          title: "Polski",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "SEO Title",
              type: "string",
              validation: (rule) => rule.max(60),
            }),
            defineField({
              name: "description",
              title: "SEO Description",
              type: "text",
              rows: 3,
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

        // SEO EN
        defineField({
          name: "en",
          title: "English",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "SEO Title",
              type: "string",
              validation: (rule) => rule.max(60),
            }),
            defineField({
              name: "description",
              title: "SEO Description",
              type: "text",
              rows: 3,
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
    }),

    // SEKCJE FAQ
    defineField({
      name: "sections",
      title: "Sekcje / Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "faqSection",
          title: "Sekcja FAQ",
          type: "object",
          fields: [
            defineField({
              name: "sectionTitle",
              title: "Nazwa sekcji (wewnętrzna)",
              type: "string",
              validation: (rule) => rule.required(),
            }),

            // LISTA PYTAŃ I ODPOWIEDZI
            defineField({
              name: "items",
              title: "Pytania i odpowiedzi / FAQ items",
              type: "array",
              of: [
                defineArrayMember({
                  name: "faqItem",
                  title: "Pytanie i odpowiedź",
                  type: "object",
                  fields: [
                    // PYTANIE
                    defineField({
                      name: "question",
                      title: "Pytanie / Question",
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

                    // ODPOWIEDŹ
                    defineField({
                      name: "answer",
                      title: "Odpowiedź / Answer",
                      type: "object",
                      fields: [
                        defineField({
                          name: "pl",
                          title: "Polski",
                          type: "array",
                          of: [defineArrayMember({ type: "text", rows: 3 })],
                        }),
                        defineField({
                          name: "en",
                          title: "English",
                          type: "array",
                          of: [defineArrayMember({ type: "text", rows: 3 })],
                        }),
                      ],
                    }),
                  ],

                  preview: {
                    select: {
                      title: "question.pl",
                    },
                  },
                }),
              ],
            }),
          ],

          preview: {
            select: {
              title: "sectionTitle",
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
