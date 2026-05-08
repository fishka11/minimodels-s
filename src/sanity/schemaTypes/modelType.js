// src/sanity/schemaTypes/modelType.js
import { defineField, defineType } from "sanity"
import { UserIcon } from "@sanity/icons"

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
          { title: "Jasny blond / Light blonde", value: "light-blonde" },
          { title: "Blond / Blonde", value: "blonde" },
          { title: "Ciemny blond / Dark blonde", value: "dark-blonde" },
          { title: "Brązowe / Brown", value: "brown" },
          { title: "Czarne / Black", value: "black" },
          { title: "Rude / Red", value: "red" },
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
          { title: "Średnie / Medium", value: "medium" },
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
          { title: "Falowane / Wavy", value: "wavy" },
          { title: "Kręcone / Curly", value: "curly" },
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

  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.title",
      media: "profileImage",
    },
  },
})