import { postRepository } from "@/repositories/post"
import { cacheLife, cacheTag } from "next/cache";
import { notFound } from "next/navigation";

export const findAllPublishedPosts = async () => {
    "use cache"
    cacheTag('posts')
    cacheLife("hours")

    return await postRepository.findAllPublished()
}


export const findPostBySlug = async (slug: string) => { 
    "use cache"
    cacheTag(`post-${slug}`)
    cacheLife("hours")
    const post = await postRepository.findBySlug(slug).catch(() => undefined)

    if (!post) notFound()
        
    return post
}


export const findPostById = async (id: string) => {
    "use cache"
    cacheTag(`post-${id}`)
    cacheLife("hours")

    const post = await postRepository.findById(id).catch(() => undefined)

    if (!post) notFound()
        
    return post
}
