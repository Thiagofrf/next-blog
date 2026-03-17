import { PostHeading } from "../PostHeading/PostHeading";
import { PostImageCover } from "../PostImageCover/PostImageCover";

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
            <div className="flex flex-col gap-3 sm:justify-center">
                <time className="text-slate-600 block text-sm/tight" dateTime="2026-03-11">11/03/2026 22:09</time>
                <PostHeading postUrl={postLink} as="h1">
                    Post Title
                </PostHeading>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus similique, ex voluptates repellat rerum, soluta voluptas sequi magnam libero, molestiae quos quo possimus beatae aperiam iste aspernatur laborum magni.
                </p>
            </div>
        </section>
    )
}