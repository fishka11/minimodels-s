import { modelType } from "./modelType";
import { modelCategoryType } from "./modelCategoryType"
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";

export const schema = {
  types: [modelType, modelCategoryType, blockContentType, categoryType, postType, authorType],
};
