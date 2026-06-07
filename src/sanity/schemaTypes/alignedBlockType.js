// sanity/schemaTypes/alignedBlock.js
import { defineType } from "sanity";
import { AlignmentToolbar } from "../components/alignmentToolbar";
import { blockInner } from "./blockOptions";

export const alignedBlockType = defineType({
  name: "alignedBlock",
  title: "Paragraf z wyrównaniem",
  type: "object",
  components: {
    input: AlignmentToolbar,
  },
  fields: [
    {
      name: "textAlign",
      title: "Wyrównanie",
      type: "string",
      options: {
        list: [
          { title: "Do lewej", value: "left" },
          { title: "Wyśrodkowany", value: "center" },
          { title: "Do prawej", value: "right" },
          { title: "Justowanie", value: "justify" },
        ],
        layout: "dropdown",
      },
      initialValue: "left",
    },
    {
      name: "text",
      title: "Tekst",
      type: "array",
      of: [
        // wstrzykujemy współdzielony obiekt blockInner
        blockInner,
      ],
    },
  ],
});
