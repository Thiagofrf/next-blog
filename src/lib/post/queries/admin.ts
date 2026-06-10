import { postRepository } from "@/repositories/post"
import { cacheLife, cacheTag } from "next/cache";
import { notFound } from "next/navigation";

export const findPostByIdAdmin = async (id: string) => {
    "use cache"
    cacheTag(`post-${id}`)
    cacheLife("hours")

    const post = await postRepository.findById(id).catch(() => undefined)

    if (!post) notFound()
        
    return post
}

export const findAllPublishedPostsAdmin = async () => {
    "use cache"
    cacheTag('posts')
    cacheLife("hours")

    return await postRepository.findAllPublished()
}