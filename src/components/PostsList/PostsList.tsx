import { postRepository } from "@/repositories/post"
import { PostImageCover } from "../PostImageCover/PostImageCover";
import { PostHeading } from "../PostHeading/PostHeading";

export default async function PostsList() {
    const posts = await postRepository.findAll();

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
                return (
                    <div key={`post_${post.id}`} className="flex flex-col gap-4 group">
                        <PostImageCover src={post.coverImageUrl} alt={post.content} href={`/post/${post.slug}`}/>
                            <div className="flex flex-col gap-3 sm:justify-center">
                                <time className="text-slate-600 block text-sm/tight" dateTime="2026-03-11">{post.createdAt}</time>
                                <PostHeading postUrl="#" as="h2">
                                    {post.title}
                                </PostHeading>
                                <p>
                                    {post.excerpt}
                                </p>
                            </div>
                    </div>
                )
            })}
        </div>
    )
}