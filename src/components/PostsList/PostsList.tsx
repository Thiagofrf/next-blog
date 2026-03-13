import { postRepository } from "@/repositories/post"
import Image from "next/image";

export default async function PostsList() {
    const posts = await postRepository.findAll();

    return (
        <div className="pt-8 grid grid-cols-3 gap-8">
            {posts.map((post) => {
                return (
                    <div key={`post_${post.id}`}>
                        <Image src={post.coverImageUrl} alt={post.content} width={1200} height={720}/>
                        <div className="flex flex-col">
                            <p>{post.author}</p>

                            <p>{post.title}</p>

                            <p>{post.excerpt}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}