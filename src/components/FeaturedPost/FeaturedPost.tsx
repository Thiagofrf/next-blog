import { PostHeading } from "../PostHeading/PostHeading";
import { PostImageCover } from "../PostImageCover/PostImageCover";
import { PostSummary } from "../PostSummary/PostSummary";

export function FeaturedPost() {
    const slug = 'any';
    const postLink = `/post/${slug}`

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group hover:cursor-pointer">
            <PostImageCover 
                href={postLink}
                src="/images/bryen_0.png"
                alt="Main Post Image"
                preload={true}
            />

            <PostSummary 
                title="Post Title"
                excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus similique, ex voluptates repellat rerum, soluta voluptas sequi magnam libero, molestiae quos quo possimus beatae aperiam iste aspernatur laborum magni."
                createdAt="11/03/2026 22:09"
                postHeading="h1"
                postLink={postLink}
            />
        </section>
    )
}