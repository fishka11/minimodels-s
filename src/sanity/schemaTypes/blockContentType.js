import { defineType, defineArrayMember } from "sanity";
import { ImageIcon } from "@sanity/icons";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
          {
            title: "Email",
            name: "mailto",
            type: "object",
            fields: [
              {
                title: "Adres email",
                name: "address",
                type: "string",
                validation: (Rule) => Rule.email().required(),
              },
            ],
          },

          // Kolor tekstu
          {
            title: "Kolor tekstu",
            name: "textColor",
            type: "object",
            fields: [
              {
                title: "Kolor",
                name: "color",
                type: "string",
                options: {
                  list: [
                    { title: "Różowy", value: "text-pink-500" },
                    { title: "Niebieski", value: "text-sky-500" },
                    { title: "Szary", value: "text-slate-500" },
                    { title: "Biały", value: "text-white" },
                    { title: "Czarny", value: "text-black" },
                  ],
                },
              },
            ],
          },
          // Font weight
          {
            title: "Grubość czcionki",
            name: "fontWeight",
            type: "object",
            fields: [
              {
                title: "Grubość",
                name: "weight",
                type: "string",
                options: {
                  list: [
                    { title: "Light", value: "font-light" },
                    { title: "Normal", value: "font-normal" },
                    { title: "Medium", value: "font-medium" },
                    { title: "Semibold", value: "font-semibold" },
                    { title: "Bold", value: "font-bold" },
                    { title: "Black", value: "font-black" },
                  ],
                },
              },
            ],
          },
          // Czcionka
          {
            title: "Czcionka",
            name: "fontFamily",
            type: "object",
            fields: [
              {
                title: "Czcionka",
                name: "font",
                type: "string",
                options: {
                  list: [
                    { title: "Open Sans", value: "font-sans" },
                    { title: "Serif", value: "font-serif" },
                    { title: "Mono", value: "font-mono" },
                  ],
                },
              },
            ],
          },
          // Rozmiar czcionki
          {
            title: "Rozmiar czcionki",
            name: "fontSize",
            type: "object",
            fields: [
              {
                title: "Rozmiar",
                name: "size",
                type: "string",
                options: {
                  list: [
                    { title: "XS", value: "text-xs" },
                    { title: "SM", value: "text-sm" },
                    { title: "Base", value: "text-base" },
                    { title: "LG", value: "text-lg" },
                    { title: "XL", value: "text-xl" },
                    { title: "2XL", value: "text-2xl" },
                    { title: "3XL", value: "text-3xl" },
                    { title: "4XL", value: "text-4xl" },
                  ],
                },
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "spacer",
      title: "Odstęp",
      fields: [
        {
          name: "size",
          type: "string",
          options: {
            list: [
              { title: "Mały", value: "h-4" },
              { title: "Średni", value: "h-8" },
              { title: "Duży", value: "h-16" },
            ],
          },
        },
      ],
    }),
  ],
});
