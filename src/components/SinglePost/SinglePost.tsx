import { findPostBySlug } from "@/lib/post/queries"
import Image from "next/image"
import { PostHeading } from "../PostHeading/PostHeading"
import { PostDate } from "../PostDate/PostDate"

type SinglePostProps = {
    slug: string
}

export async function SinglePost({ 
    slug
}: SinglePostProps) {
    const post = await findPostBySlug(slug)

    return (
        <article className="mb-16">
            <header className="flex flex-col gap-3 mb-10">
                <Image 
                    className="rounded-xl"
                    src={post.coverImageUrl} 
                    width={1200}
                    height={720}
                    alt={post.title}
                />

                <PostHeading as="h1">
                    {post.title}
                </PostHeading>

                <p>
                    {post.author} | <PostDate dateTime={post.createdAt} />
                </p>    
            </header>

            <p>
                {post.content}
            </p>
            
        </article>
    )
}