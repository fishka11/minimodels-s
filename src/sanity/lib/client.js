// src/sanity/lib/client.js
import { apiVersion, dataset, projectId } from "../env";

const SANITY_URL = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;

export async function fetchSanity({
  query,
  params = {},
  tags = [],
  revalidate = 21600,
}) {
  try {
    // przygotowanie obiektu next tylko gdy trzeba (unikamy next: { tags: [] })
    const nextOptions = {};

    // 🔒 Obsługa tagów — zakomentowana na Netlify
    // Jeśli kiedyś przejdzę na Vercel, trzeba odkomentować poniższy blok:
    // if (Array.isArray(tags) && tags.length > 0) {
    //   nextOptions.tags = tags;
    //   // gdy mamy tagi, chcemy kontrolować revalidation ręcznie przez revalidateTag
    //   nextOptions.revalidate = false;
    // } else {
    //   nextOptions.revalidate = revalidate;
    // }

    // 🔧 Netlify: używamy tylko time-based revalidation
    nextOptions.revalidate = revalidate;

    const res = await fetch(SANITY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, params }),
      next: nextOptions,
    });

    // sprawdznie statusu odpowiedzi
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      const msg = `Sanity fetch error: ${res.status} ${res.statusText} ${text}`;
      console.error(msg);
      throw new Error(msg);
    }

    const data = await res.json().catch((err) => {
      console.error("Failed to parse JSON from Sanity:", err);
      throw err;
    });

    if (!data || typeof data.result === "undefined") {
      const msg = "Sanity response missing result field";
      console.error(msg, data);
      throw new Error(msg);
    }

    return data.result;
  } catch (err) {
    // logujowanie i przepuszczanie błędu dalej — caller może zdecydować co zrobić
    console.error("fetchSanity error:", err);
    throw err;
  }

  // return fetch(SANITY_URL, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ query, params }),
  //   next: {
  //     tags,
  //     revalidate: tags.length ? false : revalidate,
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => data.result);
}
