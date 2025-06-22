import Link from "next/link";
import { getAllBlogSlugs, getBlogData } from "../../../lib/blogs";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs;
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogData = await getBlogData(params.slug);

  if (!blogData) return notFound();

  return (
    <article className="relative w-[600px] mx-auto my-16 px-8">
      <h1 className="text-2xl font-semibold pb-3">{blogData.title}</h1>
      <p className="text-xs pb-3 text-gray-500">{blogData.date}</p>
      <div
        className="mt-4 blogpost"
        dangerouslySetInnerHTML={{ __html: blogData.contentHtml }}
      />
      <div className="fixed top-4 left-4">
        <Link href="/" className="text-gray-400 hover:text-gray-700">
          {"< "}Back
        </Link>
      </div>
    </article>
  );
}
