import Image from "next/image"
import { cacheLife } from "next/cache"
import { PostHeading } from "../PostHeading/PostHeading"
import { PostDate } from "../PostDate/PostDate"
import { SafeMarkdown } from "../SafeMarkdown/SafeMarkdown"
import { findPublicPostBySlug } from "@/lib/post/queries/public"

type SinglePostProps = {
    slug: string
}

export async function SinglePost({ 
    slug
}: SinglePostProps) {
    'use cache'
    cacheLife('max')
    const post = await findPublicPostBySlug(slug)

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

            <SafeMarkdown markdown={post.content}/>
            
        </article>
    )
}