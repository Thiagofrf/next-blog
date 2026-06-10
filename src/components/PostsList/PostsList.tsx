import { postRepository } from "@/repositories/post"
import { PostImageCover } from "../PostImageCover/PostImageCover";
import { PostSummary } from "../PostSummary/PostSummary";
import { findAllPublicPublishedPosts } from "@/lib/post/queries/public";

export default async function PostsList() {
    const posts = await findAllPublicPublishedPosts();

    return (
        <div className="grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post) => {
                const postLink = `/post/${post.slug}`

                return (
                    <div key={`post_${post.id}`} className="flex flex-col gap-4 group">
                        <PostImageCover 
                            src={post.coverImageUrl} 
                            alt={post.content} 
                            href={postLink}
                        />

                        <PostSummary 
                            postHeading="h2" 
                            postLink={postLink} 
                            createdAt={post.createdAt}
                            title={post.title} 
                            excerpt={post.excerpt}
                        />
                    </div>
                )
            })}
        </div>
    )
}