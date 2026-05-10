import { modelType } from "./modelType";
import { modelCategoryType } from "./modelCategoryType";
import { blockContentType } from "./blockContentType";
// import { categoryType } from "./categoryType";
// import { postType } from "./postType";
// import { authorType } from "./authorType";
import { homePageType } from "./homePageType";

export const schema = {
  types: [
    homePageType,
    modelType,
    modelCategoryType,
    blockContentType,
    // categoryType,
    // postType,
    // authorType,
  ],
};
