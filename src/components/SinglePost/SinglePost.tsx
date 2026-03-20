import { findPostBySlug } from "@/lib/post/queries"

type SinglePostProps = {
    slug: string
}

export async function SinglePost({ 
    slug
}: SinglePostProps) {
    const post = await findPostBySlug(slug)
    return (
        <h1 className="text-7xl font-bold py-16">
            {post?.title}
        </h1>
    )
}