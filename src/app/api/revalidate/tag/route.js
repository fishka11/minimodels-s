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
      const message = "Invalid signature";
      return NextResponse.json(
        { message, isValidSignature, body },
        { status: 401 },
      );
    } else if (!Array.isArray(body?.tags) || !body.tags.length) {
      const message = "Bad Request";
      return NextResponse.json({ message, body }, { status: 400 });
    }

    body.tags.forEach((tag) => {
      revalidateTag(tag);
    });

    return NextResponse.json({ body });
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
