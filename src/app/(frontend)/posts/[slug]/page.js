import { notFound } from "next/navigation";
import { sanityFetch, client } from "@/sanity/lib/client";
import { POST_QUERY, POSTS_SLUGS_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/components/post";

export async function generateStaticParams() {
  const slugs = await client
    .withConfig({ useCdn: false })
    .fetch(POSTS_SLUGS_QUERY);

  return slugs;
}

export default async function Page({ params }) {
  const post = await sanityFetch({
    query: POST_QUERY,
    params: await params,
    // revalidate: 3600,
    tags: [`post:${params.slug}`, "author", "category"],
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
    </main>
  );
}
