// src/sanity/schemaTypes/blockOptions.js
import { Link, Mail, Droplet, Type, ALargeSmall, Bold } from "lucide-react";

export const blockInner = {
  type: "block",
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
  marks: {
    decorators: [
      { title: "Strong", value: "strong" },
      { title: "Emphasis", value: "em" },
    ],
    annotations: [
      {
        title: "URL",
        name: "link",
        type: "object",
        icon: Link, // ikona dla linku
        fields: [{ title: "URL", name: "href", type: "url" }],
      },
      {
        title: "Email",
        name: "mailto",
        type: "object",
        icon: Mail, // lucide-react Mail icon
        fields: [
          {
            title: "Adres email",
            name: "address",
            type: "string",
            validation: (Rule) => Rule.email().required(),
          },
        ],
      },
      {
        title: "Kolor tekstu",
        name: "textColor",
        type: "object",
        icon: Droplet, // lucide-react Droplet icon
        fields: [
          {
            title: "Kolor",
            name: "color",
            type: "string",
            options: {
              list: [
                { title: "Różowy", value: "text-pink-500" },
                { title: "Czerwony", value: "text-red-500" },
                { title: "Niebieski", value: "text-sky-500" },
                { title: "Szary", value: "text-slate-700" },
                { title: "Biały", value: "text-white" },
                { title: "Czarny", value: "text-black" },
              ],
            },
          },
        ],
      },
      {
        title: "Grubość czcionki",
        name: "fontWeight",
        type: "object",
        icon: Bold, // lucide-react Bold icon
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
      {
        title: "Czcionka",
        name: "fontFamily",
        type: "object",
        icon: Type, // lucide-react Type icon (możesz zmienić)
        fields: [
          {
            title: "Czcionka",
            name: "font",
            type: "string",
            options: {
              list: [
                { title: "System (domyślna)", value: "" },
                { title: "Open Sans", value: "font-sans" },
                { title: "Serif", value: "font-serif" },
                { title: "Mono", value: "font-mono" },
                { title: "Lora (Google Fonts)", value: "font-lora" }, // <- nowa
                {
                  title: "Shadows Into Light Two (Google Fonts)",
                  value: "font-shadows-into-light-two",
                },
              ],
            },
          },
        ],
      },
      {
        title: "Rozmiar czcionki",
        name: "fontSize",
        type: "object",
        icon: ALargeSmall, // lucide-react TextSize icon
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
};
