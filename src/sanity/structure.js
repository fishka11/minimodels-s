// src/sanity/structure.js
import { HomeIcon } from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("MiniModels")
    .items([
      S.documentTypeListItem("model").title("Modele / Models"),
      S.documentTypeListItem("modelCategory").title(
        "Kategorie modeli / Model Categories",
      ),
      // S.documentTypeListItem("post").title("Posts"),
      // S.documentTypeListItem("category").title("Categories"),
      // S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      // Singleton — strona główna
      S.listItem()
        .title("Strona główna / Home Page")
        .icon(HomeIcon)
        .child(S.document().schemaType("homePage").documentId("homePage")),
      // Singleton — strona Casting
      S.listItem()
        .title("Castingi / Casting")
        .icon(HomeIcon)
        .child(
          S.document().schemaType("castingPage").documentId("castingPage"),
        ),
      // Singleton — strona Pomoc
      S.listItem()
        .title("Pomoc / FAQ")
        .icon(HomeIcon)
        .child(S.document().schemaType("faqPage").documentId("faqPage")),
      // Singleton — strona O nas
      S.listItem()
        .title("O nas / About us")
        .icon(HomeIcon)
        .child(
          S.document().schemaType("aboutUsPage").documentId("aboutUsPage"),
        ),
      // Singleton — strona Kontakt
      S.listItem()
        .title("Kontakt / Contact")
        .icon(HomeIcon)
        .child(
          S.document().schemaType("contactPage").documentId("contactPage"),
        ),
      S.divider(),
      // Singleton — sekcja Castingi
      S.listItem()
        .title("Sekcja Castingi / Castings section")
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType("castingSection")
            .documentId("castingSection"),
        ),
      // Singleton — sekcja Kontakt
      S.listItem()
        .title("Sekcja Kontakt / Contact section")
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType("contactSection")
            .documentId("contactSection"),
        ),
      S.listItem()
        .title("Sekcja Zespół / Team section")
        .icon(HomeIcon)
        .child(
          S.document().schemaType("teamSection").documentId("teamSection"),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "homePage",
            "model",
            "modelCategory",
            "castingPage",
            "faqPage",
            "aboutUsPage",
            "contactPage",
            "castingSection",
            "contactSection",
            "teamSection",
            // "post",
            // "category",
            // "author",
          ].includes(item.getId()),
      ),
    ]);
