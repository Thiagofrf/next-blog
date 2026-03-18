import { formatDate, formatDistanceTime } from "@/helpers/format-date";
import { PostHeading } from "../PostHeading/PostHeading";
import { PostModel } from "@/models/post/post-model";

type PostSummaryProps = {
    postHeading: 'h1' | 'h2';
    postLink: string;
    createdAt: string;
    title: string;
    excerpt: string;
}

export function PostSummary({
    postHeading,
    postLink,
    createdAt,
    title,
    excerpt
}: PostSummaryProps) {
    return (
        <div className="flex flex-col gap-3 sm:justify-center">
            <time 
                className="text-slate-600 block text-sm/tight" 
                dateTime={formatDate(createdAt)} 
                title={formatDistanceTime(createdAt)}
            >
                {formatDate(createdAt)}
            </time>

            <PostHeading 
                postUrl={postLink} 
                as={postHeading}
            >
                {title}
            </PostHeading>
            
            <p>
                {excerpt}
            </p>
        </div>
    )
}