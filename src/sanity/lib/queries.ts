import { defineQuery } from "next-sanity";

export const BABIES_QUERY = defineQuery(`
  *[_type == "model" 
    && category->title == "baby" 
    && active == true
    && defined(contractDate)
    && dateTime(contractDate + "T00:00:00Z") > dateTime($cutoffDate)
  ] | order(_createdAt desc) {
    _id, name, slug, birthDate, profileImage, "category": category->title
  }
`);

export const MINIBOYS_QUERY = defineQuery(`*[_type == "model"
    && category->title == "mini-boys"
    && active == true
    && defined(contractDate)
    && dateTime(contractDate + "T00:00:00Z") > dateTime($cutoffDate)] | order(_createdAt desc) {
  _id, name, slug, birthDate, profileImage, "category": category->title
}`);

export const MINIGIRLS_QUERY = defineQuery(`*[_type == "model"
    && category->title == "mini-girls"
    && active == true
    && defined(contractDate)
    && dateTime(contractDate + "T00:00:00Z") > dateTime($cutoffDate)] | order(_createdAt desc) {
  _id, name, slug, birthDate, profileImage, "category": category->title
}`);

export const TEENS_QUERY = defineQuery(`*[_type == "model"
    && category->title == "teens"
    && active == true
    && defined(contractDate)
    && dateTime(contractDate + "T00:00:00Z") > dateTime($cutoffDate)] | order(_createdAt desc) {
  _id, name, slug, birthDate, profileImage, "category": category->title
}`);

export const MODEL_QUERY =
  defineQuery(`*[_type == "model" && slug.current == $slug][0] {
  _createdAt,
  name,
  birthDate,
  "category": category->slug.current,
  profileImage, gallery[defined(asset)] {
  asset-> {
    _id,
    url,
    alt,
    metadata {
      dimensions {
        width,
        height,
        aspectRatio
      }
    }
  },
  _key,
  _type,
  alt
}, eyeColor, hairColor, hairLength, hairType
}`);

export const MODEL_SIBLINGS_QUERY = defineQuery(`
  {
    "prev": *[_type == "model" 
      && category->slug.current == $category 
      && active == true
      && defined(contractDate)
      && dateTime(contractDate + "T00:00:00Z") > dateTime($cutoffDate)
      && _createdAt > $createdAt
    ] | order(_createdAt asc)[0] {
      name,
      slug,
      profileImage
    },
    "next": *[_type == "model"
      && category->slug.current == $category
      && active == true
      && defined(contractDate)
      && dateTime(contractDate + "T00:00:00Z") > dateTime($cutoffDate)
      && _createdAt < $createdAt
    ] | order(_createdAt desc)[0] {
      name,
      slug,
      profileImage
    }
  }
`);

export const ALL_BABY_SLUGS_QUERY =
  defineQuery(`*[_type == "model" && category->title == "baby" && active == true && defined(slug.current)] {
    "slug": slug.current
  }`);

export const ALL_MINIBOYS_SLUGS_QUERY =
  defineQuery(`*[_type == "model" && category->title == "mini-boys" && active == true && defined(slug.current)] {
    "slug": slug.current
  }`);

export const ALL_MINIGIRLS_SLUGS_QUERY =
  defineQuery(`*[_type == "model" && category->title == "mini-girls" && active == true && defined(slug.current)] {
    "slug": slug.current
  }`);

export const ALL_TEENS_SLUGS_QUERY =
  defineQuery(`*[_type == "model" && category->title == "teens" && active == true && defined(slug.current)] {
    "slug": slug.current
  }`);

export const MENU_MODEL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "modelCategory" && inMenu == true] | order(title asc) {
    _id,
    inMenu,
    "slug": slug.current,
    "displayName": displayName
  }
`);

export const MODEL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "modelCategory" && title == $category][0] {
    title,
    "seo": seo_pl, // lub dynamicznie
    "seoTitle": select(
      $locale == "pl" => seo_pl.title,
      $locale == "en" => seo_en.title,
    ),
    "seoDescription": select(
      $locale == "pl" => seo_pl.description,
      $locale == "en" => seo_en.description,
    ),
    "seoKeywords": select(
      $locale == "pl" => seo_pl.keywords,
      $locale == "en" => seo_en.keywords,
    ),
  }
`);

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage" && _id == "homePage"][0] {
    title,
    sections[] {
      sectionTitle,
      texts,
      backgroundImage {
        asset-> {
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        },
        alt
      },
      pictures[] {
        asset-> {
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        },
        alt
      },
      button,
      videoUrl
    }
  }
`);
