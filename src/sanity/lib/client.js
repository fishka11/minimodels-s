// src/sanity/lib/client.js
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// const SANITY_URL = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // ważne: pełne dane, ale cache Next.js nadal działa
});

export async function sanityFetch({
  query,
  params = {},
  tags = [],
  revalidate = 21600,
}) {
  const nextOptions = {};

  // 🔵 Netlify (obecnie)
  nextOptions.revalidate = revalidate;

  // 🟣 Vercel (odkomentujesz kiedy przejdziesz)
  // if (tags.length > 0) {
  //   nextOptions.tags = tags;
  //   nextOptions.revalidate = false;
  // }

  return client.fetch(query, params, {
    next: nextOptions,
  });
}
