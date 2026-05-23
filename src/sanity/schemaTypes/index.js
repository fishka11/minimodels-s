import { modelType } from "./modelType";
import { modelCategoryType } from "./modelCategoryType";
import { blockContentType } from "./blockContentType";
// import { categoryType } from "./categoryType";
// import { postType } from "./postType";
// import { authorType } from "./authorType";
import { homePageType } from "./homePageType";
import { castingPageType } from "./castingPageType";
import { faqPageType } from "./faqPageType";
import { aboutUsPageType } from "./aboutUsPageType";
import { contactPageType } from "./contactPageType";
import { castingSectionType } from "./castingSectionType";
import { contactSectionType } from "./contactSectionType";
import { teamSectionType } from "./teamSectionType";

export const schema = {
  types: [
    castingSectionType,
    contactSectionType,
    teamSectionType,
    homePageType,
    castingPageType,
    faqPageType,
    aboutUsPageType,
    contactPageType,
    modelType,
    modelCategoryType,
    blockContentType,
    // categoryType,
    // postType,
    // authorType,
  ],
};
