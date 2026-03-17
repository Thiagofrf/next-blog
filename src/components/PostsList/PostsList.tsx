import { postRepository } from "@/repositories/post"
import { PostImageCover } from "../PostImageCover/PostImageCover";
import { PostHeading } from "../PostHeading/PostHeading";
import { formatDate, formatDistanceTime } from "@/helpers/format-date";

export default async function PostsList() {
    const posts = await postRepository.findAll();

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
                const postLink = `/post/${post.slug}`

                return (
                    <div key={`post_${post.id}`} className="flex flex-col gap-4 group">
                        <PostImageCover src={post.coverImageUrl} alt={post.content} href={postLink}/>
                            <div className="flex flex-col gap-3 sm:justify-center">
                                <time className="text-slate-600 block text-sm/tight" dateTime={formatDate(post.createdAt)} title={formatDistanceTime(post.createdAt)}>{formatDate(post.createdAt)}</time>
                                <PostHeading postUrl={postLink} as="h2">
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