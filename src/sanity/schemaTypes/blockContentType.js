import { defineType, defineArrayMember } from "sanity";
import { blockInner } from "./blockOptions";
import { alignedBlockType } from "./alignedBlockType";
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
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember(blockInner), // używamy współdzielonego obiektu
    defineArrayMember(alignedBlockType),
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
