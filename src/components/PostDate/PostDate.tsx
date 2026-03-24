import { formatDate, formatDistanceTime } from "@/helpers/format-date";

type PostDateProps = {
    dateTime: string;
}

export function PostDate({
    dateTime
}: PostDateProps) {
    return (
        <time 
            className="text-slate-600 text-sm/tight" 
            dateTime={formatDate(dateTime)} 
            title={formatDistanceTime(dateTime)}
        >
            {formatDate(dateTime)}
        </time>
    )
}