// src/sanity/structure.js
import { HomeIcon } from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("MiniModels")
    .items([
      // Singleton — strona główna
      S.listItem()
        .title("Strona główna / Home Page")
        .icon(HomeIcon)
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.divider(),
      S.documentTypeListItem("model").title("Modele / Models"),
      S.documentTypeListItem("modelCategory").title(
        "Kategorie modeli / Model Categories",
      ),
      // S.documentTypeListItem("post").title("Posts"),
      // S.documentTypeListItem("category").title("Categories"),
      // S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "homePage",
            "model",
            "modelCategory",
            // "post",
            // "category",
            // "author",
          ].includes(item.getId()),
      ),
    ]);
