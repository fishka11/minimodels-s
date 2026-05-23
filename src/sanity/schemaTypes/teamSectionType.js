import { defineField, defineType, defineArrayMember } from "sanity";
import { UserIcon } from "@sanity/icons";

export const teamSectionType = defineType({
  name: "teamSection",
  title: "Sekcja zespół / Team Section",
  type: "document",
  icon: UserIcon,
  fields: [
    // Tytuł sekcji PL/EN
    defineField({
      name: "title",
      title: "Tytuł sekcji / Section title",
      type: "object",
      fields: [
        defineField({ name: "pl", title: "Polski", type: "string" }),
        defineField({ name: "en", title: "English", type: "string" }),
      ],
    }),

    // LISTA CZŁONKÓW ZESPOŁU
    defineField({
      name: "members",
      title: "Członkowie zespołu / Team members",
      type: "array",
      of: [
        defineArrayMember({
          name: "teamMember",
          title: "Członek zespołu",
          type: "object",
          fields: [
            // Zdjęcie
            defineField({
              name: "photo",
              title: "Zdjęcie",
              type: "image",
              options: { hotspot: true },
            }),

            // Dane dwujęzyczne
            defineField({
              name: "content",
              title: "Dane — PL / EN",
              type: "object",
              fields: [
                // POLSKI
                defineField({
                  name: "pl",
                  title: "Polski",
                  type: "object",
                  fields: [
                    defineField({
                      name: "name",
                      title: "Imię",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Opis",
                      type: "string",
                    }),
                    defineField({
                      name: "alt",
                      title: "ALT — Polski",
                      type: "string",
                      description: "Opis alternatywny zdjęcia dla wersji PL",
                    }),
                    defineField({
                      name: "active",
                      title: "Aktywny",
                      type: "boolean",
                      initialValue: true,
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
                      name: "name",
                      title: "Name",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "string",
                    }),
                    defineField({
                      name: "alt",
                      title: "ALT — English",
                      type: "string",
                      description: "ALT text for English version",
                    }),
                    defineField({
                      name: "active",
                      title: "Active",
                      type: "boolean",
                      initialValue: true,
                    }),
                  ],
                }),
              ],
            }),
          ],

          preview: {
            select: {
              title: "content.pl.name",
              media: "photo",
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title.pl",
    },
  },
});
