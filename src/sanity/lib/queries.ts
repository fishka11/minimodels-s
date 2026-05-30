import { defineQuery } from "next-sanity";

export const BABIES_QUERY = defineQuery(`
  *[_type == "model" 
    && category->title == "baby" 
    && active == true
    && defined(contractDate)
    && dateTime(contractDate + "T00:00:00Z") > dateTime($cutoffDate)
  ] | order(_createdAt desc) {
    _id, name, slug, birthDate, profileImage, "category": {
      "title": category->title,
      "displayName": category->displayName
    }
  }
`);

export const MINIBOYS_QUERY = defineQuery(`*[_type == "model"
    && category->title == "mini-boys"
    && active == true
    && defined(contractDate)
    && dateTime(contractDate + "T00:00:00Z") > dateTime($cutoffDate)] | order(_createdAt desc) {
  _id, name, slug, birthDate, profileImage, "category": {
      "title": category->title,
      "displayName": category->displayName
    }
}`);

export const MINIGIRLS_QUERY = defineQuery(`*[_type == "model"
    && category->title == "mini-girls"
    && active == true
    && defined(contractDate)
    && dateTime(contractDate + "T00:00:00Z") > dateTime($cutoffDate)] | order(_createdAt desc) {
  _id, name, slug, birthDate, profileImage, "category": {
      "title": category->title,
      "displayName": category->displayName
    }
}`);

export const TEENS_QUERY = defineQuery(`*[_type == "model"
    && category->title == "nastolatki"
    && active == true
    && defined(contractDate)
    && dateTime(contractDate + "T00:00:00Z") > dateTime($cutoffDate)] | order(_createdAt desc) {
  _id, name, slug, birthDate, profileImage, "category": {
      "title": category->title,
      "displayName": category->displayName
    }
}`);

export const MODEL_QUERY =
  defineQuery(`*[_type == "model" && slug.current == $slug][0] {
  _id,    
  _createdAt,
  name,
  birthDate,
  "category": category->title,
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
      && category->title == $category 
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
      && category->title == $category
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
  defineQuery(`*[_type == "model" && category->title == "nastolatki" && active == true && defined(slug.current)] {
    "slug": slug.current
  }`);

export const MODEL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "modelCategory" && title == $category][0] {
    _id,
    title,
    seo,
    pageTitle,
    pageSubtitle
  }
`);

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage" && _id == "homePage"][0] {
    title,
    seo,
    sections[] {
      sectionTitle,
      texts,
      button,
      video
    }
  }
`);

export const CASTING_PAGE_QUERY = defineQuery(`
  *[_type=="castingPage"][0]{
  title,
  seo,
  pageTitle,
  pageSubtitle,
  body,
  sections[] {
    sectionTitle,
    texts,
    button,
    video,
    email
  }
}
`);

export const ABOUTUS_PAGE_QUERY = defineQuery(`
  *[_type=="aboutUsPage"][0]{
  title,
  seo,
  pageTitle,
  pageSubtitle,
  body,
  sections[] {
    sectionTitle,
    texts,
    button,
    video,
    email
  }
}
`);

export const FAQ_PAGE_QUERY = defineQuery(`
  *[_type == "faqPage"][0]{
    pageTitle,
    pageSubtitle,
    faq[] {
      _key,
      question,
      answer
    }
  }
`);

export const EXPIRED_MODELS_QUERY = defineQuery(`
  *[_type == "model" && contractDate < $limitDate && active == true]{
    _id,
    name,
    contractDate
  }
`);

export const CASTING_SECTION_QUERY = defineQuery(`
      *[_type == "castingSection"][0]{
        title,
        headline { pl, en },
        subheadline { pl, en },
        blocks[] {
          internalTitle,
          title { pl, en },
          logo {
            pl { image { asset->{_id, url, alt, metadata { dimensions { width, height, aspectRatio } }} }, alt },
            en { image { asset->{_id, url, alt, metadata { dimensions { width, height, aspectRatio } }} }, alt },
          },
          description { pl[], en[] },
          button { label { pl, en }, url }
        }
      }
    `);
