import { findAllPublishedPostsAdmin } from "@/lib/post/queries/admin"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Post Admin'
}

export default async function AdminPostPage() {
    const posts = await findAllPublishedPostsAdmin();

    return (
        <div className="py-16 text-6xl">
            AdminPostPage
            <div>
                {posts.map(post => {
                    return (
                        <p key={post.id}>
                            {post.title}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}