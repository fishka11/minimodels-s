import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response(
        "Missing environment variable SANITY_REVALIDATE_SECRET",
        { status: 500 },
      );
    }

    const { isValidSignature, body } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true,
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { ok: false, error: "Invalid signature", body },
        { status: 401 },
      );
    }
    // else if (!Array.isArray(body?.tags) || !body.tags.length) {
    //   const message = "Bad Request";
    //   return NextResponse.json({ message, body }, { status: 400 });
    // }

    const event = body?.event;
    const doc = body?.document;
    const prev = body?.previous;

    // 🟥 DELETE — Sanity nie wysyła tags
    if (event === "delete") {
      const slug = prev?.slug?.current;
      const category = prev?.category?.title;

      if (slug) revalidateTag(`model:${slug}`);
      if (category) revalidateTag(`category:${category}`);

      return NextResponse.json({
        ok: true,
        event,
        revalidated: [`model:${slug}`, `category:${category}`],
      });
    }

    // 🟦 CREATE / UPDATE
    if (event === "create" || event === "update") {
      const slug = doc?.slug?.current;
      const category = doc?.category?.title;

      if (slug) revalidateTag(`model:${slug}`);
      if (category) revalidateTag(`category:${category}`);
    }

    // 🟩 PUBLISH / UNPUBLISH
    if (event === "publish" || event === "unpublish") {
      const slug = doc?.slug?.current;
      const category = doc?.category?.title;

      if (slug) revalidateTag(`model:${slug}`);
      if (category) revalidateTag(`category:${category}`);
    }

    // 🟨 Jeśli Sanity wysłało tags — też revalidujemy
    if (Array.isArray(body?.tags) && body.tags.length > 0) {
      body.tags.forEach((tag) => revalidateTag(tag));
    }

    return NextResponse.json({ ok: true, event });

    // body.tags.forEach((tag) => {
    //   revalidateTag(tag);
    // });

    // return NextResponse.json({ body });
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
