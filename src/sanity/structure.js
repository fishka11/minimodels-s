// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("MiniModels")
    .items([
      S.documentTypeListItem("model").title("Modele"),
      S.documentTypeListItem('modelCategory').title('Kategorie modeli'),
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["model", "modelCategory", "post", "category", "author"].includes(item.getId()),
      ),
    ]);
