import { formatDate, formatDistanceTime } from "@/helpers/format-date";

type PostDateProps = {
    dateTime: string;
}

export async function PostDate({
    dateTime
}: PostDateProps) {
    return (
        <time 
            className="text-slate-600 text-sm/tight" 
            dateTime={formatDate(dateTime)} 
            title={await formatDistanceTime(dateTime)}
        >
            {formatDate(dateTime)}
        </time>
    )
}