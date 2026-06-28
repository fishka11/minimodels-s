// src/sanity/lib/client.js
// import { createClient } from "next-sanity";
// import { apiVersion, dataset, projectId } from "../env";

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
// });

// export async function fetchSanity({
//   query,
//   params = {},
//   revalidate = 60, // default revalidation time in seconds
//   tags = [],
// }) {
//   return client.fetch(query, params, {
//     next: {
//       revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
//       tags, // for tag-based revalidation
//     },
//   });
// }

// src/sanity/lib/client.js

// import { apiVersion, dataset, projectId } from "@/sanity/env";

// const SANITY_URL = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;

// /**
//  * fetchSanity — jedyne poprawne pobieranie danych z Sanity
//  * wspierające:
//  * - cache Next.js
//  * - ISR
//  * - tag-based revalidation
//  * - statyczne strony
//  */
// export async function fetchSanity({
//   query,
//   params = {},
//   tags = [],
//   revalidate = 60,
// }) {
//   const url = new URL(SANITY_URL);
//   url.searchParams.set("query", query);

//   if (params && Object.keys(params).length > 0) {
//     url.searchParams.set("params", JSON.stringify(params));
//   }

//   return fetch(url.toString(), {
//     next: {
//       tags,
//       revalidate: tags.length ? false : revalidate,
//     },
//   }).then((res) => res.json());
// }

// src/sanity/lib/client.js
import { apiVersion, dataset, projectId } from "../env";

const SANITY_URL = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;

export async function fetchSanity({
  query,
  params = {},
  tags = [],
  revalidate = 60,
}) {
  return fetch(SANITY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, params }),
    next: {
      tags,
      revalidate: tags.length ? false : revalidate,
    },
  })
    .then((res) => res.json())
    .then((data) => data.result);
}
