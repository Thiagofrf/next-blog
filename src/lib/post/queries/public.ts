import { postRepository } from "@/repositories/post"
import { cacheLife, cacheTag } from "next/cache";
import { notFound } from "next/navigation";

export const findAllPublicPublishedPosts = async () => {
    "use cache"
    cacheTag('posts')
    cacheLife("hours")

    return await postRepository.findAllPublished()
}

export const findPublicPostBySlug = async (slug: string) => { 
    "use cache"
    cacheTag(`post-${slug}`)
    cacheLife("hours")
    const post = await postRepository.findBySlug(slug).catch(() => undefined)

    if (!post) notFound()
        
    return post
}