import { PostImageCover } from "../PostImageCover/PostImageCover";
import { PostSummary } from "../PostSummary/PostSummary";
import { findAllPublishedPosts } from "@/lib/post/queries";

export async function FeaturedPost() {
  const posts = await findAllPublishedPosts();
  const highlightedPost = posts?.[0];
  const slug = highlightedPost?.slug;
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group hover:cursor-pointer">
      <PostImageCover
        href={postLink}
        src={highlightedPost?.coverImageUrl}
        alt={highlightedPost?.title}
        preload={true}
      />

      <PostSummary
        title={highlightedPost?.title}
        excerpt={highlightedPost?.excerpt}
        createdAt={highlightedPost?.createdAt}
        postHeading="h1"
        postLink={postLink}
      />
    </section>
  );
}
