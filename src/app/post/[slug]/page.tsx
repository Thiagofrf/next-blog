import { findPostBySlug } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type PostSlugPageProps = {
    params: Promise<{slug: string}>
}

export default async function PostSlugPage({ 
    params
}: PostSlugPageProps) {
    const { slug } = await params;
    const post = await findPostBySlug(slug)

    return (
        <h1 className="text-7xl font-bold py-16">
            {post?.title}
        </h1>
    )
}